'use client'
import Image from 'next/image';
export function AvailableProductComponent({
    name,
    price,
    discount,
    discounted_price,
    imageurl,
    business,
    category,
}: {
    name: string;
    price: number,
    discount: number,
    discounted_price: number,
    imageurl: string,
    business: string,
    category: string
}) {
    return (
        <div className="flex flex-col sm:w-[50%] lg:w-[25%] md:w-[50%] p-1">
            <div className="w-full h-[400] border border-[#fff] relative shadow-md">
                <Image
                    src={imageurl}
                    alt={name}
                    fill />
                <div className='absolute top-0 left-0'>
                    <div className='p-1 fit-content bg-[#F05B05] text-[#fff]'>{discount}% Off</div>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-[#fff] p-2">
                    <ul className='flex gap-2 flex-col'>
                        <li>
                            <div className="font-bold text-lg text-[#00001F]">{category}</div>
                            <div>{name}</div>
                            </li>
                        <li>
                            <div className='flex gap-1 size-fit border border-[#F2A072] rounded-sm'>
                                <div className='line-through text-lg text-[#fff] bg-[#F05B05] size-fit p-1'>
                                    Price: {price}
                                </div>
                                <div className='text-lg text-[#02B00D] size-fit flex p-1 font-bold'>
                                    {price - discounted_price} Frw
                                </div>
                            </div>
                        </li>
                        <li><span className="font-light text-sm text-[#002E5E]">{business}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}