import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import img from "../Resources/login.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  width: 0;
  display: none;

  @media (min-width: 769px) {
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;

  @media (min-width: 769px) {
    width: 45%;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  color: #c5c6d0;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const RegisterHere = styled.div`
  padding-top: 10px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0055aa;
  }
`;

const Login = ({ setLog }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    console.log(storedUsers);
    if (storedUsers) {
      const parsedUsers = JSON.parse(storedUsers);
      setUsersData(parsedUsers);
    }
  }, []);
  console.log(usersData);

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (usersData) {
      const user = usersData?.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        alert("Login successful");
        setLog(true);
        navigate("/");
      } else {
        alert("Invalid email or password");
      }
    } else {
      alert("No users registered yet");
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <ImageContainer>
          <Image src={img} alt="login" />
        </ImageContainer>
        <FormContainer>
          <Title>Login</Title>
          <form onSubmit={handleLogin}>
            <InputContainer>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Enter Email"
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Enter Password"
              />
            </InputContainer>
            <CheckboxContainer>
              <CheckboxLabel>
                <Checkbox type="checkbox" id="rememberMe" />
                Remember Me
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox type="checkbox" id="agreeTerms" />
                Agree to Terms and Conditions
              </CheckboxLabel>
            </CheckboxContainer>
            <SubmitButton type="submit">Login</SubmitButton>
          </form>
          <RegisterHere>
            Don't Have an Account?{" "}
            <Link to="/register">
              <p style={{ color: "orange", display: "inline" }}>
                Register Here
              </p>
            </Link>
          </RegisterHere>
        </FormContainer>
      </ContentWrapper>
    </Container>
  );
};

export default Login;
