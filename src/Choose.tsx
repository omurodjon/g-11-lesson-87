import gr from './images/Group.svg';

export default function Choose() {
	return (
		<div className="choose flex flex-col items-center justify-center py-[120px]">
			<div className="nav flex flex-col items-center justify-center gap-6">
				<h1 className="text=[#353434] text-[40px] font-normal">Why Choose Us</h1>
				<p className="text-[#A8A8A8] text-[14px] font-normal w-[500px] text-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam.
				</p>
			</div>
			<div className="cards flex gap-8 mt-20">
				<div className="card flex flex-col gap-5 ps-6 justify-center w-[350px] h-[255px] rounded-lg bg-[#fff] shadow-lg shadow-slate-200 border-gray-700	">
					<div className="img bg-[#6156DC] w-[60px] h-[60px] rounded-lg grid items-center justify-center">
						<img src={gr} alt="" />
					</div>
					<h3 className="text-[#323232] text-[20px] font-semibold	">Trused</h3>
					<p className=" text-[#8F8F8F] text-[14px] font-normal w-[276px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna.
					</p>
				</div>
				<div className="card2 flex flex-col gap-5 ps-6 justify-center w-[350px] mt-[-30px] h-[255px] rounded-lg bg-[#fff] shadow-lg shadow-slate-300 border-gray-700	">
					<div className="img bg-[#EF6010] w-[60px] h-[60px] rounded-lg grid items-center justify-center">
						<img src={gr} alt="" />
					</div>
					<h3 className="text-[#323232] text-[20px] font-semibold	">Easy to Use</h3>
					<p className=" text-[#8F8F8F] text-[14px] font-normal w-[276px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna.
					</p>
				</div>
				<div className="card3 flex flex-col gap-5 ps-6 justify-center w-[350px] h-[255px] rounded-lg bg-[#fff] shadow-lg shadow-slate-200 border-gray-700	">
					<div className="img bg-[#A73EED] w-[60px] h-[60px] rounded-lg grid items-center justify-center">
						<img src={gr} alt="" />
					</div>
					<h3 className="text-[#323232] text-[20px] font-semibold	">Faster</h3>
					<p className=" text-[#8F8F8F] text-[14px] font-normal w-[276px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna.
					</p>
				</div>
			</div>
		</div>
	);
}
