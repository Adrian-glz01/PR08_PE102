import { BubbleSort } from '../src/bubblesort';
import { Solver } from '../src/solver';
import { expect } from 'chai';
import 'mocha';

describe('BubbleSort', () => {
  const array = [9,8,7,6,5,4,3,2,1];
  const array2 = [10,9,8,7,6,5,4,3,2,1];
  const array3 = [2,4,6,8,9,1,3,5,7,10];

  it('should return [1,2,3,4,5,6,7,8,9]', () => {
    const solver = new Solver(array, new BubbleSort());
    solver.logic();
    expect(solver.getData()).to.be.eql([1,2,3,4,5,6,7,8,9]);
  });
  it ('should return [1,2,3,4,5,6,7,8,9,10]', () => {
    const solver = new Solver(array2, new BubbleSort());
    solver.logic();
    expect(solver.getData()).to.be.eql([1,2,3,4,5,6,7,8,9,10]);
  });
  it ('should return [1,2,3,4,5,6,7,8,9,10]', () => {
    const solver = new Solver(array3, new BubbleSort());
    solver.logic();
    expect(solver.getData()).to.be.eql([1,2,3,4,5,6,7,8,9,10]);
  });
});