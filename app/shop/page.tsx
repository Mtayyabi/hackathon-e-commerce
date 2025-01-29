import Bread from "../components/(breadCrumbs)/shopCrumb"
import Link from "next/link"

export default function Shop(){
    return(
        <div>
            <div className="w-[95%] 2xl:w-[1240px] mx-auto">

           <div className="mt-[20px] mb-[20px]"> 
            <Bread/>
            </div>
            <h1>Shop Page</h1>
            
            <div className="w-[100px] text-center mt-[20px] rounded-[60px] bg-black text-white">
              <Link href="/shop/men" > Men </Link> 
            </div>


            </div>



        </div>
    )
}