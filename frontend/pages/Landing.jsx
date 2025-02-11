import Navbar from "../components/navbar";

function Landing() {
	return (
		<>
			<Navbar />
			< section className="text-center py-2 mt-4" >
				<h1 className="text-4xl font-bold text-indigo-900">Stay Organized, Stay Productive</h1>
				<p className="mt-4 text-lg text-gray-600">A simple and efficient To-Do app to help you get things done.</p>

				<img src="https://img.freepik.com/premium-vector/checklist-clipboard-pencil-icon_736051-1227.jpg" alt="Todo App" className=" mx-auto rounded-lg shadow-lg h-[500px]" loading="lazy" />
				< section />

				{/* <!-- Features Section --> */}
				< section className="py-20 px-6 bg-white " >
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl font-semibold text-indigo-900">Why Choose Our To-Do App?</h2>
						<p className="mt-2 text-gray-600 ">Designed for simplicity and efficiency.</p>
						<div className="grid md:grid-cols-3 gap-8 mt-10">
							<div className="p-6 bg-gray-100 rounded-lg">
								<h3 className="text-xl font-semibold text-indigo-600">Minimal UI</h3>
								<p className="text-gray-600 mt-2">Clean and distraction-free design.</p>
							</div>
							<div className="p-6 bg-gray-100  rounded-lg">
								<h3 className="text-xl font-semibold text-indigo-600 ">Smart Reminders</h3>
								<p className="text-gray-600 ">Never miss a task with timely reminders.</p>
							</div>
							<div className="p-6 bg-gray-100  rounded-lg">
								<h3 className="text-xl font-semibold text-indigo-600 ">Sync Everywhere</h3>
								<p className="text-gray-600  mt-2">Access tasks on all your devices.</p>
							</div>
						</div>
					</div>
				</ section>

				{/* <!-- CTA Section --> */}
				{/* < section classNameName="py-28 text-center bg-indigo-500 text-white border px-8" >
					<h2 className="text-3xl font-semibold">Start Organizing Today!</h2>
					<p className="mt-2 text-lg">Sign up now and boost your productivity.</p>
					<a href="/signup" className="mt-4 inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100">Sign Up</a>
					<a href="/signup" className="mt-4 inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100">Sign In</a>
				</section > */}

				{/* <!-- Footer --> */}
					<footer>
						<p className="mb-6">Made with 💗 by Aditya Sinha</p>
					</footer>

			</section>
		</>
	)
}

export default Landing;