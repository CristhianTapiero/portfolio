'use client'
import {motion, AnimatePresence} from "framer-motion"
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from "react-icons/fi";

export const Toggler = () => {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if(theme === 'dark') {
            setDarkMode(true);
        }
    },[])
    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    },[darkMode])
    const animationvariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        }
    }
    return (
        <AnimatePresence>
            <motion.button aria-label="Theme-Toggler Button" variants={animationvariants} initial="hidden" animate="visible" className='z-50 w-10 h-10 flex justify-center items-center fixed right-4 top-4 border border-brand-500 text-brand-500 dark:text-brand-100 dark:border-brand-100 p-3 font-semibold text-6xl rounded-lg dark:hover:bg-brand-200 dark:hover:bg-opacity-10 hover:bg-brand-400 hover:bg-opacity-10 transition-colors'>
                {darkMode ? 
                <FiSun className="h-full w-full" onClick={() => setDarkMode(false)} /> 
                : 
                <FiMoon className="h-full w-full" onClick={() => setDarkMode(true)} />}
            </motion.button>
        </AnimatePresence>
    );
}