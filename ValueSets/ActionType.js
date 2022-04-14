"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = void 0;
/**
 * The type of action to be performed.
 */
exports.ActionType = {
    /**
     * The action is to create a new resource.
     */
    action_type_Create: {
        code: "create",
        display: "Create",
        system: "http://terminology.hl7.org/CodeSystem/action-type"
    },
    /**
     * The action is to fire a specific event.
     */
    action_type_FireEvent: {
        code: "fire-event",
        display: "Fire Event",
        system: "http://terminology.hl7.org/CodeSystem/action-type"
    },
    /**
     * The action is to remove an existing resource.
     */
    action_type_Remove: {
        code: "remove",
        display: "Remove",
        system: "http://terminology.hl7.org/CodeSystem/action-type"
    },
    /**
     * The action is to update an existing resource.
     */
    action_type_Update: {
        code: "update",
        display: "Update",
        system: "http://terminology.hl7.org/CodeSystem/action-type"
    },
};
//# sourceMappingURL=ActionType.js.map