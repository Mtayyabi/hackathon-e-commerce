import CasualCrumb from "../(breadCrumbs)/casualCrumb";
import Filter from "./(filter)/filter";
import Page2 from "./(home)/casualPage2";

export default function CasualPage(){
    return(
        <div>

            <div className="w-[95%] 2xl:w-[1240px] mx-auto">
                <div className="mt-[24px] ">
                    <CasualCrumb/>
                </div>
            </div>

            <div className="w-[95%] 2xl:w-[1240px]  flex mx-auto">
                <div className="flex w-[295px]">
                    <div>
                        <Filter/>
                    </div>
                </div  >

                <div className="page2 mt-[20px] ml-[20px]">
                    <Page2/>
                </div>
                
            </div>


        </div>
    )
}