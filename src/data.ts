// src/data.ts
const FILL_DISPENSER = 999;

// MODIFICACIÓN IMPORTANTE: cantidad ahora acepta "number | string"
interface RestockEntry {
  zona: string;
  puntoId: string;
  puntoNombre: string;
  order: number;
  material: string;
  cantidad: number | string; // <--- ESTO ES LO QUE ARREGLA EL ERROR
  unidad: string;
  foto: string;
}

const restockData: RestockEntry[] = [
  // ... (Aquí iría tu lista larga de datos que te pasé antes. 
  // Si ya tienes la lista larga pegada, solo asegúrate de cambiar la "interface" arriba)
  // Para probar que el error se quita, asegúrate de que la interface es idéntica a esta.
];

// Si no quieres borrar tu lista larga, SOLO copia y pega la parte superior (las primeras 15 líneas)
// asegurándote de exportar al final:
export { FILL_DISPENSER, type RestockEntry, restockData };