import * as fhir from '../fhir';
/**
 * Indicates who performed the immunization event.
 */
export declare type IImmunizationPerformer = fhir.IBackboneElement & {
    /**
     * When the individual practitioner who performed the action is known, it is best to send.
     */
    actor: fhir.IReference | null;
    /**
     * Describes the type of performance (e.g. ordering provider, administering provider, etc.).
     */
    function?: fhir.ICodeableConcept | undefined;
};
/**
 * Educational material presented to the patient (or guardian) at the time of vaccine administration.
 */
export declare type IImmunizationEducation = fhir.IBackboneElement & {
    /**
     * Identifier of the material presented to the patient.
     */
    documentType?: string | undefined;
    _documentType?: fhir.IFhirElement | undefined;
    /**
     * Date the educational material was given to the patient.
     */
    presentationDate?: string | undefined;
    _presentationDate?: fhir.IFhirElement | undefined;
    /**
     * Date the educational material was published.
     */
    publicationDate?: string | undefined;
    _publicationDate?: fhir.IFhirElement | undefined;
    /**
     * Reference pointer to the educational material given to the patient if the information was on line.
     */
    reference?: string | undefined;
    _reference?: fhir.IFhirElement | undefined;
};
/**
 * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
 */
export declare type IImmunizationReaction = fhir.IBackboneElement & {
    /**
     * Date of reaction to the immunization.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * Details of the reaction.
     */
    detail?: fhir.IReference | undefined;
    /**
     * Self-reported indicator.
     */
    reported?: boolean | undefined;
    _reported?: fhir.IFhirElement | undefined;
};
/**
 * The protocol (set of recommendations) being followed by the provider who administered the dose.
 */
export declare type IImmunizationProtocolApplied = fhir.IBackboneElement & {
    /**
     * Indicates the authority who published the protocol (e.g. ACIP) that is being followed.
     */
    authority?: fhir.IReference | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberPositiveInt?: number | undefined;
    _doseNumberPositiveInt?: fhir.IFhirElement | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberString?: string | undefined;
    _doseNumberString?: fhir.IFhirElement | undefined;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: string | undefined;
    _series?: fhir.IFhirElement | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesPositiveInt?: number | undefined;
    _seriesDosesPositiveInt?: fhir.IFhirElement | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesString?: string | undefined;
    _seriesDosesString?: fhir.IFhirElement | undefined;
    /**
     * The vaccine preventable disease the dose is being administered against.
     */
    targetDisease?: fhir.ICodeableConcept[] | undefined;
};
/**
 * Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
 */
export declare type IImmunization = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Immunization";
    /**
     * The quantity of vaccine product that was administered.
     */
    doseQuantity?: fhir.IQuantity | undefined;
    /**
     * Educational material presented to the patient (or guardian) at the time of vaccine administration.
     */
    education?: fhir.IImmunizationEducation[] | undefined;
    /**
     * The visit or admission or other contact between patient and health care provider the immunization was performed as part of.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * Date vaccine batch expires.
     */
    expirationDate?: string | undefined;
    _expirationDate?: fhir.IFhirElement | undefined;
    /**
     * Indicates the source of the vaccine actually administered. This may be different than the patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine but due to inventory issues, vaccine purchased with private funds was actually administered).
     */
    fundingSource?: fhir.ICodeableConcept | undefined;
    /**
     * A unique identifier assigned to this immunization record.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Typically, the recognition of the dose being sub-potent is retrospective, after the administration (ex. notification of a manufacturer recall after administration). However, in the case of a partial administration (the patient moves unexpectedly and only some of the dose is actually administered), subpotency may be recognized immediately, but it is still important to record the event.
     */
    isSubpotent?: boolean | undefined;
    _isSubpotent?: fhir.IFhirElement | undefined;
    /**
     * The service delivery location where the vaccine administration occurred.
     */
    location?: fhir.IReference | undefined;
    /**
     * Lot number of the  vaccine product.
     */
    lotNumber?: string | undefined;
    _lotNumber?: fhir.IFhirElement | undefined;
    /**
     * Name of vaccine manufacturer.
     */
    manufacturer?: fhir.IReference | undefined;
    /**
     * Extra information about the immunization that is not conveyed by the other attributes.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhir.IFhirElement | undefined;
    /**
     * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
     */
    occurrenceString?: string | undefined;
    _occurrenceString?: fhir.IFhirElement | undefined;
    /**
     * The patient who either received or did not receive the immunization.
     */
    patient: fhir.IReference | null;
    /**
     * Indicates who performed the immunization event.
     */
    performer?: fhir.IImmunizationPerformer[] | undefined;
    /**
     * Reflects the “reliability” of the content.
     */
    primarySource?: boolean | undefined;
    _primarySource?: fhir.IFhirElement | undefined;
    /**
     * Indicates a patient's eligibility for a funding program.
     */
    programEligibility?: fhir.ICodeableConcept[] | undefined;
    /**
     * The protocol (set of recommendations) being followed by the provider who administered the dose.
     */
    protocolApplied?: fhir.IImmunizationProtocolApplied[] | undefined;
    /**
     * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
     */
    reaction?: fhir.IImmunizationReaction[] | undefined;
    /**
     * Reasons why the vaccine was administered.
     */
    reasonCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * Condition, Observation or DiagnosticReport that supports why the immunization was administered.
     */
    reasonReference?: fhir.IReference[] | undefined;
    /**
     * The date the occurrence of the immunization was first captured in the record - potentially significantly after the occurrence of the event.
     */
    recorded?: string | undefined;
    _recorded?: fhir.IFhirElement | undefined;
    /**
     * Should not be populated if primarySource = True, not required even if primarySource = False.
     */
    reportOrigin?: fhir.ICodeableConcept | undefined;
    /**
     * The path by which the vaccine product is taken into the body.
     */
    route?: fhir.ICodeableConcept | undefined;
    /**
     * Body site where vaccine was administered.
     */
    site?: fhir.ICodeableConcept | undefined;
    /**
     * Will generally be set to show that the immunization has been completed or not done.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ImmunizationStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * This is generally only used for the status of "not-done". The reason for performing the immunization event is captured in reasonCode, not here.
     */
    statusReason?: fhir.ICodeableConcept | undefined;
    /**
     * Reason why a dose is considered to be subpotent.
     */
    subpotentReason?: fhir.ICodeableConcept[] | undefined;
    /**
     * Vaccine that was administered or was to be administered.
     */
    vaccineCode: fhir.ICodeableConcept | null;
};
/**
 * Indicates who performed the immunization event.
 */
