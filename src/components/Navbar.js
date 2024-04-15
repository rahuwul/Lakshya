import React from "react";
import lakshya from "../assets/lakshya.png";
import  { useState } from 'react';
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Menubox from './Menubox'


export default function Navbar() {
  const [activeItem, setActiveItem] = useState(null);
  const handleItemClick = (id) => {
    setActiveItem(id);
    togglebtn();
  };
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu=()=>{
    setIsOpenMenu(!isOpenMenu);
  }
  const [isToggled, setIsToggled] = useState(false);
  const togglebtn=()=>{
    setIsToggled(!isToggled);
  }
  const [isLogin, setIsLogin] = useState(false);
  const toggleLogin=()=>{
   setIsLogin(!isLogin);
  }
  const [isRegister, setIsRegister] = useState(false);
  const toggleRegister=()=>{
   setIsRegister(!isRegister);
  }
  const navItems = [
    { link: "/", text: "HOME", id: 1 },
    { link: "/about", text: "ABOUT", id: 2 },
  ];
  
  return (
   
    <div  id='navbar' className="z-50">
      <header className="bg-[#262626]">
        <nav className="flex items-center justify-between p-6 h-16 lg:gap-13 lg:h-16 ">
          <a href="/">
            <img className="w-48" src={lakshya} alt="Lakshya Logo" />
          </a>
          <div className="absolute max-lg:bg-[#262626] w-full left-0 flex flex-col gap-6 items-center py-2 text-lg lg:static lg:flex-row lg:justify-between" style={{ top: isToggled ? "64px" : "-1000px" }}>
            <ul className="font-abc flex flex-col items-center gap-2 lg:flex-row lg:gap-10 lg:pl-96 ">
              {navItems.map((item) => (
                <Link to={item.link} key={item.id}><li
                  id="navbarli"
                  className={"text-[#DE81FF]  hover:text-[#f7dfff] hover:cursor-pointer transition ease-in	" +(activeItem === item.id ? 'text-[#f7dfff]' : '')}
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                >
                  {item.text}
                </li></Link>
              ))}
              <li id="navbtn" className="text-[#DE81FF] hover:text-[#f7dfff] hover:cursor-pointer transition ease-in	" ><button onClick={toggleLogin}>LOGIN</button></li>
              <li id="navbtn" className="text-[#DE81FF] hover:text-[#f7dfff] hover:cursor-pointer transition ease-in	" ><button onClick={toggleRegister}>REGISTER</button></li>
            </ul>
          </div>
          <div className="flex gap-3 lg:gap-0">
          <i className="fa-solid fa-user text-[#DE81FF] border cursor-pointer border-[#DE81FF] rounded-lg p-1" onClick={toggleMenu}></i>
          <i className="fa-solid fa-bars text-[#DE81FF] p-1 lg:hidden" onClick={togglebtn}></i>
          </div>
        </nav>
      </header>
      {isLogin && <Login onClose={toggleLogin} onClose2={toggleRegister}/>}
      {isRegister && <Register onClose={toggleRegister} onClose2={toggleLogin}/>}
      
      {isOpenMenu && < Menubox onClose={toggleMenu}/>}
      
    </div>
  );
}
