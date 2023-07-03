import { feature_data } from "./data/features";
const Features = () => {
	return (
		<div className="flex flex-col justify-between rounded border p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
			{feature_data.map((data) => (
				<div key={data.id}>
					<div>
						<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 dark:bg-gray-800">
							{data.icon}
						</div>
						<h6 className="mb-2 font-semibold leading-5">{data.title}</h6>
						<p className="mb-3 text-sm text-gray-900 dark:text-gray-400">
							{data.description}
						</p>
					</div>
					<a
						href="/"
						aria-label=""
						className="hover:text-deep-purple-800 inline-flex items-center font-semibold text-purple-600 transition-colors duration-200"
					>
						Learn more
					</a>
				</div>
			))}
		</div>
	);
};

export default Features;
