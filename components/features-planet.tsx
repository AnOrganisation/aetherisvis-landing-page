import Image from "next/image";
interface FeaturesPlanetProps {
  id: string;
}

export default function FeaturesPlanet({ id }: FeaturesPlanetProps) {
  return (
    <section id={id} className="relative before:absolute before:inset-0 before:-z-20 before:bg-orange-300">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-16 mx-auto text-center md:pb-20">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Unmatched Quality Meets Seamless Interactivity
            </h2>
          </div>
          {/* Project Showcase */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex px-5 py-3 bg-white shadow-xl rounded-xl">
                <div className="flex justify-center py-5">
                  <img
                    className="h-auto max-w-full rounded-xl"
                    src="/images/Shot 8.jpeg"
                    alt="Project 1"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-white [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-white [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
            {/* Quality */}
            <article>
              <h3 className="flex items-center mb-2 space-x-2 font-medium text-white">
              <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 448 512" 
                  width="24" 
                  fill="#F97316"
                  >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg>
                <span>Quality</span>
              </h3>
              <p className="text-[15px] text-white">
                Best-in-class 3D assets with impeccable performance and aesthetics.
              </p>
            </article>
            {/* Interactive */}
            <article>
              <h3 className="flex items-center mb-2 space-x-2 font-medium text-white">
              <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 448 512" 
                  width="24" 
                  fill="#F97316"
                  >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg>
                <span>Interactive</span>
              </h3>
              <p className="text-[15px] text-white">
                Bring products to life with real-time 3D visualizations that
                immerse customers in a dynamic, interactive environment,
                perfect for showcasing custom gym equipment and home designs.
              </p>
            </article>
            <article>
              <h3 className="flex items-center mb-2 space-x-2 font-medium text-white">
              <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 448 512" 
                  width="24" 
                  fill="#F97316"
                  >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg>
                <span>Seamless Integrations</span>
              </h3>
              <p className="text-[15px] text-white">
                Easily integrates with your website and web applications.
              </p>
            </article>
            {/* Performance */}
            <article>
              <h3 className="flex items-center mb-2 space-x-2 font-medium text-white">
              <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 448 512" 
                  width="24" 
                  fill="#F97316"
                  >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg>
                <span>Performance</span>
              </h3>
              <p className="text-[15px] text-white">
                Experience zero loading times with optimal 8k textures and lightweight assets.
              </p>
            </article>
            {/* Tailored Solutions */}
            <article>
              <h3 className="flex items-center mb-2 space-x-2 font-medium text-white">
              <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 448 512" 
                  width="24" 
                  fill="#F97316"
                  >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg>
                <span>Tailored Solutions</span>
              </h3>
              <p className="text-[15px] text-white">
                Collect essential insights about how visitors are using your
                site with in-depth page view metrics like pages, referring
                sites, and more.
              </p>
            </article>
            {/* Future Ready Tech */}
            <article>
              <h3 className="flex items-center mb-2 space-x-2 font-medium text-white">
              <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 448 512" 
                  width="24" 
                  fill="#F97316"
                  >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg>
                <span>Future-Ready Technology</span>
              </h3>
              <p className="text-[15px] text-white">
                Leveraging cutting-edge 3D rendering tools, AetherisVis ensures seamless
                integration with modern web platforms, providing a scalable
                solution that adapts to evolving business needs.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
