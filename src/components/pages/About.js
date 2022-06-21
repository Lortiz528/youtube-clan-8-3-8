export default function About() {
  return (
    <div className="aboutpage">
      <div>
        <article>
          Welcome to our YouTube Clone. Enables a search feature to find any
          video within the youtube data API. Once a video is selected, you may
          watch and leave a comment. Thank you!
        </article>
      </div>
      <br />

      <h2>About Us</h2>
      <hr></hr>
      <div>
        <div>
          <h3>Luis Ortiz</h3>
          <img
            className="profile"
            src="https://avatars.githubusercontent.com/u/96318347?v=4"
            alt="Luis"
          />
          <p>
            I am an asipiring full stack developer with a background in
            Logistics. I have a passion for wildlife, space exploration, and
            baseball. When im not staring up at the sky, watching wildlife docu
            series, or playing baseball, I practice coding and Hope to gain a
            position as a developer with a company actively trying to better our
            world.
          </p>
          <a href="https://github.com/Lortiz528">Luis' GitHub</a>
          <br></br>
          <a href="https://www.linkedin.com/in/lortiz528/">Luis' LinkedIn</a>
        </div>
        <br></br>

        <div>
          <h3>Jossy Pascasio</h3>
          <img
            className="profile"
            src="https://avatars.githubusercontent.com/u/96319104?v=4"
            alt="Josie"
          />
          <p>
            I am a Full Stack Software Engineer in the NYC with a Bachelor/'s
            Degree and 6+ years professional experience in Business
            Administration. I am a naturally curious person which makes me want
            to always learn new things, a problem-solver who questions
            everything, and a hard worker who doesn't take life too seriously
            and enjoys the little small things in life like pizza.🍕
          </p>
          <a href="https://github.com/named-josie">Jossy's GitHub</a>
          <br></br>
          <a href="https://www.linkedin.com/in/jossy-p-b1496922a/">
            Jossy's' LinkedIn
          </a>
        </div>
        {/* <div>
          <h3>Stephanie Frias</h3>
          <img className="profile"
            src="https://avatars.githubusercontent.com/u/96318625?v=4"
            alt="Stephanie"
          />
          <p>Stephanie's about paragraph</p>
          <a href="https://github.com/stephfrias">Stephanie's GitHub</a>
        </div> */}
      </div>
    </div>
  );
}
