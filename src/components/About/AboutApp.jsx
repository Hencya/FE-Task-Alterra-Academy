import React from "react";
import Navbar from "./Navbar";

export default function AboutApp() {
  return (
    <div>
      <Navbar />
      <div className="text-start w-50 mx-auto">
        <h1>About App</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          interdum sem justo, et rhoncus quam consectetur in. Nunc fringilla,
          tellus eget vehicula eleifend, nibh elit accumsan mi, sit amet
          lobortis sapien odio ac dolor.
        </p>
      </div>
    </div>
  );
}
