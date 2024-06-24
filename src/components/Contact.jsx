import { SectionWrapper } from "../hoc"
import { useState , useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { styles } from "../styles"
import { slideIn } from "../utils/motion"
import { Tilt } from 'react-tilt'
import { contacts } from "../constants"
import {fadeIn , textVariant} from '../utils/motion'

const ContactCard = ({index,id,image,source_link}) =>{
  return (
      <Tilt className="flex-wrap lg:w-auto xs:w-auto md:w-auto xl:w-auto h-auto">
      <motion.div
          variants={fadeIn("right","spring",0.5*index,0.75)}
          
          className="w-30  violet-gradient p-[1px] rounded-[20px] "
      >
          <div 
          options={{
              max:25,
              scale:1,
              speed:550,

          }}
          className='bg-black rounded-[20px] py-5 px-12 min-h-[110px] w-28 lg:w-auto md:w-auto xl:w-auto xs:w-auto  flex  items-center justify-evenly flex-col shadow-card'
          >
          <img src={image} onClick={()=>{window.open(source_link)}} alt={id} className=" w-14   h-1/5 object-contain   items-center"/>
          <h3 className='text-white text-[12px] xs:text-[20] md:text-[20] xl:text-[20] lg:text-[20] font-bold text-center'>{id}</h3>
          </div>
      </motion.div>
      </Tilt>
  )
}


const Contact = () => {
  const formRef = useRef()
  const [form,setForm]=useState({
    name:'',
    email:'',
    message:'',
  })
  const [loading,setLoading]=useState(false)

  const handleChange = (e)=>{
    const {name,value} = e.target
    setForm({...form,[name]:value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    setLoading(true)

    //1b2NBMWb3g8ekKl7v
    //template_5egh8o7
    //service_brxg1yl

    emailjs.send('service_brxg1yl','template_5egh8o7',{
      from_name:form.name,
      to_name:'Tarun X Geeka Creatives',
      from_email:form.email,
      to_email:'vaishnavtarun231@gmail.com',
      message:form.message,

      },
      '1b2NBMWb3g8ekKl7v'
    ).then(()=>{
      setLoading(false)
      alert('Thanks a lot, I will get back to you as soon as possible.')
      setForm({
        name:'',
        email:'',
        message:'',
      })
    },(error)=>{
      setLoading(false)
      console.log(error)
      alert("Something went wrong")
      
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse  gap-10 block">
      <motion.div
        variants={slideIn('left','tween',0.2,1)}
        className=" flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText} text-white`}>Get in Touch</p>
        <h3 className={`${styles.sectionHeadText} text-white`}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea 
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none auto-rows-max"
            ></textarea>
          </label>

          <button
            type="submit"
            className=" bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold rounded-xl shadow-md shadow-primary"
          >
            {loading?'sending...':'send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("left","tween",0.2,1)}
        className=" xl:flex-1 xs:h-auto md:h-auto xl:h-auto items-center justify-center h-[350px]"
      >
        <div className='mt-20 items-center justify-center flex flex-wrap gap-10'>
            {contacts.map((contact, index)=>(
              <ContactCard key={contact.title} index={index} {...contact}/>
            ))}
        </div>
          
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")