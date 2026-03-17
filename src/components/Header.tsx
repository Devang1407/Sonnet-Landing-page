import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full relative z-50 flex flex-col items-center">
      {/* Announcement Bar */}
      <div className="w-full bg-sonnet-navy text-sonnet-cream py-2 px-4 text-center text-xs md:text-sm font-medium tracking-wide">
        Free Shipping on orders $30+
      </div>
      
      {/* Main Navigation */}
      <div className="w-full max-w-7xl px-6 md:px-12 py-5 flex items-center justify-between border-b border-sonnet-navy/10 relative">
        {/* Mobile menu button */}
        <button className="md:hidden text-sonnet-navy">
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo / Brand Name */}
        <Link 
          href="/" 
          className="text-2xl md:text-3xl font-semibold tracking-tight text-sonnet-navy absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
        >
          Sonnet
        </Link>
        
        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-sonnet-navy/80 tracking-wide">
          <Link href="#core-sleep" className="hover:text-sonnet-navy transition-colors">Core Sleep</Link>
          <Link href="#sleep-calm" className="text-sonnet-navy font-semibold relative after:absolute after:bottom-[-20px] after:left-0 after:w-full after:h-0.5 after:bg-sonnet-navy">Sleep + Calm</Link>
          <Link href="#sleep-restore" className="hover:text-sonnet-navy transition-colors">Sleep + Restore</Link>
          <Link href="#research" className="hover:text-sonnet-navy transition-colors">Research</Link>
          <Link href="#faqs" className="hover:text-sonnet-navy transition-colors">FAQs</Link>
        </nav>

        {/* Empty div for flex balance on mobile */}
        <div className="md:hidden w-6 object-cover" />
      </div>
    </header>
  );
}
