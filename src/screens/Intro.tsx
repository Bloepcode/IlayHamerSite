import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonSecondary from "../components/buttons/ButtonSecondary";
import { motion } from "framer-motion";


function Intro() {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <motion.div initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} transition={{duration: .5, delay: .5}} className="w-1/2 h-1/2 bg-neutral-100 bg-opacity-40 rounded-3xl border-4 border-neutral-100 border-opacity-30 flex items-center justify-center">
                <div className="flex items-start flex-col w-full h-full p-24">
                    <motion.h1 initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} transition={{duration: .5, delay: .75}} className="text-4xl text-neutral-50">Hallo, ik ben Ilay Hamer,</motion.h1>
                    <motion.p initial={{opacity: 0, y: -20}} animate={{opacity: .9, y: 0}} transition={{duration: .5, delay: 1}} className="text-lg text-neutral-50 opacity-90">een 14-jarige programmeur uit nederland!</motion.p>
                    <div className="h-2"></div>
                    <motion.p  initial={{opacity: 0, y: -20}} animate={{opacity: .75, y: 0}} transition={{duration: .5, delay: 1.25}}className="text-lg text-neutral-50 opacity-75">Qui ullamco velit et excepteur exercitation nisi eu. Sunt sit aute eiusmod velit minim ex commodo in ea quis nulla fugiat magna veniam. Sunt tempor ex velit commodo do veniam excepteur culpa cupidatat quis sit duis do. Nulla aliqua id nisi dolor amet esse anim culpa sunt eiusmod mollit. Id est ullamco occaecat reprehenderit laboris officia.</motion.p>
                    <motion.div initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} transition={{duration: .5, delay: 1.5}} className="flex">
                        <ButtonPrimary onClick={() => {}}>Contact!</ButtonPrimary>
                        <ButtonSecondary onClick={() => {}}>Lees Verder...</ButtonSecondary>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Intro;