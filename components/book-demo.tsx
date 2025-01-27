import Button from "./button"
import bot from "@/assets/bot.png"
import Image from "next/image"

function BookDemo() {
    return (
        <div className="mx-16 grid grid-cols-[6.5fr_3.5fr] gap-11 justify-between items-center rounded-3xl p-[136px_112px] mobile:px-10 bg-gradient-to-t from-[#d80d19] to-[#ff5059] mobile:mx-2 mobile:py-10 mobile:flex mobile:flex-col mobile:pb-16">
            <div>
                <h2 className="text-4xl font-bold text-white">Boost Your Productivity with your own GPT-4o chatbot. Get Started Today.</h2>
                <h4 className="mt-4 text-xl">Transform your Customer Service with Watermelon&rsquo;s AI and GPT-4o Powered Chatbot Solution. Try it free now.</h4>
            </div>
            <div className="relative">
                <Button text="Book a free demo" showLogo={false} className="px-8 py-8 text-xl" />
                <Image src={bot} alt="bot" className="absolute h-80 w-96 top-[-0.5rem] right-[-3.5rem]  mobile:hidden" />
            </div>
        </div>

    )
}

export default BookDemo