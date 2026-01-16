export interface Product {
    id: string;
    name: string;
    price: number;
    salePrice?: number;
    image: string;
    category: 'ride-on' | 'accessory';
    specs: {
        voltage?: string;
        remoteControl?: boolean;
        seats?: number;
        speed?: string;
        dimensions?: string;
        weightCapacity?: string;
        battery?: string;
        ageRange?: string;
    };
    features: string[];
    inTheBox: string[];
    colors: string[];
    shippingCost: number;
}

export const PRODUCTS: Product[] = [
    {
        id: "lamborghini-aventador",
        name: "Lamborghini Aventador SVJ",
        price: 24500,
        salePrice: 19499,
        image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800",
        category: "ride-on",
        specs: {
            voltage: "12V",
            remoteControl: true,
            seats: 1,
            speed: "3-5 km/h",
            dimensions: "123 x 66 x 45 cm",
            weightCapacity: "30 kg",
            battery: "12V 7Ah",
            ageRange: "3-6 Years"
        },
        features: [
            "Official Licensed Lamborghini SVJ",
            "Butterfly Opening Doors",
            "Four Wheel Suspension",
            "MP3/USB Connectivity",
            "LED Headlights & Tail Lights"
        ],
        inTheBox: ["Ride-on Car", "Remote Control", "Charger", "User Manual"],
        colors: ["Giallo Orion (Yellow)", "Rosso Mars (Red)", "Nero Noctis (Black)"],
        shippingCost: 850
    },
    {
        id: "police-land-cruiser",
        name: "Toyota Land Cruiser Police Edition",
        price: 45000,
        salePrice: 37499,
        image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800",
        category: "ride-on",
        specs: {
            voltage: "24V",
            remoteControl: true,
            seats: 2,
            speed: "5-8 km/h",
            dimensions: "135 x 85 x 75 cm",
            weightCapacity: "50 kg",
            battery: "24V (Dual 12V 7Ah)",
            ageRange: "3-8 Years"
        },
        features: [
            "Working Police Sirens & Lights",
            "Integrated Intercom System",
            "Official Police Decals",
            "Smooth Start Technology",
            "Premium Leather Seats"
        ],
        inTheBox: ["Police Cruiser", "Remote Control", "Charger", "Intercom Mic", "Manual"],
        colors: ["Police White/Navy", "Midnight Stealth Black"],
        shippingCost: 1200
    },
    {
        id: "drift-go-kart",
        name: "High-Performance Drift Go-Kart",
        price: 36000,
        salePrice: 32499,
        image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800",
        category: "ride-on",
        specs: {
            voltage: "24V",
            remoteControl: false,
            seats: 1,
            speed: "12 km/h (Drift Mode)",
            dimensions: "110 x 70 x 55 cm",
            weightCapacity: "60 kg",
            ageRange: "6-12 Years"
        },
        features: [
            "Slick Rear Tires for Drifting",
            "High-Torque Dual Motors",
            "Low Center of Gravity for Stability",
            "Adjustable Frame Length",
            "Brake Pedal System"
        ],
        inTheBox: ["Drift Kart", "High-Output Charger", "Tool Kit", "Manual"],
        colors: ["Racing Yellow", "Electric Blue", "Stealth Grey"],
        shippingCost: 950
    },
    {
        id: "vintage-lux-coupe",
        name: "Vintage Luxury Coupe",
        price: 35000,
        salePrice: 30500,
        image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800",
        category: "ride-on",
        specs: {
            voltage: "12V",
            remoteControl: true,
            seats: 1,
            speed: "3-5 km/h",
            dimensions: "115 x 60 x 50 cm",
            weightCapacity: "25 kg",
            ageRange: "2-5 Years"
        },
        features: [
            "Classic Retro Styling",
            "Soft Start Acceleration",
            "Padded Leather Seats",
            "Realistic Engine Sounds",
            "FM Radio / Bluetooth"
        ],
        inTheBox: ["Luxury Coupe", "Remote Control", "Charger", "Manual"],
        colors: ["Classic Cream", "Powder Pink", "Oxford Blue"],
        shippingCost: 750
    },
    {
        id: "harley-cruiser-bike",
        name: "Harley Style Cruiser Bike",
        price: 15000,
        salePrice: 12999,
        image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800",
        category: "ride-on",
        specs: {
            voltage: "12V",
            remoteControl: false,
            seats: 1,
            speed: "3-6 km/h",
            dimensions: "105 x 45 x 65 cm",
            weightCapacity: "25 kg",
            ageRange: "3-6 Years"
        },
        features: [
            "Twin Motor Drive",
            "Training Wheels for Safety",
            "Working LED Headlights",
            "Chrome Accent Polish",
            "Foot Pedal Accelerator"
        ],
        inTheBox: ["Cruiser Bike", "Charger", "Assembly Tool", "Manual"],
        colors: ["Midnight Black", "Candy Apple Red", "Chrome Silver"],
        shippingCost: 550
    },
    {
        id: "dune-monster-buggy",
        name: "Dune Monster All-Terrain Buggy",
        price: 22000,
        salePrice: 18500,
        image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800",
        category: "ride-on",
        specs: {
            voltage: "24V",
            remoteControl: true,
            seats: 2,
            speed: "5-10 km/h",
            dimensions: "130 x 90 x 85 cm",
            weightCapacity: "55 kg",
            ageRange: "4-9 Years"
        },
        features: [
            "Oversized All-Terrain Tires",
            "High Suspension Travel",
            "Rear Trunk for Storage",
            "Reinforced Steel Frame",
            "Dual Opening Doors"
        ],
        inTheBox: ["Dune Buggy", "Remote Control", "Charger", "Manual"],
        colors: ["Neon Orange", "Army Green", "Arctic White"],
        shippingCost: 1100
    },
    {
        id: "city-glide-scooter",
        name: "City Glide Electric Scooter",
        price: 8000,
        salePrice: 6500,
        image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800",
        category: "ride-on",
        specs: {
            voltage: "6V",
            remoteControl: false,
            seats: 1,
            speed: "3 km/h",
            dimensions: "80 x 35 x 55 cm",
            weightCapacity: "20 kg",
            ageRange: "2-4 Years"
        },
        features: [
            "Stable Tri-Wheel Design",
            "One-Button Push Start",
            "Working Front Lights",
            "Under-Seat Storage",
            "Safety Speed Limit"
        ],
        inTheBox: ["Electric Scooter", "Charger", "Manual"],
        colors: ["Sky Blue", "Blossom Pink"],
        shippingCost: 350
    },
    {
        id: "farm-tractor-trailer",
        name: "Heavy Duty Farm Tractor & Trailer",
        price: 17000,
        salePrice: 14000,
        image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800",
        category: "ride-on",
        specs: {
            voltage: "12V",
            remoteControl: false,
            seats: 1,
            speed: "3-5 km/h",
            dimensions: "150 x 60 x 60 cm (with Trailer)",
            weightCapacity: "30 kg",
            ageRange: "3-6 Years"
        },
        features: [
            "Detachable Large Trailer",
            "Realistic Engine Sound Effects",
            "High-Torque Rear Motors",
            "FM Radio Connectivity",
            "Comfortable Adjustable Seat"
        ],
        inTheBox: ["Tractor", "Detachable Trailer", "Charger", "Manual"],
        colors: ["John Deere Green", "Indus Blue", "Flame Red"],
        shippingCost: 800
    }
];

export const COLLECTIONS = [
    { id: "ride-on-cars", name: "Ride on Cars", count: 98, image: "/images/cat-cars.webp" },
    { id: "ride-on-bikes", name: "Ride on Bikes", count: 45, image: "/images/cat-bikes.webp" },
    { id: "licensed-kids-cars", name: "Licensed Kids Cars", count: 32, image: "/images/cat-licensed.webp" },
    { id: "dirt-bike", name: "Dirt Bike", count: 18, image: "/images/cat-dirt.webp" },
    { id: "kids-wardrobe", name: "Kids Wardrobe", count: 12, image: "/images/cat-wardrobe.webp" },
];

export const BLOG_POSTS = [
    {
        id: "5-reasons-motokids",
        title: "5 Reasons Why MotoKids Toys Cars Are Ideal for Your Baby",
        excerpt: "Safety, development, and fun - explore why our cars are the perfect choice for your little ones...",
        date: "January 14, 2026",
        image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "rolls-royce-12v",
        title: "Rolls Royce Kids Car 12V: Luxury Playtime",
        excerpt: "Give your child the gift of elegance with our best-selling Rolls Royce replica...",
        date: "January 10, 2026",
        image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800"
    }
];
