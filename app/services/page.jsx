"use client"
import {BsArrowDownRight} from 'react-icons/bs';
import Link from 'next/link';
import {motion} from 'framer-motion'
const services = [
  {
    num:'01',
    title:'Web Development',
    description:'I offer custom web development services that bring your ideas to life with clean, responsive, and modern designs. Specializing in creating user-friendly interfaces with technologies like React.js, Tailwind CSS, and Chakra UI, I ensure your website is optimized for performance and scalability. Whether you need a simple landing page or a complex web application, I am committed to delivering solutions that exceed your expectations and drive results',
    href:''
  },
  {
    num:'02',
    title:'UI-UX Design',
    description:'I provide intuitive UI/UX design services that focus on creating seamless and engaging user experiences. By combining creativity with a user-centered approach, I design interfaces that are not only visually appealing but also functional and easy to navigate. With expertise in tools like Figma and Adobe XD, I ensure that every design is optimized for both aesthetics and usability, helping your digital products stand out and resonate with your target audience.',
    href:''
  },
  {
    num:'03',
    title:'Frontend Development',
    description:'I specialize in building dynamic and responsive frontend solutions that bring your vision to life. Leveraging modern technologies like React.js, Next.js, and Tailwind CSS, I create user-friendly interfaces that deliver a seamless experience across all devices. My focus is on writing clean, efficient code that enhances performance and scalability, ensuring your web applications are both robust and visually appealing.',
    href:''
  },
  {
    num:'04',
    title:'MERN Stack Development',
    description:'I offer comprehensive MERN stack development services, delivering full-stack web applications that are both powerful and scalable. By integrating MongoDB, Express.js, React.js, and Node.js, I create robust solutions tailored to your specific needs. From designing intuitive frontends to building efficient backend architectures, I ensure seamless functionality and optimal performance, providing end-to-end development that transforms your ideas into high-quality digital products.',
    href:''
  },
]

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <motion.div 
          initial={{opacity:0}}
          animate={{
            opacity:1,
            transition:{ delay:2.4, duration:0.4, ease:'easeIn'}
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px] '
        >
          {
            services.map((service,index)=>{
              return <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                {/* top  */}
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                  <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 ' >
                    <BsArrowDownRight className='text-primary text-3xl ' />
                  </Link>
                </div>
                {/* title  */}
                <h2 className='text-[42px] font-bold text-white leading-none group-hover:text-accent transition-all duration-500' >{service.title}</h2>
                {/* description  */}
                <p className='text-white/60'>{service.description}</p>
                {/* border  */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            })
          }
        </motion.div>
      </div>
    </section>
  )
}

export default Services