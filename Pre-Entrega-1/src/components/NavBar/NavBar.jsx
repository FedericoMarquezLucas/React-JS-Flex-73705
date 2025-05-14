import CartWidget from '../CartWidget/CartWidget.jsx'
import WishlistWidget from '../WishlistWidget/WishlistWidget.jsx'

function NavBar() {
  return (
    <>
      <header className="bg-white border-b border-slate-900/10 w-full fixed z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex items-center gap-x-5 lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-sm md:text-lg text-gray-900 font-semibold">Federico Márquez Lucas</span>
            </a>
            <ul className='hidden sm:flex gap-x-2.5 items-center'>
              <li className='text-sm text-gray-900 font-normal'>
                <a href="#">Motos</a>
              </li>
              <li className='text-sm text-gray-900 font-normal'>
                <a href="#">Contacto</a>
              </li>
              <li className='text-sm text-gray-900 font-normal'>
                <a href="#">FAQ</a>
              </li>
            </ul>
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