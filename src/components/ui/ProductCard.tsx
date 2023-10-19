import { FC } from "react"
import { singleProductType } from "../utils/types"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { urlForImage } from "../../../sanity/lib/image"

const ProductCard: FC<{ product: singleProductType }> = ({ product }) => {
    return (
        <div className="p-4 w-full md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                    className=" lg:h-48 md:h-36 w-full object-cover object-center"
                    src={urlForImage(product.image[0]).url()}
                    alt="Hi"
                    width={1000}
                    height={1000}
                    // fill
                />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                    <h1 className="text-lg font-medium text-gray-900 mb-3">{product.productname}</h1>
                    <p className="leading-relaxed mb-3 truncate">{product.productname}</p>
                    <div className="flex items-center flex-wrap">
                        <Link
                            href={`/brief/${product.slug.current}`}
                            className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            1.2K
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            6
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard