import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import img from "../Resources/register.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  padding: 0 20px;
  width: 100%;
  text-align: center;
`;

const HideableImage = styled.img`
  max-width: 50%;
  max-height: 70%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const RegisterContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  max-width: 50%;
  text-align: center;
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

const LoginHere = styled.div`
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
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleRegister = () => {
    if (
      formData.username &&
      formData.email &&
      formData.password &&
      formData.agreeTerms
    ) {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      existingUsers.push(formData);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      alert("Registration successful!");
      navigate("/login");
    } else {
      alert("Please fill out all fields and agree to terms.");
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <HideableImage src={img} alt="register" />
        <RegisterContainer>
          <Title>Register</Title>
          <InputContainer>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter Username"
            />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              onChange={handleChange}
              placeholder="Enter Password"
            />
          </InputContainer>

          <CheckboxContainer>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />
              Agree to Terms and Conditions
            </CheckboxLabel>
          </CheckboxContainer>

          <SubmitButton type="submit" onClick={handleRegister}>
            Register
          </SubmitButton>
          <LoginHere>
            Don't Have an Account?{" "}
            <Link to="/login">
              <p style={{ color: "orange", display: "inline" }}>Login Here</p>
            </Link>
          </LoginHere>
        </RegisterContainer>
      </ContentWrapper>
    </Container>
  );
};

export default Register;
