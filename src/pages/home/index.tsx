import React from "react";
import { Link } from "react-router-dom";
import { Container, Jumbotron } from "reactstrap";
import logo from './kelly.jpg';

const Home = () => {
  return (
    <Container>
      <Jumbotron>
        <h1>Welcome to Kelly's graduation party!</h1>
        <img src={logo} alt="Kelly" height="75%" width="75%"/>
        <br />
        <Link className="btn btn-primary" to="/trivia">
          See how well you know Kelly!
        </Link>
      </Jumbotron>
    </Container>
  );
};

export default Home;
