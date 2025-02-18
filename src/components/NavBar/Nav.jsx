import { NavLink } from "react-router-dom";
import img from "../../../images/logo3.webp";

export default function Nav() {
  return (
    <>
    <div className="flex justify-between lg:item-center flex-col lg:flex-row text-green-600 bg-black fixed w-full">
    <div className="flex flex-col lg:flex-row justify-center ">
        <img src={img} alt="logo" width={40} style={{ margin: "10px" }} />
        <ul className="flex flex-col lg:flex-row">
          <li className="p-3 ">
            <NavLink to={""}>Home</NavLink>
          </li>
          <li className="p-3">
            <NavLink to={"News"}>News</NavLink>
          </li>
          <li className="p-3">
            <NavLink to={"contact"}>contact us</NavLink>
          </li>
          <li className="p-3">
            <NavLink to={"About"}>about us</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col lg:flex-row justify-center">
            <li className="p-3"><NavLink to={"login"}>Login</NavLink></li>
            <li className="p-3"><NavLink to={"register"}>Register</NavLink></li>

        </ul>
      </div>
    </div>
      
    </>
  );
}
