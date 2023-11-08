import BriefProduct from "@/components/Views/BriefProduct";
import ProductGridViewer from "@/components/Views/ProductGridViewer";
import BriefLoadingSkeleton from "@/components/ui/BriefLoadingSkeleton";
import LoadingComponent from "@/components/ui/LoadingComponent";
import { allProductFetherFromSanity, detailOfSingleProductFromSanity } from "@/components/utils/apicalling"
import { allProductFetherFromSanityType, singleProductType } from "@/components/utils/types";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Suspense } from "react";

export async function generateStaticParams() {
    const data = await allProductFetherFromSanity() as allProductFetherFromSanityType;

    return data.result.map((item: singleProductType) => (
        { slug: item.slug.current }
    ));
};


export async function generateMetadata({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const data = await detailOfSingleProductFromSanity(slug) as allProductFetherFromSanityType;

    return {
        title: data.result[0].productname,
    }

}

const Brief = async ({ params }: { params: { slug: string } }) => {

    return (
        <Suspense fallback={
            <div>
                <BriefLoadingSkeleton />
                <div className="py-4" />
                <LoadingComponent isCarousel={true} cardLimit={3} />
            </div>
        }>
            <Detail slug={params.slug} />
        </Suspense>
    )
}


async function Detail({ slug }: { slug: string }) {
    const data = await Promise.all([detailOfSingleProductFromSanity(slug), allProductFetherFromSanity()]) as allProductFetherFromSanityType[];

    const { getUser } = getKindeServerSession();
    const user = getUser();

    return <>
        <BriefProduct product={data[0].result[0]} user={user} />
        <ProductGridViewer ProducData={data[1].result.slice(0, 3)} />
    </>
}


export default Brief