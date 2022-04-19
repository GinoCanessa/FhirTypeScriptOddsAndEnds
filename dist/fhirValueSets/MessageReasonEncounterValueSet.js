// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * Example Message Reasons. These are the set of codes that might be used an updating an encounter using admin-update.
 */
export const MessageReasonEncounterValueSet = {
    /**
     * The patient has temporarily left the institution.
     */
    message_reason_encounter_Absent: new Coding({
        code: "absent",
        display: "Absent",
        system: "http://terminology.hl7.org/CodeSystem/message-reasons-encounter"
    }),
    /**
     * The patient has been admitted.
     */
    message_reason_encounter_Admit: new Coding({
        code: "admit",
        display: "Admit",
        system: "http://terminology.hl7.org/CodeSystem/message-reasons-encounter"
    }),
    /**
     * The patient has been discharged.
     */
    message_reason_encounter_Discharge: new Coding({
        code: "discharge",
        display: "Discharge",
        system: "http://terminology.hl7.org/CodeSystem/message-reasons-encounter"
    }),
    /**
     * Encounter details have been updated (e.g. to correct a coding error).
     */
    message_reason_encounter_Edit: new Coding({
        code: "edit",
        display: "Edit",
        system: "http://terminology.hl7.org/CodeSystem/message-reasons-encounter"
    }),
    /**
     * The patient has been moved to a new location.
     */
    message_reason_encounter_Moved: new Coding({
        code: "moved",
        display: "Moved",
        system: "http://terminology.hl7.org/CodeSystem/message-reasons-encounter"
    }),
    /**
     * The patient has returned from a temporary absence.
     */
    message_reason_encounter_Returned: new Coding({
        code: "return",
        display: "Returned",
        system: "http://terminology.hl7.org/CodeSystem/message-reasons-encounter"
    }),
};
//# sourceMappingURL=MessageReasonEncounterValueSet.js.map