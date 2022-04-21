// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/message-reason-encounter|4.0.1
import { Coding } from '../fhir.js';
/**
 * Example Message Reasons. These are the set of codes that might be used an updating an encounter using admin-update.
 */
export const MessageReasonEncounterValueSet = {
    /**
     * absent: The patient has temporarily left the institution.
     */
    Absent: new Coding({
        display: "Absent",
        code: "absent",
        system: "http://terminology.hl7.org/CodeSystem/message-reasons-encounter",
    }),
    /**
     * admit: The patient has been admitted.
     */
    Admit: new Coding({
        display: "Admit",
        code: "admit",
        system: "http://terminology.hl7.org/CodeSystem/message-reasons-encounter",
    }),
    /**
     * discharge: The patient has been discharged.
     */
    Discharge: new Coding({
        display: "Discharge",
        code: "discharge",
        system: "http://terminology.hl7.org/CodeSystem/message-reasons-encounter",
    }),
    /**
     * edit: Encounter details have been updated (e.g. to correct a coding error).
     */
    Edit: new Coding({
        display: "Edit",
        code: "edit",
        system: "http://terminology.hl7.org/CodeSystem/message-reasons-encounter",
    }),
    /**
     * moved: The patient has been moved to a new location.
     */
    Moved: new Coding({
        display: "Moved",
        code: "moved",
        system: "http://terminology.hl7.org/CodeSystem/message-reasons-encounter",
    }),
    /**
     * return: The patient has returned from a temporary absence.
     */
    Returned: new Coding({
        display: "Returned",
        code: "return",
        system: "http://terminology.hl7.org/CodeSystem/message-reasons-encounter",
    }),
};
/**
 * Example Message Reasons. These are the set of codes that might be used an updating an encounter using admin-update.
 */
export var MessageReasonEncounterValueSetEnum;
(function (MessageReasonEncounterValueSetEnum) {
    /**
     * absent: The patient has temporarily left the institution.
     */
    MessageReasonEncounterValueSetEnum["Absent"] = "absent";
    /**
     * admit: The patient has been admitted.
     */
    MessageReasonEncounterValueSetEnum["Admit"] = "admit";
    /**
     * discharge: The patient has been discharged.
     */
    MessageReasonEncounterValueSetEnum["Discharge"] = "discharge";
    /**
     * edit: Encounter details have been updated (e.g. to correct a coding error).
     */
    MessageReasonEncounterValueSetEnum["Edit"] = "edit";
    /**
     * moved: The patient has been moved to a new location.
     */
    MessageReasonEncounterValueSetEnum["Moved"] = "moved";
    /**
     * return: The patient has returned from a temporary absence.
     */
    MessageReasonEncounterValueSetEnum["Returned"] = "return";
})(MessageReasonEncounterValueSetEnum || (MessageReasonEncounterValueSetEnum = {}));
//# sourceMappingURL=MessageReasonEncounterValueSet.js.map