import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {SiCodechef} from 'react-icons/si'
import {SiCodeforces} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/gaurav-sable-870555220/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Gaurav-sable" target="_blank"><FaGithubSquare/></a>
        <a href="https://www.codechef.com/users/gaurav1104" target="_blank"><SiCodechef/></a>
        <a href="https://codeforces.com/profile/gaurav1104" target="_blank"><SiCodeforces/></a>
    </div>
  )
}

export default HeaderSocials