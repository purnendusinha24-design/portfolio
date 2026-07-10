import FadeIn from "../components/FadeIn";

const SERVICES = [
  {
    number: "01",
    name: "UI/UX Design",
    description:
      "Designing intuitive and visually engaging user interfaces with a strong focus on usability, accessibility, and seamless user experiences.",
  },
  {
    number: "02",
    name: "Frontend Development",
    description:
      "Building fast, responsive, and modern websites using React, TypeScript, Tailwind CSS, HTML, CSS, and JavaScript.",
  },
  {
    number: "03",
    name: "Landing Page Design",
    description:
      "Creating high-converting landing pages optimized for product launches, startups, marketing campaigns, and lead generation.",
  },
  {
    number: "04",
    name: "Responsive Web Design",
    description:
      "Developing websites that deliver a seamless experience across desktop, tablet, and mobile devices with pixel-perfect layouts.",
  },
  {
    number: "05",
    name: "Website Optimization",
    description:
      "Improving website performance, SEO, accessibility, loading speed, and overall user experience for better business results.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: "#FFFFFF" }}
    >
      <h2
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1}>
            <div
              className="grid grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 items-start transition-all duration-300 hover:pl-6 hover:bg-black/5 rounded-3xl cursor-pointer"
              style={{
                borderBottom:
                  i === SERVICES.length - 1
                    ? "none"
                    : "1px solid rgba(12, 12, 12, 0.15)",
                borderTop:
                  i === 0 ? "1px solid rgba(12, 12, 12, 0.15)" : "none",
              }}
            >
              <span
                className="col-span-2 font-black"
                style={{
                  color: "#0C0C0C",
                  fontSize: "clamp(3rem,10vw,140px)",
                }}
              >
                {service.number}
              </span>
              <div className="col-span-10 md:col-span-4">
                <h3
                  className="uppercase font-semibold tracking-wide"
                  style={{
                    color: "#0C0C0C",
                    fontSize: "clamp(1.3rem,2vw,2.2rem)",
                  }}
                >
                  {service.name}
                </h3>
              </div>

              <div className="col-span-12 md:col-span-6">
                <p
                  className="leading-relaxed"
                  style={{
                    color: "#666",
                    fontSize: "clamp(1rem,1.2vw,1.2rem)",
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
