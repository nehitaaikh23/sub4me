import React from 'react'

const Footer = () => {
  return (
    <footer className='self-end flex justify-center w-full mt-7 pb-5 text-sm backdrop-blur-sm text-gray-500'>
        <p>Copyright {new Date().getFullYear()} © Sub4Me. All Right Reserved.</p>
    </footer>
  )
}

export default Footer