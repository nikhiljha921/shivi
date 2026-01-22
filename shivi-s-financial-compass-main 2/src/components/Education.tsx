import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
}

const education: EducationItem[] = [
  {
    degree: "MBA in Finance",
    institution: "Arihant Institute of Business Management, Pune",
    duration: "2022 – 2024",
  },
  {
    degree: "BCom (Hons)",
    institution: "Patna University",
    duration: "2015 – 2018",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">
            <span className="text-accent">Education</span> & Academic Background
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Foundation built on solid academic credentials in finance and commerce
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex gap-6"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent/10 border-4 border-background flex items-center justify-center z-10">
                      <GraduationCap size={20} className="text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 card-premium p-6">
                    <div className="flex items-start gap-4 md:hidden mb-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <GraduationCap size={18} className="text-accent" />
                      </div>
                    </div>

                    <h3 className="font-heading text-xl font-medium text-primary mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-foreground/80 mb-3">{item.institution}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
