import React from 'react'
import './sidebar.css';

const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
    item.addEventListener('click', activeLink));
const SidBar = () => {
    return (
        <div class="navigation">
            <ul>
                <li class="list active">
                    <a href="#home">
                        <span class="icon">
                            <ion-icon name="home-outline"></ion-icon>
                        </span>
                        <span class="text">Home</span>
                    </a>
                </li>
                <li class="list">
                    <a href="#about">
                        <span class="icon">
                            <i className="icon-user-following"></i>
                        </span>
                        <span class="text">About</span>
                    </a>
                </li>
                <li class="list">
                    <a href="#services">
                        <span class="icon">
                            <i className="icon-briefcase"></i>
                        </span>
                        <span class="text">Services</span>
                    </a>
                </li>
                <li class="list">
                    <a href="#portfolio">
                        <span class="icon">
                            <i className="icon-layers"></i>
                        </span>
                        <span class="text">Portfolio</span>
                    </a>
                </li>
                <li class="list">
                    <a href="#contact">
                        <span class="icon">
                            <i className="icon-bubble"></i>
                        </span>
                        <span class="text">Contact</span>
                    </a>
                </li>
                <div class="indicator"></div>
            </ul>
        </div>
    )
}

export default SidBar