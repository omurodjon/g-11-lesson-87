import gr_1 from './images/Group 1.svg';
import gr_43 from './images/Group 43.svg';

export default function Footer() {
	return (
		<div className=" bg-[#DBE2FF] h-[425px] rounded-t-3xl  pt-24 mt-24">
			<div className="categories flex  items-center justify-center gap-32">
				<div className="Olearn flex flex-col gap-4">
					<h1 className=" text-[#353434] text-[24px] font-normal  font-mono">Olearn</h1>
					<p className=" text-[#717171] text-[16px] font-sans font-normal">About</p>
					<p className=" text-[#717171] text-[16px] font-sans font-normal">What we offer</p>
					<p className=" text-[#717171] text-[16px] font-sans font-normal">Leadership</p>
					<p className=" text-[#717171] text-[16px] font-sans font-normal">Careers</p>
				</div>
				<div className="Courses flex flex-col gap-4">
					<h1 className=" text-[#353434] text-[24px] font-normal  font-mono">Courses</h1>
					<p className=" text-[#717171] text-[16px] font-sans font-normal">Classroom courses</p>
					<p className=" text-[#717171] text-[16px] font-sans font-normal">Virtual courses</p>
					<p className=" text-[#717171] text-[16px] font-sans font-normal">E-Learning Courses</p>
					<p className=" text-[#717171] text-[16px] font-sans font-normal">off line courses</p>
				</div>
				<div className="Community flex flex-col gap-4">
					<h1 className=" text-[#353434] text-[24px] font-normal  font-mono">Community</h1>
					<p className=" text-[#717171] text-[16px] font-sans font-normal">Learner</p>
					<p className=" text-[#717171] text-[16px] font-sans font-normal">Partners</p>
					<p className=" text-[#717171] text-[16px] font-sans font-normal">Developers</p>
					<p className=" text-[#717171] text-[16px] font-sans font-normal">Teachin Center</p>
				</div>
				<div className="Quick Links flex flex-col gap-4">
					<h1 className=" text-[#353434] text-[24px] font-normal  font-mono">Quick Links</h1>
					<p className=" text-[#717171] text-[16px] font-sans font-normal">Home</p>
					<p className=" text-[#717171] text-[16px] font-sans font-normal">Professional Edu</p>
					<p className=" text-[#717171] text-[16px] font-sans font-normal">Courses</p>
					<p className=" text-[#717171] text-[16px] font-sans font-normal">Admissions</p>
				</div>
				<div className="More flex flex-col gap-4">
					<h1 className=" text-[#353434] text-[24px] font-normal  font-mono">More</h1>
					<p className=" text-[#717171] text-[16px] font-sans font-normal">Press</p>
					<p className=" text-[#717171] text-[16px] font-sans font-normal">Inventors</p>
					<p className=" text-[#717171] text-[16px] font-sans font-normal">Helps</p>
					<p className=" text-[#717171] text-[16px] font-sans font-normal">Terms</p>
				</div>
			</div>
			<div className="line bg-[#625BAE] h-[3px] w-[1090px] ms-52  mt-16 "></div>
			<div className="flex ms-56 mt-4  gap-36 ">
				<div className="flex  gap-2">
					<img src={gr_1} alt="" /> <h3 className=" text-[#272626] text-[16px] font-bold">ZIRO</h3>
				</div>

				<div className="flex gap-12">
					<p className="text-[#3A2E5C] text-[16px] font-semibold ">Team of Use</p>
					<p className="text-[#3A2E5C] text-[14px] font-semibold ">Portfolio</p>
					<p className="text-[#3A2E5C] text-[14px] font-semibold ">Privacy policy</p>
					<p className="text-[#3A2E5C] text-[14px] font-semibold ">Contact Us</p>
					<p className="text-[#3A2E5C] text-[14px] font-semibold ">FAQ</p>
				</div>
				<img src={gr_43} alt="" />
			</div>
		</div>
	);
}
