import * as fhir from '../fhir.js';
import { ImmunizationRecommendationDateCriterionValueSetType } from '../fhirValueSets/ImmunizationRecommendationDateCriterionValueSet.js';
import { VaccineCodeValueSetType } from '../fhirValueSets/VaccineCodeValueSet.js';
import { ImmunizationRecommendationTargetDiseaseValueSetType } from '../fhirValueSets/ImmunizationRecommendationTargetDiseaseValueSet.js';
import { ImmunizationRecommendationStatusValueSetType } from '../fhirValueSets/ImmunizationRecommendationStatusValueSet.js';
import { ImmunizationRecommendationReasonValueSetType } from '../fhirValueSets/ImmunizationRecommendationReasonValueSet.js';
/**
 * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
 */
export declare type IImmunizationRecommendationRecommendationDateCriterion = fhir.IBackboneElement & {
    /**
     * Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.
     */
    code: fhir.ICodeableConcept | null;
    /**
     * The date whose meaning is specified by dateCriterion.code.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.dateCriterion.value
     */
    _value?: fhir.IFhirElement | undefined;
};
/**
 * Vaccine administration recommendations.
 */
export declare type IImmunizationRecommendationRecommendation = fhir.IBackboneElement & {
    /**
     * Vaccine(s) or vaccine group that pertain to the recommendation.
     */
    vaccineCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * The targeted disease for the recommendation.
     */
    targetDisease?: fhir.ICodeableConcept | undefined;
    /**
     * Vaccine(s) which should not be used to fulfill the recommendation.
     */
    contraindicatedVaccineCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * Indicates the patient status with respect to the path to immunity for the target disease.
     */
    forecastStatus: fhir.ICodeableConcept | null;
    /**
     * The reason for the assigned forecast status.
     */
    forecastReason?: fhir.ICodeableConcept[] | undefined;
    /**
     * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
     */
    dateCriterion?: fhir.IImmunizationRecommendationRecommendationDateCriterion[] | undefined;
    /**
     * Contains the description about the protocol under which the vaccine was administered.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.series
     */
    _series?: fhir.IFhirElement | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    doseNumberPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.doseNumber[x]
     */
    _doseNumberPositiveInt?: fhir.IFhirElement | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    doseNumberString?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.doseNumber[x]
     */
    _doseNumberString?: fhir.IFhirElement | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.seriesDoses[x]
     */
    _seriesDosesPositiveInt?: fhir.IFhirElement | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesString?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.seriesDoses[x]
     */
    _seriesDosesString?: fhir.IFhirElement | undefined;
    /**
     * Immunization event history and/or evaluation that supports the status and recommendation.
     */
    supportingImmunization?: fhir.IReference[] | undefined;
    /**
     * Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
     */
    supportingPatientInformation?: fhir.IReference[] | undefined;
};
/**
 * A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 */
export declare type IImmunizationRecommendation = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "ImmunizationRecommendation";
    /**
     * A unique identifier assigned to this particular recommendation record.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The patient the recommendation(s) are for.
     */
    patient: fhir.IReference | null;
    /**
     * The date the immunization recommendation(s) were created.
     */
    date: string | null;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * Indicates the authority who published the protocol (e.g. ACIP).
     */
    authority?: fhir.IReference | undefined;
    /**
     * Vaccine administration recommendations.
     */
    recommendation: fhir.IImmunizationRecommendationRecommendation[] | null;
};
/**
 * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
 */
export declare class ImmunizationRecommendationRecommendationDateCriterion extends fhir.BackboneElement implements IImmunizationRecommendationRecommendationDateCriterion {
    /**
     * Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The date whose meaning is specified by dateCriterion.code.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.dateCriterion.value
     */
    _value?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImmunizationRecommendationRecommendationDateCriterion - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImmunizationRecommendationRecommendationDateCriterion>);
    /**
     * Example-bound Value Set for code
     */
    codeExampleValueSet(): ImmunizationRecommendationDateCriterionValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Vaccine administration recommendations.
 */
export declare class ImmunizationRecommendationRecommendation extends fhir.BackboneElement implements IImmunizationRecommendationRecommendation {
    /**
     * Vaccine(s) or vaccine group that pertain to the recommendation.
     */
    vaccineCode?: fhir.CodeableConcept[] | undefined;
    /**
     * The targeted disease for the recommendation.
     */
    targetDisease?: fhir.CodeableConcept | undefined;
    /**
     * Vaccine(s) which should not be used to fulfill the recommendation.
     */
    contraindicatedVaccineCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Indicates the patient status with respect to the path to immunity for the target disease.
     */
    forecastStatus: fhir.CodeableConcept | null;
    /**
     * The reason for the assigned forecast status.
     */
    forecastReason?: fhir.CodeableConcept[] | undefined;
    /**
     * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
     */
    dateCriterion?: fhir.ImmunizationRecommendationRecommendationDateCriterion[] | undefined;
    /**
     * Contains the description about the protocol under which the vaccine was administered.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.series
     */
    _series?: fhir.FhirElement | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    doseNumberPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.doseNumber[x]
     */
    _doseNumberPositiveInt?: fhir.FhirElement | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    doseNumberString?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.doseNumber[x]
     */
    _doseNumberString?: fhir.FhirElement | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.seriesDoses[x]
     */
    _seriesDosesPositiveInt?: fhir.FhirElement | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesString?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.seriesDoses[x]
     */
    _seriesDosesString?: fhir.FhirElement | undefined;
    /**
     * Immunization event history and/or evaluation that supports the status and recommendation.
     */
    supportingImmunization?: fhir.Reference[] | undefined;
    /**
     * Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
     */
    supportingPatientInformation?: fhir.Reference[] | undefined;
    /**
     * Default constructor for ImmunizationRecommendationRecommendation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImmunizationRecommendationRecommendation>);
    /**
     * Example-bound Value Set for vaccineCode
     */
    vaccineCodeExampleValueSet(): VaccineCodeValueSetType;
    /**
     * Example-bound Value Set for targetDisease
     */
    targetDiseaseExampleValueSet(): ImmunizationRecommendationTargetDiseaseValueSetType;
    /**
     * Example-bound Value Set for contraindicatedVaccineCode
     */
    contraindicatedVaccineCodeExampleValueSet(): VaccineCodeValueSetType;
    /**
     * Example-bound Value Set for forecastStatus
     */
    forecastStatusExampleValueSet(): ImmunizationRecommendationStatusValueSetType;
    /**
     * Example-bound Value Set for forecastReason
     */
    forecastReasonExampleValueSet(): ImmunizationRecommendationReasonValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 */
export declare class ImmunizationRecommendation extends fhir.DomainResource implements IImmunizationRecommendation {
    /**
     * Resource Type Name
     */
    resourceType: "ImmunizationRecommendation";
    /**
     * A unique identifier assigned to this particular recommendation record.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The patient the recommendation(s) are for.
     */
    patient: fhir.Reference | null;
    /**
     * The date the immunization recommendation(s) were created.
     */
    date: string | null;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Indicates the authority who published the protocol (e.g. ACIP).
     */
    authority?: fhir.Reference | undefined;
    /**
     * Vaccine administration recommendations.
     */
    recommendation: fhir.ImmunizationRecommendationRecommendation[] | null;
    /**
     * Default constructor for ImmunizationRecommendation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImmunizationRecommendation>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=ImmunizationRecommendation.d.ts.map