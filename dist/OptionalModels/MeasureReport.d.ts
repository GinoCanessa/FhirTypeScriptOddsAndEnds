import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * The populations that make up the population group, one for each type of population appropriate for the measure.
 */
export declare class MeasureReportGroupPopulation extends fhirModels.BackboneElement implements fhirInterfaces.IMeasureReportGroupPopulation {
    /**
     * The type of the population.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * The number of members of the population.
     */
    count?: number | undefined;
    _count?: fhirModels.Element | undefined;
    /**
     * This element refers to a List of subject level MeasureReport resources, one for each subject in this population.
     */
    subjectResults?: fhirModels.Reference | undefined;
    /**
     * Default constructor for MeasureReportGroupPopulation from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMeasureReportGroupPopulation>);
    /**
     * Factory function to create a MeasureReportGroupPopulation from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMeasureReportGroupPopulation): MeasureReportGroupPopulation;
    /**
     * Check if the current MeasureReportGroupPopulation contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A stratifier component value.
 */
export declare class MeasureReportGroupStratifierStratumComponent extends fhirModels.BackboneElement implements fhirInterfaces.IMeasureReportGroupStratifierStratumComponent {
    /**
     * The code for the stratum component value.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * The stratum component value.
     */
    value?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for MeasureReportGroupStratifierStratumComponent from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMeasureReportGroupStratifierStratumComponent>);
    /**
     * Factory function to create a MeasureReportGroupStratifierStratumComponent from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMeasureReportGroupStratifierStratumComponent): MeasureReportGroupStratifierStratumComponent;
    /**
     * Check if the current MeasureReportGroupStratifierStratumComponent contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The populations that make up the stratum, one for each type of population appropriate to the measure.
 */
export declare class MeasureReportGroupStratifierStratumPopulation extends fhirModels.BackboneElement implements fhirInterfaces.IMeasureReportGroupStratifierStratumPopulation {
    /**
     * The type of the population.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * The number of members of the population in this stratum.
     */
    count?: number | undefined;
    _count?: fhirModels.Element | undefined;
    /**
     * This element refers to a List of subject level MeasureReport resources, one for each subject in this population in this stratum.
     */
    subjectResults?: fhirModels.Reference | undefined;
    /**
     * Default constructor for MeasureReportGroupStratifierStratumPopulation from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMeasureReportGroupStratifierStratumPopulation>);
    /**
     * Factory function to create a MeasureReportGroupStratifierStratumPopulation from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMeasureReportGroupStratifierStratumPopulation): MeasureReportGroupStratifierStratumPopulation;
    /**
     * Check if the current MeasureReportGroupStratifierStratumPopulation contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
 */
export declare class MeasureReportGroupStratifierStratum extends fhirModels.BackboneElement implements fhirInterfaces.IMeasureReportGroupStratifierStratum {
    /**
     * A stratifier component value.
     */
    component?: fhirModels.MeasureReportGroupStratifierStratumComponent[] | undefined;
    /**
     * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
     */
    measureScore?: fhirModels.Quantity | undefined;
    /**
     * The populations that make up the stratum, one for each type of population appropriate to the measure.
     */
    population?: fhirModels.MeasureReportGroupStratifierStratumPopulation[] | undefined;
    /**
     * The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
     */
    value?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for MeasureReportGroupStratifierStratum from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMeasureReportGroupStratifierStratum>);
    /**
     * Factory function to create a MeasureReportGroupStratifierStratum from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMeasureReportGroupStratifierStratum): MeasureReportGroupStratifierStratum;
    /**
     * Check if the current MeasureReportGroupStratifierStratum contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
 */
export declare class MeasureReportGroupStratifier extends fhirModels.BackboneElement implements fhirInterfaces.IMeasureReportGroupStratifier {
    /**
     * The meaning of this stratifier, as defined in the measure definition.
     */
    code?: fhirModels.CodeableConcept[] | undefined;
    /**
     * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
     */
    stratum?: fhirModels.MeasureReportGroupStratifierStratum[] | undefined;
    /**
     * Default constructor for MeasureReportGroupStratifier from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMeasureReportGroupStratifier>);
    /**
     * Factory function to create a MeasureReportGroupStratifier from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMeasureReportGroupStratifier): MeasureReportGroupStratifier;
    /**
     * Check if the current MeasureReportGroupStratifier contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The results of the calculation, one for each population group in the measure.
 */
export declare class MeasureReportGroup extends fhirModels.BackboneElement implements fhirInterfaces.IMeasureReportGroup {
    /**
     * The meaning of the population group as defined in the measure definition.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
     */
    measureScore?: fhirModels.Quantity | undefined;
    /**
     * The populations that make up the population group, one for each type of population appropriate for the measure.
     */
    population?: fhirModels.MeasureReportGroupPopulation[] | undefined;
    /**
     * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
     */
    stratifier?: fhirModels.MeasureReportGroupStratifier[] | undefined;
    /**
     * Default constructor for MeasureReportGroup from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMeasureReportGroup>);
    /**
     * Factory function to create a MeasureReportGroup from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMeasureReportGroup): MeasureReportGroup;
    /**
     * Check if the current MeasureReportGroup contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 */
export declare class MeasureReport extends fhirModels.DomainResource implements fhirInterfaces.IMeasureReport {
    /**
     * Resource Type Name
     */
    readonly resourceType = "MeasureReport";
    /**
     * The date this measure report was generated.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * A reference to a Bundle containing the Resources that were used in the calculation of this measure.
     */
    evaluatedResource?: fhirModels.Reference[] | undefined;
    /**
     * The results of the calculation, one for each population group in the measure.
     */
    group?: fhirModels.MeasureReportGroup[] | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II data type - e.g. to identify this {{title}} outside of FHIR, where the logical URL is not possible to use.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * This element is typically defined by the measure, but reproduced here to ensure the measure score can be interpreted. The element is labeled as a modifier because it changes the interpretation of the reported measure score.
     */
    improvementNotation?: fhirModels.CodeableConcept | undefined;
    /**
     * A reference to the Measure that was calculated to produce this report.
     */
    measure?: string | undefined;
    _measure?: fhirModels.Element | undefined;
    /**
     * The reporting period for which the report was calculated.
     */
    period?: fhirModels.Period | undefined;
    /**
     * The individual, location, or organization that is reporting the data.
     */
    reporter?: fhirModels.Reference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: MeasureReportStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * Optional subject identifying the individual or individuals the report is for.
     */
    subject?: fhirModels.Reference | undefined;
    /**
     * Data-collection reports are used only to communicate data-of-interest for a measure. They do not necessarily include all the data for a particular subject or population, but they may.
     */
    type?: MeasureReportTypeEnum | undefined;
    _type?: fhirModels.Element | undefined;
    /**
     * Default constructor for MeasureReport from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IMeasureReport>);
    /**
     * Factory function to create a MeasureReport from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IMeasureReport): MeasureReport;
    /**
     * Check if the current MeasureReport contains all required elements.
     */
    checkRequiredElements(): string[];
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
//# sourceMappingURL=MeasureReport.d.ts.map