'use client'
import Link from 'next/link'
import { PageWrapper } from '../components/page-wrapper'
import './page.css'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutMe() {
  const experiences = [
    {
      period: '11/2021 - Present',
      position: 'Front-end developer',
      company: 'EPAM Systems Hungary',
      details: [
        'Key contributor in developing an internal tool for an airline, which helps them improve their operational efficiency and productivity.',
        'Using Vue.js for development with a focus on code quality and application performance.',
        'Committed to writing comprehensive unit tests and seamlessly integrating RestAPIs.',
        'Actively collaborating with other teams, team members and stakeholders to ensure successful project outcomes.',
        'Taking proactive steps towards professional development by participating in internal courses, including ReactJs, NodeJs or software design.'
      ],
      stack: ['Vue.js','Typescript','HTML','CSS/SCSS','React','Node.js'],
      link: 'https://epam.com'
    },
    {
      period: '12/2019 - 11/2021',
      position: 'Front-end developer & UI/UX Designer',
      company: 'Koncertbooking.com Kft',
      details: [
        'Created visually appealing UI designs using Figma and translated them into fully functional web applications utilizing HTML/CSS, Vue.js, and jQuery.',
        'Maintained and optimized existing codebase, addressing bugs and improving user experience.',
        'Independently designed and developed multiple websites.',
        ],
      stack: ['Vue.js','Javascript','HTML','CSS/SCSS','jQuery'],
      link: 'https://koncertbooking.com'
    },
    {
      period: '12/2018 - 12/2019',
      position: 'Technical Support Engineer',
      company: 'Novell PSH Kft.',
      details: [
        'Provided 1st line support tasks, effectively resolving technical issues to ensure seamless user experiences.',
        'Demonstrated expertise in creating Linux test environments, reproducing bugs, and implementing fixes.',
        ],
      stack: ['Linux'],
      link: 'https://npsh.hu'
    }
  ]
  const individualProjects = [
    {
      period: '0',
      position: "Lawyer's portfolio and appointment booking website",
      details: [
        'A portfolio page created in React with Firebase.',
        'Users are able to book appointments for the free time slots.',
        'Email notification is sent about the booking.',
        ],
      stack: ['React', 'Typescript', 'HTML', 'CSS', 'Firebase'],
      link: 'https://drnagymelaniaugyved.hu/'
    }
  ]
  return (
    <PageWrapper className='about'>
      <div className="section-column about-section fixed">
        <h2 className="home-section__title">About me</h2>
        <div className="spacers">
          <div className="spacer top"></div>
          <div className="spacer bottom"></div>
        </div>
        <div className="home-section__text">
          I’m Tivadar Lisch, front end developer and designer from Hungary.
          I’m passionate about creating seamless user experiences through innovative design and development.
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0, paddingTop: 100 }}
          animate={{ opacity: 1, paddingTop: 0  }}
          transition={{ duration: 1 }} 
          className="section-column about-section scroll">
        <p className='about-title'>About</p>
        <p className='about-text'>
            Over 4 years of experience as a Front-End Developer<br/>
            Skilled in Vue.js and ReactJS with TypeScript for development<br/>
            Expertise in UI/UX design, demonstrated through successful individual(e.g. https://drnagymelaniaugyved.hu/) and team(e.g.https://koncertbooking.com/) projects<br/>
            Experienced in Agile and Waterfall development methodologies<br/>
            Experienced in using Figma for design work<br/>
            Committed to continuous learning and skill enhancement, recently completed courses in software design and React, currently doing a Node.js course<br/>
            Currently working as a member of an international team, collaborating with developers and a designer<br/>
        </p>
        <div className="experiences">
          <p className='about-title'>Experience</p>
          {experiences.map((experience) => (
            <a target='_blank' href={experience.link} key={experience.period} className="experience">
            <p className="experience__period">{experience.period}</p>
            <div className="experience__details">
              <p className="experience__title">{experience.position}</p>
              <p className="experience__company">{experience.company}</p>
              {experience.details.map((detail) => (
                <p key={detail} className="experience__detail">{detail}</p>
              ))}
              <div className="experience__stack">
                {experience.stack.map((stackItem) => (
                  <p key={stackItem} className="experience__stack-item">{stackItem}</p>
                ))}
              </div>
            </div>
            </a>
          )) 
          }
        </div>
        <div className="experiences">
          <p className='about-title'>Individual projects</p>
          {individualProjects.map((experience) => (
            <a target='_blank' href={experience.link} key={experience.period} className="experience">
            <Image width={300} height={300} alt='lawyer website' src='/lawyer-site.png' className="experience__period" />
            <div className="experience__details">
              <p className="experience__title">{experience.position}</p>
              {experience.details.map((detail) => (
                <p key={detail} className="experience__detail">{detail}</p>
              ))}
              <div className="experience__stack">
                {experience.stack.map((stackItem) => (
                  <p key={stackItem} className="experience__stack-item">{stackItem}</p>
                ))}
              </div>
            </div>
            </a>
          )) 
          }
        </div>
      </motion.div>
    </PageWrapper>
  )
}
