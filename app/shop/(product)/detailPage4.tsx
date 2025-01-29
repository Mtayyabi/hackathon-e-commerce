

export default function Reviews(){
    return(
        <div className="w-[95%] 2xl:w-[1240px] mx-auto">

            <div className="grid grid-cols-2 gap-5 h-[241px] mt-[24px] ">
                <div className="bg-[url(/review11.png)]"></div>
                <div className="bg-[url(/review22.png)]"></div>
              
            </div>

            <div className="grid grid-cols-2 gap-5 h-[241px] mt-[20.42px] ">
                <div className="bg-[url(/review33.png)]"></div>
                <div className="bg-[url(/review44.png)]"></div>
              
            </div>

            <div className="grid grid-cols-2 gap-5 h-[241px] mt-[20.42px] ">
                <div className="bg-[url(/review55.png)]"></div>
                <div className="bg-[url(/review66.png)]"></div>
              
            </div>
                     
                     {/* Add more button */}
            <div className="text-center flex justify-center mt-[36px]">
                    <div>
                        <button  className="text-center w-[230px] h-[52px] border-2  rounded-full">Load More Reviews</button>
                    </div>
                 </div>





        </div>
    )
}