import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
export default function ProjectsLayout({ children }) {
	return (
		<>
			<Navbar />
			<Sidebar />
			<main>{children}</main>
		</>
	);
}
