import Image from "next/image";

export default function Home() {
	return (
		<div>
			<div className="xs:h-[50rem] h-[27rem] w-screen bg-gradient-to-r from-[#022534] to-[#05445E] flex xs:flex-col justify-between">
				<div className="">
					<div className="xs:m-8 xs:mb-0 m-24 mr-0 text-white rxs:w-[50vw]">
						<h1 className="xs:text-2xl text-3xl font-extrabold font-rubikBold">
							Be better at DSA & CP
						</h1>
						<p className="xs:w-[16rem] w-[24rem]  mt-4 text-xs leading-[20px] font-dmSans">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua
						</p>

						<div className="xs:hidden">
							<div className="flex gap-[10px] mt-4 xs:flex-col">
								<button className="bg-[#FFFFFF] text-[#05445E] text-xs py-[8px] px-[20px] rounded-[8px] flex font-bold border-[1px] font-dmSans justify-center">
									Join now{" "}
									{
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-4 h-4 font-bold">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
											/>
										</svg>
									}
								</button>
								<button className="bg-gradient-to-r to-[#005C83] from-[#033042] text-xs py-[8px] px-[20px] rounded-[8px] border-[1px] font-dmSans">
									View curriculum
								</button>
							</div>
							<div className="mt-6 flex gap-8">
								<div className="flex gap-3">
									<div className="relative h-[28px] w-[28px]">
										<div className="absolute -inset-px bg-gradient-to-t from-[#2D5666] to-[#CFF1FF] rounded-[3px]"></div>
										<div
											className="absolute inset-0 bg-[#022534]"
											aria-hidden="true"></div>
									</div>
									<div className="text-xs items-center flex font-dmSans">
										Lorem ipsum dolor sit amet
									</div>
								</div>

								<div className="flex gap-3">
									<div className="relative h-[28px] w-[28px]">
										<div className="absolute -inset-px bg-gradient-to-t from-[#2D5666] to-[#CFF1FF] rounded-[3px]"></div>
										<div
											className="absolute inset-0 bg-[#022534]"
											aria-hidden="true"></div>
									</div>
									<div className="text-xs items-center flex font-dmSans">
										Lorem ipsum dolor sit amet
									</div>
								</div>
							</div>

							<div className="mt-6 flex gap-8">
								<div className="flex gap-3">
									<div className="relative h-[28px] w-[28px]">
										<div className="absolute -inset-px bg-gradient-to-t from-[#2D5666] to-[#CFF1FF] rounded-[3px]"></div>
										<div
											className="absolute inset-0 bg-[#022534]"
											aria-hidden="true"></div>
									</div>
									<div className="text-xs items-center flex font-dmSans">
										Lorem ipsum dolor sit amet
									</div>
								</div>

								<div className="flex gap-3">
									<div className="relative h-[28px] w-[28px]">
										<div className="absolute -inset-px bg-gradient-to-t from-[#2D5666] to-[#CFF1FF] rounded-[3px]"></div>
										<div
											className="absolute inset-0 bg-[#022534]"
											aria-hidden="true"></div>
									</div>
									<div className="text-xs items-center flex font-dmSans">
										Lorem ipsum dolor sit amet
									</div>
								</div>
							</div>
						</div>

						<div className="xs:block hidden">
							<div className="mt-6 flex gap-8 xs:gap-3">
								<div className="flex gap-3">
									<div className="relative h-[28px] w-[28px]">
										<div className="absolute -inset-px bg-gradient-to-t from-[#2D5666] to-[#CFF1FF] rounded-[3px]"></div>
										<div
											className="absolute inset-0 bg-[#022534]"
											aria-hidden="true"></div>
									</div>
									<div className="text-xs items-center flex font-dmSans">
										Lorem ipsum dolor sit amet
									</div>
								</div>

								<div className="flex gap-3">
									<div className="relative h-[28px] w-[28px]">
										<div className="absolute -inset-px bg-gradient-to-t from-[#2D5666] to-[#CFF1FF] rounded-[3px]"></div>
										<div
											className="absolute inset-0 bg-[#022534]"
											aria-hidden="true"></div>
									</div>
									<div className="text-xs items-center flex font-dmSans">
										Lorem ipsum dolor sit amet
									</div>
								</div>
							</div>

							<div className="mt-6 xs:gap-3 flex gap-8">
								<div className="flex gap-3">
									<div className="relative h-[28px] w-[28px]">
										<div className="absolute -inset-px bg-gradient-to-t from-[#2D5666] to-[#CFF1FF] rounded-[3px]"></div>
										<div
											className="absolute inset-0 bg-[#022534]"
											aria-hidden="true"></div>
									</div>
									<div className="text-xs items-center flex font-dmSans">
										Lorem ipsum dolor sit amet
									</div>
								</div>

								<div className="flex gap-3">
									<div className="relative h-[28px] w-[28px]">
										<div className="absolute -inset-px bg-gradient-to-t from-[#2D5666] to-[#CFF1FF] rounded-[3px]"></div>
										<div
											className="absolute inset-0 bg-[#022534]"
											aria-hidden="true"></div>
									</div>
									<div className="text-xs items-center flex font-dmSans">
										Lorem ipsum dolor sit amet
									</div>
								</div>
							</div>

							<div className="flex gap-[10px] mt-4 xs:flex-col">
								<button className="bg-[#FFFFFF] text-[#05445E] text-xs py-[8px] px-[20px] rounded-[8px] flex font-bold border-[1px] font-dmSans justify-center">
									Join now{" "}
									{
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-4 h-4 font-bold">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
											/>
										</svg>
									}
								</button>
								<button className="bg-gradient-to-r to-[#005C83] from-[#033042] text-xs py-[8px] px-[20px] rounded-[8px] border-[1px] font-dmSans">
									View curriculum
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="rxs:flex rxs:items-center rxs:justify-center rxs:w-[50vw]">
					<img
						src="https://res.cloudinary.com/dikpmkuiw/image/upload/v1688361099/algozenith-logo_n8zvt1.png"
						className="h-[30rem] w-[30rem] lg:w-[40rem] "
					/>
				</div>
			</div>

			<div className="flex xs:flex-col mb-8">
				<div className="m-24 xs:m-8 xs:mx-6 ">
					<h1 className="xs:text-2xl text-3xl font-rubikBlack font-bold">
						Invest in skills,
						<br />{" "}
						<span className="bg-gradient-to-r bg-clip-text text-transparent from-[#05445E] to-[#3F6FC1]">
							earn 10x
						</span>{" "}
						of what you <br />
						paid.
					</h1>
					<p className="mt-6 xs:w-[80vw] w-[35vw] text-xs leading-5 font-dmSans font-medium">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>

					<div className="grid grid-cols-2 mt-16 gap-y-8">
						<div className="flex gap-3 xs:gap-2">
							<div className="xs:h-[32px] xs:w-[32px] h-[36px] w-[36px] bg-[#D9D9D9] rounded-[4px]"></div>
							<div className="flex flex-col ">
								<span className="text-base xs:text-sm font-dmSans font-bold">
									1.2 Cr/year
								</span>
								<span className="xs:text-[10px] text-xs font-dmSans">
									highest fresher package
								</span>
							</div>
						</div>

						<div className="flex gap-3">
							<div className="xs:h-[32px] xs:w-[32px] h-[36px] w-[36px] bg-[#D9D9D9] rounded-[4px]"></div>
							<div className="flex flex-col ">
								<span className="text-base xs:text-sm font-dmSans font-bold">
									Multiple {"<100"} ranks
								</span>
								<span className="xs:text-[10px] text-xs font-dmSans">
									in kickstart last year
								</span>
							</div>
						</div>

						<div className="flex gap-3">
							<div className="xs:h-[32px] xs:w-[32px] h-[36px] w-[36px] bg-[#D9D9D9] rounded-[4px]"></div>
							<div className="flex flex-col ">
								<span className="text-base xs:text-sm font-dmSans font-bold">
									1000+ Offers
								</span>
								<span className="xs:text-[10px] text-xs font-dmSans">
									from top companies
								</span>
							</div>
						</div>

						<div className="flex gap-3">
							<div className="xs:h-[32px] xs:w-[32px] h-[36px] w-[36px] bg-[#D9D9D9] rounded-[4px]"></div>
							<div className="flex flex-col ">
								<span className="text-base xs:text-sm font-dmSans font-bold">
									Trusted by IITians
								</span>
								<span className="xs:text-[10px] text-xs font-dmSans">
									for their career prep
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="xs:flex xs:justify-center rxs:flex rxs:items-center rxs:justify-center rxs:w-[50vw]">
					<div className="w-[320px] ml-40 xs:ml-0  mt-12 border-[1px] border-[#05445E59] rounded-[8px] h-fit">
						<div className="flex justify-between">
							<div className="flex flex-col xs:pb-0 p-4">
								<span className="text-xs font-dmSans font-bold">
									Premium Victory Batch
								</span>
								<span className="font-rubikBlack font-bold xs:text-2xl text-3xl text-[#818181] line-through decoration-1">
									₹19,999
								</span>
								<span className="font-rubikBlack font-extrabold xs:text-3xl text-4xl bg-gradient-to-r bg-clip-text text-transparent from-[#3F6FC1] to-[#05445E]">
									₹13,999
								</span>
							</div>
							<div>
								<img
									src="https://res.cloudinary.com/dikpmkuiw/image/upload/v1688367322/algozenith-img2_mail2m.png"
									className="w-32 h-32 object-cover"
								/>
							</div>
						</div>
						<div className="flex flex-col bg-gradient-to-t from-[#022534] to-[#05445E] p-5 gap-5 text-[#FFFFFF] text-xs font-dmSans rounded-bl-[8px] rounded-br-[8px]">
							<div className="flex gap-3">
								<div className="relative xs:h-[32px] xs:w-[32px] h-[36px] w-[36px]">
									<div className="absolute -inset-px bg-gradient-to-t from-[#2D5666] to-[#CFF1FF] rounded-[3px]"></div>
									<div
										className="absolute inset-0 bg-[#05445E]"
										aria-hidden="true"></div>
								</div>
								<div className="text-xs items-center w-[250px] flex">
									100+ Hrs Live Content
								</div>
							</div>

							<div className="flex gap-3">
								<div className="relative xs:h-[32px] xs:w-[32px] h-[36px] w-[36px]">
									<div className="absolute -inset-px bg-gradient-to-t from-[#2D5666] to-[#CFF1FF] rounded-[3px]"></div>
									<div
										className="absolute inset-0 bg-[#05445E] "
										aria-hidden="true"></div>
								</div>
								<div className="text-xs items-center w-[250px] flex">
									50+ Hrs Content
								</div>
							</div>

							<div className="flex gap-3">
								<div className="relative xs:h-[32px] xs:w-[32px] h-[36px] w-[36px]">
									<div className="absolute -inset-px bg-gradient-to-t from-[#2D5666] to-[#CFF1FF] rounded-[3px]"></div>
									<div
										className="absolute inset-0 bg-[#05445E] "
										aria-hidden="true"></div>
								</div>
								<div className="text-xs items-center w-[250px] flex">
									500+ Problems
								</div>
							</div>

							<div className="flex gap-3">
								<div className="relative xs:h-[32px] xs:w-[32px] h-[36px] w-[36px]">
									<div className="absolute -inset-px bg-gradient-to-t from-[#2D5666] to-[#CFF1FF] rounded-[3px]"></div>
									<div
										className="absolute inset-0 bg-[#05445E] "
										aria-hidden="true"></div>
								</div>
								<div className="text-xs items-center w-[250px] flex">
									Includes an interview bootcamp and access to a mentor network
								</div>
							</div>

							<div className="flex gap-3">
								<div className="relative xs:h-[32px] xs:w-[32px] h-[36px] w-[36px]">
									<div className="absolute -inset-px bg-gradient-to-t from-[#2D5666] to-[#CFF1FF] rounded-[3px]"></div>
									<div
										className="absolute inset-0 bg-[#05445E] "
										aria-hidden="true"></div>
								</div>
								<div className="text-xs items-center w-[250px] flex">
									Enjoy access to our content for one year (paid extensions
									available)
								</div>
							</div>

							<div className="flex gap-3">
								<div className="relative xs:h-[32px] xs:w-[32px] h-[36px] w-[36px]">
									<div className="absolute -inset-px bg-gradient-to-t from-[#2D5666] to-[#CFF1FF] rounded-[3px]"></div>
									<div
										className="absolute inset-0 bg-[#05445E] "
										aria-hidden="true"></div>
								</div>
								<div className="text-xs items-center w-[250px] flex">
									Flexible payment options, including no-cost EMI, are
									available.
								</div>
							</div>

							<button className="bg-[#FFFFFF] text-[#05445E] text-xs py-[8px] px-[20px] rounded-[8px] flex font-bold font-dmSans border-[1px] flex justify-center">
								Join now{" "}
								{
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-4 h-4 font-bold">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
										/>
									</svg>
								}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
