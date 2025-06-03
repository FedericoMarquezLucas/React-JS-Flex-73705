import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget.jsx'
import WishlistWidget from './WishlistWidget.jsx'

const baseClasses = 'text-sm hover:underline';
const activeClasses = 'text-purple-700 font-semibold underline';
const inactiveClasses = 'text-gray-900 font-normal';

function NavBar() {
  return (
    <>
      <header className="bg-white border-b border-slate-900/10 w-full fixed z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex items-center gap-x-10 lg:flex-1">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="text-sm md:text-lg text-gray-900 font-semibold">Federico Márquez Lucas</span>
            </NavLink>
            <div className='hidden sm:flex gap-x-5 items-center'>
              {/* <NavLink
                to="/bikes"
                title="Bikes"
                className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
              >
                Bikes
              </NavLink> */}
              <NavLink
                to="/bikes/Harley Davidson"
                className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
              >
                Harley Davidson
              </NavLink>
              <NavLink
                to="/bikes/Ducati"
                className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
              >
                Ducati
              </NavLink>
              <NavLink
                to="/bikes/KTM"
                className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
              >
                KTM
              </NavLink>
              <NavLink
                to="/bikes/Kawasaki"
                className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
              >
                Kawasaki
              </NavLink>
              <NavLink
                to="/bikes/Husqvarna"
                className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
              >
                Husqvarna
              </NavLink>
              <NavLink
                to="/bikes/Yamaha"
                className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
              >
                Yamaha
              </NavLink>
              <NavLink
                to="/bikes/Triumph"
                className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
              >
                Triumph
              </NavLink>
              {/* <NavLink to="/" className='text-sm text-gray-900 font-normal'>Contact</NavLink>
              <NavLink to="/" className='text-sm text-gray-900 font-normal'>FAQ</NavLink> */}
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-3.5" x-data="{ openWishlist: false, openCartSlideOver: false }">
            <WishlistWidget />
            <CartWidget />
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar