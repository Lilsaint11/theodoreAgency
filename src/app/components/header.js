import Link from "next/link";

const Header = () => {
    return ( 
        <div className="flex w-full justify-between items-center">
            <h1 className="text-2xl max-[1100px]:text-lg text-blue-600 font-semibold">Theodore Agency</h1>
            <div className="flex gap-10 max-[750px]:gap-5 max-[950px]:text-[12px] max-sm:hidden">
                <Link href="/"><p className="hover:text-blue-600 transition duration-200">Home</p></Link>
                <Link href="#services"><p className="hover:text-blue-600 transition duration-200">Services</p></Link>
                <Link href="#examples"><p className="hover:text-blue-600 transition duration-200">Work Examples</p></Link>
                <Link href="#why"><p className="hover:text-blue-600 transition duration-200">Why us?</p></Link>
                <Link href="#reviews"><p className="hover:text-blue-600 transition duration-200">Reviews</p></Link>
                <Link href="#contact"><p className="hover:text-blue-600 transition duration-200">Contact</p></Link>
            </div>
        </div>
     );
}
 
export default Header;