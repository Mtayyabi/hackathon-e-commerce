import CartCrumb from "../(breadCrumbs)/cartBread"
import CartItems from "../(cartItems)/cartItems"

export default function Cart(){
    return(
        <div>

            <div className="w-[95%] 2xl:w-[1240px] mx-auto">
                <CartCrumb/>


            </div>
            <br />

            <div className="w-[95%] 2xl:w-[1240px] mx-auto">
                <div>
                    <div className="text-[40px] font-bold mb-[24px]">
                       Your Cart 
                    </div>

                    <div>
                        <CartItems/>
                    </div>
                </div>
            
            </div>




        </div>
    )
}