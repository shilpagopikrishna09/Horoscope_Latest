import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Heart,
  Brain,
  MessageSquare,
  BookOpen,
  Calendar,
  Users,
  Bell,
  Star,
  Zap,
  Crown,
  Gift,
} from "lucide-react";

const Features = () => {
  const coreFeatures = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "Zodiac Sign Selector",
      description:
        "Beautiful interface to select and save your astrological sign with detailed information about traits and characteristics.",
      status: "Available",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Daily Horoscope",
      description:
        "AI-generated personalized horoscopes that refresh daily with insights tailored to your zodiac sign.",
      status: "Available",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Daily Affirmations",
      description:
        "Positive affirmations specifically crafted for your zodiac sign to start your day with intention.",
      status: "Available",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Share Readings",
      description:
        "Share your daily horoscope on social media platforms or copy to share with friends and family.",
      status: "Available",
    },
  ];

  const aiFeatures = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Personalized Horoscope",
      description:
        "Enhanced readings that incorporate your name, mood, and personal circumstances for deeper insights.",
      status: "Coming Soon",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Horoscope Chat",
      description:
        "Interactive AI spiritual guide that answers your questions about astrology and provides personalized guidance.",
      status: "Coming Soon",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Astro-Journal",
      description:
        "Guided journaling experience with prompts based on your horoscope and astrological transits.",
      status: "Coming Soon",
    },
  ];

  const premiumFeatures = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Compatibility Reports",
      description:
        "Detailed relationship insights when you enter your partner's zodiac sign for comprehensive compatibility analysis.",
      status: "Premium",
    },
    {
      icon: <Crown className="h-6 w-6" />,
      title: "Custom Birth Chart",
      description:
        "Personalized natal chart reading based on your exact birth time and location with detailed interpretations.",
      status: "Premium",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Coming Soon":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Premium":
        return "bg-gold-100 text-gold-800 dark:bg-gold-900 dark:text-gold-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const FeatureCard = ({
    icon,
    title,
    description,
    status,
  }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    status: string;
  }) => (
    <Card className="border-cosmic-200 dark:border-cosmic-700 hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-cosmic-100 dark:bg-cosmic-800 text-cosmic-600 dark:text-cosmic-400">
              {icon}
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          <Badge className={getStatusColor(status)}>{status}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-mystic-50 via-cosmic-50 to-gold-50 dark:from-cosmic-950 dark:via-mystic-950 dark:to-cosmic-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Cosmic Features
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the mystical world of astrology with our comprehensive
            suite of features designed to guide your cosmic journey.
          </p>
        </div>

        {/* Core Features */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
              <Gift className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-3xl font-bold">Core Features</h2>
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
              Free
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>

        {/* AI-Driven Features */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
              <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold">AI-Powered Intelligence</h2>
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              Coming Soon
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>

        {/* Premium Features */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 rounded-lg bg-gold-100 dark:bg-gold-900">
              <Crown className="h-6 w-6 text-gold-600 dark:text-gold-400" />
            </div>
            <h2 className="text-3xl font-bold">Premium Experience</h2>
            <Badge className="bg-gold-100 text-gold-800 dark:bg-gold-900 dark:text-gold-300">
              Premium
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {premiumFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="border-cosmic-200 dark:border-cosmic-700 bg-gradient-to-br from-cosmic-100 to-mystic-100 dark:from-cosmic-800 dark:to-mystic-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Begin Your Cosmic Journey?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Start with our free daily horoscopes and affirmations. Upgrade
                to premium for deeper insights and personalized guidance from
                the stars.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Features;
