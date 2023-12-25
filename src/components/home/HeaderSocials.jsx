import React from 'react'
import './home.css'

const HeaderSocials = () => {
  return (
    <div className="socials">
        <a href="https://www.instagram.com/" className="social-link" target='_blank' rel="noreferrer">
            <i class="fa-brands fa-instagram"></i>
        </a>

        <a href="https://www.twitter.com/" className="social-link" target='_blank' rel="noreferrer">
            <i class="fa-brands fa-twitter"></i>
        </a>

        <a href="https://www.behance.com/" className="social-link" target='_blank' rel="noreferrer">
            <i class="fa-brands fa-behance"></i>
        </a>

        <a href="https://www.dribble.com/" className="social-link" target='_blank' rel="noreferrer">
            <i class="fa-brands fa-dribbble"></i>
        </a>

        <a href="https://www.pinterest.com/" className="social-link" target='_blank' rel="noreferrer">
            <i class="fa-brands fa-pinterest"></i>
        </a>
    </div>
  )
}

export default HeaderSocials