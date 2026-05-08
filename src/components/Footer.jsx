import React from 'react'

const Footer = () => {
  return (
    <footer className='fixed bottom-0 flex justify-center w-full pb-5 text-lg backdrop-blur-sm text-gray-500'>
        <p>Copyright {new Date().getFullYear()} © Sub4Me. All Right Reserved.</p>
    </footer>
  )
}

export default Footer