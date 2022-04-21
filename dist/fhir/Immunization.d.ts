import * as fhir from '../fhir.js';
import { ImmunizationFunctionValueSetType } from '../fhirValueSets/ImmunizationFunctionValueSet.js';
import { ImmunizationTargetDiseaseValueSetType } from '../fhirValueSets/ImmunizationTargetDiseaseValueSet.js';
import { ImmunizationStatusValueSetType, ImmunizationStatusValueSetEnum } from '../fhirValueSets/ImmunizationStatusValueSet.js';
import { ImmunizationStatusReasonValueSetType } from '../fhirValueSets/ImmunizationStatusReasonValueSet.js';
import { VaccineCodeValueSetType } from '../fhirValueSets/VaccineCodeValueSet.js';
import { ImmunizationOriginValueSetType } from '../fhirValueSets/ImmunizationOriginValueSet.js';
import { ImmunizationSiteValueSetType } from '../fhirValueSets/ImmunizationSiteValueSet.js';
import { ImmunizationRouteValueSetType } from '../fhirValueSets/ImmunizationRouteValueSet.js';
import { ImmunizationReasonValueSetType } from '../fhirValueSets/ImmunizationReasonValueSet.js';
import { ImmunizationSubpotentReasonValueSetType } from '../fhirValueSets/ImmunizationSubpotentReasonValueSet.js';
import { ImmunizationProgramEligibilityValueSetType } from '../fhirValueSets/ImmunizationProgramEligibilityValueSet.js';
import { ImmunizationFundingSourceValueSetType } from '../fhirValueSets/ImmunizationFundingSourceValueSet.js';
/**
 * Indicates who performed the immunization event.
 */
export declare type IImmunizationPerformer = fhir.IBackboneElement & {
    /**
     * Describes the type of performance (e.g. ordering provider, administering provider, etc.).
     */
    function?: fhir.ICodeableConcept | undefined;
    /**
     * When the individual practitioner who performed the action is known, it is best to send.
     */
    actor: fhir.IReference | null;
};
/**
 * Educational material presented to the patient (or guardian) at the time of vaccine administration.
 */
export declare type IImmunizationEducation = fhir.IBackboneElement & {
    /**
     * Identifier of the material presented to the patient.
     */
    documentType?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.education.documentType
     */
    _documentType?: fhir.IFhirElement | undefined;
    /**
     * Reference pointer to the educational material given to the patient if the information was on line.
     */
    reference?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.education.reference
     */
    _reference?: fhir.IFhirElement | undefined;
    /**
     * Date the educational material was published.
     */
    publicationDate?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.education.publicationDate
     */
    _publicationDate?: fhir.IFhirElement | undefined;
    /**
     * Date the educational material was given to the patient.
     */
    presentationDate?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.education.presentationDate
     */
    _presentationDate?: fhir.IFhirElement | undefined;
};
/**
 * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
 */
export declare type IImmunizationReaction = fhir.IBackboneElement & {
    /**
     * Date of reaction to the immunization.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.reaction.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * Details of the reaction.
     */
    detail?: fhir.IReference | undefined;
    /**
     * Self-reported indicator.
     */
    reported?: boolean | undefined;
    /**
     * Extended properties for primitive element: Immunization.reaction.reported
     */
    _reported?: fhir.IFhirElement | undefined;
};
/**
 * The protocol (set of recommendations) being followed by the provider who administered the dose.
 */
