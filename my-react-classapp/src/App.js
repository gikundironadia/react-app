import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import ServicesFunc from "./components/services";
import BlogFunc from "./components/blog";
import Layout from "./components/layout";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<ServicesFunc />} />
          <Route path="/blog" element={<BlogFunc />} />
          <Route path="/contact" element={<Contact />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
