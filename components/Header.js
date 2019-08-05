import Link from '../components/Link';
import { useRouter } from 'next/router';

import styled from 'styled-components'
import config from '../constants/config'

const Container = styled.div`
  height: ${config.headerSize};
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #F2F2F2;
  background-color: #090909;
`
const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 30px;
`
const Logo = styled.a`
  margin-left: 30px;
`

const A = styled.a`
  margin: 10px 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 20%;
    display: inline-block;
    height: 1em;
    border-bottom: 2px solid;
    margin-top: 3px;
    transition: width .25s;
    width: ${props => props.selected ? '60%' : '0'}
  }
  &:hover,
  &:focus,
  &:active {
   &:after {
      width: 60%;
   }
  }
`
const Img = styled.img`    
  height: 25px;
`

const Header = () => {
  const { pathname } = useRouter();
  const navigationList = ['releases', 'about'];

  return (<Container>
      <Logo>
        <Link href="/">
          <a>
            <Img src="static/Logo.svg" alt="logo"/>
          </a>
        </Link>
      </Logo>
      <Navigation>
        <Link href="/">
          <A selected={pathname === '/'}>Home</A>
        </Link>
        {navigationList.map(navigationItem => (<Link key={navigationItem} href={'/' + navigationItem}>
          <A selected={pathname === '/' + navigationItem}>{navigationItem}</A>
        </Link>))}
      </Navigation>
    </Container>)
};
  
  export default Header;