import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Clock, MapPin, Users, CreditCard } from 'lucide-react';
import { SearchFilters, Viaje } from '../types';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export function SearchResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [viajes, setViajes] = useState<Viaje[]>([]);
  const [loading, setLoading] = useState(true);
  const filters = location.state?.filters as SearchFilters;

  useEffect(() => {
    if (!filters) {
      navigate('/search');
      return;
    }

    // Simulación de búsqueda - en producción se conectaría a la API
    setTimeout(() => {
      const mockViajes: Viaje[] = [
        {
          codigo: 1,
          fecha_hora_salida: `${filters.fecha}T08:00:00`,
          fecha_hora_llegada_estimada: `${filters.fecha}T16:00:00`,
          estado: 'Programado',
          ruta: {
            codigo: 1,
            origen: filters.origen,
            destino: filters.destino,
            costo_referencial: 45.00
          },
          bus: {
            codigo: 1,
            placa: 'ABC-123',
            fabricante: 'Mercedes Benz',
            num_asientos: 40,
            estado: 'Operativo'
          },
          chofer: {
            codigo: 1,
            nombre: 'Juan',
            apellidos: 'Pérez',
            dni: '12345678',
            direccion: 'Lima',
            telefono: '999999999',
            email: 'juan@norteexpreso.com',
            cargo: 'Chofer',
            area: 'Operaciones'
          },
          asientos_disponibles: 35
        },
        {
          codigo: 2,
          fecha_hora_salida: `${filters.fecha}T14:00:00`,
          fecha_hora_llegada_estimada: `${filters.fecha}T22:00:00`,
          estado: 'Programado',
          ruta: {
            codigo: 2,
            origen: filters.origen,
            destino: filters.destino,
            costo_referencial: 50.00
          },
          bus: {
            codigo: 2,
            placa: 'DEF-456',
            fabricante: 'Scania',
            num_asientos: 44,
            estado: 'Operativo'
          },
          chofer: {
            codigo: 2,
            nombre: 'Carlos',
            apellidos: 'García',
            dni: '87654321',
            direccion: 'Lima',
            telefono: '888888888',
            email: 'carlos@norteexpreso.com',
            cargo: 'Chofer',
            area: 'Operaciones'
          },
          asientos_disponibles: 20
        },
        {
          codigo: 3,
          fecha_hora_salida: `${filters.fecha}T20:00:00`,
          fecha_hora_llegada_estimada: `${new Date(new Date(filters.fecha).getTime() + 24*60*60*1000).toISOString().split('T')[0]}T04:00:00`,
          estado: 'Programado',
          ruta: {
            codigo: 3,
            origen: filters.origen,
            destino: filters.destino,
            costo_referencial: 42.00
          },
          bus: {
            codigo: 3,
            placa: 'GHI-789',
            fabricante: 'Volvo',
            num_asientos: 36,
            estado: 'Operativo'
          },
          chofer: {
            codigo: 3,
            nombre: 'Miguel',
            apellidos: 'Torres',
            dni: '11223344',
            direccion: 'Lima',
            telefono: '777777777',
            email: 'miguel@norteexpreso.com',
            cargo: 'Chofer',
            area: 'Operaciones'
          },
          asientos_disponibles: 28
        }
      ];
      
      setViajes(mockViajes);
      setLoading(false);
    }, 1000);
  }, [filters, navigate]);

  const handleSelectViaje = (viaje: Viaje) => {
    navigate('/booking', { state: { viaje, filters } });
  };

  const formatTime = (datetime: string) => {
    return format(new Date(datetime), 'HH:mm', { locale: es });
  };

  const formatDuration = (salida: string, llegada: string) => {
    const start = new Date(salida);
    const end = new Date(llegada);
    const diffHours = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60));
    return `${diffHours}h`;
  };

  if (!filters) {
    return null;
  }

  return (
    <div className="min-h-screen bg-blanco-crema py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h1 className="text-2xl md:text-3xl font-bold text-azul-oscuro mb-2">
                  {filters.origen} → {filters.destino}
                </h1>
                <p className="text-gris-suave">
                  {format(new Date(filters.fecha), 'EEEE, d MMMM yyyy', { locale: es })} • {filters.pasajeros} {filters.pasajeros === 1 ? 'pasajero' : 'pasajeros'}
                </p>
              </div>
              <button
                onClick={() => navigate('/search')}
                className="bg-azul-oscuro text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors"
              >
                Modificar búsqueda
              </button>
            </div>
          </div>

          {/* Loading */}
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-azul-oscuro mx-auto mb-4"></div>
              <p className="text-gris-suave">Buscando viajes disponibles...</p>
            </div>
          )}

          {/* Results */}
          {!loading && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-azul-oscuro">
                  {viajes.length} viajes encontrados
                </h2>
                <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-azul-oscuro focus:border-azul-oscuro">
                  <option>Ordenar por horario</option>
                  <option>Ordenar por precio</option>
                  <option>Ordenar por duración</option>
                </select>
              </div>

              {viajes.map((viaje) => (
                <div key={viaje.codigo} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                      {/* Horarios */}
                      <div className="lg:col-span-2">
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-azul-oscuro">
                              {formatTime(viaje.fecha_hora_salida)}
                            </div>
                            <div className="text-sm text-gris-suave">
                              {viaje.ruta.origen}
                            </div>
                          </div>
                          
                          <div className="flex-1 relative">
                            <div className="border-t-2 border-gray-300 relative">
                              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amarillo-dorado text-azul-oscuro text-xs px-2 py-1 rounded-full font-medium">
                                {formatDuration(viaje.fecha_hora_salida, viaje.fecha_hora_llegada_estimada)}
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-center">
                            <div className="text-2xl font-bold text-azul-oscuro">
                              {formatTime(viaje.fecha_hora_llegada_estimada)}
                            </div>
                            <div className="text-sm text-gris-suave">
                              {viaje.ruta.destino}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex items-center space-x-4 text-sm text-gris-suave">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {viaje.bus.fabricante}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {viaje.asientos_disponibles} asientos disponibles
                          </div>
                        </div>
                      </div>

                      {/* Precio */}
                      <div className="text-center lg:text-right">
                        <div className="text-3xl font-bold text-azul-oscuro mb-1">
                          S/ {viaje.ruta.costo_referencial.toFixed(2)}
                        </div>
                        <div className="text-sm text-gris-suave">
                          por pasajero
                        </div>
                      </div>

                      {/* Botón */}
                      <div className="text-center lg:text-right">
                        <button
                          onClick={() => handleSelectViaje(viaje)}
                          className="w-full lg:w-auto bg-amarillo-dorado text-azul-oscuro px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center justify-center space-x-2"
                        >
                          <CreditCard className="h-5 w-5" />
                          <span>Seleccionar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No results */}
          {!loading && viajes.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🚌</div>
              <h3 className="text-xl font-semibold text-azul-oscuro mb-2">
                No hay viajes disponibles
              </h3>
              <p className="text-gris-suave mb-6">
                No encontramos viajes para esta ruta en la fecha seleccionada.
              </p>
              <button
                onClick={() => navigate('/search')}
                className="bg-azul-oscuro text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
              >
                Buscar otras fechas
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}