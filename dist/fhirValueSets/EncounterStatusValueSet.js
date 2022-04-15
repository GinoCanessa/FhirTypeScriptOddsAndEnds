// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Restricted to: Patient|Encounter|Observation
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * Current state of the encounter.
 */
export var EncounterStatusValueSet = {
    /**
     * The Patient is present for the encounter, however is not currently meeting with a practitioner.
     */
    encounter_status_Arrived: Coding.FactoryCreateStrict({
        code: "arrived",
        display: "Arrived",
        system: "http://hl7.org/fhir/encounter-status"
    }),
    /**
     * The Encounter has ended before it has begun.
     */
    encounter_status_Cancelled: Coding.FactoryCreateStrict({
        code: "cancelled",
        display: "Cancelled",
        system: "http://hl7.org/fhir/encounter-status"
    }),
    /**
     * This instance should not have been part of this patient's medical record.
     */
    encounter_status_EnteredInError: Coding.FactoryCreateStrict({
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/encounter-status"
    }),
    /**
     * The Encounter has ended.
     */
    encounter_status_Finished: Coding.FactoryCreateStrict({
        code: "finished",
        display: "Finished",
        system: "http://hl7.org/fhir/encounter-status"
    }),
    /**
     * The Encounter has begun and the patient is present / the practitioner and the patient are meeting.
     */
    encounter_status_InProgress: Coding.FactoryCreateStrict({
        code: "in-progress",
        display: "In Progress",
        system: "http://hl7.org/fhir/encounter-status"
    }),
    /**
     * The Encounter has begun, but the patient is temporarily on leave.
     */
    encounter_status_OnLeave: Coding.FactoryCreateStrict({
        code: "onleave",
        display: "On Leave",
        system: "http://hl7.org/fhir/encounter-status"
    }),
    /**
     * The Encounter has not yet started.
     */
    encounter_status_Planned: Coding.FactoryCreateStrict({
        code: "planned",
        display: "Planned",
        system: "http://hl7.org/fhir/encounter-status"
    }),
    /**
     * The patient has been assessed for the priority of their treatment based on the severity of their condition.
     */
    encounter_status_Triaged: Coding.FactoryCreateStrict({
        code: "triaged",
        display: "Triaged",
        system: "http://hl7.org/fhir/encounter-status"
    }),
    /**
     * The encounter status is unknown. Note that "unknown" is a value of last resort and every attempt should be made to provide a meaningful value other than "unknown".
     */
    encounter_status_Unknown: Coding.FactoryCreateStrict({
        code: "unknown",
        display: "Unknown",
        system: "http://hl7.org/fhir/encounter-status"
    }),
};
//# sourceMappingURL=EncounterStatusValueSet.js.map