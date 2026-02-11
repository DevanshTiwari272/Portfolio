import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
  useSpring,
} from "motion/react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
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
      <motion.div className="myNameDiv">
        {" "}
        <h2>Hi I'm</h2>{" "}
        <motion.h2 key={'h1'}
          className="name"
          initial={{ width: 0 }}
          animate={{ width: "fit-content" }}
          transition={{ width: { duration: 0.5, ease: "easeIn" } }}
        >
          Devansh
        </motion.h2>
        
        <motion.span key={'ani'}
          className="ani"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ repeat: 0, duration: 1, ease: "easeInOut" }}
        ></motion.span>
      </motion.div>
       <motion.div key={'lp'}
        className="headTitleDiv"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" ,delay:0.7}}
      >
        <h1 className="headTitle">Frontend Devloper</h1>
       
      </motion.div>
      
        
      <motion.div
        key="yo"
        onMouseOut={() => {
          boxX.set(0);
          boxY.set(0);
        }}
        onMouseMove={mouseMove}
        style={{ boxShadow: shadow, borderRadius: "40%" }}
        className="div"
        ref={ref}
      >
        <img
          className="protfolioImg"
          src="/public/wp4092550-removebg-preview.png"
          alt="my img"
        />
      </motion.div>
     <p className="discription">I’m a frontend developer focused on building responsive and interactive web interfaces using React and modern tools.
I care about performance, clean architecture, and smooth user experiences.
Currently working on improving animation-driven UI and real-world project quality.</p>
<div className="viewProjectButtonDiv">
<button className="viewProjectButton">View project</button>
</div>
    </AnimatePresence>
  );
}

export default App;
