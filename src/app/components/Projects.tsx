// components/Projects.js
export default function Projects() {
    return (
      <section id="projects" className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h3 data-aos="fade-up" className="text-3xl font-bold text-center text-blue-600 mb-8">
            Projects
          </h3>
          <div className="space-y-6">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h4 data-aos="fade-up" className="text-xl font-bold flex justify-center">Pak Wheel Project</h4>
              <p data-aos="fade-up" className="mt-2">
                Pakwheel-One is a comprehensive online platform designed for car
                enthusiasts and buyers alike. Developed with a modern tech stack,
                including Next.js and Tailwind CSS, this project offers an
                engaging and responsive user experience across devices. Through
                intuitive design and seamless navigation, Pakwheel-One provides
                users with detailed car listings, specifications, reviews, and the
                latest automotive news. With a sleek interface and dynamic
                components, this project not only showcases the power of modern
                web development but also aims to make the car-buying process more
                transparent and accessible. Built with a focus on performance and
                interactivity, Pakwheel-One is a great example of how technology
                can simplify automotive browsing and elevate user engagement.
              </p>
              <div data-aos="fade-up" className="flex justify-center mt-3">
              <a
                href="https://pakwheel-one.vercel.app"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                View Project
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
