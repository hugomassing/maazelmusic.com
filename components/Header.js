import Link from 'next/link';
import { useRouter } from 'next/router';

import styled from 'styled-components'

const Container = styled.div`
  height: 40px;
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
`
const A = styled.a`
  margin: 10px 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
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
  width: 100px;
`

const Header = () => {
  const { pathname } = useRouter();
  const navigationList = ['releases', 'contact'];

  return (<Container>
      <Link href="/">
        <A>
          <Img src="/static/Logo.svg" alt="logo"/>
        </A>
      </Link>
      <Navigation>
        <Link href="/">
          <A selected={pathname === '/'}>Home</A>
        </Link>
        {navigationList.map(navigationItem => (<Link href={'/' + navigationItem}>
          <A selected={pathname === '/' + navigationItem}>{navigationItem}</A>
        </Link>))}
      </Navigation>
    </Container>)
};
  
  export default Header;