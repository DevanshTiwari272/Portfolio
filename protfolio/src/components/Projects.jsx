import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, AnimatePresence, delay } from 'motion/react'
import { useInView } from "react-intersection-observer"
import "./Projects.css"

function Project({value,index,coordinate,hmm,imgs,setImgs}){
 const [current, setCurrent] = useState(false)
 const { projectImg, projectDescription, projectName, repository, liveLink,id } =value
 const { ref, inView } = useInView({ threshold: 0.7, triggerOnce: true })
 const refs = useRef(null)
  
 useEffect(
    () => { 
           if (inView) {
                
                hmm[index].start('destination')
               
                
          }}, [inView]
 )
 useEffect(() => { coordinate(refs,index); }, [])
  
    const parent = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } } 
    const variantParent = { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    const variantChild = { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' ,delay:0.8} } }
   
 return (
            <motion.div 
                 
                className='projectContainer' 
                variants={variantParent} 
                initial={'hidden'} 
                animate={"visible"} 
                
                 
                ref={ref}>
                 <AnimatePresence >   
                {inView&&(
                    
                        <motion.div  
                        
                            variants={variantChild} 
                            initial={'hidden'}
                            animate={"visible"}
                            
                            className='projectDetailDiv'
                        >
                            <h2 className='projectHeading'>{projectName}</h2>
                            <p className='projectDetail'>{projectDescription}</p>
                            <div className='linkDiv'>
                            <a href={liveLink}><button>Project</button></a>
                            <a href={repository}> repository</a>
                            </div>
                        </motion.div>
                        
                        )
                      
}
                  </AnimatePresence>
                    <div  className='projectImgContainer' ref={refs}>
{console.log(index)}
                        {inView 
                        ? <motion.img 
                               layoutId={id} 
                               
                                initial={{ opacity: 0,}} 
                                animate={{ opacity: 1, borderRadius: "5%" ,y:0}} 
                                transition={{ delay: 0.6, duration: 0.4, ease: "easeIn" }} 
                                  
                                className='projectImgShow' src={projectImg}
                          >
                          </motion.img> 
                        : <motion.img 
                                
                                layoutId={id} 
                                className='projectImgHidden' 
                                initial={{ opacity: 0, y: 20 }} 
                                animate={{ opacity: 0, y: 0 }} 
                                src={projectImg}>
                            </motion.img>}

                    </div>
                </motion.div>
        )
}

function ProjectSection() {
    
    const projectDetail = [{ projectName: "JuiceLandingPage", projectDescription: 'hello this is an landing page for the juice app', liveLink: "hilarious-jalebi-a0a5ed.netlify.app", repository: 'agagaga', projectImg: "public/Screenshot 2026-02-13 164801.png" ,id:12}, { projectName: "JuiceLandingPage", projectDescription: 'hello this is an landing page for the juice app', liveLink: "hilarious-jalebi-a0a5ed.netlify.app", repository: 'agagaga', projectImg: "public/Screenshot 2026-02-13 164801.png" ,id:13}, { projectName: "JuiceLandingPage", projectDescription: 'hello this is an landing page for the juice app', liveLink: "hilarious-jalebi-a0a5ed.netlify.app", repository: 'agagaga', projectImg: "public/Screenshot 2026-02-13 164801.png",id:14 }]
 
    const [coordinateState, setCoordinateState] = useState([{x:0,y:0}])
    useEffect(()=>{},[coordinateState])
    const aniArr=[useAnimation(),useAnimation(),useAnimation()]
    const refIcon = useRef([])
   
    const [imgs,setImgs] = useState([{img:"public/Screenshot 2026-02-13 164801.png",id:12},{img:"public/Screenshot 2026-02-13 164801.png",id:13}, {img:"public/Screenshot 2026-02-13 164801.png",id:14}])
   
    function coordinate(refs,index) {
        const refElem = refs.current.getBoundingClientRect()
        
        const refIconElem = refIcon.current[index].getBoundingClientRect()
        console.log(refIconElem,refIcon.current[index])
        console.log(index)
        const y = refElem.top + refElem.height / 2
        const x = refElem.left + refElem.width / 2
       
        setCoordinateState((prev)=>{return [...prev,{x:x - refIconElem.left,y: y - refIconElem.top}]})
        console.log(x - refIconElem.left, y - refIconElem.top)
         
    }
   
    


    

    return (
        <section className="projectSection">
            <h1 className="projectSectionHeading">Projects</h1>
            <div className="projectIconDiv">
                <AnimatePresence>
                {imgs.map((value,index) => {  
                    const {id,img}=value;
                    const displacement = { destination: { x: [0, -80,(coordinateState.length<imgs.length)? 0 :coordinateState[index+1].x], y: [0, (coordinateState.length<imgs.length)?0 :coordinateState[index+1].y], transition: { time: [0, 0.3, 0.6, 1], duration: 0.6 } }, normal: { x: 0, y: 0 } }
                   
                    return (
                        <motion.img 
                            key={index}
                            data-img={id}
                            animate={aniArr[index]} 
                            initial={'normal'} 
                            variants={displacement} 
                            ref={(ele)=>{refIcon.current[index]=ele}} className="projectIcon" 
                            src={img} alt="" 
                        />) })}
                        </AnimatePresence>
            </div>
            <div className='projectContainerDiv'>
               {projectDetail.map((value, index) => {
                 
                return <Project key={index} value={value} index={index} setImgs={setImgs}   coordinate={coordinate} imgs={imgs}  hmm={aniArr}></Project>
            })}

            </div>
        </section>
    )
}
export default ProjectSection
/*(inView)?<motion.div style={{backgroundImage:`url("public/Screenshot 2026-02-13 164801.png")`} } ref={ref}className='showProject' layoutId='12' variants={parent} initial={"hidden"} whileInView={"visible"}></motion.div> :<motion.div layoutId='12' variants={parent} initial={"hidden"} whileInView={"visible"}
                    viewport={{amount:0.5}} className="prototype" style={{backgroundImage:`url("public/Screenshot 2026-02-13 164801.png")`} } ref={ref}>
                        <div className="prototypeDetail" ref={refs} style={{width:"100%",height:"100%"}}></div>
                </motion.div> */