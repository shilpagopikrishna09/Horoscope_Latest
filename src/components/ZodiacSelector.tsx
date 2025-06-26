import { zodiacSigns, elementColors, type ZodiacSign } from "@/lib/zodiac-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ZodiacSelectorProps {
  selectedSign: string | null;
  onSignSelect: (sign: ZodiacSign) => void;
  className?: string;
}

export const ZodiacSelector = ({
  selectedSign,
  onSignSelect,
  className,
}: ZodiacSelectorProps) => {
  const selectedZodiacSign = selectedSign
    ? zodiacSigns.find((sign) => sign.id === selectedSign)
    : null;

  const handleSignSelect = (signId: string) => {
    const sign = zodiacSigns.find((s) => s.id === signId);
    if (sign) {
      onSignSelect(sign);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="mb-4 sm:mb-6 text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl font-bold text-gradient">
          Choose Your Sign
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
        {zodiacSigns.map((sign) => (
          <Card
            key={sign.id}
            className={cn(
              "cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg border-2 active:scale-95",
              selectedSign === sign.id
                ? "border-cosmic-500 bg-gradient-to-br from-cosmic-100 to-mystic-100 dark:from-cosmic-800 dark:to-mystic-800 ring-2 ring-cosmic-300 dark:ring-cosmic-600"
                : "border-cosmic-200 dark:border-cosmic-700 hover:border-cosmic-300 dark:hover:border-cosmic-600",
            )}
            onClick={() => handleSignSelect(sign.id)}
          >
            <CardContent className="p-2 sm:p-3 text-center">
              <div
                className="text-2xl sm:text-3xl mb-1 sm:mb-2 animate-float"
                style={{
                  animationDelay: `${zodiacSigns.indexOf(sign) * 0.1}s`,
                }}
              >
                {sign.symbol}
              </div>
              <h3 className="font-semibold text-xs sm:text-sm mb-1">
                {sign.name}
              </h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground mb-1 sm:mb-2 leading-tight">
                {sign.dateRange}
              </p>
              <Badge
                variant="secondary"
                className={cn(
                  "text-[10px] sm:text-xs px-1 py-0",
                  elementColors[sign.element].text,
                )}
              >
                {sign.element}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
