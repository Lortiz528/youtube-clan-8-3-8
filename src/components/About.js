import React from 'react';
import './about.css';

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <strong>React YouTube Project</strong>
        </h1>
        <div>
          Welcome to our youtube clone app. It lets you search for YouTube
          videos, then choose a video from a list to watch.
        </div>
        <br />
        <br />
        <h2>About Us</h2>
        <div>
          <div>
            <h3>Luis Ortiz</h3>
            <img
              src="https://avatars.githubusercontent.com/u/96318347?v=4"
              alt="Luis"
            />
            <p>
              I am an asipiring full stack developer with a passion for
              wildlife, space exploration, and baseball. When im not staring up
              at the sky, watching wildlife docu series, or playing baseball, I
              practice coding and Hope to gain a position as a developer with a
              company actively trying to better our world.
            </p>
            <a href="https://github.com/Lortiz528">Luis's GitHub</a>
          </div>

          <div>
            <h3>Josie Piscasio</h3>
            <img
              src="https://avatars.githubusercontent.com/u/96319104?v=4"
              alt="Josie"
            />
            <p>Josie about paragraph</p>
            <a href="https://github.com/named-josie">Josies's GitHub</a>
          </div>
          <div>
            <h3>Stephanie Frias</h3>
            <img
              src="https://avatars.githubusercontent.com/u/96318625?v=4"
              alt="Stephanie"
            />
            <p>Stephanie's about paragraph</p>
            <a href="https://github.com/stephfrias">Stephanie's GitHub</a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
