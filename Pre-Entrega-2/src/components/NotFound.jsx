import { Link } from 'react-router-dom'

function NotFound() {
	return (
		<div className="grid min-h-[calc(100vh-79px)] place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
			<div className="text-center">
				<p className="text-base font-semibold text-purple-700">404</p>
				<h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Page Not Found</h1>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<Link to="/" className="rounded-md bg-purple-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-purple-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go Back Home</Link>
					{/* <a href="#" className="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></a> */}
				</div>
			</div>
		</div>
	)
}

export default NotFound