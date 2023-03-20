import { Strategy } from './strategy';

/**
 * Clase que implementa el algoritmo de ordenamiento bubblesort
 */
export class BubbleSort implements Strategy {
  /**
   * Metodo para ejecutar el algoritmo de ordenamiento bubblesort
   * Algoritmo encontrado en [wikipedia](https://en.wikipedia.org/wiki/Bubble_sort).
   * @param data 
   * @returns 
   */
  execute(data: number[]): number[] {
    let swapped: boolean;
    do {
      swapped = false;
      for (let i = 0; i < data.length; i++) {
        if (data[i] && data[i + 1] && data[i] > data[i + 1]) {
          const tmp = data[i];
          data[i] = data[i + 1];
          data[i + 1] = tmp;
          swapped = true;
        }
      }
    } while (swapped);
    // console.log(data);
    return data;
  }
}