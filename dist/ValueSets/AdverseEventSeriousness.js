"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdverseEventSeriousness = void 0;
/**
 * Overall seriousness of this event for the patient.
 */
exports.AdverseEventSeriousness = {
    /**
     * Non-serious.
     */
    adverse_event_seriousness_NonSerious: {
        code: "Non-serious",
        display: "Non-serious",
        system: "http://terminology.hl7.org/CodeSystem/adverse-event-seriousness"
    },
    /**
     * Serious.
     */
    adverse_event_seriousness_Serious: {
        code: "Serious",
        display: "Serious",
        system: "http://terminology.hl7.org/CodeSystem/adverse-event-seriousness"
    },
    /**
     * Is a congenital anomaly/birth defect.
     */
    adverse_event_seriousness_IsACongenitalAnomalyBirthDefect: {
        code: "SeriousIsBirthDefect",
        display: "Is a congenital anomaly/birth defect",
        system: "http://terminology.hl7.org/CodeSystem/adverse-event-seriousness"
    },
    /**
     * Is Life-threatening.
     */
    adverse_event_seriousness_IsLifeThreatening: {
        code: "SeriousIsLifeThreatening",
        display: "Is Life-threatening",
        system: "http://terminology.hl7.org/CodeSystem/adverse-event-seriousness"
    },
    /**
     * Requires intervention to prevent permanent impairment or damage (i.e., an important medical event that requires medical judgement).
     */
    adverse_event_seriousness_RequiresInterventionToPreventPermanentImpairment: {
        code: "SeriousRequiresPreventImpairment",
        display: "Requires intervention to prevent permanent impairment",
        system: "http://terminology.hl7.org/CodeSystem/adverse-event-seriousness"
    },
    /**
     * Results in death.
     */
    adverse_event_seriousness_ResultsInDeath: {
        code: "SeriousResultsInDeath",
        display: "Results in death",
        system: "http://terminology.hl7.org/CodeSystem/adverse-event-seriousness"
    },
    /**
     * Results in persistent or significant disability/incapacity.
     */
    adverse_event_seriousness_ResultsInPersistentOrSignificantDisabilityIncapacity: {
        code: "SeriousResultsInDisability",
        display: "Results in persistent or significant disability/incapacity",
        system: "http://terminology.hl7.org/CodeSystem/adverse-event-seriousness"
    },
    /**
     * Requires inpatient hospitalization or causes prolongation of existing hospitalization.
     */
    adverse_event_seriousness_RequiresOrProlongsInpatientHospitalization: {
        code: "SeriousResultsInHospitalization",
        display: "Requires or prolongs inpatient hospitalization",
        system: "http://terminology.hl7.org/CodeSystem/adverse-event-seriousness"
    },
};
//# sourceMappingURL=AdverseEventSeriousness.js.map