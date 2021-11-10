import React from "react";
import Navbar from "./Navbar";

export default function AboutAuthor() {
  return (
    <div>
      <Navbar />
      <div className="text-start w-50 mx-auto">
        <h1>About Author</h1>
        <p>
          Nulla vitae iaculis libero, at maximus risus. Praesent ex diam,
          fermentum in malesuada nec, ornare non lorem. Sed mattis varius orci
          ut vestibulum. Sed tempus ullamcorper nunc nec egestas.
        </p>
      </div>
    </div>
  );
}
