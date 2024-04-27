import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github, demo } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import PropTypes from "prop-types"

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <motion.div
      initial='hidden'
      animate='show'
      variants={fadeIn("up", "spring", index * 1, 0.75)}>
      <Tilt
        optinos={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[280px] md:w-[300px] lg:w-[350px] w-full'>
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mx-1'>
              <img
                src={github}
                alt='github'
                className='w-3/4 h-3/4 object-contain'
              />
            </div>
            <div
              onClick={() => window.open(demo_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer '>
              <img
                src={demo}
                alt='demo'
                className='w-3/4 h-3/4 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5 '>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div initial='hidden' animate='show' variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Project.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          initial='hidden'
          animate='show'
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          These projects demonstrate my capabilities and expertise through
          practical examples of my work. Each project is described and features
          links to both the code repositories and live demonstrations. They
          highlight my skills in tackling complex challenges, utilizing various
          technologies, and efficiently managing projects.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  source_code_link: PropTypes.string.isRequired,
  demo_link: PropTypes.string.isRequired,
}

export default SectionWrapper(Works, "works")
