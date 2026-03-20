import {motion} from "motion/react"
import Skills from "./Skills"

import "./About.css"
function About(){
    return (
    <motion.section className="aboutMeSection" style={{width:"100%",height:"100%"}}
    >
    <motion.h1 initial={{y:20 ,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.8 ,ease:"easeOut",delay:0.1}} className="aboutMeHeading" viewport={{once:true,amount:0.5}}>About Me</motion.h1>
    <motion.p initial={{y:20 ,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.8 ,ease:"easeOut",delay:0.2}} className="aboutMeText" viewport={{once:true,amount:0.1}}>I’m Devansh Tiwari, a Frontend Developer passionate about building modern, responsive web applications. I work primarily with React and focus on creating clean, interactive interfaces with smooth animations and performance optimization.

I build using HTML, CSS, JavaScript, React, and Tailwind CSS, leveraging tools like Git, Vite, and modern animation libraries to deliver production-ready frontend solutions.

I continuously improve my skills by building real-world projects and refining my understanding of scalable frontend architecture. </motion.p>
<Skills></Skills>
    </motion.section>
    )
}

export default About