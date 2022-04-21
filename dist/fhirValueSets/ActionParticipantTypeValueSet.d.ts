import { Coding } from '../fhir.js';
/**
 * The type of participant for the action.
 */
export declare const ActionParticipantTypeValueSet: {
    /**
     * device: The participant is a system or device used in the care of the patient.
     */
    readonly Device: Coding;
    /**
     * patient: The participant is the patient under evaluation.
     */
    readonly Patient: Coding;
    /**
     * practitioner: The participant is a practitioner involved in the patient's care.
     */
    readonly Practitioner: Coding;
    /**
     * related-person: The participant is a person related to the patient.
     */
    readonly RelatedPerson: Coding;
};
/**
 * The type of participant for the action.
 */
export declare type ActionParticipantTypeValueSetType = typeof ActionParticipantTypeValueSet;
/**
 * The type of participant for the action.
 */
export declare enum ActionParticipantTypeValueSetEnum {
    /**
     * device: The participant is a system or device used in the care of the patient.
     */
    Device = "device",
    /**
     * patient: The participant is the patient under evaluation.
     */
    Patient = "patient",
    /**
     * practitioner: The participant is a practitioner involved in the patient's care.
     */
    Practitioner = "practitioner",
    /**
     * related-person: The participant is a person related to the patient.
     */
    RelatedPerson = "related-person"
}
//# sourceMappingURL=ActionParticipantTypeValueSet.d.ts.map