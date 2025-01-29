
// import { client } from "@/sanity/lib/client"
import Image from "next/image"



export default  function Home1(){
    // const data = await client.fetch(`*[_type == 'product']`)
    // console.log('ne',data)
    return(
        <div>

        

             {/*shirts cart   */}
             <div className=" mt-[72px]">
                {/* Arrivals Heading */}
                <div className="text-center text-[48px] font-bold">
                    NEW ARRIVALS
                </div>
             </div>
                       
                       {/* main shirt carts */}
             <div className="mt-[55px] ">
                {/* shirt cart main container */}
                 <div className="flex  ml-[16px] h-[300px] md:ml-0 gap-4 md:gap-0 md:justify-evenly mb-[100px]">
                       
                      {/* div for details 1 */}
                       <div className="main  ">
                    <div className="bg-[url(/tRes1.png)] md:bg-[url(/image1.png)] w-[198px] md:w-[295px] h-[200px] md:h-[298px]   rounded-[20px]  mb-[16px]">
                        
                    </div>

                        {/* shirt details */}
                    <div className="">
                               
                               {/* for name */}
                        <div className=" text-[16px] md:text-[20px] font-bold">
                        T-Shirt With Tape Detail
                        </div>
                     

                           
                           {/* for ratings */}
                        <div className="">
                            <Image src="/stars4.png" width={150} height={19} alt="shirt"></Image>
                        </div>

                        {/* for price */}
                        <div className="text-[20px] font-bold">
                            $120
                            {/* <Image src="/price1.png" width={55} height={32} alt="price"></Image> */}
                        </div>

                    </div>
                            {/* shirt details end */}

                    </div>
                           
                 {/* div for details 2 */}
                      <div className="">
                    <div className="bg-[url(/image2.png)] w-[295px] h-[200px] md:h-[298px]  rounded-[20px]  md:mb-[16px]">
                    </div>

                      {/* shirt details */}
                      <div className="main h-[300px">
                               
                               {/* for name */}
                        <div className="text-[16px] md:text-[20px] font-bold">
                        Skinny Fit Jeans
                        </div>
                           
                           {/* for ratings */}
                        <div className="hidden md:block">
                            <Image src="/stars3.png" width={126.2} height={19} alt="shirt"></Image>
                        </div>
                        {/* for                    responsive */}
                        <div className="block md:hidden">
                            <Image src="/stars3.png" width={126.2} height={16} alt="shirt"></Image>
                        </div>

                        {/* for price */}
                        <div className="flex items-center">
                            <span className="text-[20px] font-bold">$240 </span>
                            <span className="line-through text-[20px] pl-1">$260</span>
                            <span className="w-[42px] h-[20px] ml-1 content-center text-center text-[#FF3333] bg-orange-200 text-[10px]">-20%</span>
                            
                        </div>

                    </div>
                            {/* shirt details end */}

                    </div>
                    

                   {/* div for details 3 */}
                        <div className="hidden md:block">
                    <div className="bg-[url(/image3.png)] w-[295px] h-[298px]  rounded-[20px]  md:mb-[16px]">
                    </div>

                      {/* shirt details */}
                      <div className="">
                               
                               {/* for name */}
                        <div className="text-[20px] font-bold">
                        CHECKERED SHIRT
                        </div>
                           
                           {/* for ratings */}
                        <div className="">
                            <Image src="/stars4.png" width={150} height={19} alt="shirt"></Image>
                        </div>

                        {/* for price */}
                        <div>
                            <Image src="/price3.png" width={56} height={32} alt="price"></Image>
                        </div>

                    </div>
                            {/* shirt details end */}
 
                    </div>

           {/* div for details 4 */}
                      <div className="hidden md:block">
                    <div className="bg-[url(/image4.png)] w-[295px] h-[298px]  rounded-[20px] md:mb-[16px]">
                    </div>

                      {/* shirt details */}
                      <div className="">
                               
                               {/* for name */}
                        <div className="text-[20px] font-bold">
                        SLEEVE STRIPED T-SHIRT
                        </div>
                           
                           {/* for ratings */}
                        <div className="">
                            <Image src="/stars4.png" width={150} height={19} alt="shirt"></Image>
                        </div>

                        {/* for price */}
                        <div>
                            <Image src="/price4.png" width={189} height={32} alt="price"></Image>
                        </div>

                    </div>
                            {/* shirt details end */}

                    </div>

                             {/* end of shirt carts */}
                </div>
                 {/* shirt cart main container end */}
                 
                 <div className="text-center flex justify-center mt-[36px]">
                    <div className="text-center w-[218px] h-[52] border-2  rounded-full">
                        <button>View All</button>
                    </div>
                 </div>


             </div>

             <br />

             {/* Shirt cart two */}


             {/*shirts cart   */}
             <div className=" mt-[72px] ">
                {/* Arrivals Heading */}
                <div className="text-center text-[48px] font-bold">
                TOP SELLING
                </div>
             </div>
                       
                       {/* main shirt carts */}
             <div className="mt-[55px] ">
                {/* shirt cart main container */}
                <div className="flex  justify-evenly h-[300px]" >
                       
            {/* div for details 1 */}
                       <div className="ml-[16px] h-[300px]">
                       <div className="bg-[url(/verticalRes3.png)] md:bg-[url(/image1.png)] w-[198px] md:w-[295px] h-[200px] md:h-[298px]   rounded-[20px]  mb-[16px]">
                        
                        </div>

                        {/* shirt details */}
                    <div className="">
                               
                               {/* for name */}
                        <div className="text-[16px] md:text-[20px] font-bold">
                        Vertical Striped Shirt
                        </div>
                           
                           {/* for ratings */}
                        <div className="mt-2 hidden md:block">
                            <Image src="/stars5.png" width={160.7}  height={19} alt="shirt"></Image>
                        </div>
                        {/* for                    responsive */}
                        <div className="block md:hidden">
                            <Image src="/stars3.png" width={126.2} height={16} alt="shirt"></Image>
                        </div>

                        {/* for price */}
                        <div className="flex items-center">
                            <span className="text-[20px] font-bold">$240 </span>
                            <span className="line-through text-[20px] pl-1">$260</span>
                            <span className="w-[42px] h-[20px] ml-1 content-center text-center text-[#FF3333] bg-orange-200 text-[10px]">-20%</span>
                            
                        </div>

                    </div>
                            {/* shirt details end */}

                    </div>
                           
            {/* div for details 2 */}
                      <div className="ml-[16px]">
                      <div className="bg-[url(/courageRes4.png)] md:bg-[url(/image1.png)] w-[198px] md:w-[295px] h-[200px] md:h-[298px]   rounded-[20px]  mb-[16px]">
                        
                        </div>

                      {/* shirt details */}
                      <div className="">
                               
                               {/* for name */}
                        <div className="text-[16px] md:text-[20px] font-bold">
                        Courage Graphic T-Shirt
                        </div>
                           
                           {/* for ratings */}
                        <div className="hidden md:block">
                            <Image src="/stars44.png" width={137.9} height={19} alt="shirt"></Image>
                        </div>
                        {/* for                    responsive */}
                        <div className="block md:hidden">
                            <Image src="/stars3.png" width={126.2} height={16} alt="shirt"></Image>
                        </div>

                        {/* for price */}
                        <div>
                            <span className="text-[20px] font-bold">$145</span>
                        </div>

                    </div>
                            {/* shirt details end */}

                    </div>

          {/* div for details 3 */}
                        <div className="hidden md:block">
                    <div className="bg-[url(/image3.png)] w-[295px] h-[298px]  rounded-[20px]  mb-[16px]">
                    </div>

                      {/* shirt details */}
                      <div className="">
                               
                               {/* for name */}
                        <div className="text-[20px] font-bold">
                        Loose Fit Bermuda Shorts
                        </div>
                           
                           {/* for ratings */}
                        <div className="">
                            <Image src="/stars3.png" width={113.09} height={19} alt="shirt"></Image>
                        </div>

                        {/* for price */}
                        <div>
                            <Image src="/$80.png" width={47} height={32} alt="price"></Image>
                        </div>

                    </div>
                            {/* shirt details end */}
 
                    </div>

           {/* div for details 4 */}
                      <div className="hidden md:block">
                    <div className="bg-[url(/image4.png)] w-[295px] h-[298px]  rounded-[20px] md:mb-[16px]">
                    </div>

                      {/* shirt details */}
                      <div className="">
                               
                               {/* for name */}
                        <div className="text-[20px] font-bold">
                        Faded Skinny Jeans
                        </div>
                           
                           {/* for ratings */}
                        <div className="">
                            <Image src="/stars4.png" width={150} height={19} alt="shirt"></Image>
                        </div>

                        {/* for price */}
                        <div>
                            <Image src="/$210.png" width={55} height={32} alt="price"></Image>
                        </div>

                    </div>
                            {/* shirt details end */}

                    </div>

                             {/* end of shirt carts */}
                 </div>
                 {/* shirt cart main container end */}
                 
                 <div className="text-center flex justify-center mt-[100px]">
                    <div className="text-center w-[218px] h-[52] border-2  rounded-full">
                        <button>View All</button>
                    </div>
                 </div>


             </div>






        </div>
    )
}