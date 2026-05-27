import DomeGallery from '../DomeGallery/DomeGallery'
import './PreviousEvents.css'

/** Photos from Downloads/scd photo — served from public/scd-photos/ */
const EVENT_IMAGES = [
  { src: '/scd-photos/scd-01.jpg', alt: 'AWS Student Community Day — event photo 1' },
  { src: '/scd-photos/scd-02.jpg', alt: 'AWS Student Community Day — event photo 2' },
  { src: '/scd-photos/scd-03.jpg', alt: 'AWS Student Community Day — event photo 3' },
  { src: '/scd-photos/scd-04.jpg', alt: 'AWS Student Community Day — event photo 4' },
  { src: '/scd-photos/scd-05.png', alt: 'AWS Student Community Day — event photo 5' },
  { src: '/scd-photos/scd-06.jpeg', alt: 'AWS Student Community Day — event photo 6' },
  { src: '/scd-photos/scd-07.jpeg', alt: 'AWS Student Community Day — event photo 7' },
]

/**
 * Previous Events — fullscreen 3D dome gallery with centered title.
 */
function PreviousEvents() {
  return (
    <section id="about" className="previous-events" aria-label="Previous Events">
      <div className="previous-events__dome">
        <h2 className="previous-events__title">
          <span className="previous-events__title-top">AWS Student Community Day</span>
          <span className="previous-events__title-main">Previous Events</span>
        </h2>
        <p className="previous-events__hint">Drag to explore · Click to enlarge</p>
        <div className="previous-events__gallery-wrap">
          <div className="previous-events__mobile-block" aria-hidden="true" />
          <DomeGallery
            images={EVENT_IMAGES}
            overlayBlurColor="#0c0c0e"
            fit={0.82}
            fitBasis="max"
            minRadius={420}
            maxRadius={1600}
            padFactor={0.1}
            grayscale={false}
            imageBorderRadius="14px"
            openedImageBorderRadius="16px"
            dragSensitivity={18}
            maxVerticalRotationDeg={8}
            autoRotate
            autoRotateSpeed={-6}
            autoRotatePauseOnHover={false}
          />
        </div>
      </div>
    </section>
  )
}

export default PreviousEvents
