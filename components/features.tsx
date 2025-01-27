import automate from "@/assets/automate.png"
import collaborate from "@/assets/collaborate.webp"
import tailor from "@/assets/tailor.webp"
import integrations from "@/assets/integrations.png"
import analytics from "@/assets/analytics.svg"

import Section from "./section"

const FEATURES = [{
    image: automate,
    imageBg: "bg-[#fede48]",
    subHeading: "Powered by GPT - 4O",
    subHeadingColor: "text-[#ee9823]",
    heading: "Automate 96% of your conversations with AI",
    description: "Automate your customer support with our AI chatbot. Our technology speaks any language and pulls precise answers from various sources like documents, websites, and your databases.",
    buttonText: "Discover GPT-4o chatbot"
}, {
    image: collaborate,
    imageBg: "bg-[#78f7be]",
    subHeading: "CONNECT WITH CUSTOMERS EASILY",
    subHeadingColor: "text-[#079d63]",
    heading: "Seamlessly collaborate with your Chatbot in our Inbox",
    description: "Our solution combines an all-in-one inbox with smart chatbots that effortlessly transition complex issues to human agents. Simplify communication and let humans handle the complex tasks.",
    buttonText: "Discover Inbox"
}, {
    image: tailor,
    imageBg: "bg-[#ff626a]",
    subHeading: "DIRECTLY ACCESSIBLE",
    subHeadingColor: "text-[#d80d19]",
    heading: "Tailor your Chat Widget to match your Brand's design",
    description: "Tailor the chat widget to fit your brand perfectly with unlimited customization options. Integrate your chatbot not only on your website but also on WhatsApp, Facebook, and Instagram.",
    buttonText: "Discover Chat Widget"
}, {
    image: integrations,
    imageBg: "bg-[#fede48]",
    subHeading: "Automate tedious tasks",
    subHeadingColor: "text-[#ee9823]",
    heading: "Automate your workflow with our integrations",
    description: "Tailor the chat widget to fit your brand perfectly with unlimited customization options. Integrate your chatbot not only on your website but also on WhatsApp, Facebook, and Instagram.",
    buttonText: "Discover Integrations"
}, {
    image: analytics,
    imageBg: "bg-[#88f6ec]",
    subHeading: "Optimize Support Workflows with data",
    subHeadingColor: "text-[#2ab8ae]",
    heading: "Optimize chatbot Performance with Analytics",
    description: "Improve your chatbot's performance with our advanced analytics on chat interactions, channel effectiveness, and office hour engagement, alongside detailed customer profiles and customization.",
    buttonText: "Discover Analytics"
}]

function Features() {
    return (
        <div>
            {FEATURES.map((feature, index) => (
                <Section key={index} image={feature.image} imageBg={feature.imageBg} subHeading={feature.subHeading} subHeadingColor={feature.subHeadingColor} heading={feature.heading} description={feature.description} buttonText={feature.buttonText} reverse={index % 2 !== 0} />
            ))}
        </div>
    )
}

export default Features