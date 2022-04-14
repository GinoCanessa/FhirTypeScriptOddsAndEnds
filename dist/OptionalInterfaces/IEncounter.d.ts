import * as fhirInterfaces from '../optionalinterfaces';
/**
 * The current status is always found in the current version of the resource, not the status history.
 */
export interface IEncounterStatusHistory extends fhirInterfaces.IBackboneElement {
    /**
     * The time that the episode was in the specified status.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
     */
    status?: EncounterStatusHistoryStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
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
 * The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
 */
export interface IEncounterClassHistory extends fhirInterfaces.IBackboneElement {
    /**
     * inpatient | outpatient | ambulatory | emergency +.
     */
    class?: fhirInterfaces.ICoding | undefined;
    /**
     * The time that the episode was in the specified class.
     */
    period?: fhirInterfaces.IPeriod | undefined;
}
/**
 * The list of people responsible for providing the service.
 */
export interface IEncounterParticipant extends fhirInterfaces.IBackboneElement {
    /**
     * Persons involved in the encounter other than the patient.
     */
    individual?: fhirInterfaces.IReference | undefined;
    /**
     * The period of time that the specified participant participated in the encounter. These can overlap or be sub-sets of the overall encounter's period.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * The participant type indicates how an individual participates in an encounter. It includes non-practitioner participants, and for practitioners this is to describe the action type in the context of this encounter (e.g. Admitting Dr, Attending Dr, Translator, Consulting Dr). This is different to the practitioner roles which are functional roles, derived from terms of employment, education, licensing, etc.
     */
    type?: fhirInterfaces.ICodeableConcept[] | undefined;
}
/**
 * The list of diagnosis relevant to this encounter.
 */
export interface IEncounterDiagnosis extends fhirInterfaces.IBackboneElement {
    /**
     * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
     */
    condition?: fhirInterfaces.IReference | undefined;
    /**
     * Ranking of the diagnosis (for each role type).
     */
    rank?: number | undefined;
    _rank?: fhirInterfaces.IElement | undefined;
    /**
     * Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …).
     */
    use?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included.
 * The duration recorded in the period of this encounter covers the entire scope of this hospitalization record.
 */
export interface IEncounterHospitalization extends fhirInterfaces.IBackboneElement {
    /**
     * From where patient was admitted (physician referral, transfer).
     */
    admitSource?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Location/organization to which the patient is discharged.
     */
    destination?: fhirInterfaces.IReference | undefined;
    /**
     * For example, a patient may request both a dairy-free and nut-free diet preference (not mutually exclusive).
     */
    dietPreference?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Category or kind of location after discharge.
     */
    dischargeDisposition?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The location/organization from which the patient came before admission.
     */
    origin?: fhirInterfaces.IReference | undefined;
    /**
     * Pre-admission identifier.
     */
    preAdmissionIdentifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * Whether this hospitalization is a readmission and why if known.
     */
    reAdmission?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment or other things.
     */
    specialArrangement?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Special courtesies (VIP, board member).
     */
    specialCourtesy?: fhirInterfaces.ICodeableConcept[] | undefined;
}
/**
 * Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client's home" and an encounter.class = "virtual".
 */
export interface IEncounterLocation extends fhirInterfaces.IBackboneElement {
    /**
     * The location where the encounter takes place.
     */
    location?: fhirInterfaces.IReference | undefined;
    /**
     * Time period during which the patient was present at the location.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * This information is de-normalized from the Location resource to support the easier understanding of the encounter resource and processing in messaging or query.
     * There may be many levels in the hierachy, and this may only pic specific levels that are required for a specific usage scenario.
     */
    physicalType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * When the patient is no longer active at a location, then the period end date is entered, and the status may be changed to completed.
     */
    status?: EncounterLocationStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
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
 * An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
 */
export interface IEncounter extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Encounter";
    /**
     * The billing system may choose to allocate billable items associated with the Encounter to different referenced Accounts based on internal business rules.
     */
    account?: fhirInterfaces.IReference[] | undefined;
    /**
     * The appointment that scheduled this encounter.
     */
    appointment?: fhirInterfaces.IReference[] | undefined;
    /**
     * The request this encounter satisfies (e.g. incoming referral or procedure request).
     */
    basedOn?: fhirInterfaces.IReference[] | undefined;
    /**
     * Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations.
     */
    class?: fhirInterfaces.ICoding | undefined;
    /**
     * The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
     */
    classHistory?: fhirInterfaces.IEncounterClassHistory[] | undefined;
    /**
     * The list of diagnosis relevant to this encounter.
     */
    diagnosis?: fhirInterfaces.IEncounterDiagnosis[] | undefined;
    /**
     * Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).
     */
    episodeOfCare?: fhirInterfaces.IReference[] | undefined;
    /**
     * An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included.
     * The duration recorded in the period of this encounter covers the entire scope of this hospitalization record.
     */
    hospitalization?: fhirInterfaces.IEncounterHospitalization | undefined;
    /**
     * Identifier(s) by which this encounter is known.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * May differ from the time the Encounter.period lasted because of leave of absence.
     */
    length?: fhirInterfaces.IDuration | undefined;
    /**
     * Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client's home" and an encounter.class = "virtual".
     */
    location?: fhirInterfaces.IEncounterLocation[] | undefined;
    /**
     * The list of people responsible for providing the service.
     */
    participant?: fhirInterfaces.IEncounterParticipant[] | undefined;
    /**
     * This is also used for associating a child's encounter back to the mother's encounter.
     * Refer to the Notes section in the Patient resource for further details.
     */
    partOf?: fhirInterfaces.IReference | undefined;
    /**
     * If not (yet) known, the end of the Period may be omitted.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * Indicates the urgency of the encounter.
     */
    priority?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
     */
    reasonCode?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
     */
    reasonReference?: fhirInterfaces.IReference[] | undefined;
    /**
     * The organization that is primarily responsible for this Encounter's services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation.  Refer to the example bundle showing an abbreviated set of Encounters for a colonoscopy.
     */
    serviceProvider?: fhirInterfaces.IReference | undefined;
    /**
     * Broad categorization of the service that is to be provided (e.g. cardiology).
     */
    serviceType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Note that internal business rules will determine the appropriate transitions that may occur between statuses (and also classes).
     */
    status?: EncounterStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * The current status is always found in the current version of the resource, not the status history.
     */
    statusHistory?: fhirInterfaces.IEncounterStatusHistory[] | undefined;
    /**
     * While the encounter is always about the patient, the patient might not actually be known in all contexts of use, and there may be a group of patients that could be anonymous (such as in a group therapy for Alcoholics Anonymous - where the recording of the encounter could be used for billing on the number of people/staff and not important to the context of the specific patients) or alternately in veterinary care a herd of sheep receiving treatment (where the animals are not individually tracked).
     */
    subject?: fhirInterfaces.IReference | undefined;
    /**
     * Since there are many ways to further classify encounters, this element is 0..*.
     */
    type?: fhirInterfaces.ICodeableConcept[] | undefined;
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
//# sourceMappingURL=IEncounter.d.ts.map