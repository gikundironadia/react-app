import React from "react";
import  {cars1} from "../images/";

function BlogFunc() {
  return (
    <div style={{ backgroundImage: `url(${cars1})`, backgroundRepeat: 'no-repeat ' }} className="h-screen w-full">
    
      <h1>Blog page</h1>
      <p>This page exhibits a lot of things  that you can do with React.</p>
    </div>
  );
}

export default BlogFunc;
