// components/Hero.js
export default function Hero() {
    return (
      <section className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="text-center px-4">
          <img
            src="/saad.jpeg"
            alt="Saad's Profile"
            className="w-[200px] h-[200px] rounded-full mx-auto mb-4"
          />
          <h2 data-aos="fade-up" className="text-4xl sm:text-6xl font-bold">Hi, I'm Saad</h2>
          <p data-aos="fade-up" className="mt-4 text-lg">A Passionate Frontend Developer</p>
          <a data-aos="fade-up" href="#projects" className="mt-8 inline-block bg-white text-blue-500 font-bold py-2 px-4 rounded-lg">
            View My Work
          </a>
        </div>
      </section>
    );
  }
  