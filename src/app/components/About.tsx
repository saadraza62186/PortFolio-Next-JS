// components/About.js
export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h3
          data-aos="fade-up"
          className="text-3xl font-bold text-center text-blue-600 mb-8 border-b-2 "
        >
          About Me
        </h3>
        <p data-aos="fade-up" className="text-center text-lg ">
          👋 Hey there! I&apos;m Saad, a Full-Stack Developer passionate about
          crafting modern, high-performance web applications. I specialize in
          Next.js, React, TypeScript, and Tailwind CSS on the frontend, while
          building powerful backends with Node.js, Express, and MongoDB. 💡 I
          have experience with containerization using Docker and currently, I&apos;m
          expanding my expertise by learning NestJS, GraphQL, and AWS to build
          scalable and efficient applications. I&apos;m also exploring AI & GenAI to
          integrate intelligent solutions into web applications.
          <br />
          <br />
          📬 Reach out: razasaad62186@gmail.com | <a href="https://github.com/saadraza62186" target="_blank">Github Repository</a>  | <a href="https://www.linkedin.com/in/saad-patni-96460832a/" target="_blank">Linkedin Profile</a>
        </p>
      </div>
    </section>
  );
}
