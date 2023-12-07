import "./About.scss";
import InfoCard from "./InfoCard/InfoCard";

const About = () => {
  return (
    <div className="about">
      <div className="name">
        <div>
          <h1 className="txt">AB</h1>
          <h1 className="txt">OU</h1>
        </div>

        <h1 className="txt lg">T</h1>

        <div className="me">ME</div>
      </div>

      <div className="info">
        <InfoCard
          sectionTitle=""
          sectionDetails={(
            <div>
              I'm Josue, a dynamic developer hailing from Mexico, I'm bringing my 25 years of life experience and intense curiosity to the tech industry, with a keen interest in PM, Frontend, Backend, Databases, and UX.
              <br /><br />
              💻 I'm currently channeling my creativity and coding skills into personal projects: <a href='https://softdone.com.mx/'>Softdone</a>. Each one a testament to my commitment and ability to manage and execute projects from conception to launch. For more details, please visit the Projects section.
              <br /><br />
              👽 I invite you to explore my GitHub for a deep dive into my programming prowess and project portfolio: <a href='https://github.com/josuegarza42'>Github</a>
              <br /><br />
              📲 If you wish to discuss opportunities, collaborations, or simply share ideas, please feel free to reach out to me at <a href="mailto:josuegarza.dev@gmail.com">josuegarza.dev@gmail.com</a> or send a direct message. I look forward to potential collaborations and contributing to our shared future in the tech industry.    </div>
          )}
        />



        <InfoCard
          sectionTitle="Education"
          sectionDetails="The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee."
        />


        {/* add skills */}
        <InfoCard
          sectionTitle="Skills"
          sectionDetails="Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends."
        />

      </div>
    </div>
  );
};

export default About;
