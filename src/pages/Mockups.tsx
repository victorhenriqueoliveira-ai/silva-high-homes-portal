import { Dumbbell, Car, Shield, Star } from "lucide-react";
import { gerarSlug } from "../lib/utils";

export const empreendimentos = [
    {
        fachada: "/empreendimentos/BoutiqueByLivingCampoBelo/fachada.jpeg",
        id: 1,
        title: "Home Boultique By Living Campo Belo",
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
            { type: "Pendente dormitórios", area: "26m²", price: "Valores - Pendente" , plantaImg: "/empreendimentos/BoutiqueByLivingCampoBelo/fachada.jpeg" },
            { type: "Pendente dormitórios", area: "146m²", price: "Valores - Pendente" , plantaImg: "/empreendimentos/BoutiqueByLivingIpiranga/fachada.png" },
       ]
    },
    {
        fachada: "/empreendimentos/VistaCyrelaVeneza/fachada.png",
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
            { type: "3 dormitórios", area: "85m²", price: "A partir de R$ 800.000" },
            { type: "4 dormitórios", area: "120m²", price: "A partir de R$ 1.000.000" },
            { type: "Cobertura", area: "140m²", price: "A partir de R$ 1.200.000" }
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
            { type: "3 dormitórios", area: "85m²", price: "A partir de R$ 800.000" },
            { type: "4 dormitórios", area: "120m²", price: "A partir de R$ 1.000.000" },
            { type: "Cobertura", area: "140m²", price: "A partir de R$ 1.200.000" }
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
            { type: "3 dormitórios", area: "85m²", price: "A partir de R$ 800.000" },
            { type: "4 dormitórios", area: "120m²", price: "A partir de R$ 1.000.000" },
            { type: "Cobertura", area: "140m²", price: "A partir de R$ 1.200.000" }
        ]
    },
    {
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
            { type: "3 dormitórios", area: "85m²", price: "A partir de R$ 800.000" },
            { type: "4 dormitórios", area: "120m²", price: "A partir de R$ 1.000.000" },
            { type: "Cobertura", area: "140m²", price: "A partir de R$ 1.200.000" }
        ]
    },
    {
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
            { type: "3 dormitórios", area: "85m²", price: "A partir de R$ 800.000" },
            { type: "4 dormitórios", area: "120m²", price: "A partir de R$ 1.000.000" },
            { type: "Cobertura", area: "140m²", price: "A partir de R$ 1.200.000" }
        ]
    },
    {
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
            { type: "3 dormitórios", area: "85m²", price: "A partir de R$ 800.000" },
            { type: "4 dormitórios", area: "120m²", price: "A partir de R$ 1.000.000" },
            { type: "Cobertura", area: "140m²", price: "A partir de R$ 1.200.000" }
        ]
    },
    {
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
            { type: "3 dormitórios", area: "85m²", price: "A partir de R$ 800.000" },
            { type: "4 dormitórios", area: "120m²", price: "A partir de R$ 1.000.000" },
            { type: "Cobertura", area: "140m²", price: "A partir de R$ 1.200.000" }
        ]
    },
    {
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
            { type: "3 dormitórios", area: "85m²", price: "A partir de R$ 800.000" },
            { type: "4 dormitórios", area: "120m²", price: "A partir de R$ 1.000.000" },
            { type: "Cobertura", area: "140m²", price: "A partir de R$ 1.200.000" }
        ]
    },
    {
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
            { type: "3 dormitórios", area: "85m²", price: "A partir de R$ 800.000" },
            { type: "4 dormitórios", area: "120m²", price: "A partir de R$ 1.000.000" },
            { type: "Cobertura", area: "140m²", price: "A partir de R$ 1.200.000" }
        ]
    }
].map(e => ({ ...e, slug: gerarSlug(e.title) }));