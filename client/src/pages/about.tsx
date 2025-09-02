import { useEffect } from "react";
import Header from "@/components/Header";
import FixedContactBar from "@/components/FixedContactBar";
import { Shield, Clock, Award, Users, Truck, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { updatePageSEO } from "@/lib/seo";

export default function About() {
  useEffect(() => {
    updatePageSEO(
      "من نحن - سطحة جدة | خدمة سحب السيارات الموثوقة منذ 2013",
      "تعرف على قصة سطحة جدة الرائدة في خدمات سحب ونقل السيارات. خبرة أكثر من 10 سنوات، فريق محترف، ومعدات حديثة لخدمتك 24/7 في جدة."
    );
  }, []);
  const values = [
    {
      icon: Shield,
      title: "الأمان",
      description: "معايير أمان عالية لحماية سيارتك أثناء النقل"
    },
    {
      icon: Clock,
      title: "السرعة",
      description: "وصول سريع وخدمة فورية في جميع أنحاء جدة"
    },
    {
      icon: Award,
      title: "الموثوقية",
      description: "خدمة موثوقة وخبرة طويلة في مجال السطحة"
    },
    {
      icon: Users,
      title: "الاحترافية",
      description: "فريق مدرب ومؤهل لتقديم أفضل خدمة"
    }
  ];

  const equipment = [
    {
      icon: Truck,
      title: "سطحات حديثة",
      description: "أسطول من السطحات المتطورة والمجهزة بأحدث التقنيات"
    },
    {
      icon: Wrench,
      title: "معدات متخصصة",
      description: "أدوات ومعدات احترافية لجميع أنواع السيارات"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight font-arabic" data-testid="text-about-title">
              من نحن - سطحة جدة الرائدة
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-arabic" data-testid="text-about-subtitle">
              خدمة سحب ونقل السيارات الأكثر ثقة واحترافية في جدة منذ أكثر من 10 سنوات
            </p>
          </div>

          {/* About Us Section */}
          <section className="mb-16">
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-foreground mb-6 font-arabic" data-testid="text-our-story-title">
                قصتنا
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed font-arabic mb-6" data-testid="text-our-story-p1">
                  بدأت رحلتنا في عام 2013 بهدف واضح: تقديم خدمة سحب ونقل السيارات الأكثر احترافية وموثوقية في مدينة جدة. 
                  انطلقنا من إيماننا العميق بأن كل عميل يستحق خدمة سريعة وآمنة عندما يواجه مشكلة على الطريق.
                </p>
                <p className="text-muted-foreground leading-relaxed font-arabic mb-6" data-testid="text-our-story-p2">
                  خلال السنوات الماضية، نجحنا في بناء سمعة متميزة كواحدة من أفضل شركات السطحة في جدة، 
                  حيث خدمنا آلاف العملاء وساعدناهم في أصعب اللحظات على الطريق. رؤيتنا هي أن نكون الخيار الأول 
                  والأوثق لكل من يحتاج خدمة سطحة في جدة والمناطق المحيطة.
                </p>
                <p className="text-muted-foreground leading-relaxed font-arabic" data-testid="text-our-story-p3">
                  رسالتنا واضحة: نسعى لتقديم خدمة استثنائية تجمع بين السرعة والأمان والاحترافية، مع ضمان وصولنا 
                  إليك في أي مكان وأي وقت، لأننا نؤمن أن راحة العميل وأمان سيارته هما أولويتنا القصوى.
                </p>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center font-arabic" data-testid="text-values-title">
              قيمنا الأساسية
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow" data-testid={`card-value-${index}`}>
                    <CardContent className="space-y-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <IconComponent className="text-primary w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground font-arabic" data-testid={`text-value-title-${index}`}>
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground font-arabic" data-testid={`text-value-description-${index}`}>
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <div className="bg-primary/5 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6 font-arabic" data-testid="text-why-choose-title">
                لماذا تختارنا؟
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-muted-foreground leading-relaxed font-arabic mb-4" data-testid="text-why-choose-p1">
                    ما يميزنا عن غيرنا هو التزامنا الكامل بتقديم خدمة تفوق توقعاتك. نحن لا نكتفي بمجرد سحب سيارتك، 
                    بل نقدم تجربة شاملة تبدأ من لحظة اتصالك بنا وحتى وصول سيارتك بأمان إلى المكان المطلوب.
                  </p>
                  <p className="text-muted-foreground leading-relaxed font-arabic" data-testid="text-why-choose-p2">
                    فريقنا متاح 24 ساعة يومياً، 7 أيام في الأسبوع، مع ضمان الوصول إليك في أقل من 30 دقيقة 
                    في معظم مناطق جدة. كما أننا نحرص على تحديث معداتنا باستمرار لضمان أعلى معايير الأمان والكفاءة.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-foreground font-arabic">خدمة 24/7 بدون توقف</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-foreground font-arabic">وصول في أقل من 30 دقيقة</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-foreground font-arabic">أسعار منافسة وشفافة</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-foreground font-arabic">تأمين شامل على جميع السيارات</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team & Equipment */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center font-arabic" data-testid="text-team-title">
              فريقنا ومعداتنا
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-arabic" data-testid="text-team-experience-title">
                  خبرة الفريق
                </h3>
                <p className="text-muted-foreground leading-relaxed font-arabic mb-4" data-testid="text-team-experience-description">
                  يضم فريقنا مجموعة من أكثر المتخصصين خبرة في مجال سحب ونقل السيارات في جدة. 
                  جميع أعضاء الفريق حاصلون على تدريب متخصص ومعتمد، ويتمتعون بخبرة تزيد عن 5 سنوات في هذا المجال.
                </p>
                <p className="text-muted-foreground leading-relaxed font-arabic" data-testid="text-team-commitment">
                  نحن ملتزمون بالتطوير المستمر لمهارات فريقنا وتحديث معرفتهم بأحدث تقنيات وطرق السحب الآمن 
                  لجميع أنواع السيارات من الصغيرة إلى الكبيرة والفاخرة.
                </p>
              </div>
              
              <div className="space-y-4">
                {equipment.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={index} className="p-4" data-testid={`card-equipment-${index}`}>
                      <CardContent className="flex items-center space-x-4 space-x-reverse">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="text-primary w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-foreground font-arabic" data-testid={`text-equipment-title-${index}`}>
                            {item.title}
                          </h4>
                          <p className="text-sm text-muted-foreground font-arabic" data-testid={`text-equipment-description-${index}`}>
                            {item.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-primary rounded-2xl p-8 text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4 font-arabic" data-testid="text-cta-about-title">
              ثق بخبرتنا واتصل بنا الآن
            </h2>
            <p className="text-xl mb-6 font-arabic" data-testid="text-cta-about-description">
              لأي طارئ على الطريق، نحن هنا لخدمتك في أي وقت
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+966500000000" 
                className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-xl font-bold transition-all font-arabic"
                data-testid="button-about-call"
              >
                اتصل الآن: +966 50 000 0000
              </a>
              <a 
                href="https://wa.me/966500000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-bold transition-all font-arabic"
                data-testid="button-about-whatsapp"
              >
                راسلنا عبر واتساب
              </a>
            </div>
          </section>
        </div>
      </main>
      
      <FixedContactBar />
    </div>
  );
}