'use client'
import {motion, AnimatePresence} from "framer-motion"
import { Carrousel, LeftCard, RightCard } from "@/components/carrousel"
const Skills = () =>{
    const container = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: .3,
                staggerChildren: .2
            }
        }
    }
    return(
        <AnimatePresence>
            <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col justify-center items-center gap-5 w-full h-[calc(100%-7rem)] max-sm:h[calc(100%-6rem)] relative top-[3.5rem] max-sm:top-[2.5rem]">
                <h1 className="text-5xl font-semibold max-sm:text-2xl">My skills</h1>
                <p className="text-lg max-sm:text-base max-sm:w-10/12 w-3/6">My skill set is mainly based in JavaScript for web development, front end languajes and Java / Python for backend</p>
                <Carrousel />
                <LeftCard title="SCRUM" description="I know agile methodologies, but mainly in scrum."/>
                <RightCard title="Self Learning" description="I have enough discipline and self-control to learn on my own and quickly."/>
                <LeftCard title="SQL & NoSQL" description="I have knowledge of databases. Sufficient to make efficient and well-structured queries."/>

            </motion.div>
        </AnimatePresence>
    )
}
export default Skills