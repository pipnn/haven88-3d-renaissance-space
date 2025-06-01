import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Star, Play, Phone, MessageCircle, Home, Palette, Wrench, Eye, Box } from "lucide-react";
import Scene3D from "@/components/Scene3D";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      features: ["Personalized Design", "Space Optimization", "Style Matching"],
      models: ['/src/leather_chairgltf.glb', '/src/red_chair.glb']
    },
    {
      title: "3D Visualization & Mood Boards",
      description: "See your future home before the work begins—with realistic renderings and mood boards that help you visualize the final outcome.",
      icon: <Eye className="w-8 h-8" />,
      features: ["3D Renderings", "Virtual Walkthrough", "Material Previews"],
      models: ['/src/bed.glb', '/src/bed_01.glb']
    },
    {
      title: "Project Management & Renovation",
      description: "We handle everything from start to finish, coordinating with contractors and suppliers to deliver high-quality results on time.",
      icon: <Wrench className="w-8 h-8" />,
      features: ["Full Project Management", "Quality Assurance", "Timely Delivery"],
      models: ['/src/office_chair.glb', '/src/table_wood.glb']
    },
    {
      title: "Floor Plans & 3D Rendering",
      description: "We help you select the best materials, color palettes, and finishes that align with your design vision and budget through detailed floor plans and 3D rendering.",
      icon: <Box className="w-8 h-8" />,
      features: ["Floor Plan Design", "3D Architectural Rendering", "Budget Optimization"],
      models: ['/src/restaurant_table_and_chairs.glb', '/src/bed (1).glb']
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
      includes: "Includes whole house flooring, kitchen cabinet, wardrobe, and painting",
      bonus: "Free TV cabinet & feature wall!"
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
      title: "Deluxe Toilet Package",
      price: "$3,888",
      originalPrice: "$4,320",
      discount: "10%",
      features: [
        "Hacking of floor and wall tiles",
        "Supply & install floor & wall tiles",
        "Supply & install false ceiling & lights",
        "Supply & install water basin",
        "Supply & install mirror & basic cabinet",
        "Supply & install WC & toilet accessories"
      ],
      isPopular: true
    }
  ];

  // 3D floating elements - using actual furniture models instead of cubes
  const FloatingFurniture = ({ delay = 0, size = "w-12 h-12", modelPath }: { delay?: number; size?: string; modelPath: string }) => (
    <div 
      className={`${size} absolute animate-float shadow-xl`}
      style={{ 
        animationDelay: `${delay}s`,
        transform: `translateY(${Math.sin(scrollY * 0.01 + delay) * 20}px) rotateX(${scrollY * 0.05}deg) rotateY(${scrollY * 0.1}deg)`
      }}
    >
      <Scene3D 
        models={[modelPath]}
        autoRotate={true}
        className="w-full h-full"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Floating 3D Elements - using actual furniture */}
      <FloatingFurniture delay={0} size="w-16 h-16" modelPath="/src/leather_chairgltf.glb" />
      <FloatingFurniture delay={1} size="w-12 h-12" modelPath="/src/red_chair.glb" />
      <FloatingFurniture delay={2} size="w-8 h-8" modelPath="/src/office_chair.glb" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 animate-slide-in-left">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-xl animate-pulse-slow">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl gradient-text">HAVEN 88</div>
                <div className="text-xs text-gray-400">HOME INTERIOR</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-8 animate-fade-in-up">
              <a href="#home" className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-110">Home</a>
              <a href="#services" className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-110">Services</a>
              <a href="#packages" className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-110">Packages</a>
              <a href="#gallery" className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-110">Gallery</a>
              <a href="#contact" className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-110">Contact</a>
            </div>
            <Button 
              onClick={() => openWhatsApp()} 
              className="bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with 3D Models */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3')",
            filter: 'brightness(0.3) contrast(1.2)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        ></div>
        
        {/* 3D Floating Elements in Hero */}
        <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: '0s' }}>
          <FloatingFurniture size="w-20 h-20" modelPath="/src/leather_chairgltf.glb" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <FloatingFurniture size="w-16 h-16" modelPath="/src/red_chair.glb" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '1s' }}>
          <FloatingFurniture size="w-12 h-12" modelPath="/src/office_chair.glb" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Badge className="mb-6 bg-orange-500/20 text-orange-300 border-orange-500/30 animate-pulse-slow">
              WE PROVIDE ULTIMATE
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight gradient-text animate-slide-in-left">
              HOME INTERIOR
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-slide-in-right">
              Design Your Dream, Build Your Haven
            </p>
            
            {/* 3D Scene Integration */}
            <div className="h-64 w-full mb-8 rounded-2xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-600">
              <Scene3D 
                models={['/src/leather_chairgltf.glb', '/src/table_wood.glb', '/src/office_chair.glb']}
                autoRotate={true}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Button 
                size="lg" 
                onClick={() => openWhatsApp("Hi! I'd like to book a free consultation for my home interior project.")}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Book Free Consultation
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 w-5 h-5" />
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with 3D Models */}
      <section id="services" className="py-20 bg-gray-800 relative overflow-hidden">
        {/* Floating 3D Furniture */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            '/src/table_wood.glb',
            '/src/bed.glb',
            '/src/restaurant_table_and_chairs.glb',
            '/src/office_chair.glb',
            '/src/red_chair.glb',
            '/src/leather_chairgltf.glb'
          ].map((modelPath, i) => (
            <div 
              key={i}
              className="absolute w-20 h-20 rounded-lg shadow-xl opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translateY(${Math.sin(scrollY * 0.005 + i) * 15}px) rotateZ(${scrollY * 0.05 + i * 10}deg)`,
                animationDelay: `${i * 0.5}s`
              }}
            >
              <Scene3D 
                models={[modelPath]}
                autoRotate={true}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-4 gradient-text">OUR SERVICES</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe every home is unique. Our team creates personalized interior design solutions that reflect your individual style, needs, and functionality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 card-3d bg-gray-700/50 backdrop-blur-sm border-gray-600 ${
                  activeService === index ? 'ring-2 ring-orange-500 shadow-2xl' : ''
                }`}
                onClick={() => setActiveService(index)}
                style={{
                  transform: `perspective(1000px) rotateX(${scrollY * 0.0005}deg) rotateY(${scrollY * 0.0005}deg)`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0 p-3 bg-orange-500/20 rounded-lg text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-gray-600 text-gray-200 hover:bg-orange-500 hover:text-white transition-all duration-300">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* 3D Model Preview for each service */}
                  <div className="h-48 w-full rounded-lg overflow-hidden bg-gray-800/50 border border-gray-600">
                    <Scene3D 
                      models={service.models}
                      autoRotate={activeService === index}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-gray-900 relative overflow-hidden">
        {/* More floating 3D furniture */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            '/src/bed.glb',
            '/src/leather_chairgltf.glb',
            '/src/table_wood.glb',
            '/src/office_chair.glb',
            '/src/restaurant_table_and_chairs.glb',
            '/src/red_chair.glb',
            '/src/bed_01.glb',
            '/src/bed (1).glb'
          ].map((modelPath, i) => (
            <div 
              key={i}
              className="absolute w-16 h-16 rounded-xl shadow-xl opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.7}s`,
                transform: `translateY(${Math.sin(scrollY * 0.008 + i) * 25}px) rotateZ(${scrollY * 0.05 + i * 20}deg)`
              }}
            >
              <Scene3D 
                models={[modelPath]}
                autoRotate={true}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-4 gradient-text">RENOVATION PACKAGES</h2>
            <p className="text-xl text-gray-300">
              Comprehensive packages tailored for different home types and budgets
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden card-3d bg-gray-800/50 backdrop-blur-sm border-gray-600 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  pkg.popular ? 'ring-2 ring-orange-500 shadow-2xl' : ''
                }`}
                style={{
                  transform: `perspective(1000px) rotateY(${scrollY * 0.01}deg)`,
                  animationDelay: `${index * 0.3}s`
                }}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                    Most Popular
                  </div>
                )}
                {pkg.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold animate-bounce">
                    {pkg.discount}
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">{pkg.type}</h3>
                  <div className="space-y-4 mb-6">
                    {pkg.rooms.map((room, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-600 hover:bg-gray-700/50 transition-colors rounded px-2">
                        <span className="text-gray-300">{room.size}</span>
                        <span className="text-xl font-bold text-orange-400">{room.price}</span>
                      </div>
                    ))}
                  </div>
                  {pkg.includes && (
                    <div className="bg-gray-700/50 p-4 rounded-lg mb-4 backdrop-blur-sm">
                      <p className="text-sm text-gray-300 mb-2">{pkg.includes}</p>
                      {pkg.bonus && (
                        <p className="text-sm font-semibold text-red-400">{pkg.bonus}</p>
                      )}
                    </div>
                  )}
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white shadow-2xl card-3d animate-fade-in-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-white/20 text-white animate-pulse">LIMITED TIME OFFER</Badge>
                <h3 className="text-3xl font-bold mb-4">Deluxe Toilet Package</h3>
                <div className="text-4xl font-bold mb-4">
                  $3,888 
                  <span className="text-lg line-through text-white/70 ml-2">$4,320</span>
                  <span className="text-lg bg-yellow-400 text-black px-2 py-1 rounded ml-2 animate-bounce">10% OFF</span>
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  {specialOffers[0].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center hover:translate-x-2 transition-transform">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="bg-yellow-400 text-black p-3 rounded-lg mb-4 font-semibold text-center animate-pulse">
                  10% off for the first 10 bookings
                </div>
                <Button 
                  size="lg" 
                  className="bg-white text-orange-500 hover:bg-gray-100 w-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => openWhatsApp("Hi! I'm interested in the Deluxe Toilet Package at $3,888. Can I book this special offer?")}
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Book Now @ 92392757
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3" 
                  alt="Modern Bathroom Design" 
                  className="rounded-lg shadow-2xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us with 3D Models */}
      <section className="py-20 bg-gray-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-white mb-6 gradient-text">WHY CHOOSE US</h2>
              <p className="text-lg text-gray-300 mb-8">
                We believe every home is unique. Our team creates personalized interior design solutions that reflect your individual style, needs, and functionality.
              </p>
              
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 card-3d p-4 bg-gray-700/30 rounded-lg backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                className="mt-8 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => openWhatsApp()}
              >
                Learn More About Us
              </Button>
            </div>
            
            {/* 3D Model Showcase */}
            <div className="relative animate-slide-in-right h-96">
              <Scene3D 
                models={['/src/bed.glb', '/src/red_chair.glb', '/src/restaurant_table_and_chairs.glb']}
                autoRotate={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-4 gradient-text">RECENT PROJECTS</h2>
            <p className="text-xl text-gray-300">
              Every room, a reflection of you
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="space-y-4 animate-slide-in-left">
              <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3" alt="Living Room" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-500 shadow-xl card-3d" />
              <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3" alt="Kitchen" className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-500 shadow-xl card-3d" />
            </div>
            <div className="space-y-4 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3" alt="Bedroom" className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-500 shadow-xl card-3d" />
              <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3" alt="Bathroom" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-500 shadow-xl card-3d" />
            </div>
            <div className="space-y-4 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3" alt="Dining" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-500 shadow-xl card-3d" />
              <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3" alt="Office" className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-500 shadow-xl card-3d" />
            </div>
            <div className="space-y-4 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
              <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3" alt="Modern Space" className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-500 shadow-xl card-3d" />
              <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3" alt="Luxury Interior" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-500 shadow-xl card-3d" />
            </div>
          </div>
          
          <div className="text-center animate-fade-in-up">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => openWhatsApp("Hi! I'd like to see more of your portfolio and discuss my project.")}
            >
              View Full Portfolio
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        {/* Final floating furniture elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            '/src/leather_chairgltf.glb',
            '/src/office_chair.glb',
            '/src/red_chair.glb',
            '/src/table_wood.glb',
            '/src/bed.glb'
          ].map((modelPath, i) => (
            <FloatingFurniture key={i} delay={i} size={i % 2 === 0 ? "w-16 h-16" : "w-12 h-12"} modelPath={modelPath} />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 gradient-text animate-fade-in-up">Ready to Transform Your Home?</h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up">
            Contact us today for a free consultation and let's bring your dream home to life
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-gray-800/50 border-gray-600 text-white backdrop-blur-sm card-3d hover:scale-105 transition-transform duration-300 animate-slide-in-left">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 mx-auto mb-4 text-orange-400 animate-bounce" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300">+65 9239 2757</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-600 text-white backdrop-blur-sm card-3d hover:scale-105 transition-transform duration-300 animate-slide-in-right">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-8 h-8 mx-auto mb-4 text-green-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-300">Quick Response Guaranteed</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-4 animate-fade-in-up">
            <Button 
              size="lg" 
              onClick={() => openWhatsApp("Hi Haven88! I'm ready to start my home transformation project. Can we schedule a consultation?")}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-lg px-8 py-4 mr-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Start Your Project Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => openWhatsApp("Hi! I'd like to get a quote for my renovation project.")}
              className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get Free Quote
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 animate-fade-in-up">
            <p>&copy; 2024 Haven88 Home Interior. Design Your Dream, Build Your Haven.</p>
            <p className="mt-2">10 Admiralty Street, #03-60, North Link Building, Singapore 757695</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
