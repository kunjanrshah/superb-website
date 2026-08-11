export interface Product {
  id: number;
  name: string;
  model: string;
  category: string;
  image: string;
  oldPrice: string;
  price: string;
  badge?: "New" | "Sale";
  featured?: boolean;
  newArrival?: boolean;
  topSelling?: boolean;
  rating: number;
  description: string;
  shortDescription: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Electronic Platform Scale",
    model: "EPS-100 Platform Scale 100kg",
    category: "Platform Scales",
    image: "/img/scales/12344electronic-platform-scale-100kg-1495262523-3002060.jpeg",
    oldPrice: "₹8,500.00",
    price: "₹7,200.00",
    badge: "New",
    newArrival: true,
    featured: true,
    topSelling: true,
    rating: 5,
    description:
      "High-precision electronic platform scale with 100kg capacity and 10g accuracy. Features a sturdy stainless steel platform, large LCD display with backlight, and auto power-off function. Ideal for industrial weighing, warehouses, and commercial applications. Built with overload protection and low battery indicator for reliable daily use.",
    shortDescription:
      "100kg capacity electronic platform scale with stainless steel platform, LCD display, and 10g accuracy for industrial and commercial use.",
  },
  {
    id: 2,
    name: "Heavy Duty Platform Scale",
    model: "HDPS-300 Heavy Duty Platform Weighing Scale",
    category: "Platform Scales",
    image: "/img/scales/473069heavy-duty-platform-weighing-scale-1480054315-2594414.jpeg",
    oldPrice: "₹15,000.00",
    price: "₹12,500.00",
    badge: "Sale",
    featured: true,
    topSelling: true,
    rating: 5,
    description:
      "Rugged heavy-duty platform weighing scale designed for demanding industrial environments. Features a reinforced steel frame, diamond plate surface, and 300kg capacity. Equipped with a digital indicator with bright LED display, stainless steel load cell, and shock-resistant construction. Perfect for factories, godowns, and logistics operations.",
    shortDescription:
      "300kg capacity industrial heavy-duty platform scale with reinforced steel frame, LED digital indicator, and shock-resistant design.",
  },
  {
    id: 3,
    name: "Floor Weighing Platform Scale",
    model: "FPS-500 Floor Weighing Platform Scale",
    category: "Platform Scales",
    image: "/img/scales/607664floor-weighing-platform-scale-1480054095-2594403.jpeg",
    oldPrice: "₹18,000.00",
    price: "₹15,000.00",
    featured: true,
    rating: 4,
    description:
      "Floor-mounted weighing platform scale with 500kg capacity for heavy industrial use. Features a low-profile design for easy loading, anti-slip platform surface, and high-precision load cells. Includes a versatile digital indicator suitable for bench or wall mounting. Ideal for agricultural produce, bag weighing, and industrial material handling.",
    shortDescription:
      "Low-profile floor platform scale with 500kg capacity, anti-slip deck, and high-precision load cells for industrial weighing.",
  },
  {
    id: 4,
    name: "Platform Weighing Scale",
    model: "PWS-150 Digital Platform Weighing Scale",
    category: "Platform Scales",
    image: "/img/scales/837929platform-weighing-scale-01-1480313605_p_2594381_496661.jpeg",
    oldPrice: "₹9,500.00",
    price: "₹8,000.00",
    badge: "New",
    newArrival: true,
    featured: true,
    rating: 4,
    description:
      "Versatile digital platform weighing scale with 150kg capacity and 20g readability. Comes with a food-grade stainless steel platform that is easy to clean and maintain. Features auto calibration, unit conversion (kg/g/lb/oz), and tare function. Suitable for shops, small industries, and agricultural applications.",
    shortDescription:
      "150kg digital platform scale with stainless steel top, auto-calibration, tare function, and multiple unit conversion.",
  },
  {
    id: 5,
    name: "Bench Weighing Scale",
    model: "BWS-60 Bench Scale 60kg",
    category: "Bench Scales",
    image: "/img/scales/579137bench-weighing-scale-1480313181-2594278.jpeg",
    oldPrice: "₹6,500.00",
    price: "₹5,200.00",
    badge: "Sale",
    topSelling: true,
    rating: 5,
    description:
      "Compact bench weighing scale with 60kg capacity and 5g accuracy. Features a stainless steel pan, easy-to-read LCD display, and user-friendly membrane keypad. Ideal for retail shops, grocery stores, pharmacies, and small industrial applications. Equipped with counting and check-weighing functions.",
    shortDescription:
      "Compact bench scale with 60kg capacity, stainless steel pan, LCD display, and counting functions for retail and light industrial use.",
  },
  {
    id: 6,
    name: "Piece Counting Table Top Scale",
    model: "PCT-30 Piece Counting Scale 30kg",
    category: "Bench Scales",
    image: "/img/scales/15224piece-counting-table-top-scale-1480055871-2594480.jpeg",
    oldPrice: "₹7,500.00",
    price: "₹6,300.00",
    featured: true,
    rating: 4,
    description:
      "Specialized piece counting table top scale with 30kg capacity. Perfect for inventory management, parts counting, and quality control. Features high-resolution counting with auto-optimization, memory for 100 item PLU data, and RS232 interface for connectivity. Includes a stainless steel weighing pan and protective cover.",
    shortDescription:
      "30kg piece counting scale with 100 PLU memory, RS232 interface, and auto-optimization for inventory and parts counting.",
  },
  {
    id: 7,
    name: "Digital Crane Scale",
    model: "DCS-1000 Digital Crane Scale 1000kg",
    category: "Crane Scales",
    image: "/img/scales/240993digital-crane-scale-1480052476-2594342.jpeg",
    oldPrice: "₹12,000.00",
    price: "₹9,800.00",
    badge: "New",
    newArrival: true,
    featured: true,
    topSelling: true,
    rating: 5,
    description:
      "Heavy-duty digital crane scale with 1000kg capacity for overhead weighing applications. Features a large 1-inch LCD display with backlight, remote control operation, and 100+ hour battery life. Built with an alloy steel shackle and hook for safe lifting. Ideal for warehouses, factories, scrap yards, and shipping operations.",
    shortDescription:
      "1000kg capacity digital crane scale with remote control, large backlit LCD, alloy steel hook, and 100+ hour battery life.",
  },
  {
    id: 8,
    name: "Horizontal Tank Weighing System",
    model: "HTWS-5000 Tank Weighing System",
    category: "Tank Weighing Systems",
    image: "/img/scales/470788horizontal-tank-weighing-system-1480056437-2594503.jpeg",
    oldPrice: "₹45,000.00",
    price: "₹38,000.00",
    badge: "Sale",
    featured: true,
    rating: 4,
    description:
      "Complete horizontal tank weighing system with 5000kg capacity. Includes a kit with stainless steel load cells, junction box, and digital weight indicator. Designed for continuous level monitoring and process control of liquids and powders in industrial tanks. Suitable for chemical, food processing, and pharmaceutical industries.",
    shortDescription:
      "5000kg horizontal tank weighing system with load cells, junction box, and digital indicator for process weighing and level monitoring.",
  },
  {
    id: 9,
    name: "Vertical Tank Weighing System",
    model: "VTWS-3000 Vertical Tank Weighing System",
    category: "Tank Weighing Systems",
    image: "/img/scales/996004vertical-tank-weighing-system-1480056266-2594496.jpeg",
    oldPrice: "₹42,000.00",
    price: "₹35,500.00",
    featured: true,
    rating: 4,
    description:
      "Vertical tank weighing system with 3000kg capacity designed for vertical storage tanks and silos. Features high-precision compression load cells, weatherproof junction box, and digital weight transmitter. Provides accurate inventory control and level monitoring for liquid storage. Built for continuous industrial operation.",
    shortDescription:
      "3000kg vertical tank weighing system with compression load cells and digital transmitter for storage tank measurement.",
  },
  {
    id: 10,
    name: "Water Resistance Scale",
    model: "WRS-40 IP67 Waterproof Weighing Scale",
    category: "Specialty Scales",
    image: "/img/scales/591335water-resistance-scale-1480051006-2594269.jpeg",
    oldPrice: "₹8,000.00",
    price: "₹6,500.00",
    badge: "New",
    newArrival: true,
    featured: true,
    rating: 5,
    description:
      "IP67 rated water-resistant weighing scale with 40kg capacity. Fully sealed against dust and water ingress, making it ideal for wet environments like fish markets, food processing plants, and seafood industries. Features a stainless steel platform, waterproof keypad, and sealed load cell.",
    shortDescription:
      "IP67 waterproof scale with 40kg capacity for wet environments like fish markets, seafood processing, and food plants.",
  },
  {
    id: 11,
    name: "Dust Free Weighing Scale",
    model: "DFS-30 Dust-Proof Scale",
    category: "Specialty Scales",
    image: "/img/scales/dust-free-weighing-scale-1480050969-2594267.jpeg",
    oldPrice: "₹7,200.00",
    price: "₹6,000.00",
    rating: 4,
    description:
      "Dust-proof weighing scale with 30kg capacity designed for dusty industrial environments. Features a fully sealed housing, dust-protected load cell, and easy-to-clean stainless steel pan. Prevents dust accumulation that can affect weighing accuracy. Ideal for flour mills, cement plants, and chemical industries.",
    shortDescription:
      "30kg dust-proof scale with sealed housing and protective design for dusty environments like flour mills and chemical plants.",
  },
  {
    id: 12,
    name: "Jewellery Weighing Scale",
    model: "JWS-500 Jewellery Balance 500g/0.01g",
    category: "Precision Balances",
    image: "/img/scales/jewellery-weighing-scale.jpeg",
    oldPrice: "₹5,500.00",
    price: "₹4,200.00",
    badge: "Sale",
    topSelling: true,
    rating: 5,
    description:
      "High-precision jewellery weighing scale with 500g capacity and 0.01g readability. Features a glass draft shield for accurate measurement, backlit LCD display, and multiple weighing modes. Perfect for gold and silver jewellery, gemstones, and small parts weighing. Includes calibration weights and protective carry case.",
    shortDescription:
      "500g/0.01g precision jewellery balance with glass draft shield, backlit display, and calibration weights for gold and gems.",
  },
  {
    id: 13,
    name: "Precision Weighing Balance",
    model: "PWB-2000 Precision Balance 2000g/0.01g",
    category: "Precision Balances",
    image: "/img/scales/precision-weighing-balances.jpeg",
    oldPrice: "₹6,800.00",
    price: "₹5,500.00",
    featured: true,
    topSelling: true,
    rating: 4,
    description:
      "Professional precision weighing balance with 2000g capacity and 0.01g resolution. Features a large stainless steel weighing pan, LCD display with backlight, and RS232 interface for data transfer. Includes counting, percentage, and check-weighing functions. Ideal for laboratories, educational institutions, and quality control.",
    shortDescription:
      "2000g/0.01g precision balance with stainless steel pan, LCD backlit display, RS232 interface, and multi-function weighing modes.",
  },
  {
    id: 14,
    name: "Milk Weighing System",
    model: "MWS-100 Automatic Milk Weighing Scale",
    category: "Specialty Scales",
    image: "/img/scales/milk-weighing-system.jpeg",
    oldPrice: "₹14,000.00",
    price: "₹11,500.00",
    badge: "New",
    newArrival: true,
    rating: 4,
    description:
      "Specialized milk weighing system with 100kg capacity for dairy farms and milk collection centers. Features a stainless steel milk can platform, splash-proof digital indicator, and high-accuracy load cells. Easy to clean and maintain with a corrosion-resistant design. Ideal for daily milk collection and quality monitoring.",
    shortDescription:
      "100kg milk weighing system with stainless steel platform and splash-proof indicator for dairy farms and collection centers.",
  },
  {
    id: 15,
    name: "Mechanical Platform Scale",
    model: "MPS-100 Mechanical Portable Platform Scale",
    category: "Platform Scales",
    image: "/img/scales/mechanical-platform-scale-portable-loose-weight.jpeg",
    oldPrice: "₹4,500.00",
    price: "₹3,800.00",
    rating: 4,
    description:
      "Traditional mechanical platform scale with 100kg capacity - no battery or electricity required. Features a durable cast iron mechanism, easy-to-read dial indicator, and a portable compact design. Ideal for vegetable vendors, small shops, and rural applications where electricity is not available.",
    shortDescription:
      "100kg mechanical platform scale with cast iron mechanism and dial indicator - no power required, perfect for local markets.",
  },
  {
    id: 16,
    name: "Silver Weighing Scale",
    model: "SWS-300 Silver Digital Scale",
    category: "Precision Balances",
    image: "/img/scales/silver-scale.jpeg",
    oldPrice: "₹3,500.00",
    price: "₹2,800.00",
    badge: "Sale",
    featured: true,
    rating: 4,
    description:
      "Compact and stylish silver digital weighing scale with 300g capacity and 0.1g accuracy. Features a smooth touch keypad, backlit LCD display, and tare function. Perfect for kitchen use, spices weighing, postal weighing, and small parcel measurements. Powered by AAA batteries with auto-off function.",
    shortDescription:
      "300g/0.1g compact digital scale with touch keypad, backlit LCD, and tare function for kitchen and household use.",
  },
  {
    id: 17,
    name: "Digital Weighing Scale",
    model: "DWS-150 General Purpose Digital Scale",
    category: "Digital Scales",
    image: "/img/scales/sm5500b.jpg",
    oldPrice: "₹3,800.00",
    price: "₹3,200.00",
    featured: true,
    topSelling: true,
    rating: 4,
    description:
      "Multi-purpose digital weighing scale with 150kg capacity. Features a large LCD display, stainless steel platform, and easy-to-use controls. Reliable and accurate for general weighing needs in homes, shops, and small businesses. Includes tare function and low-battery indicator.",
    shortDescription:
      "150kg multi-purpose digital scale with large LCD display, stainless steel top, and reliable accuracy for general use.",
  },
  {
    id: 18,
    name: "Industrial Weighing Scale",
    model: "IWS-500 Industrial Grade Scale",
    category: "Platform Scales",
    image: "/img/scales/weightscale.jpg",
    oldPrice: "₹10,000.00",
    price: "₹8,500.00",
    badge: "New",
    newArrival: true,
    featured: true,
    rating: 5,
    description:
      "Industrial-grade weighing scale with 500kg capacity for heavy-duty applications. Features a reinforced steel platform, waterproof digital indicator, and high-precision load cells. Designed for continuous operation in demanding industrial environments. Suitable for warehouses, manufacturing plants, and logistics centers.",
    shortDescription:
      "500kg industrial scale with reinforced steel platform, waterproof indicator, and high-precision load cells for heavy-duty use.",
  },
  {
    id: 19,
    name: "Weighing Scale for Feet",
    model: "WFS-180 Body Weighing Platform",
    category: "Digital Scales",
    image: "/img/scales/9-1039634-Feet-in-Close-up-on-Weighing-Scales.jpg",
    oldPrice: "₹2,200.00",
    price: "₹1,800.00",
    rating: 4,
    description:
      "Body weighing platform scale with 180kg capacity for personal and medical use. Features a large tempered glass platform, auto-on step activation, and easy-to-read display. Measures body weight with 100g accuracy. Ideal for home fitness tracking and health monitoring.",
    shortDescription:
      "180kg body weighing scale with tempered glass platform, auto-on sensor, and 100g accuracy for home health monitoring.",
  },
  {
    id: 20,
    name: "Weighing Scale P1",
    model: "WS-P1 Precision Portable Scale",
    category: "Digital Scales",
    image: "/img/scales/p1.jpg",
    oldPrice: "₹2,800.00",
    price: "₹2,200.00",
    rating: 4,
    description:
      "Portable precision weighing scale with 100kg capacity for everyday use. Features a compact lightweight design, easy-to-read display, and accurate load cell sensor. Perfect for travel, markets, and small business use. Powered by rechargeable battery with long battery life.",
    shortDescription:
      "100kg portable weighing scale with compact lightweight design, accurate sensor, and rechargeable battery for on-the-go use.",
  },
  {
    id: 21,
    name: "Weighing Scale P2",
    model: "WS-P2 Digital Hanging Scale",
    category: "Crane Scales",
    image: "/img/scales/p2.jpg",
    oldPrice: "₹3,200.00",
    price: "₹2,500.00",
    rating: 4,
    description:
      "Digital hanging scale with 50kg capacity for luggage, fish, and produce weighing. Features a sturdy hook design, backlit display, and tare function. Portable and easy to carry, ideal for outdoor and travel use. Includes overload indicator and auto-off feature.",
    shortDescription:
      "50kg digital hanging scale with sturdy hook, backlit display, and tare function for luggage and produce weighing.",
  },
  {
    id: 22,
    name: "Weighing Scale P3",
    model: "WS-P3 Compact Digital Scale",
    category: "Digital Scales",
    image: "/img/scales/p3-1.jpg",
    oldPrice: "₹1,800.00",
    price: "₹1,400.00",
    topSelling: true,
    rating: 4,
    description:
      "Compact digital weighing scale with 40kg capacity for kitchen and small business use. Features a slim profile, stainless steel platform, and high-precision sensor. Easy to store and clean, with auto power-off and overload protection. Ideal for small shopkeepers and kitchen weighing.",
    shortDescription:
      "40kg compact digital scale with slim stainless steel design, high-precision sensor, and auto power-off for kitchen use.",
  },
  {
    id: 23,
    name: "Weighing Scale P4",
    model: "WS-P4 Utility Digital Scale",
    category: "Digital Scales",
    image: "/img/scales/p4.jpg",
    oldPrice: "₹2,500.00",
    price: "₹2,000.00",
    rating: 4,
    description:
      "Utility digital weighing scale with 75kg capacity for general purpose weighing. Features a durable ABS platform, LCD display, and simple push-button controls. Reliable performance with automatic zero tracking and tare function. Suitable for home, office, and small business applications.",
    shortDescription:
      "75kg utility digital scale with durable ABS platform, LCD display, and automatic zero tracking for general purpose weighing.",
  },
  {
    id: 24,
    name: "Weighing Scale S1",
    model: "WS-S1 Stainless Steel Scale",
    category: "Bench Scales",
    image: "/img/scales/s1-4.jpg",
    oldPrice: "₹3,000.00",
    price: "₹2,400.00",
    featured: true,
    rating: 4,
    description:
      "Stainless steel bench weighing scale with 30kg capacity for food and retail applications. Features a corrosion-resistant stainless steel pan, splash-proof keypad, and bright LCD display. Easy to clean and maintain, making it ideal for restaurants, food shops, and wet environments.",
    shortDescription:
      "30kg stainless steel bench scale with corrosion-resistant pan and splash-proof keypad for food and retail use.",
  },
  {
    id: 25,
    name: "Weighing Scale S2",
    model: "WS-S2 Retail Price Computing Scale",
    category: "Bench Scales",
    image: "/img/scales/s2.jpg",
    oldPrice: "₹5,500.00",
    price: "₹4,500.00",
    badge: "Sale",
    topSelling: true,
    rating: 5,
    description:
      "Retail price computing scale with 30kg capacity for supermarkets and grocery stores. Features a built-in price calculator with 100 PLU memory, customer and operator displays, and thermal label printing. Speeds up checkout and reduces errors in retail weighing. Includes rechargeable battery.",
    shortDescription:
      "30kg retail price computing scale with PLU memory, customer display, and label printing for supermarkets and grocery stores.",
  },
  {
    id: 26,
    name: "Weighing Scale S3",
    model: "WS-S3 Counter Top Scale",
    category: "Bench Scales",
    image: "/img/scales/s3.jpg",
    oldPrice: "₹4,000.00",
    price: "₹3,200.00",
    featured: true,
    rating: 4,
    description:
      "Counter top weighing scale with 15kg capacity for small retail and food service. Features a compact footprint, stainless steel platform, and clear LCD display. Simple to operate with large buttons and easy tare function. Ideal for small grocery stores, fruit vendors, and tea shops.",
    shortDescription:
      "15kg counter top scale with compact design, stainless steel platform, and easy-to-use controls for small retail shops.",
  },
  {
    id: 27,
    name: "Digital Weighing Scale Premium",
    model: "DWS-100 Premium Series",
    category: "Digital Scales",
    image: "/img/scales/599da29f1dd86-855a507c750a600cc5ef6f0f1f6ab5c2.jpg",
    oldPrice: "₹4,200.00",
    price: "₹3,500.00",
    badge: "New",
    newArrival: true,
    rating: 4,
    description:
      "Premium digital weighing scale with 100kg capacity featuring modern design and advanced features. Includes a large backlit LCD display, stainless steel platform, and precision load cells. Built with a sleek and sturdy ABS housing for enhanced durability and aesthetics.",
    shortDescription:
      "100kg premium digital scale with modern design, backlit LCD screen, and stainless steel platform for stylish and accurate weighing.",
  },
  {
    id: 28,
    name: "Weighing Scale Electronic",
    model: "WSE-150 Electronic Weighing Scale",
    category: "Digital Scales",
    image: "/img/scales/1501528459113833905.jpg",
    oldPrice: "₹3,600.00",
    price: "₹2,900.00",
    topSelling: true,
    rating: 4,
    description:
      "Electronic weighing scale with 150kg capacity for versatile weighing applications. Features a tempered glass platform, high-accuracy sensors, and auto-calibration. Provides precise weight readings with a large, easy-to-read display. Built for long-lasting performance and durable daily use.",
    shortDescription:
      "150kg electronic weighing scale with tempered glass platform, auto-calibration, and high-accuracy sensors for precise readings.",
  },
  {
    id: 29,
    name: "Load Cell Scale",
    model: "LCS-200 Load Cell Platform Scale",
    category: "Platform Scales",
    image: "/img/scales/1-2.jpg",
    oldPrice: "₹6,000.00",
    price: "₹5,000.00",
    rating: 4,
    description:
      "Load cell platform scale with 200kg capacity for accurate industrial weighing. Features a heavy-duty welded steel frame, removable stainless steel platform, and IP67 load cell protection. Includes a separate digital indicator with multiple weighing functions. Ideal for harsh industrial environments.",
    shortDescription:
      "200kg load cell platform scale with welded steel frame, removable stainless top, and IP67 protection for industrial use.",
  },
];

