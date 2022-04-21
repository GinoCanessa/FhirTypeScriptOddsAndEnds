// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/immunization-origin|4.0.1
import { Coding } from '../fhir.js';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the data when the report of the immunization event is not based on information from the person, entity or organization who administered the vaccine. This value set is provided as a suggestive example.
 */
export const ImmunizationOriginValueSet = {
    /**
     * provider: The data for the immunization event originated with another provider.
     */
    OtherProvider: new Coding({
        display: "Other Provider",
        code: "provider",
        system: "http://terminology.hl7.org/CodeSystem/immunization-origin",
    }),
    /**
     * recall: The data for the immunization event originated from the recollection of the patient or parent/guardian of the patient.
     */
    ParentGuardianPatientRecall: new Coding({
        display: "Parent/Guardian/Patient Recall",
        code: "recall",
        system: "http://terminology.hl7.org/CodeSystem/immunization-origin",
    }),
    /**
     * record: The data for the immunization event originated with a written record for the patient.
     */
    WrittenRecord: new Coding({
        display: "Written Record",
        code: "record",
        system: "http://terminology.hl7.org/CodeSystem/immunization-origin",
    }),
    /**
     * school: The data for the immunization event originated with a school record for the patient.
     */
    SchoolRecord: new Coding({
        display: "School Record",
        code: "school",
        system: "http://terminology.hl7.org/CodeSystem/immunization-origin",
    }),
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the data when the report of the immunization event is not based on information from the person, entity or organization who administered the vaccine. This value set is provided as a suggestive example.
 */
export var ImmunizationOriginValueSetEnum;
(function (ImmunizationOriginValueSetEnum) {
    /**
     * provider: The data for the immunization event originated with another provider.
     */
    ImmunizationOriginValueSetEnum["OtherProvider"] = "provider";
    /**
     * recall: The data for the immunization event originated from the recollection of the patient or parent/guardian of the patient.
     */
    ImmunizationOriginValueSetEnum["ParentGuardianPatientRecall"] = "recall";
    /**
     * record: The data for the immunization event originated with a written record for the patient.
     */
    ImmunizationOriginValueSetEnum["WrittenRecord"] = "record";
    /**
     * school: The data for the immunization event originated with a school record for the patient.
     */
    ImmunizationOriginValueSetEnum["SchoolRecord"] = "school";
})(ImmunizationOriginValueSetEnum || (ImmunizationOriginValueSetEnum = {}));
//# sourceMappingURL=ImmunizationOriginValueSet.js.map