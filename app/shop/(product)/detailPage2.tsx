// import Image from "next/image";
import { GiSettingsKnobs } from "react-icons/gi";


export default function Details2(){
    return(
        <div>

            <div className="w-[95%] 2xl:w-[1240px] mb-[50px] mt-[80px] mx-auto flex justify-evenly">
                <div>
                    Product Details
                </div>

                <div className="font-semibold underline underline-offset-8 decoration-2">
                    Rating & Reviews
                </div>

                <div>
                    FAQs
                </div>
            </div>
            
            <br />

            <div className="w-[95%] 2xl:w-[1240px] bg-slate-200 flex justify-between items-center h-12  mx-auto">
                <div className="text-[24px] font-bold ">
                    All Reviews <span className="text-[16px] font-light">(45)</span>
                </div>

                <div className="w-[354px] flex gap-[10px] ">

                    {/* setting button */}
                    <div className="w-[48px] h-[48px] bg-red-600 rounded-[60px] ">
                        <button className="w-[48px] flex justify-center items-center h-[48px] bg-[#F0F0F0] rounded-[60px] content-center text-2xl font-bold"><GiSettingsKnobs />
                        </button>
                    </div>

                    {/* Latest */}
                        <div className="    ">
                        <select className=" bg-[#F0F0F0] w-[120px] h-[48px] text-center rounded-[62px]" name="latest" id="latest">
                            <option value="Glasses">Latest</option>
                            <option value="">Jwellery</option>
                        </select>
                        </div>

                        {/* Write Review */}
                        <div>
                            <button className="w-[166px] h-[48px] rounded-[62px] border-2 bg-black text-white">Write a Review</button>
                        </div>
                    


                </div>

            </div>



        </div>
    )
}