
import Image from "next/image"

export default function Products(){
    return(
        <div>

             {/*shirts cart   */}
             <div className=" mt-[72px]">
                {/* Arrivals Heading */}
                <div className="text-center text-[48px] font-bold">
                    YOU MIGHT ALSO LIKE
                </div>
             </div>
                       
                       {/* main shirt carts */}
             <div className="mt-[55px] ">
                {/* shirt cart main container */}
                <div className="flex  justify-evenly">
                       
            {/* div for details 1 */}
                       <div className="">
                    <div className="bg-[url(/shirt111.png)] w-[295px] h-[298px]   rounded-[20px]  mb-[16px]">
                        
                    </div>

                        {/* shirt details */}
                    <div className="">
                               
                               {/* for name */}
                        <div className="text-[20px] font-bold">
                        Polo with Contrast Trims
                        </div>
                           
                           {/* for ratings */}
                        <div className="">
                            <Image src="/stars444.png" width={137.9} height={19} alt="shirt"></Image>
                        </div>

                        {/* for price */}
                        <div className="flex gap-1">
                        <Image src="/price2.png" width={200} height={32} alt="price"></Image>
                            {/* <Image src="/$242.png" width={58} height={32} alt="price"></Image>
                            <Image src="/20off.png" width={58} height={28} alt="price"></Image> */}
                        </div>

                    </div>
                            {/* shirt details end */}

                    </div>
                           
            {/* div for details 2 */}
                      <div>
                    <div className="bg-[url(/shirt222.png)] w-[295px] h-[298px]  rounded-[20px]  mb-[16px]">
                    </div>

                      {/* shirt details */}
                      <div className="">
                               
                               {/* for name */}
                        <div className="text-[20px] font-bold">
                        Gradient Graphic T-shirt
                        </div>
                           
                           {/* for ratings */}
                        <div className="">
                            <Image src="/stars3.png" width={126.2} height={19} alt="shirt"></Image>
                        </div>

                        {/* for price */}
                        <div>
                            <Image src="/$145.png" width={54} height={32} alt="price"></Image>
                        </div>

                    </div>
                            {/* shirt details end */}

                    </div>

          {/* div for details 3 */}
                        <div>
                    <div className="bg-[url(/shirt333.png)] w-[295px] h-[298px]  rounded-[20px]  mb-[16px]">
                    </div>

                      {/* shirt details */}
                      <div className="">
                               
                               {/* for name */}
                        <div className="text-[20px] font-bold">
                        Polo with Tipping Details
                        </div>
                           
                           {/* for ratings */}
                        <div className="">
                            <Image src="/stars4.png" width={150} height={19} alt="shirt"></Image>
                        </div>

                        {/* for price */}
                        <div>
                            <Image src="/$180.png" width={56} height={32} alt="price"></Image>
                        </div>

                    </div>
                            {/* shirt details end */}
 
                    </div>

           {/* div for details 4 */}
                      <div>
                    <div className="bg-[url(/shirt4444.png)] w-[295px] h-[298px]  rounded-[20px] mb-[16px]">
                    </div>

                      {/* shirt details */}
                      <div className="">
                               
                               {/* for name */}
                        <div className="text-[20px] font-bold">
                        Black Striped T-shirt
                        </div>
                           
                           {/* for ratings */}
                        <div className="">
                            <Image src="/stars5.png" width={160.7} height={19} alt="shirt"></Image>
                        </div>

                        {/* for price */}
                        <div>
                            <Image src="/price444.png" width={188} height={32} alt="price"></Image>
                        </div>

                    </div>
                            {/* shirt details end */}

                    </div>

                             {/* end of shirt carts */}
                </div>
                 {/* shirt cart main container end */}
                 
                 


             </div>






        </div>
    )
}