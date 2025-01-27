import { Menu, X } from "lucide-react"
import Image from "next/image"
import logo from "@/assets/chatbot.png"
import Button from "./button"

function Navbar() {
    return (
        <div className="flex justify-between items-center px-20 py-5 mobile:py-2 shadow-lg w-full mobile:px-4">
            <div className="flex text-3xl font-bold gap-2 mx-2">
                <Image src={logo} alt="logo" height={20} width={35} className="size-7" />
                Chatbot
            </div>
            <nav className="flex justify-between items-center mx-5 mobile:hidden">
                <ul className="flex space-x-6 flex-wrap">
                    <li className="cursor-pointer underline underline-offset-8 decoration-2 font-bold decoration-green-500 hover:bg-gray-50 rounded-md py-1 px-2 ">Product</li>
                    <li className="cursor-pointer underline underline-offset-8 decoration-2 font-bold decoration-green-500 hover:bg-gray-50 rounded-md py-1 px-2">Pricing</li>
                    <li className="cursor-pointer underline underline-offset-8 decoration-2 font-bold decoration-green-500 hover:bg-gray-50 rounded-md py-1 px-2">Solutions</li>
                    <li className="cursor-pointer underline underline-offset-8 decoration-2 font-bold decoration-green-500 hover:bg-gray-50 rounded-md py-1 px-2">Customer Stories</li>
                    <li className="cursor-pointer underline underline-offset-8 decoration-2 font-bold decoration-green-500 hover:bg-gray-50 rounded-md py-1 px-2">Resources</li>
                    <li className="cursor-pointer underline underline-offset-8 decoration-2 font-bold decoration-green-500 hover:bg-gray-50 rounded-md py-1 px-2">Affiliates</li>
                    <li className="cursor-pointer underline underline-offset-8 decoration-2 font-bold decoration-green-500 hover:bg-gray-50 rounded-md py-1 px-2">Log in</li>
                </ul>
            </nav>
            <div className="flex items-center mobile:hidden">
            <Button text="Book your free demo"/> 
            </div>
            <div className="flex items-center desktop:hidden">
                <input type="checkbox" className="hidden peer" id="mobile-menu" />
                <label htmlFor="mobile-menu" className="cursor-pointer border-2 border-black font-bold rounded-md p-2 hover:translate-y-[-2px] ease-out transition-all flex items-center peer-checked:hidden peer-checked:bg-white peer-checked:rounded-lg peer-checked:shadow-lg">
                    <div className=" items-center">
                        <Menu className="inline-block size-4 font-bold mr-2" />
                        Menu
                    </div>
                </label>
                <label htmlFor="mobile-menu" className="cursor-pointer border-2 border-black font-bold rounded-md p-2 hover:translate-y-[-2px] ease-out transition-all items-center peer-checked:flex peer-checked:bg-white peer-checked:rounded-lg peer-checked:shadow-lg hidden">
                    <div className=" items-center">
                        <X className="inline-block size-4 font-bold mr-2" />
                        Close
                    </div>
                </label>
                <div className="hidden peer-checked:block absolute top-14 right-0 z-10 bg-white rounded-lg p-4 w-full h-screen transition-all duration-300 ease-in-out peer-checked:animate-slideIn ">
                    <ul className="flex flex-col space-y-2">
                        <li className="cursor-pointer font-bold hover:bg-gray-50 rounded-md py-4 text-lg px-2 ">Product</li>
                        <div className="h-[2px] w-full bg-gray-200" />
                        <li className="cursor-pointer font-bold hover:bg-gray-50 rounded-md py-4 text-lg px-2">Pricing</li>
                        <div className="h-[2px] w-full bg-gray-200" />
                        <li className="cursor-pointer font-bold hover:bg-gray-50 rounded-md py-4 text-lg px-2">Solutions</li>
                        <div className="h-[2px] w-full bg-gray-200" />
                        <li className="cursor-pointer font-bold hover:bg-gray-50 rounded-md py-4 text-lg px-2">Customer Stories</li>
                        <div className="h-[2px] w-full bg-gray-200" />
                        <li className="cursor-pointer font-bold hover:bg-gray-50 rounded-md py-4 text-lg px-2">Resources</li>
                        <div className="h-[2px] w-full bg-gray-200" />
                        <li className="cursor-pointer font-bold hover:bg-gray-50 rounded-md py-4 text-lg px-2">Affiliates</li>
                        <div className="h-[2px] w-full bg-gray-200" />
                        <li className="cursor-pointer font-bold hover:bg-gray-50 rounded-md py-4 text-lg px-2">Log in</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar