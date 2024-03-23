import Link from "next/link";

const Footer = () => {
    return ( 
        <div className="flex  max-sm:flex-col max-sm:gap-5 justify-between sm:items-center pb-5 pt-10 border-t border-slate-200">
           <h1 className="text-3xl text-blue-600 font-semibold w-full">Theodore Agency</h1>
           <div className="flex  w-full max-sm:gap-5 justify-between sm:items-center">
            <div className="flex flex-col gap-5">
                <h3 className="font-semibold">Useful Links</h3>
                <Link href="/"><p className="hover:text-blue-600 transition duration-200">Home</p></Link>
                    <Link href="#services"><p className="hover:text-blue-600 transition duration-200">Services</p></Link>
                    <Link href="#examples"><p className="hover:text-blue-600 transition duration-200">Work Examples</p></Link>
            </div>
            <div className="flex flex-col gap-5">
                <h3 className="font-semibold">Useful Links</h3>
                <Link href="#why"><p className="hover:text-blue-600 transition duration-200">Why us?</p></Link>
                    <Link href="#reviews"><p className="hover:text-blue-600 transition duration-200">Reviews</p></Link>
                    <Link href="#contact"><p className="hover:text-blue-600 transition duration-200">Contact</p></Link>
            </div>
           </div>
          
        </div>
     );
}
 
export default Footer;