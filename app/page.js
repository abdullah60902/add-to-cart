'use client'

    import { useEffect, useState } from "react"
    import Image from "next/image";
import Navbar from './(component)/navbar/Navbar'
    import star from '@/public/img/star-7207.svg'
    export default function Home() {
      const [product, setProduct] = useState(null)
    
    const  [card,setCard] = useState ([])
      useEffect(() => {
        const getProduct = async () => {
          const responce = await fetch('https://fakestoreapi.com/products')
          const data = await responce.json()
          console.log(data);
          setProduct(data)
          console.log("state data is here", product);
    
        }
        getProduct()
      }, [])

      const Addcard = (item,index) =>{

console.log("Item:", item, index);

setCard([...card, item]);
console.log("Card after:", card);}
const iscardo =(itemid)=>{
  return(
    card.some(item=>item.id===itemid)
  )
}
const removeFromCart = (id) => {
  const reminder = card.filter((item) => item.id !== id);
  setCard(reminder);}
      return (
      
        <>
        <Navbar card={card} setCard={setCard} />
          <div className="text-center mt-[50px]">
            <h1 className="font-bold text-[30px] my-5">Product</h1>
            {
              product == null ?
                <div role="status" className=" flex justify-center mt-[300px]">
                  <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
                : <div className="grid  grid-cols-3 gap-8">
                  {
                    product?.map((item, index) => {
                      return (
                        <>
                          <div className=" rounded-lg shadow-md  p-6 " pm >
                            <img src={item.image} alt="" className="mx-auto h-[200px] w-[200px]" /> <br />
                            <p className=" text-xl font-bold">{item.title}</p>
                            <p className="  text-[16px]">{item.description}</p>
                            <p className=" text-blue-800 text-lg"> Price: ${item.price}</p>
                            <div className="flex justify-between mt-4 ">
                              
                              <p className="  text-yellow-400 flex items-center" >Rating: {item.rating.rate}<Image src={star} className="w-[20px]"/></p>
{iscardo(item.id)?(
                              <button
                      className="bg-red-600 text-white rounded-md py-2 px-4 font-bold"
                    onClick={() => removeFromCart(item?.id)}
                    >Remove from cart</button>)
:(
                              <button className=" bg-blue-600 text-white rounded-md py-2 px-4 font-bold 	  " onClick={()=>Addcard(item,index)}>Add to cart</button>
                    )}
                    
                            </div>
                          </div>
                        </>
                      )
    
                    })
                  }
                </div>
    
            }
          </div>
</>
);
}
