"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReasonMedicationGivenCodes = void 0;
/**
 * This value set is provided as an example. The value set to instantiate this attribute should be drawn from a robust terminology code system that consists of or contains concepts to support the medication process.
 */
exports.ReasonMedicationGivenCodes = {
    /**
     * No reason known.
     */
    reason_medication_given_codes_None: {
        code: "a",
        display: "None",
        system: "http://terminology.hl7.org/CodeSystem/reason-medication-given"
    },
    /**
     * The administration was following an ordered protocol.
     */
    reason_medication_given_codes_GivenAsOrdered: {
        code: "b",
        display: "Given as Ordered",
        system: "http://terminology.hl7.org/CodeSystem/reason-medication-given"
    },
    /**
     * The administration was needed to treat an emergency.
     */
    reason_medication_given_codes_Emergency: {
        code: "c",
        display: "Emergency",
        system: "http://terminology.hl7.org/CodeSystem/reason-medication-given"
    },
};
//# sourceMappingURL=ReasonMedicationGivenCodes.js.map