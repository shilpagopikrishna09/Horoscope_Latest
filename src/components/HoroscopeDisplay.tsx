import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Share2,
  Heart,
  Twitter,
  MessageCircle,
  Sparkles,
  RefreshCw,
  Hash,
  Palette,
  Users,
  Clock,
} from "lucide-react";
import {
  zodiacSigns,
  elementColors,
  generateDailyHoroscope,
  getDailyAffirmation,
  getDailyLuckyNumber,
  getDailyLuckyColor,
  getDailyCompatibleSign,
  getDailyLuckTime,
} from "@/lib/zodiac-data";
import { cn } from "@/lib/utils";

interface HoroscopeDisplayProps {
  signId: string;
  className?: string;
}

export const HoroscopeDisplay = ({
  signId,
  className,
}: HoroscopeDisplayProps) => {
  const [horoscope, setHoroscope] = useState(() =>
    generateDailyHoroscope(signId),
  );
  const [isRefreshing, setIsRefreshing] = useState(false);

  const sign = zodiacSigns.find((s) => s.id === signId);
  if (!sign) return null;

  const affirmation = getDailyAffirmation(signId);
  const luckyNumber = getDailyLuckyNumber(signId);
  const luckyColor = getDailyLuckyColor(signId);
  const compatibleSign = getDailyCompatibleSign(signId);
  const luckTime = getDailyLuckTime(signId);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const refreshHoroscope = async () => {
    setIsRefreshing(true);
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setHoroscope(generateDailyHoroscope(signId));
    setIsRefreshing(false);
  };

  const shareHoroscope = (platform: "twitter" | "whatsapp") => {
    const text = `My ${sign.name} horoscope for today: "${horoscope}" ✨`;
    const url = window.location.href;

    if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
        "_blank",
      );
    } else if (platform === "whatsapp") {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
        "_blank",
      );
    }
  };

  return (
    <div className={cn("w-full max-w-2xl mx-auto", className)}>
      {/* Header */}
      <div className="text-center mb-4 sm:mb-6 px-4 sm:px-0">
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-2">
          <div className="text-4xl sm:text-6xl animate-cosmic-glow">
            {sign.symbol}
          </div>
          <div className="text-3xl sm:text-4xl">{sign.emoji}</div>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gradient mb-2">
          {sign.name}
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">{today}</p>
      </div>

      {/* Sign Info */}
      <Card className="mb-6 border-cosmic-200 dark:border-cosmic-700 bg-gradient-to-br from-cosmic-50 to-mystic-50 dark:from-cosmic-900 dark:to-mystic-900">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <Badge className={elementColors[sign.element].bg}>
              {sign.element} {elementColors[sign.element].icon}
            </Badge>
            <span className="text-sm text-muted-foreground">
              Ruled by {sign.ruling}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {sign.traits.map((trait) => (
              <Badge key={trait} variant="outline" className="text-xs">
                {trait}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Daily Horoscope */}
      <Card className="mb-6 border-cosmic-200 dark:border-cosmic-700">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-gold-500" />
              <span>Today's Reading</span>
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={refreshHoroscope}
              disabled={isRefreshing}
              className="h-8 w-8 p-0"
            >
              <RefreshCw
                className={cn("h-4 w-4", isRefreshing && "animate-spin")}
              />
              <span className="sr-only">Refresh horoscope</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed mb-4 text-foreground/90">
            {horoscope}
          </p>

          <Separator className="my-4" />

          <div className="space-y-4">
            <h4 className="font-semibold text-sm text-cosmic-600 dark:text-cosmic-400">
              Daily Affirmation
            </h4>
            <p className="text-sm italic text-muted-foreground bg-gold-50 dark:bg-gold-950/20 p-3 rounded-md border-l-4 border-gold-400">
              "{affirmation}"
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Daily Insights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 px-4 sm:px-0">
        {/* Lucky Number */}
        <Card className="border-cosmic-200 dark:border-cosmic-700 bg-gradient-to-br from-cosmic-50 to-mystic-50 dark:from-cosmic-900 dark:to-mystic-900">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 rounded-lg bg-gold-100 dark:bg-gold-900">
                <Hash className="h-4 w-4 text-gold-600 dark:text-gold-400" />
              </div>
              <h4 className="font-semibold text-sm">Lucky Number</h4>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-gradient">
                {luckyNumber}
              </span>
              <p className="text-xs text-muted-foreground mt-1">
                Keep this number close today
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Lucky Color */}
        <Card className="border-cosmic-200 dark:border-cosmic-700 bg-gradient-to-br from-cosmic-50 to-mystic-50 dark:from-cosmic-900 dark:to-mystic-900">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 rounded-lg bg-mystic-100 dark:bg-mystic-900">
                <Palette className="h-4 w-4 text-mystic-600 dark:text-mystic-400" />
              </div>
              <h4 className="font-semibold text-sm">Lucky Color</h4>
            </div>
            <div className="flex items-center space-x-3">
              <div
                className="w-8 h-8 rounded-full border-2 border-cosmic-200 dark:border-cosmic-700"
                style={{ backgroundColor: luckyColor.hex }}
              />
              <div>
                <p className="font-medium text-sm">{luckyColor.name}</p>
                <p className="text-xs text-muted-foreground">
                  {luckyColor.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compatible Sign */}
        <Card className="border-cosmic-200 dark:border-cosmic-700 bg-gradient-to-br from-cosmic-50 to-mystic-50 dark:from-cosmic-900 dark:to-mystic-900">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 rounded-lg bg-cosmic-100 dark:bg-cosmic-900">
                <Users className="h-4 w-4 text-cosmic-600 dark:text-cosmic-400" />
              </div>
              <h4 className="font-semibold text-sm">Compatible Today</h4>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{compatibleSign.symbol}</span>
              <div>
                <p className="font-medium text-sm">{compatibleSign.name}</p>
                <p className="text-xs text-muted-foreground">
                  Great energy match today
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Luck Time */}
        <Card className="border-cosmic-200 dark:border-cosmic-700 bg-gradient-to-br from-cosmic-50 to-mystic-50 dark:from-cosmic-900 dark:to-mystic-900">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 rounded-lg bg-gold-100 dark:bg-gold-900">
                <Clock className="h-4 w-4 text-gold-600 dark:text-gold-400" />
              </div>
              <h4 className="font-semibold text-sm">Peak Time</h4>
            </div>
            <div>
              <p className="font-medium text-sm">{luckTime.period}</p>
              <p className="text-xs text-muted-foreground">
                {luckTime.description}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Share Section */}
      <Card className="border-cosmic-200 dark:border-cosmic-700">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <Share2 className="h-5 w-5" />
            <span>Share Your Reading</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => shareHoroscope("twitter")}
              className="flex items-center space-x-2"
            >
              <Twitter className="h-4 w-4" />
              <span>Twitter</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => shareHoroscope("whatsapp")}
              className="flex items-center space-x-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                navigator.clipboard.writeText(
                  `My ${sign.name} horoscope: "${horoscope}"`,
                );
              }}
              className="flex items-center space-x-2"
            >
              <Heart className="h-4 w-4" />
              <span>Copy</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
