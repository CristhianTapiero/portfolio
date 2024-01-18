'use client'
import {motion, AnimatePresence} from "framer-motion"
import { Intro } from "@/components/intro"
const App = () => {
    const container = {
        hidden: { opacity: 0, scale: 0, y: -1 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: .3,
                staggerChildren: .2
            }
        }
    }
    return (
        <AnimatePresence>
            <motion.div 
            className="flex flex-col justify-center items-center gap-2 w-full h-[calc(100%-7rem)] max-sm:h-[calc(100%-6rem)] max-sm:top-[2.5rem] relative top-[3.5rem]"
            variants={container}
            initial="hidden"
            animate="visible"
            >
                <h1 className="text-5xl max-sm:text-2xl py-3 font-semibold text-center">Cristhian David Tapiero Padilla</h1>
                <Intro/>
            </motion.div>
        </AnimatePresence>
    )
}
export default App
