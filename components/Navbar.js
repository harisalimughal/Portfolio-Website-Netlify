// components/Navbar.js
import Link from 'next/link';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', color: '#fff' }}>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li style={{ marginRight: '20px' }}>
          <Link href="/">Home</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link href="/about">About</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link href="/projects">Projects</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link href="/services">Services</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link href="/blog">Blog</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link href="/contactus">Contact</Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
