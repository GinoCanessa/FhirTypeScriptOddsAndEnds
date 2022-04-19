import * as fhir from '../fhir';
/**
 * The current status is always found in the current version of the resource, not the status history.
 */
export declare type IEncounterStatusHistory = fhir.IBackboneElement & {
    /**
     * The time that the episode was in the specified status.
     */
    period: fhir.IPeriod | null;
    /**
     * planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
     */
    status: EncounterStatusHistoryStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
};
/**
 * The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
 */
export declare type IEncounterClassHistory = fhir.IBackboneElement & {
    /**
     * inpatient | outpatient | ambulatory | emergency +.
     */
    class: fhir.ICoding | null;
    /**
     * The time that the episode was in the specified class.
     */
    period: fhir.IPeriod | null;
};
/**
 * The list of people responsible for providing the service.
 */
export declare type IEncounterParticipant = fhir.IBackboneElement & {
    /**
     * Persons involved in the encounter other than the patient.
     */
    individual?: fhir.IReference | undefined;
    /**
     * The period of time that the specified participant participated in the encounter. These can overlap or be sub-sets of the overall encounter's period.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * The participant type indicates how an individual participates in an encounter. It includes non-practitioner participants, and for practitioners this is to describe the action type in the context of this encounter (e.g. Admitting Dr, Attending Dr, Translator, Consulting Dr). This is different to the practitioner roles which are functional roles, derived from terms of employment, education, licensing, etc.
     */
    type?: fhir.ICodeableConcept[] | undefined;
};
/**
 * The list of diagnosis relevant to this encounter.
 */
export declare type IEncounterDiagnosis = fhir.IBackboneElement & {
    /**
     * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
     */
    condition: fhir.IReference | null;
    /**
     * Ranking of the diagnosis (for each role type).
     */
    rank?: number | undefined;
    _rank?: fhir.IFhirElement | undefined;
    /**
     * Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …).
     */
    use?: fhir.ICodeableConcept | undefined;
};
/**
 * An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included.
 * The duration recorded in the period of this encounter covers the entire scope of this hospitalization record.
 */
export declare type IEncounterHospitalization = fhir.IBackboneElement & {
    /**
     * From where patient was admitted (physician referral, transfer).
     */
    admitSource?: fhir.ICodeableConcept | undefined;
    /**
     * Location/organization to which the patient is discharged.
     */
    destination?: fhir.IReference | undefined;
    /**
     * For example, a patient may request both a dairy-free and nut-free diet preference (not mutually exclusive).
     */
    dietPreference?: fhir.ICodeableConcept[] | undefined;
    /**
     * Category or kind of location after discharge.
     */
    dischargeDisposition?: fhir.ICodeableConcept | undefined;
    /**
     * The location/organization from which the patient came before admission.
     */
    origin?: fhir.IReference | undefined;
    /**
     * Pre-admission identifier.
     */
    preAdmissionIdentifier?: fhir.IIdentifier | undefined;
    /**
     * Whether this hospitalization is a readmission and why if known.
     */
    reAdmission?: fhir.ICodeableConcept | undefined;
    /**
     * Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment or other things.
     */
    specialArrangement?: fhir.ICodeableConcept[] | undefined;
    /**
     * Special courtesies (VIP, board member).
     */
    specialCourtesy?: fhir.ICodeableConcept[] | undefined;
};
/**
 * Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client's home" and an encounter.class = "virtual".
 */
export declare type IEncounterLocation = fhir.IBackboneElement & {
    /**
     * The location where the encounter takes place.
     */
    location: fhir.IReference | null;
    /**
     * Time period during which the patient was present at the location.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * This information is de-normalized from the Location resource to support the easier understanding of the encounter resource and processing in messaging or query.
     * There may be many levels in the hierachy, and this may only pic specific levels that are required for a specific usage scenario.
     */
    physicalType?: fhir.ICodeableConcept | undefined;
    /**
     * When the patient is no longer active at a location, then the period end date is entered, and the status may be changed to completed.
     */
    status?: EncounterLocationStatusEnum | undefined;
    _status?: fhir.IFhirElement | undefined;
};
/**
 * An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
 */
