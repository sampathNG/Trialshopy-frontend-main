import React,{useState} from 'react';
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci';
import Image from 'next/image';
const CartItemCard = ({ product }) => {
    const [quantity, setQuantity] = useState(product.qty);

    const handleIncrement = () => {
      setQuantity(quantity + 1);

    };
  
    const handleDecrement = () => {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    };


	return (
		<div className="max-w-lg overflow-y-auto rounded">
			{/* <img
				src={product.image}
				alt={product.name}
				className="object-cover w-full h-48"
			/> */}
			<div className="px-6 py-4">
				
			<div className='my-[30px] flex flex-row'>
                <Image src='/noImage.png' alt="shoe1" className='w-[120px] h-[120px]' />
                <div className='w-[300px] sm:w-[495px] flex flex-col my-[25px] gap-[10px]'>
                    <div className='flex justify-between items-center h-[27px]'>
                        <h1 className='text-lg font-semibold '>{product.productName}</h1>
                        <div className='flex'>
                            <h1 className='pr-[10px] line-through opacity-60'>{product.price}</h1>
                            <h1 className='pr-[5px] font-medium'>{product.price}</h1>
                        </div>
                    </div>

                    <div className='flex justify-between items-center h-[34px]'>
                        <h1 className='text-[#EB8105] text-base  '>In stocks</h1>
                        <div className='flex sm:gap-[10px]'>
                            <CiSquareMinus onClick={handleDecrement}   size='3rem' className='opacity-40 hover:cursor-pointer' />
							
                            <div className='my-auto'>{quantity}</div>
                            <CiSquarePlus onClick={handleIncrement} size='3rem' className='opacity-40 hover:cursor-pointer' />
							
                        </div>
                    </div>
                </div>
            </div>
			</div>

		
		</div >
	);
};

export default CartItemCard;
