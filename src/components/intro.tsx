'use client'
import {motion, AnimatePresence} from "framer-motion"
import Image from "next/image"
export const Intro = () =>{
    const child = {
        hidden: { opacity: 0, scale: 0, y: -1 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.2
            }
        }
    }
    const imgAnimation = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: .6,
                staggerChildren: 0.5
            }
        }
    }
    return(
        <AnimatePresence>
            <motion.div 
            className="flex w-5/6 h-5/6 max-sm:w-9/12 flex-col justify-center items-center gap-y-6 py-4 text-lg"
            variants={child}
            >
                <h2 className="text-3xl font-semibold text-center">Frontend Developer</h2>
                <motion.div
                variants={imgAnimation}
                >
                    <Image fetchPriority="high" priority src="/profileC.webp" alt="Profile pic" height={200} width={200} className="rounded-full shadow-lg shadow-brand-500 dark:shadow-brand-300"/>
                </motion.div>
                <div className="w-full">
                    <p>Hi! I&apos;m a front-end developer and a systems engineering student. </p>
                    <p>I&apos;m passionate about technology and I love learning new things. </p>
                    <p>I&apos;m currently learning new technologies such as cloud computing </p>
                    <p>and I&apos;m looking for a job opportunity to apply my knowledge.</p>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}