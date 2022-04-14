"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionalDeleteStatus = void 0;
/**
 * A code that indicates how the server supports conditional delete.
 */
exports.ConditionalDeleteStatus = {
    /**
     * Conditional deletes are supported, and multiple resources can be deleted in a single interaction.
     */
    conditional_delete_status_MultipleDeletesSupported: {
        code: "multiple",
        display: "Multiple Deletes Supported",
        system: "http://hl7.org/fhir/conditional-delete-status"
    },
    /**
     * No support for conditional deletes.
     */
    conditional_delete_status_NotSupported: {
        code: "not-supported",
        display: "Not Supported",
        system: "http://hl7.org/fhir/conditional-delete-status"
    },
    /**
     * Conditional deletes are supported, but only single resources at a time.
     */
    conditional_delete_status_SingleDeletesSupported: {
        code: "single",
        display: "Single Deletes Supported",
        system: "http://hl7.org/fhir/conditional-delete-status"
    },
};
//# sourceMappingURL=ConditionalDeleteStatus.js.map