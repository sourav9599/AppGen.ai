"use client";
import Image from "next/image";
import HeroSection from "./HeroSection";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
export default function HomePage() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}
	return (
		<>
			{/* Hero Section: Image Side with Simple Header */}
			<div className="relative overflow-hidden bg-white dark:bg-gray-950 dark:text-gray-100">
				{/* Main Header */}
				<header
					id="page-header"
					className="relative flex flex-none items-center py-8"
				>
					{/* Main Header Content */}

					<div className="container mx-auto flex flex-col space-y-4 px-4 text-center sm:flex-row sm:items-center sm:justify-between sm:space-y-0 lg:px-8 xl:max-w-7xl">
						<div>
							<a
								href="#"
								className="group inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
							>
								<svg
									className="hi-mini hi-cube-transparent inline-block h-5 w-5 text-blue-600 transition group-hover:scale-110 dark:text-blue-400"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z"
										clipRule="evenodd"
									/>
								</svg>
								<span>APPGEN.ai</span>
							</a>
						</div>
						<nav className="space-x-3 md:space-x-6">
							<a
								href="#"
								className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
							>
								<span>Features</span>
							</a>
							<a
								href="#"
								className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
							>
								<span>Pricing</span>
							</a>
							<a
								href="#"
								className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
							>
								<span>Support</span>
							</a>
							<button
								type="button"
								onClick={() => setTheme(theme === "light" ? "dark" : "light")}
								className="mb-2 mr-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
							>
								{theme}
							</button>
						</nav>
					</div>
					{/* END Main Header Content */}
				</header>
				{/* END Main Header */}
				<HeroSection />
				{/* Hero Content */}
				{/* END Hero Content */}
				<Image
					src="/homepage-art.png"
					className="relative mx-auto rounded-lg shadow-lg"
					alt="Hero Image"
					width="2000"
					height="2000"
				/>
			</div>

			{/* END Hero Section: Image Side with Simple Header */}
		</>
	);
}
