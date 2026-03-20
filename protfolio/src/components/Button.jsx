import {motion} from 'motion/react'
function Button({button,y=-8,stiffness=100,damping=10,className}) {
    return (
        <motion.button className={className} initial={{y:y}} transition={{type:"spring",stiffness:stiffness,damping:damping,duration:0.5,mass:0.8}} whileTap={{y:8}} >
                {button}
        </motion.button>
    )
}

export default Button