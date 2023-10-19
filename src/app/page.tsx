import LandingPage from '@/components/Views/LandingPage'
import ProductGridViewer from '@/components/Views/ProductGridViewer';
import ShopDetails from '@/components/Views/ShopDetails';
import LoadingComponent from '@/components/ui/LoadingComponent';
import { allProductFetherFromSanity } from '@/components/utils/apicalling'
import { allProductFetherFromSanityType } from '@/components/utils/types';
import { Suspense } from 'react';

export default async function Home() {

  return <>
    <LandingPage />
    <Suspense fallback={
        <LoadingComponent isCarousel={true} cardLimit={3} />
    }>
      <Carousel />
    </Suspense>
    <ShopDetails />
  </>
}


async function Carousel() {
  let data = await allProductFetherFromSanity() as allProductFetherFromSanityType;

  return <ProductGridViewer ProducData={data.result.slice(0, 3)} />
}