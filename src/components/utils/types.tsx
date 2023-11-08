import { Image } from "sanity"

export interface singleProductTypeDescription {
    children: any[],
    _type: string,
    style: string,
    _key: string,
    markDefs: any[]
}

export interface singleProductTypeImage {
    asset: {
        _ref: string,
        _type: string
    },
    _type: string,
    alt: string,
    _key: string
};


export interface singleProductTypeSlug {
    current: string,
    _type: string
}

export interface singleProductType {
    size: string[],
    description: singleProductTypeDescription[],
    producttype: string,
    image: Image[],
    productname: string,
    quantity: number,
    price: number,
    slug: singleProductTypeSlug,
    _id:string,
}
export interface allProductFetherFromSanityType {
    query: string,
    result: Array<singleProductType>
}