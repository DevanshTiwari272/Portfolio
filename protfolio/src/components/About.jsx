import {motion} from "motion/react"
import Skills from "./Skills"

import "./About.css"
function About(){
    return (
    <motion.section initial={{y:20 ,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.6 ,ease:"easeInOut"}} className="aboutMeSection" style={{width:"100vw",height:"100vh"}}
    viewport={{once:true,amount:0.05}}>
    <h1 className="aboutMeHeading">About Me</h1>
    <p className="aboutMeText">I’m Devansh Tiwari, a Frontend Developer passionate about building modern, responsive web applications. I work primarily with React and focus on creating clean, interactive interfaces with smooth animations and performance optimization.

I build using HTML, CSS, JavaScript, React, and Tailwind CSS, leveraging tools like Git, Vite, and modern animation libraries to deliver production-ready frontend solutions.

I continuously improve my skills by building real-world projects and refining my understanding of scalable frontend architecture. </p>
<Skills></Skills>
    </motion.section>
    )
}

export default About