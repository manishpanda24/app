import { 
  Cpu, 
  Leaf, 
  Cog, 
  HeartPulse, 
  CreditCard, 
  Store, 
  Truck, 
  Layers 
} from 'lucide-react';

const industries = [
  { 
    name: "Deeptech / Data Centre / Physical AI", 
    icon: Cpu,
    bg: "bg-amg-teal/5",
    border: "border-amg-teal/20",
    text: "text-amg-teal",
    hoverBg: "group-hover:bg-amg-teal",
    hoverText: "group-hover:text-white"
  },
  { 
    name: "Climate / Sustainability", 
    icon: Leaf,
    bg: "bg-amg-turquoise/10",
    border: "border-amg-turquoise/30",
    text: "text-amg-turquoise",
    hoverBg: "group-hover:bg-amg-turquoise",
    hoverText: "group-hover:text-amg-teal"
  },
  { 
    name: "Hardware / Robotics / Semiconductors", 
    icon: Cog,
    bg: "bg-amg-yellow/10",
    border: "border-amg-yellow/30",
    text: "text-amg-yellow",
    hoverBg: "group-hover:bg-amg-yellow",
    hoverText: "group-hover:text-amg-teal"
  },
  { 
    name: "Life Sciences / Medical Device / Digital Health", 
    icon: HeartPulse,
    bg: "bg-amg-turquoise/10",
    border: "border-amg-turquoise/30",
    text: "text-amg-turquoise",
    hoverBg: "group-hover:bg-amg-turquoise",
    hoverText: "group-hover:text-amg-teal"
  },
  { 
    name: "Fintech / Payments / Insurtech", 
    icon: CreditCard,
    bg: "bg-amg-yellow/10",
    border: "border-amg-yellow/30",
    text: "text-amg-yellow",
    hoverBg: "group-hover:bg-amg-yellow",
    hoverText: "group-hover:text-amg-teal"
  },
  { 
    name: "eCommerce / Marketplace", 
    icon: Store,
    bg: "bg-amg-teal/5",
    border: "border-amg-teal/20",
    text: "text-amg-teal",
    hoverBg: "group-hover:bg-amg-teal",
    hoverText: "group-hover:text-white"
  },
  { 
    name: "Supply Chain / Logistics", 
    icon: Truck,
    bg: "bg-amg-yellow/10",
    border: "border-amg-yellow/30",
    text: "text-amg-yellow",
    hoverBg: "group-hover:bg-amg-yellow",
    hoverText: "group-hover:text-amg-teal"
  },
  { 
    name: "Horizontal B2B SaaS", 
    icon: Layers,
    bg: "bg-amg-turquoise/10",
    border: "border-amg-turquoise/30",
    text: "text-amg-turquoise",
    hoverBg: "group-hover:bg-amg-turquoise",
    hoverText: "group-hover:text-amg-teal"
  }
];

export default function IndustriesGrid({ 
  title = "Industries", 
  highlight = "We Serve",
  highlightColor = "text-amg-turquoise",
  subtitle = "We work globally across industries / business models",
  className = "",
  showHeader = true 
}) {
  return (
    <div className={className}>
      {/* Header */}
      {showHeader && (
        <div className="text-center mb-14">
          <h2 className="font-serif text-[34px] font-semibold text-amg-teal">
            {title} <span className={highlightColor}>{highlight}</span>
          </h2>
          {subtitle && (
            <p className="text-amg-ink/70 mt-2 text-sm">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Grid - 4 columns on md and up */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {industries.map((item, i) => {
          const IconComponent = item.icon;
          return (
            <div
              key={i}
              className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 ${item.bg} ${item.border}`}
            >
              {/* Icon */}
              <div className={`mb-3 transition-all duration-300 group-hover:scale-110 ${item.text} ${item.hoverText}`}>
                <IconComponent className="w-8 h-8" />
              </div>
              
              {/* Name */}
              <p className={`text-xs font-semibold text-center leading-tight transition-colors duration-300 ${item.text} ${item.hoverText}`}>
                {item.name}
              </p>

              {/* Hover overlay */}
              <div className={`absolute inset-0 rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 ${item.hoverBg}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}