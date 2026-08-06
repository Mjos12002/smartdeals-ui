'use client'
import Image from 'next/image';
import Link from "next/link"

export function AvailableProductComponent({
    name,
    price,
    discount,
    discounted_price,
    imageurl,
    business,
    category,
    id,
}: {
    name: string;
    price: number,
    discount: number,
    discounted_price: number,
    imageurl: string,
    business: string,
    category: string,
    id: number
}) {
    const moreInfo = `product-details/${id}`
    return (
        <div className="flex flex-col sm:w-[50%] lg:w-[25%] md:w-[50%] p-1">
            <div className="w-full h-[400] border border-[#fff] relative shadow-md">
                <Image
                    src={imageurl}
                    alt={name}
                    fill />
                <div className='absolute top-0 left-0'>
                    <div className='p-1 fit-content bg-[#E06002] text-[#fff]'>{discount}% Off</div>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-[#fff] p-2">
                    <ul className='flex gap-2 flex-col'>
                        <li>
                            <div className="font-bold text-lg text-[#515252]">{name}</div>
                            <div className='text-[#000]'>{category}</div>
                        </li>
                        <li className='mt-8'>
                            <div className='flex gap-1 size-fit border border-[#AEAEB0] rounded-sm'>
                                <div className='line-through text-lg text-[#fff] bg-[#000021] size-fit p-1'>
                                    Price: {price}
                                </div>
                                <div className='text-lg text-[#02B00D] size-fit flex p-1 font-bold'>
                                    {price - discounted_price} Frw
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='flex justify-between'>
                                <div className='fit-content flex items-center'>
                                    {business}
                                </div>
                                <div className='fit-content border border-[#FFBB00] bg-[#FFBB00] text-[#fff] rounded-sm p-1'>
                                    <Link href={moreInfo}>
                                        Explore <span className='text-[#fff]'>Deal</span>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}