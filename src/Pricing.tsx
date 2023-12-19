import gr_1 from './images/Group (1).svg';
export default function Pricing() {
	return (
		<div className=" py-16">
			<div className="nav flex flex-col items-center justify-center gap-6">
				<h1 className="text=[#353434] text-[40px] font-normal">Pricing Plan</h1>
				<p className="text-[#A8A8A8] text-[14px] font-normal w-[500px] text-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam.
				</p>
			</div>
			<div className="flex gap-5 mt-24 items-center justify-center">
				<div className="card flex flex-col gap-5 ps-6 justify-center w-[350px] h-[537px] rounded-lg bg-[#fff] shadow-lg shadow-slate-200 border-gray-700	">
					<div className="flex flex-col items-center justify-center gap-6">
						<h2 className="text-[#4238AF] text-[20px] font-semibold">FREE</h2>
						<h1 className=" text-[#353434] text-[45px] ">$0</h1>
						<p className=" text-[#8A86B9] text-[16px]">Per month</p>
						<div className="flex flex-col gap-5  justify-center">
							<div className="flex gap-2">
								<img src={gr_1} alt="" />
								<p className="text-[#A8A8A8] text-[14px]">Lorem ipsum dolor sit amet.</p>
							</div>
							<div className="flex gap-2">
								<img src={gr_1} alt="" />
								<p className="text-[#A8A8A8] text-[14px]">Ut enim ad minim veniam.</p>
							</div>
							<div className="flex gap-2">
								<img src={gr_1} alt="" />
								<p className="text-[#A8A8A8] text-[14px]">Lorem ipsum dolor sit amet.</p>
							</div>
						</div>
						<button className="w-[172px] h-[43px] bg-[#BDBBD9] text-[#FFFFFF] text-[16px] mt-20 rounded-full">
							Purchase Now
						</button>
					</div>
				</div>
				<div className="card2 flex flex-col gap-5 ps-6 justify-center w-[350px] mt-[-30px] h-[537px] rounded-lg bg-[#fff] shadow-lg shadow-slate-300 border-gray-700	">
					<div className="flex flex-col items-center justify-center gap-6">
						<h2 className="text-[#4238AF] text-[20px] font-semibold">PREMIUM</h2>
						<h1 className=" text-[#353434] text-[45px] ">$175</h1>
						<p className=" text-[#8A86B9] text-[16px]">Per month</p>
						<div className="flex flex-col gap-5  justify-center">
							<div className="flex gap-2">
								<img src={gr_1} alt="" />
								<p className="text-[#A8A8A8] text-[14px]">Lorem ipsum dolor sit amet.</p>
							</div>
							<div className="flex gap-2">
								<img src={gr_1} alt="" />
								<p className="text-[#A8A8A8] text-[14px]">Ut enim ad minim veniam.</p>
							</div>
							<div className="flex gap-2">
								<img src={gr_1} alt="" />
								<p className="text-[#A8A8A8] text-[14px]">Lorem ipsum dolor sit amet.</p>
							</div>
						</div>
						<button className="w-[172px] h-[43px] bg-[#544CAC] text-[#FFFFFF] text-[16px] mt-20 rounded-full">
							Purchase Now
						</button>
					</div>
				</div>
				<div className="card flex flex-col gap-5 ps-6 justify-center w-[350px] h-[537px] rounded-lg bg-[#fff] shadow-lg shadow-slate-200 border-gray-700	">
					<div className="flex flex-col items-center justify-center gap-6">
						<h2 className="text-[#4238AF] text-[20px] font-semibold">PLATINUM</h2>
						<h1 className=" text-[#353434] text-[45px] ">$500</h1>
						<p className=" text-[#8A86B9] text-[16px]">Per month</p>
						<div className="flex flex-col gap-5  justify-center">
							<div className="flex gap-2">
								<img src={gr_1} alt="" />
								<p className="text-[#A8A8A8] text-[14px]">Lorem ipsum dolor sit amet.</p>
							</div>
							<div className="flex gap-2">
								<img src={gr_1} alt="" />
								<p className="text-[#A8A8A8] text-[14px]">Ut enim ad minim veniam.</p>
							</div>
							<div className="flex gap-2">
								<img src={gr_1} alt="" />
								<p className="text-[#A8A8A8] text-[14px]">Lorem ipsum dolor sit amet.</p>
							</div>
						</div>
						<button className="w-[172px] h-[43px] bg-[#BDBBD9] text-[#FFFFFF] text-[16px] mt-20 rounded-full">
							Purchase Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
