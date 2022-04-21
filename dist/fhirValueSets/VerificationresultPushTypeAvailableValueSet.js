// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/verificationresult-push-type-available|4.0.1
import { Coding } from '../fhir.js';
/**
 * Type of alerts/updates the primary source can send
 */
export const VerificationresultPushTypeAvailableValueSet = {
    /**
     * Code: any
     */
    AnyChanges: new Coding({
        display: "Any changes",
        code: "any",
        system: "http://terminology.hl7.org/CodeSystem/push-type-available",
    }),
    /**
     * Code: source
     */
    AsDefinedBySource: new Coding({
        display: "As defined by source",
        code: "source",
        system: "http://terminology.hl7.org/CodeSystem/push-type-available",
    }),
    /**
     * Code: specific
     */
    SpecificRequestedChanges: new Coding({
        display: "Specific requested changes",
        code: "specific",
        system: "http://terminology.hl7.org/CodeSystem/push-type-available",
    }),
};
/**
 * Type of alerts/updates the primary source can send
 */
export var VerificationresultPushTypeAvailableValueSetEnum;
(function (VerificationresultPushTypeAvailableValueSetEnum) {
    /**
     * Code: any
     */
    VerificationresultPushTypeAvailableValueSetEnum["AnyChanges"] = "any";
    /**
     * Code: source
     */
    VerificationresultPushTypeAvailableValueSetEnum["AsDefinedBySource"] = "source";
    /**
     * Code: specific
     */
    VerificationresultPushTypeAvailableValueSetEnum["SpecificRequestedChanges"] = "specific";
})(VerificationresultPushTypeAvailableValueSetEnum || (VerificationresultPushTypeAvailableValueSetEnum = {}));
//# sourceMappingURL=VerificationresultPushTypeAvailableValueSet.js.map