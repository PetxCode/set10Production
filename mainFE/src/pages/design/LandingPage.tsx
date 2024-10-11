import HeroScreen from "@/components/HeroScreen";
import SchoolLogos from "@/components/SchoolLogos";
import StudentProfileSlider from "@/components/StudentProfileSlider";

const LandingPage = () => {
  const arr = [
    {
      id: 1,
      title: "Cognitive Development",
      description:
        "STEM education helps students develop problem-solving skills by encouraging them to think critically, analyze data, and devise innovative solutions to complex problems. ",
      description2:
        "By fostering creativity and critical thinking, STEM education equips students with the cognitive tools necessary to tackle challenges in their personal lives, careers, and society as a whole.",
    },
    {
      id: 2,
      title: "Career Opportunities",
      description:
        "As the global demand for STEM professionals continues to grow, there is an increasing need for skilled workers in various industries, such as healthcare, information technology, and renewable energy. ",
      description2:
        "STEM education prepares students for high-paying jobs by providing them with the knowledge and skills required to excel in these competitive fields.",
    },
    {
      di: 3,
      title: "Economic Impact",
      description:
        "STEM is a driving force for innovation, fueling advancements in technology and scientific discoveries that improve our quality of life and economic prosperity. ",
      description2:
        "By investing in STEM education, countries can boost their national competitiveness and ensure a sustainable future.",
    },
  ];

  //   const stemData = [
  //     {
  //       id: 1,
  //       title: "Science",
  //       description:
  //         "Scientific literacy is essential for understanding and making informed decisions about the world around us. It enables individuals to engage with scientific concepts, methods, and findings, fostering curiosity and critical thinking.",
  //       description2:
  //         "Encouraging curiosity and critical thinking in students allows them to explore and understand the natural world, ask questions, and develop a sense of wonder about the universe.",
  //     },
  //     {
  //       id: 2,
  //       title: "Technology",
  //       description:
  //         "Technology has permeated every aspect of our lives, from communication to transportation, and continues to transform the way we live, work, and learn.",
  //       description2:
  //         "Preparing students for a tech-driven future involves teaching them how to adapt to new technologies and become proficient in using digital tools to solve problems, communicate, and create.",
  //     },
  //     {
  //       di: 3,
  //       title: "Engineering",
  //       description:
  //         "Engineering, as a discipline, emphasizes the importance of problem-solving skills. It involves designing, creating, and improving structures, systems, and products to address societal needs and challenges.",
  //       description2:
  //         "Fostering creativity and innovation in students through engineering projects enables them to think outside the box, collaborate, and develop solutions to real-world problems",
  //     },
  //     {
  //       di: 4,
  //       title: "Mathematics",
  //       description:
  //         "Developing analytical skills and logical thinking is vital for success in STEM fields. Mathematics provides the foundation for understanding patterns, relationships, and abstract concepts.",
  //       description2:
  //         "Proficiency in mathematics is essential for grasping other STEM disciplines, as it is the language through which scientific and technical concepts are communicated.",
  //     },
  //   ];

  return (
    <div>
      <HeroScreen />

      <div>klkl</div>
      <div>
        <p className=" font-semibold text-[30px] text-center my-10 uppercase">
          Participating Schools/Students
        </p>
      </div>
      <SchoolLogos />

      <StudentProfileSlider />

      <div className="flex flex-col items-center ">
        <div className="w-[80%] my-20">
          <hr />
        </div>

        <div className="flex w-[80%] flex-col">
          <p className="text-[70px] leading-tight">
            Benefits of STEM <br />
            Education
          </p>

          <div className=" md:flex gap-12 my-10 justify-between">
            {arr.map((el: any) => (
              <div
                key={el.id}
                className=" my-10 md:my-0 border-t-[3px] border-black flex-1 "
              >
                <p className="mt-5 font-semibold text-[28px] ">{el.title}</p>
                <p className="text-[16px] mt-3">{el.description}</p>
                <p className="text-[16px] mt-5">{el.description2}</p>
              </div>
            ))}
          </div>

          <div className="mb-5">
            <button className="bg-black hover:bg-neutral-800 text-white rounded-md px-10 py-2 text-[25px] font-semibold">
              Donate
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20 bg-black h-[500px] text-white flex flex-col items-center">
        <div className="w-[80%]">
          <p className="mt-20 text-[70px] leading-tight text-center">
            Importance for STEM <br />
            Education
          </p>

          <p className="mt-10 text-[20px] text-center leading-tight">
            STEM Education stimulates critical thinking by engaging students in
            actively analyzing, evaluating, and applying knowledge to solve
            problems, This approach prepares students for future challenges
            where logical reasoning and problem-solving skills are Paramount.
          </p>
        </div>
      </div>

      <div className="my-20  h-[500px]  flex flex-col items-center">
        <div className="w-[80%]">Place</div>
      </div>
    </div>
  );
};

export default LandingPage;
