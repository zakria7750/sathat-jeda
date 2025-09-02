import { useEffect } from "react";
import Header from "@/components/Header";
import FixedContactBar from "@/components/FixedContactBar";
import { Calendar, Clock, User, ArrowLeft, AlertTriangle, Shield, Phone, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { updatePageSEO } from "@/lib/seo";

export default function Blog() {
  useEffect(() => {
    updatePageSEO(
      "مدونة سطحة جدة - نصائح وخدمات السيارات | أحدث المقالات",
      "مدونة سطحة جدة تقدم نصائح مفيدة حول صيانة السيارات، السلامة على الطريق، وكيفية التعامل مع الطوارئ. معلومات قيمة من خبراء نقل السيارات في جدة."
    );
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "كيفية التعامل مع عطل السيارة على الطريق السريع",
      summary: "خطوات مهمة للحفاظ على سلامتك عند تعطل سيارتك على الطريق السريع. نصائح عملية من خبراء سطحة جدة للتعامل مع الطوارئ بأمان.",
      date: "15 ديسمبر 2024",
      readTime: "5 دقائق",
      category: "السلامة على الطريق",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 2,
      title: "علامات تدل على احتياج سيارتك للصيانة الفورية",
      summary: "تعرف على أهم العلامات التحذيرية التي تشير إلى ضرورة صيانة سيارتك فوراً. دليل شامل لتجنب الأعطال المفاجئة على الطريق.",
      date: "12 ديسمبر 2024",
      readTime: "7 دقائق",
      category: "صيانة السيارات",
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 3,
      title: "أفضل الممارسات لنقل السيارات الفاخرة بأمان",
      summary: "احتياطات خاصة لنقل السيارات الفاخرة والكلاسيكية. كيف تضمن وصول سيارتك بحالة مثالية مع خدمات سطحة جدة المتخصصة.",
      date: "8 ديسمبر 2024",
      readTime: "6 دقائق",
      category: "نقل السيارات",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 4,
      title: "كيفية اختيار خدمة السطحة المناسبة في جدة",
      summary: "معايير مهمة لاختيار خدمة سطحة موثوقة ومحترفة. ما الذي يجب أن تبحث عنه عند الحاجة لخدمة نقل السيارات الطارئة.",
      date: "5 ديسمبر 2024",
      readTime: "4 دقائق",
      category: "دليل العملاء",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 5,
      title: "نصائح للحفاظ على بطارية سيارتك في فصل الشتاء",
      summary: "كيفية العناية ببطارية السيارة خلال الأجواء الباردة. خطوات بسيطة لتجنب مشاكل البطارية والحاجة لخدمة المساعدة على الطريق.",
      date: "1 ديسمبر 2024",
      readTime: "5 دقائق",
      category: "صيانة السيارات",
      image: "https://images.unsplash.com/photo-1517524206127-6d22d62d07fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 6,
      title: "الاستعداد لرحلات العطلات: دليل فحص السيارة",
      summary: "قائمة فحص شاملة لسيارتك قبل السفر للعطلات. كيف تتجنب المشاكل الميكانيكية أثناء الرحلات الطويلة خارج جدة.",
      date: "28 نوفمبر 2024",
      readTime: "8 دقائق",
      category: "السفر والرحلات",
      image: "https://images.unsplash.com/photo-1562141961-3e20a95da853?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    }
  ];

  const quickTips = [
    {
      icon: AlertTriangle,
      title: "عند العطل المفاجئ",
      tip: "أوقف السيارة في مكان آمن، شغل الأضواء التحذيرية، واتصل بسطحة جدة فوراً"
    },
    {
      icon: Shield,
      title: "السلامة أولاً",
      tip: "لا تحاول إصلاح السيارة على الطريق السريع، انتظر وصول المختصين"
    },
    {
      icon: Phone,
      title: "الاتصال السريع",
      tip: "احفظ رقم سطحة جدة في هاتفك: +966 50 000 0000 للطوارئ"
    },
    {
      icon: CheckCircle,
      title: "الفحص الدوري",
      tip: "افحص الإطارات والزيت والمياه قبل الرحلات الطويلة"
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight font-arabic" data-testid="text-blog-main-title">
              مدونة سطحة جدة - نصائح وخدمات السيارات
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-arabic" data-testid="text-blog-intro">
              مصدرك الموثوق للنصائح العملية حول صيانة السيارات والسلامة على الطريق. خبرة متراكمة من فريق سطحة جدة المحترف لمساعدتك في الحفاظ على سيارتك وتجنب الطوارئ
            </p>
          </div>

          {/* Blog Posts Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center font-arabic" data-testid="text-recent-articles-title">
              أحدث المقالات
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card 
                  key={post.id}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  data-testid={`card-blog-post-${post.id}`}
                >
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                    data-testid={`img-blog-post-${post.id}`}
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4 space-x-reverse">
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <Calendar className="w-4 h-4" />
                        <span className="font-arabic" data-testid={`text-blog-date-${post.id}`}>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <Clock className="w-4 h-4" />
                        <span className="font-arabic" data-testid={`text-blog-readtime-${post.id}`}>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium font-arabic" data-testid={`text-blog-category-${post.id}`}>
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 leading-tight font-arabic" data-testid={`text-blog-title-${post.id}`}>
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-arabic mb-4" data-testid={`text-blog-summary-${post.id}`}>
                      {post.summary}
                    </p>
                    <button className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors font-arabic" data-testid={`button-read-more-${post.id}`}>
                      اقرأ المزيد
                      <ArrowLeft className="mr-2 w-4 h-4" />
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Quick Tips Section */}
          <section className="mb-16">
            <div className="bg-primary/5 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center font-arabic" data-testid="text-quick-tips-title">
                نصائح سريعة للسلامة على الطريق
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickTips.map((tip, index) => {
                  const IconComponent = tip.icon;
                  return (
                    <div key={index} className="text-center" data-testid={`tip-${index}`}>
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="text-white w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 font-arabic" data-testid={`text-tip-title-${index}`}>
                        {tip.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-arabic" data-testid={`text-tip-description-${index}`}>
                        {tip.tip}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Important Information Section */}
          <section className="mb-16">
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-foreground mb-6 font-arabic" data-testid="text-important-info-title">
                معلومات مهمة لكل سائق في جدة
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-arabic" data-testid="text-emergency-steps-title">
                    خطوات التعامل مع الطوارئ
                  </h3>
                  <ul className="space-y-3 text-muted-foreground font-arabic">
                    <li className="flex items-start" data-testid="text-emergency-step-1">
                      <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                      حافظ على الهدوء وأوقف السيارة في مكان آمن
                    </li>
                    <li className="flex items-start" data-testid="text-emergency-step-2">
                      <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                      شغل الأضواء التحذيرية وضع المثلث العاكس
                    </li>
                    <li className="flex items-start" data-testid="text-emergency-step-3">
                      <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                      اتصل بسطحة جدة على الرقم: +966 50 000 0000
                    </li>
                    <li className="flex items-start" data-testid="text-emergency-step-4">
                      <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                      انتظر في مكان آمن بعيداً عن السيارة والطريق
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-arabic" data-testid="text-maintenance-schedule-title">
                    جدول الصيانة الأساسية
                  </h3>
                  <ul className="space-y-3 text-muted-foreground font-arabic">
                    <li className="flex items-center" data-testid="text-maintenance-item-1">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      فحص الزيت والمياه كل أسبوعين
                    </li>
                    <li className="flex items-center" data-testid="text-maintenance-item-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      فحص ضغط الإطارات شهرياً
                    </li>
                    <li className="flex items-center" data-testid="text-maintenance-item-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      تغيير الزيت كل 5000-10000 كم
                    </li>
                    <li className="flex items-center" data-testid="text-maintenance-item-4">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      فحص شامل قبل الرحلات الطويلة
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-primary rounded-2xl p-8 text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4 font-arabic" data-testid="text-cta-blog-title">
              هل تحتاج مساعدة أو استشارة مجانية؟
            </h2>
            <p className="text-xl mb-6 font-arabic" data-testid="text-cta-blog-description">
              فريق سطحة جدة جاهز لتقديم النصائح والمساعدة في أي وقت
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handlePhoneCall}
                className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg font-arabic"
                data-testid="button-blog-call"
              >
                <Phone className="mr-3 w-5 h-5" />
                اتصل للاستشارة: +966 50 000 0000
              </Button>
              <Button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg font-arabic"
                data-testid="button-blog-whatsapp"
              >
                <svg className="mr-3 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
                </svg>
                تواصل عبر واتساب للنصائح
              </Button>
            </div>
          </section>
        </div>
      </main>
      
      <FixedContactBar />
    </div>
  );
}