export declare type IImmunizationProtocolApplied = fhir.IBackboneElement & {
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.protocolApplied.series
     */
    _series?: fhir.IFhirElement | undefined;
    /**
     * Indicates the authority who published the protocol (e.g. ACIP) that is being followed.
     */
    authority?: fhir.IReference | undefined;
    /**
     * The vaccine preventable disease the dose is being administered against.
     */
    targetDisease?: fhir.ICodeableConcept[] | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: Immunization.protocolApplied.doseNumber[x]
     */
    _doseNumberPositiveInt?: fhir.IFhirElement | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberString?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.protocolApplied.doseNumber[x]
     */
    _doseNumberString?: fhir.IFhirElement | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: Immunization.protocolApplied.seriesDoses[x]
     */
    _seriesDosesPositiveInt?: fhir.IFhirElement | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesString?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.protocolApplied.seriesDoses[x]
     */
    _seriesDosesString?: fhir.IFhirElement | undefined;
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
     * A unique identifier assigned to this immunization record.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Will generally be set to show that the immunization has been completed or not done.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ImmunizationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Immunization.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * This is generally only used for the status of "not-done". The reason for performing the immunization event is captured in reasonCode, not here.
     */
    statusReason?: fhir.ICodeableConcept | undefined;
    /**
     * Vaccine that was administered or was to be administered.
     */
    vaccineCode: fhir.ICodeableConcept | null;
    /**
     * The patient who either received or did not receive the immunization.
     */
    patient: fhir.IReference | null;
    /**
     * The visit or admission or other contact between patient and health care provider the immunization was performed as part of.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
     */
    occurrenceDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.occurrence[x]
     */
    _occurrenceDateTime?: fhir.IFhirElement | undefined;
    /**
     * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
     */
    occurrenceString?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.occurrence[x]
     */
    _occurrenceString?: fhir.IFhirElement | undefined;
    /**
     * The date the occurrence of the immunization was first captured in the record - potentially significantly after the occurrence of the event.
     */
    recorded?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.recorded
     */
    _recorded?: fhir.IFhirElement | undefined;
    /**
     * Reflects the “reliability” of the content.
     */
    primarySource?: boolean | undefined;
    /**
     * Extended properties for primitive element: Immunization.primarySource
     */
    _primarySource?: fhir.IFhirElement | undefined;
    /**
     * Should not be populated if primarySource = True, not required even if primarySource = False.
     */
    reportOrigin?: fhir.ICodeableConcept | undefined;
    /**
     * The service delivery location where the vaccine administration occurred.
     */
    location?: fhir.IReference | undefined;
    /**
     * Name of vaccine manufacturer.
     */
    manufacturer?: fhir.IReference | undefined;
    /**
     * Lot number of the  vaccine product.
     */
    lotNumber?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.lotNumber
     */
    _lotNumber?: fhir.IFhirElement | undefined;
    /**
     * Date vaccine batch expires.
     */
    expirationDate?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.expirationDate
     */
    _expirationDate?: fhir.IFhirElement | undefined;
    /**
     * Body site where vaccine was administered.
     */
    site?: fhir.ICodeableConcept | undefined;
    /**
     * The path by which the vaccine product is taken into the body.
     */
    route?: fhir.ICodeableConcept | undefined;
    /**
     * The quantity of vaccine product that was administered.
     */
    doseQuantity?: fhir.IQuantity | undefined;
    /**
     * Indicates who performed the immunization event.
     */
    performer?: fhir.IImmunizationPerformer[] | undefined;
    /**
     * Extra information about the immunization that is not conveyed by the other attributes.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * Reasons why the vaccine was administered.
     */
    reasonCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * Condition, Observation or DiagnosticReport that supports why the immunization was administered.
     */
    reasonReference?: fhir.IReference[] | undefined;
    /**
     * Typically, the recognition of the dose being sub-potent is retrospective, after the administration (ex. notification of a manufacturer recall after administration). However, in the case of a partial administration (the patient moves unexpectedly and only some of the dose is actually administered), subpotency may be recognized immediately, but it is still important to record the event.
     */
    isSubpotent?: boolean | undefined;
    /**
     * Extended properties for primitive element: Immunization.isSubpotent
     */
    _isSubpotent?: fhir.IFhirElement | undefined;
    /**
     * Reason why a dose is considered to be subpotent.
     */
    subpotentReason?: fhir.ICodeableConcept[] | undefined;
    /**
     * Educational material presented to the patient (or guardian) at the time of vaccine administration.
     */
    education?: fhir.IImmunizationEducation[] | undefined;
    /**
     * Indicates a patient's eligibility for a funding program.
     */
    programEligibility?: fhir.ICodeableConcept[] | undefined;
    /**
     * Indicates the source of the vaccine actually administered. This may be different than the patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine but due to inventory issues, vaccine purchased with private funds was actually administered).
     */
    fundingSource?: fhir.ICodeableConcept | undefined;
    /**
     * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
     */
    reaction?: fhir.IImmunizationReaction[] | undefined;
    /**
     * The protocol (set of recommendations) being followed by the provider who administered the dose.
     */
    protocolApplied?: fhir.IImmunizationProtocolApplied[] | undefined;
};
/**
 * Indicates who performed the immunization event.
 */
