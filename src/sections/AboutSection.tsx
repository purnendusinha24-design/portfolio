import FadeIn from "../components/FadeIn";
import AnimatedText from "../components/AnimatedText";
import ContactButton from "../components/ContactButton";

const BASE =
  "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
    >
      {/* Decorative corner images */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <img
          src={`${BASE}/moon_icon.11395d36.png`}
          alt=""
          className="w-full h-auto"
        />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]"
      >
        <img
          src={`${BASE}/p59_1.4659672e.png`}
          alt=""
          className="w-full h-auto"
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <img
          src={`${BASE}/lego_icon-1.703bb594.png`}
          alt=""
          className="w-full h-auto"
        />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]"
      >
        <img
          src={`${BASE}/Group_134-1.2e04f3ce.png`}
          alt=""
          className="w-full h-auto"
        />
      </FadeIn>

      {/* Content */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About Me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text="I'm Purnendu Kumar Sinha, a Frontend Developer and UI/UX Designer passionate about building modern, responsive, and user-focused digital experiences. I transform ideas into clean, high-performance websites using React, TypeScript, Tailwind CSS, HTML, CSS, and JavaScript. Every project I create combines thoughtful design with scalable development to deliver products that look great and perform even better."
            className="text-[#D7E2EA] font-medium text-center leading-[1.8] max-w-5xl mx-auto px-4"
            style={{ fontSize: "clamp(1.15rem,1.6vw,1.45rem)" }}
          />

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React",
              "TypeScript",
              "Tailwind CSS",
              "JavaScript",
              "HTML5",
              "CSS3",
              "Firebase",
              "Figma",
            ].map((skill) => (
              <span
                key={skill}
                className=" px-5 py-2.5 rounded-full border border-[#3B82F6]/40 bg-[#111827] text-[#D7E2EA] text-sm font-medium transition-all duration-300 hover:bg-[#3B82F6] hover:border-[#3B82F6] hover:text-white hover:-translate-y-1"
              >
                {skill}
              </span>
            ))}
          </div>

          <ContactButton />
        </div>
      </div>
    </section>
  );
}
