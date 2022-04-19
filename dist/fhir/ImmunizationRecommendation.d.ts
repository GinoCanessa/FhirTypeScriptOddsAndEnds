import * as fhir from '../fhir';
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
    _value?: fhir.IFhirElement | undefined;
};
/**
 * Vaccine administration recommendations.
 */
export declare type IImmunizationRecommendationRecommendation = fhir.IBackboneElement & {
    /**
     * Vaccine(s) which should not be used to fulfill the recommendation.
     */
    contraindicatedVaccineCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
     */
    dateCriterion?: fhir.IImmunizationRecommendationRecommendationDateCriterion[] | undefined;
    /**
     * Contains the description about the protocol under which the vaccine was administered.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    doseNumberPositiveInt?: number | undefined;
    _doseNumberPositiveInt?: fhir.IFhirElement | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    doseNumberString?: string | undefined;
    _doseNumberString?: fhir.IFhirElement | undefined;
    /**
     * The reason for the assigned forecast status.
     */
    forecastReason?: fhir.ICodeableConcept[] | undefined;
    /**
     * Indicates the patient status with respect to the path to immunity for the target disease.
     */
    forecastStatus: fhir.ICodeableConcept | null;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: string | undefined;
    _series?: fhir.IFhirElement | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesPositiveInt?: number | undefined;
    _seriesDosesPositiveInt?: fhir.IFhirElement | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesString?: string | undefined;
    _seriesDosesString?: fhir.IFhirElement | undefined;
    /**
     * Immunization event history and/or evaluation that supports the status and recommendation.
     */
    supportingImmunization?: fhir.IReference[] | undefined;
    /**
     * Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
     */
    supportingPatientInformation?: fhir.IReference[] | undefined;
    /**
     * The targeted disease for the recommendation.
     */
    targetDisease?: fhir.ICodeableConcept | undefined;
    /**
     * Vaccine(s) or vaccine group that pertain to the recommendation.
     */
    vaccineCode?: fhir.ICodeableConcept[] | undefined;
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
     * Indicates the authority who published the protocol (e.g. ACIP).
     */
    authority?: fhir.IReference | undefined;
    /**
     * The date the immunization recommendation(s) were created.
     */
    date: string | null;
    _date?: fhir.IFhirElement | undefined;
    /**
     * A unique identifier assigned to this particular recommendation record.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The patient the recommendation(s) are for.
     */
    patient: fhir.IReference | null;
    /**
     * Vaccine administration recommendations.
     */
    recommendation: fhir.IImmunizationRecommendationRecommendation[] | null;
};
/**
 * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
 */
export declare class ImmunizationRecommendationRecommendationDateCriterion extends fhir.BackboneElement implements fhir.IImmunizationRecommendationRecommendationDateCriterion {
    /**
     * Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The date whose meaning is specified by dateCriterion.code.
     */
    value: string | null;
    _value?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImmunizationRecommendationRecommendationDateCriterion - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImmunizationRecommendationRecommendationDateCriterion>);
    /**
     * Check if the current ImmunizationRecommendationRecommendationDateCriterion contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ImmunizationRecommendationRecommendationDateCriterion from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IImmunizationRecommendationRecommendationDateCriterion): ImmunizationRecommendationRecommendationDateCriterion;
}
/**
 * Vaccine administration recommendations.
 */
export declare class ImmunizationRecommendationRecommendation extends fhir.BackboneElement implements fhir.IImmunizationRecommendationRecommendation {
    /**
     * Vaccine(s) which should not be used to fulfill the recommendation.
     */
    contraindicatedVaccineCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
     */
    dateCriterion?: fhir.ImmunizationRecommendationRecommendationDateCriterion[] | undefined;
    /**
     * Contains the description about the protocol under which the vaccine was administered.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    doseNumberPositiveInt?: number | undefined;
    _doseNumberPositiveInt?: fhir.FhirElement | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    doseNumberString?: string | undefined;
    _doseNumberString?: fhir.FhirElement | undefined;
    /**
     * The reason for the assigned forecast status.
     */
    forecastReason?: fhir.CodeableConcept[] | undefined;
    /**
     * Indicates the patient status with respect to the path to immunity for the target disease.
     */
    forecastStatus: fhir.CodeableConcept | null;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: string | undefined;
    _series?: fhir.FhirElement | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesPositiveInt?: number | undefined;
    _seriesDosesPositiveInt?: fhir.FhirElement | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesString?: string | undefined;
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
     * The targeted disease for the recommendation.
     */
    targetDisease?: fhir.CodeableConcept | undefined;
    /**
     * Vaccine(s) or vaccine group that pertain to the recommendation.
     */
    vaccineCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Default constructor for ImmunizationRecommendationRecommendation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImmunizationRecommendationRecommendation>);
    /**
     * Check if the current ImmunizationRecommendationRecommendation contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ImmunizationRecommendationRecommendation from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IImmunizationRecommendationRecommendation): ImmunizationRecommendationRecommendation;
}
/**
 * A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 */
export declare class ImmunizationRecommendation extends fhir.DomainResource implements fhir.IImmunizationRecommendation {
    /**
     * Resource Type Name
     */
    resourceType: "ImmunizationRecommendation";
    /**
     * Indicates the authority who published the protocol (e.g. ACIP).
     */
    authority?: fhir.Reference | undefined;
    /**
     * The date the immunization recommendation(s) were created.
     */
    date: string | null;
    _date?: fhir.FhirElement | undefined;
    /**
     * A unique identifier assigned to this particular recommendation record.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The patient the recommendation(s) are for.
     */
    patient: fhir.Reference | null;
    /**
     * Vaccine administration recommendations.
     */
    recommendation: fhir.ImmunizationRecommendationRecommendation[] | null;
    /**
     * Default constructor for ImmunizationRecommendation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImmunizationRecommendation>);
    /**
     * Check if the current ImmunizationRecommendation contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ImmunizationRecommendation from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IImmunizationRecommendation): ImmunizationRecommendation;
}
//# sourceMappingURL=ImmunizationRecommendation.d.ts.map