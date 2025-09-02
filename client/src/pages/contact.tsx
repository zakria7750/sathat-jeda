import { useEffect, useState } from "react";
import Header from "@/components/Header";
import FixedContactBar from "@/components/FixedContactBar";
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, User, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { updatePageSEO } from "@/lib/seo";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    updatePageSEO(
      "تواصل معنا - سطحة جدة | اتصل بنا للمساعدة الفورية 24/7",
      "تواصل مع سطحة جدة للحصول على خدمة سحب السيارات الفورية في جدة. نحن متاحون 24 ساعة لمساعدتك على الطريق. اتصل الآن أو راسلنا عبر واتساب."
    );
  }, []);

  const contactMethods = [
    {
      icon: Phone,
      title: "اتصل بنا مباشرة",
      description: "متاحون 24 ساعة للطوارئ",
      value: "+966 50 000 0000",
      action: () => window.location.href = "tel:+966500000000",
      buttonText: "اتصل الآن",
      color: "bg-accent"
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      description: "تواصل سريع ومباشر",
      value: "مراسلة فورية",
      action: () => window.open("https://wa.me/966500000000", "_blank"),
      buttonText: "راسلنا",
      color: "bg-green-600"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      description: "للاستفسارات العامة",
      value: "info@jeddahtowing.com",
      action: () => window.location.href = "mailto:info@jeddahtowing.com",
      buttonText: "راسل الآن",
      color: "bg-blue-600"
    }
  ];

  const serviceAreas = [
    "شمال جدة",
    "جنوب جدة", 
    "وسط جدة",
    "شرق جدة",
    "غرب جدة",
    "أبحر",
    "الروضة",
    "العزيزية"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "خطأ في النموذج",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "تم إرسال رسالتك بنجاح",
        description: "سنتواصل معك في أقرب وقت ممكن",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة",
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:+966500000000";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/966500000000", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight font-arabic" data-testid="text-contact-main-title">
              تواصل معنا - سطحة جدة
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-arabic" data-testid="text-contact-intro">
              فريقنا جاهز لمساعدتك على مدار 24 ساعة في جدة والمناطق المحيطة. لا تتردد في التواصل معنا للحصول على خدمة سريعة وموثوقة
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Methods */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 font-arabic" data-testid="text-contact-methods-title">
                طرق التواصل المباشر
              </h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`card-contact-method-${index}`}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 space-x-reverse">
                            <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center`}>
                              <IconComponent className="text-white w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-foreground font-arabic" data-testid={`text-contact-method-title-${index}`}>
                                {method.title}
                              </h3>
                              <p className="text-sm text-muted-foreground font-arabic" data-testid={`text-contact-method-description-${index}`}>
                                {method.description}
                              </p>
                              <p className="text-primary font-medium font-arabic" data-testid={`text-contact-method-value-${index}`}>
                                {method.value}
                              </p>
                            </div>
                          </div>
                          <Button
                            onClick={method.action}
                            className={`${method.color} hover:opacity-90 text-white font-arabic`}
                            data-testid={`button-contact-method-${index}`}
                          >
                            {method.buttonText}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Service Areas */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 font-arabic" data-testid="text-service-areas-title">
                  مناطق الخدمة في جدة
                </h3>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-5 h-5 text-primary ml-2" />
                      <span className="font-medium text-foreground font-arabic">نخدم جميع أنحاء جدة</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {serviceAreas.map((area, index) => (
                        <div key={index} className="flex items-center text-sm" data-testid={`text-service-area-${index}`}>
                          <div className="w-2 h-2 bg-accent rounded-full ml-2" />
                          <span className="text-muted-foreground font-arabic">{area}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Working Hours */}
              <div className="mt-8">
                <Card className="bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Clock className="w-5 h-5 text-primary ml-2" />
                      <h3 className="text-xl font-bold text-foreground font-arabic" data-testid="text-working-hours-title">
                        أوقات العمل
                      </h3>
                    </div>
                    <div className="space-y-2 text-foreground font-arabic">
                      <p className="text-lg font-bold" data-testid="text-emergency-hours">خدمة الطوارئ: 24 ساعة يومياً</p>
                      <p data-testid="text-office-hours">المكتب الإداري: الأحد - الخميس (8:00 ص - 6:00 م)</p>
                      <p className="text-sm text-muted-foreground" data-testid="text-holiday-note">
                        * خدمة السطحة متاحة في جميع الأيام والأعياد
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 font-arabic" data-testid="text-contact-form-title">
                أرسل لنا رسالة
              </h2>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="font-arabic">الاسم الكامل *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="اكتب اسمك الكامل"
                        className="mt-2 font-arabic"
                        dir="rtl"
                        required
                        data-testid="input-name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="font-arabic">البريد الإلكتروني</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="example@domain.com"
                        className="mt-2"
                        data-testid="input-email"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="font-arabic">رقم الهاتف *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="05xxxxxxxx"
                        className="mt-2"
                        required
                        data-testid="input-phone"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="font-arabic">الرسالة *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="اكتب رسالتك هنا... (نوع الخدمة المطلوبة، الموقع، تفاصيل إضافية)"
                        className="mt-2 min-h-[120px] font-arabic"
                        dir="rtl"
                        required
                        data-testid="textarea-message"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-arabic text-lg py-3"
                      data-testid="button-submit-form"
                    >
                      {isSubmitting ? (
                        "جاري الإرسال..."
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          إرسال الرسالة
                        </>
                      )}
                    </Button>
                  </form>
                  
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground font-arabic text-center" data-testid="text-form-note">
                      للحالات الطارئة، يُفضل الاتصال المباشر أو المراسلة عبر واتساب للحصول على استجابة فورية
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Emergency Call to Action */}
          <section className="mt-16 text-center bg-accent rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4 font-arabic" data-testid="text-emergency-cta-title">
              هل تحتاج مساعدة فورية؟
            </h2>
            <p className="text-xl mb-6 font-arabic" data-testid="text-emergency-cta-description">
              في حالة الطوارئ، لا تنتظر - اتصل بنا الآن للحصول على مساعدة سريعة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handlePhoneCall}
                className="inline-flex items-center justify-center bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg font-arabic"
                data-testid="button-emergency-call"
              >
                <Phone className="mr-3 w-5 h-5" />
                اتصل فوراً: +966 50 000 0000
              </Button>
              <Button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg font-arabic"
                data-testid="button-emergency-whatsapp"
              >
                <svg className="mr-3 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
                </svg>
                واتساب للطوارئ
              </Button>
            </div>
          </section>
        </div>
      </main>
      
      <FixedContactBar />
    </div>
  );
}