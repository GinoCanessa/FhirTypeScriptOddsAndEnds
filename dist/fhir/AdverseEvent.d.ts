import * as fhir from '../fhir';
/**
 * Information on the possible cause of the event.
 */
export declare type IAdverseEventSuspectEntityCausality = fhir.IBackboneElement & {
    /**
     * Assessment of if the entity caused the event.
     */
    assessment?: fhir.ICodeableConcept | undefined;
    /**
     * AdverseEvent.suspectEntity.causalityAuthor.
     */
    author?: fhir.IReference | undefined;
    /**
     * ProbabilityScale | Bayesian | Checklist.
     */
    method?: fhir.ICodeableConcept | undefined;
    /**
     * AdverseEvent.suspectEntity.causalityProductRelatedness.
     */
    productRelatedness?: string | undefined;
    _productRelatedness?: fhir.IFhirElement | undefined;
};
/**
 * Describes the entity that is suspected to have caused the adverse event.
 */
export declare type IAdverseEventSuspectEntity = fhir.IBackboneElement & {
    /**
     * Information on the possible cause of the event.
     */
    causality?: fhir.IAdverseEventSuspectEntityCausality[] | undefined;
    /**
     * Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device.
     */
    instance: fhir.IReference | null;
};
/**
 * Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.
 */
export declare type IAdverseEvent = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "AdverseEvent";
    /**
     * Whether the event actually happened, or just had the potential to. Note that this is independent of whether anyone was affected or harmed or how severely.
     */
    actuality: AdverseEventActualityEnum | null;
    _actuality?: fhir.IFhirElement | undefined;
    /**
     * The overall type of event, intended for search and filtering purposes.
     */
    category?: fhir.ICodeableConcept[] | undefined;
    /**
     * Parties that may or should contribute or have contributed information to the adverse event, which can consist of one or more activities.  Such information includes information leading to the decision to perform the activity and how to perform the activity (e.g. consultant), information that the activity itself seeks to reveal (e.g. informant of clinical history), or information about what activity was performed (e.g. informant witness).
     */
    contributor?: fhir.IReference[] | undefined;
    /**
     * The date (and perhaps time) when the adverse event occurred.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * Estimated or actual date the AdverseEvent began, in the opinion of the reporter.
     */
    detected?: string | undefined;
    _detected?: fhir.IFhirElement | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.  For example, if a medication administration was considered an adverse event because it resulted in a rash, then the encounter when the medication administration was given is the context.  If the patient reports the AdverseEvent during a second encounter, that second encounter is not the context.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * This element defines the specific type of event that occurred or that was prevented from occurring.
     */
    event?: fhir.ICodeableConcept | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * The information about where the adverse event occurred.
     */
    location?: fhir.IReference | undefined;
    /**
     * Describes the type of outcome from the adverse event.
     */
    outcome?: fhir.ICodeableConcept | undefined;
    /**
     * The recordedDate represents the date when this particular AdverseEvent record was created in the system, not the date of the most recent update.  The date of the last record modification can be retrieved from the resource metadata.
     */
    recordedDate?: string | undefined;
    _recordedDate?: fhir.IFhirElement | undefined;
    /**
     * Information on who recorded the adverse event.  May be the patient or a practitioner.
     */
    recorder?: fhir.IReference | undefined;
    /**
     * AdverseEvent.referenceDocument.
     */
    referenceDocument?: fhir.IReference[] | undefined;
    /**
     * Includes information about the reaction that occurred as a result of exposure to a substance (for example, a drug or a chemical).
     */
    resultingCondition?: fhir.IReference[] | undefined;
    /**
     * Assessment whether this event was of real importance.
     */
    seriousness?: fhir.ICodeableConcept | undefined;
    /**
     * Describes the severity of the adverse event, in relation to the subject. Contrast to AdverseEvent.seriousness - a severe rash might not be serious, but a mild heart problem is.
     */
    severity?: fhir.ICodeableConcept | undefined;
    /**
     * AdverseEvent.study.
     */
    study?: fhir.IReference[] | undefined;
    /**
     * If AdverseEvent.resultingCondition differs among members of the group, then use Patient as the subject.
     */
    subject: fhir.IReference | null;
    /**
     * AdverseEvent.subjectMedicalHistory.
     */
    subjectMedicalHistory?: fhir.IReference[] | undefined;
    /**
     * Describes the entity that is suspected to have caused the adverse event.
     */
    suspectEntity?: fhir.IAdverseEventSuspectEntity[] | undefined;
};
/**
 * Information on the possible cause of the event.
 */