export declare type IEncounter = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Encounter";
    /**
     * The billing system may choose to allocate billable items associated with the Encounter to different referenced Accounts based on internal business rules.
     */
    account?: fhir.IReference[] | undefined;
    /**
     * The appointment that scheduled this encounter.
     */
    appointment?: fhir.IReference[] | undefined;
    /**
     * The request this encounter satisfies (e.g. incoming referral or procedure request).
     */
    basedOn?: fhir.IReference[] | undefined;
    /**
     * Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations.
     */
    class: fhir.ICoding | null;
    /**
     * The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
     */
    classHistory?: fhir.IEncounterClassHistory[] | undefined;
    /**
     * The list of diagnosis relevant to this encounter.
     */
    diagnosis?: fhir.IEncounterDiagnosis[] | undefined;
    /**
     * Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).
     */
    episodeOfCare?: fhir.IReference[] | undefined;
    /**
     * An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included.
     * The duration recorded in the period of this encounter covers the entire scope of this hospitalization record.
     */
    hospitalization?: fhir.IEncounterHospitalization | undefined;
    /**
     * Identifier(s) by which this encounter is known.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * May differ from the time the Encounter.period lasted because of leave of absence.
     */
    length?: fhir.IDuration | undefined;
    /**
     * Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client's home" and an encounter.class = "virtual".
     */
    location?: fhir.IEncounterLocation[] | undefined;
    /**
     * The list of people responsible for providing the service.
     */
    participant?: fhir.IEncounterParticipant[] | undefined;
    /**
     * This is also used for associating a child's encounter back to the mother's encounter.
     * Refer to the Notes section in the Patient resource for further details.
     */
    partOf?: fhir.IReference | undefined;
    /**
     * If not (yet) known, the end of the Period may be omitted.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * Indicates the urgency of the encounter.
     */
    priority?: fhir.ICodeableConcept | undefined;
    /**
     * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
     */
    reasonCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
     */
    reasonReference?: fhir.IReference[] | undefined;
    /**
     * The organization that is primarily responsible for this Encounter's services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation.  Refer to the example bundle showing an abbreviated set of Encounters for a colonoscopy.
     */
    serviceProvider?: fhir.IReference | undefined;
    /**
     * Broad categorization of the service that is to be provided (e.g. cardiology).
     */
    serviceType?: fhir.ICodeableConcept | undefined;
    /**
     * Note that internal business rules will determine the appropriate transitions that may occur between statuses (and also classes).
     */
    status: EncounterStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * The current status is always found in the current version of the resource, not the status history.
     */
    statusHistory?: fhir.IEncounterStatusHistory[] | undefined;
    /**
     * While the encounter is always about the patient, the patient might not actually be known in all contexts of use, and there may be a group of patients that could be anonymous (such as in a group therapy for Alcoholics Anonymous - where the recording of the encounter could be used for billing on the number of people/staff and not important to the context of the specific patients) or alternately in veterinary care a herd of sheep receiving treatment (where the animals are not individually tracked).
     */
    subject?: fhir.IReference | undefined;
    /**
     * Since there are many ways to further classify encounters, this element is 0..*.
     */
    type?: fhir.ICodeableConcept[] | undefined;
};
/**
 * The current status is always found in the current version of the resource, not the status history.
 */
export declare class EncounterStatusHistory extends fhir.BackboneElement implements fhir.IEncounterStatusHistory {
    /**
     * The time that the episode was in the specified status.
     */
    period: fhir.Period | null;
    /**
     * planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
     */
    status: EncounterStatusHistoryStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Default constructor for EncounterStatusHistory - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IEncounterStatusHistory>);
    /**
     * Check if the current EncounterStatusHistory contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a EncounterStatusHistory from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IEncounterStatusHistory): EncounterStatusHistory;
}
/**
 * The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
 */
