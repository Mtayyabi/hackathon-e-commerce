import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  import Image from "next/image"


export default function ReviewsRes(){
    return(
        <div>

            <div className="w-[358px] mx-auto">
                <div className="text-[32px] w-[286px] h-[72px] leading-none mb-6 font-extrabold">
                OUR HAPPY CUSTOMERS
                </div>


                <Carousel>
  <CarouselContent>
    <CarouselItem>
        <Image src="/review1.png" width={358} height={186} alt="review 1"></Image>
    </CarouselItem>
 
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>


            </div>




        </div>
    )
}