import Capabilities from "../components/about/Capabilities";
import Leads from "../components/about/Leads";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import Timeline from "../components/about/Timeline";
import "./about.css";

const About = () => {
  return (
    <main id="About">
        <Navigation/>
        <section className="sec-1">
          <div className="container">
            <div className="left">
              <p className="big"> About LSPR Nigeria</p>
            </div>
            <div className="right">
              <p>LSPR Nigeria is a franchise of the prestigious London School of Public Relations. Much like the parent body, LSPR Nigeria continues to uphold the sound level of training and tutoring clients to become professionals in the public relations field.</p>
            </div>
          </div>
        </section>
        <section className="sec-x">
          <section className="image1"></section>
          <section className="image2"></section>
        </section>
        <section className="sec-2">
          <div className="container">
            <h2>Story of LSPR; The Timeline</h2>
            <div className="grid">
              <Timeline year="1992" text="Mr John Dalton, founder and director of LSPR, ended his editor role at a medical journal, Current Opinion in Gastroenterology, to buy a publishing school. When the need for PR for his school arrived, he enrolled in some PR courses and realized a PR training institution market gap."/>
              <Timeline year="2008" text="LSPR developed and introduced hybrid training that combined elements of management consultancy with more traditional aspects of training. An approach that is very popular with clients and is one of LSPR’s unique value propositions."/>
              <Timeline year="1993" text="LSPR was born to breach the gap and provide quality and practical communications and branding knowledge. John launched the LSPR Diploma as an umbrella education for all PR professionals."/>
              <Timeline year="2015" text="With a presence in over 15 countries, LSPR launched the program Development of Communication Skills."/>
              <Timeline year="1998" text="LSPR became the first training organisation in the UK to formally teach reputation management to PR and communications professionals. LSPR started the franchise with its diplomas and soon became a leader in the field of PR education."/>
              <Timeline year="2021" text="LSPR Nigeria franchise was launched, delivering the same signature PR and reputation management course through fully virtual classes."/>
            </div>
            <div className="stats">
              <div className="stat"> <p>30+</p> <p>Years of Excellence</p> </div>
              <div className="stat"> <p>15+</p> <p>Countries</p> </div>
              <div className="stat"> <p>9000+</p> <p>Alumini</p> </div>
            </div>
          </div>
        </section>
        <section className="sec-3">
          <div className="container">
            <h2>Our Capabilities</h2>
            <div className="grid">
              <Capabilities image="" head="Strategic Thinking" text="The ability to think strategically to drive organisational development is now more important than ever. Disruption and automation are shaping the new ..." />
              <Capabilities image="" head="Crisis Management" text="LSPR has advised and trained many multinationals on risk, issue and crisis management. We focus on the importance of these as part of pre-crisis planning..." />
              <Capabilities image="" head="Digital Influence" text="Digital and social communications is the new normal. Many organisations still struggle with reach and generating the right level of brand engagement. Understanding what..."/>
              <Capabilities image="" head="Public Relation and Reputation" text="We develop our clients' core PR and reputational abilities to help them remain competitive. We are good at explaining and guiding them to the best PR tool..." />
              <Capabilities image="" head="Rapid Learning" text="We know that it is important to optimize our client's time during training. The structure and delivery of our courses allow fast learning. Each course is interactive, practical..." />
              <Capabilities image="" head="Hybrid Training" text="LSPR pioneered hybrid training by combining practical elements of management consultancy with more traditional training elements. This form of training creates a dynamic..." />
            </div>
          </div>
        </section>
        <section className="sec-4">
          <div className="container">
            <h2>Meet The LSPR Leads</h2>
            <div className="hold">
              <div className="image"></div>
              <Leads
                head="John Dalton"
                role="CEO of LSPR Global"
                first="John Dalton BSC, CBIOL, MSB, FITOL is a recognised authority on reputation management, leadership and impression management. He has further specialisms in risk, issue and crisis management."
                second="With a background as a biochemist and Chartered Biologist, John's rigorous approach has attracted many to his evidence-based, holistic approach to public relations, communications and reputation management."
              />
            </div>
            <div className="hold">
              <Leads
                head="Susan Croft"
                role="Co-Founder of LSPR"
                first="Susan is a co-founder and Executive Director of Skill-Pill Mobile Learning, a start-up company based in London and offering mobile learning and information solutions to businesses."
                second="Susan is responsible for product development and international marketing for the company. Susan is a member of the Advisory Board of the London School of Public Relations (LSPR) and has helped shape the structure and focus of the school's Diploma programmes as well as train on the LSPR ITOL-Approved Diploma course."
              />
              <div className="image"></div>
            </div>
          </div>
        </section>
        <section className="sec-5">
          <div className="container">
            <div className="left">
              <h2>Set your PR career on an upward trajectory</h2>
              <button>Explore Courses</button>
            </div>
            <div className="image"></div>
          </div>
        </section>
        <Footer/>
    </main>
  )
}

export default About