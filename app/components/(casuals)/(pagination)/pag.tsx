import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

  
  export default function Pag(){
    return(
        <div> 
            <div className="w-[920px] h-[40px]">
            <Pagination className="w-[920px] justify-between">
  <PaginationContent className="flex justify-between">
    <PaginationItem>
      < PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
      <PaginationLink href="#">1</PaginationLink>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem className="flex">
      <PaginationEllipsis  />
      <PaginationLink href="#">1</PaginationLink>
      <PaginationLink href="#">1</PaginationLink>

    </PaginationItem>
    <PaginationItem className="mr-6 bg-black">
    <PaginationLink  href="#">1</PaginationLink>
    
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>

             </div>

        </div>
    )
  }

