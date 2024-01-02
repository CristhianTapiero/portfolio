import { Carrousel } from "@/components/carrousel"
import { Intro } from "@/components/intro"
const App = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5 w-full h-[calc(100%-7rem)] relative top-[3.5rem]">
            <Intro/>
        </div>
    )
}
export default App