import * as React from "react";
import styled from "styled-components";

import { BubblesBackground } from "components";
import { Buttons, HeroImage, Title } from "components/Landing";

interface LandingProps {}

export const Landing: React.FC<LandingProps> = () => (
  <Container id="Landing">
    <BubblesBackground />
    <div className="wrapper">
      <div className="content">
        <Title />
        <p data-font-size="Focus">
          I’m a 20 years old React / Typescript Front-end developer and UI / UX designer from
          Ukraine
        </p>
        <Buttons />
      </div>
      <HeroImage />
    </div>
  </Container>
);

const Container = styled.div`
  background: linear-gradient(108.43deg, #f9f8fd 0%, #f1edff 100%), #f9f8fd;
  height: 50vh;
  min-height: 400px;
  overflow: hidden;
  position: relative;

  & > .wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 100%;
    margin: 0 auto;
    max-width: 1440px;
    padding: 24px 0;
    width: 90%;

    & > .content {
      z-index: 1;

      & p {
        margin: 32px 0;
        max-width: 480px;
      }
    }

    @media (max-width: 720px) {
      & > .content > p {
        margin-bottom: 48px;
      }
    }
  }
`;