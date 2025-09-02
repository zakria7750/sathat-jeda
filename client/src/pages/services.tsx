import { useEffect } from "react";
import Header from "@/components/Header";
import FixedContactBar from "@/components/FixedContactBar";
import { Car, Truck, Wrench, Clock, Shield, MapPin, Building, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { updatePageSEO } from "@/lib/seo";

export default function Services() {
  useEffect(() => {
    updatePageSEO(
      "خدماتنا - سطحة جدة | نقل السيارات والمساعدة على الطريق 24/7",
      "خدمات سطحة جدة الشاملة: نقل السيارات، المساعدة على الطريق، الإنقاذ الطارئ، والنقل للمسافات الطويلة. خدمة موثوقة 24 ساعة في جدة."
    );
  }, []);

  const mainServices = [
    {
      id: 1,
      title: "نقل السيارات",
      subtitle: "خدمة شاملة لجميع أنواع النقل",
      description: "نقدم خدمة نقل السيارات المعطلة والمتضررة من الحوادث، بالإضافة إلى نقل السيارات الجديدة من المعارض والوكالات. نستخدم أحدث معدات السطحة لضمان وصول سيارتك بأمان تام إلى الوجهة المطلوبة.",
      icon: Car,
      features: ["سيارات معطلة", "سيارات الحوادث", "السيارات الجديدة", "نقل آمن ومؤمن"],
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 2,
      title: "المساعدة على الطريق",
      subtitle: "خدمات فورية لحل مشاكل الطريق",
      description: "فريقنا المتخصص جاهز لتقديم المساعدة الفورية على الطريق في أي مكان في جدة. نصل إليك بسرعة لحل المشكلة في الموقع أو نقل سيارتك إلى أقرب ورشة أو مكان آمن.",
      icon: Wrench,
      features: ["تشغيل البطارية", "تغيير الإطارات", "توصيل الوقود", "فتح السيارات المقفلة"],
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 3,
      title: "إنقاذ السيارات الطارئ",
      subtitle: "خدمة 24 ساعة للحالات العاجلة",
      description: "في الحالات الطارئة، نحن متواجدون على مدار الساعة لتقديم خدمة الإنقاذ السريع. سواء كانت سيارتك في مكان خطير أو تحتاج للنقل العاجل، فريقنا مستعد للتدخل الفوري.",
      icon: Clock,
      features: ["خدمة 24/7", "استجابة سريعة", "إنقاذ من الأماكن الصعبة", "تدخل طارئ"],
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 4,
      title: "سطحة للمسافات الطويلة",
      subtitle: "نقل بين المدن والمناطق",
      description: "نوفر خدمة نقل السيارات للمسافات الطويلة بين جدة والمدن الأخرى في المملكة. خدمة مؤمنة بالكامل مع متابعة دقيقة لرحلة سيارتك حتى وصولها بأمان.",
      icon: MapPin,
      features: ["نقل بين المدن", "تأمين شامل", "متابعة الرحلة", "جدولة مرنة"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 5,
      title: "خدمات الشركات والمعارض",
      subtitle: "حلول مخصصة للأعمال التجارية",
      description: "نقدم خدمات مخصصة لأصحاب الشركات ومعارض السيارات، تشمل نقل عدة سيارات في رحلة واحدة، وخدمات جدولة منتظمة، وأسعار تفضيلية للعملاء التجاريين.",
      icon: Building,
      features: ["نقل متعدد السيارات", "خدمات منتظمة", "أسعار تجارية", "تخطيط لوجستي"],
      image: "https://images.unsplash.com/photo-1562141961-3e20a95da853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: "سرعة الوصول",
      description: "نصل إليك في أقل من 30 دقيقة في معظم مناطق جدة"
    },
    {
      icon: Shield,
      title: "تأمين شامل",
      description: "جميع سياراتنا مؤمنة بالكامل لضمان سلامة ممتلكاتك"
    },
    {
      icon: Truck,
      title: "معدات حديثة",
      description: "أسطول متطور من السطحات والمعدات المتخصصة"
    },
    {
      icon: Phone,
      title: "خدمة عملاء متميزة",
      description: "فريق خدمة عملاء محترف متاح على مدار الساعة"
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight font-arabic" data-testid="text-services-main-title">
              خدمات سطحة جدة الشاملة
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-arabic" data-testid="text-services-intro">
              نلتزم بتقديم خدمات سحب ونقل السيارات الأسرع والأوثق لسكان جدة والمناطق المحيطة، مع ضمان الجودة والاحترافية في كل مرة
            </p>
          </div>

          {/* Main Services */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center font-arabic" data-testid="text-main-services-title">
              خدماتنا الرئيسية
            </h2>
            <div className="space-y-12">
              {mainServices.map((service, index) => {
                const IconComponent = service.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <Card 
                    key={service.id}
                    className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                    data-testid={`card-main-service-${service.id}`}
                  >
                    <div className={`grid md:grid-cols-2 gap-0 ${!isEven ? 'md:grid-flow-dense' : ''}`}>
                      <div className={`${!isEven ? 'md:col-start-2' : ''}`}>
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-64 md:h-full object-cover"
                          data-testid={`img-main-service-${service.id}`}
                        />
                      </div>
                      <CardContent className="p-8 flex flex-col justify-center">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center ml-4">
                            <IconComponent className="text-primary w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-foreground font-arabic" data-testid={`text-main-service-title-${service.id}`}>
                              {service.title}
                            </h3>
                            <p className="text-primary font-medium font-arabic" data-testid={`text-main-service-subtitle-${service.id}`}>
                              {service.subtitle}
                            </p>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed font-arabic mb-6" data-testid={`text-main-service-description-${service.id}`}>
                          {service.description}
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <div className="w-2 h-2 bg-accent rounded-full ml-2" />
                              <span className="text-foreground font-arabic" data-testid={`text-service-feature-${service.id}-${idx}`}>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <div className="bg-primary/5 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center font-arabic" data-testid="text-why-choose-services-title">
                لماذا نحن الخيار الأفضل؟
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto font-arabic" data-testid="text-why-choose-services-intro">
                نتميز بخبرة طويلة وفريق محترف ومعدات حديثة، مما يجعلنا الخيار الأول لخدمات السطحة في جدة
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {advantages.map((advantage, index) => {
                  const IconComponent = advantage.icon;
                  return (
                    <div key={index} className="text-center" data-testid={`advantage-${index}`}>
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="text-white w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 font-arabic" data-testid={`text-advantage-title-${index}`}>
                        {advantage.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-arabic" data-testid={`text-advantage-description-${index}`}>
                        {advantage.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-primary rounded-2xl p-8 text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4 font-arabic" data-testid="text-cta-services-title">
              هل تحتاج أي من هذه الخدمات؟
            </h2>
            <p className="text-xl mb-6 font-arabic" data-testid="text-cta-services-description">
              لا تتردد في التواصل معنا الآن - نحن جاهزون لخدمتك في أي وقت
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handlePhoneCall}
                className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg font-arabic"
                data-testid="button-services-call"
              >
                <Phone className="mr-3 w-5 h-5" />
                اتصل الآن: +966 50 000 0000
              </Button>
              <Button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg font-arabic"
                data-testid="button-services-whatsapp"
              >
                <svg className="mr-3 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
                </svg>
                تواصل عبر واتساب
              </Button>
            </div>
          </section>
        </div>
      </main>
      
      <FixedContactBar />
    </div>
  );
}