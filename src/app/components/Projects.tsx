import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div>
        <h3
          data-aos="fade-up"
          className="text-3xl font-bold text-center text-blue-600 mb-10" // Increase the margin-top value
        >
          Projects
        </h3>
      </div>
      <div>
        <ProjectCard
          projectName="Food Tuck App - Next.js & Tailwind CSS"
          description="This is a Food Tuck Restaraunt App built using Next.js for its fast and efficient server-side rendering, and Tailwind CSS for creating a clean. The app allows users to explore various menus, view food items, know about the chefs, and proceed to checkout to order food. It includes a smooth user experience, from browsing the menu to completing the order."
          url="https://food-tuck-next-js.vercel.app/"
        />
      </div>
      <div>
        <ProjectCard
          projectName="Qarz-e-Hasna Microfinance App - React.js & Tailwind CSS"
          description="his is a Qarz-e-Hasna Microfinance App built using React.js and styled with Tailwind CSS. The app is designed to facilitate the Qarze Hasana program, offering various loan categories to the people in need. It allows users to apply for loans under different categories like Wedding Loans, Home Construction Loans, and Education Loans, and provides them with an easy-to-use, responsive interface to manage their loan requests."
          url="https://hackathon-smit-dusky.vercel.app"
        />
      </div>
      <div>
        <ProjectCard
          projectName="Youtube Clone - React.js & Styled Component"
          description="This is a YouTube Clone developed with React.js and styled using Styled Components. The project focuses on delivering an intuitive and responsive user interface, closely mimicking the look and feel of YouTube. It is built to showcase the core elements of the platform's design, offering users a seamless experience in browsing, searching, and watching videos."
          url="https://youtube-clone-react-js-orcin.vercel.app"
        />
      </div>
      <div>
        <ProjectCard
          projectName="React Clone React.js & Styled Component"
          description="This is a Tesla Clone built using React.js and styled with Styled Components. The project aims to replicate the sleek, modern UI of the Tesla website, featuring an interactive and responsive design. It provides an engaging experience, allowing users to explore Tesla vehicles, energy products, and learn more about the company's mission and services.x`"
          url="https://tesla-react-js-black.vercel.app"
        />
      </div>
    </section>
  );
}
