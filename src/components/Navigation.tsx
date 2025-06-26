import { Stars, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="border-b border-cosmic-200 dark:border-cosmic-800 bg-white/80 dark:bg-cosmic-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Stars className="h-5 w-5 sm:h-6 sm:w-6 text-cosmic-600 dark:text-cosmic-400 group-hover:animate-stars-twinkle" />
              <Sparkles className="h-2 w-2 sm:h-3 sm:w-3 text-gold-500 absolute -top-1 -right-1 animate-stars-twinkle" />
            </div>
            <span className="font-bold text-lg sm:text-xl text-gradient">
              Cosmic Guide
            </span>
          </Link>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-2">
            <Link
              to="/"
              className={`text-xs font-medium px-2 py-1 rounded transition-colors ${
                location.pathname === "/"
                  ? "bg-cosmic-100 text-cosmic-600 dark:bg-cosmic-800 dark:text-cosmic-400"
                  : "text-muted-foreground hover:text-cosmic-600 dark:hover:text-cosmic-400"
              }`}
            >
              Reading
            </Link>
            <Link
              to="/testimonials"
              className={`text-xs font-medium px-2 py-1 rounded transition-colors ${
                location.pathname === "/testimonials"
                  ? "bg-mystic-100 text-mystic-600 dark:bg-mystic-800 dark:text-mystic-400"
                  : "text-muted-foreground hover:text-mystic-600 dark:hover:text-mystic-400"
              }`}
            >
              Reviews
            </Link>
            <Link
              to="/premium"
              className={`text-xs font-medium px-2 py-1 rounded transition-colors ${
                location.pathname === "/premium"
                  ? "bg-gold-100 text-gold-600 dark:bg-gold-900 dark:text-gold-400"
                  : "text-muted-foreground hover:text-gold-600 dark:hover:text-gold-400"
              }`}
            >
              Premium
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-cosmic-600 dark:hover:text-cosmic-400 ${
                location.pathname === "/"
                  ? "text-cosmic-600 dark:text-cosmic-400"
                  : "text-muted-foreground"
              }`}
            >
              Daily Reading
            </Link>
            <Link
              to="/testimonials"
              className={`text-sm font-medium transition-colors hover:text-mystic-600 dark:hover:text-mystic-400 ${
                location.pathname === "/testimonials"
                  ? "text-mystic-600 dark:text-mystic-400"
                  : "text-muted-foreground"
              }`}
            >
              Testimonials
            </Link>
            <Link
              to="/premium"
              className={`text-sm font-medium transition-colors hover:text-gold-600 dark:hover:text-gold-400 ${
                location.pathname === "/premium"
                  ? "text-gold-600 dark:text-gold-400"
                  : "text-muted-foreground"
              }`}
            >
              Premium
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
