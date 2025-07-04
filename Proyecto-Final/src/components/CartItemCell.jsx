import { Link } from 'react-router-dom'
import { useAppContext } from '../context/context.jsx'

function CartItemCell({ id, brand, model, price, image, quantity }) {

	const { decrementQuantity, incrementQuantity, removeFromCart } = useAppContext()

  return (
    <>
			<div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
					<div className="space-y-4 md:flex md:items-center md:justify-between md:gap-4 md:space-y-0">
							{/* <Link
								to={`/bikes/bike/${id}`}
								className="shrink-0 md:order-1"
							>
								<img className="h-20 w-20" src={image} alt="" />
							</Link> */}
							<label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
							<div className="flex flex-1 items-center justify-between gap-x-6 md:order-3 md:justify-end">
									<div className="flex items-center">
											<button
                        type="button"
                        id="decrement-button"
                        disabled={quantity <= 0}
                        onClick={() => decrementQuantity(id)}
                        data-input-counter-decrement="counter-input"
                        className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-100 ${quantity <= 0 ? 'opacity-35 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                      >
                        <svg className="h-2.5 w-2.5 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                        </svg>
											</button>
											<input
                        readOnly
                        required
                        type="text"
                        id="counter-input"
                        data-input-counter
                        value={quantity}
                        className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
                      />
											<button
                        type="button"
                        id="increment-button"
                        onClick={() => incrementQuantity(id)}
                        data-input-counter-increment="counter-input"
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                      >
                        <svg className="h-2.5 w-2.5 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                        </svg>
											</button>
									</div>
									<div className="text-end md:order-4 md:w-32">
											<p className="flex flex-row items-center gap-x-1.5 text-base font-bold text-gray-900">
												{price.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).replace('$', '$ ')}
												<span className="text-xs text-gray-500 font-normal">each</span>
											</p>
									</div>
							</div>
							<div className="w-full min-w-0 flex-1 space-y-2 md:order-2 md:max-w-md">
									<Link
										to={`/bikes/bike/${id}`}
										className="text-base font-medium text-gray-900 hover:underline"
									>
										<span className="font-semibold">{brand}</span> | <span className="font-normal">{model}</span>
									</Link>
									<p>
										Imagen: {image}
									</p>
									<p className="text-sm">
										<span className="font-medium text-gray-900">Qty.</span>
										<span>{quantity}</span>
									</p>
									<div className="flex items-center gap-4">
											{/* <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline">
													<svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
															<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
													</svg>
													Add to Favorites
											</button> */}
											<button
												type="button"
												onClick={() => removeFromCart({id, brand, model})}
												className="inline-flex items-center text-sm font-medium text-red-600 hover:underline"
											>
													<svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
															<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
													</svg>
													Remove
											</button>
									</div>
							</div>
					</div>
			</div>
    </>
  )
}

export default CartItemCell