import { ArrowDropUpOutlined, Start } from "@mui/icons-material"
import { navlogo } from "../../assets/images/images"
import { Star,ChevronDown, Forward, EllipsisVertical } from "lucide-react"
import { CircularProgress } from "@mui/material"

const LmsNav = () => {
  return (
    <>
        <div className=" max-w-[100%]">
            <div className=" w-[97%] mx-auto py-3">
                <div className="grid grid-cols-2 md:grid-cols-2 justify-between">
                    <div className=" flex items-center gap-5 ">
                        <img src={navlogo} alt="LmsLogo" width={100} />
                        <div>
                            <h1 className=" border-l-2 pl-5 pr-10 xl:text-base text-sm font-[poppins] md:w-[300px] lg:w-[400px] xl:w-full truncate md:block hidden font-bold">Web Design for Web Developers: Build Beautiful Websites!
                            </h1>
                        </div>
                    </div>
                    <div className=" justify-end flex items-center gap-5">
                        <div className="md:flex items-center gap-2 flex-nowrap hidden">
                            <Star className=" fill-gray-100 stroke-gray-300"/>
                            <p className=" font-[poppins] text-nowrap text-sm font-medium">Leave a rating</p>
                        </div>
                        <div className=" md:flex items-center gap-2 hidden">
                            <div>
                                <CircularProgress variant="determinate" value={100} />
                            </div>
                            <h1 className=" lg:flex items-center font-[poppins] text-nowrap text-sm hidden font-medium">Your progress <ChevronDown className="w-5 mt-1"/></h1>
                        </div>
                        <div className=" flex items-center gap-2">
                            <button className=" font-bold font-[poppins] flex items-center p-2 border-2 text-sm">Share <Forward/></button>
                            <button className=" border-2 p-2"><EllipsisVertical/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default LmsNav