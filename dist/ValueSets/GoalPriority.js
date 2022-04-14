"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoalPriority = void 0;
/**
 * Indicates the level of importance associated with reaching or sustaining a goal.
 */
exports.GoalPriority = {
    /**
     * Indicates that the goal is of considerable importance and should be a primary focus of care delivery.
     */
    goal_priority_HighPriority: {
        code: "high-priority",
        display: "High Priority",
        system: "http://terminology.hl7.org/CodeSystem/goal-priority"
    },
    /**
     * The goal is desirable but is not sufficiently important to devote significant resources to.  Achievement of the goal may be sought when incidental to achieving other goals.
     */
    goal_priority_LowPriority: {
        code: "low-priority",
        display: "Low Priority",
        system: "http://terminology.hl7.org/CodeSystem/goal-priority"
    },
    /**
     * Indicates that the goal has a reasonable degree of importance and that concrete action should be taken towards the goal.  Attainment is not as critical as high-priority goals.
     */
    goal_priority_MediumPriority: {
        code: "medium-priority",
        display: "Medium Priority",
        system: "http://terminology.hl7.org/CodeSystem/goal-priority"
    },
};
//# sourceMappingURL=GoalPriority.js.map