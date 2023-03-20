import { Strategy } from './strategy';

/**
 * Solver class
 */
export class Solver {

  /**
   * Constructor de la clase Solver
   * @param data 
   * @param strategy 
   */
  constructor(private data: number[], private strategy: Strategy) {
  }

  /**
   * Method para establecer la estrategia
   * @param strategy 
   */
  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  /**
   * Metodo para ejecutar la estrategia
   */
  public logic() {
    this.data = this.strategy.execute(this.data);
  }

  public getData() {
    return this.data;
  }
}