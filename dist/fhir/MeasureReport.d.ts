import * as fhir from '../fhir';
/**
 * The populations that make up the population group, one for each type of population appropriate for the measure.
 */
export declare type IMeasureReportGroupPopulation = fhir.IBackboneElement & {
    /**
     * The type of the population.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * The number of members of the population.
     */
    count?: number | undefined;
    _count?: fhir.IFhirElement | undefined;
    /**
     * This element refers to a List of subject level MeasureReport resources, one for each subject in this population.
     */
    subjectResults?: fhir.IReference | undefined;
};
/**
 * A stratifier component value.
 */
export declare type IMeasureReportGroupStratifierStratumComponent = fhir.IBackboneElement & {
    /**
     * The code for the stratum component value.
     */
    code: fhir.ICodeableConcept | null;
    /**
     * The stratum component value.
     */
    value: fhir.ICodeableConcept | null;
};
/**
 * The populations that make up the stratum, one for each type of population appropriate to the measure.
 */
export declare type IMeasureReportGroupStratifierStratumPopulation = fhir.IBackboneElement & {
    /**
     * The type of the population.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * The number of members of the population in this stratum.
     */
    count?: number | undefined;
    _count?: fhir.IFhirElement | undefined;
    /**
     * This element refers to a List of subject level MeasureReport resources, one for each subject in this population in this stratum.
     */
    subjectResults?: fhir.IReference | undefined;
};
/**
 * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
 */
export declare type IMeasureReportGroupStratifierStratum = fhir.IBackboneElement & {
    /**
     * A stratifier component value.
     */
    component?: fhir.IMeasureReportGroupStratifierStratumComponent[] | undefined;
    /**
     * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
     */
    measureScore?: fhir.IQuantity | undefined;
    /**
     * The populations that make up the stratum, one for each type of population appropriate to the measure.
     */
    population?: fhir.IMeasureReportGroupStratifierStratumPopulation[] | undefined;
    /**
     * The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
     */
    value?: fhir.ICodeableConcept | undefined;
};
/**
 * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
 */
export declare type IMeasureReportGroupStratifier = fhir.IBackboneElement & {
    /**
     * The meaning of this stratifier, as defined in the measure definition.
     */
    code?: fhir.ICodeableConcept[] | undefined;
    /**
     * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
     */
    stratum?: fhir.IMeasureReportGroupStratifierStratum[] | undefined;
};
/**
 * The results of the calculation, one for each population group in the measure.
 */
export declare type IMeasureReportGroup = fhir.IBackboneElement & {
    /**
     * The meaning of the population group as defined in the measure definition.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
     */
    measureScore?: fhir.IQuantity | undefined;
    /**
     * The populations that make up the population group, one for each type of population appropriate for the measure.
     */
    population?: fhir.IMeasureReportGroupPopulation[] | undefined;
    /**
     * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
     */
    stratifier?: fhir.IMeasureReportGroupStratifier[] | undefined;
};
/**
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 */
export declare type IMeasureReport = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "MeasureReport";
    /**
     * The date this measure report was generated.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * A reference to a Bundle containing the Resources that were used in the calculation of this measure.
     */
    evaluatedResource?: fhir.IReference[] | undefined;
    /**
     * The results of the calculation, one for each population group in the measure.
     */
    group?: fhir.IMeasureReportGroup[] | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II data type - e.g. to identify this {{title}} outside of FHIR, where the logical URL is not possible to use.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is typically defined by the measure, but reproduced here to ensure the measure score can be interpreted. The element is labeled as a modifier because it changes the interpretation of the reported measure score.
     */
    improvementNotation?: fhir.ICodeableConcept | undefined;
    /**
     * A reference to the Measure that was calculated to produce this report.
     */
    measure: string | null;
    _measure?: fhir.IFhirElement | undefined;
    /**
     * The reporting period for which the report was calculated.
     */
    period: fhir.IPeriod | null;
    /**
     * The individual, location, or organization that is reporting the data.
     */
    reporter?: fhir.IReference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: MeasureReportStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * Optional subject identifying the individual or individuals the report is for.
     */
    subject?: fhir.IReference | undefined;
    /**
     * Data-collection reports are used only to communicate data-of-interest for a measure. They do not necessarily include all the data for a particular subject or population, but they may.
     */
    type: MeasureReportTypeEnum | null;
    _type?: fhir.IFhirElement | undefined;
};
/**
 * The populations that make up the population group, one for each type of population appropriate for the measure.
 */
