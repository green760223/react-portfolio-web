import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div>
        <p className='hidden'>
          This work is based on "Gaming Desktop PC"
          (https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66)
          by Yolala1232 (https://sketchfab.com/Yolala1232) licensed under
          CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
        </p>
      </div>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]'></div>
          <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi I'm <span className='text-[#915EFF]'>Lawrence</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I specialize in advanced <br className='sm:block hidden' />
            IoT solutions and full stack web development
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] border-4 border-secondary rounded-3xl flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
