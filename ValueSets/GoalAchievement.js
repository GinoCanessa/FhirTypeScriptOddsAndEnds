/**
 * Describes the progression, or lack thereof, towards the goal against the target.
 */
export var GoalAchievement = {
    /**
     * The goal has been met.
     */
    goal_achievement_Achieved: {
        code: "achieved",
        display: "Achieved",
        system: "http://terminology.hl7.org/CodeSystem/goal-achievement"
    },
    /**
     * The goal is being sought, and is progressing.
     */
    goal_achievement_Improving: {
        code: "improving",
        display: "Improving",
        system: "http://terminology.hl7.org/CodeSystem/goal-achievement"
    },
    /**
     * The goal is being sought but has not yet been reached. (Also applies if the goal was reached in the past but there has been regression and the goal is again being sought).
     */
    goal_achievement_InProgress: {
        code: "in-progress",
        display: "In Progress",
        system: "http://terminology.hl7.org/CodeSystem/goal-achievement"
    },
    /**
     * The goal is being sought, but the trend is flat.
     */
    goal_achievement_NoChange: {
        code: "no-change",
        display: "No Change",
        system: "http://terminology.hl7.org/CodeSystem/goal-achievement"
    },
    /**
     * The goal has not been met and little to no progress towards target.
     */
    goal_achievement_NoProgress: {
        code: "no-progress",
        display: "No Progress",
        system: "http://terminology.hl7.org/CodeSystem/goal-achievement"
    },
    /**
     * The goal has not been met and there might or might not have been progress towards target.
     */
    goal_achievement_NotAchieved: {
        code: "not-achieved",
        display: "Not Achieved",
        system: "http://terminology.hl7.org/CodeSystem/goal-achievement"
    },
    /**
     * The goal is not possible to be met.
     */
    goal_achievement_NotAttainable: {
        code: "not-attainable",
        display: "Not Attainable",
        system: "http://terminology.hl7.org/CodeSystem/goal-achievement"
    },
    /**
     * The goal has been met, but ongoing activity is needed to sustain the goal objective.
     */
    goal_achievement_Sustaining: {
        code: "sustaining",
        display: "Sustaining",
        system: "http://terminology.hl7.org/CodeSystem/goal-achievement"
    },
    /**
     * The goal is being sought, but is regressing.
     */
    goal_achievement_Worsening: {
        code: "worsening",
        display: "Worsening",
        system: "http://terminology.hl7.org/CodeSystem/goal-achievement"
    }
};