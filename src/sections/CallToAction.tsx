"use client"
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
    const [isHovered, setIsHovered] = useState(false);
    const naiRef = useRef<AnimationPlaybackControls>();
    const [scop,animate]=useAnimate();
    useEffect(()=>{
       naiRef.current= animate(scop.current,{x:'-50%'},{duration:30,ease:'linear',repeat:Infinity});
    },[]);
    useEffect(() => {
        if(naiRef.current) {
            if(isHovered) {
                naiRef.current.speed = 0.5;
            }else {
                naiRef.current.speed = 1;
            }
        }

    }, [isHovered]);
    return <section className='py-24'>
       <div className='overflow-x-clip p-4 flex '>
           <motion.div
               onMouseEnter={()=>setIsHovered(true)}
               onMouseLeave={()=>setIsHovered(false)}
               ref={scop}
               className='flex flex-none group gap-16 pr-16 text-7xl md:text-8xl font-medium'>
               {Array.from({length:10}).map((_,i)=>(
                   <div key={i} className='flex items-center gap-16'>
                       <span className='text-lime-400 text-7xl'>&#10038;</span>
                       <span className='group-hover:text-lime-400'>Try it for free</span>
                   </div>
               ))}
           </motion.div>
       </div>
    </section>;
}