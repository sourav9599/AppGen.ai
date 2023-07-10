import { MdInsights } from "react-icons/md";

const InfoCard = () => {
	return (
		<div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
			<div className="flex justify-between">
				<h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-600 dark:text-white">
					Sprint Insights
				</h5>
				<MdInsights className="mb-3 h-7 w-7 text-gray-600 dark:text-white" />
			</div>
			<div className="mt-7 flex justify-between">
				<h6 className="mb-2 text-xl font-semibold tracking-tight text-gray-500 dark:text-gray-300">
					Sprint Name
				</h6>
				<h6 className="mb-2 text-xl font-semibold tracking-tight text-gray-500 dark:text-gray-300">
					Total Issues
				</h6>
			</div>
			<div className=" flex justify-between">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-500">
					AP-SPRINT 2
				</h5>
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-500">
					6
				</h5>
			</div>
		</div>
	);
};

export default InfoCard;
