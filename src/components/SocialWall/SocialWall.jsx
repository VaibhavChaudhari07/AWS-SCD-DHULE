import React from 'react'
import { motion } from 'motion/react'
import './SocialWall.css'

const POSTS = [
  {
    name: 'Rahul I',
    role: 'AWS Cloud Club Member',
    initials: 'RI',
    text: "Yesterday was truly one of the best days ever. What an incredible event and incredible people. Can't wait for the next AWS Student Community Day!",
  },
  {
    name: 'Maya Patel',
    role: 'AWS Cloud Club Lead',
    initials: 'MP',
    text: 'Reflecting on our Community Day: 500+ students, amazing speakers, and so many "aha" moments in the Lambda workshop. This community is something special.',
  },
  {
    name: 'Jordan Lee',
    role: 'Computer Science Student',
    initials: 'JL',
    text: "Just registered for AWS Student Community Day! Last year's hands-on labs were incredible — can't wait to level up my cloud skills again.",
  },
  {
    name: 'Chris Williams',
    role: 'DevOps Enthusiast',
    initials: 'CW',
    text: 'Attended my first cloud event here as a sophomore. Left with 3 new connections, a certification study plan, and genuine excitement about my career path.',
  },
  {
    name: 'Sofia Nguyen',
    role: 'Cloud Practitioner',
    initials: 'SN',
    text: 'The keynote + workshop combo was elite. Built my first serverless app in an afternoon and presented it at the student showcase. Grateful for this crew.',
  },
  {
    name: 'Arjun Sharma',
    role: 'Final Year B.Tech',
    initials: 'AS',
    text: 'The networking sessions were gold. Met AWS community builders and got mentorship that I could never have found anywhere else. Absolutely worth it.',
  },
  {
    name: 'Priya Desai',
    role: 'ML Researcher',
    initials: 'PD',
    text: 'The AI & ML track blew my mind. Real hands-on labs with actual AWS services, not just slides. This is how tech events should be done.',
  },
  {
    name: 'Karan Mehta',
    role: 'Open Source Contributor',
    initials: 'KM',
    text: 'From zero cloud knowledge to deploying my first app on AWS — all in one day. The beginner track was perfectly paced and super encouraging.',
  },
  {
    name: 'Ananya Rao',
    role: 'Student Developer',
    initials: 'AR',
    text: 'The energy in the auditorium during the keynote was electric. You could feel everyone was genuinely passionate about building on the cloud.',
  },
]

const col1 = POSTS.filter((_, i) => i % 3 === 0)
const col2 = POSTS.filter((_, i) => i % 3 === 1)
const col3 = POSTS.filter((_, i) => i % 3 === 2)

function TestimonialCard({ post }) {
  return (
    <div className="sw-card">
      <p className="sw-card__text">{post.text}</p>
      <div className="sw-card__author">
        <div className="sw-card__avatar">{post.initials}</div>
        <div className="sw-card__info">
          <span className="sw-card__name">{post.name}</span>
          <span className="sw-card__role">{post.role}</span>
        </div>
      </div>
    </div>
  )
}

function Column({ posts, duration = 15, className }) {
  return (
    <div className={`sw-col ${className || ''}`}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{ duration, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        className="sw-col__inner"
      >
        {[...Array(2)].map((_, idx) => (
          <React.Fragment key={idx}>
            {posts.map((post, i) => (
              <TestimonialCard key={`${idx}-${i}`} post={post} />
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}

function SocialWall() {
  return (
    <section id="social" className="social-wall section">
      <div className="social-wall__container">
        <header className="social-wall__header reveal">
          <span className="social-wall__label">Community Voices</span>
          <h2 className="social-wall__title">What the Community Says</h2>
          <p className="social-wall__sub">Voices from students who've been there</p>
        </header>

        <div className="social-wall__columns reveal reveal-delay-2">
          <Column posts={col1} duration={20} />
          <Column posts={col2} duration={16} className="sw-col--offset" />
          <Column posts={col3} duration={22} />
        </div>
      </div>
    </section>
  )
}

export default SocialWall
