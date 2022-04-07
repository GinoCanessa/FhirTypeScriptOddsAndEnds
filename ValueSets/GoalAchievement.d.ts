import { Coding } from '../strictmodels';
/**
 * Describes the progression, or lack thereof, towards the goal against the target.
 */
export declare const GoalAchievement: {
    /**
     * The goal has been met.
     */
    goal_achievement_Achieved: Coding;
    /**
     * The goal is being sought, and is progressing.
     */
    goal_achievement_Improving: Coding;
    /**
     * The goal is being sought but has not yet been reached. (Also applies if the goal was reached in the past but there has been regression and the goal is again being sought).
     */
    goal_achievement_InProgress: Coding;
    /**
     * The goal is being sought, but the trend is flat.
     */
    goal_achievement_NoChange: Coding;
    /**
     * The goal has not been met and little to no progress towards target.
     */
    goal_achievement_NoProgress: Coding;
    /**
     * The goal has not been met and there might or might not have been progress towards target.
     */
    goal_achievement_NotAchieved: Coding;
    /**
     * The goal is not possible to be met.
     */
    goal_achievement_NotAttainable: Coding;
    /**
     * The goal has been met, but ongoing activity is needed to sustain the goal objective.
     */
    goal_achievement_Sustaining: Coding;
    /**
     * The goal is being sought, but is regressing.
     */
    goal_achievement_Worsening: Coding;
};
//# sourceMappingURL=GoalAchievement.d.ts.map