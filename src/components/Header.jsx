import NavBar from './NavBar';
import Socials from './Socials'
import glasses from '../assets/logo/glasses.svg'

const Header = () => {
  return (
    <header
      className='
        h-20 w-full flex items-center fixed bg-black text-white top-0 z-10
      '
    >
      <div className='container mx-auto h-full flex items-center justify-center lg:justify-between'>
        <img src={glasses} className='w-1/4 hidden md:block lg:block '/>
        <NavBar />
        <Socials />
      </div>
    </header>
  )
}

export default Header