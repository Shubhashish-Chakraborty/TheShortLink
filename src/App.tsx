import { Navbar } from "./components/Navbar";
import { Button } from "./components/ui/Button";
import { Github } from "./icons/Github";

export default function App() {
    return (
        <div className="h-screen text-custom-6 bg-custom-1">
            <Navbar/>
            

            <div className="md:text-4xl text-xl cursor-progress hover:underline animate-bounce mt-28 transition-all duration-500 flex justify-center items-center">
                Website under Construction!!
            </div>
            <div className="flex justify-center gap-5 mt-10">
                <div className="flex md:flex-row flex-col justify-center gap-5">
                    <Button onClick={() => {window.open("https://github.com/Shubhashish-Chakraborty/TheShortLink")}} variant="primary" text="Frontend" endIcon={<Github/>}/>
                    <Button onClick={() => {window.open("https://github.com/Shubhashish-Chakraborty/theshortlink-api")}} variant="primary" text="Backend" endIcon={<Github/>}/>
                </div>
            </div>
            
        </div>
    )
}