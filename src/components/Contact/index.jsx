import React from 'react'
import github from '../../../public/img/gb.png'
import gmail from '../../../public/img/gmail.png'
import phone from '../../../public/img/phone.png'
import ig from '../../../public/img/ig.png'



import { Link } from 'react-router-dom'
import "./style.css"

const Contact = () => {
    return (
        <div className='contact'>
            <div className="c1">
                <img src={github} alt="" />
                <Link className='a' to="https://github.com/Fidanmusali">Fidanmusali</Link>
            </div>
            <div className="c2">
                <img src={gmail} alt="" />
                <Link className='a' to="mailto:fidanmusali05@gmail.com">fidanmusali05@</Link>
            </div>
            <div className="c3">
                <img src={phone} alt="" />
                <Link className='a' to="tel:+994553278985">+994 55 327 89 85</Link>
            </div>
            <div className="c1">
                <img src={ig} alt="" />
                <Link className='a' to="https://www.instagram.com/iamfidanmusali?igsh=MWdqeXF3MWlsMTN3bg==">iamfidanmusali</Link>
            </div>
        </div>
    )
}

export default Contact