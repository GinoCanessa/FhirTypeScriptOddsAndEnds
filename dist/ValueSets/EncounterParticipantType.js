"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncounterParticipantType = void 0;
/**
 * This value set defines a set of codes that can be used to indicate how an individual participates in an encounter.
 */
exports.EncounterParticipantType = {
    /**
     * The practitioner who is responsible for admitting a patient to a patient encounter.
     */
    v3_ParticipationType_Admitter: {
        code: "ADM",
        display: "admitter",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType"
    },
    /**
     * The practitioner that has responsibility for overseeing a patient's care during a patient encounter.
     */
    v3_ParticipationType_Attender: {
        code: "ATND",
        display: "attender",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType"
    },
    /**
     * A person or organization who should be contacted for follow-up questions about the act in place of the author.
     */
    v3_ParticipationType_CallbackContact: {
        code: "CALLBCK",
        display: "callback contact",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType"
    },
    /**
     * An advisor participating in the service by performing evaluations and making recommendations.
     */
    v3_ParticipationType_Consultant: {
        code: "CON",
        display: "consultant",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType"
    },
    /**
     * The practitioner who is responsible for the discharge of a patient from a patient encounter.
     */
    v3_ParticipationType_Discharger: {
        code: "DIS",
        display: "discharger",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType"
    },
    /**
     * A person to be contacted in case of an emergency during the encounter.
     */
    encounter_participant_type_Emergency: {
        code: "emergency",
        display: "Emergency",
        system: "http://terminology.hl7.org/CodeSystem/participant-type"
    },
    /**
     * Only with Transportation services.  A person who escorts the patient.
     */
    v3_ParticipationType_Escort: {
        code: "ESC",
        display: "escort",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType"
    },
    /**
     * Indicates that the target of the participation is involved in some manner in the act, but does not qualify how.
     */
    v3_ParticipationType_Participation: {
        code: "PART",
        display: "Participation",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType"
    },
    /**
     * The principal or primary performer of the act.
     */
    v3_ParticipationType_PrimaryPerformer: {
        code: "PPRF",
        display: "primary performer",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType"
    },
    /**
     * A person having referred the subject of the service to the performer (referring physician).  Typically, a referring physician will receive a report.
     */
    v3_ParticipationType_Referrer: {
        code: "REF",
        display: "referrer",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType"
    },
    /**
     * A person assisting in an act through his substantial presence and involvement   This includes: assistants, technicians, associates, or whatever the job titles may be.
     */
    v3_ParticipationType_SecondaryPerformer: {
        code: "SPRF",
        display: "secondary performer",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType"
    },
    /**
     * A translator who is facilitating communication with the patient during the encounter.
     */
    encounter_participant_type_Translator: {
        code: "translator",
        display: "Translator",
        system: "http://terminology.hl7.org/CodeSystem/participant-type"
    },
};
//# sourceMappingURL=EncounterParticipantType.js.map