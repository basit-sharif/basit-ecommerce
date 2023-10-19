import ProductCard from "../ui/ProductCard"
import { singleProductType } from "../utils/types"

const ProductGridViewer = async ({ ProducData }: { ProducData: Array<singleProductType> }) => {

    return (
        <section className="text-gray-600">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {ProducData.map((item, index) => (
                        <ProductCard key={index} product={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductGridViewer