import { Coding } from '../strictmodels';
/**
 * This value set defines a set of codes that can be used to indicate how an individual participates in an encounter.
 */
export declare const EncounterParticipantType: {
    /**
     * The practitioner who is responsible for admitting a patient to a patient encounter.
     */
    v3_ParticipationType_Admitter: Coding;
    /**
     * The practitioner that has responsibility for overseeing a patient's care during a patient encounter.
     */
    v3_ParticipationType_Attender: Coding;
    /**
     * A person or organization who should be contacted for follow-up questions about the act in place of the author.
     */
    v3_ParticipationType_CallbackContact: Coding;
    /**
     * An advisor participating in the service by performing evaluations and making recommendations.
     */
    v3_ParticipationType_Consultant: Coding;
    /**
     * The practitioner who is responsible for the discharge of a patient from a patient encounter.
     */
    v3_ParticipationType_Discharger: Coding;
    /**
     * A person to be contacted in case of an emergency during the encounter.
     */
    encounter_participant_type_Emergency: Coding;
    /**
     * Only with Transportation services.  A person who escorts the patient.
     */
    v3_ParticipationType_Escort: Coding;
    /**
     * Indicates that the target of the participation is involved in some manner in the act, but does not qualify how.
     */
    v3_ParticipationType_Participation: Coding;
    /**
     * The principal or primary performer of the act.
     */
    v3_ParticipationType_PrimaryPerformer: Coding;
    /**
     * A person having referred the subject of the service to the performer (referring physician).  Typically, a referring physician will receive a report.
     */
    v3_ParticipationType_Referrer: Coding;
    /**
     * A person assisting in an act through his substantial presence and involvement   This includes: assistants, technicians, associates, or whatever the job titles may be.
     */
    v3_ParticipationType_SecondaryPerformer: Coding;
    /**
     * A translator who is facilitating communication with the patient during the encounter.
     */
    encounter_participant_type_Translator: Coding;
};
//# sourceMappingURL=EncounterParticipantType.d.ts.map