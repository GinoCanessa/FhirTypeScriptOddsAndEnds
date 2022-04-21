import { Coding } from '../fhir.js';
/**
 * Codes for general categories of communications such as alerts, instructions, etc.
 */
export declare const CommunicationCategoryValueSet: {
    /**
     * alert: The communication conveys an alert.
     */
    readonly Alert: Coding;
    /**
     * instruction: The communication conveys an instruction.
     */
    readonly Instruction: Coding;
    /**
     * notification: The communication conveys a notification.
     */
    readonly Notification: Coding;
    /**
     * reminder: The communication conveys a reminder.
     */
    readonly Reminder: Coding;
};
/**
 * Codes for general categories of communications such as alerts, instructions, etc.
 */
export declare type CommunicationCategoryValueSetType = typeof CommunicationCategoryValueSet;
/**
 * Codes for general categories of communications such as alerts, instructions, etc.
 */
export declare enum CommunicationCategoryValueSetEnum {
    /**
     * alert: The communication conveys an alert.
     */
    Alert = "alert",
    /**
     * instruction: The communication conveys an instruction.
     */
    Instruction = "instruction",
    /**
     * notification: The communication conveys a notification.
     */
    Notification = "notification",
    /**
     * reminder: The communication conveys a reminder.
     */
    Reminder = "reminder"
}
//# sourceMappingURL=CommunicationCategoryValueSet.d.ts.map