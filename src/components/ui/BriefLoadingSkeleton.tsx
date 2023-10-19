import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const BriefLoadingSkeleton = () => {
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full space-y-5">
                            <Skeleton className="w-full h-[35rem] object-cover" />
                        </div>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                <Skeleton width={100} height={10} />
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                <Skeleton className="w-full" height={80} />
                            </h1>
                            <div className="py-4 w-full" />
                            <Skeleton className="w-full" count={5} />
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex items-baseline gap-4">
                                    <Skeleton className="w-full" height={20} />
                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">
                                <Skeleton className="w-full" height={20} />
                                </span>
                                <button>
                                    <Skeleton />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BriefLoadingSkeleton