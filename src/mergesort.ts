import { Strategy } from './strategy';

/**
 * Clase que implementa el algoritmo de ordenamiento MergeSort.
 */
export class MergeSort implements Strategy {
  /**
   * Método que ejecuta el algoritmo de ordenamiento MergeSort.
   * @param data 
   * @returns 
   */
  execute(data:number[]):number[]{
    if(data.length <=1){
      return data;
    }
    
    const middle = Math.floor(data.length/2);
    const left = data.slice(0, middle);
    const right = data.slice(middle);
    
    // console.log(data);
    return this.merge(this.execute(left),this.execute(right));
  }
  
  /**
   * Método privado que mezcla dos arreglos ordenados en uno solo.
   * @param left Arreglo izquierdo.
   * @param right Arreglo derecho.
   * @returns Arreglo mezclado.
   */
  private merge(left:number[], right:number[]):number[]{
    const array:number[] = [];
    let lIndex=0;
    let rIndex=0;
    
    while (lIndex + rIndex < left.length + right.length){
      const lItem = left[lIndex];
      const rItem = right[rIndex];
      
      if(lItem == null){
        array.push(rItem);
        rIndex++;
      }
      else if(rItem == null){
        array.push(lItem);
        lIndex++;
      }
      else if(lItem < rItem){
        array.push(lItem);
        lIndex++;
      }
      else{
        array.push(rItem);
        rIndex++;
      }
    }
    // console.log(array);
    return array;
  }
}