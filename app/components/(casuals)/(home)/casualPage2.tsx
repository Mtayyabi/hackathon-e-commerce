import Pic from "../(pic)/pic"
import Pag from "../(pagination)/pag"
export default function Page2(){
    return(
        <div>
            <div className="w-[945px]">
                <div className="flex items-center justify-between"> 
                    {/* Heading */}
                    <div className="text-[32px] font-bold" >
                        Casual
                    </div>
                    {/* items main */}
                    <div className="flex">
                        {/* item1 */}
                        <div className="text-[16px] ">
                        Showing 1-10 of 100 Products
                        </div>
                        {/* item2 */}
                        <div className="flex">
                       <span>Sort by: </span> 
                          <div className="font-bold">
                            <select name="item" id="item">
                                <option className="font-bold" value="one">Most Popular</option>
                            </select>
                          </div>
                        </div>

                    </div>

                </div>

                {/* pic section */}
                <div>
                    <Pic/>
                </div>

                <br />
                <br />
                      
                      {/* Pagination */}
                <div>

                    <Pag/>

                </div>

            </div>
        </div>
    )
}