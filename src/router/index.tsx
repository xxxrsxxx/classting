import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import NotFound from "@src/pages/NotFound";
import { Questions } from "@src/pages";

function Router() {
  return (
    <BrowserRouter>
      <Template>
        <Routes>
          <Route path="/" element={<Questions.StartPage />} />
          <Route path="/question" element={<Questions.QuestionPage />} />
          <Route path="/result" element={<Questions.ResultPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Template>
    </BrowserRouter>
  );
}

const Template = styled.div`
  height: 100vh;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Router;
