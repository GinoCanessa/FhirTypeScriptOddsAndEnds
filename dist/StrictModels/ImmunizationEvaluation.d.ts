import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.
 */
export declare class ImmunizationEvaluation extends fhirModels.DomainResource implements fhirInterfaces.IImmunizationEvaluation {
    /**
     * Resource Type Name
     */
    readonly resourceType = "ImmunizationEvaluation";
    /**
     * Indicates the authority who published the protocol (e.g. ACIP).
     */
    authority?: fhirModels.Reference | undefined;
    /**
     * The date the evaluation of the vaccine administration event was performed.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * Additional information about the evaluation.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
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
     * Indicates if the dose is valid or not valid with respect to the published recommendations.
     */
    doseStatus: fhirModels.CodeableConcept;
    /**
     * Provides an explanation as to why the vaccine administration event is valid or not relative to the published recommendations.
     */
    doseStatusReason?: fhirModels.CodeableConcept[] | undefined;
    /**
     * A unique identifier assigned to this immunization evaluation record.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The vaccine administration event being evaluated.
     */
    immunizationEvent: fhirModels.Reference;
    /**
     * The individual for whom the evaluation is being done.
     */
    patient: fhirModels.Reference;
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
     * Indicates the current status of the evaluation of the vaccination administration event.
     */
    status: ImmunizationEvaluationStatusEnum;
    _status?: fhirModels.Element | undefined;
    /**
     * The vaccine preventable disease the dose is being evaluated against.
     */
    targetDisease: fhirModels.CodeableConcept;
    /**
     * Default constructor for ImmunizationEvaluation from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IImmunizationEvaluation);
}
/**
 * Code Values for the ImmunizationEvaluation.status field
 */
export declare enum ImmunizationEvaluationStatusEnum {
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=ImmunizationEvaluation.d.ts.map