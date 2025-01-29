import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { FiMenu } from "react-icons/fi";
  import Link from "next/link";
  


export default function SheetComponent(){
    return(
        <div>

            <Sheet>
  <SheetTrigger> <FiMenu className=" " /> </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>
        <div>
          SHOP.CO
        </div>
        </SheetTitle>
      <SheetDescription>
        <div className="flex flex-col gap-4">

        <Link href="#">Home</Link>
        <Link href="#">Home</Link>
        <Link href="#">Home</Link>
        <Link href="#">Home</Link>
        </div>


      </SheetDescription>
    </SheetHeader>
  </SheetContent>
        </Sheet>


        </div>
    )
}