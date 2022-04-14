import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Information on the possible cause of the event.
 */
export declare class AdverseEventSuspectEntityCausality extends fhirModels.BackboneElement implements fhirInterfaces.IAdverseEventSuspectEntityCausality {
    /**
     * Assessment of if the entity caused the event.
     */
    assessment?: fhirModels.CodeableConcept | undefined;
    /**
     * AdverseEvent.suspectEntity.causalityAuthor.
     */
    author?: fhirModels.Reference | undefined;
    /**
     * ProbabilityScale | Bayesian | Checklist.
     */
    method?: fhirModels.CodeableConcept | undefined;
    /**
     * AdverseEvent.suspectEntity.causalityProductRelatedness.
     */
    productRelatedness?: string | undefined;
    _productRelatedness?: fhirModels.Element | undefined;
    /**
     * Default constructor for AdverseEventSuspectEntityCausality from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IAdverseEventSuspectEntityCausality);
}
/**
 * Describes the entity that is suspected to have caused the adverse event.
 */
export declare class AdverseEventSuspectEntity extends fhirModels.BackboneElement implements fhirInterfaces.IAdverseEventSuspectEntity {
    /**
     * Information on the possible cause of the event.
     */
    causality?: fhirModels.AdverseEventSuspectEntityCausality[] | undefined;
    /**
     * Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device.
     */
    instance: fhirModels.Reference;
    /**
     * Default constructor for AdverseEventSuspectEntity from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IAdverseEventSuspectEntity);
}
/**
 * Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.
 */
export declare class AdverseEvent extends fhirModels.DomainResource implements fhirInterfaces.IAdverseEvent {
    /**
     * Resource Type Name
     */
    readonly resourceType = "AdverseEvent";
    /**
     * Whether the event actually happened, or just had the potential to. Note that this is independent of whether anyone was affected or harmed or how severely.
     */
    actuality: AdverseEventActualityEnum;
    _actuality?: fhirModels.Element | undefined;
    /**
     * The overall type of event, intended for search and filtering purposes.
     */
    category?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Parties that may or should contribute or have contributed information to the adverse event, which can consist of one or more activities.  Such information includes information leading to the decision to perform the activity and how to perform the activity (e.g. consultant), information that the activity itself seeks to reveal (e.g. informant of clinical history), or information about what activity was performed (e.g. informant witness).
     */
    contributor?: fhirModels.Reference[] | undefined;
    /**
     * The date (and perhaps time) when the adverse event occurred.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * Estimated or actual date the AdverseEvent began, in the opinion of the reporter.
     */
    detected?: string | undefined;
    _detected?: fhirModels.Element | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.  For example, if a medication administration was considered an adverse event because it resulted in a rash, then the encounter when the medication administration was given is the context.  If the patient reports the AdverseEvent during a second encounter, that second encounter is not the context.
     */
    encounter?: fhirModels.Reference | undefined;
    /**
     * This element defines the specific type of event that occurred or that was prevented from occurring.
     */
    event?: fhirModels.CodeableConcept | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhirModels.Identifier | undefined;
    /**
     * The information about where the adverse event occurred.
     */
    location?: fhirModels.Reference | undefined;
    /**
     * Describes the type of outcome from the adverse event.
     */
    outcome?: fhirModels.CodeableConcept | undefined;
    /**
     * The recordedDate represents the date when this particular AdverseEvent record was created in the system, not the date of the most recent update.  The date of the last record modification can be retrieved from the resource metadata.
     */
    recordedDate?: string | undefined;
    _recordedDate?: fhirModels.Element | undefined;
    /**
     * Information on who recorded the adverse event.  May be the patient or a practitioner.
     */
    recorder?: fhirModels.Reference | undefined;
    /**
     * AdverseEvent.referenceDocument.
     */
    referenceDocument?: fhirModels.Reference[] | undefined;
    /**
     * Includes information about the reaction that occurred as a result of exposure to a substance (for example, a drug or a chemical).
     */
    resultingCondition?: fhirModels.Reference[] | undefined;
    /**
     * Assessment whether this event was of real importance.
     */
    seriousness?: fhirModels.CodeableConcept | undefined;
    /**
     * Describes the severity of the adverse event, in relation to the subject. Contrast to AdverseEvent.seriousness - a severe rash might not be serious, but a mild heart problem is.
     */
    severity?: fhirModels.CodeableConcept | undefined;
    /**
     * AdverseEvent.study.
     */
    study?: fhirModels.Reference[] | undefined;
    /**
     * If AdverseEvent.resultingCondition differs among members of the group, then use Patient as the subject.
     */
    subject: fhirModels.Reference;
    /**
     * AdverseEvent.subjectMedicalHistory.
     */
    subjectMedicalHistory?: fhirModels.Reference[] | undefined;
    /**
     * Describes the entity that is suspected to have caused the adverse event.
     */
    suspectEntity?: fhirModels.AdverseEventSuspectEntity[] | undefined;
    /**
     * Default constructor for AdverseEvent from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IAdverseEvent);
}
/**
 * Code Values for the AdverseEvent.actuality field
 */
export declare enum AdverseEventActualityEnum {
    ACTUAL = "actual",
    POTENTIAL = "potential"
}
//# sourceMappingURL=AdverseEvent.d.ts.map