import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "75%" }} alt="cover" />
      <div className="my-2">
        <p>
          I'm not the kind of developer who will only tell you what you want to hear. I want to improve on the application, so I seek out what is working and what isn't. I build upon what works and awlays look for alternative solutions for what isn't.
          I love working on a team where we can build upon eachother's ideas and work towards common goals. Creating and building upon existing applications to make them the best they can possibly be is my passion and it shows in my work. I am comfortable
          with both the front-end as well as the back-end of applications and am constantly looking for new ways to grow and improve on my knowledge. 
        </p>
      </div>
    </section>
  );
}

export default About;
