export function Content() {
    return (
        <div className="w-1/2 p-4 z-10">
            <section id="about" className="py-16">
                <h2 className="font-bold text-2xl uppercase tracking-wider text-slate-200">About Me</h2>
                <p className="mt-4 text-slate-400">I'm currently looking for 2025 internships, feel free to get in touch at </p>
                <p className="hover:text-violet-400 underline underline-offset-4">
                    <a href="mailto:adlin@uwaterloo.ca">adlin@uwaterloo.ca</a>
                </p>

            </section>

            <section id="experience" className="py-16">
                <h2 className="font-bold text-2xl uppercase tracking-wider text-slate-200">Experience</h2>
                
                <JobCard
                    imagePath="/td.png"
                    companyName="TD Bank"
                    position="Software Engineer Intern"
                    location="Toronto, ON"
                    duration="May 2024 - Aug 2024"
                    tags={['JavaScript', 'TypeScript', 'React', 'FastAPI', 'GCP']}
                />

                <JobCard
                    imagePath="/td.png"
                    companyName="TD Bank"
                    position="Software Engineer Intern"
                    location="Toronto, ON"
                    duration="May 2024 - Aug 2024"
                    tags={['JavaScript', 'TypeScript', 'React', 'FastAPI', 'GCP']}
                />

                <JobCard
                    imagePath="/td.png"
                    companyName="TD Bank"
                    position="Software Engineer Intern"
                    location="Toronto, ON"
                    duration="May 2024 - Aug 2024"
                    tags={['JavaScript', 'TypeScript', 'React', 'FastAPI', 'GCP']}
                />
            </section>

            <section id="projects" className="py-16">
                <h2 className="font-bold text-2xl uppercase tracking-wider text-slate-200">Projects</h2>
                <p className="mt-4 text-slate-400">Your contact information here... Your contact information here... Your contact information here... Your contact information here...Your contact information here...Your contact information here...Your contact information here...Your contact information here...Your contact information here...Your contact information here... Your contact information here...</p>
            </section>
        </div>
    );
    
}

const JobCard = ({ imagePath, companyName, position, location, duration, tags }) => {
    return (
      <div className="rounded-lg py-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-start">
            <img
              src={imagePath}
              alt={`${companyName} Logo`}
              className="w-12 h-12 mr-4 object-fill rounded-xl"
            />
            <div>
              <p className="text-lg font-semibold text-slate-200">{companyName}</p>
              <p className="text-md text-slate-200">{position}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-slate-200">{location}</p>
            <p className="text-md text-slate-200">{duration}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-violet-800 bg-opacity-25 text-white text-sm font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  };
  