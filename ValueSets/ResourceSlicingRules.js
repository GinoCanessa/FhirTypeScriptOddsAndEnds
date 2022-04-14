"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceSlicingRules = void 0;
/**
 * How slices are interpreted when evaluating an instance.
 */
exports.ResourceSlicingRules = {
    /**
     * No additional content is allowed other than that described by the slices in this profile.
     */
    resource_slicing_rules_Closed: {
        code: "closed",
        display: "Closed",
        system: "http://hl7.org/fhir/resource-slicing-rules"
    },
    /**
     * Additional content is allowed anywhere in the list.
     */
    resource_slicing_rules_Open: {
        code: "open",
        display: "Open",
        system: "http://hl7.org/fhir/resource-slicing-rules"
    },
    /**
     * Additional content is allowed, but only at the end of the list. Note that using this requires that the slices be ordered, which makes it hard to share uses. This should only be done where absolutely required.
     */
    resource_slicing_rules_OpenAtEnd: {
        code: "openAtEnd",
        display: "Open at End",
        system: "http://hl7.org/fhir/resource-slicing-rules"
    },
};
//# sourceMappingURL=ResourceSlicingRules.js.map