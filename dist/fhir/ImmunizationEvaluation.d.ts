import * as fhir from '../fhir';
/**
 * Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.
 */
export declare type IImmunizationEvaluation = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "ImmunizationEvaluation";
    /**
     * Indicates the authority who published the protocol (e.g. ACIP).
     */
    authority?: fhir.IReference | undefined;
    /**
     * The date the evaluation of the vaccine administration event was performed.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * Additional information about the evaluation.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
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
     * Indicates if the dose is valid or not valid with respect to the published recommendations.
     */
    doseStatus: fhir.ICodeableConcept | null;
    /**
     * Provides an explanation as to why the vaccine administration event is valid or not relative to the published recommendations.
     */
    doseStatusReason?: fhir.ICodeableConcept[] | undefined;
    /**
     * A unique identifier assigned to this immunization evaluation record.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The vaccine administration event being evaluated.
     */
    immunizationEvent: fhir.IReference | null;
    /**
     * The individual for whom the evaluation is being done.
     */
    patient: fhir.IReference | null;
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
     * Indicates the current status of the evaluation of the vaccination administration event.
     */
    status: ImmunizationEvaluationStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * The vaccine preventable disease the dose is being evaluated against.
     */
    targetDisease: fhir.ICodeableConcept | null;
};
/**
 * Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.
 */
export declare class ImmunizationEvaluation extends fhir.DomainResource implements fhir.IImmunizationEvaluation {
    /**
     * Resource Type Name
     */
    resourceType: "ImmunizationEvaluation";
    /**
     * Indicates the authority who published the protocol (e.g. ACIP).
     */
    authority?: fhir.Reference | undefined;
    /**
     * The date the evaluation of the vaccine administration event was performed.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * Additional information about the evaluation.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
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
     * Indicates if the dose is valid or not valid with respect to the published recommendations.
     */
    doseStatus: fhir.CodeableConcept | null;
    /**
     * Provides an explanation as to why the vaccine administration event is valid or not relative to the published recommendations.
     */
    doseStatusReason?: fhir.CodeableConcept[] | undefined;
    /**
     * A unique identifier assigned to this immunization evaluation record.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The vaccine administration event being evaluated.
     */
    immunizationEvent: fhir.Reference | null;
    /**
     * The individual for whom the evaluation is being done.
     */
    patient: fhir.Reference | null;
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
     * Indicates the current status of the evaluation of the vaccination administration event.
     */
    status: ImmunizationEvaluationStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * The vaccine preventable disease the dose is being evaluated against.
     */
    targetDisease: fhir.CodeableConcept | null;
    /**
     * Default constructor for ImmunizationEvaluation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImmunizationEvaluation>);
    /**
     * Check if the current ImmunizationEvaluation contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ImmunizationEvaluation from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IImmunizationEvaluation): ImmunizationEvaluation;
}
/**
 * Code Values for the ImmunizationEvaluation.status field
 */
export declare enum ImmunizationEvaluationStatusEnum {
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=ImmunizationEvaluation.d.ts.map