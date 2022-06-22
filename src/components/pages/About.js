export default function About() {
  const year = new Date().getFullYear();
  return (
    <div className="aboutpage">
      <div>
        <article>
          Welcome to our YouTube Clone. It Enables a search feature to find any
          video within the youtube data api. Once the video is selected, you may
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
            baseball. In my free time, I am usually exploring new innovative
            ways to better my code.
          </p>
          <div className="links">
            <a className="github" href="https://github.com/Lortiz528">
              GitHub
            </a>

            <p>
              <a href="https://www.buymeacoffee.com/lortiztech">
                <img
                  align="center"
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                  height="50"
                  width="210"
                  alt="lortiztech"
                />
              </a>
            </p>
            <a href="https://linkedin.com/in/lortiz528" target="blank">
              <img
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                alt="lortiz528"
                height="30"
                width="40"
              />
            </a>
          </div>
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
          <div className="links">
            <a className="github" href="https://github.com/named-josie">
              GitHub
            </a>

            <p>
              <a href="https://www.buymeacoffee.com/namedjosie">
                <img
                  align="center"
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                  height="50"
                  width="210"
                  alt="namedjosie"
                />
              </a>
            </p>
            <a href="https://www.linkedin.com/in/joss-pascasio/" target="blank">
              <img
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                alt="https://www.linkedin.com/in/joss-pascasio/"
                height="30"
                width="40"
              />
            </a>
          </div>
          <br></br>
          <hr></hr>
          <div className="year">{year}</div>
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
