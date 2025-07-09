
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-[#C69755] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">RS</span>
              </div>
              <div>
                <div className="font-bold text-lg">Rafael Silva</div>
                <div className="text-sm text-slate-400">CRECI: 123.456-SP</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Especialista em empreendimentos de alto padrão. Seu parceiro de confiança para os melhores investimentos imobiliários.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navegação</h3>
            <div className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Empreendimentos", href: "/empreendimentos" },
                { name: "Sobre", href: "/sobre" },
                { name: "Contato", href: "/contato" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-slate-400 hover:text-[#C69755] transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-[#C69755]" />
                <span className="text-slate-400">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-[#C69755]" />
                <span className="text-slate-400">rafael@email.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-[#C69755]" />
                <span className="text-slate-400">São Paulo - SP</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: MessageCircle, href: "#", label: "WhatsApp" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-slate-400 text-xs mt-4">
              Acompanhe as novidades e lançamentos exclusivos
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 Rafael Silva - Corretor de Imóveis. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
