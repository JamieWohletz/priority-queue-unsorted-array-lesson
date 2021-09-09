export enum PriorityQueueType {
  MIN,
  MAX,
}
export default class PriorityQueue<TVal extends { priority: number }> {
  #extremumIndex: number;
  #array: TVal[];
  #type: PriorityQueueType;
  constructor(queueType: PriorityQueueType) {
    this.#extremumIndex = -1;
    this.#array = [];
    this.#type = queueType;
  }
  findExtremum = (): TVal | undefined => {
    return this.#array[this.#extremumIndex];
  };
  deleteExtremum = (): TVal => {
    const extremum = this.#array[this.#extremumIndex];
    delete this.#array[this.#extremumIndex];
    this.#array.length -= 1;

    let newExtremumPriority =
      this.#type === PriorityQueueType.MAX ? -Infinity : Infinity;
    this.#array.forEach(({ priority }, index) => {
      if (this.#isMoreExtreme(priority, newExtremumPriority)) {
        newExtremumPriority = priority;
        this.#extremumIndex = index;
      }
    });

    return extremum;
  };
  insert = (val: TVal) => {
    this.#array.length += 1;
    const newIndex = this.#array.length - 1;
    this.#array[newIndex] = val;
    if (this.#extremumIndex === -1) {
      this.#extremumIndex = newIndex;
    } else if (
      this.#isMoreExtreme(
        val.priority,
        this.#array[this.#extremumIndex].priority
      )
    ) {
      this.#extremumIndex = newIndex;
    }
  };
  #isMoreExtreme = (a: number, b: number) => {
    if (this.#type === PriorityQueueType.MAX) {
      return a > b;
    }
    return a < b;
  };
}
