import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div 
      className="flex items-center gap-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <span className="font-heading text-2xl font-semibold text-primary tracking-tight">
          S
        </span>
        <span className="font-heading text-2xl font-semibold text-primary tracking-tight">
          P
        </span>
        <span className="absolute -bottom-0.5 right-0 w-1.5 h-1.5 bg-accent rounded-full" />
      </div>
    </motion.div>
  );
};

export default Logo;
