import groupPhoto from './images/groupPhoto.jpeg';
import bhavya from "./images/bhavya.jpg";
import priyanka from "./images/priyanka.jpg";
import nelly from "./images/nelly.jpg";
import mauritz from "./images/mauritz.jpg";
import Card from './card';
import './About.css';


const About = () => {
  const info = [
    {
      name: "Bhavya",
      designation: "Founder",
      image: bhavya,
      linkedin: "https://www.linkedin.com/in/bhavyagovind",
      about:
      "I first started working as an iOS developer in 2014 and am currently upskilling through the software engineering immersive course at General Assembly. My skills/Interests include but are not limited to: HTML, CSS, Javascript, Ruby on Rails, PostgreSQL,React JS, Swift, and Objective C.My goal is to find work in a challenging environment where I can use my skills and knowledge to cater to businesses and their requirements. If you’re interested in my profile, please get in touch!"
    },
    {
      name: "Priyanka",
      designation: "Co-founder",
      image: priyanka,
      linkedin: "https://www.linkedin.com/in/patelpriyanka2512/",
      about:
      "I am a software developer with experience in the field of Information Technology with expertise in different phases of design, development and deployment of web applications using core Java. After serving as a Clinical Trial Technician in the public health field for the past couple of years, I am refocusing my career path towards software engineering.I wasn’t satisfied with only being involved in the backend aspect of software development, and wanted a deeper involvement in building out applications with visual effects and front-end development skills. Additionally, I am a self motivated person who is passionate about solving real world problems using advanced technologies."

    },
    {
      name: "Nelly",
      designation: "Co-Founder",
      image: nelly,
      linkedin: "https://www.linkedin.com/in/nelly-dai/",
      about:
      "I am a software engineering student from General Assembly with a background in both Civil & Structural Engineering. My previous career as an engineer brought me close to my true passion for software engineering. I have been touched programming a little when I was in the Uni, and I recently rekindled this passion.I have a very positive attitude to solve the problems and take on the challenges. I seek a role as a software engineer at a company where I can learn, grow, and continue to master the craft."
    },
    {
      name: "Mauritz",
      designation: "Co-Founder",
      image: mauritz,
      linkedin: "https://www.linkedin.com/in/mauritzerick/",
      about:
      "I am a highly driven Software Engineer with an industry experience in IT support & administration, applications support and service delivery.Given my extensive background in tech, the move to software engineering was the natural next step for me as I now get to create the technology rather than just manage it. What I love most about this field is how it allows me to be creative and make everything from websites to applications.My goal is to join an innovative and agile team where I can continue to expand on my newly acquired full-stack software engineering skills."
    }];
  return(

    <div class="mainAbout">
    <div class="headerBack">

      <div class="header">
        <h1 class="title" >About Us</h1>
        <img class="groupPhoto" src={groupPhoto} alt="Group photo"/>
      </div>
    </div>
      <div class="bnpmInfo">
      <h3>BNPM news is an Australia based NEWS broadcast website provides different categories of NEWS information like General, Sports, Business, etc. BNPM News also allows the user to opt-in for email subscription for monthly NEWS letters. Along with NEWS, this website provides information about weather and crypto currency.
      </h3>
      <h3>
      BNPM News is integrated with different open source APIs to retrieve the NEWS, weather and crypto currency details. For crypto currency lovers, this website will be handy as it has features like live rates, and graphs.
      </h3>
      <h3>
      For more information about the website and technical details, please reach out to founders as mentioned below.
      </h3>
      </div>
      <hr/>
      <div>
        <h1 class="heading">Board of Directors </h1>
        {
          info.map((person) =>
            <Card name={person.name}
                  designation={person.designation}
                  image={person.image}
                  linkedin={person.linkedin}
                  about={person.about}/>
          )
        }
    </div>
    </div>
  )
}
export default About;
