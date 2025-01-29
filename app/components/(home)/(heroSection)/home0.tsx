import Image from "next/image"

export default function Home0(){
    return(
    <div>  

            {/* main for bg  */}
            <div className=" h-[663px]  grid grid-rows-2 md:grid-cols-2 mt-[26px] bg-[#F2F0F1] relative " >
                 
                 {/* Left        content       div */}
                <div className=" h-[663px]">

                    <div className="w-[390px] md:w-[95%] 2xl:w-[full] mx-auto pt-[40px] md:pt-[103px] h-[443px] md:h-[663px] ">

                   

                      {/* text heading */}
                         <div className=" flex text-[32px]  md:text-[62px] font-bold md:font-bold pb-4 w-[390px] md:w-[577px]   ">
                            {/* fore res */}
                            <div className="">
                                  <div className=" md:block hidden leading-[32px] md:leading-[64px] ">
                              FIND CLOTHES <br />
                              THAT MATCHES <br />
                              YOUR STYLE  

                              </div>

                              <div className=" block md:hidden w-[315px] mx-[14px] leading-[32px] md:leading-[64px] ">
                              FIND CLOTHES <br />
                              THAT MATCHES <br />
                              YOUR STYLE  

                              </div>
                              </div>

                        </div>

                                {/* sunb text */}
                        <div className="flex">
                            <div className="w-[545px] mx-[14px] font-normal text-text-bw text-[16px]">
                            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                            </div>
                        </div>

                          {/* Shopnow Button */}

                        <div className="mt-[25px]">
                            <div className="w-[210px] h-[52px] flex justify-center text-white bg-black    rounded-full">
                                <button className="text-center">Submit Now</button>
                            </div>
                        </div>

                          {/* happy  costumer */}

                        <div className="mt-[38px] ">
                            <div className="w-[596px] h-[128px]  grid grid-cols-3 gap-5 ">
                              <div className="gap-3 flex  items-center  border-e-2  ">

                                  <div className="w-[141px]   ">

                                    <div className="text-[40px]  font-bold ">
                                    200+

                                    </div>

                                    <div className="text-[16px] w-[150px]   h-[22px] text-text-bw">
                                    International Brands
                                    </div>
                                   

                                   </div>

                              </div>

                                <div className="col-span-2 gap-3 flex items-center  border-x-2">

                                  <div className="w-[141px]  ">

                                    <div className="text-[40px] pl-8 font-bold ">
                                    300+

                                    </div>

                                    <div className="text-[16px] w-[171px] pl-8  h-[22px] text-text-bw">
                                    Happy Costumer
                                    </div>
                                   

                                  </div>

                                    

                                </div>
                            </div>
                        </div>
                        
                        

            
                    </div>

                </div>

                {/* right      pictured       div */}
                <div className=" h-[443px] md:h-[663px]  relative md:m-0 ">
                     
                      {/* Large             star */}
                    <div className=" hidden md:block abolute ">
                        <Image className="absolute mt-[86px] mr-[81px] inset-y-0 right-0 " src='/Vector-large.png'height={104} width={104} alt="star"></Image>
                    </div>
                           {/* for       responsive       large */}
                    <div className="block md:hidden abolute">
                        <Image className="absolute block md:hidden mt-[41px] mr-[21px] inset-y-0 right-0 " src='/Vector-large.png'height={76} width={76} alt="star"></Image>
                    </div>

                    {/* small star               2 */}
                    <div className="hidden md:block">
                        <Image className="absolute mt-[297px] ml-[91px]" src='/Vector-small.png' height={56} width={56} alt="star small"></Image>
                    </div>

                    {/* for       responsive          small */}
                    <div className="block md:hidden">
                        <Image className="absolute mt-[138px] ml-[27px]" src='/Vector-small.png' height={44} width={44} alt="star small"></Image>
                    </div>
                         
                    
                         

                     {/* for responsive            couple Img */}
                    <div className="block md:hidden">
                        <Image src="/couple2.png" height={663} width={645} alt=""></Image>
                    </div>
                       
                        {/* couple main     img */}
                     <div className="hidden md:block">
                        <Image  src='/couple-crop.png' alt="main" className="w-[669px] h-[663px]" width={669} height={663}></Image>
                        
                     </div>
                

               
                </div>

            </div>

            {/* logo slide */}
            

         <div className="h-[122px] bg-black hidden md:flex justify-evenly items-center mt-4 ">

                <li><Image src="/Vector.png" height={33.16} width={166.48} alt="logo1"></Image></li>
                <li> <Image src="/logo2.png" width={91} height={37.98} alt="logo"></Image> </li>
                <li> <Image src="/logo3.png" width={156} height={32.29} alt="logo"></Image> </li>
                <li> <Image src="/logo4.png" width={194} height={31.2} alt="logo"></Image> </li>
                <li> <Image src="/logo5.png" width={206.79} height={33.35} alt="logo"></Image> </li>

         </div>

         {/* for            responsive */}
        <br />
        <br />
        <br />

         <div>
         <div className="h-[146px] w-[390px]  md:hidden bg-black ">
            <ul className="h-[146px] w-[390px] content-center flex flex-wrap gap-[34px] justify-center items-center">

<li className="h-[24px]"> <Image className="h-[24px] w-[116px] " src="/logoRes1.png" width={116.74} height={23.25}  alt="logo1"></Image></li>
<li > <Image className="h-[27px] w-[64px]"  src="/logoRes2.png" width={63.81} height={26.63} alt="logo"></Image> </li>
<li > <Image className="h-[23px] w-[110px]" src="/logoRes3.png" width={109.39} height={22.64} alt="logo"></Image> </li> 
<li > <Image className="h-[21px] w-[127px]" src="/logoRes4.png" width={127} height={20.47} alt="logo"></Image> </li>
<li > <Image className="h-[22px] w-[135px]" src="/logoRes5.png" width={134.84} height={21.75} alt="logo"></Image> </li>
   
   </ul>

</div>

         </div>




     </div>
    )
}