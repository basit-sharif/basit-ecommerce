import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const arr: number[] = [1, 2, 3, 4, 5, 6];

const LoadingComponent = ({ cardLimit, isCarousel }: { cardLimit: number, isCarousel: boolean }) => {
    return (
        <div className="flex justify-center items-center flex-col py-4">
            {!isCarousel &&
                <div className="flex justify-center items-center flex-col ">
                    <Skeleton className="my-3 mx-auto " width={350} height={60} />
                    <Skeleton width={200} height={20} />
                </div>
            }
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {arr.map((item) => {
                        if (item > cardLimit) return null
                        return (
                            <div key={item} className="p-4 w-full md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <Skeleton
                                        className=" lg:h-48 md:h-36 w-full object-cover object-center"
                                    />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                            <Skeleton width={60} height={8} />
                                        </h2>
                                        <h1 className="text-lg font-medium text-gray-900 mb-3">
                                            <Skeleton className="w-full" height={30} />
                                        </h1>
                                        <p className="leading-relaxed mb-3 truncate">
                                            <Skeleton className="w-full" height={20} />
                                        </p>
                                        <div className="flex items-center flex-wrap">
                                            <div
                                                className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                                            >
                                                <Skeleton className="w-full" height={10} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default LoadingComponent