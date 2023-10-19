import ProductGridViewer from "@/components/Views/ProductGridViewer";
import { kidsProductsFromSanity } from "@/components/utils/apicalling";
import { allProductFetherFromSanityType } from "@/components/utils/types";


const Male = async () => {
    const data = await kidsProductsFromSanity() as allProductFetherFromSanityType;

    return (
        <div className="py-4">
            <h1 className="my-3 text-3xl md:text-5xl font-bold text-gray-500 text-center">Kids Special</h1>
            <p className="text-center">Explore what we have</p>
            <ProductGridViewer ProducData={data.result} />
        </div>
    )
}

export default Male