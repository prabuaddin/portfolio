import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
        <div className="bg-gradient-to-r from-orange-500 to-green-500 h-[70px]">
            <div className="flex justify-center items-center py-5 gap-3 pr-3">
                <Link to='/'>
                <span className="hover:text-white font-rubik text-3xl">
                    Prabu Addin
                </span>
                </Link>
            </div>
        </div>
        </>
    )
}