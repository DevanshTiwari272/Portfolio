import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, AnimatePresence } from 'motion/react'
import { useInView } from "react-intersection-observer"
import "./Projects.css"

function Project({value,index,coordinate,current,setCurrent,hmm}){
 const { projectImg, projectDescription, projectName, repository, liveLink } =value
 const { ref, inView } = useInView({ threshold: 0.7, triggerOnce: true })
  const refs = useRef(null)
  
  useEffect(() => { console.log(inView); if (inView) { hmm[index].start('destination') } }, [inView])
    useEffect(() => { coordinate(refs) }, [])
  
    const parent = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } } 
    const variantParent = { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    const variantChild = { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } } }
   
 return (
            <motion.div key={index} className='projectContainer' variants={variantParent} initial={'hidden'} animate={"visible"} onClick={() => { (!(current !== "project1") || current) ? setCurrent(false) : setCurrent(`project${index}`) }} whileHover={"visible"} ref={ref}>
                    {current === `project${index}` ? (
                        <motion.div variants={variantChild} initial={'hidden'} animate={"visible"} className='projectDetailDiv'>
                            <h2 className='projectHeading'></h2>
                            <p className='projectDetail'></p>
                            <a href=""><button></button></a>
                            <a href=""> repository</a>
                        </motion.div>) :
                     <motion.div variants={variantChild} initial={'hidden'} animate={"hidden"} className='projectDetailDiv'>
                        <h2 className='projectHeading'>{projectName}</h2>
                        <p className='projectDetail'>{projectDescription}</p>
                        <a href={liveLink}><button></button></a>
                        <a href={repository}> repository</a>
                    </motion.div>}
                    <div className='projectImgContainer' ref={refs}>

                        {inView ? <motion.img key={"4" + index} initial={{ opacity: 0, borderRadius: '50%' }} animate={{ opacity: 1, borderRadius: '5%' }} transition={{ delay: 0.6, duration: 0.3, ease: "easeOut" }} layoutId={index} className='projectImgShow' src={projectImg}></motion.img> : <motion.img layoutId={index} className='projectImgHidden' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 0, y: 0 }} src={projectImg}></motion.img>}

                    </div>
                </motion.div>
        )
}

function ProjectSection() {
 const [current, setCurrent] = useState(false)
   const projectDetail = [{ projectName: "JuiceLandingPage", projectDescription: 'hello this is an landing page for the juice app', liveLink: "hilarious-jalebi-a0a5ed.netlify.app", repository: 'agagaga', projectImg: "public/Screenshot 2026-02-13 164801.png" }, { projectName: "JuiceLandingPage", projectDescription: 'hello this is an landing page for the juice app', liveLink: "hilarious-jalebi-a0a5ed.netlify.app", repository: 'agagaga', projectImg: "public/Screenshot 2026-02-13 164801.png" }, { projectName: "JuiceLandingPage", projectDescription: 'hello this is an landing page for the juice app', liveLink: "hilarious-jalebi-a0a5ed.netlify.app", repository: 'agagaga', projectImg: "public/Screenshot 2026-02-13 164801.png" }]
 
    const [coordinateState, setCoordinateState] = useState([{x:0,y:0}])
    useEffect(()=>{},[coordinateState])
    const aniArr=[useAnimation(),useAnimation(),useAnimation()]
    const refIcon = useRef(null)
   
    const imgs = ["public/Screenshot 2026-02-13 164801.png", "public/Screenshot 2026-02-13 164801.png", "public/Screenshot 2026-02-13 164801.png"]
   
    function coordinate(refs) {
        const refElem = refs.current.getBoundingClientRect()
        const refIconElem = refIcon.current.getBoundingClientRect()
        console.log(refElem)
        const y = refElem.top + refElem.height / 2
        const x = refElem.left + refElem.width / 2
        console.log(x, y)
        setCoordinateState((prev)=>{return [...prev,{x:x - refIconElem.left,y: y - refIconElem.top}]})
        console.log(x - refIconElem.left, y - refIconElem.top)


    }
   
    


    

    return (
        <section className="projectSection">
            <h1 className="projectSectionHeading">Projects</h1>
            <div className="projectIconDiv">
           {imgs.map((value,index) => {  const displacement = { destination: { x: [0, -80,(coordinateState.length<imgs.length)?0 :coordinateState[index+1].x], y: [0, (coordinateState.length<imgs.length)?0 :coordinateState[index+1].y], transition: { time: [0, 0.3, 0.6, 1], duration: 0.4 } }, normal: { x: 0, y: 0 } }
             return <motion.img animate={aniArr[index]} initial={'normal'} variants={displacement} ref={refIcon} className="projectIcon" src={value} alt="" /> })}
            </div>
            <div className='projectContainerDiv'>
               {projectDetail.map((value, index) => {
                 
                return <Project value={value} index={index} current={current} setCurrent={setCurrent} coordinate={coordinate} hmm={aniArr}></Project>
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