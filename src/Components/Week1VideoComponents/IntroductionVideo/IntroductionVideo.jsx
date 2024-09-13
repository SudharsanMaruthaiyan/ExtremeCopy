import { Clock, IndianRupee } from "lucide-react"
import { Tab, TabPanel, Tabs, TabsList } from "@mui/base";
const IntroductionVideo = () => {
  return (
    <>
      <div>
        <div className="bg-[#D9D9D9] p-5 rounded-2xl">
          <div className=" bg-[#151A30] text-white p-5 rounded-2xl w-full">
          <iframe height="415" width={100} src="https://www.youtube.com/embed/gsG7uj9-4Jo?si=U-yurd7aaAhe6-V4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="w-[100%] rounded-2xl"></iframe>
          </div>
        </div>
        {/* <Tabs defaultValue={1}>
            <TabsList className=" flex items-center">
              <Tab value={1} slotProps={{
                  root: ({ selected, disabled }) => ({
                    className: `font-[LexendDeca]  border-b-4 ${
                      selected
                        ? 'text-[#1363df] border-b-4 border-[#1363df] '
                        : 'text-[#39557e] border-b-o'
                    } ${
                      disabled ? 'cursor-not-allowed opacity-50 ' : 'cursor-pointer '
                    } text-[18px]  font-semibold px-8 py-3 flex justify-center focus:outline-0 `,
                  }),
                }}>
                
                <button  className=' font-[poppins] font-bold text-sm'>ABOUT</button>
              </Tab>
              <Tab value={2} slotProps={{
                  root: ({ selected, disabled }) => ({
                    className: `font-[LexendDeca]  border-b-4 ${
                      selected
                        ? 'text-[#1363df] border-b-4 border-[#1363df] '
                        : 'text-[#39557e]'
                    } ${
                      disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                    } text-[18px]  font-semibold px-8 py-3   flex justify-center focus:outline-0`,
                  }),
                }}>
                
                <button  className='font-[poppins] font-bold text-sm'>DISCUSSIONS</button>
              </Tab>
            </TabsList>
            <TabPanel value={1}>
              <div className=" p-8">
                <h1 className=" text-[26px] font-[poppins]">2IIM's Quants Course Flowchart</h1>
                <div className=" flex items-center shadow-lg gap-2 my-3 py-3 px-2">
                  <Clock className=" w-4"/>
                  <p>Expires in 5 months</p>
                </div>
                <div className=" flex items-center shadow-lg gap-2 my-3 py-3 px-2">
                  <Clock className=" w-4"/>
                  <p>Expires in 5 months</p>
                </div>
                <div className=" flex items-center shadow-lg gap-2 my-3 py-3 px-2">
                  <Clock className=" w-4"/>
                  <p>Expires in 5 months</p>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={2}>
                <h1>disscussion</h1>
            </TabPanel>
        </Tabs> */}
      </div>
    </>
  )
}

export default IntroductionVideo