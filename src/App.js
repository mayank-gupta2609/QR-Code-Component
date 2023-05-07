import './App.css';
import styled from 'styled-components';
import qrcode from './qrcode.png'
function App() {
  return (
    <Container >
      <Body>
        <Img src={qrcode} alt="" />
          <Content>
            Improve your front-end skills by building projects
          </Content>
          <Paragraph>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </Paragraph>
      </Body>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width:100vw;
  height:100vh;
  background-color:#D5E1EF;
  display:flex;
  justify-content:center;
  align-items:center;
   
`;

const Body = styled.div`
    background-color:white;
    width:360px;
    height:570px;
    border-radius:20px; 
    font-family: 'Outfit', sans-serif;
    display:flex;
    justify-content:center; 
    flex-direction:column;
    align-items:center;
`;


const Img = styled.img`
    border-radius:10px;
    height:330px;
    width:330px; 
    margin-top:15px;

`;

const Content = styled.div`
    font-weight:700;
    font-size: 29px;
    margin:20px;
    text-align:center;
`;

const Paragraph = styled.div`
   text-align:center;
   font-weight:400;
   font-size:16px;
   padding:0px 50px 20px 50px;
   margin-bottom:30px;
`;