import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import shiviImage from "@/assets/shivi-profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider"
            >
              Financial Analyst
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="heading-xl mb-6"
            >
              Hi, I'm{" "}
              <span className="text-gradient-gold">Shivi Pathak</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl font-body text-foreground/80 mb-4 leading-relaxed"
            >
              Financial Analyst specializing in{" "}
              <span className="text-accent font-medium">FP&A</span>,{" "}
              <span className="text-accent font-medium">Financial Reporting</span> &{" "}
              <span className="text-accent font-medium">Business Insights</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-muted-foreground text-lg mb-8"
            >
              MBA Finance | FMVA® | Financial Modeling & Valuation
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/Shivi_Pathak_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FileText size={18} />
                View Resume
              </a>
              <a href="#contact" className="btn-outline">
                <Mail size={18} />
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/15 rounded-full blur-3xl"
              />

              {/* Main image */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={shiviImage}
                  alt="Shivi Pathak - Financial Analyst"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent" />
              </div>

              {/* Floating accent shape */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-1/4 w-16 h-16 border-2 border-accent/30 rounded-lg rotate-12"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="hidden lg:flex justify-center mt-16"
        >
          <motion.a
            href="#tagline"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground hover:text-accent transition-colors"
          >
            <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
