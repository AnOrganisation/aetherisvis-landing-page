import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

export default function Cta() {
  return (
    <section>
      <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-orange-300"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-orange-500 blur-3xl" />
          </div>
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-4 border-y text-3xl font-bold text-white [border-image:linear-gradient(to_right,transparent,theme(colors.slate.100/.7),transparent)1] md:mb-8 md:text-4xl">
              Transforming Ideas into Immersive Experiences
            </h2>
            <h3 className="mb-4 font-bold text-white">Let us help you bring your ideas to life with the most immersive 3D technology available.</h3>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <a
                className="btn group mb-4 w-full bg-white text-orange-400 shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                href="#0"
              >
                <span className="relative inline-flex items-center">
                  Contact Us{" "}
                  <span className="ml-1 tracking-normal text-orange-400 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
