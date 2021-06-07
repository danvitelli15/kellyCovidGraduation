import React from "react";
import { Link } from "react-router-dom";
import { Container, Jumbotron } from "reactstrap";

const Home = () => {
  return (
    <Container>
      <Jumbotron>
        <h1>Welcome to Kelly Zschokke's graduation party!</h1>
        <Link className="btn btn-primary" to="/trivia">
          See how well you know kelly
        </Link>
      </Jumbotron>
    </Container>
  );
};

export default Home;
