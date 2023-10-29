import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Content = styled.div`
  text-align: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #0077cc;
  color: #fff;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0055aa;
  }
`;

const Home = ({ log, setLog }) => {
  const handleLogout = () => {
    setLog(false);
  };

  return (
    <Container>
      <Content>
        <Title>Welcome to Our Website</Title>
        {log ? (
          <div>
            <p>Hello, User!</p>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <div>
            <p>You are not logged in</p>
            <Button>
              <Link
                to={"/login"}
                style={{ color: "white", textDecoration: "none" }}
              >
                Login
              </Link>
            </Button>
            <Button>
              <Link
                to={"/register"}
                style={{ color: "white", textDecoration: "none" }}
              >
                Register
              </Link>
            </Button>
          </div>
        )}
      </Content>
    </Container>
  );
};

export default Home;
