const sharedImage =
  "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800";
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

/* Base url : https://16135a07-dd99-45ca-9d37-33b3d18cd736-00-3sp2vf6911f7t.sisko.replit.dev/

/artisans - Returns list of all artisans
/products - Returns list of all products
/products/:id - Returns details of a specific product
/category - Returns category products and titles
/blogs - Returns list of all blog posts
/blogs/:id - Returns a specific blog post
/artisans/:id - Returns details of a specific artisan
/heroSlides - Returns hero slide data
/featuredProducts - Returns featured products
/categories - Returns all categories

It will return the same set of data as shown in sample . replace every sample data with this fetch api call.
*/

// Basic request logging
app.use(morgan("dev"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  // Or for specific origin:
  // res.header("Access-Control-Allow-Origin", "https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3--5173--fb22cd3d.local-credentialless.webcontainer-api.io");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Parse URL-encoded bodies and JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Custom middleware to log POST body and form details
app.use((req, res, next) => {
  if (req.method === "POST") {
    console.log("\n--- POST Request Details ---");
    console.log("Body:", req.body);
    console.log("Form Data:", req.body);
    console.log("Content Type:", req.get("Content-Type"));
    console.log("------------------------\n");
  }
  next();
});

let art = {
  id: "maria-rodriguez",
  name: "Maria Rodriguez",
  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
  coverImage:
    "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1200",
  location: "Oaxaca, Mexico",
  bio: `Maria Rodriguez is a third-generation potter from Oaxaca, Mexico, carrying forward her family's legacy of traditional ceramic craftsmanship. With over 20 years of experience, she specializes in creating unique pieces that blend ancient techniques with contemporary design sensibilities.

          Her work has been featured in numerous exhibitions across Mexico and internationally, earning recognition for its exceptional quality and artistic merit. Each piece she creates tells a story of cultural heritage and artistic innovation.

          Maria's workshop, nestled in the heart of Oaxaca, serves as both a creative space and a learning center where she teaches traditional pottery techniques to the next generation of artisans.`,
  specialties: [
    "Traditional Mexican Pottery",
    "Contemporary Ceramic Art",
    "Decorative Vessels",
    "Custom Installations",
  ],
  rating: 4.8,
  sales: 1234,
  joinedDate: "2022-01-15",
  products: [
    {
      id: "p1",
      name: "Traditional Ceramic Vase",
      price: 79.99,
      originalPrice: 99.99,
      image:
        "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800",
      inStock: true,
    },
    {
      id: "p2",
      name: "Decorative Wall Plate",
      price: 129.99,
      originalPrice: 159.99,
      image:
        "https://images.unsplash.com/photo-1565193298357-75c6cf4c3e01?w=800",
      inStock: false,
    },
  ],
  reviews: [
    {
      id: "r1",
      user: {
        name: "Emily Chen",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
      },
      rating: 5,
      comment:
        "Maria's work is absolutely stunning. The attention to detail and craftsmanship is exceptional.",
      date: "2024-03-15",
    },
    {
      id: "r2",
      user: {
        name: "James Wilson",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
      },
      rating: 5,
      comment:
        "Beautiful pieces that showcase true artistry. The quality is outstanding.",
      date: "2024-03-10",
    },
  ],
  contact: {
    email: "maria@artisansatlas.com",
    phone: "+52 951 123 4567",
    website: "www.mariarodriguez.com",
    social: {
      instagram: "@maria.ceramics",
      facebook: "mariarodriguezceramics",
      twitter: "@maria_ceramics",
    },
  },
};

const artisans = [
  {
    id: "maria-rodriguez",
    name: "Maria Rodriguez",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
    coverImage:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1200",
    location: "Oaxaca, Mexico",
    specialties: ["Traditional Pottery", "Ceramic Art"],
    rating: 4.8,
    sales: 1234,
    bio: "Third-generation potter specializing in traditional Mexican ceramics",
  },
  {
    id: "ahmed-hassan",
    name: "Ahmed Hassan",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    coverImage:
      "https://images.unsplash.com/photo-1590422749897-47c47673ba0b?w=1200",
    location: "Cairo, Egypt",
    specialties: ["Textile Weaving", "Traditional Patterns"],
    rating: 4.9,
    sales: 856,
    bio: "Master weaver preserving ancient Egyptian textile traditions",
  },
  {
    id: "mei-chen",
    name: "Mei Chen",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    coverImage:
      "https://images.unsplash.com/photo-1516727003284-a96541e51e9c?w=1200",
    location: "Hangzhou, China",
    specialties: ["Silk Embroidery", "Traditional Painting"],
    rating: 4.7,
    sales: 923,
    bio: "Skilled artisan combining traditional Chinese techniques with modern designs",
  },
];

const blogPosts = [
  {
    id: "1",
    title: "The Art of Traditional Pottery Making",
    excerpt:
      "Discover the ancient techniques that still influence modern ceramic artisans and how these practices are being preserved for future generations.",
    content: `Traditional pottery making is an art form that has been passed down through generations...`,
    image: sharedImage,
    date: "2024-03-15",
    author: "Maria Rodriguez",
    category: "Crafts",
  },
  {
    id: "2",
    title: "Supporting Global Artisan Communities",
    excerpt:
      "How fair trade practices are empowering craftspeople worldwide and creating sustainable economic opportunities.",
    content: `Fair trade practices have become increasingly important in the global marketplace...`,
    image: sharedImage,
    date: "2024-03-10",
    author: "John Smith",
    category: "Community",
  },
  {
    id: "3",
    title: "The Revival of Traditional Weaving",
    excerpt:
      "Exploring how young artisans are breathing new life into ancient weaving techniques and creating contemporary designs.",
    content: `Traditional weaving techniques are experiencing a renaissance among young craftspeople...`,
    image: sharedImage,
    date: "2024-03-05",
    author: "Emma Wilson",
    category: "Trends",
  },
  {
    id: "4",
    title: "Reviving India's Native Cotton: The Kala Cotton Initiative",
    excerpt:
      "Exploring grassroots efforts in Kutch, Gujarat, to revive the indigenous kala cotton, promoting sustainable and ethical fashion.",
    content:
      "In Kutch, Gujarat, the Khamir organization has spearheaded the revival of the indigenous kala cotton, connecting farmers, spinners, and weavers to create a sustainable supply chain...",
    image: sharedImage,
    date: "2025-03-27",
    author: "Aditi Sharma",
    category: "Sustainability",
  },
  {
    id: "5",
    title: "The Digital Revival of Traditional Embroidery Crafts",
    excerpt:
      "Analyzing how digital platforms are aiding the resurgence of traditional embroidery techniques among artisans.",
    content:
      "A systematic literature review reveals that digital platforms have played a pivotal role in reviving traditional embroidery crafts...",
    image: sharedImage,
    date: "2025-03-18",
    author: "Ravi Kumar",
    category: "Technology",
  },
  {
    id: "6",
    title:
      "Weaving Knowledge: Integrating Traditional Crafts into Modern Fashion Education",
    excerpt:
      "Discussing initiatives that bridge the gap between traditional craft knowledge and contemporary fashion design education.",
    content:
      "The National Institute of Fashion Technology has established resource centers that digitize and preserve traditional craft knowledge...",
    image: sharedImage,
    date: "2016-06-06",
    author: "Meera Nair",
    category: "Education",
  },
  {
    id: "7",
    title: "Handloom Clusters: Revitalizing Traditional Weaving Communities",
    excerpt:
      "Examining government initiatives aimed at developing handloom clusters to support traditional weavers.",
    content:
      "The Comprehensive Handloom Cluster Development Scheme aims to enhance the handloom sector by establishing mega clusters...",
    image: sharedImage,
    date: "2025-03-05",
    author: "Sunil Verma",
    category: "Policy",
  },
  {
    id: "8",
    title:
      "Empowering Women Through Traditional Textile Revival in Uttarakhand",
    excerpt:
      "Highlighting how Avani's initiatives in Uttarakhand are empowering women through the revival of traditional textile crafts.",
    content:
      "Avani's natural dye and textile program in Uttarakhand has been instrumental in reviving traditional handspun yarn and handwoven textiles...",
    image: sharedImage,
    date: "2020-01-15",
    author: "Anjali Joshi",
    category: "Empowerment",
  },
  {
    id: "9",
    title: "Revival of Traditional Handloom Techniques in Contemporary Fashion",
    excerpt:
      "Exploring how traditional handloom techniques are being integrated into modern fashion trends.",
    content:
      "A study discusses the resurgence of traditional handloom techniques in contemporary fashion...",
    image: sharedImage,
    date: "2024-10-17",
    author: "Akhil Goyal",
    category: "Fashion",
  },
  {
    id: "10",
    title: "Bridging Heritage and Modern Demand in Indian Traditional Textiles",
    excerpt:
      "Analyzing the efforts to align traditional textile crafts with contemporary market demands.",
    content:
      "Efforts to revive Indian traditional textiles involve bridging the gap between heritage and modern demand...",
    image: sharedImage,
    date: "2025-03-05",
    author: "Neha Gupta",
    category: "Market Trends",
  },
  {
    id: "11",
    title: "Reviving Ancient Textile Traditions: A Global Perspective",
    excerpt:
      "Exploring global efforts in rediscovering and preserving ancient textile traditions.",
    content:
      "Organizations worldwide, such as Blossom Global Trust, are working to support communities in preserving their textile heritage...",
    image: sharedImage,
    date: "2024-06-03",
    author: "Sanjay Patel",
    category: "Cultural Preservation",
  },
];

const blogPos = {
  id: "1",
  title: "The Art of Traditional Pottery Making",
  content: `Traditional pottery making is an art form that has been passed down through generations. The rhythmic turning of the wheel, the feel of clay taking shape beneath skilled hands, and the transformation of raw earth into functional art pieces are all part of this ancient craft.

    Today's artisans combine time-honored techniques with contemporary design sensibilities, creating pieces that bridge the gap between tradition and modern aesthetics. Each vessel tells a story of cultural heritage and artistic innovation.

    The process begins with carefully selected clay, often sourced from local deposits that have been used for centuries. The preparation of the clay itself is a crucial step, requiring precise moisture content and consistency. Master potters can tell the quality of clay simply by touch, a skill developed through years of experience.

    The throwing process, where the clay is centered and shaped on the wheel, requires both physical strength and delicate control. It's a dance between the potter and the clay, where even the slightest pressure can alter the final form. This intimate connection between artisan and material is what makes each piece unique.

    After the initial forming, pieces must dry slowly and evenly to prevent warping or cracking. The firing process, whether in traditional kilns or modern electric ones, is another critical stage where years of experience guide the artisan in achieving the desired results.

    Glazing adds the final touch, with recipes often kept as closely guarded secrets passed down through generations. The interaction between clay body and glaze during firing can create stunning effects that cannot be replicated by machine production.`,
  image:
    "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9?w=800",
  date: "2024-03-15",
  author: "Maria Rodriguez",
  category: "Crafts",
};
// Add other blog posts..

const categories = [
  {
    id: "pottery",
    name: "Pottery",
    image:
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop&q=60",
    description: "Traditional handcrafted ceramics and pottery",
  },
  {
    id: "painting",
    name: "Painting",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800",
    description: "Original artworks and traditional paintings",
  },
  {
    id: "coconut-shell",
    name: "Coconut Shell Art",
    image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=800",
    description: "Unique creations from natural coconut shells",
  },
  {
    id: "weaving",
    name: "Weaving",
    image: "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?w=800",
    description: "Hand-woven textiles and fiber arts",
  },
];

const featuredProducts = {
  Pottery: [
    {
      id: "p0",
      name: "Handcrafted Ceramic Vase",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=60",
      artisan: "Maria Rodriguez",
    },
    {
      id: "p1",
      name: "Handcrafted Ceramic Vase",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=60",
      artisan: "Maria Rodriguez",
    },
    {
      id: "p2",
      name: "Traditional Tea Set",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop&q=60",
      artisan: "John Chen",
    },
    {
      id: "p3",
      name: "Handmade Clay Mug",
      price: 34.99,
      image:
        "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop&q=60",
      artisan: "Alice Johnson",
    },
    {
      id: "p4",
      name: "Ceramic Dinner Plate",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop&q=60",
      artisan: "Tom Henson",
    },
  ],
  Textiles: [
    {
      id: "t1",
      name: "Hand-woven Tapestry",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?w=800",
      artisan: "Lisa Thompson",
    },
    {
      id: "t2",
      name: "Traditional Rug",
      price: 299.99,
      image:
        "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=800",
      artisan: "Ahmed Hassan",
    },
    {
      id: "t3",
      name: "Macrame Wall Hanging",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=800",
      artisan: "Sophia Walker",
    },
    {
      id: "t4",
      name: "Embroidered Pillow Cover",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=800",
      artisan: "Liam Davis",
    },
  ],
  Woodwork: [
    {
      id: "w1",
      name: "Carved Wooden Box",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=800",
      artisan: "David Miller",
    },
    {
      id: "w2",
      name: "Wooden Serving Bowl",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1541976590-713941681591?w=800",
      artisan: "Sarah Chen",
    },
    {
      id: "w3",
      name: "Wooden Picture Frame",
      price: 34.99,
      image:
        "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=800",
      artisan: "Michael Stevens",
    },
    {
      id: "w4",
      name: "Handcrafted Wooden Bench",
      price: 249.99,
      image:
        "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=800",
      artisan: "Elizabeth Green",
    },
  ],
};

const heroSlides = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=1200",
    title: "Discover Authentic Craftsmanship",
    link: "/products/pottery",
    description: "Explore our collection of handmade pottery",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200",
    title: "Traditional Art Forms",
    link: "/products/painting",
    description: "Original paintings from global artisans",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?w=1200",
    title: "Handwoven Excellence",
    link: "/products/weaving",
    description: "Discover unique handwoven textiles",
  },
];

