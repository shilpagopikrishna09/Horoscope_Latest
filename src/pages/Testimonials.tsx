import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Users, Heart } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "London, UK",
      zodiacSign: "Virgo",
      rating: 5,
      text: "I've been using Cosmic Guide for 6 months now and it's become part of my morning routine. The daily readings are surprisingly accurate and have helped me navigate some challenging times at work. The birth chart reading I ordered was incredibly detailed and revealed things about myself I never realized.",
      service: "Premium Birth Chart",
      date: "2 weeks ago",
    },
    {
      name: "Michael Chen",
      location: "Manchester, UK",
      zodiacSign: "Scorpio",
      rating: 5,
      text: "As someone who was skeptical about astrology, Cosmic Guide completely changed my perspective. The daily horoscopes aren't generic fluff - they're thoughtful insights that often align perfectly with what's happening in my life. Worth every penny for the premium service.",
      service: "Daily Readings",
      date: "1 month ago",
    },
    {
      name: "Emma Thompson",
      location: "Edinburgh, Scotland",
      zodiacSign: "Pisces",
      rating: 5,
      text: "The compatibility report for my fiancé and me was spot on! It highlighted our strengths as a couple and gave us valuable insights into areas we could work on. We actually used some of the advice during our wedding planning. The printed report is beautifully presented too.",
      service: "Premium Birth Chart",
      date: "3 weeks ago",
    },
    {
      name: "James Wilson",
      location: "Birmingham, UK",
      zodiacSign: "Leo",
      rating: 4,
      text: "I love starting my day with the daily reading and affirmations. The lucky numbers have been surprisingly helpful - I even won a small lottery prize using one! The app is beautifully designed and easy to use. Only wish there were weekly forecasts too.",
      service: "Daily Readings",
      date: "1 week ago",
    },
    {
      name: "Priya Patel",
      location: "Leicester, UK",
      zodiacSign: "Gemini",
      rating: 5,
      text: "The premium consultation was incredible. The astrologer was so knowledgeable and patient, explaining my birth chart in detail. I learned so much about my personality traits and life path. It's helped me make some important career decisions with confidence.",
      service: "Premium Consultation",
      date: "2 months ago",
    },
    {
      name: "David Martinez",
      location: "Leeds, UK",
      zodiacSign: "Capricorn",
      rating: 5,
      text: "I bought the premium reading as a gift for my wife who's really into astrology. She was absolutely thrilled with the 15-page detailed report. The presentation was professional and the insights were remarkably accurate. Definitely ordering one for myself next!",
      service: "Premium Birth Chart",
      date: "1 month ago",
    },
    {
      name: "Lisa Anderson",
      location: "Glasgow, Scotland",
      zodiacSign: "Aries",
      rating: 4,
      text: "The daily affirmations have become such a positive part of my morning routine. They're not cheesy or generic - they feel personal and relevant to my sign. The cosmic theme of the app is gorgeous too. My friends are all signing up after seeing how much I love it!",
      service: "Daily Readings",
      date: "3 weeks ago",
    },
    {
      name: "Robert Taylor",
      location: "Bristol, UK",
      zodiacSign: "Taurus",
      rating: 5,
      text: "I was going through a difficult time and the daily readings provided such comfort and guidance. The timing insights helped me make important decisions, and the lucky colors actually boosted my confidence during interviews. Got the job I wanted!",
      service: "Daily Readings",
      date: "2 weeks ago",
    },
    {
      name: "Sophie Williams",
      location: "Cardiff, Wales",
      zodiacSign: "Libra",
      rating: 5,
      text: "The premium birth chart reading was like having a roadmap to my personality. It explained so many things about my relationships and career patterns. The astrologer's consultation was incredibly insightful - I felt truly understood for the first time.",
      service: "Premium Consultation",
      date: "1 month ago",
    },
  ];

  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: "10,000+",
      label: "Happy Users",
    },
    {
      icon: <Star className="h-6 w-6" />,
      value: "4.9/5",
      label: "Average Rating",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      value: "95%",
      label: "Would Recommend",
    },
  ];

  const getServiceColor = (service: string) => {
    if (service.includes("Premium Birth Chart"))
      return "bg-gold-100 text-gold-800 dark:bg-gold-900 dark:text-gold-300";
    if (service.includes("Premium Consultation"))
      return "bg-cosmic-100 text-cosmic-800 dark:bg-cosmic-900 dark:text-cosmic-300";
    return "bg-mystic-100 text-mystic-800 dark:bg-mystic-900 dark:text-mystic-300";
  };

  const getZodiacEmoji = (sign: string) => {
    const emojis: { [key: string]: string } = {
      Aries: "♈",
      Taurus: "♉",
      Gemini: "♊",
      Cancer: "♋",
      Leo: "♌",
      Virgo: "♍",
      Libra: "♎",
      Scorpio: "♏",
      Sagittarius: "♐",
      Capricorn: "♑",
      Aquarius: "♒",
      Pisces: "♓",
    };
    return emojis[sign] || "⭐";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mystic-50 via-cosmic-50 to-gold-50 dark:from-cosmic-950 dark:via-mystic-950 dark:to-cosmic-900">
      <div className="container mx-auto px-4 py-6 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
            <Quote className="h-8 w-8 sm:h-12 sm:w-12 text-cosmic-600 dark:text-cosmic-400 animate-cosmic-glow" />
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gradient mb-3 sm:mb-4">
            What Our Users Say
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
            Real stories from real people who've found guidance through the
            stars
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2 text-cosmic-600 dark:text-cosmic-400">
                {stat.icon}
              </div>
              <div className="text-xl sm:text-2xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-cosmic-200 dark:border-cosmic-700 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-4 sm:p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-sm sm:text-base text-foreground/90 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* User Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-sm sm:text-base flex items-center space-x-2">
                        <span>{testimonial.name}</span>
                        <span className="text-base">
                          {getZodiacEmoji(testimonial.zodiacSign)}
                        </span>
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        {testimonial.location}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.zodiacSign}
                    </Badge>
                  </div>

                  {/* Service and Date */}
                  <div className="flex items-center justify-between">
                    <Badge
                      className={`text-xs ${getServiceColor(testimonial.service)}`}
                    >
                      {testimonial.service}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {testimonial.date}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="border-cosmic-200 dark:border-cosmic-700 bg-gradient-to-br from-cosmic-100 to-mystic-100 dark:from-cosmic-800 dark:to-mystic-800 max-w-2xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Ready to Start Your Cosmic Journey?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                Join thousands of others who've found guidance, clarity, and
                inspiration through our personalized astrological insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-md bg-cosmic-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-cosmic-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-600"
                >
                  Start Free Reading
                </a>
                <a
                  href="/premium"
                  className="inline-flex items-center justify-center rounded-md border border-gold-400 bg-transparent px-4 py-2 text-sm font-medium text-gold-600 shadow-sm transition-colors hover:bg-gold-50 dark:hover:bg-gold-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600"
                >
                  View Premium Options
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
