/**
 * Modulo A: Retos Logicos BairesDev
 * Funciones para simulacion de problemas de combinatoria, divisibilidad y logistica.
 */

/**
 * Reto 1: Probabilidad de suma de 2 dados
 * @param {number} sumaObjetivo - Suma a evaluar (2 a 12)
 * @returns {{ casosFavorables: number, casosTotales: number, probabilidad: number, porcentaje: string }}
 */
export function calcularProbabilidadDados(sumaObjetivo) {
  if (sumaObjetivo < 2 || sumaObjetivo > 12) {
    throw new Error("La suma objetivo en dos dados debe estar entre 2 y 12.");
  }

  let casosFavorables = 0;
  const casosTotales = 36; // 6 * 6

  for (let d1 = 1; d1 <= 6; d1++) {
    for (let d2 = 1; d2 <= 6; d2++) {
      if (d1 + d2 === sumaObjetivo) {
        casosFavorables++;
      }
    }
  }

  const probabilidad = casosFavorables / casosTotales;
  const porcentaje = (probabilidad * 100).toFixed(2) + "%";

  return {
    casosFavorables,
    casosTotales,
    probabilidad,
    porcentaje
  };
}

/**
 * Reto 2: Total de partidos de un torneo round-robin
 * Formula: C(n, 2) = n * (n - 1) / 2
 * @param {number} n - Cantidad de equipos (n >= 2)
 * @returns {number}
 */
export function calcularPartidosTorneo(n) {
  if (!Number.isInteger(n) || n < 2) {
    throw new Error("Se requieren al menos 2 equipos para jugar un torneo.");
  }
  return (n * (n - 1)) / 2;
}

/**
 * Reto 3: Multiplos estrictamente menores a un limite en tiempo O(1)
 * @param {number} limite - Limite superior (ej: 904)
 * @param {number} divisor - Divisor entero positivo (ej: 3)
 * @returns {number}
 */
export function contarMultiplosMenores(limite, divisor) {
  if (!Number.isFinite(limite) || !Number.isFinite(divisor) || limite < 0 || divisor <= 0 || limite <= divisor) {
    throw new Error("Los parámetros deben ser números positivos enteros y el límite debe ser mayor que el divisor.");
  }
  if (limite <= 1) return 0;
  return Math.floor((limite - 1) / divisor);
}

/**
 * Reto 4: Minimo de viajes segun capacidad (Funcion Techo / Ceil)
 * @param {number} totalItems - Cantidad total de elementos a trasladar
 * @param {number} capacidadPorViaje - Capacidad maxima por viaje
 * @returns {number}
 */
export function calcularViajesMinimos(totalItems, capacidadPorViaje) {
  if (!Number.isFinite(totalItems) || !Number.isFinite(capacidadPorViaje) || totalItems < 0) {
    throw new Error("La cantidad de botellas no puede ser negativa y debe ser un número válido.");
  }
  if (capacidadPorViaje <= 0) {
    throw new Error("La capacidad por viaje debe ser mayor a 0.");
  }
  if (totalItems === 0) return 0;
  return Math.ceil(totalItems / capacidadPorViaje);
}


/**
 * Reto 5: Edades y proporciones
 * @param {number} edadPablo - Edad actual de Pablo
 * @param {number} razonActual - Cuántas veces la edad de la hermana cabe en la de Pablo
 * @param {number} razonFutura - Proporción de edades que se desea alcanzar
 * @returns {number}
 */
export function calcularEdadFutura(edadPablo, razonActual, razonFutura) {

  if (edadPablo <= 0) {
    throw new Error("La edad de Pablo debe ser mayor a 0.");
  }

  if (razonActual <= 1 || razonFutura <= 1) {
    throw new Error("Las proporciones deben ser mayores a 1.");
  }

  if (razonFutura >= razonActual) {
    throw new Error("La proporción futura debe ser menor que la actual.");
  }

  // Edad actual de la hermana
  const edadHermana = edadPablo / razonActual;

  // Edad futura de la hermana
  const th = razonFutura * edadHermana;

  // Diferencia entre la edad actual de Pablo y la futura de su hermana
  const tp = edadPablo - th;

  // Tiempo que debe transcurrir
  const t = Math.ceil(tp / (razonFutura - 1));

  // Edad futura de Pablo
  return edadPablo + t;
}

