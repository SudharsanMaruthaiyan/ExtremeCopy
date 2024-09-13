import { data } from "autoprefixer"
import { Search,ArrowRight, X } from "lucide-react"
import { useState } from "react"
import { accordionData } from "../../../assets/Api/accordionData"
import Week1 from "../../Week1/Week1"
import Week2 from "../../Week2/Week2"
import Week3 from "../../Week2-3/Week3"
import Week6 from "../../Week3-6/Week6"
import Week8 from "../../Week6-8/Week8"
import Week10 from "../../Week8-10/Week10"
import FeatureVideo from "../../Week1VideoComponents/FeatureVideo/FeatureVideo"
import LmsNav from "../../LmsNav/LmsNav"
import Display from "../../Display/Display"

import { resizeable } from "../../../assets/images/images"
import { PanelResizeHandle, Panel, PanelGroup } from "react-resizable-panels"
import { Clock, IndianRupee } from "lucide-react"
import { Tab, TabPanel, Tabs, TabsList } from "@mui/base";
import Week1Copy from "../../Week1Copy"

const Features = () => {
    const [open, setOpen] = useState(false)
    const [downopen , setDownopen] = useState(false)
    const [isHovered, setIsHovered] = useState(false);
  return (
    <>
        <div className=' max-w-[100%]'>
            <div className=''> 
                <div>
                    <LmsNav/>
                </div>
                <div className={` absolute top-20 ${open?' md:block hidden' : ' hidden'} `}>
                    <div className="flex justify-start" onClick={()=>
                        {
                            return setOpen(!open)
                        }
                    }>
                        <div 
                            className="flex items-center bg-transparent border-2 border-[#] hover:bg-[#151A30] text-white p-3 rounded-r-md cursor-pointer transition-all duration-300 ease-in-out"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <span className={`overflow-hidden text-nowrap transition-all duration-300 ease-in-out ${isHovered ? 'w-32 opacity-100' : 'w-0 opacity-0'} ${open?'' : ' '}`}>
                            Syllabus
                            </span>
                            <ArrowRight className="w-6 h-6"/>
                        </div>
                    </div>
                </div>

                {/* resizable pannels start*/}
                <div className={`${open?'hidden':' md:block hidden'}`}>
                    <PanelGroup autoSaveId="example" direction="horizontal" className={' '}>
                        <Panel defaultSize={30}>
                            <div className={`order-2 md:order-1 ${open?'fixed ml-[-600px] transition duration-300 ease-in-out' : ' ml-[0px] transition-all duration-300 ease-in-out md:col-span-3 col-span-10 '}`}>
                                <div >
                                    <div className={` flex justify-between items-center w-full px-5 py-3`}>
                                        <h1 className=" text-lg font-bold font-[poppins] flex justify-between w-full items-center">Syllabus </h1>
                                        <X className=" cursor-pointer" onClick={()=>setOpen(!open)}/>
                                    </div>
                                </div>
                                <div>
                                    <div className="overflow-y-auto h-[700px]" id="open">
                                        {accordionData.map((data, index) => {
                                            if (data.type === 'week1') {
                                            return <Week1 key={index}  title={data.title} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion} option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} option5={data.option5} toggle={()=>toggle(index)}/>;
                                            }
                                            else if (data.type === 'week2') {
                                            return <Week2 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion} option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} option5={data.option5} option6={data.option6} toggle={()=>toggle(index)} />
                                            }
                                            else if (data.type === 'week2-3') {
                                            return <Week3 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion}
                                            option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} option5={data.option5} toggle={()=>toggle(index)} />
                                            }
                                            else if (data.type === 'week3-6') {
                                            return <Week6 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion}
                                            option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} option5={data.option5} toggle={()=>toggle(index)} />
                                            }
                                            else if (data.type === 'week6-8') {
                                            return <Week8 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion}
                                            option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} toggle={()=>toggle(index)} />
                                            }
                                            else if (data.type === 'week8-10') {
                                            return <Week10 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion}
                                            option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} toggle={()=>toggle(index)} />
                                            }
                                        })}    
                                    </div>   
                                </div>
                            </div>
                        </Panel>
                        
                        <PanelResizeHandle withHandle className={`flex items-center h-svh justify-center ${open? 'hidden' : ' block'}`}>
                            <img src={resizeable} alt="resizeable" className=" w-3"/>
                        </PanelResizeHandle>
                        
                        <Panel defaultSize={75} className={`${open?' ' : ' w-full'}`}>
                            <div className={` order-1 md:order-2 ${open?'col-span-10' : '  md:col-span-7 col-span-10'}`}>
                                <FeatureVideo/>
                                <Tabs defaultValue={1}>
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
                                }} className={` ${open?'':''}`}>
                                
                                <button  className='font-[poppins] font-bold text-sm'>SYLLABUS</button>
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
                                <div className={`${open?'block' : 'hidden'}`}>
                                </div>
                            </TabPanel>
                        </Tabs>
                            </div>
                        </Panel>

                    </PanelGroup>
                </div>
                {/* resizable pannels end*/}

                <div className={`grid grid-cols-10 ${open?' block ':'md:hidden block'}`}>
                    <div className={`order-2 md:order-1 md:block hidden ${open?'fixed ml-[-600px] transition duration-300 ease-in-out' : ' ml-[0px] transition-all duration-300 ease-in-out md:col-span-3 col-span-10 '}`}>
                        <div >
                            <div className={` flex justify-between items-center w-full px-5 py-3`}>
                                <h1 className=" text-lg font-bold font-[poppins] flex justify-between w-full items-center">Syllabus </h1>
                                <X className=" cursor-pointer" onClick={()=>setOpen(!open)}/>
                            </div>
                        </div>
                        <div>
                            <div className="overflow-y-auto h-[700px]" id="open">
                                {accordionData.map((data, index) => {
                                    if (data.type === 'week1') {
                                    return <Week1 key={index}  title={data.title} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion} option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} option5={data.option5} toggle={()=>toggle(index)}/>;
                                    }
                                    else if (data.type === 'week2') {
                                    return <Week2 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion} option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} option5={data.option5} option6={data.option6} toggle={()=>toggle(index)} />
                                    }
                                    else if (data.type === 'week2-3') {
                                    return <Week3 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion}
                                    option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} option5={data.option5} toggle={()=>toggle(index)} />
                                    }
                                    else if (data.type === 'week3-6') {
                                    return <Week6 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion}
                                    option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} option5={data.option5} toggle={()=>toggle(index)} />
                                    }
                                    else if (data.type === 'week6-8') {
                                    return <Week8 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion}
                                    option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} toggle={()=>toggle(index)} />
                                    }
                                    else if (data.type === 'week8-10') {
                                    return <Week10 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion}
                                    option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} toggle={()=>toggle(index)} />
                                    }
                                })}    
                            </div>   
                        </div>
                    </div>

                    <div className={` order-1 md:order-2 ${open?'col-span-10' : '  md:col-span-7 col-span-10'}`}>
                        <FeatureVideo/>
                        <Tabs defaultValue={1}>
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
                                }} className={` `}>
                                    {/* ${open?'block':'hidden'} */}
                                <button  className='font-[poppins] font-bold text-sm'>SYLLABUS</button>
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
                                <div className={`   ${open?'block' : 'md:hidden block'}`}>
                                    {/* <h1 className=" text-lg font-bold font-[poppins] flex justify-between w-full items-center p-5">Syllabus </h1> */}
                                    <div className="overflow-y-auto h-[700px]" id="open">
                                        {accordionData.map((data, index) => {
                                            if (data.type === 'week1') {
                                            return <Week1Copy key={index}  title={data.title} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion} option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} option5={data.option5} toggle={()=>toggle(index)}  />;
                                            }
                                            else if (data.type === 'week2') {
                                            return <Week2 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion} option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} option5={data.option5} option6={data.option6} toggle={()=>toggle(index)} />
                                            }
                                            else if (data.type === 'week2-3') {
                                            return <Week3 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion}
                                            option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} option5={data.option5} toggle={()=>toggle(index)} />
                                            }
                                            else if (data.type === 'week3-6') {
                                            return <Week6 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion}
                                            option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} option5={data.option5} toggle={()=>toggle(index)} />
                                            }
                                            else if (data.type === 'week6-8') {
                                            return <Week8 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion}
                                            option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} toggle={()=>toggle(index)} />
                                            }
                                            else if (data.type === 'week8-10') {
                                            return <Week10 key={index}  title={data.title} options={data.options} duration={data.duration} quiz={data.quiz} quizDuration={data.quizDuration} quizQuesion={data.quizQuesion}
                                            option1={data.option1} option2={data.option2} option3={data.option3} option4={data.option4} toggle={()=>toggle(index)} />
                                            }
                                        })}    
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Features