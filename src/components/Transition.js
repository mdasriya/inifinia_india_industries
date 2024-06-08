import {motion} from "framer-motion"

const Transition = (OgComponent) => {
return () => (
    <>
    <OgComponent />
    <motion.div
    className="slide-in overflow-hidden"
    initial={{
        scaleY:0,
        zIndex:999999,
     
    }}
    animate={{scaleY:0,zIndex:999999}}
    exit={{scaleY:1}}
    transition={{duration:1, ease:[0.22,1,0.36,1]}}
    
    />
 <motion.div
    className="slide-out overflow-hidden"
    initial={{
        scaleY:1,
        zIndex:999999
    }}
    animate={{scaleY:0,    zIndex:999999}}
    exit={{scaleY:0}}
    transition={{duration:1, ease:[0.22,1,0.36,1]}}
    />
    </>
)
} 

export default Transition;