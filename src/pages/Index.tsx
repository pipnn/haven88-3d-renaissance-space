
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Star, Play, Phone, MessageCircle, Home, Palette, Wrench, Eye } from "lucide-react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const whatsappNumber = "+6592392757";
  const whatsappMessage = "Hi Haven88! I'm interested in your interior design services. Could you provide me with more information?";

  const openWhatsApp = (customMessage?: string) => {
    const message = customMessage || whatsappMessage;
    const url = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const services = [
    {
      title: "Custom Interior Design Solutions",
      description: "We tailor every design to match your lifestyle, preferences, and space requirements—creating unique homes that reflect your personality.",
      icon: <Palette className="w-8 h-8" />,
      features: ["Personalized Design", "Space Optimization", "Style Matching"]
    },
    {
      title: "3D Visualization & Mood Boards",
      description: "See your future home before the work begins—with realistic renderings and mood boards that help you visualize the final outcome.",
      icon: <Eye className="w-8 h-8" />,
      features: ["3D Renderings", "Virtual Walkthrough", "Material Previews"]
    },
    {
      title: "Project Management & Renovation",
      description: "We handle everything from start to finish, coordinating with contractors and suppliers to deliver high-quality results on time.",
      icon: <Wrench className="w-8 h-8" />,
      features: ["Full Project Management", "Quality Assurance", "Timely Delivery"]
    },
    {
      title: "Material & Color Consultation",
      description: "We help you select the best materials, color palettes, and finishes that align with your design vision and budget.",
      icon: <Home className="w-8 h-8" />,
      features: ["Material Selection", "Color Coordination", "Budget Optimization"]
    }
  ];

  const packages = [
    {
      type: "BTO & EC PACKAGE",
      rooms: [
        { size: "2 bedroom", price: "$8,999" },
        { size: "3 bedroom", price: "$9,999" },
        { size: "4 bedroom", price: "$10,999" },
        { size: "5 bedroom", price: "$11,999" },
        { size: "EC & Condo", price: "$12,999" }
      ],
      popular: false
    },
    {
      type: "RESALE HDB PACKAGE",
      rooms: [
        { size: "3 bedroom", price: "$16,888" },
        { size: "4 bedroom", price: "$19,888" },
        { size: "5 bedroom", price: "$22,888" }
      ],
      popular: true,
      discount: "Up to 30%",
      includes: "Include Whole house flooring, Kitchen cabinet, wardrobe, Painting",
      bonus: "Free TV cabinet & feature wall !!!"
    }
  ];

  const whyChooseUs = [
    {
      title: "Personalized Design Solutions",
      description: "We take the time to understand your unique needs, style preferences, and functional requirements, creating customized spaces that reflect your personality and enhance your lifestyle.",
      icon: "🎨"
    },
    {
      title: "Expertise and Experience",
      description: "With years of experience in the industry, our team combines creativity with technical expertise to deliver high-quality, aesthetically pleasing, and practical designs—no matter the size or scope of your project.",
      icon: "⚡"
    },
    {
      title: "Seamless Execution and Support",
      description: "From concept to completion, we manage every detail of the design process, ensuring a smooth and stress-free experience. We handle logistics, sourcing, and coordination so you can focus on enjoying your transformed space.",
      icon: "🔧"
    }
  ];

  const specialOffers = [
    {
      title: "Deluxy Toilet Package",
      price: "$3,888",
      originalPrice: "$4,320",
      discount: "10%",
      features: [
        "Hacking of floor and work tiles",
        "Supply & install floor & work tiles",
        "Supply & install false ceiling & light",
        "Supply & install Water basin",
        "Supply & install Mirror & basic Cabinet",
        "Supply install WC & Toilet accessories"
      ],
      isPopular: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl">HAVEN 88</div>
                <div className="text-xs text-gray-600">HOME INTERIOR</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-900 hover:text-orange-500 transition-colors">Home</a>
              <a href="#services" className="text-gray-900 hover:text-orange-500 transition-colors">Services</a>
              <a href="#packages" className="text-gray-900 hover:text-orange-500 transition-colors">Packages</a>
              <a href="#gallery" className="text-gray-900 hover:text-orange-500 transition-colors">Gallery</a>
              <a href="#contact" className="text-gray-900 hover:text-orange-500 transition-colors">Contact</a>
            </div>
            <Button onClick={() => openWhatsApp()} className="bg-green-500 hover:bg-green-600">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-20000 hover:scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3')"
          }}
        ></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Badge className="mb-6 bg-orange-500/20 text-orange-300 border-orange-500/30">
              WE PROVIDE ULTIMATE
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              HOME INTERIOR
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Design Your Dream, Build Your Haven
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => openWhatsApp("Hi! I'd like to book a free consultation for my home interior project.")}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4"
              >
                Book Free Consultation
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4"
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 w-5 h-5" />
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR SERVICES</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe every home is unique. Our team creates personalized interior design solutions that reflect your individual style, needs, and functionality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  activeService === index ? 'ring-2 ring-orange-500 shadow-xl' : ''
                }`}
                onClick={() => setActiveService(index)}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-orange-100 rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">RENOVATION PACKAGES</h2>
            <p className="text-xl text-gray-600">
              Comprehensive packages tailored for different home types and budgets
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden ${pkg.popular ? 'ring-2 ring-orange-500 shadow-xl' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                {pkg.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold">
                    {pkg.discount}
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{pkg.type}</h3>
                  <div className="space-y-4 mb-6">
                    {pkg.rooms.map((room, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">{room.size}</span>
                        <span className="text-xl font-bold text-orange-500">{room.price}</span>
                      </div>
                    ))}
                  </div>
                  {pkg.includes && (
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p className="text-sm text-gray-700 mb-2">{pkg.includes}</p>
                      {pkg.bonus && (
                        <p className="text-sm font-semibold text-red-500">{pkg.bonus}</p>
                      )}
                    </div>
                  )}
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                    onClick={() => openWhatsApp(`Hi! I'm interested in the ${pkg.type}. Could you provide more details?`)}
                  >
                    Get Quote Now
                    <MessageCircle className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Special Offers */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-white/20 text-white">LIMITED TIME OFFER</Badge>
                <h3 className="text-3xl font-bold mb-4">Deluxy Toilet Package</h3>
                <div className="text-4xl font-bold mb-4">
                  $3,888 
                  <span className="text-lg line-through text-white/70 ml-2">$4,320</span>
                  <span className="text-lg bg-yellow-400 text-black px-2 py-1 rounded ml-2">10% OFF</span>
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  {specialOffers[0].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="bg-yellow-400 text-black p-3 rounded-lg mb-4 font-semibold text-center">
                  10% off for the first 10 bookings
                </div>
                <Button 
                  size="lg" 
                  className="bg-white text-orange-500 hover:bg-gray-100 w-full"
                  onClick={() => openWhatsApp("Hi! I'm interested in the Deluxy Toilet Package at $3,888. Can I book this special offer?")}
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Book Now @ 92392757
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3" 
                  alt="Modern Bathroom Design" 
                  className="rounded-lg shadow-2xl w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">WHY CHOOSE US</h2>
              <p className="text-lg text-gray-600 mb-8">
                We believe every home is unique. Our team creates personalized interior design solutions that reflect your individual style, needs, and functionality.
              </p>
              
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                className="mt-8 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
                onClick={() => openWhatsApp()}
              >
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3" 
                alt="Modern Kitchen Interior" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">RECENT PROJECTS</h2>
            <p className="text-xl text-gray-600">
              Every room, a reflection of you
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3" alt="Living Room" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
              <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3" alt="Kitchen" className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3" alt="Bedroom" className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
              <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3" alt="Bathroom" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3" alt="Dining" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
              <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3" alt="Office" className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3" alt="Modern Space" className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
              <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3" alt="Luxury Interior" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => openWhatsApp("Hi! I'd like to see more of your portfolio and discuss my project.")}
            >
              View Full Portfolio
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Home?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free consultation and let's bring your dream home to life
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 mx-auto mb-4 text-orange-400" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300">+65 9239 2757</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-8 h-8 mx-auto mb-4 text-green-400" />
                <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-300">Quick Response Guaranteed</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-4">
            <Button 
              size="lg" 
              onClick={() => openWhatsApp("Hi Haven88! I'm ready to start my home transformation project. Can we schedule a consultation?")}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-lg px-8 py-4 mr-4"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Start Your Project Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => openWhatsApp("Hi! I'd like to get a quote for my renovation project.")}
              className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4"
            >
              Get Free Quote
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20 text-center text-gray-400">
            <p>&copy; 2024 Haven88 Home Interior. Design Your Dream, Build Your Haven.</p>
            <p className="mt-2">10 Admiralty Street, #03-60, North Link Building, Singapore 757695</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
