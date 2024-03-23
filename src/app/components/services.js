const Services = () => {
    return ( 
        <div className="flex flex-col items-center w-full gap-10" id="services">
            <h1 className="text-4xl font-semibold">Services</h1>
            <div className="grid grid-cols-2 gap-5 max-sm:gap-3">
                <div className="h-52 w-[600px] max-md:w-full bg-blue-600 flex items-center justify-center text-white rounded-lg cursor-pointer p-2">
                    <h3 className="font-semibold text-2xl max-sm:text-lg text-center">Premium shopify store designing</h3>
                </div>
                <div className="h-52 w-[600px] max-md:w-full bg-blue-600 flex items-center justify-center text-white rounded-lg cursor-pointer p-2">
                    <h3 className="font-semibold text-2xl text-center max-sm:text-lg">Marketing (Pinterest ads)</h3>
                </div>
                <div className="h-52 w-[600px] max-md:w-full bg-blue-600 flex items-center justify-center text-white rounded-lg cursor-pointer p-2">
                    <h3 className="font-semibold text-2xl text-center max-sm:text-lg">Klaviyo </h3>
                </div>
                <div className="h-52 w-[600px] max-md:w-full bg-blue-600 flex items-center justify-center text-white rounded-lg cursor-pointer p-2">
                    <h3 className="font-semibold text-2xl text-center max-sm:text-lg">SEO Marketing</h3>
                </div>
            </div>
        </div>
     );
}
 
export default Services;