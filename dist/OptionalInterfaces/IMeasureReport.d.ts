import * as fhirInterfaces from '../optionalinterfaces';
/**
 * The populations that make up the population group, one for each type of population appropriate for the measure.
 */
export interface IMeasureReportGroupPopulation extends fhirInterfaces.IBackboneElement {
    /**
     * The type of the population.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The number of members of the population.
     */
    count?: number | undefined;
    _count?: fhirInterfaces.IElement | undefined;
    /**
     * This element refers to a List of subject level MeasureReport resources, one for each subject in this population.
     */
    subjectResults?: fhirInterfaces.IReference | undefined;
}
/**
 * A stratifier component value.
 */
export interface IMeasureReportGroupStratifierStratumComponent extends fhirInterfaces.IBackboneElement {
    /**
     * The code for the stratum component value.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The stratum component value.
     */
    value?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * The populations that make up the stratum, one for each type of population appropriate to the measure.
 */
export interface IMeasureReportGroupStratifierStratumPopulation extends fhirInterfaces.IBackboneElement {
    /**
     * The type of the population.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The number of members of the population in this stratum.
     */
    count?: number | undefined;
    _count?: fhirInterfaces.IElement | undefined;
    /**
     * This element refers to a List of subject level MeasureReport resources, one for each subject in this population in this stratum.
     */
    subjectResults?: fhirInterfaces.IReference | undefined;
}
/**
 * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
 */
export interface IMeasureReportGroupStratifierStratum extends fhirInterfaces.IBackboneElement {
    /**
     * A stratifier component value.
     */
    component?: fhirInterfaces.IMeasureReportGroupStratifierStratumComponent[] | undefined;
    /**
     * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
     */
    measureScore?: fhirInterfaces.IQuantity | undefined;
    /**
     * The populations that make up the stratum, one for each type of population appropriate to the measure.
     */
    population?: fhirInterfaces.IMeasureReportGroupStratifierStratumPopulation[] | undefined;
    /**
     * The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
     */
    value?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
 */
export interface IMeasureReportGroupStratifier extends fhirInterfaces.IBackboneElement {
    /**
     * The meaning of this stratifier, as defined in the measure definition.
     */
    code?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
     */
    stratum?: fhirInterfaces.IMeasureReportGroupStratifierStratum[] | undefined;
}
/**
 * The results of the calculation, one for each population group in the measure.
 */
export interface IMeasureReportGroup extends fhirInterfaces.IBackboneElement {
    /**
     * The meaning of the population group as defined in the measure definition.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
     */
    measureScore?: fhirInterfaces.IQuantity | undefined;
    /**
     * The populations that make up the population group, one for each type of population appropriate for the measure.
     */
    population?: fhirInterfaces.IMeasureReportGroupPopulation[] | undefined;
    /**
     * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
     */
    stratifier?: fhirInterfaces.IMeasureReportGroupStratifier[] | undefined;
}
/**
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 */
export interface IMeasureReport extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "MeasureReport";
    /**
     * The date this measure report was generated.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * A reference to a Bundle containing the Resources that were used in the calculation of this measure.
     */
    evaluatedResource?: fhirInterfaces.IReference[] | undefined;
    /**
     * The results of the calculation, one for each population group in the measure.
     */
    group?: fhirInterfaces.IMeasureReportGroup[] | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II data type - e.g. to identify this {{title}} outside of FHIR, where the logical URL is not possible to use.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * This element is typically defined by the measure, but reproduced here to ensure the measure score can be interpreted. The element is labeled as a modifier because it changes the interpretation of the reported measure score.
     */
    improvementNotation?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A reference to the Measure that was calculated to produce this report.
     */
    measure?: string | undefined;
    _measure?: fhirInterfaces.IElement | undefined;
    /**
     * The reporting period for which the report was calculated.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * The individual, location, or organization that is reporting the data.
     */
    reporter?: fhirInterfaces.IReference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: MeasureReportStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * Optional subject identifying the individual or individuals the report is for.
     */
    subject?: fhirInterfaces.IReference | undefined;
    /**
     * Data-collection reports are used only to communicate data-of-interest for a measure. They do not necessarily include all the data for a particular subject or population, but they may.
     */
    type?: MeasureReportTypeEnum | undefined;
    _type?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the MeasureReport.status field
 */
export declare enum MeasureReportStatusEnum {
    COMPLETE = "complete",
    PENDING = "pending",
    ERROR = "error"
}
/**
 * Code Values for the MeasureReport.type field
 */
export declare enum MeasureReportTypeEnum {
    INDIVIDUAL = "individual",
    SUBJECT_LIST = "subject-list",
    SUMMARY = "summary",
    DATA_COLLECTION = "data-collection"
}
//# sourceMappingURL=IMeasureReport.d.ts.map