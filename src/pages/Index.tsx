import { useState, useEffect } from "react";
import { ZodiacSelector } from "@/components/ZodiacSelector";
import { HoroscopeDisplay } from "@/components/HoroscopeDisplay";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { zodiacStorage } from "@/lib/storage";
import { type ZodiacSign } from "@/lib/zodiac-data";
import { Stars, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [selectedSign, setSelectedSign] = useState<string | null>(null);
  const [showHoroscope, setShowHoroscope] = useState(false);

  useEffect(() => {
    // Load saved sign from storage for pre-selection, but don't auto-navigate
    const savedSign = zodiacStorage.getSelectedSign();
    if (savedSign) {
      setSelectedSign(savedSign);
    }
  }, []);

  const handleSignSelect = (sign: ZodiacSign) => {
    setSelectedSign(sign.id);
    zodiacStorage.setSelectedSign(sign.id);
    setShowHoroscope(true);
  };

  const handleChangeSign = () => {
    setShowHoroscope(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mystic-50 via-cosmic-50 to-gold-50 dark:from-cosmic-950 dark:via-mystic-950 dark:to-cosmic-900">
      <main className="container mx-auto px-4 py-8">
        {!showHoroscope ? (
          <>
            {/* Hero Section */}
            <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
              <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-4 sm:mb-6">
                <Stars className="h-8 w-8 sm:h-12 sm:w-12 text-cosmic-600 dark:text-cosmic-400 animate-stars-twinkle" />
                <Sparkles
                  className="h-6 w-6 sm:h-8 sm:w-8 text-gold-500 animate-stars-twinkle"
                  style={{ animationDelay: "1s" }}
                />
                <Stars
                  className="h-7 w-7 sm:h-10 sm:w-10 text-mystic-600 dark:text-mystic-400 animate-stars-twinkle"
                  style={{ animationDelay: "2s" }}
                />
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gradient mb-4 sm:mb-6 leading-tight">
                Welcome to Cosmic Guide
              </h1>

              <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
                Discover what the stars have in store for you today. Get
                personalized horoscopes, daily affirmations, and cosmic insights
                tailored to your zodiac sign.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 text-xs sm:text-sm text-muted-foreground mb-8 sm:mb-12">
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-gold-500" />
                  <span>Free daily readings</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <span>AI-powered insights</span>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center space-x-2">
                  <span>Share with friends</span>
                  <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-gold-500" />
                </div>
              </div>
            </div>

            {/* Sign Selection */}
            <div className="max-w-4xl mx-auto">
              <ZodiacSelector
                selectedSign={selectedSign}
                onSignSelect={handleSignSelect}
              />
            </div>

            {/* Premium Link */}
            <div className="mt-16 text-center">
              <Link to="/premium">
                <Button
                  variant="outline"
                  className="group border-gold-400 text-gold-600 hover:bg-gold-50 dark:hover:bg-gold-950"
                >
                  Unlock Premium Reading
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <>
            {/* Horoscope Display */}
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Stars className="h-8 w-8 text-cosmic-600 dark:text-cosmic-400" />
                    <Sparkles className="h-4 w-4 text-gold-500 absolute -top-1 -right-1" />
                  </div>
                  <h1 className="text-3xl font-bold text-gradient">
                    Your Daily Reading
                  </h1>
                </div>
                <Button
                  variant="outline"
                  onClick={handleChangeSign}
                  className="flex items-center space-x-2"
                >
                  <span>Change Sign</span>
                </Button>
              </div>

              {selectedSign && <HoroscopeDisplay signId={selectedSign} />}
            </div>

            {/* Additional Content */}
            <div className="mt-16 max-w-2xl mx-auto">
              <Card className="border-cosmic-200 dark:border-cosmic-700 bg-gradient-to-br from-cosmic-50 to-mystic-50 dark:from-cosmic-900 dark:to-mystic-900">
                <CardContent className="p-6 text-center">
                  <Sparkles className="h-8 w-8 text-gold-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Want More Cosmic Insights?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Explore our premium features including weekly forecasts,
                    compatibility reports, and personalized birth chart
                    readings.
                  </p>
                  <Link to="/features">
                    <Button className="bg-cosmic-600 hover:bg-cosmic-700">
                      Discover Premium Features
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Index;
