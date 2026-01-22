import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Calendar, Briefcase } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Johnson Controls",
    role: "Financial Analyst",
    location: "Gurgaon",
    duration: "Jun 2025 – Present",
    responsibilities: [
      "Contract validation & compliance monitoring for financial agreements",
      "ERP order booking and processing using SAP & Oracle systems",
      "KPI tracking & management reporting for executive decision-making",
      "Financial data analysis and variance reporting",
    ],
  },
  {
    company: "Sunstone Edtech Pvt Ltd",
    role: "Accounts Payable Analyst",
    location: "Gurgaon",
    duration: "Apr 2024 – May 2025",
    responsibilities: [
      "Managed vendor payments & employee reimbursements processing",
      "Open PO & advance tracking with comprehensive documentation",
      "Reduced ageing by 30% through process optimization",
      "Improved reporting accuracy by 25% with enhanced data validation",
    ],
  },
  {
    company: "PredictRam",
    role: "Financial Research Analyst (Intern)",
    location: "Delhi",
    duration: "Apr 2023 – Jun 2023",
    responsibilities: [
      "Conducted financial analysis to support investment decisions",
      "Prepared comprehensive reports & executive presentations",
      "Analyzed market trends and company financials",
      "Supported senior analysts with research and data compilation",
    ],
  },
];

const ExperienceCard = ({ item, index }: { item: ExperienceItem; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="card-experience group"
      >
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Briefcase size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="heading-sm group-hover:text-accent transition-colors">
                    {item.company}
                  </h3>
                  <p className="text-accent font-medium text-sm">{item.role}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  {item.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {item.duration}
                </span>
              </div>
            </div>

            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2"
            >
              <ChevronDown
                size={24}
                className="text-muted-foreground group-hover:text-accent transition-colors"
              />
            </motion.div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-6 mt-4 border-t border-border/50">
                  <ul className="space-y-3">
                    {item.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3 text-foreground/80"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">
            Work <span className="text-accent">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building expertise through diverse roles in financial analysis and reporting
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.company} item={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
