import { Car, Truck, Wrench, Clock, Shield, Zap, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "سحب السيارات",
      description: "خدمة سحب السيارات المعطلة والمتضررة بأحدث المعدات وأعلى معايير الأمان للحفاظ على سيارتك",
      icon: Car,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 2,
      title: "نقل المركبات",
      description: "نقل آمن وسريع للمركبات الجديدة والمستعملة داخل وخارج جدة بأسطول حديث ومؤمن بالكامل",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 3,
      title: "مساعدة على الطريق",
      description: "خدمات الطوارئ والمساعدة الفورية على الطريق: تشغيل البطارية، تغيير الإطارات، وتوصيل الوقود",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "خدمة 24/7",
      description: "متوفرون في أي وقت"
    },
    {
      icon: Shield,
      title: "مؤمن بالكامل",
      description: "حماية شاملة لسيارتك"
    },
    {
      icon: Zap,
      title: "وصول سريع",
      description: "نصل في أقل من 30 دقيقة"
    },
    {
      icon: Star,
      title: "خدمة متميزة",
      description: "فريق محترف ومدرب"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-arabic" data-testid="text-services-title">
            خدماتنا المتميزة
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-arabic" data-testid="text-services-description">
            نقدم مجموعة شاملة من خدمات سحب ونقل السيارات بأعلى معايير الجودة والأمان في جدة والمناطق المحيطة
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id}
                className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                data-testid={`card-service-${service.id}`}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 object-cover"
                  data-testid={`img-service-${service.id}`}
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center ml-4">
                      <IconComponent className="text-primary w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground font-arabic" data-testid={`text-service-title-${service.id}`}>
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-arabic" data-testid={`text-service-description-${service.id}`}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Additional Features */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="space-y-3" data-testid={`feature-${index}`}>
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                    <IconComponent className="text-white w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-foreground font-arabic" data-testid={`text-feature-title-${index}`}>
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground font-arabic" data-testid={`text-feature-description-${index}`}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
