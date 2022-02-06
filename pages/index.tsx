import Card from "../components/card/card";
import Timeline from "../components/timeline/timeline";
import Image from "next/image";
import avatar from "../assets/avatar.png";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    // Get all the elements you want to show on scroll
    const targets = document.querySelectorAll(".scroll-animation");

    // Callback for IntersectionObserver
    const callback = function (entries) {
        entries.forEach((entry) => {
          // Is the element in the viewport?
          if (entry.isIntersecting) {
            // Add the fadeIn class:
            entry.target.classList.add("motion-safe:animate-fadeIn");
          } else {
            // Otherwise remove the fadein class
            entry.target.classList.remove("motion-safe:animate-fadeIn");
          }
        });
      };

    // Set up a new observer
    const observer = new IntersectionObserver(callback);

    // Loop through each of the target
    targets.forEach(function (target) {
      // Hide the element
      target.classList.add("opacity-0");

      // Add the element to the watcher
      observer.observe(target);
    });

    
  }, []);

  return (
    <div className="flex flex-col content-center h-full w-4/6">
      <div className="flex flex-row flex-wrap h-4/5 justify-between">
        <div className="text-4xl pt-8 w-2/5">
          <Image
            src={avatar}
            width={250}
            height={250}
            className="rounded-full"
          />
        </div>

        <div className="my-12 text-left text-lg w-3/5">
          <div className="text-4xl font-bold uppercase">Hi, I am</div>
          <div className="text-5xl font-bold uppercase pt-4">
            {" "}
            Jithendra Thenuwara
          </div>

          <div className="text-lg pt-4">
            {" "}
            A Fullstack Software engineer with 6+ years of Industry experience.
          </div>

          {/* I am an experienced software engineer with a proven track record as a full stack engineer. I have worked with a wide range of 
                    programming languages and technologies while being involved in all stages of software development. 
                    I possess strong technical skills as well as excellent communication skills which helps me work well within a team and with a wide range of clients. 
                    I am eager to challenge myself to grow and broaden my technical
                    skills for the benefit of other people and the organization I work for. */}
        </div>
      </div>

      <div
        className="text-4xl w-full  pt-15 text-center scroll-animation"
        id="skills"
      >
        Technical Skills
      </div>

      <div className="text-lg w-full text-gray-400 italic pt-4 text-center scroll-animation">
        "Click skills to see more"
      </div>

      <div className="flex flex-row flex-wrap w-full my-20 text-black justify-center scroll-animation">
        <Card
          className={"m-3 w-72"}
          items={["Angular", "React", "Ionic", "Flask", "Next JS", "Tailwind"]}
          title={"Frameworks"}
          key="1"
        />

        <Card
          className={"m-3 w-72"}
          items={["Java", "Typescript", "C++", "Python", "C#", "PL/SQL"]}
          title={"Programming Languages"}
          key="2"
        />

        <Card
          className={"m-3 w-72"}
          items={["Oracle", "MySQL", "Firebase", "Firestore", "Mongo DB"]}
          title={"Databases"}
          key="3"
        />

        <Card
          className={"m-3 w-72"}
          items={["Docker", "Kubernetes", "GIT", "Agile", "Scrum", "TDD"]}
          title={"Other"}
          key="4"
        />
      </div>

      <div className="text-4xl w-full text-center pt-4" id="experience">
        Experience
      </div>

      <Timeline />
    </div>
  );
}

export default HomePage;
