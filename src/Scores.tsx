import React from 'react';

export default function Scores() {
	return (
		<div>
			<div className="flex bg-[#CED5F4] w-[1110px] h-[220px] my-10 rounded-3xl items-center justify-center gap-24 ms-48">
				<div className="flex flex-col items-center  justify-center">
					<h2 className=" text-[#584EC6] text-[40px]">36,789</h2>
					<p className="text-[16px] text-[#FFFFFF]"> Talented Freelancer</p>
				</div>
				<div className="flex flex-col items-center  justify-center">
					<h2 className=" text-[#584EC6] text-[40px]">45,973</h2>
					<p className="text-[16px] text-[#FFFFFF]">Visitors</p>
				</div>
				<div className="flex flex-col items-center  justify-center">
					<h2 className=" text-[#584EC6] text-[40px]">56,461</h2>
					<p className="text-[16px] text-[#FFFFFF]">Contract Made</p>
				</div>
				<div className="flex flex-col items-center  justify-center">
					<h2 className=" text-[#584EC6] text-[40px]">852k</h2>
					<p className="text-[16px] text-[#FFFFFF]">Companies</p>
				</div>
			</div>
		</div>
	);
}
