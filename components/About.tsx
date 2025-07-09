"use client";

export default function About() {
  return (
    <section id="about" className="min-h-screen scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
        I began my journey in web development by creating websites for           {" "}
          <a
            className="no-wrap text-primary dark:text-white"
            href="https://uncommon.org"
            target="blank"
            rel="noopener noreferrer"
          >
            Uncommon.org
          </a>.{" "} 
        This experience significantly boosted my confidence and technical skills, 
        eventually leading me to explore mobile app development using Flutter. My first 
        mobile app was developed for           {" "}
          <a
            className="no-wrap text-primary dark:text-white"
            href="https://laintelligence.netlify.app/"
            target="blank"
            rel="noopener noreferrer"
          >
            La Intelligence Pvt Ltd
          </a>,{" "} marking a pivotal moment in my career.   
        Since then, I have completed various projects on Upwork, building a total of 6 mobile 
        apps and           <a
            className="no-wrap text-primary dark:text-white"
            href="https://github.com/siemba-blessed"
            target="blank"
            rel="noopener noreferrer"
          >
            11 Websites and 5 Webapps
          </a>.{" "}
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
          Currently, I am delving deep into the realms of Artificial Intelligence 
          (AI) and Machine Learning (ML) to integrate these advanced technologies into 
          my applications. This ongoing education will allow me to enhance the functionality
           and user experience of my future projects.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
        When I&#39;m not working on development projects, I enjoy gaming, engaging in 
        adrenaline-pumping activities, or working on various topics which I share on my <a
            className="no-wrap text-primary dark:text-white"
            href="https://siemba.hashnode.dev/"
            target="blank"
            rel="noopener noreferrer"
          >
            blog page
          </a>.{" "}
        </p>
      </div>
    </section>
  );
}

