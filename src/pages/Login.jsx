import { GoogleLogin } from "@react-oauth/google";
import {
  LoginButton,
  HeaderLogo,
  CenterDiv,
  BlockDiv, LoginText,
  Row,Column,BigImage, Container
} from "../components/Styles";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import bigImage from "../assets/bigimage.jpg";
import { useAuth } from '../components/AuthContext';

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  function redirectToDashboard() {
    navigate("/dashboard");
  }
  return (
    <Container>
    <Column sm={12} md={6} lg={5} xl={5} >
        <BigImage src={bigImage}></BigImage>
</Column>
 <Column sm={12} md={6} lg={6} xl={6}>
 <CenterDiv>
      {/* <BlockDiv>  */}
      <HeaderLogo src={logo}></HeaderLogo>
      {/* </BlockDiv> */}
        <Row><LoginText>Only the best always</LoginText></Row>
      <LoginButton>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            const { clientId, credential } = credentialResponse;
            login(clientId, credential);
            redirectToDashboard();
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />{" "}
      </LoginButton>
    </CenterDiv></Column>
    </Container>

   
  );
}
