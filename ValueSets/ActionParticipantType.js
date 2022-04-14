"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionParticipantType = void 0;
/**
 * The type of participant for the action.
 */
exports.ActionParticipantType = {
    /**
     * The participant is a system or device used in the care of the patient.
     */
    action_participant_type_Device: {
        code: "device",
        display: "Device",
        system: "http://hl7.org/fhir/action-participant-type"
    },
    /**
     * The participant is the patient under evaluation.
     */
    action_participant_type_Patient: {
        code: "patient",
        display: "Patient",
        system: "http://hl7.org/fhir/action-participant-type"
    },
    /**
     * The participant is a practitioner involved in the patient's care.
     */
    action_participant_type_Practitioner: {
        code: "practitioner",
        display: "Practitioner",
        system: "http://hl7.org/fhir/action-participant-type"
    },
    /**
     * The participant is a person related to the patient.
     */
    action_participant_type_RelatedPerson: {
        code: "related-person",
        display: "Related Person",
        system: "http://hl7.org/fhir/action-participant-type"
    },
};
//# sourceMappingURL=ActionParticipantType.js.map