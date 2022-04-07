import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
 */
export declare class ImmunizationRecommendationRecommendationDateCriterion extends fhirModels.BackboneElement implements fhirInterfaces.IImmunizationRecommendationRecommendationDateCriterion {
    /**
     * Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * The date whose meaning is specified by dateCriterion.code.
     */
    value?: string | undefined;
    _value?: fhirModels.Element | undefined;
    /**
     * Default constructor for ImmunizationRecommendationRecommendationDateCriterion from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IImmunizationRecommendationRecommendationDateCriterion>);
    /**
     * Factory function to create a ImmunizationRecommendationRecommendationDateCriterion from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IImmunizationRecommendationRecommendationDateCriterion): ImmunizationRecommendationRecommendationDateCriterion;
    /**
     * Check if the current ImmunizationRecommendationRecommendationDateCriterion contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Vaccine administration recommendations.
 */
export declare class ImmunizationRecommendationRecommendation extends fhirModels.BackboneElement implements fhirInterfaces.IImmunizationRecommendationRecommendation {
    /**
     * Vaccine(s) which should not be used to fulfill the recommendation.
     */
    contraindicatedVaccineCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
     */
    dateCriterion?: fhirModels.ImmunizationRecommendationRecommendationDateCriterion[] | undefined;
    /**
     * Contains the description about the protocol under which the vaccine was administered.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    doseNumberPositiveInt?: number | undefined;
    _doseNumberPositiveInt?: fhirModels.Element | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    doseNumberString?: string | undefined;
    _doseNumberString?: fhirModels.Element | undefined;
    /**
     * The reason for the assigned forecast status.
     */
    forecastReason?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Indicates the patient status with respect to the path to immunity for the target disease.
     */
    forecastStatus?: fhirModels.CodeableConcept | undefined;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: string | undefined;
    _series?: fhirModels.Element | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesPositiveInt?: number | undefined;
    _seriesDosesPositiveInt?: fhirModels.Element | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesString?: string | undefined;
    _seriesDosesString?: fhirModels.Element | undefined;
    /**
     * Immunization event history and/or evaluation that supports the status and recommendation.
     */
    supportingImmunization?: fhirModels.Reference[] | undefined;
    /**
     * Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
     */
    supportingPatientInformation?: fhirModels.Reference[] | undefined;
    /**
     * The targeted disease for the recommendation.
     */
    targetDisease?: fhirModels.CodeableConcept | undefined;
    /**
     * Vaccine(s) or vaccine group that pertain to the recommendation.
     */
    vaccineCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Default constructor for ImmunizationRecommendationRecommendation from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IImmunizationRecommendationRecommendation>);
    /**
     * Factory function to create a ImmunizationRecommendationRecommendation from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IImmunizationRecommendationRecommendation): ImmunizationRecommendationRecommendation;
    /**
     * Check if the current ImmunizationRecommendationRecommendation contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 */
export declare class ImmunizationRecommendation extends fhirModels.DomainResource implements fhirInterfaces.IImmunizationRecommendation {
    /**
     * Resource Type Name
     */
    readonly resourceType = "ImmunizationRecommendation";
    /**
     * Indicates the authority who published the protocol (e.g. ACIP).
     */
    authority?: fhirModels.Reference | undefined;
    /**
     * The date the immunization recommendation(s) were created.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * A unique identifier assigned to this particular recommendation record.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The patient the recommendation(s) are for.
     */
    patient?: fhirModels.Reference | undefined;
    /**
     * Vaccine administration recommendations.
     */
    recommendation?: fhirModels.ImmunizationRecommendationRecommendation[] | undefined;
    /**
     * Default constructor for ImmunizationRecommendation from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IImmunizationRecommendation>);
    /**
     * Factory function to create a ImmunizationRecommendation from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IImmunizationRecommendation): ImmunizationRecommendation;
    /**
     * Check if the current ImmunizationRecommendation contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=ImmunizationRecommendation.d.ts.map