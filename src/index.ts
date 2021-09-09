import PriorityQueue, { PriorityQueueType } from "./priority-queue";
import assert from "assert";

const queue = new PriorityQueue(PriorityQueueType.MIN);

assert.equal(queue.findExtremum(), undefined);
queue.insert({ priority: 10 });
queue.insert({ priority: 100 });
queue.insert({ priority: 1 });
queue.insert({ priority: 1000 });
queue.insert({ priority: -1 });

assert.equal(queue.findExtremum()?.priority, -1);
queue.deleteExtremum();
assert.equal(queue.findExtremum()?.priority, 1);
queue.deleteExtremum();
assert.equal(queue.findExtremum()?.priority, 10);
queue.insert({ priority: 5 });
assert.equal(queue.findExtremum()?.priority, 5);
queue.deleteExtremum();
assert.equal(queue.findExtremum()?.priority, 10);

console.log("---------------------------------------------------");
console.log("🎉 Your priority queue is working like a dream! 🎉");
console.log("-------------------------------------------------- ");
