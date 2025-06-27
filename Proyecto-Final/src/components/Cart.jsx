import { Link } from 'react-router-dom'
import { useAppContext } from '../context/context.jsx'
import CartItemCell from './CartItemCell.jsx'

function Cart() {

  const { carrito, limpiarCarrito } = useAppContext()

  return (
    <>
		<section className="bg-white py-8 antialiased mt-[79px] md:py-16">
			<div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
				<div className="flex flex-row justify-between items-center">
					<div className="flex flex-row items-center space-x-2.5">
						<h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Shopping Cart</h2>
						<p className="text-gray-900">
							({carrito.reduce((acc, value) => acc + value.cantidad, 0)}
							{' '}
							{carrito.reduce((acc, value) => acc + value.cantidad, 0) === 1 ? 'item' : 'items'})
						</p>
					</div>
					<button
						onClick={() => limpiarCarrito()}
						className="rounded-full border border-transparent py-2 px-4 text-center text-sm font-medium transition-all text-gray-600 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
					>
						Empty Cart
					</button>
				</div>
				<div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">

					{/* START : LEFT COL. */}
					<div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
						<div className="space-y-6">
							{
								carrito.length > 0
									?
										carrito.map(item => <CartItemCell key={item.id} {...item}/>)
									:
									<div className="flex items-center justify-center gap-2 bg-red-50 p-4 rounded-lg text-sm text-red-700 text-center font-medium">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
											<path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd"></path>
										</svg>
										Shopping Cart is empty
									</div>
							}
						</div>
					</div>
					{/* END : LEFT COL. */}

					{/* START : RIGHT COL. */}
					<div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
						<div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
							<p className="text-xl font-semibold text-gray-900">Order summary</p>
							<div className="space-y-4">
								<div className="space-y-2">
									<dl className="flex items-center justify-between gap-4">
										<dt className="text-base font-normal text-gray-600">Original price</dt>
										<dd className="text-base font-medium text-gray-900">
											{carrito
												.reduce((acc, value) => acc + value.cantidad * value.price, 0)
												.toLocaleString('en-US', {
													style: 'currency',
													currency: 'USD',
													minimumFractionDigits: 0,
													maximumFractionDigits: 0,
												})
												.replace('$', '$ ')
											}
										</dd>
									</dl>
									<dl className="flex items-center justify-between gap-4">
										<dt className="text-base font-normal text-gray-600">Tax</dt>
										<dd className="text-base font-medium text-gray-900">$0</dd>
									</dl>
								</div>
								<dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
									<dt className="text-base font-bold text-gray-900">Total</dt>
									<dd className="text-base font-bold text-gray-900">
										{carrito
											.reduce((acc, value) => acc + value.cantidad * value.price, 0)
											.toLocaleString('en-US', {
												style: 'currency',
												currency: 'USD',
												minimumFractionDigits: 0,
												maximumFractionDigits: 0,
											})
											.replace('$', '$ ')
										}
									</dd>
								</dl>
							</div>
							<a href="#" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">Proceed to Checkout</a>
							<div className="flex items-center justify-center gap-2">
								<span className="text-sm font-normal text-gray-600"> or </span>
								<Link
									to="/bikes"
									title="Continue Shopping"
									className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline"
								>
									Continue Shopping
									<svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
									</svg>
								</Link>
							</div>
						</div>
					</div>
					{/* END : RIGHT COL. */}

				</div>
			</div>
		</section>
    </>
  )
}

export default Cart