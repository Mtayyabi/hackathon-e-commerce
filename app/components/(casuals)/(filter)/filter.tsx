import { GiSettingsKnobs } from "react-icons/gi";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { GoChevronUp } from "react-icons/go";
import { Slider } from "@/components/ui/slider"
import App from "../../(slider)/slider";



export default function Filter(){
    return(
        <div>
            <div className="w-[95%] 2xl:w-[1240px] mx-auto">
                <div className="w-[295px] h-[1220px]  mt-[20px] border-2 border-black pt-5">

                    <div className="w-[248px] mx-auto  h-[1220px] border-2  ">
                       
                       {/* Filter Section */}
                        <div className="flex justify-between mb-[48px]">
                            <div className="text-[20px] font-bold">
                                Filter
                            </div>
                            {/* We have to add hide functionality */}
                            <div className="text-[24px] font-light rounded-full ">
                            <GiSettingsKnobs />

                            </div>
                        </div>

                        {/* clothes link */}
                        <div className="h-[160px] ">
                            
                            <div className="flex justify-start  " >
                                   <ul className=" space-y-5 ">
                                  
                                    {/* link 1 */}
                                 <div className="w-[247px] h-[16px] flex justify-between items-center ">
                                <li><Link href="#">T-Shirts</Link></li>
                                     
                                     {/* icon */}
                                <div className="">
                                <IoIosArrowForward />
                                </div>
                                
                                </div>

                                   {/* link 2 */}
                                   <div className="w-[247px] h-[16px] flex justify-between items-center ">
                                <li><Link href="#">Shorts</Link></li>
                                     
                                     {/* icon */}
                                <div className="">
                                <IoIosArrowForward />
                                </div>
                                
                                </div>

                                   {/* link 3 */}
                                   <div className="w-[247px] h-[16px] flex justify-between items-center ">
                                <li><Link href="#">Shirts</Link></li>
                                     
                                     {/* icon */}
                                <div className="">
                                <IoIosArrowForward />
                                </div>
                                
                                </div>

                                   {/* link 4 */}
                                   <div className="w-[247px] h-[16px] flex justify-between items-center">
                                <li><Link href="#">Hoodie</Link></li>
                                     
                                     {/* icon */}
                                <div className="">
                                <IoIosArrowForward />
                                </div>
                                
                                </div>

                                   {/* link 5 */}
                                   <div className="w-[247px] h-[16px] flex justify-between items-center ">
                                <li><Link href="#">Jeans</Link></li>
                                     
                                     {/* icon */}
                                <div className="">
                                <IoIosArrowForward />
                                </div>
                                
                                </div>
                                
                                </ul>

                            </div>
                        </div>

                        <br /><br />

                                {/*End of clothes link */}

                                {/* Price Slider */}
                                <div className="h-[90px]  ">
                                    {/* Heading */}
                                    <div className="h-[27px] w-[247px] mb-[20px]  flex justify-between items-center ">
                                        <div className="text-[20px] font-bold ">
                                            Price
                                        </div>
                                             {/* icon */}
                                        <div className="text-[16px] text-white" >
                                        <GoChevronUp />
                                        </div>
                                    </div>
                                    {/* slider */}
                                    <div className="h-[43px]  flex justify-center">
                                    <Slider className="w-[150px] h-[6px] font-extrabold" defaultValue={[50]} max={100} step={10} />
                                    
                                    </div>
                                </div>

                                <br /><br />

                                {/* colors panel */}

                                 
                                    
                                        {/* Heading */}
                                    <div className="h-[27px] w-[247px]   flex justify-between items-center ">
                                        <div className="text-[20px] font-bold ">
                                            Colors
                                        </div>
                                             {/* icon */}
                                        <div className="text-[16px] text-white" >
                                        <GoChevronUp />
                                        </div>                            
                                    </div>  

                                       {/* color panel */}
                                        <div className="h-[90px]  mt-[20px]">
                                                {/* box1 for five colors */}
                                            <div className="flex h-[37px] w-[247px] justify-between">
                                                <div className="w-[37px] h-[37px] rounded-full bg-[#00C12B]"></div>
                                                <div className="w-[37px] h-[37px] rounded-full bg-[#F50606]"></div>
                                                <div className="w-[37px] h-[37px] rounded-full bg-[#F5DD06]"></div>
                                                <div className="w-[37px] h-[37px] rounded-full bg-[#F57906]"></div>
                                                <div className="w-[37px] h-[37px] rounded-full bg-[#06CAF5]"></div>

                                            </div>
                                                 {/* box2 for five colors */}
                                            <div className="flex h-[37px] w-[247px] justify-between mt-4">
                                                <div className="w-[37px] h-[37px] rounded-full bg-[#063AF5]"></div>
                                                <div className="w-[37px] h-[37px] rounded-full bg-[#7D06F5]"></div>
                                                <div className="w-[37px] h-[37px] rounded-full bg-[#F506A4]"></div>
                                                <div className="w-[37px] h-[37px] rounded-full border-2 border-black bg-[#FFFFFF]"></div>
                                                <div className="w-[37px] h-[37px] rounded-full bg-[#000000]"></div>

                                            </div>
                                        </div>

                                        <br />
                                        <br />


                                        {/* Size */}
                                            <div className="h-[247px]">
                                            {/* Heading */}
                                                <div className="h-[27px] w-[247px] mt-[20px]  flex justify-between             items-center ">
                                                    <div className="text-[20px] font-bold ">
                                                        Size
                                                    </div>
                                                         {/* icon */}
                                                    <div className="text-[16px] text-white" >
                                                    <GoChevronUp />
                                                    </div>
                                                </div>
                                           {/* selector */}
                                                 <div className="h-[240px]  space-y-2  mt-[20px]">
                                                    <button className="mr-2 bg-[#F0F0F0] rounded-[62px] text-[14px] w-[96px] h-[39px]">XX-Small</button> 
                                                        <button  className=" bg-[#F0F0F0] rounded-[62px] text-[14px] h-[39px] w-[88px]">X-Small</button><br />
                                                        <button className="hover:bg-black text-white mr-2 bg-[#F0F0F0] rounded-[62px] text-black text-[14px] h-[39px] w-[74px] ">Small</button>
                                                        <button className="bg-[#F0F0F0] rounded-[62px] text-[14px] h-[39px] w-[90px]">Medium</button><br />
                                                        <button className="mr-2 bg-[#F0F0F0] rounded-[62px] text-[14px] h-[39px] w-[76px]">Large</button>
                                                        <button className="bg-[#F0F0F0] rounded-[62px] text-[14px] h-[39px] w-[89px]">X-Large</button>
                                                        <button className="mr-2 bg-[#F0F0F0] rounded-[62px] text-[14px] h-[39px] w-[98px]">XX-Large</button>
                                                        <button className="bg-[#F0F0F0] rounded-[62px] text-[14px] h-[39px] w-[97px]">3XL-Large</button>
                                                        <button className="bg-[#F0F0F0] rounded-[62px] text-[14px] h-[39px] w-[98px]">4X-Large</button>

                                                     </div>
                                                     
                                              </div>
                                              <br />
                                              <br />
                                              
                                            
                       {/* styles link */}
                       <div className="h-[171px]">
                               {/* Heading */}
                                    <div className="h-[27px] w-[247px] mt-[20px]  flex justify-between items-center ">
                                        <div className="text-[20px] font-bold ">
                                            Dress Styles
                                        </div>
                                             {/* icon */}
                                        <div className="text-[16px] " >
                                        <GoChevronUp />
                                        </div>                            
                                    </div>  
                            <div className="h-[124px] mt-5 ">

                            <div className="flex justify-start  " >
                                   <ul className=" space-y-5 ">
                                  
                                    {/* link 1 */}
                                 <div className="w-[247px] h-[16px] flex justify-between items-center ">
                                <li><Link href="#">T-Shirts</Link></li>
                                     
                                     {/* icon */}
                                <div className="">
                                <IoIosArrowForward />
                                </div>
                                
                                </div>

                                   {/* link 2 */}
                                   <div className="w-[247px] h-[16px] flex justify-between items-center ">
                                <li><Link href="#">Shorts</Link></li>
                                     
                                     {/* icon */}
                                <div className="">
                                <IoIosArrowForward />
                                </div>
                                
                                </div>

                                   {/* link 3 */}
                                   <div className="w-[247px] h-[16px] flex justify-between items-center ">
                                <li><Link href="#">Shirts</Link></li>
                                     
                                     {/* icon */}
                                <div className="">
                                <IoIosArrowForward />
                                </div>
                                
                                </div>

                                   {/* link 4 */}
                                   <div className="w-[247px] h-[16px] flex justify-between items-center">
                                <li><Link href="#">Hoodie</Link></li>
                                
                                     
                                     {/* icon */}
                                <div className="">
                                <IoIosArrowForward />
                                </div>
                                
                                </div>
                                </ul>
                             </div>

                             </div>
                       </div>
                       
                       {/* apply filter button */}
                       <div>
                        <div >

                            <button className="w-[247px] h-[48px] bg-black text-white rounded-[62px] mt-[24px]"> Apply Filter</button>

                        </div>
                       </div>
                                 
                            


                    </div>

                </div>
            </div>
        </div>
    )
}