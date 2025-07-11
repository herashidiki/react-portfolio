import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About<span className="text-primary uppercase "> me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              passionate web developer & tech creator
            </h3>
            <p className="text-muted-foreground">
              💻 Driven by Curiosity, Built with Code As a fresher in the field,
              I bring not just technical knowledge but an unwavering passion for
              continuous learning. Every line of code I write is a step forward
              in mastering the art of full-stack development—clean, functional,
              and user-focused. ---
            </p>

            <p className="text-muted-foreground">
              🌱 From Fundamentals to Full-Stack With a solid foundation and a
              relentless drive to evolve, I am committed to transforming ideas
              into digital experiences. I may be new to the industry, but my
              dedication, discipline, and hunger to grow set me apart as a
              developer with purpose. ---
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                get in touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                dowload Cv
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary " />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg ">web development</h4>
                  <p className="text-muted-foreground">
                    creating responsive website and web application with modern
                    frameworks
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary " />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg uppercase "> error handling</h4>
                  <p className="text-muted-foreground">
                    debugging error with make logic simple efficent methods
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary " />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg uppercase ">project managment</h4>
                  <p className="text-muted-foreground">
                    leading projects from conception to completion with agile methodologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
