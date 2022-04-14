import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Indicates who performed the immunization event.
 */
export declare class ImmunizationPerformer extends fhirModels.BackboneElement implements fhirInterfaces.IImmunizationPerformer {
    /**
     * When the individual practitioner who performed the action is known, it is best to send.
     */
    actor?: fhirModels.Reference | undefined;
    /**
     * Describes the type of performance (e.g. ordering provider, administering provider, etc.).
     */
    function?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for ImmunizationPerformer from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IImmunizationPerformer>);
    /**
     * Factory function to create a ImmunizationPerformer from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IImmunizationPerformer): ImmunizationPerformer;
    /**
     * Check if the current ImmunizationPerformer contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Educational material presented to the patient (or guardian) at the time of vaccine administration.
 */
export declare class ImmunizationEducation extends fhirModels.BackboneElement implements fhirInterfaces.IImmunizationEducation {
    /**
     * Identifier of the material presented to the patient.
     */
    documentType?: string | undefined;
    _documentType?: fhirModels.Element | undefined;
    /**
     * Date the educational material was given to the patient.
     */
    presentationDate?: string | undefined;
    _presentationDate?: fhirModels.Element | undefined;
    /**
     * Date the educational material was published.
     */
    publicationDate?: string | undefined;
    _publicationDate?: fhirModels.Element | undefined;
    /**
     * Reference pointer to the educational material given to the patient if the information was on line.
     */
    reference?: string | undefined;
    _reference?: fhirModels.Element | undefined;
    /**
     * Default constructor for ImmunizationEducation from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IImmunizationEducation>);
    /**
     * Factory function to create a ImmunizationEducation from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IImmunizationEducation): ImmunizationEducation;
    /**
     * Check if the current ImmunizationEducation contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
 */
export declare class ImmunizationReaction extends fhirModels.BackboneElement implements fhirInterfaces.IImmunizationReaction {
    /**
     * Date of reaction to the immunization.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * Details of the reaction.
     */
    detail?: fhirModels.Reference | undefined;
    /**
     * Self-reported indicator.
     */
    reported?: boolean | undefined;
    _reported?: fhirModels.Element | undefined;
    /**
     * Default constructor for ImmunizationReaction from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IImmunizationReaction>);
    /**
     * Factory function to create a ImmunizationReaction from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IImmunizationReaction): ImmunizationReaction;
    /**
     * Check if the current ImmunizationReaction contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The protocol (set of recommendations) being followed by the provider who administered the dose.
 */
export declare class ImmunizationProtocolApplied extends fhirModels.BackboneElement implements fhirInterfaces.IImmunizationProtocolApplied {
    /**
     * Indicates the authority who published the protocol (e.g. ACIP) that is being followed.
     */
    authority?: fhirModels.Reference | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberPositiveInt?: number | undefined;
    _doseNumberPositiveInt?: fhirModels.Element | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberString?: string | undefined;
    _doseNumberString?: fhirModels.Element | undefined;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: string | undefined;
    _series?: fhirModels.Element | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesPositiveInt?: number | undefined;
    _seriesDosesPositiveInt?: fhirModels.Element | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesString?: string | undefined;
    _seriesDosesString?: fhirModels.Element | undefined;
    /**
     * The vaccine preventable disease the dose is being administered against.
     */
    targetDisease?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Default constructor for ImmunizationProtocolApplied from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IImmunizationProtocolApplied>);
    /**
     * Factory function to create a ImmunizationProtocolApplied from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IImmunizationProtocolApplied): ImmunizationProtocolApplied;
    /**
     * Check if the current ImmunizationProtocolApplied contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
 */
export declare class Immunization extends fhirModels.DomainResource implements fhirInterfaces.IImmunization {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Immunization";
    /**
     * The quantity of vaccine product that was administered.
     */
    doseQuantity?: fhirModels.Quantity | undefined;
    /**
     * Educational material presented to the patient (or guardian) at the time of vaccine administration.
     */
    education?: fhirModels.ImmunizationEducation[] | undefined;
    /**
     * The visit or admission or other contact between patient and health care provider the immunization was performed as part of.
     */
    encounter?: fhirModels.Reference | undefined;
    /**
     * Date vaccine batch expires.
     */
    expirationDate?: string | undefined;
    _expirationDate?: fhirModels.Element | undefined;
    /**
     * Indicates the source of the vaccine actually administered. This may be different than the patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine but due to inventory issues, vaccine purchased with private funds was actually administered).
     */
    fundingSource?: fhirModels.CodeableConcept | undefined;
    /**
     * A unique identifier assigned to this immunization record.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Typically, the recognition of the dose being sub-potent is retrospective, after the administration (ex. notification of a manufacturer recall after administration). However, in the case of a partial administration (the patient moves unexpectedly and only some of the dose is actually administered), subpotency may be recognized immediately, but it is still important to record the event.
     */
    isSubpotent?: boolean | undefined;
    _isSubpotent?: fhirModels.Element | undefined;
    /**
     * The service delivery location where the vaccine administration occurred.
     */
    location?: fhirModels.Reference | undefined;
    /**
     * Lot number of the  vaccine product.
     */
    lotNumber?: string | undefined;
    _lotNumber?: fhirModels.Element | undefined;
    /**
     * Name of vaccine manufacturer.
     */
    manufacturer?: fhirModels.Reference | undefined;
    /**
     * Extra information about the immunization that is not conveyed by the other attributes.
     */
    note?: fhirModels.Annotation[] | undefined;
    /**
     * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhirModels.Element | undefined;
    /**
     * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
     */
    occurrenceString?: string | undefined;
    _occurrenceString?: fhirModels.Element | undefined;
    /**
     * The patient who either received or did not receive the immunization.
     */
    patient?: fhirModels.Reference | undefined;
    /**
     * Indicates who performed the immunization event.
     */
    performer?: fhirModels.ImmunizationPerformer[] | undefined;
    /**
     * Reflects the “reliability” of the content.
     */
    primarySource?: boolean | undefined;
    _primarySource?: fhirModels.Element | undefined;
    /**
     * Indicates a patient's eligibility for a funding program.
     */
    programEligibility?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The protocol (set of recommendations) being followed by the provider who administered the dose.
     */
    protocolApplied?: fhirModels.ImmunizationProtocolApplied[] | undefined;
    /**
     * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
     */
    reaction?: fhirModels.ImmunizationReaction[] | undefined;
    /**
     * Reasons why the vaccine was administered.
     */
    reasonCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Condition, Observation or DiagnosticReport that supports why the immunization was administered.
     */
    reasonReference?: fhirModels.Reference[] | undefined;
    /**
     * The date the occurrence of the immunization was first captured in the record - potentially significantly after the occurrence of the event.
     */
    recorded?: string | undefined;
    _recorded?: fhirModels.Element | undefined;
    /**
     * Should not be populated if primarySource = True, not required even if primarySource = False.
     */
    reportOrigin?: fhirModels.CodeableConcept | undefined;
    /**
     * The path by which the vaccine product is taken into the body.
     */
    route?: fhirModels.CodeableConcept | undefined;
    /**
     * Body site where vaccine was administered.
     */
    site?: fhirModels.CodeableConcept | undefined;
    /**
     * Will generally be set to show that the immunization has been completed or not done.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: ImmunizationStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * This is generally only used for the status of "not-done". The reason for performing the immunization event is captured in reasonCode, not here.
     */
    statusReason?: fhirModels.CodeableConcept | undefined;
    /**
     * Reason why a dose is considered to be subpotent.
     */
    subpotentReason?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Vaccine that was administered or was to be administered.
     */
    vaccineCode?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for Immunization from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IImmunization>);
    /**
     * Factory function to create a Immunization from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IImmunization): Immunization;
    /**
     * Check if the current Immunization contains all required elements.
     */
    checkRequiredElements(): string[];
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