export declare class AdverseEventSuspectEntityCausality extends fhir.BackboneElement implements fhir.IAdverseEventSuspectEntityCausality {
    /**
     * Assessment of if the entity caused the event.
     */
    assessment?: fhir.CodeableConcept | undefined;
    /**
     * AdverseEvent.suspectEntity.causalityAuthor.
     */
    author?: fhir.Reference | undefined;
    /**
     * ProbabilityScale | Bayesian | Checklist.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * AdverseEvent.suspectEntity.causalityProductRelatedness.
     */
    productRelatedness?: string | undefined;
    _productRelatedness?: fhir.FhirElement | undefined;
    /**
     * Default constructor for AdverseEventSuspectEntityCausality - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IAdverseEventSuspectEntityCausality>);
    /**
     * Check if the current AdverseEventSuspectEntityCausality contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a AdverseEventSuspectEntityCausality from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IAdverseEventSuspectEntityCausality): AdverseEventSuspectEntityCausality;
}
/**
 * Describes the entity that is suspected to have caused the adverse event.
 */
export declare class AdverseEventSuspectEntity extends fhir.BackboneElement implements fhir.IAdverseEventSuspectEntity {
    /**
     * Information on the possible cause of the event.
     */
    causality?: fhir.AdverseEventSuspectEntityCausality[] | undefined;
    /**
     * Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device.
     */
    instance: fhir.Reference | null;
    /**
     * Default constructor for AdverseEventSuspectEntity - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IAdverseEventSuspectEntity>);
    /**
     * Check if the current AdverseEventSuspectEntity contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a AdverseEventSuspectEntity from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IAdverseEventSuspectEntity): AdverseEventSuspectEntity;
}
/**
 * Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.
 */
export declare class AdverseEvent extends fhir.DomainResource implements fhir.IAdverseEvent {
    /**
     * Resource Type Name
     */
    resourceType: "AdverseEvent";
    /**
     * Whether the event actually happened, or just had the potential to. Note that this is independent of whether anyone was affected or harmed or how severely.
     */
    actuality: AdverseEventActualityEnum | null;
    _actuality?: fhir.FhirElement | undefined;
    /**
     * The overall type of event, intended for search and filtering purposes.
     */
    category?: fhir.CodeableConcept[] | undefined;
    /**
     * Parties that may or should contribute or have contributed information to the adverse event, which can consist of one or more activities.  Such information includes information leading to the decision to perform the activity and how to perform the activity (e.g. consultant), information that the activity itself seeks to reveal (e.g. informant of clinical history), or information about what activity was performed (e.g. informant witness).
     */
    contributor?: fhir.Reference[] | undefined;
    /**
     * The date (and perhaps time) when the adverse event occurred.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * Estimated or actual date the AdverseEvent began, in the opinion of the reporter.
     */
    detected?: string | undefined;
    _detected?: fhir.FhirElement | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.  For example, if a medication administration was considered an adverse event because it resulted in a rash, then the encounter when the medication administration was given is the context.  If the patient reports the AdverseEvent during a second encounter, that second encounter is not the context.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * This element defines the specific type of event that occurred or that was prevented from occurring.
     */
    event?: fhir.CodeableConcept | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The information about where the adverse event occurred.
     */
    location?: fhir.Reference | undefined;
    /**
     * Describes the type of outcome from the adverse event.
     */
    outcome?: fhir.CodeableConcept | undefined;
    /**
     * The recordedDate represents the date when this particular AdverseEvent record was created in the system, not the date of the most recent update.  The date of the last record modification can be retrieved from the resource metadata.
     */
    recordedDate?: string | undefined;
    _recordedDate?: fhir.FhirElement | undefined;
    /**
     * Information on who recorded the adverse event.  May be the patient or a practitioner.
     */
    recorder?: fhir.Reference | undefined;
    /**
     * AdverseEvent.referenceDocument.
     */
    referenceDocument?: fhir.Reference[] | undefined;
    /**
     * Includes information about the reaction that occurred as a result of exposure to a substance (for example, a drug or a chemical).
     */
    resultingCondition?: fhir.Reference[] | undefined;
    /**
     * Assessment whether this event was of real importance.
     */
    seriousness?: fhir.CodeableConcept | undefined;
    /**
     * Describes the severity of the adverse event, in relation to the subject. Contrast to AdverseEvent.seriousness - a severe rash might not be serious, but a mild heart problem is.
     */
    severity?: fhir.CodeableConcept | undefined;
    /**
     * AdverseEvent.study.
     */
    study?: fhir.Reference[] | undefined;
    /**
     * If AdverseEvent.resultingCondition differs among members of the group, then use Patient as the subject.
     */
    subject: fhir.Reference | null;
    /**
     * AdverseEvent.subjectMedicalHistory.
     */
    subjectMedicalHistory?: fhir.Reference[] | undefined;
    /**
     * Describes the entity that is suspected to have caused the adverse event.
     */
    suspectEntity?: fhir.AdverseEventSuspectEntity[] | undefined;
    /**
     * Default constructor for AdverseEvent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IAdverseEvent>);
    /**
     * Check if the current AdverseEvent contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a AdverseEvent from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IAdverseEvent): AdverseEvent;
}
/**
 * Code Values for the AdverseEvent.actuality field
 */
export declare enum AdverseEventActualityEnum {
    ACTUAL = "actual",
    POTENTIAL = "potential"
}
//# sourceMappingURL=AdverseEvent.d.ts.map