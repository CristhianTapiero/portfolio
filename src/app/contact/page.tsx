'use client'
import {motion, AnimatePresence} from "framer-motion"
import { ContactCard } from "@/components/contact_card"
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
const Contact = () =>{
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
    return(
        <AnimatePresence>
            <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col justify-center items-center gap-5 w-full h-[calc(100%-7rem)] max-sm:h-[calc(100%-6rem)] max-sm:top-[2.5rem] relative top-[3.5rem]">
                <h1 className="text-5xl font-semibold max-sm:text-3xl">Contact me</h1>
                <div className="grid grid-cols-2 grid-flow-row gap-x-10 gap-y-6 max-sm:p-4 max-sm:place-items-center max-sm:w-10/12 max-sm:grid-cols-1 p-16 border-2 border-brand-500 rounded-xl dark:border-brand-300">
                    <ContactCard icon={<FaInstagram className="text-3xl" />} name="@tapieropadilla" url="https://www.instagram.com/tapieropadilla/"/>
                    <ContactCard icon={<FaXTwitter className="text-3xl" />} name="@tapiero_padilla" url="https://twitter.com/tapiero_padilla"/>
                    <ContactCard icon={<FaWhatsapp className="text-3xl" />} name="+57 3153884361" url="https://api.whatsapp.com/send?phone=3153884361"/>
                    <ContactCard icon={<FaGithub className="text-3xl" />} name="Cristhian-Tapiero" url="https://github.com/Cristhian-Tapiero"/>
                    <ContactCard icon={<FaGithub className="text-3xl" />} name="CristhianTapiero" url="https://github.com/CristhianTapiero"/>
                    <ContactCard icon={<MdOutlineEmail className="text-3xl"/>} name="cristapi56@gmail.com" url="https://mail.google.com/mail/?view=cm&fs=1&to=cristapi56@gmail.com"/>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
export default Contact