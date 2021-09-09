export enum PriorityQueueType {
  MIN,
  MAX,
}
export default class PriorityQueue<TVal extends { priority: number }> {
  #array: TVal[];
  #type: PriorityQueueType;
  constructor(queueType: PriorityQueueType) {
    this.#array = [];
    this.#type = queueType;
  }
  findExtremum = (): TVal | undefined => {};
  deleteExtremum = (): TVal => {};
  insert = (val: TVal) => {};
  // You'll probably want to fill out this helper function...
  #isMoreExtreme = (a: number, b: number) => {};
}
