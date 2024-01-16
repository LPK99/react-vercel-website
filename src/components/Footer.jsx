import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"


const Footer = () => {
  const [navIsShown, setnavIsShown] = useState(false);
  const toggleNavIsShown = () => {
    setnavIsShown((navIsShown) => !navIsShown);
  };
  return (
    <footer className='bg-gray-200 py-8'>
      <div className='container px-4 sm:flex justify-between items-center'>
        <h1 className='px-2'>Nancy Holiday</h1>
        <ul className='flex flex-wrap'>
          <li className='p-0 px-2'>
          <CustomLink to="/">Home</CustomLink>
          </li>
          <li className='p-0 px-2'>
          <CustomLink to="/destination">Destinations</CustomLink>
          </li>
          <li className='p-0 px-2'>
          <CustomLink to="/about">About</CustomLink>
          </li>
          <li className='p-0 px-2'>
          <CustomLink to="/contact">Contact</CustomLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Footer;
