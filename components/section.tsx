import Image, { StaticImageData } from "next/image";
import Button from "./button";

function Section({
    image,
    imageBg,
    subHeading,
    subHeadingColor,
    heading,
    description,
    buttonText,
    reverse
}:{
    image: StaticImageData,
    imageBg: string,
    subHeading: string,
    subHeadingColor: string,
    heading: string,
    description: string,
    buttonText: string,
    reverse?: boolean
}) {
    return (
        <div className="grid grid-cols-[repeat(12,[col]_1fr)] justify-between items-center px-16 my-8 mobile:px-4 mobile:mx-2 mobile:py-2 gap-10 pb-16 mobile:flex mobile:flex-col mobile:gap-10 grid-flow-dense">
            <div className={`col-span-6 ${imageBg} rounded-3xl ${reverse ? "col-start-7" : ""}`}>
                <Image src={image} alt="automate" height={700} width={700} />
            </div>
            <div className={`col-span-5 ${reverse ? "col-start-2" : ""}`}>
                <h5 className={`font-bold ${subHeadingColor} text-sm mb-2`}>{subHeading}</h5>
                <h2 className="text-4xl font-bold text-stone-900">{heading}</h2>
                <h3 className="text-[#58514f] mt-4">{description}</h3>
                <div className="mt-10">
                    <Button text={buttonText} />
                </div>
            </div>
        </div>
    );
}

export default Section;