export declare class MeasureReportGroupPopulation extends fhir.BackboneElement implements fhir.IMeasureReportGroupPopulation {
    /**
     * The type of the population.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The number of members of the population.
     */
    count?: number | undefined;
    _count?: fhir.FhirElement | undefined;
    /**
     * This element refers to a List of subject level MeasureReport resources, one for each subject in this population.
     */
    subjectResults?: fhir.Reference | undefined;
    /**
     * Default constructor for MeasureReportGroupPopulation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMeasureReportGroupPopulation>);
    /**
     * Check if the current MeasureReportGroupPopulation contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a MeasureReportGroupPopulation from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IMeasureReportGroupPopulation): MeasureReportGroupPopulation;
}
/**
 * A stratifier component value.
 */
export declare class MeasureReportGroupStratifierStratumComponent extends fhir.BackboneElement implements fhir.IMeasureReportGroupStratifierStratumComponent {
    /**
     * The code for the stratum component value.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The stratum component value.
     */
    value: fhir.CodeableConcept | null;
    /**
     * Default constructor for MeasureReportGroupStratifierStratumComponent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMeasureReportGroupStratifierStratumComponent>);
    /**
     * Check if the current MeasureReportGroupStratifierStratumComponent contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a MeasureReportGroupStratifierStratumComponent from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IMeasureReportGroupStratifierStratumComponent): MeasureReportGroupStratifierStratumComponent;
}
/**
 * The populations that make up the stratum, one for each type of population appropriate to the measure.
 */
export declare class MeasureReportGroupStratifierStratumPopulation extends fhir.BackboneElement implements fhir.IMeasureReportGroupStratifierStratumPopulation {
    /**
     * The type of the population.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The number of members of the population in this stratum.
     */
    count?: number | undefined;
    _count?: fhir.FhirElement | undefined;
    /**
     * This element refers to a List of subject level MeasureReport resources, one for each subject in this population in this stratum.
     */
    subjectResults?: fhir.Reference | undefined;
    /**
     * Default constructor for MeasureReportGroupStratifierStratumPopulation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMeasureReportGroupStratifierStratumPopulation>);
    /**
     * Check if the current MeasureReportGroupStratifierStratumPopulation contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a MeasureReportGroupStratifierStratumPopulation from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IMeasureReportGroupStratifierStratumPopulation): MeasureReportGroupStratifierStratumPopulation;
}
/**
 * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
 */
export declare class MeasureReportGroupStratifierStratum extends fhir.BackboneElement implements fhir.IMeasureReportGroupStratifierStratum {
    /**
     * A stratifier component value.
     */
    component?: fhir.MeasureReportGroupStratifierStratumComponent[] | undefined;
    /**
     * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
     */
    measureScore?: fhir.Quantity | undefined;
    /**
     * The populations that make up the stratum, one for each type of population appropriate to the measure.
     */
    population?: fhir.MeasureReportGroupStratifierStratumPopulation[] | undefined;
    /**
     * The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
     */
    value?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MeasureReportGroupStratifierStratum - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMeasureReportGroupStratifierStratum>);
    /**
     * Check if the current MeasureReportGroupStratifierStratum contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a MeasureReportGroupStratifierStratum from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IMeasureReportGroupStratifierStratum): MeasureReportGroupStratifierStratum;
}
/**
 * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
 */
export declare class MeasureReportGroupStratifier extends fhir.BackboneElement implements fhir.IMeasureReportGroupStratifier {
    /**
     * The meaning of this stratifier, as defined in the measure definition.
     */
    code?: fhir.CodeableConcept[] | undefined;
    /**
     * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
     */
    stratum?: fhir.MeasureReportGroupStratifierStratum[] | undefined;
    /**
     * Default constructor for MeasureReportGroupStratifier - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMeasureReportGroupStratifier>);
    /**
     * Check if the current MeasureReportGroupStratifier contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a MeasureReportGroupStratifier from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IMeasureReportGroupStratifier): MeasureReportGroupStratifier;
}
/**
 * The results of the calculation, one for each population group in the measure.
 */
export declare class MeasureReportGroup extends fhir.BackboneElement implements fhir.IMeasureReportGroup {
    /**
     * The meaning of the population group as defined in the measure definition.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
     */
    measureScore?: fhir.Quantity | undefined;
    /**
     * The populations that make up the population group, one for each type of population appropriate for the measure.
     */
    population?: fhir.MeasureReportGroupPopulation[] | undefined;
    /**
     * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
     */
    stratifier?: fhir.MeasureReportGroupStratifier[] | undefined;
    /**
     * Default constructor for MeasureReportGroup - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMeasureReportGroup>);
    /**
     * Check if the current MeasureReportGroup contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a MeasureReportGroup from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IMeasureReportGroup): MeasureReportGroup;
}
/**
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 */
export declare class MeasureReport extends fhir.DomainResource implements fhir.IMeasureReport {
    /**
     * Resource Type Name
     */
    resourceType: "MeasureReport";
    /**
     * The date this measure report was generated.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * A reference to a Bundle containing the Resources that were used in the calculation of this measure.
     */
    evaluatedResource?: fhir.Reference[] | undefined;
    /**
     * The results of the calculation, one for each population group in the measure.
     */
    group?: fhir.MeasureReportGroup[] | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II data type - e.g. to identify this {{title}} outside of FHIR, where the logical URL is not possible to use.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is typically defined by the measure, but reproduced here to ensure the measure score can be interpreted. The element is labeled as a modifier because it changes the interpretation of the reported measure score.
     */
    improvementNotation?: fhir.CodeableConcept | undefined;
    /**
     * A reference to the Measure that was calculated to produce this report.
     */
    measure: string | null;
    _measure?: fhir.FhirElement | undefined;
    /**
     * The reporting period for which the report was calculated.
     */
    period: fhir.Period | null;
    /**
     * The individual, location, or organization that is reporting the data.
     */
    reporter?: fhir.Reference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: MeasureReportStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Optional subject identifying the individual or individuals the report is for.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Data-collection reports are used only to communicate data-of-interest for a measure. They do not necessarily include all the data for a particular subject or population, but they may.
     */
    type: MeasureReportTypeEnum | null;
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for MeasureReport - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMeasureReport>);
    /**
     * Check if the current MeasureReport contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a MeasureReport from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IMeasureReport): MeasureReport;
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