import { TiMail } from "react-icons/ti";
import Link from "next/link";
import Image from "next/image";

export default function FooterRes(){
    return(
        <div>

            

            {/* footer */}
    <div className="h-[981px] relative flex items-end  md:hidden ">
        <div className=" w-[392px] h-[846px]  ">
            <div className=" w-[352px]  h-[846px]  md:flex flex-col justify-between mx-auto  pt-[140px] " >
                      
                      {/* First box */}
                    <div className=" h-[177px] static">
                             
                             <div className="mt-8   ">
                    <div className="text-[33.45px]     font-bold">
                        SHOP.CO
                    </div> 
                    <div className="text-[14px] h-[40px] ">
                    We have clothes that suits your style and which you’re proud to wear. From women to men.
                    </div>
                               </div>
                    <div className="mt-[20px]">
                        <Image src='/social.png' width={148} height={20} alt="social"></Image>
                    </div>

                  </div>
                          

                          {/* for merge two boxes */}
                     <div className="flex justify-between "> 
                          {/* second box */}
                          <div className="">
                            <div className="mb-4 text-[16px] font-medium">
                          COMPANY
                          </div>
                            <ul className="space-y-2 text-text-bw font-light">

                           
                                <li><Link href="#">About</Link></li>
                                <li><Link href="#">Features</Link></li>
                                <li><Link href="#">Works</Link></li>
                                <li><Link href="#">Career</Link></li>
                            </ul>
                          </div>
                    
                      {/* third box */}
                      <div>
                           <div className="font-medium mb-4">
                            HELP
                            </div> 
                            <ul className=" space-y-2 font-light">

                            
                                <li><Link href="#">Costumer Support</Link></li>
                                <li><Link href="#">Delivery Details</Link></li>
                                <li><Link href="#">Terms & Conditions</Link></li>
                                <li><Link href="#">Privacy Policy</Link></li>
                            </ul>
                          </div>

                     </div>
 
                        {/* for         Merge */}
                    <div className="flex justify-between mt-5">
                      {/* fourth box */}
                      <div>
                            <div className="font-medium mb-4">
                                FAQ
                            </div>
                            
                            <ul className=" space-y-2 font-light">
                                <li><Link href="#">Accout</Link></li>
                                <li><Link href="#">Manage Deliveries</Link></li>
                                <li><Link href="#">Orders</Link></li>
                                <li><Link href="#">Payments</Link></li>
                            </ul>
                          </div>
                      {/* fifth box */}
                      <div>
                            <div className="font-medium mb-4">
                                Resources
                            </div>
                            <ul className=" space-y-2 text-[16px] font-light">
                                <li><Link href="#">Free eBook</Link></li>
                                <li><Link href="#">Development Tutor</Link></li>
                                <li><Link href="#">How to - Blog</Link></li>
                                <li><Link href="#">Youtube Playlist</Link></li>
                            </ul>
                          </div>

                    </div>
                    <br />
                    <br />
                    

                    {/* ending */}
                    <div className="flex justify-center flex-col items-center">
                        <div className="text-[14px] text-center">
                        Shop.co © 2000-2023, All Rights Reserved
                        </div>
                        <br />

                        {/* payment image */}
                        <Image className="" src="/paymentsRes.png" width={240.93} height={25.74} alt="payments"></Image>
                    </div>

                       
                    

                </div>
            
        {/* black box */}
        <div className="w-[358px] mx-auto  inset-x-0 top-0 absolute ]">
                <div className="w-[358px] h-[293px] bg-black flex flex-col items-center pt-[32px]  </div>">
                    <div className="text-white w-[297px] h-[105px] text-[32px] font-bold leading-none">
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                    </div>

                    {/* email and button */}
                    <div className="flex justify-between flex-col mt-[32px] " >
                        <div className="bg-white w-[311px] h-[48px] flex rounded-[20px] font-light mb-[14px] pl-4">
                        
                        <div className="bg-white text-[24px] text-[gray] mr-3 font-light flex items-center">
                        <TiMail />
                        </div>

                            <input  type="email" placeholder="Enter your email address" />
                        </div>

    

                        <div className="bg-white w-[311px] h-[48px] rounded-[20px] pl-4 text-center">
                            <div className="">
                            
                            <button className="text-black w-[100%] h-[48px] ">Subscribe to Newsletter</button>
                            </div>
                            
                        </div>

                    </div>  

                </div>

            </div>
            </div>
        </div>
        
        
        
        
        </div>
    )
}