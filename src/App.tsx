import React, { useState, useEffect, useMemo, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import {
  Zap, CheckCircle, Clock, RefreshCw, XCircle, Loader2,
  Package, Target, Trophy, Map as MapIcon, User, Lock, PenTool
} from 'lucide-react';

// --- IMPORTS DE TUS DATOS ---
import { FILL_DISPENSER, RestockEntry, restockData } from './data';
import { usersList } from './users';

// --- TYPES ---
interface Material {
  item: string;
  max: number | typeof FILL_DISPENSER | string; // Adaptado para aceptar strings
  unit: string;
  imgUrl: string;
}

interface RoutePoint {
  id: string;
  order: number;
  name: string;
  roomName: string;
  materials: Material[];
}

// Helper para construir la ruta
const buildRoutePoints = (data: RestockEntry[]): RoutePoint[] => {
  const pointMap = new Map<string, RoutePoint>();

  data.forEach(entry => {
    const key = `${entry.zona}-${entry.puntoId}`;
    if (!pointMap.has(key)) {
      pointMap.set(key, {
        id: entry.puntoId,
        order: entry.order,
        name: entry.puntoNombre,
        roomName: entry.zona,
        materials: []
      });
    }
    const point = pointMap.get(key)!;
    point.materials.push({
      item: entry.material,
      max: entry.cantidad,
      unit: entry.unidad,
      imgUrl: entry.foto
    });
  });

  return [...pointMap.values()].sort((a, b) => a.order - b.order);
};

// --- COMPONENTE PRINCIPAL ---

const App = () => {

 
  // --- AÑADE ESTA LÍNEA AQUÍ ---
  console.log("LISTA DE USUARIOS:", usersList); 
  
  // Estados de la App
  const [isLoading, setIsLoading] = useState(true);
  const [points, setPoints] = useState<RoutePoint[]>([]);
  const [completedPoints, setCompletedPoints] = useState<string[]>([]);
  const [isRouteFinished, setIsRouteFinished] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Estados de Usuario y Login
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedUserLogin, setSelectedUserLogin] = useState("");

  // Referencia para la firma
  const signPadRef = useRef<SignatureCanvas>(null);

  // Carga inicial
  useEffect(() => {
    const routePoints = buildRoutePoints(restockData);
    setPoints(routePoints);
    setIsLoading(false);
  }, []);

  // --- LÓGICA DE LOGIN ---
  const handleLogin = () => {
    if (!selectedUserLogin) return alert("Selecciona un usuario");

    const userFound = usersList.find(u => u.name === selectedUserLogin);
    
    if (userFound?.role === 'admin') {
      const password = prompt("Introduce contraseña de Gestor:");
      if (password === "admin123") { // CONTRASEÑA SENCILLA
        setCurrentUser(userFound.name);
        setIsAdmin(true);
      } else {
        alert("Contraseña incorrecta");
      }
    } else {
      setCurrentUser(selectedUserLogin);
      setIsAdmin(false);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAdmin(false);
    setSelectedUserLogin("");
    handleResetSession();
  };

  // --- LÓGICA DE RUTA ---
  const totalPoints = points.length;
  const completedCount = completedPoints.length;
  const remainingCount = totalPoints - completedCount;
  const progressPercentage = totalPoints > 0 ? (completedCount / totalPoints) * 100 : 0;

  const nextPoint = useMemo(() => {
    if (totalPoints === 0 || completedCount === totalPoints) return null;
    return points.find(p => !completedPoints.includes(p.id));
  }, [points, completedPoints, totalPoints, completedCount]);

  const handleCompletePoint = () => {
    if (!nextPoint) return;
    const newCompletedPoints = [...completedPoints, nextPoint.id];
    setCompletedPoints(newCompletedPoints);
    if (newCompletedPoints.length === totalPoints) {
      setIsRouteFinished(true);
    }
  };

  const handleResetSession = () => {
    setCompletedPoints([]);
    setIsRouteFinished(false);
  };

  const handleSaveAndSign = () => {
    if (signPadRef.current?.isEmpty()) {
      alert("Por favor, firma antes de terminar.");
      return;
    }
    const signatureImage = signPadRef.current?.getTrimmedCanvas().toDataURL('image/png');
    
    console.log("Ruta Guardada:");
    console.log("Usuario:", currentUser);
    console.log("Firma:", signatureImage);
    // AQUÍ IRÁ EL CÓDIGO PARA GUARDAR EN FIREBASE EN EL FUTURO

    alert("¡Ruta guardada y firmada correctamente!");
    handleLogout(); // Salir para que entre el siguiente compañero
  };

  const clearSignature = () => {
    signPadRef.current?.clear();
  };

  // --- VISTAS ---

  if (error) return <div className="p-8 text-red-600">{error}</div>;

  // 1. VISTA LOGIN
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div className="bg-indigo-100 p-4 rounded-full">
              <User className="w-12 h-12 text-indigo-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Identificación</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Selecciona tu nombre</label>
<select 
  style={{ width: '100%', padding: '10px', border: '2px solid black', fontSize: '16px' }}
  className="w-full p-3 border border-gray-300 rounded-lg bg-white"
  value={selectedUserLogin}
  onChange={(e) => setSelectedUserLogin(e.target.value)}
>
                <option value="">-- Seleccionar --</option>
                {usersList.map((u) => (
                  <option key={u.name} value={u.name}>{u.name}</option>
                ))}
              </select>
            </div>
            
            <button 
              onClick={handleLogin}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. VISTA FINALIZACIÓN Y FIRMA
  if (isRouteFinished) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg text-center">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">¡Ruta Completada!</h2>
          <p className="text-gray-600 mb-6">Usuario: <strong>{currentUser}</strong></p>

          <div className="border-t border-gray-200 pt-4 text-left">
            <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
              <PenTool className="w-4 h-4 mr-2" /> Firma aquí para validar:
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 touch-none">
              <SignatureCanvas 
                ref={signPadRef}
                penColor="black"
                canvasProps={{ className: 'w-full h-40' }}
              />
            </div>
            <button onClick={clearSignature} className="text-xs text-red-500 mt-2 hover:underline">
              Borrar firma
            </button>
          </div>

          <button
            onClick={handleSaveAndSign}
            className="w-full mt-6 flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Guardar y Finalizar
          </button>
        </div>
      </div>
    );
  }

  // 3. VISTA PRINCIPAL DE LA RUTA
  const RestockMaterialItem = ({ item, max, unit, imgUrl }: Material) => {
    const isFill = max === FILL_DISPENSER;
    return (
      <div className="flex items-center p-3 bg-white rounded-lg shadow-sm border border-blue-100">
        <img
          src={imgUrl}
          alt={item}
          className="w-12 h-12 object-cover rounded-md mr-3 bg-gray-100"
        />
        <div className="flex-grow">
          <p className="font-semibold text-gray-800">{item}</p>
          <p className="text-sm text-gray-500 flex items-center">
            <Package className="w-3 h-3 mr-1 text-blue-500" />
            <span className="font-bold ml-1 text-blue-600">
              {isFill ? 'Llenar / Revisar' : `${max} ${unit}`}
            </span>
          </p>
        </div>
      </div>
    );
  };

  const CurrentPointCard = () => {
    if (!nextPoint) return null;
    const cardsBehind = Math.max(0, remainingCount - 1);
    const visibleStack = Math.min(cardsBehind, 3); 

    return (
      <div className="flex flex-col h-full relative pt-8" style={{ perspective: '1000px' }}>
        {/* Efecto de cartas traseras */}
        {Array.from({ length: visibleStack }).reverse().map((_, i) => {
            const index = visibleStack - 1 - i;
            const yOffset = (index + 1) * -8;
            const scale = 1 - ((index + 1) * 0.04);
            return (
                <div key={`stack-${index}`} className="absolute inset-0 bg-gray-200 rounded-xl shadow-sm"
                    style={{
                        transformOrigin: 'top center',
                        transform: `translateY(${yOffset}px) scale(${scale})`,
                        zIndex: 0, top: '2rem',
                    }}
                ></div>
            );
        })}

        {/* Carta Principal */}
        <div className="flex flex-col h-full relative z-10 bg-white rounded-xl shadow-2xl border-t-8 border-indigo-500 overflow-hidden">
          <div className="p-6 bg-indigo-50 border-b-2 border-indigo-200">
              <div className="flex items-center text-indigo-700 mb-2">
                  <MapIcon className="w-5 h-5 mr-2" />
                  <span className="text-sm font-semibold uppercase">ZONA / SALA</span>
              </div>
              <h2 className="text-2xl font-extrabold text-indigo-900">{nextPoint.roomName}</h2>
              <div className="flex items-center justify-between pt-2 mt-2 border-t border-indigo-200">
                  <span className="font-bold text-gray-700">Punto:</span>
                  <div className="text-2xl font-extrabold text-gray-800 bg-white py-1 px-3 rounded shadow-sm border">
                      {nextPoint.id}
                  </div>
              </div>
          </div>

          <div className="flex-grow p-4 space-y-4 overflow-y-auto">
              <div className="bg-blue-50 p-3 rounded text-center">
                  <p className="font-bold text-lg text-blue-900">{nextPoint.name}</p>
              </div>
              <h4 className="text-md font-semibold text-gray-600 border-b pb-1">Materiales:</h4>
              <div className="space-y-2">
                {nextPoint.materials.map((mat, idx) => (
                    <RestockMaterialItem key={idx} {...mat} />
                ))}
              </div>
          </div>

          <div className="p-4 bg-gray-50 border-t">
              <button
                onClick={handleCompletePoint}
                className="w-full flex items-center justify-center px-6 py-4 bg-indigo-600 text-white text-xl font-bold rounded-full shadow-lg hover:bg-indigo-700 active:scale-95 transition"
              >
                 <CheckCircle className="w-6 h-6 mr-2" />
                 HECHO
              </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans p-4 sm:p-8 flex justify-center">
      <div className="w-full max-w-xl flex flex-col h-[90vh]">
        {/* CABECERA CON BOTÓN GESTIÓN */}
        <header className="mb-4 flex-shrink-0">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-extrabold text-indigo-700 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-yellow-500" />
                Ruta Reposición
              </h1>
              <p className="text-xs text-gray-500">Hola, <span className="font-bold">{currentUser}</span></p>
            </div>
            
            <div className="flex flex-col items-end gap-2">
              <button onClick={handleLogout} className="text-xs text-gray-400 hover:text-red-500 underline">Salir</button>
              
              {/* BOTÓN GESTIÓN (SOLO GESTOR) */}
              {isAdmin && (
                <button 
                  onClick={() => alert("Para editar materiales, edita el archivo data.ts en GitHub por ahora.")}
                  className="flex items-center px-3 py-1 bg-gray-800 text-white text-xs rounded shadow hover:bg-black"
                >
                  <Lock className="w-3 h-3 mr-1" /> Gestión
                </button>
              )}
            </div>
          </div>

          <div className="relative pt-4">
            <div className="overflow-hidden h-3 text-xs flex rounded-full bg-indigo-200">
                <div style={{ width: `${progressPercentage}%` }} className="bg-indigo-600 transition-all duration-700"></div>
            </div>
            <div className="flex justify-between text-xs font-bold text-gray-500 px-1 mt-1">
                <span>{completedCount} completados</span>
                <span>{remainingCount} restantes</span>
            </div>
          </div>
        </header>

        <main className="flex-grow flex flex-col relative pb-2">
          {isLoading ? (
            <div className="flex items-center justify-center h-full"><Loader2 className="animate-spin" /></div>
          ) : (
             <CurrentPointCard />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;