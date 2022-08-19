import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { fontColor } from "@src/constants";
import { Helmet } from "react-helmet";

const StartPage = () => {
  return (
    <>
      <Helmet>
        <title>CLASSTING</title>
      </Helmet>
      <Title>CLASSTING</Title>
      <Link to="/question">Question Start</Link>
    </>
  );
};

const Title = styled.h1`
  font-size: 36px;
  color: ${fontColor.basic};
`;
const Link = styled(RouterLink)`
  color: ${fontColor.basic};
  padding: 14px;
  margin-bottom: 20px;
  border: 1px solid #fff;
`;

export default StartPage;
