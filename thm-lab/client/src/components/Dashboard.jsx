import { motion } from "motion/react"

export default function Dashboard() {



    return (
        <main className="w-full h-screen font-mono text-slate-100 flex gap-8 justify-center items-center bg-slate-800">
            <motion.p initial={{ y: 0 }} transition={{ repeat: Infinity, duration: 3, ease: 'easeIn' }} animate={{ y: [0, 10, 40, 10, 0] }}>/bmFzZ29y</motion.p>
        </main>
    )
}