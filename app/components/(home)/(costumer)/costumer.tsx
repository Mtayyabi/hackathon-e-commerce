import ReviewsRes from "./costumerRes"


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  import Image from "next/image"
  

export default function Costumer(){
    
    return(
        <div>

            <div className="w-[1240px] mb-[100px] hidden md:block  mx-auto">

                <div className="text-[48px]  font-bold mt-[80px]">
                    OUR HAPPY COSTUMERS
                </div>


                      
                                      <Carousel>
                        <CarouselContent className="w-[400px] mt-8">
                          <CarouselItem className="inline w-[400px] ">
                            

                            <Image src="/review1.png" width={400} height={240} alt="review 1"></Image>
                            
                            </CarouselItem>

                            <CarouselItem>

                            <Image src="/review2.png" width={400} height={240} alt="review 1"></Image>
                            
                            </CarouselItem>

                            <CarouselItem>

                            <Image src="/review3.png" width={400} height={240} alt="review 1"></Image>
                            
                            </CarouselItem>

                          <CarouselItem>

                          <Image src="/review1.png" width={400} height={240} alt="review 1"></Image>

                          </CarouselItem>

                          <CarouselItem>

                          <Image src="/review1.png" width={400} height={240} alt="review 1"></Image>

                          </CarouselItem>
                        </CarouselContent>
                        <br /><br />
                        <div className="w-8 ">
                        <CarouselPrevious />
                        <br />
                        <CarouselNext />
                        </div>
                      </Carousel>
                      

                     








            </div>

            <div className="block md:hidden">
                        <ReviewsRes/>

                      </div>

                      <br /><br />  
                





        </div>
    )
}

