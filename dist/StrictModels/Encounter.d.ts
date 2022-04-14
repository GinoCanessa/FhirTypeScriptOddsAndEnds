import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * The current status is always found in the current version of the resource, not the status history.
 */
export declare class EncounterStatusHistory extends fhirModels.BackboneElement implements fhirInterfaces.IEncounterStatusHistory {
    /**
     * The time that the episode was in the specified status.
     */
    period: fhirModels.Period;
    /**
     * planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
     */
    status: EncounterStatusHistoryStatusEnum;
    _status?: fhirModels.Element | undefined;
    /**
     * Default constructor for EncounterStatusHistory from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IEncounterStatusHistory);
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
export declare class EncounterClassHistory extends fhirModels.BackboneElement implements fhirInterfaces.IEncounterClassHistory {
    /**
     * inpatient | outpatient | ambulatory | emergency +.
     */
    class: fhirModels.Coding;
    /**
     * The time that the episode was in the specified class.
     */
    period: fhirModels.Period;
    /**
     * Default constructor for EncounterClassHistory from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IEncounterClassHistory);
}
/**
 * The list of people responsible for providing the service.
 */
export declare class EncounterParticipant extends fhirModels.BackboneElement implements fhirInterfaces.IEncounterParticipant {
    /**
     * Persons involved in the encounter other than the patient.
     */
    individual?: fhirModels.Reference | undefined;
    /**
     * The period of time that the specified participant participated in the encounter. These can overlap or be sub-sets of the overall encounter's period.
     */
    period?: fhirModels.Period | undefined;
    /**
     * The participant type indicates how an individual participates in an encounter. It includes non-practitioner participants, and for practitioners this is to describe the action type in the context of this encounter (e.g. Admitting Dr, Attending Dr, Translator, Consulting Dr). This is different to the practitioner roles which are functional roles, derived from terms of employment, education, licensing, etc.
     */
    type?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Default constructor for EncounterParticipant from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IEncounterParticipant);
}
/**
 * The list of diagnosis relevant to this encounter.
 */
export declare class EncounterDiagnosis extends fhirModels.BackboneElement implements fhirInterfaces.IEncounterDiagnosis {
    /**
     * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
     */
    condition: fhirModels.Reference;
    /**
     * Ranking of the diagnosis (for each role type).
     */
    rank?: number | undefined;
    _rank?: fhirModels.Element | undefined;
    /**
     * Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …).
     */
    use?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for EncounterDiagnosis from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IEncounterDiagnosis);
}
/**
 * An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included.
 * The duration recorded in the period of this encounter covers the entire scope of this hospitalization record.
 */
export declare class EncounterHospitalization extends fhirModels.BackboneElement implements fhirInterfaces.IEncounterHospitalization {
    /**
     * From where patient was admitted (physician referral, transfer).
     */
    admitSource?: fhirModels.CodeableConcept | undefined;
    /**
     * Location/organization to which the patient is discharged.
     */
    destination?: fhirModels.Reference | undefined;
    /**
     * For example, a patient may request both a dairy-free and nut-free diet preference (not mutually exclusive).
     */
    dietPreference?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Category or kind of location after discharge.
     */
    dischargeDisposition?: fhirModels.CodeableConcept | undefined;
    /**
     * The location/organization from which the patient came before admission.
     */
    origin?: fhirModels.Reference | undefined;
    /**
     * Pre-admission identifier.
     */
    preAdmissionIdentifier?: fhirModels.Identifier | undefined;
    /**
     * Whether this hospitalization is a readmission and why if known.
     */
    reAdmission?: fhirModels.CodeableConcept | undefined;
    /**
     * Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment or other things.
     */
    specialArrangement?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Special courtesies (VIP, board member).
     */
    specialCourtesy?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Default constructor for EncounterHospitalization from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IEncounterHospitalization);
}
/**
 * Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client's home" and an encounter.class = "virtual".
 */
