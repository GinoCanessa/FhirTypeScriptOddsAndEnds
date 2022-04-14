"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllergyIntoleranceType = void 0;
/**
 * Identification of the underlying physiological mechanism for a Reaction Risk.
 */
exports.AllergyIntoleranceType = {
    /**
     * A propensity for hypersensitive reaction(s) to a substance.  These reactions are most typically type I hypersensitivity, plus other "allergy-like" reactions, including pseudoallergy.
     */
    allergy_intolerance_type_Allergy: {
        code: "allergy",
        display: "Allergy",
        system: "http://hl7.org/fhir/allergy-intolerance-type"
    },
    /**
     * A propensity for adverse reactions to a substance that is not judged to be allergic or "allergy-like".  These reactions are typically (but not necessarily) non-immune.  They are to some degree idiosyncratic and/or patient-specific (i.e. are not a reaction that is expected to occur with most or all patients given similar circumstances).
     */
    allergy_intolerance_type_Intolerance: {
        code: "intolerance",
        display: "Intolerance",
        system: "http://hl7.org/fhir/allergy-intolerance-type"
    },
};
//# sourceMappingURL=AllergyIntoleranceType.js.map