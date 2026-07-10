import FadeIn from "../components/FadeIn";
import ContactButton from "../components/ContactButton";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0C0C0C] px-6 md:px-10 py-28">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{
              fontSize: "clamp(3rem,12vw,10rem)",
            }}
          >
            Let's Work
            <br />
            Together
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            className="text-center text-[#D7E2EA]/70 mt-8 max-w-2xl mx-auto leading-relaxed"
            style={{
              fontSize: "clamp(1rem,1.5vw,1.25rem)",
            }}
          >
            Have a project in mind or looking for a frontend developer? I'd love
            to hear about your ideas and help bring them to life.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="grid md:grid-cols-3 gap-10 mt-20 border-y border-white/10 py-12">
            <div>
              <p className="text-white/40 uppercase text-sm mb-2">Email</p>

              <a
                href="mailto:purnendusinha24@gmail.com"
                className="text-[#D7E2EA] hover:text-[#3B82F6]"
              >
                purnendusinha24@gmail.com
              </a>
            </div>

            <div>
              <p className="text-white/40 uppercase text-sm mb-2">Phone</p>

              <a
                href="https://wa.me/917992326834"
                target="_blank"
                rel="noreferrer"
                className="text-[#D7E2EA] hover:text-[#3B82F6]"
              >
                +91 91799 232634
              </a>
            </div>

            <div>
              <p className="text-white/40 uppercase text-sm mb-2">Location</p>

              <p className="text-[#D7E2EA]">India</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex justify-center gap-8 mt-12 text-[#D7E2EA]">
            <a
              href="https://github.com/purnendusinha24-design"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#3B82F6]"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/purnendu-kumar-sinha-09903b165"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#3B82F6]"
            >
              LinkedIn
            </a>

            <a
              href="https://instagram.com/purnendudesigns"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#3B82F6]"
            >
              Instagram
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex justify-center mt-16">
            <ContactButton />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
