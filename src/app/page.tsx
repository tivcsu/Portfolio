'use client'
import Link from 'next/link'
import { PageWrapper } from './components/page-wrapper'
import './page.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el))
  }, [])

  const developmentSkills = [
    'Javascript',
    'Typescript',
    'Vue.js',
    'React',
    'jQuery',
    'Node.js',
    'Next.js',
    'HTML',
    'CSS',
    'Git',
    'Jest',
  ]
  const designSkills = [
    'UX/UI',
    'Figma',
    'Adobe Photoshop',
    'Adobe Illustrator',
  ]
  return (
    <PageWrapper>
      <div className="header" id='home'>
        <h1 className='header__title hidden'>Tivadar Lisch</h1>
        <div className="spacers">
          <div className="spacer top hidden"></div>
          <div className="spacer bottom hidden"></div>
        </div>
        <div className="header__sub-title hidden">developer & designer</div>
        <a href="#about-me" className="learn-more hidden">
          learn more
          <div className="arrow"></div>
        </a>
      </div>
      <div className="home-section" id='about-me'>
        <div className="section-column">
          <h2 className="home-section__title hidden">About me</h2>
          <div className="spacers">
            <div className="spacer top hidden"></div>
            <div className="spacer bottom hidden"></div>
          </div>
          <div className="home-section__text hidden">
            I’m Tivadar Lisch, front end developer and designer from Hungary.
            I’m passionate about creating seamless user experiences through innovative design and development.
          </div>
          <Link href="/about" className="btn primary hidden">Learn more</Link>
        </div>
        <div className="section-column">
          <div className="skills">
            <div className="skill">
              <p className="skill__title hidden hidden--right">development</p>
              <div className="skill__list  hidden hidden--right">
                {
                  developmentSkills.map(skill => (
                    <div key={skill} className="skill__item">{skill}</div>
                  ))
                }
              </div>
            </div>
            <div className="skill">
              <p className="skill__title hidden hidden--right">design</p>
              <div className="skill__list hidden hidden--right">
                {
                  designSkills.map(skill => (
                    <div key={skill} className="skill__item">{skill}</div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section" id='contact'>
        <div className="section-column">
          <h2 className="home-section__title hidden">Contact</h2>
          <div className="spacers">
            <div className="spacer top hidden"></div>
            <div className="spacer bottom hidden"></div>
          </div>
          <div className="home-section__text hidden">
            In case you would like to get in touch, you can contact me the following ways:
          </div>
          <div className="home-section__contacts hidden">
            Email: vadarti@gmail.com
          </div>
          <div className="home-section__contacts hidden">
            Social media: <a href="https://www.linkedin.com/in/tivadar-lisch-20471118b/" target='_blank'>LinkedIn</a>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
