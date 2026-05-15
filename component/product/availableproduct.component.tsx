'use client'

export function AvailableProduct({productName, productPrice}: {productName: string; productPrice: number}) {

    return (
        <div className="text-black-500 w-[25%] flex flex-col p-1">

            <div className="border border-gray-300 bg-[url('/cosmetics.jpg')] bg-cover h-90 product-card justify-end flex flex-col">
                <div className="p-1 w-full product-details p-2 flex flex-col bg-white">
                    <span className="font-bold">{productName}</span>
                    <span>Price: <span>{productPrice} RWF</span> - <span className="text-red-500 line-through text-sm">1000 RWF</span></span>
                    <span>10% Off</span>
                    <span className="font-light text-sm text-[#595757]">Simba Supermarket (Gishushu)</span>
                </div>
             </div>

        </div>
    )
}