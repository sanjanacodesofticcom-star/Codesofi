import Image from "next/image";
import { siteConfig } from "../data/siteData";

export default function TrustPartners() {
  return (
    <section
      id="trust-partners"
      className="py-12 border-y border-slate-100 bg-slate-50/50"
      aria-label="Accredited Partner Ecosystem"
    >
      <div className="site-container">
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
            Accredited Global Partner Ecosystem
          </p>
        </div>

        {/* Partners Grid / Marquee */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center max-w-4xl mx-auto">
          {siteConfig.partners.map((partner) => (
            <div
              key={partner.name}
              className="w-full flex items-center justify-center p-4 rounded-xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
              title={partner.name}
            >
              <div className="relative h-9 w-full max-w-[150px] grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
