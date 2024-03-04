import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="flex  bg-[#334155] shadow-md rounded-lg h-12">
        <h1 class="text-[#f3f4f6] mx-10 my-2 "> SHEYA</h1>
        <ul class="navbar-nav ml-auto flex space-x-4 mx-5 my-2">
          <li class="text-[#f3f4f6]">
            <Link to="/">Home</Link>
          </li>

          <li class="text-[#f3f4f6]">
            <Link to="/blog">Blog</Link>{" "}
          </li>

          <li class="text-[#f3f4f6]">
            <Link to="/services">services</Link>
          </li>
          <li class="text-[#f3f4f6]">
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
