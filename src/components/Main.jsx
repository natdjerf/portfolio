import React from "react";
import { render } from "react-dom";
import styled from "styled-components";

import Github from "../../assets/svg/github.svg";
import Instagram from "../../assets/svg/Instagram.svg";
import LinkedIn from "../../assets/svg/LinkedIn.svg";
import Seltzer from "../../assets/svg/Seltzer.svg";
import Laptop from "../../assets/svg/Laptop.svg";
import Mountains from "../../assets/svg/Mountains.svg";
import Sneaks from "../../assets/svg/Sneaks.svg";

const Nav = styled.nav``;
const NavItem = styled.li``;

const Container = styled.div`
  background: linear-gradient(
    to bottom,
    #1e69de 0%,
    #3690f0 32%,
    #3690f0 41%,
    #3690f0 48%,
    #3690f0 55%,
    #3690f0 65%,
    #54a3ee 75%
  );
  height: 100vh;
`;

const Content = styled.div``;

const element = document.getElementById("react-app");

const Main = () => (
  <React.Fragment>
    <Container>
      <Seltzer />
      <Laptop />
      <Nav>
        <ol>
          <NavItem>
            <a href="https://github.com/natdjerf" target="GitHub">
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/nataliedjerf/"
              target="LinkedIn"
            >
              <LinkedIn />
            </a>
            <a href="https://www.instagram.com/nadjerf/" target="Instagram">
              <Instagram />
            </a>
          </NavItem>
        </ol>
      </Nav>
      <Content>
        oh hay! I&#39;m Natalie and I&#39;m a software developer at&nbsp;
        <a
          href="https://www.harrys.com/en/us"
          target="_blank"
          rel="noopener noreferrer"
        >
          harrys.com
        </a>
        .When I&#39;m not working, you&#39;ll find me off on an outdoor
        adventure, dining with family and friends, or at the movies.
      </Content>
      <Mountains />
      <Sneaks />
    </Container>
  </React.Fragment>
);

render(<Main />, element);

export default Main;
