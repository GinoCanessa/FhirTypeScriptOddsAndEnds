"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationCategory = void 0;
/**
 * Codes for general categories of communications such as alerts, instructions, etc.
 */
exports.CommunicationCategory = {
    /**
     * The communication conveys an alert.
     */
    communication_category_Alert: {
        code: "alert",
        display: "Alert",
        system: "http://terminology.hl7.org/CodeSystem/communication-category"
    },
    /**
     * The communication conveys an instruction.
     */
    communication_category_Instruction: {
        code: "instruction",
        display: "Instruction",
        system: "http://terminology.hl7.org/CodeSystem/communication-category"
    },
    /**
     * The communication conveys a notification.
     */
    communication_category_Notification: {
        code: "notification",
        display: "Notification",
        system: "http://terminology.hl7.org/CodeSystem/communication-category"
    },
    /**
     * The communication conveys a reminder.
     */
    communication_category_Reminder: {
        code: "reminder",
        display: "Reminder",
        system: "http://terminology.hl7.org/CodeSystem/communication-category"
    },
};
//# sourceMappingURL=CommunicationCategory.js.map