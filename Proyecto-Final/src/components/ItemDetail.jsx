import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import getProducts from '../services/mockService.js'
import RatingStars from './RatingStars.jsx'

function ItemDetail() {

	const { id } = useParams()
	const [producto, setProducto] = useState({})

	useEffect(() => {
		getProducts()
			.then(result => {
				const product = result.find(el => el.id == id)
				setProducto(product)
			}).catch((err) => { alert(err) })
	},[])

  return (
		<section className="mt-[79px] mb-4 py-8 bg-white md:py-16 bg-white flex-grow antialiased">
			<div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
				<div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
					<div className="shrink-0 max-w-md lg:max-w-lg mx-auto relative">
						<img className="w-full" src={producto.image} alt="" draggable="false" />
					</div>
					<div className="mt-6 sm:mt-8 lg:mt-0">
						<h1 className="flex items-center gap-x-2.5 text-xl text-gray-900 sm:text-2xl">
							<img className="w-auto h-[22.5px]" src={producto.logo} alt="" draggable="false" />
							<span className="font-semibold">{producto.brand}</span> | <span className='font-normal'>{producto.model}</span>
						</h1>
						<div className="mt-4 sm:items-center sm:gap-4 sm:flex">
							<p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
								$ {producto.price}
							</p>
							<div className="flex items-center gap-2 mt-2 sm:mt-0">
								<RatingStars rating={producto.rating} />
								<p className="text-sm font-medium leading-none text-gray-500">
									({producto.rating})
								</p>
							</div>
							<div className="mt-2 sm:mt-0">
								{ producto.stock > 0
									?	<div className="flex items-center gap-2">
											<span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-700 ring-1 ring-green-600/20 ring-inset">In Stock</span>
											<p className="text-sm font-medium leading-none text-gray-500">({producto.stock})</p>
										</div>
									: <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 ring-1 ring-red-600/10 ring-inset">Out Of Stock</span>
								}
							</div>
						</div>
						<hr className="my-6 md:my-8 border-gray-200" />
						<ul className="max-w-md space-y-2.5 text-gray-500 text-sm list-inside">
							<li className="flex items-center">
								<svg className="w-3.5 h-3.5 me-2 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
									<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
								</svg>
								<div className='flex items-center gap-x-1'>
									<span className='font-semibold'>Style:</span>
									{producto.style}
								</div>
							</li>
							<li className="flex items-center">
								<svg className="w-3.5 h-3.5 me-2 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
									<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
								</svg>
								<div className='flex items-center gap-x-1'>
									<span className='font-semibold'>Year:</span>
									{producto.year}
								</div>
							</li>
							<li className="flex items-center">
								<svg className="w-3.5 h-3.5 me-2 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
									<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
								</svg>
								<div className='flex items-center gap-x-1'>
									<span className='font-semibold'>Condition:</span>
									{producto.condition}
								</div>
							</li>
							<li className="flex items-center">
								<svg className="w-3.5 h-3.5 me-2 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
									<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
								</svg>
								<div className='flex items-center gap-x-1'>
									<span className='font-semibold'>Displacement:</span>
									{producto.displacement}{producto.displacementUnit}.
								</div>
							</li>
							<li className="flex items-center">
								<svg className="w-3.5 h-3.5 me-2 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
									<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
								</svg>
								<div className='flex items-center gap-x-1'>
									<span className='font-semibold'>Power:</span>
									{producto.power}hp.
								</div>
							</li>
						</ul>
						<hr className="my-6 md:my-8 border-gray-200" />
						{/* <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
							<a href="#" title="" className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" role="button">
								<svg className="w-5 h-5 -ms-2 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
								</svg> Add to favorites </a>
							<a href="#" title="" className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center" role="button">
								<svg className="w-5 h-5 -ms-2 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
								</svg> Add to cart </a>
						</div> */}
						{/* <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
						<p className="mb-6 text-gray-500 dark:text-gray-400"> Studio quality three mic array for crystal clear calls and voice recordings. Six-speaker sound system for a remarkably robust and high-quality audio experience. Up to 256GB of ultrafast SSD storage. </p>
						<p className="text-gray-500 dark:text-gray-400"> Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with Magic Keyboard or Magic Keyboard with Touch ID. </p> */}
					</div>
				</div>
			</div>
		</section>
  )
}

export default ItemDetail