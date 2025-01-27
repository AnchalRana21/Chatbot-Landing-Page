import Image from "next/image"
import ArrowRight from "@/assets/arrow-right.svg"

const Button = ({ showLogo = true, text = "", className = "" }: {
    showLogo?: boolean
    text?: string
    className?: string
}) => {
    return <button className={`bg-black flex flex-nowrap w-max h-12 items-center justify-center text-white px-4 py-2 rounded-lg font-bold hover:translate-y-[-2px] ease-out transition-all ${className}`}>
        {text}
        {showLogo && <Image src={ArrowRight} alt="arrow-right" height={20} width={20} className="size-4 ml-2" />}
    </button>
}

export default Button