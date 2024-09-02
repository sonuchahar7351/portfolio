"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDocker, FaTypo3} from 'react-icons/fa';
import {SiTailwindcss, SiNextdotjs} from 'react-icons/si'



const about = {
  title: "About me",
  description: "Hi, I'm Saunoo Chahar, a frontend developer at Ninepages Techsolutions Pvt. Ltd., where I've been honing my skills since April 2024. I specialize in creating dynamic and responsive web interfaces using modern technologies like React.js, Tailwind CSS, and Chakra UI. My focus is on building user-friendly and efficient applications that enhance user experience and drive business results.",
  info:[
    {
      fieldName: "Name",
      fieldValue: "Saunoo Chahar",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 8077265337",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ years",
    },
    {
      fieldName: "Instagram",
      fieldValue: "sonuchahar7351",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "sonuchahar7351@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Hindi, English",
    },
  ]
}

const experience = {
    Icon: '/assets/resume/bedge.svg',
    title: "My experience",
    description: "Delivered custom web development solutions for clients, focusing on user-friendly designs and performance optimization.Worked with various clients to understand their needs, providing tailored solutions that drive results",
    items:[
      {
        company : "NINEPEGES Techsolutions Pvt. Ltd.",
        position : "Front-End Developer",
        duration: "April 2024 - Present",
      },
      {
        company : "Freelance",
        position : "Full Stack Developer",
        duration: "October 2022 - Present",
      }
    ]
}

const education = {
  Icon: '/assets/resume/cap.svg',
  title: "My education",
  description: "I recently completed my Bachelor of Computer Applications (BCA) in July 2024. Now that I've graduated, I'm excited to fully dedicate myself to advancing my career in frontend development and applying the skills and knowledge I've gained in a professional setting.",
  items:[
    {
      institution : "S.S. Educational Institute, Gamri Malpura Agra",
      degree : "B.C.A. - Bachelor of Computer Application",
      duration: "july-2021- june-2024",
    },
    {
      institution : "S.R.A.K. inter college, Kagarol Agra",
      degree : "Intermediate",
      duration: "july-2017- june-2019",
    },
    {
      institution : "C.C.S. girls higher secondary school, Kagarol Agra",
      degree : "Highschool",
      duration: "july-2015- june-2017",
    }
  ]
}

const skills = {
  title: "My skills",
  description: "Proficient in MERN stack (MongoDB, Express.js, React.js, Node.js) with extensive experience in building scalable web applications. Adept in TypeScript for developing robust, type-safe code. Experienced in Docker for containerization, ensuring consistent development and deployment environments. Competent in Next.js for building performant, server-rendered React applications.",
  skillList:[
    {
      icon : <FaHtml5 />,
      name : "HTML 5",
    },
    {
      icon : <FaCss3 />,
      name : "css 3",
    },
    {
      icon : <FaJs />,
      name : "javascript",
    },
    {
      icon : <FaReact />,
      name : "react.js",
    },
    {
      icon : <SiNextdotjs />,
      name : "next.js",
    },
    {
      icon : <SiTailwindcss />,
      name : "tailwind css",
    },
    {
      icon : <FaNodeJs />,
      name : "node.js",
    },
    {
      icon : <FaDocker />,
      name : "docker",
    },
  ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

import {Tooltip, TooltipContent, TooltipTrigger, TooltipProvider} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';

import {motion} from 'framer-motion';

const Resume = () => {
  return (
    <motion.div initial = {{opacity: 1} } animate ={{opacity:1, transition:{delay:2.4, duration:0.4, ease:'easeIn'}}}
     
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs defaultValue='experience' className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
             <TabsTrigger value="experience">Experience</TabsTrigger>
             <TabsTrigger value="education">Education</TabsTrigger>
             <TabsTrigger value="skills">Skills</TabsTrigger>
             <TabsTrigger value="about">About-me</TabsTrigger>
           </TabsList>

          <div className='min-h-[70vh] w-full'>
            <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className="h-[400px]">
                   <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                      {experience.items.map((item, index)=>{
                        return <li key={index} className='bg-[#232329] rounded-xl py-6 flex flex-col justify-center items-center lg:items-start gap-1'>
                           <span className='text-accent'>{item.duration}</span>
                           <h3 className='text-xl max-w-[260px] min-h-[60px] text-center
                           lg:text-left'>{item.position}</h3>
                           <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rouonded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                           </div>
                        </li>
                      })}
                   </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full"> 
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className="h-[400px]">
                   <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                      {education.items.map((item, index)=>{
                        return <li key={index} className='bg-[#232329] rounded-xl py-6 flex flex-col justify-center items-center lg:items-start gap-1'>
                           <span className='text-accent'>{item.duration}</span>
                           <h3 className='text-xl max-w-[260px] min-h-[60px] text-center
                           lg:text-left'>{item.degree}</h3>
                           <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rouonded-full bg-accent'></span>
                            <p className='text-white/60'>{item.institution}</p>
                           </div>
                        </li>
                      })}
                   </ul>
                </ScrollArea>
              </div></TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-6'>{skills.description}</p>
              </div>
              </div>
              <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                 {skills.skillList.map((skill,index)=>{
                  return <li key={index}>
                    <TooltipProvider delayDuration={100}>
                       <Tooltip>
                         <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                          <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                         </TooltipTrigger>
                         <TooltipContent>
                          <p className='capitalize'>{skill.name}</p>
                         </TooltipContent>
                       </Tooltip>
                    </TooltipProvider>
                  </li>
                 })}
              </ul>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
             <div className='flex flex-col gap-[30px]'>
              <h3 className='text-4xl font-bold'>{about.title}</h3>
              <p className='mx-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
              <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                {
                  about.info.map((item,index)=>{
                    return(
                       <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                         <span className='text-white/60'>{item.fieldName}</span>
                         <span className='text-xl'>{item.fieldValue}</span>
                       </li>
                    )
                  })
                }
              </ul>
             </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume