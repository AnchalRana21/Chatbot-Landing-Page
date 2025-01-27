import BookDemo from "@/components/book-demo";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="">
      <div className="sticky top-0 z-50 bg-white">
        <Navbar />
      </div>
      <Hero />
      <Features />
      <BookDemo />
    </main>
  );
}