export declare class EncounterClassHistory extends fhir.BackboneElement implements fhir.IEncounterClassHistory {
    /**
     * inpatient | outpatient | ambulatory | emergency +.
     */
    class: fhir.Coding | null;
    /**
     * The time that the episode was in the specified class.
     */
    period: fhir.Period | null;
    /**
     * Default constructor for EncounterClassHistory - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IEncounterClassHistory>);
    /**
     * Check if the current EncounterClassHistory contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a EncounterClassHistory from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IEncounterClassHistory): EncounterClassHistory;
}
/**
 * The list of people responsible for providing the service.
 */
export declare class EncounterParticipant extends fhir.BackboneElement implements fhir.IEncounterParticipant {
    /**
     * Persons involved in the encounter other than the patient.
     */
    individual?: fhir.Reference | undefined;
    /**
     * The period of time that the specified participant participated in the encounter. These can overlap or be sub-sets of the overall encounter's period.
     */
    period?: fhir.Period | undefined;
    /**
     * The participant type indicates how an individual participates in an encounter. It includes non-practitioner participants, and for practitioners this is to describe the action type in the context of this encounter (e.g. Admitting Dr, Attending Dr, Translator, Consulting Dr). This is different to the practitioner roles which are functional roles, derived from terms of employment, education, licensing, etc.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * Default constructor for EncounterParticipant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IEncounterParticipant>);
    /**
     * Check if the current EncounterParticipant contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a EncounterParticipant from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IEncounterParticipant): EncounterParticipant;
}
/**
 * The list of diagnosis relevant to this encounter.
 */
export declare class EncounterDiagnosis extends fhir.BackboneElement implements fhir.IEncounterDiagnosis {
    /**
     * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
     */
    condition: fhir.Reference | null;
    /**
     * Ranking of the diagnosis (for each role type).
     */
    rank?: number | undefined;
    _rank?: fhir.FhirElement | undefined;
    /**
     * Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …).
     */
    use?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for EncounterDiagnosis - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IEncounterDiagnosis>);
    /**
     * Check if the current EncounterDiagnosis contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a EncounterDiagnosis from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IEncounterDiagnosis): EncounterDiagnosis;
}
/**
 * An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included.
 * The duration recorded in the period of this encounter covers the entire scope of this hospitalization record.
 */
export declare class EncounterHospitalization extends fhir.BackboneElement implements fhir.IEncounterHospitalization {
    /**
     * From where patient was admitted (physician referral, transfer).
     */
    admitSource?: fhir.CodeableConcept | undefined;
    /**
     * Location/organization to which the patient is discharged.
     */
    destination?: fhir.Reference | undefined;
    /**
     * For example, a patient may request both a dairy-free and nut-free diet preference (not mutually exclusive).
     */
    dietPreference?: fhir.CodeableConcept[] | undefined;
    /**
     * Category or kind of location after discharge.
     */
    dischargeDisposition?: fhir.CodeableConcept | undefined;
    /**
     * The location/organization from which the patient came before admission.
     */
    origin?: fhir.Reference | undefined;
    /**
     * Pre-admission identifier.
     */
    preAdmissionIdentifier?: fhir.Identifier | undefined;
    /**
     * Whether this hospitalization is a readmission and why if known.
     */
    reAdmission?: fhir.CodeableConcept | undefined;
    /**
     * Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment or other things.
     */
    specialArrangement?: fhir.CodeableConcept[] | undefined;
    /**
     * Special courtesies (VIP, board member).
     */
    specialCourtesy?: fhir.CodeableConcept[] | undefined;
    /**
     * Default constructor for EncounterHospitalization - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IEncounterHospitalization>);
    /**
     * Check if the current EncounterHospitalization contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a EncounterHospitalization from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IEncounterHospitalization): EncounterHospitalization;
}
/**
 * Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client's home" and an encounter.class = "virtual".
 */
export declare class EncounterLocation extends fhir.BackboneElement implements fhir.IEncounterLocation {
    /**
     * The location where the encounter takes place.
     */
    location: fhir.Reference | null;
    /**
     * Time period during which the patient was present at the location.
     */
    period?: fhir.Period | undefined;
    /**
     * This information is de-normalized from the Location resource to support the easier understanding of the encounter resource and processing in messaging or query.
     * There may be many levels in the hierachy, and this may only pic specific levels that are required for a specific usage scenario.
     */
    physicalType?: fhir.CodeableConcept | undefined;
    /**
     * When the patient is no longer active at a location, then the period end date is entered, and the status may be changed to completed.
     */
    status?: EncounterLocationStatusEnum | undefined;
    _status?: fhir.FhirElement | undefined;
    /**
     * Default constructor for EncounterLocation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IEncounterLocation>);
    /**
     * Check if the current EncounterLocation contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a EncounterLocation from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IEncounterLocation): EncounterLocation;
}
/**
 * An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
 */
export declare class Encounter extends fhir.DomainResource implements fhir.IEncounter {
    /**
     * Resource Type Name
     */
    resourceType: "Encounter";
    /**
     * The billing system may choose to allocate billable items associated with the Encounter to different referenced Accounts based on internal business rules.
     */
    account?: fhir.Reference[] | undefined;
    /**
     * The appointment that scheduled this encounter.
     */
    appointment?: fhir.Reference[] | undefined;
    /**
     * The request this encounter satisfies (e.g. incoming referral or procedure request).
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations.
     */
    class: fhir.Coding | null;
    /**
     * The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
     */
    classHistory?: fhir.EncounterClassHistory[] | undefined;
    /**
     * The list of diagnosis relevant to this encounter.
     */
    diagnosis?: fhir.EncounterDiagnosis[] | undefined;
    /**
     * Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).
     */
    episodeOfCare?: fhir.Reference[] | undefined;
    /**
     * An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included.
     * The duration recorded in the period of this encounter covers the entire scope of this hospitalization record.
     */
    hospitalization?: fhir.EncounterHospitalization | undefined;
    /**
     * Identifier(s) by which this encounter is known.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * May differ from the time the Encounter.period lasted because of leave of absence.
     */
    length?: fhir.Duration | undefined;
    /**
     * Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client's home" and an encounter.class = "virtual".
     */
    location?: fhir.EncounterLocation[] | undefined;
    /**
     * The list of people responsible for providing the service.
     */
    participant?: fhir.EncounterParticipant[] | undefined;
    /**
     * This is also used for associating a child's encounter back to the mother's encounter.
     * Refer to the Notes section in the Patient resource for further details.
     */
    partOf?: fhir.Reference | undefined;
    /**
     * If not (yet) known, the end of the Period may be omitted.
     */
    period?: fhir.Period | undefined;
    /**
     * Indicates the urgency of the encounter.
     */
    priority?: fhir.CodeableConcept | undefined;
    /**
     * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * The organization that is primarily responsible for this Encounter's services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation.  Refer to the example bundle showing an abbreviated set of Encounters for a colonoscopy.
     */
    serviceProvider?: fhir.Reference | undefined;
    /**
     * Broad categorization of the service that is to be provided (e.g. cardiology).
     */
    serviceType?: fhir.CodeableConcept | undefined;
    /**
     * Note that internal business rules will determine the appropriate transitions that may occur between statuses (and also classes).
     */
    status: EncounterStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * The current status is always found in the current version of the resource, not the status history.
     */
    statusHistory?: fhir.EncounterStatusHistory[] | undefined;
    /**
     * While the encounter is always about the patient, the patient might not actually be known in all contexts of use, and there may be a group of patients that could be anonymous (such as in a group therapy for Alcoholics Anonymous - where the recording of the encounter could be used for billing on the number of people/staff and not important to the context of the specific patients) or alternately in veterinary care a herd of sheep receiving treatment (where the animals are not individually tracked).
     */
    subject?: fhir.Reference | undefined;
    /**
     * Since there are many ways to further classify encounters, this element is 0..*.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * Default constructor for Encounter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IEncounter>);
    /**
     * Check if the current Encounter contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a Encounter from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IEncounter): Encounter;
}
/**
 * Code Values for the Encounter.statusHistory.status field
 */
export declare enum EncounterStatusHistoryStatusEnum {
    PLANNED = "planned",
    ARRIVED = "arrived",
    TRIAGED = "triaged",
    IN_PROGRESS = "in-progress",
    ONLEAVE = "onleave",
    FINISHED = "finished",
    CANCELLED = "cancelled",
    ENTERED_IN_ERROR = "entered-in-error",
    UNKNOWN = "unknown"
}
/**
 * Code Values for the Encounter.location.status field
 */
export declare enum EncounterLocationStatusEnum {
    PLANNED = "planned",
    ACTIVE = "active",
    RESERVED = "reserved",
    COMPLETED = "completed"
}
/**
 * Code Values for the Encounter.status field
 */
export declare enum EncounterStatusEnum {
    PLANNED = "planned",
    ARRIVED = "arrived",
    TRIAGED = "triaged",
    IN_PROGRESS = "in-progress",
    ONLEAVE = "onleave",
    FINISHED = "finished",
    CANCELLED = "cancelled",
    ENTERED_IN_ERROR = "entered-in-error",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=Encounter.d.ts.map