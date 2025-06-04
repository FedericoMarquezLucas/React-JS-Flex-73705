import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget.jsx'
import WishlistWidget from './WishlistWidget.jsx'

const baseClasses = 'text-sm hover:underline';
const activeClasses = 'text-purple-700 font-semibold underline';
const inactiveClasses = 'text-gray-900 font-normal';

const routes = [
  'BMW',
  'Ducati',
  'Harley Davidson',
  'Honda',
  'Husqvarna',
  'Indian',
  'Kawasaki',
  'KTM',
  'Triumph',
  'Yamaha'
]

function NavBar() {
  return (
    <>
      <header className="bg-white border-b border-slate-900/10 w-full fixed z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex items-center gap-x-10 lg:flex-1">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="text-sm md:text-lg text-gray-900 font-semibold">Federico Márquez Lucas</span>
            </NavLink>
            <div className='hidden sm:flex gap-x-3.5 items-center'>
              {
                routes.map((route) => (
                  <NavLink
                    key={route}
                    to={`/bikes/${route}`}
                    className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
                  >
                    {route}
                  </NavLink>
                ))
              }
              {/* <NavLink
                to="/bikes"
                title="Bikes"
                className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
              >
                Bikes
              </NavLink> */}
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