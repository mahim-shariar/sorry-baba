import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

Modal.setAppElement('#root');

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [response, setResponse] = useState(null);
  const [isAudioPlayed, setIsAudioPlayed] = useState(false);

  // Function to handle Yes button click and start the audio
  const handleYesClick = () => {
    setResponse('yes');
    setShowModal(true);
    const audio = document.getElementById('audio-player');
    audio.play(); // Start playing the audio when Yes is clicked
    setIsAudioPlayed(true);
  };

  // Function to handle No button click
  const handleNoClick = () => {
    setResponse('no');
  };

  return (
    <Container>
      <audio id="audio-player" loop>
        <source src="/your-music-file.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <Content>
        <Letter>
          <h2>Subject: Bow er Kache Maf Cao ar Abedon Potro!</h2>
          <p>Dear Bow Jaan,</p>
          <p>
            Bow Jaan, ami apnar ek matro jamai botka ekta jamai, apnar ai jamai
            er dara bhul hoiya gese apnar ai jamai ta onk bhul koira felay
            kalker jonno. Amare ekto maf kore apnar ai jamai take apnar kase
            rekhe den, please.
          </p>
          <p>
            Apner jamai er akul ebedon ai je apni please apnar jamai ek maf kore
            ekto ador kore sundor kore kohta bolar onorud roilo.
          </p>
          <p>Apner Prio:</p>
          <p>Botka Jamai</p>
        </Letter>

        <Buttons>
          <Button onClick={handleYesClick}>Yes</Button>
          <Button onClick={handleNoClick}>No</Button>
        </Buttons>
      </Content>

      {response === 'no' && (
        <NoResponseMessage>Amare Plese maf koira deo na</NoResponseMessage>
      )}

      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Forgiveness Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          },
          content: {
            width: '90%',
            maxWidth: '500px',
            margin: 'auto',
            padding: '40px',
            backgroundColor: '#f1e1d0',
            borderRadius: '15px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
            color: '#333',
            fontFamily: "'Dancing Script', cursive",
          },
        }}
      >
        <ModalContent>
          <Image src="/image.jpg" alt="Sorry" />
          <Message>
            <h3>Thank you for forgiving me...</h3>
            <p>
              I’m beyond grateful to have you in my life. I love you more than
              words can express.
            </p>
          </Message>
          <Button onClick={() => setShowModal(false)}>I Love You</Button>
        </ModalContent>
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  background: linear-gradient(to bottom right, #ff8a8a, #ffb3c1);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Dancing Script', cursive;
  overflow: auto; /* Allows scrolling */
  position: relative;
  animation: fadeIn 2s ease-in-out;
  padding: 0 20px; /* Prevents horizontal overflow */

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* Responsive adjustments for tablets and mobile devices */
  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const BackgroundMusic = styled.audio`
  display: none;
`;

const Content = styled.div`
  text-align: center;
  color: white;
  max-width: 600px;
  width: 100%;
  margin-bottom: 50px;
`;

const Letter = styled.div`
  margin-bottom: 20px;
  font-size: 24px;
  font-family: 'Dancing Script', cursive;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: left;
  line-height: 1.8;
  padding: 20px;
  border-left: 5px solid #ff4081;
  margin: 0 30px;
  white-space: pre-line;

  /* Responsive font size for mobile and tablets */
  @media (max-width: 768px) {
    font-size: 20px;
    padding: 15px;
    margin: 0 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 10px;
    margin: 0 15px;
  }
`;

const Buttons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.button`
  background-color: #ff4081;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 20px;
  margin: 10px;
  cursor: pointer;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: #f50057;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  /* Button size adjustments for smaller screens */
  @media (max-width: 768px) {
    font-size: 18px;
    padding: 12px 25px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 10px 20px;
  }
`;

const NoResponseMessage = styled.div`
  font-size: 22px;
  color: white;
  margin-top: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const ModalContent = styled.div`
  text-align: center;
  color: #333;
  padding: 40px;
  background-color: #f1e1d0;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 500px;
  max-width: 100%;
  animation: letterReveal 2s ease-in-out;

  @keyframes letterReveal {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Responsive modal for mobile screens */
  @media (max-width: 768px) {
    width: 90%;
    padding: 30px;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 20px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Message = styled.div`
  font-size: 22px;
  color: #ff4081;
  font-family: 'Dancing Script', cursive;
  margin-bottom: 20px;
  line-height: 1.6;
  text-align: left;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export default App;
