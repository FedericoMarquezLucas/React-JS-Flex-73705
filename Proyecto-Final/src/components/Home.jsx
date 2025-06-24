import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="w-full h-[500px] max-h-[500px] flex-grow relative mt-[79px]">
        <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.25)] z-10'></div>
        <img src="/Home/HD-Home-Banner.jpg" alt="Hero Banner" draggable="false" className="w-full h-full object-cover" />
        <Link
          to="/bikes"
          type="button"
          className="absolute z-20 top-1/2 left-1/2 sm:left-[unset] sm:right-4 -translate-x-1/2 sm:translate-x-0 -translate-y-1/2 text-sm text-center text-gray-900 font-medium bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5 inline-flex items-center gap-x-1"
        >
          Shop Motorcycles <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </>
  )
}

export default Home