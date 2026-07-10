import { useEffect, useRef, useState } from "react";

const ALL_IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const ROW1 = ALL_IMAGES.slice(0, 11);
const ROW2 = ALL_IMAGES.slice(11);

function MarqueeRow({
  images,
  direction,
  offset,
}: {
  images: string[];
  direction: 1 | -1;
  offset: number;
}) {
  const duplicated = [...images, ...images];

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-4"
        style={{
          transform: `translate3d(${direction * offset}px,0,0)`,
          willChange: "transform",
        }}
      >
        {duplicated.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            draggable={false}
            className="rounded-3xl flex-shrink-0 object-cover"
            style={{
              width: "min(28vw,420px)",
              aspectRatio: "16 / 10",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();

      const progress =
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height);

      const value = progress * 700;

      setOffset(value % 2200);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 space-y-4 overflow-hidden"
      style={{ background: "#0C0C0C" }}
    >
      <MarqueeRow images={ROW1} direction={1} offset={offset} />

      <MarqueeRow images={ROW2} direction={-1} offset={offset} />
    </section>
  );
}
