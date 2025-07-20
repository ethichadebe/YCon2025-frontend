import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './IntroPage.css'

function IntroPage() {
  const navigate = useNavigate()

  return (
    <motion.div
      className="intro-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -300 }} // 👉 Slide out left on exit
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="peel-section"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.5 }}
        style={{ transformOrigin: 'right' }}
      >
        <div className="inner-content">
          <img src="/salvation-logo.png" alt="Salvation Army" className="logo" />
          <h1>#YC2025</h1>
          <p>Coming soon...</p>
          <button
            className="cta-button"
            onClick={() => navigate('/register')}
          >
            Register Now
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default IntroPage
