import LogoLoop from '../LogoLoop/LogoLoop'
import './LogoLoopSection.css'

const TECH_LOGOS = [
  {
    node: <img src="/logorunner/Amazon-Web-Services-AWS-Logo-Transparent-PNG.png" alt="Amazon Web Services" className="logo-loop-img" />,
    title: 'Amazon Web Services',
  },
  {
    node: <img src="/logorunner/tyt-removebg-preview.png" alt="TYT" className="logo-loop-img logo-loop-img--large" />,
    title: 'TYT',
  },
  {
    node: <img src="/logorunner/tyt-removebg-preview (1).png" alt="TYT" className="logo-loop-img logo-loop-img--large" />,
    title: 'TYT',
  },
]

function LogoLoopSection() {
  return (
    <section className="logo-loop-section" aria-label="AWS technologies">
      <LogoLoop
        logos={TECH_LOGOS}
        speed={80}
        direction="left"
        logoHeight={40}
        gap={52}
        fadeOut
        fadeOutColor="#ffffff"
        scaleOnHover
        ariaLabel="AWS and cloud technologies"
      />
    </section>
  )
}

export default LogoLoopSection
