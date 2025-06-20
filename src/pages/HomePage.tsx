import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchForm } from '../components/SearchForm';
import { Shield, Clock, Users, Star, CheckCircle, Award, Gift, Zap, Heart, TrendingUp } from 'lucide-react';
import { SearchFilters } from '../types';

export function HomePage() {
  const navigate = useNavigate();

  const handleSearch = (filters: SearchFilters) => {
    navigate('/search-results', { state: { filters } });
  };

  const features = [
    {
      icon: Shield,
      title: 'Seguridad Garantizada',
      description: 'Conductores certificados y buses con mantenimiento preventivo',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Clock,
      title: 'Puntualidad',
      description: 'Salidas puntuales y horarios confiables',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Users,
      title: 'Comodidad Premium',
      description: 'Asientos reclinables, WiFi gratuito y servicios a bordo',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Award,
      title: 'Excelencia Reconocida',
      description: 'Más de 30 años de experiencia y premios de calidad',
      color: 'bg-yellow-100 text-yellow-600'
    }
  ];

  const destinations = [
    {
      city: 'Lima - Arequipa',
      price: 'Desde S/ 45.00',
      duration: '16 horas',
      image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: true
    },
    {
      city: 'Lima - Trujillo',
      price: 'Desde S/ 35.00',
      duration: '8 horas',
      image: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: false
    },
    {
      city: 'Lima - Cusco',
      price: 'Desde S/ 65.00',
      duration: '22 horas',
      image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800',
      popular: true
    }
  ];

  const loyaltyBenefits = [
    {
      icon: Gift,
      title: 'Descuentos Exclusivos',
      description: 'Hasta 20% de descuento en tus viajes'
    },
    {
      icon: Zap,
      title: 'Check-in Prioritario',
      description: 'Evita las colas y aborda primero'
    },
    {
      icon: Heart,
      title: 'Puntos por Viaje',
      description: 'Acumula puntos y canjea viajes gratis'
    }
  ];

  return (
    <div className="min-h-screen bg-blanco-crema">
      {/* Hero Section - Mejorado */}
      <section className="relative bg-gradient-to-br from-azul-oscuro via-primary-700 to-primary-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-amarillo-dorado/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amarillo-dorado/20 px-4 py-2 rounded-full mb-6 animate-bounce-subtle">
              <Star className="h-5 w-5 text-amarillo-dorado" />
              <span className="text-sm font-medium">Empresa líder en transporte</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
              Tu Viaje <span className="text-amarillo-dorado">Perfecto</span>
              <br />Comienza Aquí
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto animate-fade-in">
              Conectamos destinos con seguridad, comodidad y puntualidad. 
              Más de 2 millones de pasajeros confían en nosotros cada año.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto animate-slide-up">
            <SearchForm onSearch={handleSearch} />
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { number: '30+', label: 'Años de experiencia' },
              { number: '150+', label: 'Destinos' },
              { number: '2M+', label: 'Pasajeros anuales' },
              { number: '99%', label: 'Satisfacción' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amarillo-dorado mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Mejorado */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-azul-oscuro/10 px-4 py-2 rounded-full mb-6">
              <CheckCircle className="h-5 w-5 text-azul-oscuro" />
              <span className="text-sm font-medium text-azul-oscuro">Calidad garantizada</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-azul-oscuro mb-6">
              ¿Por qué elegir NORTEEXPRESO?
            </h2>
            <p className="text-xl text-gris-suave max-w-3xl mx-auto">
              Tres décadas de experiencia nos respaldan como la mejor opción para tus viajes por todo el Perú
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-blanco-crema hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-amarillo-dorado/20"
              >
                <div className={`w-20 h-20 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-azul-oscuro mb-4">
                  {feature.title}
                </h3>
                <p className="text-gris-suave leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Program Section - Nuevo */}
      <section className="py-20 bg-gradient-to-r from-amarillo-dorado to-yellow-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-azul-oscuro mb-6">
              Programa de Fidelidad
            </h2>
            <p className="text-xl text-azul-oscuro/80 max-w-3xl mx-auto">
              Únete a nuestro programa VIP y disfruta de beneficios exclusivos en cada viaje
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {loyaltyBenefits.map((benefit, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white transition-colors">
                <div className="w-16 h-16 bg-azul-oscuro rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-amarillo-dorado" />
                </div>
                <h3 className="text-xl font-bold text-azul-oscuro mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gris-suave">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button
              onClick={() => navigate('/loyalty')}
              className="bg-azul-oscuro text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-600 transition-colors text-lg"
            >
              Únete Ahora - Es Gratis
            </button>
          </div>
        </div>
      </section>

      {/* Popular Destinations - Mejorado */}
      <section className="py-20 bg-blanco-crema">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-6">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-green-600">Rutas más populares</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-azul-oscuro mb-6">
              Destinos Favoritos
            </h2>
            <p className="text-xl text-gris-suave max-w-3xl mx-auto">
              Descubre los lugares más visitados por nuestros pasajeros y planifica tu próxima aventura
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {destination.popular && (
                    <div className="absolute top-4 left-4 bg-amarillo-dorado text-azul-oscuro px-3 py-1 rounded-full text-sm font-bold">
                      ⭐ Popular
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-azul-oscuro px-4 py-2 rounded-full font-bold">
                    {destination.price}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-azul-oscuro mb-3">
                    {destination.city}
                  </h3>
                  <p className="text-gris-suave mb-6 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Duración: {destination.duration}
                  </p>
                  <button className="w-full bg-azul-oscuro text-white py-3 px-6 rounded-xl hover:bg-primary-600 transition-colors font-semibold group-hover:bg-amarillo-dorado group-hover:text-azul-oscuro">
                    Ver Horarios
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Mejorado */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-azul-oscuro mb-6">
              Historias de Nuestros Pasajeros
            </h2>
            <p className="text-xl text-gris-suave max-w-3xl mx-auto">
              Miles de familias han confiado en nosotros para sus viajes más importantes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'María González',
                role: 'Empresaria',
                comment: 'Viajo por trabajo cada semana y NORTEEXPRESO nunca me ha fallado. El servicio es excepcional y los buses súper cómodos.',
                rating: 5,
                avatar: '👩‍💼'
              },
              {
                name: 'Carlos Mendoza',
                role: 'Padre de familia',
                comment: 'Llevé a mi familia de vacaciones a Cusco. Los niños viajaron cómodos y seguros. Sin duda nuestra primera opción.',
                rating: 5,
                avatar: '👨‍👩‍👧‍👦'
              },
              {
                name: 'Ana Rodríguez',
                role: 'Estudiante',
                comment: 'Como estudiante, valoro mucho la puntualidad y los precios justos. NORTEEXPRESO cumple con ambos.',
                rating: 5,
                avatar: '👩‍🎓'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-blanco-crema p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amarillo-dorado fill-current" />
                  ))}
                </div>
                
                <p className="text-gris-suave mb-6 italic text-lg leading-relaxed">
                  "{testimonial.comment}"
                </p>
                
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <p className="font-bold text-azul-oscuro text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-gris-suave">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mejorado */}
      <section className="py-20 bg-gradient-to-br from-azul-oscuro via-primary-700 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 right-20 w-40 h-40 bg-amarillo-dorado/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            ¿Listo para tu próxima aventura?
          </h2>
          <p className="text-xl mb-12 text-gray-200 max-w-3xl mx-auto">
            Reserva ahora y disfruta de nuestras promociones especiales. 
            Tu viaje perfecto te está esperando.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => navigate('/search')}
              className="bg-amarillo-dorado text-azul-oscuro px-10 py-4 rounded-xl font-bold hover:bg-yellow-500 transition-all duration-300 text-lg hover:scale-105"
            >
              Buscar Viajes Ahora
            </button>
            <button
              onClick={() => navigate('/loyalty')}
              className="border-2 border-amarillo-dorado text-amarillo-dorado px-10 py-4 rounded-xl font-bold hover:bg-amarillo-dorado hover:text-azul-oscuro transition-all duration-300 text-lg hover:scale-105"
            >
              Únete al Programa VIP
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}