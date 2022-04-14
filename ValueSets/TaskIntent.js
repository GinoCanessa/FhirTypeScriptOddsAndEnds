"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskIntent = void 0;
/**
 * Distinguishes whether the task is a proposal, plan or full order.
 */
exports.TaskIntent = {
    /**
     * The intent is not known.  When dealing with Task, it's not always known (or relevant) how the task was initiated - i.e. whether it was proposed, planned, ordered or just done spontaneously.
     */
    task_intent_Unknown: {
        code: "unknown",
        display: "Unknown",
        system: "http://hl7.org/fhir/task-intent"
    },
};
//# sourceMappingURL=TaskIntent.js.map