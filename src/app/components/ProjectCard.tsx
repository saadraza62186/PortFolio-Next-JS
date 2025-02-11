import React from 'react'

const ProjectCard = ({projectName, description, url} : any) => {
  return (
    <div className='mt-3'>
        <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-6">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h4
              data-aos="fade-up"
              className="text-xl font-bold flex justify-center"
            >
              {projectName}
            </h4>
            <p data-aos="fade-up" className="mt-2">
              {description}
            </p>
            <div data-aos="fade-up" className="flex justify-center mt-3">
              <a
                href={url}
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
    </div>
  )
}

export default ProjectCard