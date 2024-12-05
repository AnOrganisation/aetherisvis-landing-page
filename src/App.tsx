import { motion, useScroll } from "framer-motion";
import { Slideshow } from "./components/Slideshow.tsx";
import { useEffect, useState } from "react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <div className="min-h-screen bg-white">
      <motion.nav
        className="fixed z-50 w-full"
        animate={{
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.9)"
            : "rgba(255, 255, 255, 0)",
          backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
        }}
      >
        <div className="container px-6 py-4 mx-auto">
          <div className="flex items-center justify-between">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-accent"
            >
              AetherisVis
            </motion.h1>
            <div className="hidden space-x-8 md:flex">
              <a
                href="#portfolio"
                className="text-gray-600 transition hover:text-accent"
              >
                Portfolio
              </a>
              <a
                href="#services"
                className="text-gray-600 transition hover:text-accent"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-600 transition hover:text-accent"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-600 transition hover:text-accent"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      <main>
        <section className="relative flex items-center h-screen">
          <div className="container px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl"
            >
              <h2 className="mb-6 font-bold leading-tight text-7xl">
                <span className="block">Reimagined</span>
                <span className="block">Home</span>
                <span className="block">Buying & Design</span>
              </h2>
              <p className="max-w-2xl mb-8 text-xl text-gray-600">
                Welcome to our extensive studio of visualization and data
                analytics. We turn your data and insights into compelling visual
                narratives.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 font-medium text-white rounded-none bg-accent hover:bg-opacity-90"
              >
                Show Portfolio
              </motion.button>
            </motion.div>
          </div>
        </section>

        <section id="portfolio" className="py-24 bg-gray-50 h-[1200px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="container px-6 mx-auto"
          >
            <h2 className="mb-8 text-4xl font-bold">Portfolio</h2>
            <p className="max-w-2xl mb-12 text-gray-600">
              Our work tells our clients' stories. See a selection of our
              projects below that showcase data visualization, interactive
              dashboards, and analytical tools.
            </p>
          </motion.div>
          <iframe
            className="w-full h-full"
            src="https://spxfit-equipment-configurator.vercel.app"
          ></iframe>
        </section>

        <section id="services" className="py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="container px-6 mx-auto"
          >
            <h2 className="mb-8 text-4xl font-bold">Services</h2>
            <p className="mb-12 text-gray-600">
              Discover our powerful visualization tools
            </p>
            <Slideshow />
          </motion.div>
        </section>

        <section id="about" className="py-24 bg-gray-50">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="container px-6 mx-auto"
          >
            <h2 className="mb-8 text-4xl font-bold">About Us</h2>
            <p className="text-gray-600">
              Leading the future of data visualization
            </p>
          </motion.div>
        </section>

        <section id="contact" className="py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="container px-6 mx-auto"
          >
            <h2 className="mb-8 text-4xl font-bold">Contact</h2>
            <p className="text-gray-600">Get in touch with our team</p>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;
