// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/adjudication-reason|4.0.1
import { Coding } from '../fhir.js';
/**
 * This value set includes smattering of Adjudication Reason codes.
 */
export const AdjudicationReasonValueSet = {
    /**
     * ar001: Not covered
     */
    NotCovered: new Coding({
        display: "Not covered",
        code: "ar001",
        system: "http://terminology.hl7.org/CodeSystem/adjudication-reason",
    }),
    /**
     * ar002: Plan Limit Reached
     */
    PlanLimitReached: new Coding({
        display: "Plan Limit Reached",
        code: "ar002",
        system: "http://terminology.hl7.org/CodeSystem/adjudication-reason",
    }),
};
/**
 * This value set includes smattering of Adjudication Reason codes.
 */
export var AdjudicationReasonValueSetEnum;
(function (AdjudicationReasonValueSetEnum) {
    /**
     * ar001: Not covered
     */
    AdjudicationReasonValueSetEnum["NotCovered"] = "ar001";
    /**
     * ar002: Plan Limit Reached
     */
    AdjudicationReasonValueSetEnum["PlanLimitReached"] = "ar002";
})(AdjudicationReasonValueSetEnum || (AdjudicationReasonValueSetEnum = {}));
//# sourceMappingURL=AdjudicationReasonValueSet.js.map