"use client"

import Button from "@/components/Button";
import designone from '@/assets/images/design-example-1.png'
import designtwo from '@/assets/images/design-example-2.png'
import Image from "next/image";
import Pointer from "@/components/pointer";
import cursorU from '@/assets/images/cursor-you.svg'

import {motion,useAnimate} from "framer-motion";
import { useEffect } from "react";


export default function Hero() {
    const [leftDesignscop,leftDesignanimate]=useAnimate();
    const [leftPointerscop,leftPointerimate]=useAnimate();
    const [rightDesignscop,rightDesignanimate]=useAnimate();
    const [rightPointerscop,rightPointerimate]=useAnimate();


    useEffect(()=>{
        leftDesignanimate([
            [leftDesignscop.current,{opacity:1},{duration:0.5}],
            [leftDesignscop.current,{y:0,x:0},{duration:0.5}],
        ]);
        leftPointerimate([
            [leftPointerscop.current,{opacity:1},{duration:0.5}],
            [leftPointerscop.current,{y:0,x:-100},{duration:0.5}],
            [leftPointerscop.current,{x:0,y:[0,16,0]},{duration:0.5,ease:'easeInOut'}]
        ]);
        rightDesignanimate([
            [rightDesignscop.current,{opacity:1},{duration:0.5,delay:1.5}],
            [rightDesignscop.current,{y:0,x:0},{duration:0.5}],

        ]);
        rightPointerimate([
            [rightPointerscop.current,{opacity:1},{duration:0.5,delay:1.5}],
            [rightPointerscop.current,{y:0,x:175},{duration:0.5}],
            [rightPointerscop.current,{x:0,y:[0,20,0]},{duration:0.5,ease:'easeInOut'}]

        ])
    },[])

    return <section className='py-24 overflow-x-clip' style={{
        cursor:`url(${cursorU.src}), auto`,
    }}>
        <div className='container relative'>
            <motion.div ref={leftDesignscop} drag initial={{opacity:0,y:100,x:-100}} className='absolute -left-32 top-16 hidden lg:block'>
                <Image src={designone} alt={'design example one image'} draggable={false}/>
            </motion.div>
            <motion.div ref={rightDesignscop} drag className='absolute -right-64 -top-16 hidden lg:block' initial={{opacity:0,x:100,y:100}}>
                <Image src={designtwo} alt={'design example two image'} draggable={false}/>
            </motion.div>
            <motion.div ref={leftPointerscop} initial={{opacity:0,y:100,x:-200}} className='absolute left-56 top-96 hidden lg:block'>
                <Pointer name='Andrea'/>
            </motion.div>
            <motion.div ref={rightPointerscop} className='absolute right-80 -top-4 hidden lg:block' initial={{opacity:0,x:275,y:100}}>
                <Pointer name='Bryan' color='red'/>
            </motion.div>
            <div className='flex justify-center'>
                <div className='inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold'>✨$7.5M seed round raised</div>
            </div>
            <h1 className='text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 '>Impactful design, created effortlessly</h1>
            <p className='text-center text-xl max-w-2xl mx-auto text-white/50 mt-8'>Design tools shouldn&apos;t slow you down. Layers combines powerful features with an intuitive interface that keeps you in your creative flow</p>
            <form className='flex border max-w-lg border-white/15 rounded-full p-2 mt-8 mx-auto'>
                <input type='email' placeholder='Enter your email' className='bg-transparent px-4 md:flex-1 w-full'/>
                <Button variant='primary' type="submit" className='whitespace-nowrap' size='sm'>Submit</Button>
            </form>
        </div>
    </section>;
}
