import  Socials  from './Socials';
import glasses from '../assets/logo/glasses.svg'

const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-6'>
            <Socials />
          </div>
          <img src={glasses} alt="logo" className='w-1/4 h-1/2' />
          <p>&copy;2023 Jagjeet Singh, All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer