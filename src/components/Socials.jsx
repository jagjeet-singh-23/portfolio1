import { social } from "../data"

const Socials = () => {
  return (
    <div className="hidden lg:block">
      <ul className="flex space-x-6">
        {social.map((item, index) => {
          return (
            <li
              key={index}
              className=
              {`
              flex 
              justify-center 
              items-center 
              ${item.color ? item.color : 'text-white'}
              ${item.colorHover ? item.colorHover : 'hover:text-red-500'}
              `}
            >
              <a className="text-base" href={item.href}>
                {item.icon}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Socials