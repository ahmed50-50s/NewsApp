import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // أيقونات القائمة
import img from "../../../images/logo3.webp";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="bg-gray-800 text-green-600 fixed w-full z-10 shadow-md">
      <div className="flex justify-between items-center p-4">
        {/* ✅ الشعار */}
        <div className="flex items-center">
          <img src={img} alt="logo" width={40} className="mr-2" />
        </div>

        {/* ✅ زر التبديل (Toggle) للهواتف */}
        <button
          className="text-green-600 text-2xl md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* ✅ القائمة الأساسية (مخفية على الهواتف) */}
        <ul className="hidden md:flex gap-4">
          <li className="p-3">
            <NavLink to={""} className="hover:text-green-400">Home</NavLink>
          </li>
          <li className="p-3">
            <NavLink to={"News"} className="hover:text-green-400">News</NavLink>
          </li>
          <li className="p-3">
            <NavLink to={"contact"} className="hover:text-green-400">Contact Us</NavLink>
          </li>
          <li className="p-3">
            <NavLink to={"About"} className="hover:text-green-400">About Us</NavLink>
          </li>
        </ul>

        {/* ✅ أزرار تسجيل الدخول والتسجيل (مخفية على الهواتف) */}
        <div className="hidden md:flex gap-4">
          <NavLink to={"login"} className="p-3 hover:text-green-400">Login</NavLink>
          <NavLink to={"register"} className="p-3 hover:text-green-400">Register</NavLink>
        </div>
      </div>

      {/* ✅ القائمة المنسدلة عند فتح التوجل على الهواتف */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-center py-4">
          <ul className="flex flex-col gap-3">
            <li><NavLink to={""} onClick={() => setIsOpen(false)}>Home</NavLink></li>
            <li><NavLink to={"News"} onClick={() => setIsOpen(false)}>News</NavLink></li>
            <li><NavLink to={"contact"} onClick={() => setIsOpen(false)}>Contact Us</NavLink></li>
            <li><NavLink to={"About"} onClick={() => setIsOpen(false)}>About Us</NavLink></li>
            <li><NavLink to={"login"} onClick={() => setIsOpen(false)}>Login</NavLink></li>
            <li><NavLink to={"register"} onClick={() => setIsOpen(false)}>Register</NavLink></li>
          </ul>
        </div>
      )}
    </nav>
    <br />
    </>
  );
}
