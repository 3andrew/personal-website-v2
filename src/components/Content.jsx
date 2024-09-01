export function Content() {
    return (
        <div className="w-1/2 p-4 z-10">
            <section id="about" className="py-16">
                <h2 className="font-bold text-2xl uppercase tracking-wider text-slate-200">About Me</h2>
                <p className="mt-4 text-slate-400">I'm a full-stack developer and third-year Computer Science student at the University of Waterloo. </p>
                <p className="mt-4 text-slate-400">I'm always open to connect - feel free reach out at <a className="hover:text-violet-300 underline underline-offset-4" href="mailto:adlin@uwaterloo.ca">adlin@uwaterloo.ca</a>
                </p>
            </section>

            <section id="experience" className="py-16">
                <h2 className="font-bold text-2xl uppercase tracking-wider text-slate-200">Experience</h2>
                
                <JobCard
                    imagePath="/td.png"
                    companyName="TD Bank"
                    position="Software Engineer Intern"
                    location="Toronto, ON"
                    duration="May 2024 - Aug. 2024"
                    tags={['JavaScript', 'TypeScript', 'React', 'FastAPI', 'GCP']}
                    url="https://www.td.com"
                />

                <JobCard
                    imagePath="/altislabs.png"
                    companyName="Altis Labs"
                    position="Software Engineer Intern"
                    location="Toronto, ON"
                    duration="Sep. 2023 - Dec. 2023"
                    tags={['TypeScript', 'FastAPI', 'GraphQL', 'Hasura', 'PostgreSQL', 'AWS']}
                    url="https://www.altislabs.com/"
                />

                <JobCard
                    imagePath="/altislabs.png"
                    companyName="Altis Labs"
                    position="Quality Assurance Intern"
                    location="Toronto, ON"
                    duration="Jan. 2023 - Apr. 2023"
                    tags={['JavaScript', 'Cypress', 'Python', 'Docker', 'CI/CD']}
                    url="https://www.altislabs.com/"
                />
            </section>

            <section id="education" className="py-16">
                <h2 className="font-bold text-2xl uppercase tracking-wider text-slate-200">Education</h2>
                <JobCard
                    imagePath="/uw.png"
                    companyName="University of Waterloo"
                    position="Computer Science"
                    location="Waterloo, ON"
                    duration="Sep. 2022 - Present"
                    tags={[]}
                    url="https://uwaterloo.ca/"
                />
            </section>

            <section id="projects" className="py-16">
                <h2 className="font-bold text-2xl uppercase tracking-wider text-slate-200">Projects</h2>
                <p className="mt-4 text-slate-400">Your contact information here... Your contact information here... Your contact information here... Your contact information here...Your contact information here...Your contact information here...Your contact information here...Your contact information here...Your contact information here...Your contact information here... Your contact information here...</p>
            </section>
        </div>
    );
    
}

const JobCard = ({ imagePath, companyName, position, location, duration, tags, url }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="block rounded-lg p-3 my-8 hover:bg-violet-800 hover:bg-opacity-15 transition">
            <div className={`flex justify-between items-start ${tags.length ? "mb-4" : ""}`}>
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
                        className="bg-violet-800 bg-opacity-25 text-violet-300 text-xs font-medium px-3 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </a>
    );
};
  