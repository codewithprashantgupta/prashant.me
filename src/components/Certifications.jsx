import { certifications } from "../data/Certifications";

const Certifications = () => {
	return (
		<div name="certifications" className="w-full text-[#1e3751]">
			<div className="max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full">
				{/* Header */}
				<div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full pb-8">
					<div className="">
						<p className="text-4xl font-bold inline border-b-4 border-[#C3073F]">
							Certifications
						</p>
						{/* <p className="py-4">Few of my acquired certifciation</p> */}
					</div>
				</div>

				{/* Certification Container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
					{/* Grid Item */}
					{certifications.map((certification) => (
						<div
							key={certification.id}
							className="transform shadow-md shadow-[#040c16] group container rounded-md flex flex-col justify-between text-center items-center mx-auto py-2 px-4 overflow-auto hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer"
						>
							<a
								href={certification.certLink}
								target="_blank"
								className="w-full"
							>
								<div align="center">
									<img
										src={certification.badgeImagePath}
										className="w-52"
										alt={`${certification.certName} badge`}
									/>
									<h3 className="py-3 text-xl font-bold text-[#1e3751] ">
										{certification.certName}
									</h3>
								</div>
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Certifications;
