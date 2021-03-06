// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/condition-ver-status|4.0.1
import { Coding } from '../fhir.js';
/**
 * The verification status to support or decline the clinical status of the condition or diagnosis.
 */
export const ConditionVerStatusValueSet = {
    /**
     * confirmed: There is sufficient diagnostic and/or clinical evidence to treat this as a confirmed condition.
     */
    Confirmed: new Coding({
        display: "Confirmed",
        code: "confirmed",
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
    }),
    /**
     * differential: One of a set of potential (and typically mutually exclusive) diagnoses asserted to further guide the diagnostic process and preliminary treatment.
     */
    Differential: new Coding({
        display: "Differential",
        code: "differential",
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
    }),
    /**
     * entered-in-error: The statement was entered in error and is not valid.
     */
    EnteredInError: new Coding({
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
    }),
    /**
     * provisional: This is a tentative diagnosis - still a candidate that is under consideration.
     */
    Provisional: new Coding({
        display: "Provisional",
        code: "provisional",
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
    }),
    /**
     * refuted: This condition has been ruled out by diagnostic and clinical evidence.
     */
    Refuted: new Coding({
        display: "Refuted",
        code: "refuted",
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
    }),
    /**
     * unconfirmed: There is not sufficient diagnostic and/or clinical evidence to treat this as a confirmed condition.
     */
    Unconfirmed: new Coding({
        display: "Unconfirmed",
        code: "unconfirmed",
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
    }),
};
/**
 * The verification status to support or decline the clinical status of the condition or diagnosis.
 */
//# sourceMappingURL=ConditionVerStatusValueSet.js.map