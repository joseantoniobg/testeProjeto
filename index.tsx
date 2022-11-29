import ImageCat from "components/Alerts/ErrorAlert/ImageSVG";
import Tab from "components/Tab";
import Link from "next/link";
import React from "react";

export default function Home() {
	return (
		<div>
			<Tab />
			<div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
				<div className="flex flex-col text-gray-700 lg:flex-row lg:space-x-16 lg:space-x-reverse">
					<div className="order-1 max-w-md px-2 text-sm md:text-base lg:px-0">
						<header className="mb-6">
							<h2 className="text-4xl font-bold leading-none text-gray-400 select-none lg:text-6xl">
								Página Indisponível.
							</h2>
							<h3 className="text-xl font-light leading-normal lg:text-3xl md:text-3xl">
								Ops.. Algo errado aconteceu!
							</h3>
						</header>
						<Link href="/login">
							<a className="inline px-4 py-2 text-sm font-medium leading-5 text-white uppercase transition-colors duration-150 bg-blue-dark border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue active:bg-blue-600 hover:bg-blue-500">
								Ir para o login
							</a>
						</Link>
					</div>
					<div className="max-w-lg">
						<ImageCat />
					</div>
				</div>
			</div>
		</div>
	);
}
