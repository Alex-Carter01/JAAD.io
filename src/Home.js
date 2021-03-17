import "./styles/Pages.css";
// import {ReactComponent as Logo} from "./LOGO.png";


const Header = {
  backgroundColor: "#D1EBB2",
  padding: "25px 50px 20px",
  borderStyle: "solid",
  borderColor: "#2B430C",
  textAlign: "center",
  color: "#2B430C",
  fontSize: "22px",
  marginBottom: "20px"
  
}
const bodyStyle = {
  padding: "2px 20px",
  textAlign: "left",
  color: "black",
  fontSize: "100%"
}
const Home = () => {
  return (
    <div className="Home">
    {/* <Logo />  */}
      <h1 style={Header}>Why Us? </h1>
      <body style={bodyStyle}>Although many students choose to pursue higher education after graduating high school, approximately 35% do not. College is often marketed as a means for young people to gain access to well-paying or specialized jobs. Obviously, it is entirely possible for someone to earn a good income and attain career success without getting a college degree. However, there are limited resources available that shed light on careers paths available to people without degrees. For most non college students without personal connections or a family business, there is no obvious way to attain career and financial success. We propose a personalized career and informational platform that provides insight and guidance regarding career pathways that don’t require a degree, based on users’ interests, skills, and life goals. The platform will also include resources for learning about financial planning and connecting to existing employment opportunities.
 </body>
      <h2 style={Header}>Why You? </h2>
      <body style={bodyStyle}>Our target demographic is people who have chosen not to go to college or are exploring alternatives to going to college. These are people who may want to acquire certifications, become their own boss by learning how to be an entrepreneur, or just want to know more about what non-traditional career paths exist. As undergraduate students at one of the best public universities in the world, we don’t have to face the stigma that is often found with not pursuing a college degree and don’t have the need for a well-informed place to learn how to advance our careers. This is unlike the millions of Americans who could utilize this resource. Students who may not have a plan for college are often more likely to come from communities where career planning resources are not as readily available which leaves these people to figure it out alone. As future college graduates we have a lot of encouragement and resources like the ECRC to learn about potential careers, but adults who don’t want to pursue a degree might not have the same opportunities. We want to build an online tool that builds a community which motivates and enables people who are brave enough to pave their own career path, and gives them the knowledge and tools necessary to do so.  </body>
    </div>
  );
};

export default Home;
