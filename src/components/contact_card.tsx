'use client'
import {motion} from "framer-motion"
export const ContactCard = ({icon, name, url} : {icon : React.ReactNode, name : string, url : string}) =>{
    const child = {
        hidden: { opacity: 0, y: -1 },
        visible: {
            y: 0,
            opacity: 1,
        }
    }
    return (
        <motion.a variants={child} href={url} target="_blank" className="flex w-60 items-center p-2 gap-3 rounded-xl justify-around border-2 text-lg text-brand-500 dark:text-brand-200 border-brand-500 dark:border-brand-200 dark:hover:bg-opacity-10 hover:bg-opacity-10 hover:bg-brand-400 dark:hover:bg-brand-200 transition-all">
            {icon}
            <h3>{name}</h3>
        </motion.a>
    )
}