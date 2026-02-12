import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
  useSpring,
} from "motion/react";


import "../App.css";

function Hero() {
  const boxX = useMotionValue(0);
  const boxY = useMotionValue(0);
  const xSmooth = useSpring(boxX, { stiffness: 250, damping: 20 });
  const ySmooth = useSpring(boxY, { stiffness: 250, damping: 20 });

  const shadow = useTransform(
    [xSmooth, ySmooth],
    ([lx, ly]) => `${lx}px ${ly}px 50px rgba(0, 0, 0, 0.6)`,
  );
  function mouseMove(e) {
    const refElem = ref.current.getBoundingClientRect();
    const y = Math.floor(refElem.bottom - refElem.height / 2);

    const x = refElem.right - refElem.width / 2;

    boxX.set((e.clientX - x) / 2.2);
    boxY.set((e.clientY - y) / 2.5);

    /* if(e.clientX-x<80&&e.clientX-x>-80){ boxXValue=e.clientX-x}
   let boxYValue
   if(e.clientY-y<80&&e.clientY-y>-80){
    boxYValue=e.clientY-y
   }*/
  }
  const ref = useRef(null);
  return (
    <AnimatePresence>
     < motion.section 
     className="heroSection"
     initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5,ease:"easeOut"}}>
        <button className="menuButton">Menu</button>
      <motion.div className="myNameDiv">
        {" "}
        <h1 className="hi">Hi I'm</h1>{" "}
        <motion.h1 key={'h1'}
          className="name"
          initial={{ width: 0 }}
          animate={{ width: "fit-content" }}
          transition={{ width: { duration: 0.5, ease: "easeIn" ,delay:0.4} }}
        >
          Devansh
        </motion.h1>
        
        <motion.span key={'ani'}
          className="ani"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ repeat: 0, duration: 1.4, ease: "easeOut" }}
        ></motion.span>
      </motion.div>
       <motion.div key={'lp'}
        className="headTitleDiv"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" ,delay:0.9}}
      >
        <h1 className="headTitle">Frontend Devloper</h1>
       
      </motion.div>
      
        
      <motion.div
        key="yo"
        onMouseOut={() => {
          boxX.set(0);
          boxY.set(0);
        }}
      /*  onMouseMove={mouseMove}*/
        style={{/* boxShadow: shadow, */borderRadius: "40%" }}
        className="div"
        ref={ref}
      >
        
        <img loading="lazy" style={{scale:1}}
          className="portfolioImg"
          src="../../public/myPhoto1.png"
          alt="my img"
        />
       
      </motion.div>
      <div className="discriptionDiv">
     <p className="discription">I’m a Frontend Developer focused on building responsive, interactive, and performance-driven web interfaces using React and modern frontend technologies.

Currently, I’m actively improving my animation-driven UI skills, refining motion design principles, and building real-world projects that strengthen my understanding of frontend architecture and practical problem-solving.</p>
</div>
<div className="viewProjectButtonDiv">
<button className="viewProjectButton">View project</button>
</div>
</motion.section>
    </AnimatePresence>
  );
}

export default Hero;
