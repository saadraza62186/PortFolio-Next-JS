// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
    return (
      <section className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="text-center px-4">
          <Image
            width={100}
            height={100}
            src="/saad.jpeg"
            alt="Saad&apos;s Profile" // Escape the apostrophe here
            className="w-[200px] h-[200px] rounded-full mx-auto mb-4"
          />
          <h2 data-aos="fade-up" className="text-4xl sm:text-6xl font-bold">Hi, I&apos;m Saad</h2> {/* Escape apostrophe here */}
          <p data-aos="fade-up" className="mt-4 text-lg">A Passionate Frontend Developer</p>
          <a data-aos="fade-up" href="#projects" className="mt-8 inline-block bg-white text-blue-500 font-bold py-2 px-4 rounded-lg">
            View My Work
          </a>
        </div>
      </section>
    );
}
