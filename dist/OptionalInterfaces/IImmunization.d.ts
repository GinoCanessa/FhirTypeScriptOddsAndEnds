import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Indicates who performed the immunization event.
 */
export interface IImmunizationPerformer extends fhirInterfaces.IBackboneElement {
    /**
     * When the individual practitioner who performed the action is known, it is best to send.
     */
    actor?: fhirInterfaces.IReference | undefined;
    /**
     * Describes the type of performance (e.g. ordering provider, administering provider, etc.).
     */
    function?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Educational material presented to the patient (or guardian) at the time of vaccine administration.
 */
export interface IImmunizationEducation extends fhirInterfaces.IBackboneElement {
    /**
     * Identifier of the material presented to the patient.
     */
    documentType?: string | undefined;
    _documentType?: fhirInterfaces.IElement | undefined;
    /**
     * Date the educational material was given to the patient.
     */
    presentationDate?: string | undefined;
    _presentationDate?: fhirInterfaces.IElement | undefined;
    /**
     * Date the educational material was published.
     */
    publicationDate?: string | undefined;
    _publicationDate?: fhirInterfaces.IElement | undefined;
    /**
     * Reference pointer to the educational material given to the patient if the information was on line.
     */
    reference?: string | undefined;
    _reference?: fhirInterfaces.IElement | undefined;
}
/**
 * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
 */
export interface IImmunizationReaction extends fhirInterfaces.IBackboneElement {
    /**
     * Date of reaction to the immunization.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * Details of the reaction.
     */
    detail?: fhirInterfaces.IReference | undefined;
    /**
     * Self-reported indicator.
     */
    reported?: boolean | undefined;
    _reported?: fhirInterfaces.IElement | undefined;
}
/**
 * The protocol (set of recommendations) being followed by the provider who administered the dose.
 */
export interface IImmunizationProtocolApplied extends fhirInterfaces.IBackboneElement {
    /**
     * Indicates the authority who published the protocol (e.g. ACIP) that is being followed.
     */
    authority?: fhirInterfaces.IReference | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberPositiveInt?: number | undefined;
    _doseNumberPositiveInt?: fhirInterfaces.IElement | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberString?: string | undefined;
    _doseNumberString?: fhirInterfaces.IElement | undefined;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: string | undefined;
    _series?: fhirInterfaces.IElement | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesPositiveInt?: number | undefined;
    _seriesDosesPositiveInt?: fhirInterfaces.IElement | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesString?: string | undefined;
    _seriesDosesString?: fhirInterfaces.IElement | undefined;
    /**
     * The vaccine preventable disease the dose is being administered against.
     */
    targetDisease?: fhirInterfaces.ICodeableConcept[] | undefined;
}
/**
 * Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
 */
export interface IImmunization extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Immunization";
    /**
     * The quantity of vaccine product that was administered.
     */
    doseQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * Educational material presented to the patient (or guardian) at the time of vaccine administration.
     */
    education?: fhirInterfaces.IImmunizationEducation[] | undefined;
    /**
     * The visit or admission or other contact between patient and health care provider the immunization was performed as part of.
     */
    encounter?: fhirInterfaces.IReference | undefined;
    /**
     * Date vaccine batch expires.
     */
    expirationDate?: string | undefined;
    _expirationDate?: fhirInterfaces.IElement | undefined;
    /**
     * Indicates the source of the vaccine actually administered. This may be different than the patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine but due to inventory issues, vaccine purchased with private funds was actually administered).
     */
    fundingSource?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A unique identifier assigned to this immunization record.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Typically, the recognition of the dose being sub-potent is retrospective, after the administration (ex. notification of a manufacturer recall after administration). However, in the case of a partial administration (the patient moves unexpectedly and only some of the dose is actually administered), subpotency may be recognized immediately, but it is still important to record the event.
     */
    isSubpotent?: boolean | undefined;
    _isSubpotent?: fhirInterfaces.IElement | undefined;
    /**
     * The service delivery location where the vaccine administration occurred.
     */
    location?: fhirInterfaces.IReference | undefined;
    /**
     * Lot number of the  vaccine product.
     */
    lotNumber?: string | undefined;
    _lotNumber?: fhirInterfaces.IElement | undefined;
    /**
     * Name of vaccine manufacturer.
     */
    manufacturer?: fhirInterfaces.IReference | undefined;
    /**
     * Extra information about the immunization that is not conveyed by the other attributes.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
     */
    occurrenceString?: string | undefined;
    _occurrenceString?: fhirInterfaces.IElement | undefined;
    /**
     * The patient who either received or did not receive the immunization.
     */
    patient?: fhirInterfaces.IReference | undefined;
    /**
     * Indicates who performed the immunization event.
     */
    performer?: fhirInterfaces.IImmunizationPerformer[] | undefined;
    /**
     * Reflects the “reliability” of the content.
     */
    primarySource?: boolean | undefined;
    _primarySource?: fhirInterfaces.IElement | undefined;
    /**
     * Indicates a patient's eligibility for a funding program.
     */
    programEligibility?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The protocol (set of recommendations) being followed by the provider who administered the dose.
     */
    protocolApplied?: fhirInterfaces.IImmunizationProtocolApplied[] | undefined;
    /**
     * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
     */
    reaction?: fhirInterfaces.IImmunizationReaction[] | undefined;
    /**
     * Reasons why the vaccine was administered.
     */
    reasonCode?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Condition, Observation or DiagnosticReport that supports why the immunization was administered.
     */
    reasonReference?: fhirInterfaces.IReference[] | undefined;
    /**
     * The date the occurrence of the immunization was first captured in the record - potentially significantly after the occurrence of the event.
     */
    recorded?: string | undefined;
    _recorded?: fhirInterfaces.IElement | undefined;
    /**
     * Should not be populated if primarySource = True, not required even if primarySource = False.
     */
    reportOrigin?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The path by which the vaccine product is taken into the body.
     */
    route?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Body site where vaccine was administered.
     */
    site?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Will generally be set to show that the immunization has been completed or not done.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: ImmunizationStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * This is generally only used for the status of "not-done". The reason for performing the immunization event is captured in reasonCode, not here.
     */
    statusReason?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Reason why a dose is considered to be subpotent.
     */
    subpotentReason?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Vaccine that was administered or was to be administered.
     */
    vaccineCode?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Code Values for the Immunization.status field
 */
export declare enum ImmunizationStatusEnum {
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error",
    NOT_DONE = "not-done"
}
//# sourceMappingURL=IImmunization.d.ts.map