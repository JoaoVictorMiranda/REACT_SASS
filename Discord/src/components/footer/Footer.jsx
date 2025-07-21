import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer>
        <div className="button">
          <p>LEARN MORE</p>
        </div>

        <div className="img">
          <img src="https://support.discord.com/hc/theming_assets/01HZPN9HPZS1X5RK15J2885YG5" />
        </div>
        <div className="listas">
          <ul>
            <li>Download</li>
            <li>Help & Support</li>
            <li>Feedback</li>
            <li>Status</li>
          </ul>
          <ul>
            <li>Company</li>
            <li>Jobs</li>
            <li>Blog</li>
            <li>Terms & Privacy</li>
          </ul>
        </div>
      </footer>
  )
}

export default Footer