export const categories = [
  { name: "Platform Scales", count: 8, image: "/img/scales/12344electronic-platform-scale-100kg-1495262523-3002060.jpeg" },
  { name: "Bench Scales", count: 5, image: "/img/scales/579137bench-weighing-scale-1480313181-2594278.jpeg" },
  { name: "Crane Scales", count: 2, image: "/img/scales/240993digital-crane-scale-1480052476-2594342.jpeg" },
  { name: "Tank Weighing Systems", count: 2, image: "/img/scales/470788horizontal-tank-weighing-system-1480056437-2594503.jpeg" },
  { name: "Precision Balances", count: 3, image: "/img/scales/jewellery-weighing-scale.jpeg" },
  { name: "Specialty Scales", count: 3, image: "/img/scales/591335water-resistance-scale-1480051006-2594269.jpeg" },
  { name: "Digital Scales", count: 7, image: "/img/scales/sm5500b.jpg" },
];

export const companyInfo = {
  name: "Superb Instruments",
  tagline: "Weighing Scale Manufacturer, Supplier & Repairer",
  phone: "+91 98251 56789",
  phone2: "+91 2751 234567",
  email: "info@superbinstruments.com",
  email2: "sales@superbinstruments.com",
  address: "Superb Instruments, Plot No. 12, GIDC Industrial Estate, Ahmedabad, Gujarat 382445, India",
  website: "www.superbinstruments.com",
  hours: "Mon - Sat: 9:00 AM - 7:00 PM",
  description:
    "Superb Instruments is a leading manufacturer, supplier, and repairer of all types of weighing scales and weighing systems. With years of experience and expertise, we provide high-quality weighing solutions for industries, retail businesses, laboratories, and households across India.",
};