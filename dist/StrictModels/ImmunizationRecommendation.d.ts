import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
 */
export declare class ImmunizationRecommendationRecommendationDateCriterion extends fhirModels.BackboneElement implements fhirInterfaces.IImmunizationRecommendationRecommendationDateCriterion {
    /**
     * Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.
     */
    code: fhirModels.CodeableConcept;
    /**
     * The date whose meaning is specified by dateCriterion.code.
     */
    value: string;
    _value?: fhirModels.Element | undefined;
    /**
     * Default constructor for ImmunizationRecommendationRecommendationDateCriterion from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IImmunizationRecommendationRecommendationDateCriterion);
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
    forecastStatus: fhirModels.CodeableConcept;
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
    constructor(source: fhirInterfaces.IImmunizationRecommendationRecommendation);
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
    date: string;
    _date?: fhirModels.Element | undefined;
    /**
     * A unique identifier assigned to this particular recommendation record.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The patient the recommendation(s) are for.
     */
    patient: fhirModels.Reference;
    /**
     * Vaccine administration recommendations.
     */
    recommendation: fhirModels.ImmunizationRecommendationRecommendation[];
    /**
     * Default constructor for ImmunizationRecommendation from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IImmunizationRecommendation);
}
//# sourceMappingURL=ImmunizationRecommendation.d.ts.map