export declare class ImmunizationPerformer extends fhir.BackboneElement implements IImmunizationPerformer {
    /**
     * Describes the type of performance (e.g. ordering provider, administering provider, etc.).
     */
    function?: fhir.CodeableConcept | undefined;
    /**
     * When the individual practitioner who performed the action is known, it is best to send.
     */
    actor: fhir.Reference | null;
    /**
     * Default constructor for ImmunizationPerformer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImmunizationPerformer>);
    /**
     * Extensible-bound Value Set for function
     */
    functionExtensibleValueSet(): ImmunizationFunctionValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Educational material presented to the patient (or guardian) at the time of vaccine administration.
 */
export declare class ImmunizationEducation extends fhir.BackboneElement implements IImmunizationEducation {
    /**
     * Identifier of the material presented to the patient.
     */
    documentType?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.education.documentType
     */
    _documentType?: fhir.FhirElement | undefined;
    /**
     * Reference pointer to the educational material given to the patient if the information was on line.
     */
    reference?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.education.reference
     */
    _reference?: fhir.FhirElement | undefined;
    /**
     * Date the educational material was published.
     */
    publicationDate?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.education.publicationDate
     */
    _publicationDate?: fhir.FhirElement | undefined;
    /**
     * Date the educational material was given to the patient.
     */
    presentationDate?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.education.presentationDate
     */
    _presentationDate?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImmunizationEducation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImmunizationEducation>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
 */
export declare class ImmunizationReaction extends fhir.BackboneElement implements IImmunizationReaction {
    /**
     * Date of reaction to the immunization.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.reaction.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Details of the reaction.
     */
    detail?: fhir.Reference | undefined;
    /**
     * Self-reported indicator.
     */
    reported?: boolean | undefined;
    /**
     * Extended properties for primitive element: Immunization.reaction.reported
     */
    _reported?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImmunizationReaction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImmunizationReaction>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The protocol (set of recommendations) being followed by the provider who administered the dose.
 */
export declare class ImmunizationProtocolApplied extends fhir.BackboneElement implements IImmunizationProtocolApplied {
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.protocolApplied.series
     */
    _series?: fhir.FhirElement | undefined;
    /**
     * Indicates the authority who published the protocol (e.g. ACIP) that is being followed.
     */
    authority?: fhir.Reference | undefined;
    /**
     * The vaccine preventable disease the dose is being administered against.
     */
    targetDisease?: fhir.CodeableConcept[] | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: Immunization.protocolApplied.doseNumber[x]
     */
    _doseNumberPositiveInt?: fhir.FhirElement | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberString?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.protocolApplied.doseNumber[x]
     */
    _doseNumberString?: fhir.FhirElement | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: Immunization.protocolApplied.seriesDoses[x]
     */
    _seriesDosesPositiveInt?: fhir.FhirElement | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesString?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.protocolApplied.seriesDoses[x]
     */
    _seriesDosesString?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImmunizationProtocolApplied - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImmunizationProtocolApplied>);
    /**
     * Example-bound Value Set for targetDisease
     */
    targetDiseaseExampleValueSet(): ImmunizationTargetDiseaseValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
 */
export declare class Immunization extends fhir.DomainResource implements IImmunization {
    /**
     * Resource Type Name
     */
    resourceType: "Immunization";
    /**
     * A unique identifier assigned to this immunization record.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Will generally be set to show that the immunization has been completed or not done.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ImmunizationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Immunization.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * This is generally only used for the status of "not-done". The reason for performing the immunization event is captured in reasonCode, not here.
     */
    statusReason?: fhir.CodeableConcept | undefined;
    /**
     * Vaccine that was administered or was to be administered.
     */
    vaccineCode: fhir.CodeableConcept | null;
    /**
     * The patient who either received or did not receive the immunization.
     */
    patient: fhir.Reference | null;
    /**
     * The visit or admission or other contact between patient and health care provider the immunization was performed as part of.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
     */
    occurrenceDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.occurrence[x]
     */
    _occurrenceDateTime?: fhir.FhirElement | undefined;
    /**
     * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
     */
    occurrenceString?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.occurrence[x]
     */
    _occurrenceString?: fhir.FhirElement | undefined;
    /**
     * The date the occurrence of the immunization was first captured in the record - potentially significantly after the occurrence of the event.
     */
    recorded?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.recorded
     */
    _recorded?: fhir.FhirElement | undefined;
    /**
     * Reflects the “reliability” of the content.
     */
    primarySource?: boolean | undefined;
    /**
     * Extended properties for primitive element: Immunization.primarySource
     */
    _primarySource?: fhir.FhirElement | undefined;
    /**
     * Should not be populated if primarySource = True, not required even if primarySource = False.
     */
    reportOrigin?: fhir.CodeableConcept | undefined;
    /**
     * The service delivery location where the vaccine administration occurred.
     */
    location?: fhir.Reference | undefined;
    /**
     * Name of vaccine manufacturer.
     */
    manufacturer?: fhir.Reference | undefined;
    /**
     * Lot number of the  vaccine product.
     */
    lotNumber?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.lotNumber
     */
    _lotNumber?: fhir.FhirElement | undefined;
    /**
     * Date vaccine batch expires.
     */
    expirationDate?: string | undefined;
    /**
     * Extended properties for primitive element: Immunization.expirationDate
     */
    _expirationDate?: fhir.FhirElement | undefined;
    /**
     * Body site where vaccine was administered.
     */
    site?: fhir.CodeableConcept | undefined;
    /**
     * The path by which the vaccine product is taken into the body.
     */
    route?: fhir.CodeableConcept | undefined;
    /**
     * The quantity of vaccine product that was administered.
     */
    doseQuantity?: fhir.Quantity | undefined;
    /**
     * Indicates who performed the immunization event.
     */
    performer?: fhir.ImmunizationPerformer[] | undefined;
    /**
     * Extra information about the immunization that is not conveyed by the other attributes.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Reasons why the vaccine was administered.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Condition, Observation or DiagnosticReport that supports why the immunization was administered.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * Typically, the recognition of the dose being sub-potent is retrospective, after the administration (ex. notification of a manufacturer recall after administration). However, in the case of a partial administration (the patient moves unexpectedly and only some of the dose is actually administered), subpotency may be recognized immediately, but it is still important to record the event.
     */
    isSubpotent?: boolean | undefined;
    /**
     * Extended properties for primitive element: Immunization.isSubpotent
     */
    _isSubpotent?: fhir.FhirElement | undefined;
    /**
     * Reason why a dose is considered to be subpotent.
     */
    subpotentReason?: fhir.CodeableConcept[] | undefined;
    /**
     * Educational material presented to the patient (or guardian) at the time of vaccine administration.
     */
    education?: fhir.ImmunizationEducation[] | undefined;
    /**
     * Indicates a patient's eligibility for a funding program.
     */
    programEligibility?: fhir.CodeableConcept[] | undefined;
    /**
     * Indicates the source of the vaccine actually administered. This may be different than the patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine but due to inventory issues, vaccine purchased with private funds was actually administered).
     */
    fundingSource?: fhir.CodeableConcept | undefined;
    /**
     * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
     */
    reaction?: fhir.ImmunizationReaction[] | undefined;
    /**
     * The protocol (set of recommendations) being followed by the provider who administered the dose.
     */
    protocolApplied?: fhir.ImmunizationProtocolApplied[] | undefined;
    /**
     * Default constructor for Immunization - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImmunization>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): ImmunizationStatusValueSetType;
    /**
     * Example-bound Value Set for statusReason
     */
    statusReasonExampleValueSet(): ImmunizationStatusReasonValueSetType;
    /**
     * Example-bound Value Set for vaccineCode
     */
    vaccineCodeExampleValueSet(): VaccineCodeValueSetType;
    /**
     * Example-bound Value Set for reportOrigin
     */
    reportOriginExampleValueSet(): ImmunizationOriginValueSetType;
    /**
     * Example-bound Value Set for site
     */
    siteExampleValueSet(): ImmunizationSiteValueSetType;
    /**
     * Example-bound Value Set for route
     */
    routeExampleValueSet(): ImmunizationRouteValueSetType;
    /**
     * Example-bound Value Set for reasonCode
     */
    reasonCodeExampleValueSet(): ImmunizationReasonValueSetType;
    /**
     * Example-bound Value Set for subpotentReason
     */
    subpotentReasonExampleValueSet(): ImmunizationSubpotentReasonValueSetType;
    /**
     * Example-bound Value Set for programEligibility
     */
    programEligibilityExampleValueSet(): ImmunizationProgramEligibilityValueSetType;
    /**
     * Example-bound Value Set for fundingSource
     */
    fundingSourceExampleValueSet(): ImmunizationFundingSourceValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Immunization.d.ts.map