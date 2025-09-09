
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, Building, User, Phone } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Empreendimentos", href: "/empreendimentos", icon: Building },
    { name: "Sobre", href: "/sobre", icon: User },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const handleContactClick = () => {
    if (location.pathname === "/") {
      // Se já estamos na home, apenas rola para o formulário
      const contactSection = document.querySelector('#contact-form');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Se não estamos na home, navega para lá e depois rola
      navigate("/");
      setTimeout(() => {
        const contactSection = document.querySelector('#contact-form');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            {/* <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">RS</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-slate-800 text-base sm:text-lg">Ralph Santos</div>
              <div className="text-xs text-slate-600">Corretor de Imóveis</div>
            </div>
            <div className="block sm:hidden">
              <div className="font-bold text-slate-800 text-sm">Ralph Santos</div>
            </div> */}
            <img
              src="/logotipo/logotipo.png"
              alt="Logo"
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors text-sm xl:text-base ${
                  isActive(item.href)
                    ? "text-primary bg-primary-700 hover:bg-muted"
                    : "text-primary hover:text-primary hover:bg-muted"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
            <button
              onClick={handleContactClick}
              className="flex items-center space-x-1 px-3 py-2 rounded-md transition-colors text-sm xl:text-base text-primary hover:text-primary hover:bg-muted"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">Contato</span>
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {/* <Button variant="outline" size="sm" className="text-xs sm:text-sm px-2 sm:px-4">
              <span className="hidden sm:inline">(11) 97151-1943</span>
              <span className="sm:hidden">Ligar</span>
            </Button> */}
            <Button 
              size="sm" 
              className="bg-primary text-xs sm:text-sm px-2 sm:px-4"
              onClick={handleContactClick}
            >
              <Phone className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Fale Comigo</span>
              <span className="sm:hidden">Contato</span>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm" className="p-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 md:w-96">
              <div className="flex flex-col h-full">
                <div className="flex items-center space-x-2 pb-6 border-b">
                  <img
                    src="/logotipo/logotipo.png"
                    alt="Logo"
                    className="h-8 sm:h-10 w-auto items-center"
                  />
                </div>
                <nav className="flex-1 py-6">
                  <div className="space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                          isActive(item.href)
                            ? "text-primary bg-primary-700 hover:bg-muted"
                            : "text-primary hover:text-primary hover:bg-muted"
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    ))}
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        handleContactClick();
                      }}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-primary hover:text-primary hover:bg-muted w-full text-left"
                    >
                      <Phone className="h-5 w-5" />
                      <span className="font-medium">Contato</span>
                    </button>
                  </div>
                </nav>

                <div className="space-y-3 pt-6 border-t">
                  <Button variant="outline" className="w-full">
                    (11) 97151-1943
                  </Button>
                  <Button 
                    className="w-full bg-primary"
                    onClick={() => {
                      setIsOpen(false);
                      handleContactClick();
                    }}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Fale Comigo
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