let p = {
  id: "1",
  name: "Handcrafted Ceramic Vase with Traditional Motifs.",
  price: 79.99,
  originalPrice: 1009.99,
  description: `This exquisite handcrafted ceramic vase is a testament to traditional artisanship, featuring intricate motifs that tell stories of ancient crafting techniques. Each piece is uniquely created using time-honored methods passed down through generations.

The vase stands 12 inches tall and features a harmonious blend of earth tones, making it a versatile addition to any home décor. The surface is adorned with hand-painted designs inspired by traditional patterns.

• Material: High-quality ceramic clay
• Dimensions: 12" height x 6" diameter
• Handcrafted and hand-painted
• Food-safe glazing
• Each piece is unique with slight variations`,
  features: [
    "Hand-thrown on a traditional potter's wheel",
    "Fired at optimal temperature for durability",
    "Lead-free glazes safe for fresh flowers",
    "Signed by the artisan",
  ],
  category: "Pottery",
  inStock: true,
  images: [
    "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800",
    "https://images.unsplash.com/photo-1565193298357-75c6cf4c3e01?w=800",
    "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800",
    "https://images.unsplash.com/photo-1603561604478-f0936fdb7ded?w=800",
    "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800",
    "https://images.unsplash.com/photo-1576020799627-aeac74d58064?w=800",
  ],
  reviews: [
    {
      id: "r1",
      user: {
        name: "Sarah Johnson",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
      },
      rating: 5,
      comment:
        "Absolutely beautiful piece! The craftsmanship is exceptional and it looks even better in person.",
      date: "2024-03-15",
    },
    {
      id: "r2",
      user: {
        name: "Michael Chen",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
      },
      rating: 4,
      comment:
        "Great quality and beautiful design. Shipping was fast and secure.",
      date: "2024-03-10",
    },
  ],
  artisan: {
    id: "maria-rodriguez",
    name: "Maria Rodriguez",
    location: "Oaxaca, Mexico",
    rating: 4.8,
    sales: 1234,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
  },
};

