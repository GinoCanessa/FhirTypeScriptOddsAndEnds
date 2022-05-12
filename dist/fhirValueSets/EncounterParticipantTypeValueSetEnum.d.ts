/**
 * This value set defines a set of codes that can be used to indicate how an individual participates in an encounter.
 */
export declare enum EncounterParticipantTypeValueSetEnum {
    /**
     * ADM: The practitioner who is responsible for admitting a patient to a patient encounter.
     */
    Admitter = "ADM",
    /**
     * ATND: The practitioner that has responsibility for overseeing a patient's care during a patient encounter.
     */
    Attender = "ATND",
    /**
     * CALLBCK: A person or organization who should be contacted for follow-up questions about the act in place of the author.
     */
    CallbackContact = "CALLBCK",
    /**
     * CON: An advisor participating in the service by performing evaluations and making recommendations.
     */
    Consultant = "CON",
    /**
     * DIS: The practitioner who is responsible for the discharge of a patient from a patient encounter.
     */
    Discharger = "DIS",
    /**
     * emergency: A person to be contacted in case of an emergency during the encounter.
     */
    Emergency = "emergency",
    /**
     * ESC: Only with Transportation services.  A person who escorts the patient.
     */
    Escort = "ESC",
    /**
     * PART: Indicates that the target of the participation is involved in some manner in the act, but does not qualify how.
     */
    Participation = "PART",
    /**
     * PPRF: The principal or primary performer of the act.
     */
    PrimaryPerformer = "PPRF",
    /**
     * REF: A person having referred the subject of the service to the performer (referring physician).  Typically, a referring physician will receive a report.
     */
    Referrer = "REF",
    /**
     * SPRF: A person assisting in an act through his substantial presence and involvement   This includes: assistants, technicians, associates, or whatever the job titles may be.
     */
    SecondaryPerformer = "SPRF",
    /**
     * translator: A translator who is facilitating communication with the patient during the encounter.
     */
    Translator = "translator"
}
//# sourceMappingURL=EncounterParticipantTypeValueSetEnum.d.ts.map