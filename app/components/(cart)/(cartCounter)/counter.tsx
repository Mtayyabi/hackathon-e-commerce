import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineMinus } from "react-icons/hi";


export default function Counter (){


    return(
        <div>

            <div className="w-[126px] h-[44px] rounded-[62px] flex justify-around items-center bg-[#F0F0F0]">
               
                <div className="w-[20px] h-[20px] text-[16px] flex justify-center  items-center">
                <button>
                <HiOutlineMinus />
                
                </button>
                </div>

                <div>
                <div className="num">00</div>
                </div>

                <div className="w-[20px] h-[20px] text-[16px] flex justify-center    plus" >
                <button >
                <HiOutlinePlus />
                </button>
                </div>                                  

            </div>

        </div>          
    )
}