const categoryProducts = {
  pottery: [
    {
      id: "p1",
      name: "Handcrafted Ceramic Vase",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800",
      artisan: "Maria Rodriguez",
    },
    {
      id: "p2",
      name: "Traditional Tea Set",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1565193298357-75c6cf4c3e01?w=800",
      artisan: "John Chen",
    },
  ],
  painting: [
    {
      id: "a1",
      name: "Abstract Mountain Landscape",
      price: 299.99,
      image:
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800",
      artisan: "Emma Wilson",
    },
    {
      id: "a2",
      name: "Traditional Village Scene",
      price: 249.99,
      image:
        "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800",
      artisan: "David Kumar",
    },
  ],
  "coconut-shell": [
    {
      id: "c1",
      name: "Decorative Coconut Bowl",
      price: 39.99,
      image:
        "https://images.unsplash.com/photo-1603561604478-f0936fdb7ded?w=800",
      artisan: "Sarah Lee",
    },
    {
      id: "c2",
      name: "Coconut Shell Lamp",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800",
      artisan: "Michael Patel",
    },
  ],
  weaving: [
    {
      id: "w1",
      name: "Hand-woven Wall Hanging",
      price: 159.99,
      image:
        "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?w=800",
      artisan: "Lisa Thompson",
    },
    {
      id: "w2",
      name: "Traditional Basket Set",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800",
      artisan: "Anna Martinez",
    },
  ],
};

