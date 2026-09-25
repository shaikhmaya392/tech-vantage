import {
  PenTool,
  LayoutTemplate,
  Smartphone,
  Clapperboard,
  TrendingUp,
  Megaphone,
  Target,
  Users,
  BadgeDollarSign,
  Facebook,
  Instagram,
  Linkedin,
  HelpCircle,
} from "lucide-react";

const map = {
  "pen-tool": PenTool,
  "layout-template": LayoutTemplate,
  smartphone: Smartphone,
  clapperboard: Clapperboard,
  "trending-up": TrendingUp,
  megaphone: Megaphone,
  target: Target,
  users: Users,
  "badge-dollar-sign": BadgeDollarSign,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
};

export default function Icon({ name, className }) {
  const Cmp = map[name] || HelpCircle;
  return <Cmp className={className} />;
}
