import Counter from "../(cartCounter)/counter"
import Image from "next/image"
import { RiDeleteBinLine } from "react-icons/ri";
import { FiTag } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import { client } from "@/sanity/lib/client";




export default  function  CartItems(){
    
    return(
        <div>

            <div className="flex ">
 
                <div className="w-[715px] h-[508px]   flex flex-col justify-around items-center">
                        
                        {/* Main cart item box 1 */}
                   <div className="w-[667px] h-[124px]   flex justify-between">
                     
                     {/* Cart pic 1 */}
                      <div className="w-[124px] h-[124px] bg-[url(/cartImg1.png)] rounded-[8.66px]">

                      </div>

                       {/* cart Items detail 1 */}
                      <div className="h-[124px] w-[527px] grid grid-cols-2 gap-[75px]  ">
                        
                        {/* For details 1 1 col */}
                        <div className=" flex flex-col justify-between">
                            {/* item description 1 */}
                            <div className="w-[250px] h-[71px]">
                                <div className="text-[20px] font-bold">
                                Gradient Graphic T-shirt
                                </div>
                                {/* size & color 1 */}
                                <div>
                                    <div>
                                        <span>Size: &nbsp;</span> 
                                        <span className="text-text-bw">Large</span>
                                    </div>

                                    <div>
                                        <span>Color: &nbsp;</span>
                                        <span className="text-text-bw">White</span>
                                    </div>

                                </div>

                            </div>
                            {/* item price */}
                            <div>

                                <div className="text-[25px] font-bold">
                                    $145
                                </div>

                            </div>
                        </div>

                        {/* for counter & Bin col 2 */}
                        <div className="flex flex-col justify-between items-end">
                            {/* bin icon */}
                           <div className="text-red-600 font-bold text-[19px]">
                            <button>
                           <RiDeleteBinLine />
                           </button>

                           </div>
                                  
                                  {/* counter */}
                            <div> 

                                <Counter/>
                            </div>
                        </div>
                      </div>
                   </div>    

                   {/* Main cart item box 2 */}
                   <div className="w-[667px] h-[124px]   flex justify-between">
                     
                     {/* Cart pic 1 */}
                      <div className="w-[124px] h-[124px] bg-[url(/cartImg2.png)] rounded-[8.66px]">

                      </div>

                       {/* cart Items detail 1 */}
                      <div className="h-[124px] w-[527px] grid grid-cols-2 gap-[75px] ">
                        
                        {/* For details 1 1 col */}
                        <div className=" flex flex-col justify-between">
                            {/* item description 1 */}
                            <div className="w-[250px] h-[71px]">
                                <div className="text-[20px] font-bold">
                                Checked Shirt
                                </div>
                                {/* size & color 1 */}
                                <div>
                                    <div>
                                        <span>Size: &nbsp;</span> 
                                        <span className="text-text-bw">Medium</span>
                                    </div>

                                    <div>
                                        <span>Color: &nbsp;</span>
                                        <span className="text-text-bw">Red</span>
                                    </div>

                                </div>

                            </div>
                            {/* item price */}
                            <div>

                                <div className="text-[25px] font-bold">
                                    $180
                                </div>

                            </div>
                        </div>

                        {/* for counter & Bin col 2 */}
                        <div className="flex flex-col justify-between items-end">
                            {/* bin icon */}
                           <div className="text-red-600 font-bold text-[19px]">
                           <button>
                           <RiDeleteBinLine />
                           </button>

                           </div>
                                  
                                  {/* counter */}
                            <div> 

                                <Counter/>
                            </div>
                        </div>
                      </div>
                    
                   </div>    
                     {/* Main Cart items 3 */}
                     <div className="w-[667px] h-[124px]   flex justify-between">
                     
                     {/* Cart pic 1 */}
                      <div className="w-[124px] h-[124px] bg-[url(/cartImg3.png)] rounded-[8.66px]">

                      </div>

                       {/* cart Items detail 1 */}
                      <div className="h-[124px] w-[527px] grid grid-cols-2 gap-[75px] ">
                        
                        {/* For details 1 1 col */}
                        <div className=" flex flex-col justify-between">
                           
                            {/* item description 1 */}
                            <div className="w-[250px] h-[71px]">
                                <div className="text-[20px] font-bold">
                                Skinny Fit Jeans
                                </div>
                                {/* size & color 1 */}
                                <div>
                                    <div>
                                        <span>Size: &nbsp;</span> 
                                        <span className="text-text-bw">Large</span>
                                    </div>

                                    <div>
                                        <span>Color: &nbsp;</span>
                                        <span className="text-text-bw">Blue</span>
                                    </div>

                                </div>

                            </div>
                            {/* item price */}
                            <div>

                                <div className="text-[25px] font-bold">
                                    $240
                                </div>

                            </div>
                        </div>

                        {/* for counter & Bin col 2 */}
                        <div className="flex flex-col justify-between items-end">
                            {/* bin icon */}
                           <div className="text-red-600 font-bold text-[19px]">
                           <button>
                           <RiDeleteBinLine />
                           </button>

                           </div>
                                  
                                  {/* counter */}
                            <div> 

                                <Counter/>
                            </div>

                        </div>

                      </div>
                    
                   </div>    

                </div>





                {/* Second page to total */}

                <div className="w-[505px] h-[458px]  ml-[20px]">

                    <div className="w-[457px] mt-[20px] mx-auto ">
                        {/* Heading div */}
                        <div className="text-[24px] font-bold">
                            Order Summary
                        </div>

                        {/* price calculator main box */}
                        <div className=" h-[193px] mt-[24px]  flex flex-col justify-between">
                            {/* for sub total */}
                            <div className="h-[27px] flex justify-between">
                                <div className="text-[20px]">Subtotal</div>
                                <div className="text-[20px] font-bold">$565</div>
                            </div>

                            {/* for Discount */}
                            <div className="h-[27px] flex justify-between">
                                <div className="text-[20px]">Discount (-20%)</div>
                                <div className="text-red-500 text-[20px] font-bold">-$113</div>
                            </div>

                            {/* for Delivery fee */}
                            <div className="h-[27px] flex justify-between">
                                <div className="text-[20px]">Delivery Fee</div>
                                <div className="text-[20px] font-bold">$15</div>
                            </div>

                            <br />

                            {/* for total */}
                            <div className="h-[32px] items-center flex justify-between">
                                <div className="text-[20px]">Total</div>
                                <div className="text-[24px] font-bold">$467</div>
                            </div>

                        </div>

                        <br />

                        {/*  Voucher Button    */}
                        <div className="h-[48px] flex  justify-between">
                           
                           <div className="text-[16px] flex items-center border-2 w-[326px] h-[100%] rounded-[62px]">

                            <div className="text-[21px] text-[#000000] pl-[16px]">
                           <FiTag />
                           </div>
                            <input className="w-[95%] rounded-e-[62px] pl-[12px] text-[#000000] h-[100%] bg-inherit content-center"  type="text" placeholder="Add Promo Code" />
                            </div>

                              
                             <div className="  bg-black text-white rounded-[62px]">
                            <button className="w-[119px] h-[48px]">Apply</button>
                            </div>


                        </div>
                        <br />
                        {/* checkout      button */}
                        <div className=" bg-black rounded-[62px]">
                            <button className="text-white text-center rouded-[62px] flex items-center justify-center h-[60px] w-[100%] text-[16px] font-medium">
                                Go to Checkout 
                               <span className="text-[24px] font-medium ml-[12px]"> <GoArrowRight /> </span>
                            </button>

                        </div>

                    </div>

                </div>

            </div>




        </div>
    )
}