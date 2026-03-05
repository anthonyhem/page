import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <h1>Anthony Has Left the Internet</h1>
      <p>Please enjoy this instead:</p>
      <video
        controls
        className="fun-video"
        src="video.mp4"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
