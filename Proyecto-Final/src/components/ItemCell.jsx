import { Link, useParams } from 'react-router-dom'
import { useAppContext } from '../context/context.jsx';
import RatingStars from './RatingStars.jsx'

function ItemCell({ id, brand, model, year, displacement, displacementUnit, kilometers, price, rating, image }) {

	const { agregarAlCarrito } = useAppContext()

  return (
		<div className="group">
			<Link to={`/bikes/bike/${id}`}>
				<div className="cursor-pointer aspect-square relative flex items-center justify-center bg-white border aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
					<img src={image} alt="" className="w-full h-auto object-cover object-center px-4 group-hover:opacity-75" />
				</div>
			</Link>
			<h3 className="mt-4 text-sm text-gray-700">
				<span className="font-semibold">{brand}</span> | <span className="font-normal">{model}</span>
			</h3>
			<div className="flex flex-row items-center gap-2.5">
				<h5 className="mt-0 text-xs text-gray-500">
					{year} | {displacement}{displacementUnit} | {kilometers.toLocaleString('en-US')}{kilometers > 0 ? 'kms.' : 'km.'}
				</h5>
				<RatingStars rating={rating} />
			</div>
			<div className="flex items-center justify-between mt-2.5">
				<p className="text-lg font-semibold text-gray-900">
					{price.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).replace('$', '$ ')}
				</p>
				<div className="flex items-center gap-3.5">
					{/* <button type="button" className="text-xs hover:underline font-semibold text-gray-500 sm:mt-0 sm:w-auto" title="Add to Wishlist">Add to Wishlist</button> */}
					<button
						role="button"
						title="Add To Cart"
						onClick={() => agregarAlCarrito({id, brand, model, price, cantidad: 1})}
						className="rounded-full bg-purple-700 px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700"
					>
						Add To Cart
					</button>
				</div>
			</div>
		</div>
  )
}

export default ItemCell