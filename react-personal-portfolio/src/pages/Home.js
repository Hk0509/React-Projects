import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Himanshu</h2>
        <div className="prompt">
          <p>A passionate coder and developer.</p>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, NPM, BootStrap,
              TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, MongoDB, SQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>C++, JavaScript, Java, Python, C#</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
