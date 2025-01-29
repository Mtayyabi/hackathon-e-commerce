import { GoChevronDown } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import SheetComponent from "../../(sheetComp)/sheet";



export default function Nav1(){
    return(
        <div>

            <div> 
                <div className=" w-[95%]  2xl:w-[1440px]  justify-between h-[41px] mx-auto flex mt-[24px] items-center ">

                    {/* for             1          resonsive */}

                <div className="md:hidden flex  ">
                    
                      
                    <div className="items-center flex text-[24px] ">
                            <SheetComponent/>
                        </div>

                    <div className="ml-[16px] text-[32px] flex items-center font-bold">
                       
                        SHOP.CO
                    </div>
                    
                </div>

                {/* for             2          resonsive */}
                <div className="md:hidden flex">

                <div className=" text-[20px] w-[20px] h-[20px] ml-[16px] flex items-center font-bold">
                        <IoSearchOutline />
                        </div>

                        <div className="font-extrabold text-[22px] w-[24px] h-[24px]" >
                      <Link href="/cart">  <CiShoppingCart className="font-extrabold text-[22px]" /> </Link>

                        </div>

                        <div className="font-extrabold text-[22px] w-[24px] h-[24px]">
                        <CgProfile />

                        </div>

                </div>


                {/* for             end2          resonsive */}

                    {/* logo div */}

                    {/* <div className="items center text-[24px] ">
                            <SheetComponent/>
                        </div> */}

                    <div className="hidden text-[32px] md:flex items-center font-bold">

                       <div className="">

                       <Link href='/'>
                        SHOP.CO
                        </Link>

                        </div>
                    </div>

                    {/* for links */}
                    <div className="  h-[22px] hidden md:flex   ">
                        <ul className=" hidden md:flex justify-between w-[321px] bg-white     ">
                        <li><Link className="flex items-center" href="/shop">Shop <GoChevronDown/></Link></li>
                       
                        <li><Link href="#">On Sale</Link></li>
                        <li><Link href="#">New Arrivals</Link></li>
                        <li><Link href="#">Brands</Link></li>
                        
                        </ul>
                        
                    </div>

                    {/* for input */}
                        <div className=" h-[48px] md:bg-[#F2F0F1]  items-center hidden md:flex rounded-full ">
                         
                         {/* for icon */}
                         <div className=" text-[20px] w-[20px] h-[20px] ml-[16px] flex items-center font-bold">
                        <IoSearchOutline />
                        </div>
                            <input className="  hidden md:block ml-[14px] text-[16px] text-black-[0.5] w-[577px] h-[48px] rounded-full bg-[#F2F0F1] " type="text" placeholder="Search for product" />
                            
                        </div>
                    {/* for last icons  */}

                    <div className="hidden md:flex  text-[24px] w-[62px] font-extrabold items-center gap-2 h-[24px]">
                        <div className="font-extrabold text-[22px] w-[24px] h-[24px]" >
                      <Link href="/cart">  <CiShoppingCart className="font-extrabold text-[22px]" /> </Link>

                        </div>

                        <div className="font-extrabold text-[22px] w-[24px] h-[24px]">
                        <CgProfile />

                        </div>


                    </div>

                </div>
            </div>


        </div>
    )
}