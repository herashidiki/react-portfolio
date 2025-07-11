import { ArrowBigDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <div>
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
      >
        <div className="container max-w-4xl mx-auto text-center z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight capitalize">
              <span className="opacity-0 animate-fade-in"> hi i m </span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                nilofar{" "}
              </span>
              <span className="text-gradient ml-2 opacity-2 animate-fade-in-delay-2">
                (Developer)
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              Bridging design with functionality, I am a Full Stack Developer
              who transforms ideas into robust digital experiences. With
              expertise across the full development spectrum, I deliver clean,
              scalable solutions that are both user-focused and
              performance-driven. ---
            </p>
            <div className="  pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">view my work</a>

            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">scroll</span>
        <ArrowBigDown className="h-4 w-5 text-primary"/>

        </div>
      </section>
    </div>
  );
};
