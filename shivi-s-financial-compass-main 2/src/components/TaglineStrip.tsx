import { motion } from "framer-motion";

const TaglineStrip = () => {
  return (
    <section id="tagline" className="py-16 bg-secondary/50 border-y border-border/50">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg md:text-xl font-heading font-medium text-primary mb-2">
            <span className="text-accent">FP&A Analyst</span> | MBA Finance |{" "}
            <span className="text-accent">Financial Modeling & Valuation Analyst (FMVA®)</span>
          </p>
          <p className="text-muted-foreground text-base md:text-lg">
            Skilled in Financial Planning, Reporting & Analysis
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TaglineStrip;
