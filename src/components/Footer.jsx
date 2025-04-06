import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
      <img src={assets.logo} width={150} alt="" />
      <p className='flex-1 border-1 border-fray-400 
      pl-4 text-sm text-gray-500 max-sm:hidden'>Copyrights @AffanMomin | All right reserved.</p>
      <div className='flex gap-2.5'>
      <Link to="/developers">
        <button className='inline-flex items-center gap-2 px-12 py-3 rounded-full
          bg-black text-white m-auto hover:scale-105 
          transition-all duration-500'>Developers</button>
      </Link>
        <img src={assets.facebook_icon} alt="" width={35} />
        <img src={assets.twitter_icon} alt="" width={35} />
        <img src={assets.instagram_icon} alt="" width={35} />
      </div>
    </div>
  )
}

export default Footer
