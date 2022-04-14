"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecimenContainedPreference = void 0;
/**
 * Degree of preference of a type of conditioned specimen.
 */
exports.SpecimenContainedPreference = {
    /**
     * This type of conditioned specimen is an alternate.
     */
    specimen_contained_preference_Alternate: {
        code: "alternate",
        display: "Alternate",
        system: "http://hl7.org/fhir/specimen-contained-preference"
    },
    /**
     * This type of contained specimen is preferred to collect this kind of specimen.
     */
    specimen_contained_preference_Preferred: {
        code: "preferred",
        display: "Preferred",
        system: "http://hl7.org/fhir/specimen-contained-preference"
    },
};
//# sourceMappingURL=SpecimenContainedPreference.js.map