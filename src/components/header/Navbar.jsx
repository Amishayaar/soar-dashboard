import { BellDot, Search, Settings } from "lucide-react"
import { Input } from "../ui/input"


export const Navbar = () => {
    return (
        <nav className="w-full  h-100px py-3">
            <div className="px-4 flex justify-between items-center">
                <a href="#" className="text-x font-semibold">Overview</a>

                <div className="hidden md:flex space-x-4">
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <Input
                            disabled
                            type="search"
                            placeholder="Search for Something"
                            className="rounded-full border border-gray-300 pl-10"
                        />
                    </div>
                    <Settings height="35px" width="35px" className=" text-gray-500" />
                    <BellDot height="35px" width="35px" className=" text-gray-500" />
                    <a href="#" className="hover:text-gray-200">Contact</a>
                </div>

                <button className="md:hidden flex items-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </nav>

    )
}
