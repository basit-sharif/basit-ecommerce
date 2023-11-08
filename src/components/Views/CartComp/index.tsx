"use client"
import { handleDelete, productFromIdCart } from '@/components/utils/apicalling'
import { allProductFetherFromSanityType, singleProductType } from '@/components/utils/types'
import { typeOfCart } from '@/lib/drizzle'
import { ShoppingBagIcon, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'
import { urlForImage } from '../../../../sanity/lib/image'
import Quantity from './Quantity'
import Pricing from './Pricing'
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/server'

const CartMain: FC<{ data: typeOfCart[], user: KindeUser }> = ({ data, user }) => {
    const [productData, setProductData] = useState<singleProductType[]>([]);

    const dataGetter = async () => {
        const productPromise = data.map((item) => {
            return productFromIdCart(item.productid);
        })

        try {
            const productData = await Promise.all(productPromise);

            setProductData(productData.map((item: allProductFetherFromSanityType) => {
                return item.result[0]
            }));

        } catch (error) {

        }
    };

    useEffect(() => {
        dataGetter();
    }, [data]);

    if (data.length == 0) {
        return (
            <div className='h-[80vh] flex items-center justify-center flex-col gap-3'>
                <ShoppingBagIcon color='purple' size={42} />
                <h2 className="text-2xl font-semibold text-gray-600">Cart is Empty, <Link href={"/products"} className='text-xl'>Browse products</Link></h2>
            </div>
        )
    };


    return (
        <div className='container'>
            <div className="max-w-6xl mx-auto">
                <div className="font-bold py-8">
                    <Link href={"/"} className='text-purple-500'>Home</Link> / <span className="text-gray-600">Cart</span>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16">
                    <div className="w-[69%]">
                        {
                            productData.map((item, index: number) => (
                                <div key={index} className="w-full h-[7rem] border-t flex justify-between items-center">
                                    <div className="flex items-center gap-8">
                                        <div className="w-16 h-16">
                                            <Image width={50} height={50} src={urlForImage(item.image[0]).url()} alt={item.productname} />
                                        </div>
                                        <div className="truncate w-80">
                                            {item.productname}
                                        </div>
                                        <Quantity item={item} user={user} data={data[index]} />
                                        <p className='bg-gray-50'>${item.price}.00</p>
                                        <X onClick={() => handleDelete(user.id as string, item._id)} className='cursor-pointer' />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <Pricing data={data} productData={productData} />
                </div>
            </div>
        </div>
    )
}

export default CartMain