const WhyUs = () => {
    return ( 
        <div className="flex  max-lg:flex-col justify-between" id="why">
            <div className="w-full flex flex-col gap-10">
               <h1 className="text-5xl max-sm:text-4xl font-bold">Why choose us?</h1>
               <div  className="flex flex-col gap-2">
                   <h3 className="font-bold">Winning Products</h3>
                   <p className="max-[1250px]:text-[14px]"> we are always on the lookout for the latest and greatest products that will help our customers succeed. We have a team of experts who research and test products to find the ones that will really make a difference. We are proud to offer a carefully curated selection of winning products that are sure to help you take your business to the next level. </p>
               </div>
               <div  className="flex flex-col gap-2">
                   <h3 className="font-bold">Custom Store</h3>
                   <p className="max-[1250px]:text-[14px]">We are experts at building beautiful and effective Shopify stores that will help you grow your business. We understand the ins and outs of ecommerce, and we know what it takes to create a successful online store. Plus, we are always up-to-date on the latest Shopify features and trends. Let us put our expertise to work for you and help you reach your goals! </p>
               </div>
               <div className="flex flex-col gap-2">
                   <h3 className="font-bold">Marketing</h3>
                   <p className="max-[1250px]:text-[14px]">By working with a team of search marketing experts, you get the advantage of their years of experience and intimate knowledge of the space. We know what works and what doesnt, so you dont have to waste time (or budget) figuring it out yourself. At the same time, we take a hands-on approach so you’re in the loop and learning right alongside us about your audience, competitors, and more.</p>
               </div>
            </div>
            <img src="https://th.bing.com/th/id/OIP.UVdY6Xa82ltwNQwsGfKiyQHaGi?rs=1&pid=ImgDetMain" alt="" className="w-3/5 max-sm:w-full" />
        </div>
     );
}
 
export default WhyUs;