export declare class EncounterLocation extends fhirModels.BackboneElement implements fhirInterfaces.IEncounterLocation {
    /**
     * The location where the encounter takes place.
     */
    location: fhirModels.Reference;
    /**
     * Time period during which the patient was present at the location.
     */
    period?: fhirModels.Period | undefined;
    /**
     * This information is de-normalized from the Location resource to support the easier understanding of the encounter resource and processing in messaging or query.
     * There may be many levels in the hierachy, and this may only pic specific levels that are required for a specific usage scenario.
     */
    physicalType?: fhirModels.CodeableConcept | undefined;
    /**
     * When the patient is no longer active at a location, then the period end date is entered, and the status may be changed to completed.
     */
    status?: EncounterLocationStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * Default constructor for EncounterLocation from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IEncounterLocation);
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
export declare class Encounter extends fhirModels.DomainResource implements fhirInterfaces.IEncounter {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Encounter";
    /**
     * The billing system may choose to allocate billable items associated with the Encounter to different referenced Accounts based on internal business rules.
     */
    account?: fhirModels.Reference[] | undefined;
    /**
     * The appointment that scheduled this encounter.
     */
    appointment?: fhirModels.Reference[] | undefined;
    /**
     * The request this encounter satisfies (e.g. incoming referral or procedure request).
     */
    basedOn?: fhirModels.Reference[] | undefined;
    /**
     * Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations.
     */
    class: fhirModels.Coding;
    /**
     * The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
     */
    classHistory?: fhirModels.EncounterClassHistory[] | undefined;
    /**
     * The list of diagnosis relevant to this encounter.
     */
    diagnosis?: fhirModels.EncounterDiagnosis[] | undefined;
    /**
     * Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).
     */
    episodeOfCare?: fhirModels.Reference[] | undefined;
    /**
     * An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included.
     * The duration recorded in the period of this encounter covers the entire scope of this hospitalization record.
     */
    hospitalization?: fhirModels.EncounterHospitalization | undefined;
    /**
     * Identifier(s) by which this encounter is known.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * May differ from the time the Encounter.period lasted because of leave of absence.
     */
    length?: fhirModels.Duration | undefined;
    /**
     * Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client's home" and an encounter.class = "virtual".
     */
    location?: fhirModels.EncounterLocation[] | undefined;
    /**
     * The list of people responsible for providing the service.
     */
    participant?: fhirModels.EncounterParticipant[] | undefined;
    /**
     * This is also used for associating a child's encounter back to the mother's encounter.
     * Refer to the Notes section in the Patient resource for further details.
     */
    partOf?: fhirModels.Reference | undefined;
    /**
     * If not (yet) known, the end of the Period may be omitted.
     */
    period?: fhirModels.Period | undefined;
    /**
     * Indicates the urgency of the encounter.
     */
    priority?: fhirModels.CodeableConcept | undefined;
    /**
     * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
     */
    reasonCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
     */
    reasonReference?: fhirModels.Reference[] | undefined;
    /**
     * The organization that is primarily responsible for this Encounter's services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation.  Refer to the example bundle showing an abbreviated set of Encounters for a colonoscopy.
     */
    serviceProvider?: fhirModels.Reference | undefined;
    /**
     * Broad categorization of the service that is to be provided (e.g. cardiology).
     */
    serviceType?: fhirModels.CodeableConcept | undefined;
    /**
     * Note that internal business rules will determine the appropriate transitions that may occur between statuses (and also classes).
     */
    status: EncounterStatusEnum;
    _status?: fhirModels.Element | undefined;
    /**
     * The current status is always found in the current version of the resource, not the status history.
     */
    statusHistory?: fhirModels.EncounterStatusHistory[] | undefined;
    /**
     * While the encounter is always about the patient, the patient might not actually be known in all contexts of use, and there may be a group of patients that could be anonymous (such as in a group therapy for Alcoholics Anonymous - where the recording of the encounter could be used for billing on the number of people/staff and not important to the context of the specific patients) or alternately in veterinary care a herd of sheep receiving treatment (where the animals are not individually tracked).
     */
    subject?: fhirModels.Reference | undefined;
    /**
     * Since there are many ways to further classify encounters, this element is 0..*.
     */
    type?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Default constructor for Encounter from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IEncounter);
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