const categoryTitles = {
  pottery: "Handcrafted Pottery",
  painting: "Original Paintings",
  "coconut-shell": "Coconut Shell Art",
  weaving: "Traditional Weaving",
};

const products = [
  {
    id: "1",
    name: "Handcrafted Ceramic Vase",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=60",
    category: "Pottery",
  },
  {
    id: "2",
    name: "Wooden Serving Bowl",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1541976590-713941681591?w=800&auto=format&fit=crop&q=60",
    category: "Wooden Arts",
  },
  {
    id: "3",
    name: "Handwoven Basket",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop&q=60",
    category: "Weaving",
  },
  {
    id: "4",
    name: "Handmade Pottery Mug",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1514866747592-c2d279258a78?w=800&auto=format&fit=crop&q=60",
    category: "Pottery",
  },
  {
    id: "5",
    name: "Macrame Wall Hanging",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=60",
    category: "Weaving",
  },
  {
    id: "6",
    name: "Carved Wooden Box",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=800&auto=format&fit=crop&q=60",
    category: "Wooden Arts",
  },
  {
    id: "7",
    name: "Handcrafted Leather Wallet",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=60",
    category: "Leatherwork",
  },
  {
    id: "8",
    name: "Handmade Ceramic Plate",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=60",
    category: "Pottery",
  },
  {
    id: "9",
    name: "Decorative Wooden Tray",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=60",
    category: "Wooden Arts",
  },
  {
    id: "10",
    name: "Woven Throw Blanket",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=60",
    category: "Weaving",
  },
  {
    id: "11",
    name: "Handmade Clay Sculpture",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=60",
    category: "Pottery",
  },
  {
    id: "12",
    name: "Bamboo Jewelry Stand",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=60",
    category: "Wooden Arts",
  },
  {
    id: "13",
    name: "Handwoven Wall Basket",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=60",
    category: "Weaving",
  },
  {
    id: "14",
    name: "Leather Backpack",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=60",
    category: "Leatherwork",
  },
  {
    id: "15",
    name: "Wooden Wall Clock",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=60",
    category: "Wooden Arts",
  },
];

// Sample route to test POST requests

app.get("/artisans", (req, res) => {
  res.json(artisans);
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  res.json(p);
});

app.get("/category", (req, res) => {
  res.json({
    categoryProducts: categoryProducts,
    categoryTitles: categoryTitles,
  });
});

app.get("/blogs", (req, res) => {
  res.json(blogPosts);
});

app.get("/blogs/:id", (req, res) => {
  res.json(blogPos);
});

app.get("/artisans/:id", (req, res) => {
  res.json(art);
});

app.get("/heroSlides", (req, res) => {
  res.json(heroSlides);
});

app.get("/featuredProducts", (req, res) => {
  res.json(featuredProducts);
});

app.get("/categories", (req, res) => {
  res.json(categories);
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
