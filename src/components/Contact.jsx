import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import ReactGA from "react-ga4"

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.")
      return
    }

    setLoading(true)

    try {
      ReactGA.event({
        category: "Email Submission",
        action: "Submited email form",
        label: "Contact",
      })

      await emailjs.send(
        "service_32bq30h",
        "template_71hyxes",
        {
          from_name: form.name,
          to_name: "Lawrence",
          from_email: form.email,
          to_email: "green760223@gmail.com",
          message: form.message,
        },
        "AD8yUcT8KiX5wCPVS"
      )
      setLoading(false)
      alert("Thank you for your message. I'll get back to you soon.")
      setForm({ name: "", email: "", message: "" })
    } catch (error) {
      setLoading(false)
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <>
      <div className='xl:mt-6 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'> Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-teriary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'> Your Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className='bg-teriary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'> Your Message</span>
              <textarea
                rows='7'
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder="What's do you want to say?"
                className='bg-teriary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <div className='items-center flex justify-center'>
              <button
                type='submit'
                disabled={loading || !form.name || !form.email || !form.message}
                className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
          <EarthCanvas />
        </motion.div>
        <p className='hidden'>
          This work is based on "Stylized planet" by cmzw, licensed under
          CC-BY-4.0. Modifications were made to the original model.
          <a href='https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70'>
            Original model
          </a>
          by <a href='https://sketchfab.com/cmzw'>cmzw</a>
          licensed under{" "}
          <a href='http://creativecommons.org/licenses/by/4.0/'>CC-BY-4.0</a>.
        </p>
      </div>
    </>
  )
}

export default SectionWrapper(Contact, "contact")
