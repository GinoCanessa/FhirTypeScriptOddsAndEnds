"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NarrativeStatus = void 0;
/**
 * The status of a resource narrative.
 */
exports.NarrativeStatus = {
    /**
     * The contents of the narrative may contain additional information not found in the structured data. Note that there is no computable way to determine what the extra information is, other than by human inspection.
     */
    narrative_status_Additional: {
        code: "additional",
        display: "Additional",
        system: "http://hl7.org/fhir/narrative-status"
    },
    /**
     * The contents of the narrative are some equivalent of "No human-readable text provided in this case".
     */
    narrative_status_Empty: {
        code: "empty",
        display: "Empty",
        system: "http://hl7.org/fhir/narrative-status"
    },
    /**
     * The contents of the narrative are entirely generated from the core elements in the content and some of the content is generated from extensions. The narrative SHALL reflect the impact of all modifier extensions.
     */
    narrative_status_Extensions: {
        code: "extensions",
        display: "Extensions",
        system: "http://hl7.org/fhir/narrative-status"
    },
    /**
     * The contents of the narrative are entirely generated from the core elements in the content.
     */
    narrative_status_Generated: {
        code: "generated",
        display: "Generated",
        system: "http://hl7.org/fhir/narrative-status"
    },
};
//# sourceMappingURL=NarrativeStatus.js.map