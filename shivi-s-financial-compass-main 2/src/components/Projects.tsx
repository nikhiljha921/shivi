import { motion } from "framer-motion";
import { BarChart2, ExternalLink, Layers } from "lucide-react";

interface Project {
  title: string;
  description: string;
  highlights: string[];
  tools: string[];
}

const projects: Project[] = [
  {
    title: "Power BI Dashboard – Credit Card Usage in India",
    description:
      "An interactive analytics dashboard leveraging RBI & NPCI data to provide actionable insights on credit card trends across India.",
    highlights: [
      "Interactive dashboard with dynamic slicers and filters",
      "KPIs: spend patterns, utilization rates, repayment behavior",
      "Advanced DAX calculations for trend analysis",
      "Business storytelling through data visualization",
    ],
    tools: ["Power BI", "DAX", "Data Analytics", "RBI Data", "NPCI Data"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Data-driven solutions demonstrating analytical expertise
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-premium overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-navy to-navy-light p-6 text-primary-foreground">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <BarChart2 size={28} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-medium mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Layers size={18} className="text-accent" />
                    <span className="font-medium text-sm text-muted-foreground uppercase tracking-wider">
                      Key Highlights
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 bg-accent/10 text-accent text-xs font-medium rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
