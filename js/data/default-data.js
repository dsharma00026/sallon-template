const DEFAULT_DATA = {
    business: {
        name: "Luxe Beauty Studio",
        tagline: "Where Beauty Meets Excellence",
        description: "At Luxe Beauty Studio, we believe that true beauty comes from within. Our team of expert stylists and therapists are dedicated to providing you with an exceptional experience that leaves you feeling refreshed, confident, and beautiful.",
        logoUrl: "",
        faviconUrl: "",
        address: "123 Queen Street West",
        city: "Toronto",
        country: "Canada"
    },
    contact: {
        phone: "+1 416 555 1234",
        email: "hello@luxebeauty.example",
        whatsapp: "+1 416 555 1234",
        address: "123 Queen Street West, Toronto, ON M5V 2A1, Canada",
        googleMapsUrl: "https://maps.google.com/?q=123+Queen+Street+West+Toronto"
    },
    openingHours: {
        monday: { open: true, openTime: "09:00", closeTime: "19:00" },
        tuesday: { open: true, openTime: "09:00", closeTime: "19:00" },
        wednesday: { open: true, openTime: "09:00", closeTime: "19:00" },
        thursday: { open: true, openTime: "09:00", closeTime: "19:00" },
        friday: { open: true, openTime: "09:00", closeTime: "20:00" },
        saturday: { open: true, openTime: "09:00", closeTime: "18:00" },
        sunday: { open: false, openTime: "10:00", closeTime: "16:00" }
    },
    services: [
        {
            id: "svc_001",
            name: "Classic Haircut",
            description: "Precision haircut with consultation, wash, and style",
            price: 65,
            duration: 45,
            category: "Hair",
            image: "",
            status: "active"
        },
        {
            id: "svc_002",
            name: "Balayage Highlights",
            description: "Hand-painted highlights for a natural, sun-kissed look",
            price: 180,
            duration: 120,
            category: "Hair",
            image: "",
            status: "active"
        },
        {
            id: "svc_003",
            name: "Deep Conditioning Treatment",
            description: "Intensive moisture treatment for damaged hair",
            price: 45,
            duration: 30,
            category: "Hair",
            image: "",
            status: "active"
        },
        {
            id: "svc_004",
            name: "Classic Manicure",
            description: "Nail shaping, cuticle care, and polish application",
            price: 35,
            duration: 45,
            category: "Nails",
            image: "",
            status: "active"
        },
        {
            id: "svc_005",
            name: "Gel Pedicure",
            description: "Long-lasting gel polish with foot massage",
            price: 55,
            duration: 60,
            category: "Nails",
            image: "",
            status: "active"
        },
        {
            id: "svc_006",
            name: "European Facial",
            description: "Deep cleansing, exfoliation, extraction, and mask",
            price: 95,
            duration: 60,
            category: "Skin",
            image: "",
            status: "active"
        },
        {
            id: "svc_007",
            name: "Microdermabrasion",
            description: "Diamond-tip exfoliation for smoother, brighter skin",
            price: 120,
            duration: 45,
            category: "Skin",
            image: "",
            status: "active"
        },
        {
            id: "svc_008",
            name: "Full Body Massage",
            description: "Relaxing Swedish massage to relieve tension",
            price: 110,
            duration: 60,
            category: "Spa",
            image: "",
            status: "active"
        }
    ],
    packages: [
        {
            id: "pkg_001",
            name: "Bridal Package",
            description: "Complete bridal preparation including trial",
            price: 450,
            services: ["svc_001", "svc_002", "svc_006", "svc_004", "svc_005"],
            image: "",
            status: "active"
        },
        {
            id: "pkg_002",
            name: "Spa Day Retreat",
            description: "Full day of relaxation and pampering",
            price: 280,
            services: ["svc_006", "svc_008", "svc_004", "svc_005"],
            image: "",
            status: "active"
        },
        {
            id: "pkg_003",
            name: "Hair Transformation",
            description: "Complete hair makeover with color and cut",
            price: 220,
            services: ["svc_001", "svc_002", "svc_003"],
            image: "",
            status: "active"
        }
    ],
    team: [
        {
            id: "tm_001",
            name: "Sarah Mitchell",
            role: "Senior Stylist & Owner",
            bio: "With over 15 years of experience, Sarah specializes in precision cuts and creative color techniques. She has trained with top stylists in Paris and New York.",
            image: "assets/images/team-1.jpg",
            status: "active"
        },
        {
            id: "tm_002",
            name: "Emily Chen",
            role: "Color Specialist",
            bio: "Emily is a certified colorist with expertise in balayage, ombre, and corrective color. Her attention to detail creates stunning, natural-looking results.",
            image: "assets/images/team-2.jpg",
            status: "active"
        },
        {
            id: "tm_003",
            name: "Maria Rodriguez",
            role: "Esthetician",
            bio: "Maria brings 10 years of skincare experience. She customizes every facial treatment to address individual skin concerns and goals.",
            image: "assets/images/team-3.jpg",
            status: "active"
        },
        {
            id: "tm_004",
            name: "James Anderson",
            role: "Massage Therapist",
            bio: "James is a registered massage therapist specializing in Swedish, deep tissue, and sports massage. He focuses on therapeutic relief and relaxation.",
            image: "assets/images/team-4.jpg",
            status: "active"
        },
        {
            id: "tm_005",
            name: "Lisa Park",
            role: "Nail Technician",
            bio: "Lisa creates beautiful nail art and provides meticulous manicures and pedicures. She stays current with the latest trends and techniques.",
            image: "assets/images/team-5.jpg",
            status: "active"
        }
    ],
    gallery: [
        {
            id: "gal_001",
            image: "assets/images/gallery-1.jpg",
            title: "Modern Salon Interior",
            category: "Interior",
            status: "active"
        },
        {
            id: "gal_002",
            image: "assets/images/gallery-2.jpg",
            title: "Hair Styling Station",
            category: "Hair",
            status: "active"
        },
        {
            id: "gal_003",
            image: "assets/images/gallery-3.jpg",
            title: "Nail Art Design",
            category: "Nails",
            status: "active"
        },
        {
            id: "gal_004",
            image: "assets/images/gallery-4.jpg",
            title: "Relaxing Spa Room",
            category: "Spa",
            status: "active"
        },
        {
            id: "gal_005",
            image: "assets/images/gallery-5.jpg",
            title: "Bridal Hair & Makeup",
            category: "Hair",
            status: "active"
        },
        {
            id: "gal_006",
            image: "assets/images/gallery-6.jpg",
            title: "Facial Treatment",
            category: "Skin",
            status: "active"
        }
    ],
    testimonials: [
        {
            id: "test_001",
            customerName: "Jennifer Williams",
            customerImage: "",
            rating: 5,
            message: "Absolutely amazing experience! Sarah gave me the best haircut I've ever had. The atmosphere is luxurious and the staff is incredibly professional.",
            status: "active"
        },
        {
            id: "test_002",
            customerName: "Michael Chen",
            customerImage: "",
            rating: 5,
            message: "My wife got the bridal package and looked stunning on her wedding day. The team went above and beyond to make everything perfect.",
            status: "active"
        },
        {
            id: "test_003",
            customerName: "Amanda Foster",
            customerImage: "",
            rating: 4,
            message: "Love the gel pedicures here! Lisa does incredible nail art. Have been coming for over a year and never disappointed.",
            status: "active"
        },
        {
            id: "test_004",
            customerName: "David Kim",
            customerImage: "",
            rating: 5,
            message: "Best massage in Toronto! James really knows how to work out those knots. The spa room is so peaceful and relaxing.",
            status: "active"
        },
        {
            id: "test_005",
            customerName: "Rachel Green",
            customerImage: "",
            rating: 5,
            message: "Emily is a color genius! She transformed my hair with the most beautiful balayage. Worth every penny.",
            status: "active"
        }
    ],
    appointments: [
        {
            id: "apt_001",
            customerName: "Sophie Turner",
            phone: "+1 416 555 0101",
            email: "sophie.t@example.com",
            service: "svc_002",
            date: "2026-10-15",
            time: "10:00",
            message: "First time getting balayage, need consultation",
            status: "Pending",
            createdAt: "2026-10-01T14:30:00Z"
        },
        {
            id: "apt_002",
            customerName: "Robert Johnson",
            phone: "+1 416 555 0102",
            email: "robert.j@example.com",
            service: "svc_008",
            date: "2026-10-16",
            time: "14:30",
            message: "Deep tissue preferred",
            status: "Confirmed",
            createdAt: "2026-10-02T09:15:00Z"
        },
        {
            id: "apt_003",
            customerName: "Emma Davis",
            phone: "+1 416 555 0103",
            email: "emma.d@example.com",
            service: "pkg_001",
            date: "2026-10-20",
            time: "09:00",
            message: "Wedding is Oct 25th",
            status: "Pending",
            createdAt: "2026-10-03T11:00:00Z"
        }
    ],
    socialLinks: {
        instagram: "https://instagram.com/luxebeautystudio",
        facebook: "https://facebook.com/luxebeautystudio",
        tiktok: "https://tiktok.com/@luxebeautystudio",
        youtube: "https://youtube.com/@luxebeautystudio",
        googleBusiness: "https://g.page/luxebeautystudio"
    },
    dataVersion: 2,
    settings: {
        selectedTemplate: "template-1",
        primaryBusinessName: "Luxe Beauty Studio",
        websiteStatus: "published"
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DEFAULT_DATA;
}