import React from "react";
import ReactDOM from "react-dom/client";

const heading=(
    <h1 className="head" tabIndex="5">This is sumit kumar from NHCE bangalore
    </h1>
)
//const heading =React.createElement("h1",{id:"Heading"},"HELLO CODERS!!");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
