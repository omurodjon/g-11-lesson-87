import React from 'react';
import christina from './images/christina-wocintechchat-com-YVT21p6pO_g-unsplash 1.png';
import gr_34 from './images/Group 34.png';
import vector from './images/Vector.svg';
import vector2 from './images/Vector (1).svg';
export default function Working() {
	return (
		<div className="flex  mt-52 ms-48  py-12 gap-7">
			<div className="texts flex flex-col gap-5">
				<p className="text-[#FF5C00] text-[12px]  font-extrabold ">How it works</p>
				<h1 className="text-[#353434] text-[40px] w-[450px]">
					Start find a job you love with us easily
				</h1>
				<div className="complete flex bg-[#F5F7FF] rounded-lg h-[60px] w-[440px]  items-center ps-3">
					<div className="number bg-[#F3E0FF] w-[45px] h-[45px] rounded-lg  ">
						<span className="text-[#9444C9] text-[30px] flex items-center justify-center ">1</span>
					</div>
					<p className="text-[#323232] text-[20px] font-semibold ms-6">Complete Profile</p>
					<img className="w-[20px] h-[30px] ms-40" src={vector} alt="" />
				</div>
				<div className="vacancies bg-[#F5F7FF]  h-[125px] w-[440px] ">
					<div className="vacancies_row flex mt-[7px] rounded-lg  items-center ps-3">
						<div className="number bg-[#E7E9FE] w-[45px] h-[45px] rounded-lg  ">
							<span className="text-[#626FFF] text-[30px] flex items-center justify-center ">
								2
							</span>
						</div>
						<p className="text-[#323232] text-[20px] font-semibold ms-6">Search Vacancies</p>
						<img className="w-[20px] h-[30px] ms-40" src={vector2} alt="" />
					</div>
					<p className=" text-[#A8A8A8] text-[12px] w-[360px] ms-20">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation.
					</p>
				</div>
				<div className="apply_job flex bg-[#F5F7FF] rounded-lg h-[60px] w-[440px]  items-center ps-3">
					<div className="number bg-[#FFDECC] w-[45px] h-[45px] rounded-lg  ">
						<span className="text-[#FF5C00] text-[30px] flex items-center justify-center ">2</span>
					</div>
					<p className="text-[#323232] text-[20px] font-semibold ms-6">Apply Job</p>
					<img className="w-[20px] h-[30px] ms-[220px] " src={vector} alt="" />
				</div>
			</div>
			<div className="image relative top-10">
				<img src={christina} alt="" />
				<img className=" absolute bottom-44 start-[45%]" src={gr_34} alt="" />
			</div>
		</div>
	);
}
