// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/clinicalimpression-prognosis|4.0.1
import { Coding } from '../fhir.js';
/**
 * Example value set for clinical impression prognosis.
 */
export const ClinicalimpressionPrognosisValueSet = {
    /**
     * Code: 170968001
     */
    GoodPrognosis: new Coding({
        display: "Good prognosis",
        code: "170968001",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 170969009
     */
    PoorPrognosis: new Coding({
        display: "Poor prognosis",
        code: "170969009",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 170970005
     */
    PrognosisUncertain: new Coding({
        display: "Prognosis uncertain",
        code: "170970005",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 60484009
     */
    ConditionalPrognosis: new Coding({
        display: "Conditional prognosis",
        code: "60484009",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 65872000
     */
    FairPrognosis: new Coding({
        display: "Fair prognosis",
        code: "65872000",
        system: "http://snomed.info/sct",
    }),
    /**
     * Code: 67334001
     */
    GuardedPrognosis: new Coding({
        display: "Guarded prognosis",
        code: "67334001",
        system: "http://snomed.info/sct",
    }),
};
/**
 * Example value set for clinical impression prognosis.
 */
export var ClinicalimpressionPrognosisValueSetEnum;
(function (ClinicalimpressionPrognosisValueSetEnum) {
    /**
     * Code: 170968001
     */
    ClinicalimpressionPrognosisValueSetEnum["GoodPrognosis"] = "170968001";
    /**
     * Code: 170969009
     */
    ClinicalimpressionPrognosisValueSetEnum["PoorPrognosis"] = "170969009";
    /**
     * Code: 170970005
     */
    ClinicalimpressionPrognosisValueSetEnum["PrognosisUncertain"] = "170970005";
    /**
     * Code: 60484009
     */
    ClinicalimpressionPrognosisValueSetEnum["ConditionalPrognosis"] = "60484009";
    /**
     * Code: 65872000
     */
    ClinicalimpressionPrognosisValueSetEnum["FairPrognosis"] = "65872000";
    /**
     * Code: 67334001
     */
    ClinicalimpressionPrognosisValueSetEnum["GuardedPrognosis"] = "67334001";
})(ClinicalimpressionPrognosisValueSetEnum || (ClinicalimpressionPrognosisValueSetEnum = {}));
//# sourceMappingURL=ClinicalimpressionPrognosisValueSet.js.map