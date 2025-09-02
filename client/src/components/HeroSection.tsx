import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handlePhoneCall = () => {
    window.location.href = "tel:+966500000000";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/966500000000", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Professional tow truck providing roadside assistance service */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 hero-overlay" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-arabic" data-testid="text-hero-title">
          سطحة جدة المتنقلة
          <span className="block text-accent">خدمة 24 ساعة</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-arabic" data-testid="text-hero-description">
          خدمة سحب ونقل السيارات الأسرع والأوثق في جدة. نصل إليك في أي مكان وأي وقت بفريق محترف ومعدات حديثة
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={handlePhoneCall}
            className="inline-flex items-center bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg font-arabic"
            data-testid="button-call-now"
          >
            <Phone className="mr-3 w-5 h-5" />
            اتصل الآن - خدمة فورية
          </Button>
          <Button
            onClick={handleWhatsApp}
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg font-arabic"
            data-testid="button-whatsapp"
          >
            <svg className="mr-3 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
            </svg>
            واتساب
          </Button>
        </div>
      </div>
    </section>
  );
}
