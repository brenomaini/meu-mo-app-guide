import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
}

const FeatureCard = ({ title, description, icon: Icon, to }: FeatureCardProps) => {
  return (
    <Link to={to}>
      <div className="bg-card rounded-lg shadow-card p-6 hover:bg-card-hover transition-colors cursor-pointer group">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;