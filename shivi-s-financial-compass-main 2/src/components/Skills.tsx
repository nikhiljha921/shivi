import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Database } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Financial & Analytical",
    icon: TrendingUp,
    skills: [
      "Budgeting & Forecasting",
      "Financial Modeling",
      "Cash Flow Analysis",
      "Variance Analysis",
      "Financial Reporting",
      "Cost Center Analysis",
    ],
  },
  {
    title: "Analytics & Reporting",
    icon: BarChart3,
    skills: [
      "Excel (Pivot Tables, VLOOKUP, Macros)",
      "Google Sheets",
      "Power BI",
      "Data Visualization",
      "Business Intelligence",
    ],
  },
  {
    title: "ERP Systems",
    icon: Database,
    skills: ["SAP", "Oracle", "MS Dynamics", "Tally"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for financial analysis and business insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="card-premium p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <category.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-heading font-medium text-lg text-primary">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
