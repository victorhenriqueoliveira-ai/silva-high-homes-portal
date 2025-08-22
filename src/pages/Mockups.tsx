import { Dumbbell, Car, Shield, Star } from "lucide-react";
import { gerarSlug } from "../lib/utils";

export const empreendimentos = [
    {
        fachada: "/empreendimentos/BoutiqueByLivingCampoBelo/fachada.jpeg",
        images: [
            "/empreendimentos/BoutiqueByLivingCampoBelo/fachada.jpeg",
            "/empreendimentos/BoutiqueByLivingIpiranga/fachada.png",
            "/empreendimentos/VistaCyrelaVeneza/fachada.png",
            "/empreendimentos/ARQMoocaByLiving/fachada.png",
            "/empreendimentos/BrooklinSensesByCyrela/fachada.png",
            "/empreendimentos/BoutiqueByLivingCampoBelo/fachada.jpeg"
        ],
        id: 1,
        title: "Home Boutique By Living Campo Belo",
        location: "Campo Belo - São Paulo",
        type: "Residencial",
        units: "Pendente",
        status: "Lançamento",
        description: "Apartamentos de alto padrão com acabamentos luxuosos e localização privilegiada em uma área nobre da cidade.",
        features: ["3-4 dormitórios", "Varanda gourmet", "2 vagas", "Área de lazer completa"],
        priceRange: "Valor - Pendente",
        deliveryDate: "Pendente",
        developer: "Construtora Premium SP",
        address: "Rua dos Exemplos, 123 - Centro, São Paulo - SP",
        details: {
            area: "85m² a 140m²",
            floors: "25 andares",
            unitsPerFloor: "4 a 6 unidades",
            parking: "2 a 3 vagas por unidade"
        },
        amenities: [
            { icon: Dumbbell, name: "Academia completa", description: "Equipamentos modernos e personal trainer" },
            { icon: Car, name: "Valet parking", description: "Serviço de manobrista 24h" },
            { icon: Shield, name: "Segurança 24h", description: "Portaria e monitoramento integral" },
            { icon: Star, name: "Concierge", description: "Serviços exclusivos para moradores" }
        ],
        floorPlans: [
            { title: "Titulo", type: "Pendente dormitórios", area: "26m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg" },
            { title: "Titulo", type: "Pendente dormitórios", area: "146m²", plantaImg: "/empreendimentos/BoutiqueByLivingIpiranga/planta1.png" },
        ]
    },
    {
        fachada: "/empreendimentos/VistaCyrelaVenezia/fachada.png",
        images: [
            "/empreendimentos/VistaCyrelaVenezia/fachada.png",
            "/empreendimentos/VistaCyrelaVenezia/foto1.png",
            "/empreendimentos/VistaCyrelaVenezia/foto2.png",
            "/empreendimentos/VistaCyrelaVenezia/foto3.png",
            "/empreendimentos/VistaCyrelaVenezia/foto4.png",
            "/empreendimentos/VistaCyrelaVenezia/foto5.png",
            "/empreendimentos/VistaCyrelaVenezia/foto6.png",
            "/empreendimentos/VistaCyrelaVenezia/foto7.png",
            "/empreendimentos/VistaCyrelaVenezia/foto8.png",
            "/empreendimentos/VistaCyrelaVenezia/foto9.png",
            "/empreendimentos/VistaCyrelaVenezia/foto10.png",
            "/empreendimentos/VistaCyrelaVenezia/foto11.png",
            "/empreendimentos/VistaCyrelaVenezia/foto12.png",
            "/empreendimentos/VistaCyrelaVenezia/foto13.png",
            "/empreendimentos/VistaCyrelaVenezia/foto14.png",
            "/empreendimentos/VistaCyrelaVenezia/foto15.png",
            "/empreendimentos/VistaCyrelaVenezia/foto16.png",
            "/empreendimentos/VistaCyrelaVenezia/foto17.png",
            "/empreendimentos/VistaCyrelaVenezia/foto18.png",
            "/empreendimentos/VistaCyrelaVenezia/foto19.png",
            "/empreendimentos/VistaCyrelaVenezia/foto20.png",
            "/empreendimentos/VistaCyrelaVenezia/foto21.png",
            "/empreendimentos/VistaCyrelaVenezia/foto22.png",
            "/empreendimentos/VistaCyrelaVenezia/foto23.png",
            "/empreendimentos/VistaCyrelaVenezia/foto24.png",
            "/empreendimentos/VistaCyrelaVenezia/foto25.png",
            "/empreendimentos/VistaCyrelaVenezia/foto26.png",
            "/empreendimentos/VistaCyrelaVenezia/foto27.png",
            "/empreendimentos/VistaCyrelaVenezia/foto28.png",
            "/empreendimentos/VistaCyrelaVenezia/foto29.png",
        ],
        id: 2,
        title: "VISTA CYRELA - Venezia",
        location: "Jardim Everest - São Paulo",
        type: "Residencial",
        units: "80 unidades",
        status: "Lançamento",
        description: "Torres residenciais com conceito sustentável e design contemporâneo em um dos bairros mais nobres.",
        features: ["2-3 dormitórios", "Terraço privativo", "1-2 vagas", "Spa e fitness"],
        priceRange: "Valor - Pendente",
        deliveryDate: "Dezembro 2025",
        developer: "Construtora Premium SP",
        address: "Rua dos Exemplos, 123 - Centro, São Paulo - SP",
        details: {
            area: "464,50m² a 883,50m²",
            floors: "55 andares",
            unitsPerFloor: "4 a 6 unidades",
            parking: "2 a 3 vagas por unidade"
        },
        amenities: [
            { icon: Dumbbell, name: "Academia completa", description: "Equipamentos modernos e personal trainer" },
            { icon: Car, name: "Valet parking", description: "Serviço de manobrista 24h" },
            { icon: Shield, name: "Segurança 24h", description: "Portaria e monitoramento integral" },
            { icon: Star, name: "Concierge", description: "Serviços exclusivos para moradores" }
        ],
        floorPlans: [
            { title: "Torre 1 | Final 1 - Planta padrão", type: "4 Suítes + Sala íntima", area: "515m²", price: "A partir de R$ 800.000", plantaImg: "/empreendimentos/VistaCyrelaVenezia/planta1.png" },
            { title: "Torre 1 | Final 1 - Planta opção 1", type: "2 Suítes + Private GYM", area: "515m²", price: "A partir de R$ 1.000.000", plantaImg: "/empreendimentos/VistaCyrelaVenezia/planta2.png" },
            { title: "Torre 1 | Final 1 - Planta opção 2", type: "3 Suítes + Sala íntima + Adega", area: "515m²", price: "A partir de R$ 1.200.000", plantaImg: "/empreendimentos/VistaCyrelaVenezia/planta3.png" },
            { title: "Torre 1 | Final 1 - Planta opção 3", type: "2 Suítes + Sala íntima + Sala ampliada", area: "515m²", price: "A partir de R$ 1.200.000", plantaImg: "/empreendimentos/VistaCyrelaVenezia/planta4.png" },
            { title: "Torre 1 | Final 1 - Planta opção 4", type: "3 Suítes + Sala ampliada com biblioteca", area: "515m²", price: "A partir de R$ 1.200.000", plantaImg: "/empreendimentos/VistaCyrelaVenezia/planta5.png" },
            { title: "Torre 1 | Final 1 - Planta decorado", type: "3 Suítes + Sala íntima", area: "515m²", price: "A partir de R$ 1.200.000", plantaImg: "/empreendimentos/VistaCyrelaVenezia/planta6.png" },
            { title: "Torre 1 | Final 1 - Planta padrão", type: "4 Suítes + Sala íntima", area: "464,50m²", price: "A partir de R$ 1.200.000", plantaImg: "/empreendimentos/VistaCyrelaVenezia/planta7.png" },
            { title: "Torre 1 | Final 1 - Planta padrão garden", type: "4 Suítes + Sala íntima", area: "639m²", price: "A partir de R$ 1.200.000", plantaImg: "/empreendimentos/VistaCyrelaVenezia/planta8.png" },
            { title: "Torre 1 | Final 1 - Planta opção 1", type: "3 Suítes + Sala íntima", area: "464,50m²", price: "A partir de R$ 1.200.000", plantaImg: "/empreendimentos/VistaCyrelaVenezia/planta9.png" },
            { title: "Torre 1 | Final 1 - Planta opção 2", type: "2 Suítes + Sala ampliada com adega", area: "464,50m²", price: "A partir de R$ 1.200.000", plantaImg: "/empreendimentos/VistaCyrelaVenezia/planta10.png" },
            { title: "Torre 1 | Final 1 - Planta opção 3", type: "2 Suítes + Sala íntima + Ateliê", area: "464,50m²", price: "A partir de R$ 1.200.000", plantaImg: "/empreendimentos/VistaCyrelaVenezia/planta11.png" },
            { title: "Torre 1 | Final 1 - Planta opção 4", type: "3 Suítes + Sala íntima e Sala comercial ampliadas + Biblioteca", area: "464,50m²", price: "A partir de R$ 1.200.000", plantaImg: "/empreendimentos/VistaCyrelaVenezia/planta12.png" },
            { title: "Torre 1 | Final 1 - Planta padrão casa 44 PAV", type: "Pavimento Inferior - 4 Suítes + Terraço íntimo", area: "883,50m²", price: "A partir de R$ 1.200.000", plantaImg: "/empreendimentos/VistaCyrelaVenezia/planta13.png" },
            { title: "Torre 1 | Final 1 - Planta padrão casa 48 PAV", type: "Pavimento Inferior - 4 Suítes + Terraço íntimo", area: "789m²", price: "A partir de R$ 1.200.000", plantaImg: "/empreendimentos/VistaCyrelaVenezia/planta14.png" },
            { title: "Torre 1 | Final 1 - Planta padrão casa 46 e 50 PAV", type: "Pavimento Inferior - 4 Suítes + Terraço íntimo", area: "811m²", price: "A partir de R$ 1.200.000", plantaImg: "/empreendimentos/VistaCyrelaVenezia/planta15.png" },
            { title: "Torre 1 | Final 1 - Planta padrão casa 52 PAV", type: "Pavimento Inferior - 4 Suítes + Terraço íntimo", area: "778m²", price: "A partir de R$ 1.200.000", plantaImg: "/empreendimentos/VistaCyrelaVenezia/planta16.png" },
            { title: "Torre 1 | Final 2 - Planta padrão casa 48 PAV", type: "Pavimento Inferior - 4 Suítes + Terraço íntimo", area: "705m²", price: "A partir de R$ 1.200.000", plantaImg: "/empreendimentos/VistaCyrelaVenezia/planta17.png" },
            { title: "Torre 1 | Final 2 - Planta padrão casa 46 e 50 PAV", type: "Pavimento Inferior - 4 Suítes + Terraço íntimo", area: "717m²", price: "A partir de R$ 1.200.000", plantaImg: "/empreendimentos/VistaCyrelaVenezia/planta18.png" },
            { title: "Torre 1 | Final 2 - Planta padrão casa 52 PAV", type: "Pavimento Inferior - 4 Suítes + Terraço íntimo", area: "695m²", price: "A partir de R$ 1.200.000", plantaImg: "/empreendimentos/VistaCyrelaVenezia/planta19.png" },
        ]
    },
    {
        fachada: "/empreendimentos/EPICJardimEuropa/fachada.png",
        id: 3,
        title: "EPIC Jardim Europa Design By PENINFARINA",
        location: "Jardim Europa - São Paulo",
        type: "Residencial",
        units: "200 salas",
        status: "Lançamento",
        description: "Complexo comercial moderno com tecnologia de ponta e facilidades corporativas de última geração.",
        features: ["Salas 40-200m²", "Coworking", "Heliponto", "Concierge 24h"],
        priceRange: "Valor - Pendente",
        deliveryDate: "Dezembro 2025",
        developer: "Construtora Premium SP",
        address: "Rua dos Exemplos, 123 - Centro, São Paulo - SP",
        details: {
            area: "85m² a 140m²",
            floors: "25 andares",
            unitsPerFloor: "4 a 6 unidades",
            parking: "2 a 3 vagas por unidade"
        },
        amenities: [
            { icon: Dumbbell, name: "Academia completa", description: "Equipamentos modernos e personal trainer" },
            { icon: Car, name: "Valet parking", description: "Serviço de manobrista 24h" },
            { icon: Shield, name: "Segurança 24h", description: "Portaria e monitoramento integral" },
            { icon: Star, name: "Concierge", description: "Serviços exclusivos para moradores" }
        ],
        floorPlans: [
            { title: "Titulo", type: "3 dormitórios", area: "85m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg"},
            { title: "Titulo", type: "4 dormitórios", area: "120m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg" },
            { title: "Titulo", type: "Cobertura", area: "140m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg"}
        ]
    },
    {
        fachada: "/empreendimentos/BoutiqueByLivingIpiranga/fachada.png",
        id: 4,
        title: "Home Boutique By Living Ipiranga",
        location: "Ipiranga - São Paulo",
        type: "Residencial",
        units: "60 unidades",
        status: "Em Construção",
        description: "Apartamentos de luxo com vista panorâmica e acabamentos importados em condomínio exclusivo.",
        features: ["4-5 dormitórios", "Master suite", "3-4 vagas", "Adega privativa"],
        priceRange: "Valor - Pendente",
        deliveryDate: "Dezembro 2025",
        developer: "Construtora Premium SP",
        address: "Rua dos Exemplos, 123 - Centro, São Paulo - SP",
        details: {
            area: "85m² a 140m²",
            floors: "25 andares",
            unitsPerFloor: "4 a 6 unidades",
            parking: "2 a 3 vagas por unidade"
        },
        amenities: [
            { icon: Dumbbell, name: "Academia completa", description: "Equipamentos modernos e personal trainer" },
            { icon: Car, name: "Valet parking", description: "Serviço de manobrista 24h" },
            { icon: Shield, name: "Segurança 24h", description: "Portaria e monitoramento integral" },
            { icon: Star, name: "Concierge", description: "Serviços exclusivos para moradores" }
        ],
        floorPlans: [
            { title: "Titulo", type: "3 dormitórios", area: "85m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg"},
            { title: "Titulo", type: "4 dormitórios", area: "120m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg"},
            { title: "Titulo", type: "Cobertura", area: "140m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg"}
        ]
    },
    {
        fachada: "/empreendimentos/ARQMoocaByLiving/fachada.png",
        id: 5,
        title: "ARQ Mooca By Living",
        location: "Mooca - São Paulo",
        type: "Residencial",
        units: "150 salas",
        status: "Em Construção",
        description: "Edifício inteligente com certificação sustentável na principal avenida corporativa de São Paulo.",
        features: ["Salas 30-300m²", "Automação total", "Terraço corporativo", "Estacionamento robótico"],
        priceRange: "Valor - Pendente",
        deliveryDate: "Dezembro 2025",
        developer: "Construtora Premium SP",
        address: "Rua dos Exemplos, 123 - Centro, São Paulo - SP",
        details: {
            area: "85m² a 140m²",
            floors: "25 andares",
            unitsPerFloor: "4 a 6 unidades",
            parking: "2 a 3 vagas por unidade"
        },
        amenities: [
            { icon: Dumbbell, name: "Academia completa", description: "Equipamentos modernos e personal trainer" },
            { icon: Car, name: "Valet parking", description: "Serviço de manobrista 24h" },
            { icon: Shield, name: "Segurança 24h", description: "Portaria e monitoramento integral" },
            { icon: Star, name: "Concierge", description: "Serviços exclusivos para moradores" }
        ],
        floorPlans: [
            { title: "Titulo", type: "3 dormitórios", area: "85m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg"},
            { title: "Titulo", type: "4 dormitórios", area: "120m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg"},
            { title: "Titulo", type: "Cobertura", area: "140m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg"}
        ]
    },
    {
        fachada: "/empreendimentos/LivingUniqueSaúde/fachada.png",
        id: 6,
        title: "Living Unique Saúde",
        location: "Saúde - São Paulo",
        type: "Residencial",
        units: "100 unidades",
        status: "Em Construção",
        description: "Condomínio sustentável com conceito biofílico e soluções ecológicas inovadoras.",
        features: ["2-4 dormitórios", "Jardim vertical", "2 vagas", "Horta comunitária"],
        priceRange: "Valor - Pendente",
        deliveryDate: "Dezembro 2025",
        developer: "Construtora Premium SP",
        address: "Rua dos Exemplos, 123 - Centro, São Paulo - SP",
        details: {
            area: "85m² a 140m²",
            floors: "25 andares",
            unitsPerFloor: "4 a 6 unidades",
            parking: "2 a 3 vagas por unidade"
        },
        amenities: [
            { icon: Dumbbell, name: "Academia completa", description: "Equipamentos modernos e personal trainer" },
            { icon: Car, name: "Valet parking", description: "Serviço de manobrista 24h" },
            { icon: Shield, name: "Segurança 24h", description: "Portaria e monitoramento integral" },
            { icon: Star, name: "Concierge", description: "Serviços exclusivos para moradores" }
        ],
        floorPlans: [
            { title: "Titulo", type: "3 dormitórios", area: "85m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg"},
            { title: "Titulo", type: "4 dormitórios", area: "120m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg"},
            { title: "Titulo", type: "Cobertura", area: "140m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg"}
        ]
    },
    {
        fachada: "/empreendimentos/TheResidenceBrooklinByLiving/fachada.png",
        id: 7,
        title: "The Residence Brooklin By Living",
        location: "Vila Mariana - Sao Paulo",
        type: "Residencial",
        units: "70 unidades",
        status: "Lançamento",
        description: "Apartamentos de alto padrão com acabamentos luxuosos e localização privilegiada.",
        features: ["3-4 dormitórios", "Varanda gourmet", "2-3 vagas", "Área de lazer completa"],
        priceRange: "Valor - Pendente",
        deliveryDate: "Dezembro 2025",
        developer: "Construtora Premium SP",
        address: "Rua dos Exemplos, 123 - Centro, São Paulo - SP",
        details: {
            area: "85m² a 140m²",
            floors: "25 andares",
            unitsPerFloor: "4 a 6 unidades",
            parking: "2 a 3 vagas por unidade"
        },
        amenities: [
            { icon: Dumbbell, name: "Academia completa", description: "Equipamentos modernos e personal trainer" },
            { icon: Car, name: "Valet parking", description: "Serviço de manobrista 24h" },
            { icon: Shield, name: "Segurança 24h", description: "Portaria e monitoramento integral" },
            { icon: Star, name: "Concierge", description: "Serviços exclusivos para moradores" }
        ],
        floorPlans: [
            { title: "Titulo", type: "3 dormitórios", area: "85m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg"},
            { title: "Titulo", type: "4 dormitórios", area: "120m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg"},
            { title: "Titulo", type: "Cobertura", area: "140m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg"}
        ]
    },
    {
        fachada: "/empreendimentos/BrooklinSensesByCyrela/fachada.png",
        id: 8,
        title: "Brooklin SENSES BY CYRELA",
        location: "Brooklin - Sao Paulo",
        type: "Residencial",
        units: "70 unidades",
        status: "Lançamento",
        description: "Apartamentos de alto padrão com acabamentos luxuosos e localização privilegiada.",
        features: ["3-4 dormitórios", "Varanda gourmet", "2-3 vagas", "Área de lazer completa"],
        priceRange: "Valor - Pendente",
        deliveryDate: "Dezembro 2025",
        developer: "Construtora Premium SP",
        address: "Rua dos Exemplos, 123 - Centro, São Paulo - SP",
        details: {
            area: "85m² a 140m²",
            floors: "25 andares",
            unitsPerFloor: "4 a 6 unidades",
            parking: "2 a 3 vagas por unidade"
        },
        amenities: [
            { icon: Dumbbell, name: "Academia completa", description: "Equipamentos modernos e personal trainer" },
            { icon: Car, name: "Valet parking", description: "Serviço de manobrista 24h" },
            { icon: Shield, name: "Segurança 24h", description: "Portaria e monitoramento integral" },
            { icon: Star, name: "Concierge", description: "Serviços exclusivos para moradores" }
        ],
        floorPlans: [
            { title: "Titulo", type: "3 dormitórios", area: "85m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg"},
            { title: "Titulo", type: "4 dormitórios", area: "120m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg"},
            { title: "Titulo", type: "Cobertura", area: "140m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg"}
        ]
    },
    {
        fachada: "/empreendimentos/VistaCyrelaMilano/fachada.png",
        id: 9,
        title: "VISTA CYRELA - Milano",
        location: "Jardim Everest - Sao Paulo",
        type: "Residencial",
        units: "70 unidades",
        status: "Lançamento",
        description: "Apartamentos de alto padrão com acabamentos luxuosos e localização privilegiada.",
        features: ["3-4 dormitórios", "Varanda gourmet", "2-3 vagas", "Área de lazer completa"],
        priceRange: "Valor - Pendente",
        deliveryDate: "Dezembro 2025",
        developer: "Construtora Premium SP",
        address: "Rua dos Exemplos, 123 - Centro, São Paulo - SP",
        details: {
            area: "85m² a 140m²",
            floors: "25 andares",
            unitsPerFloor: "4 a 6 unidades",
            parking: "2 a 3 vagas por unidade"
        },
        amenities: [
            { icon: Dumbbell, name: "Academia completa", description: "Equipamentos modernos e personal trainer" },
            { icon: Car, name: "Valet parking", description: "Serviço de manobrista 24h" },
            { icon: Shield, name: "Segurança 24h", description: "Portaria e monitoramento integral" },
            { icon: Star, name: "Concierge", description: "Serviços exclusivos para moradores" }
        ],
        floorPlans: [
            { title: "Titulo", type: "3 dormitórios", area: "85m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg"},
            { title: "Titulo", type: "4 dormitórios", area: "120m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg"},
            { title: "Titulo", type: "Cobertura", area: "140m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg"}
        ]
    },
    {
        fachada: "/empreendimentos/TheEditionByLivingVilaMariana/fachada.png",
        id: 10,
        title: "The Edition By Living Vila Mariana",
        location: "Vila Mariana - Sao Paulo",
        type: "Residencial",
        units: "70 unidades",
        status: "Em Construção",
        description: "Apartamentos de alto padrão com acabamentos luxuosos e localização privilegiada.",
        features: ["3-4 dormitórios", "Varanda gourmet", "2-3 vagas", "Área de lazer completa"],
        priceRange: "Valor - Pendente",
        deliveryDate: "Dezembro 2025",
        developer: "Construtora Premium SP",
        address: "Rua dos Exemplos, 123 - Centro, São Paulo - SP",
        details: {
            area: "85m² a 140m²",
            floors: "25 andares",
            unitsPerFloor: "4 a 6 unidades",
            parking: "2 a 3 vagas por unidade"
        },
        amenities: [
            { icon: Dumbbell, name: "Academia completa", description: "Equipamentos modernos e personal trainer" },
            { icon: Car, name: "Valet parking", description: "Serviço de manobrista 24h" },
            { icon: Shield, name: "Segurança 24h", description: "Portaria e monitoramento integral" },
            { icon: Star, name: "Concierge", description: "Serviços exclusivos para moradores" }
        ],
        floorPlans: [
            { title: "Titulo", type: "3 dormitórios", area: "85m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg"},
            { title: "Titulo", type: "4 dormitórios", area: "120m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg"},
            { title: "Titulo", type: "Cobertura", area: "140m²", plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/planta1.jpeg" }
        ]
    }
].map(e => ({ ...e, slug: gerarSlug(e.title) }));