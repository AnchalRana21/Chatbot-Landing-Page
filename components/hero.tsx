import Image from "next/image";

import hero from "@/assets/hero.png"
import google from "@/assets/google.png"
import adobe from "@/assets/adobe.png"
import salesforce from "@/assets/salesforce.svg"
import meta from "@/assets/meta.svg"
import netflix from "@/assets/netflix.png"
import Button from "./button";
import Link from "next/link";

function Hero() {
    return (
        <div className="bg-[#78f7be] m-5 mt-0 rounded-b-3xl px-20 pt-24 mobile:px-4">
            <div className="grid grid-cols-[repeat(12,[col]_1fr)] justify-between items-center mobile:mx-2 mobile:py-2 gap-4 pb-32 mobile:flex mobile:flex-col mobile:gap-10">
                <div className="grid col-span-5">
                    <h1 className="text-[56px] font-bold text-stone-900 mobile:text-4xl mobile:text-center">Automate your customer service.</h1>
                    <h4 className="text-xl text-stone-800 mobile:text-base mobile:text-center">Build your GPT-4o chatbot in minutes, deploy on your website or social media and automate all your frequently asked questions to reduce waiting times and your workload.</h4>
                    <div className="flex gap-10 mt-5 items-center justify-center flex-wrap mobile:flex-col mobile:gap-4">
                        <Button text="Book your free demo" />
                        <a href="" className="font-bold text-black underline underline-offset-4 decoration-2 mobile:text-sm mobile:text-center">
                            Build your chatbot
                        </a>
                    </div>
                </div>
                <div className="grid col-span-7" >
                    <Image src={hero} alt="hero" height={700} width={700} />
                </div>
            </div>
            <div className="border-t-2 border-stone-400 border-dashed border-dash-offset-10 mobile:mt-4 pt-2">
                <div className="grid grid-cols-[repeat(12,[col]_1fr)] justify-between items-center py-10 mobile:mx-2 mobile:py-2 mobile:flex-col mobile:gap-4 mobile:grid-cols-1">
                    <h4 className="col-span-4 text-2xl font-bold text-stone-900 mobile:text-xl mobile:col-span-7 mobile:mt-4 mobile:mb-4 mobile:ml-4 mobile:text-center">
                        Trusted by:
                    </h4>
                    <div className="col-span-8 flex justify-center items-center gap-10 flex-wrap mobile:gap-4 mobile:mx-4 mobile:grid-cols-1">
                        <Link href="https://google.com" target="_blank"  >
                            <Image src={google} alt="google" width={150} height={10} className="filter grayscale hover:grayscale-0 transition-all duration-300 scale-75 cursor-pointer  " />
                        </Link>
                        <Link href="https://adobe.com" target="_blank"  >
                            <Image src={adobe} alt="adobe" width={60} height={20} className="filter grayscale hover:grayscale-0 transition-all duration-300 scale-75 cursor-pointer " />
                        </Link>
                        <Link href="https://salesforce.com" target="_blank"  >
                            <Image src={salesforce} alt="salesforce" width={100} height={10} className="filter grayscale hover:grayscale-0 transition-all duration-300 scale-75 cursor-pointer  " />
                        </Link>
                        <Link href="https://meta.com" target="_blank"  >
                            <Image src={meta} alt="meta" width={150} height={40} className="filter grayscale hover:grayscale-0 transition-all duration-300 scale-75 cursor-pointer  " />
                        </Link>
                        <Link href="https://netflix.com" target="_blank"  >
                            <Image src={netflix} alt="netflix" width={170} height={50} className="filter grayscale hover:grayscale-0 transition-all duration-300 scale-75 cursor-pointer    " />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Hero;