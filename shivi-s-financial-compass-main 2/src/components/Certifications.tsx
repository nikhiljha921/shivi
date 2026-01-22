import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  year?: string;
}

const certifications: Certification[] = [
  {
    name: "Global Finance & Business Management",
    issuer: "Forage",
    year: "2024",
  },
  {
    name: "NISM Series V-A",
    issuer: "SEBI",
    year: "2023",
  },
  {
    name: "Financial Modeling & Valuation",
    issuer: "Udemy",
    year: "2023",
  },
  {
    name: "Financial Analyst Training",
    issuer: "Udemy",
    year: "2023",
  },
  {
    name: "CA Foundation",
    issuer: "ICAI",
    year: "2019",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">
            <span className="text-accent">Certifications</span> & Credentials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional qualifications that validate expertise in finance and analysis
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-card rounded-xl border border-border/60 p-5 flex items-center gap-4 hover:border-accent/40 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Award size={22} className="text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-medium text-primary group-hover:text-accent transition-colors truncate">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} {cert.year && `• ${cert.year}`}
                  </p>
                </div>
                <ExternalLink
                  size={18}
                  className="text-muted-foreground/50 group-hover:text-accent transition-colors shrink-0"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
