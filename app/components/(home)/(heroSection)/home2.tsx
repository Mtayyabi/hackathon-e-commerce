import Image from "next/image"

export default function Home2(){
    return(
        <div>
           {/* grid section */}
           <div>
            <div className="hidden md:block w-[1239px] h-[866px] rounded-[20px]  mx-auto mt-6 bg-[#F0F0F0]">
                <div className="flex justify-center pt-[70px] text-[48px] font-bold tracking-tighter mb-[64px]">
                BROWSE BY DRESS STYLE
                </div>
    
                {/* grid section */}
                      
                      <div className="flex w-[1111px] gap-[20px]  mx-auto">
                      
                        <div className="w-[407px] h-[289px] bg-[url(/grid1.png)] rounded-[20px]">

                        <div className="text-[36px] font-bold pl-[36px] pt-[25px]"  >Casual</div>
                        
                        </div>
                        
                        <div className="w-[684px] h-[289px] bg-[url(/grid2.png)] rounded-[20px]">
                        
                        <div className="text-[36px] font-bold pl-[36px] pt-[25px]"  >Formal</div>

                        </div>
                        
                        
                      </div>
<br />
                      <div className="flex w-[1111px] gap-[20px]  mx-auto">

                      <div className="w-[684px] h-[289px] bg-[url(/grid3.png)] rounded-[20px] ">
                      
                      <div className="text-[36px] font-bold pl-[36px] pt-[25px]"  >Party</div>
                      
                      </div>

                      <div className="w-[407px] h-[289px] bg-[url(/grid4.png)] rounded-[20px] ">
                      
                      <div className="text-[36px] font-bold pl-[36px] pt-[25px]"  >Gym</div>
                      
                      </div>

                        </div>
              
            </div>

             {/* for               responsive */}
             <div className="block md:hidden">
              <div className=" h-[975px] bg-[#F0F0F0] mt-12 mb-10">

                 {/*Heading       */}
                 <div className="  flex justify-center items-end pt-10 ">
                 <div className="w-[246px]  text-center h-[72px] text-[32px] font-bold leading-none">
                 BROWSE BY DRESS STYLE
                 </div>
                 </div>

                 {/* shping       card */}
                 <div className="flex flex-col h-[100%] gap-4 mt-7 items-center ">
                      
                        <div className="w-[310px] h-[190px] bg-[url(/forSmall.png)] rounded-[20px]">

                        <div className="text-[24px] font-bold pl-[24px] pt-[16px]">Casual</div>

                        </div>

                        {/* 2nd card */}
                         <div className="w-[310px] h-[190px] bg-[url(/forSmall2.png)] rounded-[20px]">

                        <div className="text-[24px] font-bold pl-[24px] pt-[16px]">Formal</div>

                        </div>

                        {/* 3rd card */}
                         <div className="w-[310px] h-[190px] bg-[url(/forSmall3.png)] rounded-[20px]">

                        <div className="text-[24px] font-bold pl-[24px] pt-[16px]">Party</div>

                        </div>

                        {/* 4th card */}
                         <div className="w-[310px] h-[190px] bg-[url(/forSmall4.png)] bg-cover    rounded-[20px]">

                        <div className="text-[24px] font-bold pl-[24px] pt-[16px]">Gym</div>

                        </div>
                        
                        
                        
                      </div>

              </div>
              <br /><br /> <br /> <br /> <br />
              

            </div>


           </div>

        </div>
    )
}