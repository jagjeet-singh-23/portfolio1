import { navigation } from '../data'
import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        {navigation.map((item, index) => {
          return (
            <li
              key={index}
              className='text-white hover:text-fuchsia-500 cursor-pointer'>
              <Link
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={400}
                offset={-70}
                className='transition-all duration-400'
              >
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavBar