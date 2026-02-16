
    import {motion } from "motion/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";
import "./Skill.css"
function Skills() {
    const icon=[  <FaHtml5 style={{height:"100%",width:"100%"}}></FaHtml5>,
  <FaCss3Alt style={{height:"100%",width:"100%"}} />,
  <FaJs style={{height:"100%",width:"100%"}} />,
  <FaReact style={{height:"100%",width:"100%"}} />,
  <FaGitAlt style={{height:"100%",width:"100%"}} />,
  <FaGithub style={{height:"100%",width:"100%"}} />
]
const containerVar={hidden:{opacity:0,}, visible:{opacity:1,transition:{duration:1,staggerChildren:0.2}}}
const childVar={hidden:{opacity:0,x:100}, visible:{opacity:1,x:0,transition:{type:'spring' ,duration:1,stiffness:200,ease:"easeIn"}}}
    return( 
        <>
            <section className="skillsSection">
                <div style={{borderTop:'solid',borderWidth:"1px",display:"flex",alignItems:"center",justifyContent:"center"}}><h2 style={{marginTop:"-14px",backgroundColor:"white",width:"fit-content",textAlign:"center"}}>Skills</h2></div>
                
              <motion.div className="iconDiv" variants={containerVar}initial="hidden" 
              whileInView="visible"
             viewport={{amount:0.3,once:true}}
              >
{icon.map((Value,index)=>{return <motion.div className="icon" variants={childVar} key={index} >{Value}</motion.div>})}
              </motion.div>

            </section>
        </>
    )
}

export default Skills