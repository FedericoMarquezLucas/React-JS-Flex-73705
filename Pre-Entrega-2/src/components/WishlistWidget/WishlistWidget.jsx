function WishlistWidget() {
  return (
    <>
			<div className="relative">
				<div className="flex items-center">
					<button x-on:click="openWishlist = !openWishlist" className="cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" id="wishlistIcon">
								<path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"></path>
						</svg>
					</button>
				</div>
				<div
					x-show="openWishlist"
					className="absolute top-[55px] right-0 z-10 flex w-screen max-w-max"
				>
					<div className="w-screen max-w-md flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
						<div id="listado-productos-wishlist" className="p-4">
							<div className="relative flex items-center justify-between rounded-lg p-4 hover:bg-gray-100">
								<div className="flex flex-row items-center gap-x-5">
									<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
										<div className="relative w-14 h-14 flex flex-shrink-0 items-center justify-center p-1 overflow-hidden rounded-md border border-gray-200 bg-white hover:bg-white">
											<img src="./img/product-img/img_softail_deluxe_flstn.jpg" alt="Harley Davidson Softail Deluxe FLSTN" className="object-fit object-center" />
										</div>
									</div>
									<div><p className="flex flex-col text-xs text-gray-700">
											Harley Davidson
											<b>Softail Deluxe FLSTN</b>
										</p>
									</div>
								</div>
								<div className="flex flex-col gap-1.5">
									<button type="button" className="font-medium text-xs text-indigo-600 hover:text-indigo-500 hover:underline" title="Eliminar">Eliminar</button>
									<button type="button" className="font-medium text-xs text-indigo-600 hover:text-indigo-500 hover:underline" title="Mover al Cart">Mover al Cart</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    </>
  )
}

export default WishlistWidget