export declare class ImmunizationPerformer extends fhir.BackboneElement implements fhir.IImmunizationPerformer {
    /**
     * When the individual practitioner who performed the action is known, it is best to send.
     */
    actor: fhir.Reference | null;
    /**
     * Describes the type of performance (e.g. ordering provider, administering provider, etc.).
     */
    function?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ImmunizationPerformer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImmunizationPerformer>);
    /**
     * Check if the current ImmunizationPerformer contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ImmunizationPerformer from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IImmunizationPerformer): ImmunizationPerformer;
}
/**
 * Educational material presented to the patient (or guardian) at the time of vaccine administration.
 */
export declare class ImmunizationEducation extends fhir.BackboneElement implements fhir.IImmunizationEducation {
    /**
     * Identifier of the material presented to the patient.
     */
    documentType?: string | undefined;
    _documentType?: fhir.FhirElement | undefined;
    /**
     * Date the educational material was given to the patient.
     */
    presentationDate?: string | undefined;
    _presentationDate?: fhir.FhirElement | undefined;
    /**
     * Date the educational material was published.
     */
    publicationDate?: string | undefined;
    _publicationDate?: fhir.FhirElement | undefined;
    /**
     * Reference pointer to the educational material given to the patient if the information was on line.
     */
    reference?: string | undefined;
    _reference?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImmunizationEducation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImmunizationEducation>);
    /**
     * Check if the current ImmunizationEducation contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ImmunizationEducation from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IImmunizationEducation): ImmunizationEducation;
}
/**
 * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
 */
export declare class ImmunizationReaction extends fhir.BackboneElement implements fhir.IImmunizationReaction {
    /**
     * Date of reaction to the immunization.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * Details of the reaction.
     */
    detail?: fhir.Reference | undefined;
    /**
     * Self-reported indicator.
     */
    reported?: boolean | undefined;
    _reported?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImmunizationReaction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImmunizationReaction>);
    /**
     * Check if the current ImmunizationReaction contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ImmunizationReaction from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IImmunizationReaction): ImmunizationReaction;
}
/**
 * The protocol (set of recommendations) being followed by the provider who administered the dose.
 */
