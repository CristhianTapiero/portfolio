import Image from "next/image"
export const Intro = () =>{
    return(
        <div className="flex w-5/6 h-5/6 max-sm:w-9/12 flex-col justify-center items-center gap-y-6 py-4">
            <h1 className="text-5xl font-semibold text-center">Cristhian David Tapiero Padilla</h1>
            <h2 className="text-3xl font-semibold text-center">Frontend Developer</h2>
            <Image  src="/profile.png" alt="Profile pic" height={200} width={200} className="rounded-full shadow-lg shadow-brand-500 dark:shadow-brand-300"/>
            <p className="text-lg text-left">Hi! I&apos;m a front-end developer and a systems engineering student. <br/>
            I&apos;m passionate about technology and I love learning new things. <br/>
            I&apos;m currently learning new technologies such as cloud computing <br/>
            and I&apos;m looking for a job opportunity to apply my knowledge.
            </p>
        </div>
    )
}