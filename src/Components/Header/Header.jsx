import Link from "./Link/Link";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const Header = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/dashboard", name: "Dashboard" },
    { id: 5, path: "/profile", name: "Profile" },
  ];

  return (
    <nav className="text-black p-6 bg-yellow-200">
      {/* <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div> */}
      <div  className='md:hidden text-2xl' onClick={() => setOpen(!open)}>
        {
            open == true ? <IoMdCloseCircle />: <AiOutlineMenuUnfold className="text-2xl" />
        } 
      {/*  By default MENU icon থাকবে small device এ , menu icon এ click করলে close icon দেখাবে  */}

      </div>
      <ul className={` duration-300 px-6 md:flex gap-6px absolute md:static
        ${open? 'top-16' : '-top-60'}
        bg-yellow-200`}>
            {/* absolute -> ছোট device এর ক্ষেত্রে fixed position ছাড়াই দেখাবে , আর dollar এর condition টা উপর থেকে effect এর মতো আনার জন্য*/}
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
