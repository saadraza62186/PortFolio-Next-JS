// components/Skills.js
export default function Skills() {
    return (
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h3 data-aos="fade-up" className="text-3xl font-bold text-center text-blue-600 mb-8">Skills</h3>
          <div data-aos="fade-up" className="flex flex-wrap justify-center space-x-4">
            <div className="bg-blue-100 p-4 rounded-full">HTML</div>
            <div className="bg-blue-100 p-4 rounded-full">CSS</div>
            <div className="bg-blue-100 p-4 rounded-full">JavaScript</div>
            <div className="bg-blue-100 p-4 rounded-full">React JS</div>
            <div className="bg-blue-100 p-4 rounded-full">Next JS</div>
            <div className="bg-blue-100 p-4 rounded-full">TypeScript</div>
            <div className="bg-blue-100 p-4 rounded-full">Node JS</div>
            <div className="bg-blue-100 p-4 rounded-full mt-[10px]">Express JS</div>
            <div className="bg-blue-100 p-4 rounded-full mt-[10px]">MongoDB</div>
          </div>
        </div>
      </section>
    );
  }
  