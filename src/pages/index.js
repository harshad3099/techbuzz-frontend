import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to TechBuzz</h1>
      <nav>
        <ul>
          <li>
            <Link href="/register" legacyBehavior>
              <a>Register</a>
            </Link>
          </li>
          <li>
            <Link href="/login" legacyBehavior>
              <a>Login</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
