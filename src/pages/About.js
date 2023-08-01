import React from 'react'
import MultiplePizza from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';
function About() {
  return (
    <div className='about'>
      <div className="aboutTop"
     style={{ backgroundImage: `url(${MultiplePizza})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia assumenda, tempore minima sequi nostrum, ducimus voluptatem esse consequatur est, doloremque facilis. Esse reiciendis nisi magnam veniam tenetur, unde eos quo!  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque hic eligendi fugiat fuga aliquid voluptas quibusdam voluptate voluptatibus, harum eveniet, distinctio ex saepe laudantium dolores autem maiores magni unde ipsa.</p>
      </div>
    </div>
  )
}

export default About;
