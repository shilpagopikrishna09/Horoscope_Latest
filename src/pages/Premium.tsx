import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Crown,
  FileUp,
  Calendar,
  Clock,
  MapPin,
  Star,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const Premium = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    birthDate: "",
    birthTime: "",
    birthLocation: "",
    additionalDetails: "",
    uploadedFile: null as File | null,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, uploadedFile: file }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
    console.log("Premium horoscope order:", formData);
  };

  const features = [
    "Comprehensive birth chart analysis",
    "Detailed personality insights",
    "Life path and purpose guidance",
    "Relationship compatibility patterns",
    "Career and financial forecasts",
    "Health and wellness insights",
    "Beautifully printed page report",
  ];

  const extraCharges = [
    {
      service: "Professional astrological consultation",
      price: "£250.00",
      description:
        "30-minute one-on-one consultation with certified astrologer",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-mystic-50 via-cosmic-50 to-gold-50 dark:from-cosmic-950 dark:via-mystic-950 dark:to-cosmic-900">
      <div className="container mx-auto px-4 py-6 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
            <Crown className="h-8 w-8 sm:h-12 sm:w-12 text-gold-500 animate-cosmic-glow" />
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-cosmic-600 dark:text-cosmic-400 animate-stars-twinkle" />
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gradient mb-3 sm:mb-4 px-4">
            Premium Detailed Horoscope
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 sm:mb-6 px-4">
            Get your complete astrological profile with our premium printed
            horoscope report
          </p>
          <Badge className="bg-gold-100 text-gold-800 dark:bg-gold-900 dark:text-gold-300 text-base sm:text-lg px-3 sm:px-4 py-1 sm:py-2">
            £150.00
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 max-w-6xl mx-auto">
          {/* Features */}
          <div className="space-y-6">
            <Card className="border-cosmic-200 dark:border-cosmic-700 bg-gradient-to-br from-cosmic-50 to-mystic-50 dark:from-cosmic-900 dark:to-mystic-900">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-gold-500" />
                  <span>What's Included</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Extra Charges */}
            <Card className="border-cosmic-200 dark:border-cosmic-700 bg-gradient-to-br from-gold-50 to-cosmic-50 dark:from-gold-950/20 dark:to-cosmic-900">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Crown className="h-5 w-5 text-gold-500" />
                  <span>Additional Services</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {extraCharges.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gold-200 dark:border-gold-800 rounded-lg p-3 bg-white/50 dark:bg-cosmic-950/50"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">
                        {item.service}
                      </span>
                      <Badge className="bg-gold-100 text-gold-800 dark:bg-gold-900 dark:text-gold-300">
                        {item.price}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Form */}
          <Card className="border-cosmic-200 dark:border-cosmic-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Crown className="h-5 w-5 text-gold-500" />
                <span>Order Your Premium Report</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-cosmic-600 dark:text-cosmic-400">
                    Personal Information
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) =>
                          handleInputChange("fullName", e.target.value)
                        }
                        placeholder="Enter your full name"
                        className="border-cosmic-200 dark:border-cosmic-700"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="your@email.com"
                        className="border-cosmic-200 dark:border-cosmic-700"
                        required
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Birth Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-cosmic-600 dark:text-cosmic-400 flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Birth Information</span>
                  </h3>

                  <div>
                    <Label htmlFor="birthDate">Date of Birth *</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) =>
                        handleInputChange("birthDate", e.target.value)
                      }
                      className="border-cosmic-200 dark:border-cosmic-700"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="birthTime">Time of Birth *</Label>
                    <Input
                      id="birthTime"
                      type="time"
                      value={formData.birthTime}
                      onChange={(e) =>
                        handleInputChange("birthTime", e.target.value)
                      }
                      className="border-cosmic-200 dark:border-cosmic-700"
                      required
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="birthLocation"
                      className="flex items-center space-x-2"
                    >
                      <MapPin className="h-4 w-4" />
                      <span>Place of Birth *</span>
                    </Label>
                    <Input
                      id="birthLocation"
                      value={formData.birthLocation}
                      onChange={(e) =>
                        handleInputChange("birthLocation", e.target.value)
                      }
                      placeholder="City, Country (e.g., London, UK)"
                      className="border-cosmic-200 dark:border-cosmic-700"
                      required
                    />
                  </div>
                </div>

                <Separator />

                {/* Additional Details */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-cosmic-600 dark:text-cosmic-400">
                    Additional Information
                  </h3>

                  <div>
                    <Label htmlFor="additionalDetails">
                      Specific Questions or Areas of Focus (Optional)
                    </Label>
                    <Textarea
                      id="additionalDetails"
                      value={formData.additionalDetails}
                      onChange={(e) =>
                        handleInputChange("additionalDetails", e.target.value)
                      }
                      placeholder="Tell us what aspects of your life you'd like us to focus on (relationships, career, health, etc.)"
                      className="border-cosmic-200 dark:border-cosmic-700 min-h-[100px]"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="fileUpload"
                      className="flex items-center space-x-2"
                    >
                      <FileUp className="h-4 w-4" />
                      <span>Upload Existing Horoscope (Optional)</span>
                    </Label>
                    <Input
                      id="fileUpload"
                      type="file"
                      onChange={handleFileUpload}
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      className="border-cosmic-200 dark:border-cosmic-700"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Upload any existing horoscope documents for comparison
                      (PDF, DOC, or image files)
                    </p>
                    {formData.uploadedFile && (
                      <div className="mt-2 p-2 bg-cosmic-50 dark:bg-cosmic-900 rounded-md">
                        <p className="text-sm text-cosmic-600 dark:text-cosmic-400">
                          File selected: {formData.uploadedFile.name}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <Separator />

                {/* Submit */}
                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-cosmic-600 to-gold-500 hover:from-cosmic-700 hover:to-gold-600 text-white px-8 py-3"
                  >
                    <Crown className="mr-2 h-5 w-5" />
                    Order Premium Report - £150.00
                  </Button>
                  <p className="text-xs text-muted-foreground mt-3">
                    Your detailed horoscope will be delivered within 5-7
                    business days
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="border-cosmic-200 dark:border-cosmic-700 bg-gradient-to-br from-gold-50 to-cosmic-50 dark:from-gold-950/20 dark:to-cosmic-900 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">
                Why Choose Our Premium Service?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our premium horoscope reports are crafted by certified
                astrologers with over 20 years of experience. Each report is
                individually researched and written based on your exact birth
                details, providing insights that generic horoscopes simply
                cannot match. Your beautiful printed report will become a
                treasured keepsake and guide for your life's journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Premium;