export declare class ImmunizationProtocolApplied extends fhir.BackboneElement implements fhir.IImmunizationProtocolApplied {
    /**
     * Indicates the authority who published the protocol (e.g. ACIP) that is being followed.
     */
    authority?: fhir.Reference | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberPositiveInt?: number | undefined;
    _doseNumberPositiveInt?: fhir.FhirElement | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberString?: string | undefined;
    _doseNumberString?: fhir.FhirElement | undefined;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: string | undefined;
    _series?: fhir.FhirElement | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesPositiveInt?: number | undefined;
    _seriesDosesPositiveInt?: fhir.FhirElement | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesString?: string | undefined;
    _seriesDosesString?: fhir.FhirElement | undefined;
    /**
     * The vaccine preventable disease the dose is being administered against.
     */
    targetDisease?: fhir.CodeableConcept[] | undefined;
    /**
     * Default constructor for ImmunizationProtocolApplied - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImmunizationProtocolApplied>);
    /**
     * Check if the current ImmunizationProtocolApplied contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ImmunizationProtocolApplied from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IImmunizationProtocolApplied): ImmunizationProtocolApplied;
}
/**
 * Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
 */
export declare class Immunization extends fhir.DomainResource implements fhir.IImmunization {
    /**
     * Resource Type Name
     */
    resourceType: "Immunization";
    /**
     * The quantity of vaccine product that was administered.
     */
    doseQuantity?: fhir.Quantity | undefined;
    /**
     * Educational material presented to the patient (or guardian) at the time of vaccine administration.
     */
    education?: fhir.ImmunizationEducation[] | undefined;
    /**
     * The visit or admission or other contact between patient and health care provider the immunization was performed as part of.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Date vaccine batch expires.
     */
    expirationDate?: string | undefined;
    _expirationDate?: fhir.FhirElement | undefined;
    /**
     * Indicates the source of the vaccine actually administered. This may be different than the patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine but due to inventory issues, vaccine purchased with private funds was actually administered).
     */
    fundingSource?: fhir.CodeableConcept | undefined;
    /**
     * A unique identifier assigned to this immunization record.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Typically, the recognition of the dose being sub-potent is retrospective, after the administration (ex. notification of a manufacturer recall after administration). However, in the case of a partial administration (the patient moves unexpectedly and only some of the dose is actually administered), subpotency may be recognized immediately, but it is still important to record the event.
     */
    isSubpotent?: boolean | undefined;
    _isSubpotent?: fhir.FhirElement | undefined;
    /**
     * The service delivery location where the vaccine administration occurred.
     */
    location?: fhir.Reference | undefined;
    /**
     * Lot number of the  vaccine product.
     */
    lotNumber?: string | undefined;
    _lotNumber?: fhir.FhirElement | undefined;
    /**
     * Name of vaccine manufacturer.
     */
    manufacturer?: fhir.Reference | undefined;
    /**
     * Extra information about the immunization that is not conveyed by the other attributes.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhir.FhirElement | undefined;
    /**
     * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
     */
    occurrenceString?: string | undefined;
    _occurrenceString?: fhir.FhirElement | undefined;
    /**
     * The patient who either received or did not receive the immunization.
     */
    patient: fhir.Reference | null;
    /**
     * Indicates who performed the immunization event.
     */
    performer?: fhir.ImmunizationPerformer[] | undefined;
    /**
     * Reflects the “reliability” of the content.
     */
    primarySource?: boolean | undefined;
    _primarySource?: fhir.FhirElement | undefined;
    /**
     * Indicates a patient's eligibility for a funding program.
     */
    programEligibility?: fhir.CodeableConcept[] | undefined;
    /**
     * The protocol (set of recommendations) being followed by the provider who administered the dose.
     */
    protocolApplied?: fhir.ImmunizationProtocolApplied[] | undefined;
    /**
     * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
     */
    reaction?: fhir.ImmunizationReaction[] | undefined;
    /**
     * Reasons why the vaccine was administered.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Condition, Observation or DiagnosticReport that supports why the immunization was administered.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * The date the occurrence of the immunization was first captured in the record - potentially significantly after the occurrence of the event.
     */
    recorded?: string | undefined;
    _recorded?: fhir.FhirElement | undefined;
    /**
     * Should not be populated if primarySource = True, not required even if primarySource = False.
     */
    reportOrigin?: fhir.CodeableConcept | undefined;
    /**
     * The path by which the vaccine product is taken into the body.
     */
    route?: fhir.CodeableConcept | undefined;
    /**
     * Body site where vaccine was administered.
     */
    site?: fhir.CodeableConcept | undefined;
    /**
     * Will generally be set to show that the immunization has been completed or not done.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ImmunizationStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * This is generally only used for the status of "not-done". The reason for performing the immunization event is captured in reasonCode, not here.
     */
    statusReason?: fhir.CodeableConcept | undefined;
    /**
     * Reason why a dose is considered to be subpotent.
     */
    subpotentReason?: fhir.CodeableConcept[] | undefined;
    /**
     * Vaccine that was administered or was to be administered.
     */
    vaccineCode: fhir.CodeableConcept | null;
    /**
     * Default constructor for Immunization - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImmunization>);
    /**
     * Check if the current Immunization contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a Immunization from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IImmunization): Immunization;
}
/**
 * Code Values for the Immunization.status field
 */
export declare enum ImmunizationStatusEnum {
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error",
    NOT_DONE = "not-done"
}
//# sourceMappingURL=Immunization.d.ts.map