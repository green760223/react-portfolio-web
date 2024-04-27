import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"
import SectionWrapper from "../hoc/SectionWrapper"

function Footer() {
  return (
    <>
      <footer className='flex flex-col justify-center items-center bg-primary text-white'>
        <div className='flex py-5 gap-10'>
          <a
            href='https://www.linkedin.com/in/lawrence-chuang/'
            target='_blank'
            rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} size='xl' />
          </a>
          <a
            href='https://github.com/green760223'
            target='_blank'
            rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} size='xl' />
          </a>
          <a
            href='https://drive.google.com/file/d/1hkkv7JvnJwWt3XVfQ1PSHgVf5J14gPvf/view?usp=drive_link'
            target='_blank'
            rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faFilePdf} size='xl' />
          </a>
        </div>
        <p className='text-[18px] py-1'>© 2024 All rights reserved</p>
      </footer>
    </>
  )
}

export default SectionWrapper(Footer, "footer")