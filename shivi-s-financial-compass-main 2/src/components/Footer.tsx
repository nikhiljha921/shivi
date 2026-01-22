import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import shiviImage from "@/assets/shivi-profile.jpg";
import Logo from "./Logo";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <footer id="contact" className="bg-gradient-navy text-primary-foreground">
      {/* Contact CTA Section */}
      <div className="container-narrow py-16 border-b border-primary-foreground/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Open to discussing financial analysis opportunities, collaborations, or
            just a conversation about finance and data
          </p>
          <a
            href="mailto:shivipathak@email.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold text-sm uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-gold-light hover:shadow-gold"
          >
            <Mail size={18} />
            Get in Touch
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>

      {/* Footer Content */}
      <div className="container-narrow py-12">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Profile */}
          <div className="flex items-center gap-4">
            <img
              src={shiviImage}
              alt="Shivi Pathak"
              className="w-14 h-14 rounded-full object-cover object-top border-2 border-accent/30"
            />
            <div>
              <p className="font-heading font-medium text-lg">Shivi Pathak</p>
              <p className="text-primary-foreground/60 text-sm">
                Financial Analyst
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-medium text-sm uppercase tracking-wider text-primary-foreground/50 mb-4">
              Quick Links
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="md:text-right">
            <p className="font-medium text-sm uppercase tracking-wider text-primary-foreground/50 mb-4">
              Connect
            </p>
            <div className="flex gap-4 md:justify-end">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:shivipathak@email.com"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© 2026 Shivi Pathak. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Logo />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
