import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";
import config from "../constants/config";

const Container = styled.div`
  height: ${config.headerSize};
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.secondaryColor};
  background-color: ${props => props.theme.headerColor};
`;
const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 30px;
  z-index: 20;
  @media only screen and (max-width: 600px) {
    display: ${props => (props.hidden ? "none" : "flex")};
    position: absolute;
    flex-direction: column;
    background-color: ${props => props.theme.headerColor};
    right: -20px;
    top: ${config.headerSize};
    transition: opacity 0.5s ease-in-out;
  }
`;
const Logo = styled.a`
  margin-left: 30px;
  cursor: pointer;
`;

const A = styled.a`
  margin: 10px 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  color: ${props => props.theme.secondaryColor};
  &:after {
    content: "";
    position: absolute;
    left: 20%;
    display: inline-block;
    height: 1em;
    border-bottom: 2px solid;
    margin-top: 3px;
    transition: width 0.25s;
    width: ${props => (props.selected ? "60%" : "0")};
  }
  &:hover,
  &:focus,
  &:active {
    &:after {
      width: 60%;
    }
  }
`;
const Img = styled.img`
  height: 25px;
`;

const BarsMenu = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
    font-size: 30px;
    margin-right: 50px;
  }
`;

const Header = () => {
  const { pathname } = useRouter();
  const navigationList = ["releases", "about"];
  const [hidden, setHidden] = useState(true);

  return (
    <Container>
      <Link href="/">
        <Logo>
          <Img src="static/Logo.svg" alt="logo" />
        </Logo>
      </Link>
      <BarsMenu onClick={() => setHidden(hidden ? false : true)}>
        <FontAwesomeIcon icon={faBars} />
      </BarsMenu>
      <Navigation hidden={hidden}>
        <Link href="/">
          <A selected={pathname === "/"}>Home</A>
        </Link>
        {navigationList.map(navigationItem => (
          <Link
            key={navigationItem}
            href={"/" + navigationItem}
            onClick={() => setHidden(hidden ? false : true)}
          >
            <A href={"/" + navigationItem} selected={pathname === "/" + navigationItem}>{navigationItem}</A>
          </Link>
        ))}
      </Navigation>
    </Container>
  );
};

export default Header;
