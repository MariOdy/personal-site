import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";

import styled from "styled-components";
import { About } from "components/About";
import { Header } from "components/LandingHeader/Header";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Roman Zhuravlov - Bio</title>
      </Head>
      <Header />
      <Container>
        <About />
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 1.25em;
`;
export default AboutPage;
