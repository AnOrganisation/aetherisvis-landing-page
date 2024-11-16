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
        className="fixed w-full z-50"
        animate={{
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.9)"
            : "rgba(255, 255, 255, 0)",
          backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-accent"
            >
              AetherisVis
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              <a
                href="#portfolio"
                className="text-gray-600 hover:text-accent transition"
              >
                Portfolio
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-accent transition"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-accent transition"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-accent transition"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      <main>
        <section className="relative h-screen flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl"
            >
              <h2 className="text-7xl font-bold mb-6 leading-tight">
                <span className="block">Reimagined</span>
                <span className="block">Home</span>
                <span className="block">Buying & Design</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Welcome to our extensive studio of visualization and data
                analytics. We turn your data and insights into compelling visual
                narratives.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent hover:bg-opacity-90 text-white px-8 py-3 rounded-none font-medium"
              >
                Show Portfolio
              </motion.button>
            </motion.div>
          </div>
        </section>

        <section id="portfolio" className="py-24 bg-gray-50">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="container mx-auto px-6"
          >
            <h2 className="text-4xl font-bold mb-8">Portfolio</h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              Our work tells our clients' stories. See a selection of our
              projects below that showcase data visualization, interactive
              dashboards, and analytical tools.
            </p>
          </motion.div>
        </section>

        <section id="services" className="py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="container mx-auto px-6"
          >
            <h2 className="text-4xl font-bold mb-8">Services</h2>
            <p className="text-gray-600 mb-12">
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
            className="container mx-auto px-6"
          >
            <h2 className="text-4xl font-bold mb-8">About Us</h2>
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
            className="container mx-auto px-6"
          >
            <h2 className="text-4xl font-bold mb-8">Contact</h2>
            <p className="text-gray-600">Get in touch with our team</p>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;
