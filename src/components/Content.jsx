export function Content() {
    return (
        <div className="w-full lg:w-1/2 p-4 z-10">
            <section id="about" className="py-16">
                <h2 className="font-bold text-xl sm:text-2xl uppercase tracking-wider text-slate-200">About Me</h2>
                <p className="mt-4 text-sm sm:text-base text-slate-400">
                    I&apos;m a full-stack developer and third-year Computer Science student at the University of Waterloo.
                </p>
                <p className="mt-4 text-sm sm:text-base text-slate-400">
                    If you&apos;d like to connect, feel free to reach out at <a className="hover:text-violet-300 underline underline-offset-4" href="mailto:adlin@uwaterloo.ca">adlin@uwaterloo.ca</a>.
                </p>
            </section>

            <section id="experience" className="py-16">
                <h2 className="font-bold text-xl sm:text-2xl uppercase tracking-wider text-slate-200">Experience</h2>
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
                <h2 className="font-bold text-xl sm:text-2xl uppercase tracking-wider text-slate-200">Education</h2>
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
                <h2 className="font-bold text-xl sm:text-2xl uppercase tracking-wider text-slate-200">Projects</h2>
                <ProjectCard
                    projectName="Ticket Finder"
                    description="Live-updating dashboard to keep track of upcoming events and ticket price history"
                    tags={['React', 'Spring Boot', 'MySQL', 'Docker']}
                    url="https://github.com/3andrew/ticket-finder"
                />            
                <ProjectCard
                    projectName="Live Transcriptions"
                    description="Chrome extension that generates live transcripts from any web browser audio source using OpenAI's Whisper"
                    tags={['JavaScript', 'HTML/CSS']}
                    url="https://github.com/3andrew/live-transcriptions"
                />  
                <ProjectCard
                    projectName="Portfolio Website"
                    description="Personal website using Three JS and Tailwind CSS, deployed with Vercel"
                    tags={['React', 'Tailwind CSS', 'Three JS']}
                    url="https://andrewlin.ca"
                />     
                <ProjectCard
                    projectName="External Links for Spotify"
                    description="App that provides links to music database websites based on user's current Spotify listening activity"
                    tags={['JavaScript', 'HTML/CSS']}
                    url="https://github.com/3andrew/ticket-finder"
                />
                <ProjectCard
                    projectName="LockedIn (Hack the North 2024)"
                    description="3D map to help students discover and navigate to study rooms, integrated with UWaterloo's API to display availability"
                    tags={['TypeScript', 'React', 'Express', 'MappedIn API']}
                    url="https://github.com/SiddharthN16/HTN-2024"
                />
            </section>

            <p className="mt-40 text-xs sm:text-sm font-medium tracking-tight">
                © Andrew Lin 2024
            </p>
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
                        <p className="text-md text-slate-400">{position}</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-lg font-semibold text-slate-200">{location}</p>
                    <p className="text-md text-slate-400">{duration}</p>
                </div>
            </div>
            <div className="flex flex-wrap gap-2">
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

const ProjectCard = ({ projectName, description, tags, url }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="block rounded-lg p-3 my-8 hover:bg-violet-800 hover:bg-opacity-15 transition">
            <div className={`flex justify-between items-start ${tags.length ? "mb-4" : ""}`}>
                <div className="flex items-start">
                    <div>
                        <p className="text-lg font-semibold text-slate-200 mb-2">{projectName}</p>
                        <p className="text-md text-slate-400">{description}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-2">
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
