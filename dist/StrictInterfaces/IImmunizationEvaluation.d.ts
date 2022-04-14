import * as fhirInterfaces from '../strictinterfaces';
/**
 * Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.
 */
export interface IImmunizationEvaluation extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "ImmunizationEvaluation";
    /**
     * Indicates the authority who published the protocol (e.g. ACIP).
     */
    authority?: fhirInterfaces.IReference | undefined;
    /**
     * The date the evaluation of the vaccine administration event was performed.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * Additional information about the evaluation.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
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
     * Indicates if the dose is valid or not valid with respect to the published recommendations.
     */
    doseStatus: fhirInterfaces.ICodeableConcept;
    /**
     * Provides an explanation as to why the vaccine administration event is valid or not relative to the published recommendations.
     */
    doseStatusReason?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * A unique identifier assigned to this immunization evaluation record.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * The vaccine administration event being evaluated.
     */
    immunizationEvent: fhirInterfaces.IReference;
    /**
     * The individual for whom the evaluation is being done.
     */
    patient: fhirInterfaces.IReference;
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
     * Indicates the current status of the evaluation of the vaccination administration event.
     */
    status: ImmunizationEvaluationStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * The vaccine preventable disease the dose is being evaluated against.
     */
    targetDisease: fhirInterfaces.ICodeableConcept;
}
/**
 * Code Values for the ImmunizationEvaluation.status field
 */
export declare enum ImmunizationEvaluationStatusEnum {
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=IImmunizationEvaluation.d.ts.map