"use client"
import ProductGridViewer from "@/components/Views/ProductGridViewer";
import { searchProductsFromSanity } from "@/components/utils/apicalling";
import { allProductFetherFromSanityType } from "@/components/utils/types";
import { redirect, useSearchParams } from "next/navigation"

const Search = async () => {
    const params = useSearchParams();

    if (!params.has("query")) redirect("/products")

    const searchValue = params.get("query") as string;

    const data = await searchProductsFromSanity(searchValue) as allProductFetherFromSanityType;

    return (
        <div className="py-4">
            <h1 className="my-3 text-3xl md:text-5xl font-bold text-gray-500 text-center">Search</h1>
            <p className="text-center">Result for {searchValue}</p>
            <ProductGridViewer ProducData={data.result} />
        </div>
    )
}

export default Search