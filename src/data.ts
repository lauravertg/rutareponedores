const FILL_DISPENSER = 999;

interface RestockEntry {
  zona: string;
  puntoId: string;
  puntoNombre: string;
  order: number;
  material: string;
  cantidad: number | string; // Acepta números y texto
  unidad: string;
  foto: string;
}

const restockData: RestockEntry[] = [
  // --- 1. LABORATORIO DE CALIDAD ---
  { zona: '1. Laboratorio de calidad', puntoId: '1a', puntoNombre: 'Punto 1a', order: 1, material: 'Burka verde 1 uso', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/22C55E/ffffff?text=Burka' },
  { zona: '1. Laboratorio de calidad', puntoId: '1a', puntoNombre: 'Punto 1a', order: 2, material: 'Bata visita 1 uso', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/3B82F6/ffffff?text=Bata' },
  { zona: '1. Laboratorio de calidad', puntoId: '1a', puntoNombre: 'Punto 1a', order: 3, material: 'Peúcos 1 uso', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/6366F1/ffffff?text=Peucos' },
  { zona: '1. Laboratorio de calidad', puntoId: '1a', puntoNombre: 'Punto 1a', order: 4, material: 'Guante nitrilo S, M, L y XL', cantidad: '1-2', unidad: 'cajas', foto: 'https://placehold.co/80x80/10B981/ffffff?text=Guantes' },
  
  { zona: '1. Laboratorio de calidad', puntoId: '1b', puntoNombre: 'Punto 1b', order: 5, material: 'Jabón de manos', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/F59E0B/ffffff?text=Jabon' },
  { zona: '1. Laboratorio de calidad', puntoId: '1b', puntoNombre: 'Punto 1b', order: 6, material: 'Papel azul manos', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/0EA5E9/ffffff?text=Papel' },

  // --- 2. MUELLES ---
  { zona: '2. Muelles', puntoId: '2a', puntoNombre: 'Punto 2a', order: 7, material: 'Bolsa de basura amarilla 85x100', cantidad: '1-2', unidad: 'rollos', foto: 'https://placehold.co/80x80/EAB308/ffffff?text=Bolsa+Am' },
  { zona: '2. Muelles', puntoId: '2a', puntoNombre: 'Punto 2a', order: 8, material: 'Burka verde 1 uso', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/22C55E/ffffff?text=Burka' },
  { zona: '2. Muelles', puntoId: '2a', puntoNombre: 'Punto 2a', order: 9, material: 'Bata de visita 1 uso', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/3B82F6/ffffff?text=Bata' },
  { zona: '2. Muelles', puntoId: '2a', puntoNombre: 'Punto 2a', order: 10, material: 'Peúcos 1 uso', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/6366F1/ffffff?text=Peucos' },
  
  { zona: '2. Muelles', puntoId: '2b', puntoNombre: 'Punto 2b', order: 11, material: 'Gel hidroalcoholico', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/8B5CF6/ffffff?text=Gel' },

  // --- 3. EMPAQUETADO ---
  { zona: '3. Empaquetado', puntoId: '3a', puntoNombre: 'Punto 3a', order: 12, material: 'Guantes S, M, L y XL', cantidad: '1-2', unidad: 'cajas', foto: 'https://placehold.co/80x80/10B981/ffffff?text=Guantes' },
  { zona: '3. Empaquetado', puntoId: '3a', puntoNombre: 'Punto 3a', order: 13, material: 'Bayetas 1 uso', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/EC4899/ffffff?text=Bayeta' },
  { zona: '3. Empaquetado', puntoId: '3a', puntoNombre: 'Punto 3a', order: 14, material: 'Bolsa de basura amarilla 85x100', cantidad: '1-2', unidad: 'rollos', foto: 'https://placehold.co/80x80/EAB308/ffffff?text=Bolsa+Am' },

  // --- 4. ZBR ---
  { zona: '4. ZBR', puntoId: '4a', puntoNombre: 'Punto 4a', order: 15, material: 'Gel hidroalcohólico', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/8B5CF6/ffffff?text=Gel' },
  { zona: '4. ZBR', puntoId: '4a', puntoNombre: 'Punto 4a', order: 16, material: 'Garrafa BETELENE CT150', cantidad: 'Revisar', unidad: '1 ud en cada lavadora (3) con más de la mitad de producto', foto: 'https://placehold.co/80x80/EF4444/ffffff?text=BETELENE' },
  { zona: '4. ZBR', puntoId: '4a', puntoNombre: 'Punto 4a', order: 17, material: 'Guantes S, M, L y XL', cantidad: '1-2', unidad: 'cajas', foto: 'https://placehold.co/80x80/10B981/ffffff?text=Guantes' },
  
  { zona: '4. ZBR', puntoId: '4b', puntoNombre: 'Punto 4b', order: 18, material: 'Cubo cuchillos', cantidad: 'Recoger', unidad: 'y llevar a afilar', foto: 'https://placehold.co/80x80/64748B/ffffff?text=Cuchillos' },
  { zona: '4. ZBR', puntoId: '4b', puntoNombre: 'Punto 4b', order: 19, material: 'Guantes S, M, L y XL', cantidad: '1-2', unidad: 'cajas', foto: 'https://placehold.co/80x80/10B981/ffffff?text=Guantes' },

  // --- 5. VADO ZBR ---
  { zona: '5. Vado ZBR', puntoId: '5a', puntoNombre: 'Punto 5a', order: 20, material: 'Jabón de manos (2)', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/F59E0B/ffffff?text=Jabon' },
  { zona: '5. Vado ZBR', puntoId: '5a', puntoNombre: 'Punto 5a', order: 21, material: 'Papel azul manos (2)', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/0EA5E9/ffffff?text=Papel' },
  
  { zona: '5. Vado ZBR', puntoId: '5b', puntoNombre: 'Punto 5b', order: 22, material: 'Delantal sin manga 1 uso', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/A855F7/ffffff?text=Delantal' },
  { zona: '5. Vado ZBR', puntoId: '5b', puntoNombre: 'Punto 5b', order: 23, material: 'Delantal con manga 1 uso', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/A855F7/ffffff?text=Delantal+M' },
  { zona: '5. Vado ZBR', puntoId: '5b', puntoNombre: 'Punto 5b', order: 24, material: 'Burka verde 1 uso', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/22C55E/ffffff?text=Burka' },
  { zona: '5. Vado ZBR', puntoId: '5b', puntoNombre: 'Punto 5b', order: 25, material: 'Manguito 1 uso', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/F472B6/ffffff?text=Manguito' },
  { zona: '5. Vado ZBR', puntoId: '5b', puntoNombre: 'Punto 5b', order: 26, material: 'Bolsa de basura amarilla 85x100', cantidad: '1-2', unidad: 'rollos', foto: 'https://placehold.co/80x80/EAB308/ffffff?text=Bolsa+Am' },

  // --- 6. VESTUARIOS ---
  { zona: '6. Vestuarios', puntoId: '6a', puntoNombre: 'Punto 6a', order: 27, material: 'Jabón de manos (2)', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/F59E0B/ffffff?text=Jabon' },
  { zona: '6. Vestuarios', puntoId: '6a', puntoNombre: 'Punto 6a', order: 28, material: 'Papel azul manos (2)', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/0EA5E9/ffffff?text=Papel' },
  
  { zona: '6. Vestuarios', puntoId: '6b', puntoNombre: 'Punto 6b', order: 29, material: 'Jabón de manos (2)', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/F59E0B/ffffff?text=Jabon' },
  { zona: '6. Vestuarios', puntoId: '6b', puntoNombre: 'Punto 6b', order: 30, material: 'Papel azul manos (2)', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/0EA5E9/ffffff?text=Papel' },

  // --- 7. VADO ZAC ---
  { zona: '7. Vado ZAC', puntoId: '7a', puntoNombre: 'Punto 7a', order: 31, material: 'Mascarilla 1 uso', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/60A5FA/ffffff?text=Mascarilla' },
  { zona: '7. Vado ZAC', puntoId: '7a', puntoNombre: 'Punto 7a', order: 32, material: 'Burka azul 1 uso', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/3B82F6/ffffff?text=Burka+Az' },
  
  { zona: '7. Vado ZAC', puntoId: '7b', puntoNombre: 'Punto 7b', order: 33, material: 'Peúcos 1 uso', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/6366F1/ffffff?text=Peucos' },
  { zona: '7. Vado ZAC', puntoId: '7b', puntoNombre: 'Punto 7b', order: 34, material: 'Bata visita 1 uso', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/3B82F6/ffffff?text=Bata' },
  { zona: '7. Vado ZAC', puntoId: '7b', puntoNombre: 'Punto 7b', order: 35, material: 'Delantal con manga 1 uso', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/A855F7/ffffff?text=Delantal' },
  { zona: '7. Vado ZAC', puntoId: '7b', puntoNombre: 'Punto 7b', order: 36, material: 'Manguito 1 uso', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/F472B6/ffffff?text=Manguito' },
  { zona: '7. Vado ZAC', puntoId: '7b', puntoNombre: 'Punto 7b', order: 37, material: 'Mascarilla 1 uso', cantidad: '1-2', unidad: 'cajas', foto: 'https://placehold.co/80x80/60A5FA/ffffff?text=Mascarilla' },
  { zona: '7. Vado ZAC', puntoId: '7b', puntoNombre: 'Punto 7b', order: 38, material: 'Guantes nitrilo S, M, L y XL', cantidad: '1-2', unidad: 'cajas', foto: 'https://placehold.co/80x80/10B981/ffffff?text=Guantes' },
  { zona: '7. Vado ZAC', puntoId: '7b', puntoNombre: 'Punto 7b', order: 39, material: 'Bata Elis tallas 1-6', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/DB2777/ffffff?text=Bata+Elis' },
  { zona: '7. Vado ZAC', puntoId: '7b', puntoNombre: 'Punto 7b', order: 40, material: 'Papel azul manos (1)', cantidad: '1-2', unidad: 'rollos', foto: 'https://placehold.co/80x80/0EA5E9/ffffff?text=Papel' },
  
  { zona: '7. Vado ZAC', puntoId: '7c', puntoNombre: 'Punto 7c', order: 41, material: 'Jabón de manos (2)', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/F59E0B/ffffff?text=Jabon' },
  { zona: '7. Vado ZAC', puntoId: '7c', puntoNombre: 'Punto 7c', order: 42, material: 'Papel azul manos (2)', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/0EA5E9/ffffff?text=Papel' },

  // --- 8. ZAC ---
  { zona: '8. ZAC', puntoId: '8a', puntoNombre: 'Punto 8a', order: 43, material: 'Guantes nitrilo S, M, L y XL', cantidad: '1-2', unidad: 'cajas', foto: 'https://placehold.co/80x80/10B981/ffffff?text=Guantes' },
  { zona: '8. ZAC', puntoId: '8a', puntoNombre: 'Punto 8a', order: 44, material: 'Bayeta 1 uso', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/EC4899/ffffff?text=Bayeta' },
  { zona: '8. ZAC', puntoId: '8a', puntoNombre: 'Punto 8a', order: 45, material: 'Bolsa de basura amarilla 85x100', cantidad: '1-2', unidad: 'rollos', foto: 'https://placehold.co/80x80/EAB308/ffffff?text=Bolsa+Am' },
  { zona: '8. ZAC', puntoId: '8a', puntoNombre: 'Punto 8a', order: 46, material: 'Bolsa de basura blanca', cantidad: '1-2', unidad: 'rollos', foto: 'https://placehold.co/80x80/F3F4F6/ffffff?text=Bolsa+Bl' },
  
  { zona: '8. ZAC', puntoId: '8b', puntoNombre: 'Punto 8b', order: 47, material: 'Guante nitrilo S, M, L y XL', cantidad: '1-2', unidad: 'cajas', foto: 'https://placehold.co/80x80/10B981/ffffff?text=Guantes' },
  
  { zona: '8. ZAC', puntoId: '8c', puntoNombre: 'Punto 8c', order: 48, material: 'Guante nitrilo M, L y XL', cantidad: '1-2', unidad: 'cajas', foto: 'https://placehold.co/80x80/10B981/ffffff?text=Guantes' },
  { zona: '8. ZAC', puntoId: '8c', puntoNombre: 'Punto 8c', order: 49, material: 'Bayeta 1 uso', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/EC4899/ffffff?text=Bayeta' },
  { zona: '8. ZAC', puntoId: '8c', puntoNombre: 'Punto 8c', order: 50, material: 'Bolsa de basura amarilla 85x100', cantidad: '1-2', unidad: 'rollos', foto: 'https://placehold.co/80x80/EAB308/ffffff?text=Bolsa+Am' },
  { zona: '8. ZAC', puntoId: '8c', puntoNombre: 'Punto 8c', order: 51, material: 'Bolsa de basura blanca', cantidad: '1-2', unidad: 'rollos', foto: 'https://placehold.co/80x80/F3F4F6/ffffff?text=Bolsa+Bl' },
  
  { zona: '8. ZAC', puntoId: '8d', puntoNombre: 'Punto 8d', order: 52, material: 'Bayeta 1 uso', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/EC4899/ffffff?text=Bayeta' },
  { zona: '8. ZAC', puntoId: '8d', puntoNombre: 'Punto 8d', order: 53, material: 'Guante nitrilo S y M', cantidad: '1-2', unidad: 'cajas', foto: 'https://placehold.co/80x80/10B981/ffffff?text=Guantes' },
  { zona: '8. ZAC', puntoId: '8d', puntoNombre: 'Punto 8d', order: 54, material: 'Cubo cuchillos', cantidad: 'Recoger', unidad: 'y llevar a afilar', foto: 'https://placehold.co/80x80/64748B/ffffff?text=Cuchillos' },
  { zona: '8. ZAC', puntoId: '8d', puntoNombre: 'Punto 8d', order: 55, material: 'Garrafa MIDA SAN 325 DA', cantidad: 'Revisar', unidad: '1 ud en uso y 1 llena', foto: 'https://placehold.co/80x80/EF4444/ffffff?text=MIDA+SAN' },
  
  { zona: '8. ZAC', puntoId: '8e', puntoNombre: 'Punto 8e', order: 56, material: 'Guante nitrilo S, M, L y XL', cantidad: '1-2', unidad: 'cajas', foto: 'https://placehold.co/80x80/10B981/ffffff?text=Guantes' },

  // --- 9. TALLER ---
  { zona: '9. Taller', puntoId: '9a', puntoNombre: 'Punto 9a', order: 57, material: 'Guante nitrilo M, L y XL', cantidad: '1-2', unidad: 'cajas', foto: 'https://placehold.co/80x80/10B981/ffffff?text=Guantes' },
  { zona: '9. Taller', puntoId: '9a', puntoNombre: 'Punto 9a', order: 58, material: 'Jabón de manos', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/F59E0B/ffffff?text=Jabon' },
  { zona: '9. Taller', puntoId: '9a', puntoNombre: 'Punto 9a', order: 59, material: 'Papel de manos', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/0EA5E9/ffffff?text=Papel' },
  { zona: '9. Taller', puntoId: '9a', puntoNombre: 'Punto 9a', order: 60, material: 'Bayeta 1 uso', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/EC4899/ffffff?text=Bayeta' },
  { zona: '9. Taller', puntoId: '9a', puntoNombre: 'Punto 9a', order: 61, material: 'Garrafa DECTOCIDE A31-SF', cantidad: 'Revisar', unidad: '1 ud quede algo de producto', foto: 'https://placehold.co/80x80/EF4444/ffffff?text=DECTOCIDE' },
  { zona: '9. Taller', puntoId: '9a', puntoNombre: 'Punto 9a', order: 62, material: 'Peúcos 1 uso', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/6366F1/ffffff?text=Peucos' },
  
  { zona: '9. Taller', puntoId: '9b', puntoNombre: 'Punto 9b', order: 63, material: 'Mascarilla 1 uso', cantidad: '1-2', unidad: 'cajas', foto: 'https://placehold.co/80x80/60A5FA/ffffff?text=Mascarilla' },
  { zona: '9. Taller', puntoId: '9b', puntoNombre: 'Punto 9b', order: 64, material: 'Bata visita 1 uso', cantidad: FILL_DISPENSER, unidad: 'Llenar', foto: 'https://placehold.co/80x80/3B82F6/ffffff?text=Bata' },
  { zona: '9. Taller', puntoId: '9b', puntoNombre: 'Punto 9b', order: 65, material: 'Burka azul 1 uso', cantidad: '1-2', unidad: 'paquetes', foto: 'https://placehold.co/80x80/3B82F6/ffffff?text=Burka+Az' },
];

export { FILL_DISPENSER, restockData, type RestockEntry };