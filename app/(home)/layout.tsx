import { ChildProps } from "@/types/index.d";
import { Navbar } from "./components";

const HomeLayout = ({ children }: ChildProps) => {
	return (
		<div className="h-full">
			<Navbar />
			<main className="h-full pt-40">
				{children}
			</main>
		</div>
	);
};

export default HomeLayout;
