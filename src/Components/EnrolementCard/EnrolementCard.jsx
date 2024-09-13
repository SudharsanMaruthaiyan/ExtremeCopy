import { Clock, IndianRupee } from "lucide-react"
import { Tab, TabPanel, Tabs, TabsList } from "@mui/base";

const EnrolementCard = (props) => {
  return (
    <>
      <div>
        <div className=" bg-[#D9D9D9] p-5 rounded-2xl ">
          <div className=" bg-[#151A30] text-white p-8 rounded-2xl py-20">
            <ul className=" flex items-center gap-1 pb-8 flex-wrap md:flex-nowrap">
              <li className=" font-[poppins] "><a href="">{props.store}</a></li>
              <li className=" font-[poppins] "><a href="">{props.course}</a></li>
              <li className=" font-[poppins] "><a href="">{props.flowchart}</a></li>
            </ul>
            <div className=" py-5">
              <h1 className=" text-[26px] font-[poppins]">{props.flowchart}</h1>
              <p className=" font-medium font-[poppins] text-sm">{props.des}</p>
            </div>
            <div className=" flex items-center gap-4 flex-wrap md:flex-nowrap">
              <p className=" flex items-center text-xl font-bold"><IndianRupee className=" stroke-[3px] w-5 mt-1"/>{props.price}</p>
              <div className=" flex items-center gap-2">
                <p>Till <span className=" font-bold font-[poppins] text-sm">{props.valid}</span></p>
                <button className="text-[#0091E6] opacity-85 bg-[#151A30] border-[#0091E6] border w-fit px-3 py-[6px] rounded-md text-sm font-medium hover:bg-[#122E51]">{props.change}</button>
              </div>
            </div>
            <div className=" flex items-center gap-3 py-4">
              <button className=" font-medium font-[poppins] bg-[#df4141] rounded-md px-3 py-3 text-sm hover:bg-[#F3867C]">{props.buy}</button>
              <button className=" font-medium font-[poppins] bg-[#df4141] rounded-md px-3 py-3 text-sm hover:bg-[#F3867C]">{props.enroll}</button>
            </div>
            <div className=" flex items-center gap-4 flex-wrap md:flex-nowrap">
              <p className=" font-medium font-[poppins] text-base">{props.purchase}</p>
              <p><a href="" className=" underline text-[#7F80D7] text-sm">{props.signin}</a></p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}


export default EnrolementCard