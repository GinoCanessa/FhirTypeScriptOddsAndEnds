import * as fhir from '../fhir.js';
import { ImmunizationEvaluationStatusValueSetType, ImmunizationEvaluationStatusValueSetEnum } from '../fhirValueSets/ImmunizationEvaluationStatusValueSet.js';
import { ImmunizationEvaluationTargetDiseaseValueSetType } from '../fhirValueSets/ImmunizationEvaluationTargetDiseaseValueSet.js';
import { ImmunizationEvaluationDoseStatusValueSetType } from '../fhirValueSets/ImmunizationEvaluationDoseStatusValueSet.js';
import { ImmunizationEvaluationDoseStatusReasonValueSetType } from '../fhirValueSets/ImmunizationEvaluationDoseStatusReasonValueSet.js';
/**
 * Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.
 */
export declare type IImmunizationEvaluation = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "ImmunizationEvaluation";
    /**
     * A unique identifier assigned to this immunization evaluation record.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Indicates the current status of the evaluation of the vaccination administration event.
     */
    status: ImmunizationEvaluationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * The individual for whom the evaluation is being done.
     */
    patient: fhir.IReference | null;
    /**
     * The date the evaluation of the vaccine administration event was performed.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * Indicates the authority who published the protocol (e.g. ACIP).
     */
    authority?: fhir.IReference | undefined;
    /**
     * The vaccine preventable disease the dose is being evaluated against.
     */
    targetDisease: fhir.ICodeableConcept | null;
    /**
     * The vaccine administration event being evaluated.
     */
    immunizationEvent: fhir.IReference | null;
    /**
     * Indicates if the dose is valid or not valid with respect to the published recommendations.
     */
    doseStatus: fhir.ICodeableConcept | null;
    /**
     * Provides an explanation as to why the vaccine administration event is valid or not relative to the published recommendations.
     */
    doseStatusReason?: fhir.ICodeableConcept[] | undefined;
    /**
     * Additional information about the evaluation.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.series
     */
    _series?: fhir.IFhirElement | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.doseNumber[x]
     */
    _doseNumberPositiveInt?: fhir.IFhirElement | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberString?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.doseNumber[x]
     */
    _doseNumberString?: fhir.IFhirElement | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.seriesDoses[x]
     */
    _seriesDosesPositiveInt?: fhir.IFhirElement | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesString?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.seriesDoses[x]
     */
    _seriesDosesString?: fhir.IFhirElement | undefined;
};
/**
 * Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.
 */
export declare class ImmunizationEvaluation extends fhir.DomainResource implements IImmunizationEvaluation {
    /**
     * Resource Type Name
     */
    resourceType: "ImmunizationEvaluation";
    /**
     * A unique identifier assigned to this immunization evaluation record.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Indicates the current status of the evaluation of the vaccination administration event.
     */
    status: ImmunizationEvaluationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * The individual for whom the evaluation is being done.
     */
    patient: fhir.Reference | null;
    /**
     * The date the evaluation of the vaccine administration event was performed.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Indicates the authority who published the protocol (e.g. ACIP).
     */
    authority?: fhir.Reference | undefined;
    /**
     * The vaccine preventable disease the dose is being evaluated against.
     */
    targetDisease: fhir.CodeableConcept | null;
    /**
     * The vaccine administration event being evaluated.
     */
    immunizationEvent: fhir.Reference | null;
    /**
     * Indicates if the dose is valid or not valid with respect to the published recommendations.
     */
    doseStatus: fhir.CodeableConcept | null;
    /**
     * Provides an explanation as to why the vaccine administration event is valid or not relative to the published recommendations.
     */
    doseStatusReason?: fhir.CodeableConcept[] | undefined;
    /**
     * Additional information about the evaluation.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.series
     */
    _series?: fhir.FhirElement | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.doseNumber[x]
     */
    _doseNumberPositiveInt?: fhir.FhirElement | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberString?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.doseNumber[x]
     */
    _doseNumberString?: fhir.FhirElement | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.seriesDoses[x]
     */
    _seriesDosesPositiveInt?: fhir.FhirElement | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesString?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.seriesDoses[x]
     */
    _seriesDosesString?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImmunizationEvaluation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImmunizationEvaluation>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): ImmunizationEvaluationStatusValueSetType;
    /**
     * Example-bound Value Set for targetDisease
     */
    static targetDiseaseExampleValueSet(): ImmunizationEvaluationTargetDiseaseValueSetType;
    /**
     * Example-bound Value Set for doseStatus
     */
    static doseStatusExampleValueSet(): ImmunizationEvaluationDoseStatusValueSetType;
    /**
     * Example-bound Value Set for doseStatusReason
     */
    static doseStatusReasonExampleValueSet(): ImmunizationEvaluationDoseStatusReasonValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=ImmunizationEvaluation.d.ts.map