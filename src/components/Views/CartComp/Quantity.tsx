import { updateCartItems } from '@/components/utils/apicalling'
import { singleProductType } from '@/components/utils/types'
import { typeOfCart } from '@/lib/drizzle'
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/server'
import React from 'react'

const Quantity = ({ data, user, item }: { data: typeOfCart, user: KindeUser, item: singleProductType }) => {
    return (
        <div className="flex justify-between">
            <div className={` flex gap-2 items-center text-lg`}>
                <button
                    onClick={() => updateCartItems(user.id as string, item._id, (data.quantity ? data.quantity : 0 as number) - 1)}
                    className='select-none cursor-pointer flex justify-center items-center w-8 h-8 rounded-full'>
                    -
                </button>
                <p className='ring-sky-200 ring-2 rounded-md cursor-pointer flex justify-center items-center w-8 h-8'>{data.quantity ? data.quantity :0}</p>
                <button
                    onClick={() => updateCartItems(user.id as string, item._id, (data.quantity ? data.quantity : 0 as number) + 1)}
                    className='select-none cursor-pointer flex justify-center items-center w-8 h-8 rounded'>
                    +
                </button>
            </div>
        </div>
    )
}

export default Quantity