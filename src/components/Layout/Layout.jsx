import { Outlet } from "react-router-dom";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Nav/>
      <Outlet></Outlet>
      <Footer/>
    </>
  );
}
