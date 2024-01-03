'use client'
import {motion, AnimatePresence} from "framer-motion"
import { GoHome, GoCode, GoPeople, GoBook } from "react-icons/go";
import { usePathname, useRouter } from "next/navigation";
export const Menu = () =>{
    const path = usePathname()
    const router = useRouter()
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
    return(
        <AnimatePresence>
            <motion.div variants={animationvariants} initial="hidden" animate="visible" className="w-3/6 max-sm:w-11/12 max-lg:w-8/12 self-center h-10 bg-brand-500 dark:bg-brand-100 rounded-lg fixed bottom-4 z-50 text-3xl flex justify-evenly font-semibold items-center">
                <GoHome className={`hover:text-brand-100 hover:cursor-pointer hover:-translate-y-[2px] hover:border-b-2 dark:hover:border-brand-500 border-brand-200 transition-transform ${path == '/' ? 'text-brand-200 dark:text-brand-500 border-b-2 border-brand-200 dark:border-brand-500' : 'text-brand-300 dark:text-brand-300'}`} onClick={() => {router.push('/')}}/>
                <GoCode className={`hover:text-brand-100 hover:cursor-pointer  hover:-translate-y-[2px] hover:border-b-2 dark:hover:border-brand-500 border-brand-200 transition-transform ${path == '/skills' ? 'text-brand-200 dark:text-brand-500 border-b-2 border-brand-200 dark:border-brand-500' : 'text-brand-300 dark:text-brand-300'}`} onClick={() => {router.push('/skills')}}/>
                <GoBook className={`hover:text-brand-100 hover:cursor-pointer hover:-translate-y-[2px] hover:border-b-2 dark:hover:border-brand-500 border-brand-200 transition-transform ${path == '/projects' ? 'text-brand-200 dark:text-brand-500 border-b-2 border-brand-200 dark:border-brand-500' : 'text-brand-300 dark:text-brand-300'}`} onClick={() => {router.push('/projects')}}/>
                <GoPeople className={`hover:text-brand-100 hover:cursor-pointer hover:-translate-y-[2px] hover:border-b-2 dark:hover:border-brand-500 border-brand-200 transition-transform ${path == '/contact' ? 'text-brand-200 dark:text-brand-500 border-b-2 border-brand-200 dark:border-brand-500' : 'text-brand-300 dark:text-brand-300'}`} onClick={() => {router.push('/contact')}}/>
            </motion.div>
        </AnimatePresence>
    )
}