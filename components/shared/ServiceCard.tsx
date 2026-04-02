import { type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export function ServiceCard({ title, subtitle, description, icon: Icon, features }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border">
      <div className="w-12 h-12 bg-cream rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
        <Icon className="h-6 w-6 text-brand" />
      </div>
      <h3 className="font-serif text-xl font-bold text-brand mb-1">{title}</h3>
      <p className="text-gold text-sm font-medium mb-3 italic">{subtitle}</p>
      <p className="text-text-muted text-sm leading-relaxed mb-4">{description}</p>
      <ul className="space-y-1.5">
        {features.map((feature) => (
          <li key={feature} className="text-text-muted text-sm flex items-start gap-2">
            <span className="text-gold mt-0.5">-</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
