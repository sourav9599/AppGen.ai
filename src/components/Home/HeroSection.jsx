import Features from "./Features";
const HeroSection = () => {
	return (
		<div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
			<div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
				<div>
					<p className="bg-teal-accent-400 mb-4 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
						Brand new
					</p>
				</div>
				<h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
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
					quick, brown fox jumps over a lazy dog
				</h2>
				<p className="text-base text-gray-700 md:text-lg">
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque rem aperiam, eaque ipsa quae.
				</p>
			</div>
			<div className="row-gap-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<Features />
			</div>
		</div>
	);
};

export default HeroSection;
