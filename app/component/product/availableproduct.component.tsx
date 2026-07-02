'use client'
import Image from 'next/image';
export function AvailableProductComponent({
    name,
    price,
    discount,
    discounted_price,
    discount_start_date,
    discount_end_date,
    imageurl

}: {
    name: string;
    price: number,
    discount: number,
    discounted_price: number,
    discount_start_date: string
    discount_end_date: string
    imageurl: string
}) {
    return (
        <div className="text-black-500 lg:w-[25%] md:w-[50%] sm:w-[100%] flex flex-col p-1">
            <div className="w-full h-[400] border border-[#fff] relative shadow-sm">
                <Image
                    src={imageurl}
                    alt={name}
                    fill />
                <div className="absolute bottom-0 left-0 w-full bg-[#fff] p-2">
                    <ul>
                        <li><span className="font-bold text-lg text-[#00001F]">{name}</span></li>
                        <li><span className='text-[#545454]'>Price: <span>{price} RWF</span></span></li>
                        <li><span>{discount}% Off</span> | <span className="text-red-500 line-through text-sm">{discounted_price}</span></li>
                        <li><span className="font-light text-sm text-[#002E5E]">Simba Supermarket (Gishushu)</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}