"use client"
import Image from "next/image"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"


  

export default function Detail(){
   
    return(
        <div>
            
            <div className="w-[95%] 2xl:w-[1240px]  mt-[20px] mb-[36px] mx-auto">
                <div className="mb-[36px]">
                <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/shop">Shop </BreadcrumbLink>
      <BreadcrumbSeparator />
      <BreadcrumbLink href="/shop/men">Men </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>T-Shirt</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

                </div>
                <div className="grid grid-cols-2">
                     

                     {/* grid1 */}
                    <div className="flex gap-[14px]" >
                        
                        <div className=" space-y-[14px] h-[530px]">
                            <div className="w-[152px] h-[167px] rounded-[20px] bg-[url(/shirt1.png)]"></div>
                            <div className="w-[152px] h-[167px] rounded-[20px] bg-[url(/shirt22.png)]"></div>
                            <div className="w-[152px] h-[167px] rounded-[20px] bg-[url(/shirt33.png)]"></div>
                        </div>

                        <div className="" >
                            <div className="w-[444px] h-[530px] rounded-[20px] bg-[url(/shirt4.png)]">

                            </div>
                        </div>


                    </div>
                            {/* Div2 grid */}
                    <div className="">
                         {/* Heading */}
                        <div className="text-[42px] font-bold one">
                        One Life Graphic T-shirt
                        </div>
                           
                           {/* ratings */}
                        <div>
                            
                                <Image src="/stars4.png" width={190} height={24} alt="rating"></Image>
                        </div>

                        {/* price */}
                        <div className="">
                            <div className="flex">
                                <Image src="/pricep.png" width={176} height={43} alt=""></Image>
                                <Image src='/offp.png' width={72} height={34} alt=""></Image>
                            </div>
                        </div>

                        {/* para */}
                        <div>
                            {/* we have to conjust the text */}
                            <div className="text-[16px] font-light w-[590px] "> 
                            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
                            </div>
                        </div>

                        <br />

                        {/* color                        circle */}
                        <div>
                            <div>
                                <div className="font-light">
                                    Select Colors
                                </div>
                                <div className="mt-[16px] w-[143px] text-white flex justify-between">
                                    
                                    <div className="cursor-pointer content-center *:opacity-0 hover:*:opacity-100 w-[37px] h-[37px] bg-green-900 rounded-full " >
                                        
                                         <Image className="mx-auto " src="/tick.png" width={13} height={9.5} alt="tick"></Image> 
                                         </div>

                                    <div className="cursor-pointer w-[37px] h-[37px] bg-[#314F4A] rounded-full *:opacity-0 hover:*:opacity-100 content-center ">
                                    
                                    <Image className="mx-auto " src="/tick.png" width={13} height={9.5} alt="tick"></Image>
                                    </div>

                                    <div className="cursor-pointer w-[37px] h-[37px] bg-[#31344F] rounded-full *:opacity-0 hover:*:opacity-100 content-center">
                                    
                                    <Image className="mx-auto " src="/tick.png" width={13} height={9.5} alt="tick"></Image>
                                    </div>
                                    
                                </div>
                            </div> 
                        </div>

                        <br />

                        {/* Sizes */}
                        <div>
                            <div className="font-light">
                                Choose Size
                            </div>
                            <div className="mt-[16px] w-[420px] flex justify-between text-[16px] text-center ">
                                <div className="rounded-[62px] flex justify-center items-center  h-[46px] w-[86px] bg-custom-bg cursor-pointer hover:bg-black hover:text-white">Small</div>
                                <div className="rounded-[62px] flex justify-center items-center bg-[#000000]-[20%] h-[46px] w-[105px] bg-custom-bg cursor-pointer hover:bg-black hover:text-white">Medium</div>
                                <div className="rounded-[62px] flex justify-center items-center bg-[#000000]-[20%] h-[46px] w-[89px] bg-custom-bg cursor-pointer hover:bg-black hover:text-white">Large</div>
                                <div className="rounded-[62px] flex justify-center items-center bg-[#000000]-[20%] h-[46px] w-[104px] bg-custom-bg cursor-pointer hover:bg-black hover:text-white">X-Large</div>

                                
                            </div>
                        </div>

                        <br />

                        {/* cart           */}
                        
                        
                        <div>
                            <div className="flex gap-5">
                               
                                {/* Cart           counter */}
                                <div className="w-[170px] h-[52px] flex justify-evenly bg-custom-bg rounded-[60px]">
                                    <button  className="">
                                        <Image src="/cartMinus.png" width={18.75} height={18.75} alt="cartCounter"></Image>
                                    </button>
                                    <div className="text-[16px]  flex items-center">
                                      
                                    </div>
                                    <button >
                                    <Image src="/cartPlus.png" width={18.75} height={18.75} alt="cartCounter"></Image>
                                    </button>

                                {/* <Image src="/counter.png" width={170} height={52} alt=""></Image> */}
                                </div>

                               
                                {/* Add      To     cart          button */}
                                <div className="w-[400px] h-[52px] bg-black rounded-[60px]">
                                    <button  className="w-[100%] h-[100%] text-white">
                                        Add to Cart
                                    </button>

                                
                                </div>
                            </div>
                        </div>
                    




                    </div>

                </div>
            </div>




        </div>
    )
}