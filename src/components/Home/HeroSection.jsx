import Features from "./Features";
const HeroSection = () => {
	return (
		<div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
			<div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
				<div class="mb-2 inline-flex rounded border border-gray-200 bg-gray-100 px-2 py-1 text-sm font-medium leading-4 text-gray-800 dark:border-gray-600/50 dark:bg-gray-700/50 dark:text-gray-200">
					v0.1 Pre-Alpha
				</div>
				<h1 class="mb-4 text-4xl font-black text-black dark:text-white">
					<span className="relative inline-block">
						<svg
							viewBox="0 0 52 24"
							fill="currentColor"
							className="text-blue-gray-100 absolute left-0 top-0 z-0 -ml-20 -mt-8 hidden w-32 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
						>
							<defs>
								<pattern
									id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
									x="0"
									y="0"
									width=".135"
									height=".30"
								>
									<circle cx="1" cy="1" r=".7" />
								</pattern>
							</defs>
							<rect
								fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
								width="52"
								height="24"
							/>
						</svg>
						<span className="relative">The</span>
					</span>{" "}
					Generative AI Powered{" "}
					<span class="text-blue-600 dark:text-blue-500">
						Automation Platform
					</span>
				</h1>
				<p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque rem aperiam, eaque ipsa quae.
				</p>
				<div className="flex flex-col justify-center space-y-2 pb-16 pt-10 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0 lg:justify-center">
					<a
						href="javascript:void(0)"
						className="inline-flex items-center justify-center space-x-2 rounded-lg border border-blue-700 bg-blue-700 px-7 py-3.5 font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
					>
						<svg
							className="hi-mini hi-arrow-down-tray inline-block h-5 w-5 opacity-75"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
							<path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
						</svg>
						<span>Download for free</span>
					</a>
					<a
						href="javascript:void(0)"
						className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-7 py-3.5 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
					>
						<span>Learn more</span>
					</a>
				</div>
			</div>
			<Features />
		</div>
	);
};

export default HeroSection;
