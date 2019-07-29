import Link from 'next/link';

const Header = () => (
    <div>
      <ul>
          <li>
            <Link href="/">
              home
            </Link>
          </li>
          <li>
            <Link href="/releases">
              releases
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link> 
          </li>
      </ul>
    </div>
  );
  
  export default Header;