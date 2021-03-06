// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/action-participant-type|4.0.1
import { Coding } from '../fhir.js';
/**
 * The type of participant for the action.
 */
export const ActionParticipantTypeValueSet = {
    /**
     * device: The participant is a system or device used in the care of the patient.
     */
    Device: new Coding({
        display: "Device",
        code: "device",
        system: "http://hl7.org/fhir/action-participant-type",
    }),
    /**
     * patient: The participant is the patient under evaluation.
     */
    Patient: new Coding({
        display: "Patient",
        code: "patient",
        system: "http://hl7.org/fhir/action-participant-type",
    }),
    /**
     * practitioner: The participant is a practitioner involved in the patient's care.
     */
    Practitioner: new Coding({
        display: "Practitioner",
        code: "practitioner",
        system: "http://hl7.org/fhir/action-participant-type",
    }),
    /**
     * related-person: The participant is a person related to the patient.
     */
    RelatedPerson: new Coding({
        display: "Related Person",
        code: "related-person",
        system: "http://hl7.org/fhir/action-participant-type",
    }),
};
/**
 * The type of participant for the action.
 */
//# sourceMappingURL=ActionParticipantTypeValueSet.js.map