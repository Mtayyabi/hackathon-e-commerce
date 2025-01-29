import Link from "next/link"


export default function Nav0(){
    return(
        <div>
            {/* <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </head> */}

        {/* // main div */}

        <div className="bg-black  text-white  w-[full] h-[38px] items-center  flex justify-center">
         {/* for text */}

         <div className="items-center  h-[19px] text-[12px] sm:text-[14px]">
        
            Sign up and get 20% off to your first order.  <Link href="#"> Sign Up Now </Link>
         </div>

        </div>
        
        
        </div>
    )
}