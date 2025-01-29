import Image from "next/image";
import Link from "next/link";
import { TiMail } from "react-icons/ti";
import FooterRes from "./footerRes";

export default function Footer(){
    return(
        <div>
          
          <div className="h-[589px]  relative hidden   md:flex items-end justify-between ">

            <div className="h-[499px] w-[1440px] b  ">
         
                
                <div className="w-[95%] 2xl:w-[1240px] text-white h-[180px] flex justify-evenly items-center bg-black mx-auto rounded-[20px] absolute inset-x-0 top-0">

                    <div className="text-[40px] font-bold  w-[552px]">
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                    </div>

                    <div className="w-[349px]  " >
                        <div className="bg-white w-[349px] h-[48px] flex rounded-[20px] font-light mb-[14px] pl-4">
                        
                        <div className="bg-white text-[24px] text-[gray] mr-3 font-light flex items-center">
                        <TiMail />
                        </div>

                            <input  type="email" placeholder="Enter your email" />
                        </div>

    

                        <div className="bg-white w-[100%] h-[48px] rounded-[20px] pl-4 text-center">
                            <div className="">
                            
                            <button className="text-black w-[100%] h-[48px] ">Subscribe to Newsletter</button>
                            </div>
                            
                        </div>

                    </div>

                </div>
                {/* end of email */}


                 {/* footer */}

                <div className=" w-[95%] 2xl:w-[1240px] h-[177px] flex justify-between mx-auto  pt-[140px] " >
                      
                      {/* First box */}
                    <div className="w-[248px] h-[177px] static">
                             
                             <div className=" w-[248px] h-[114px] ">
                    <div className="text-[33.45px]     font-bold">
                        SHOP.CO
                    </div>
                    <div className="text-[14px] h-[66px] ">
                    We have clothes that suits your style and which you’re proud to wear. From women to men.
                    </div>
                               </div>
                    <div className="mt-[35px]">
                        <Image src='/social.png' width={148} height={20} alt="social"></Image>
                    </div>

                  </div>
                          
                          {/* second box */}
                          <div className="">
                            <div className="text-[16px] font-medium">
                          COMPANY
                          </div>
                            <ul className="mt-[26px] space-y-2 text-text-bw font-light">

                           
                                <li><Link href="#">About</Link></li>
                                <li><Link href="#">Features</Link></li>
                                <li><Link href="#">Works</Link></li>
                                <li><Link href="#">Career</Link></li>
                            </ul>
                          </div>
                    
                      {/* third box */}
                      <div>
                           <div className="font-medium">
                            HELP
                            </div> 
                            <ul className="mt-[26px] space-y-2 font-light">

                            
                                <li><Link href="#">Costumer Support</Link></li>
                                <li><Link href="#">Delivery Details</Link></li>
                                <li><Link href="#">Terms & Conditions</Link></li>
                                <li><Link href="#">Privacy Policy</Link></li>
                            </ul>
                          </div>
                      {/* fourth box */}
                      <div>
                            <div className="font-medium">
                                FAQ
                            </div>
                            <ul className="mt-[26px] space-y-2 font-light">
                                <li><Link href="#">Accout</Link></li>
                                <li><Link href="#">Manage Deliveries</Link></li>
                                <li><Link href="#">Orders</Link></li>
                                <li><Link href="#">Payments</Link></li>
                            </ul>
                          </div>
                      {/* fifth box */}
                      <div>
                            <div className="font-medium">
                                Resources
                            </div>
                            <ul className="mt-[26px] space-y-2 text-[16px] font-light">
                                <li><Link href="#">Free eBook</Link></li>
                                <li><Link href="#">Development Tutor</Link></li>
                                <li><Link href="#">How to - Blog</Link></li>
                                <li><Link href="#">Youtube Playlist</Link></li>
                            </ul>
                          </div>

                       
                    

                </div>
                <br /> 
        
                {/* ending                 */}
                   <div className= "w-[95%] 2xl:w-[1240px] mx-auto inset-x-0 absolute bottom-0 flex justify-between mb-[50px]">
                   
                   <div>
                   Shop.co © 2000-2023, All Rights Reserved
                   </div>

                   <div>
                    <Image src="/endFooter.png" height={30.03} width={281.07} alt="visa"></Image>
                   </div>

                   </div>

            </div>

                           

          </div>

          {/* for            responsive   */}
          
          <div>
            <FooterRes/>
        </div>

          


        </div>
    )
}