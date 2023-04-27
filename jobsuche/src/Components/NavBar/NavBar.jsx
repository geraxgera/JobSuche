import React from 'react'

function NavBar() {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
        <div className="logoDiv">
            <h1 className="logo text-[25px] text-blue-800"><strong>Job</strong>Suche</h1>
        </div>
        <div className="menu flex gap-8">
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">Arbeitsplätze</li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">Firmen</li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">Über uns</li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">Kontakt</li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">Login</li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor">Register</li>‚
        </div>
    </div>
  )
}

export default NavBar