import Link from "next/link";

const Banner = () => {
    return ( 
        <div className="mt-28 max-md:mt-16">
            <div className="flex flex-col gap-5">
                <h1 className="text-6xl max-sm:text-5xl max-[470px]:text-[40px] max-sm:leading-relaxed font-semibold leading-snug max-[470px]:leading-normal">Launch Your Own<br/> Profitable<br/> Shopify Dropshipping Store</h1>
                <h3 className="text-xl max-[470px]:text-[14px] max-sm:text-lg leading-loose">Profitable dropshipping stores based on existing top selling shopify stores,<br/> so you are ready to start getting sales!</h3>
                <div>
               <Link href="https://discordapp.com/users/1146887824445022268" target="_blank"><button className="bg-blue-600 h-16 w-56 rounded-md text-lg font-medium mt-5 text-white">BUILD MY STORE</button></Link> 
               <p className="mt-5 text-[12px] font-semibold">PS: If not redirected to the agency"s discord, please add up &quot;theodore_.1&quot; on discord to communicate with us.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Banner;