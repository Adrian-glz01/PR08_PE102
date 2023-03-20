
/**
 * Interfaz que define el comportamiento de un algoritmo de ordenamiento.
 */
export interface Strategy {
  execute(data: number[]): number[];
}