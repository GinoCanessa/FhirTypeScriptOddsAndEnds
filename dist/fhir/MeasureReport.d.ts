import * as fhir from '../fhir.js';
import { MeasurePopulationValueSetType } from '../fhirValueSets/MeasurePopulationValueSet.js';
import { MeasureReportStatusValueSetType, MeasureReportStatusValueSetEnum } from '../fhirValueSets/MeasureReportStatusValueSet.js';
import { MeasureReportTypeValueSetType, MeasureReportTypeValueSetEnum } from '../fhirValueSets/MeasureReportTypeValueSet.js';
import { MeasureImprovementNotationValueSetType } from '../fhirValueSets/MeasureImprovementNotationValueSet.js';
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
    /**
     * Extended properties for primitive element: MeasureReport.group.population.count
     */
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
    /**
     * Extended properties for primitive element: MeasureReport.group.stratifier.stratum.population.count
     */
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
     * The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
     */
    value?: fhir.ICodeableConcept | undefined;
    /**
     * A stratifier component value.
     */
    component?: fhir.IMeasureReportGroupStratifierStratumComponent[] | undefined;
    /**
     * The populations that make up the stratum, one for each type of population appropriate to the measure.
     */
    population?: fhir.IMeasureReportGroupStratifierStratumPopulation[] | undefined;
    /**
     * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
     */
    measureScore?: fhir.IQuantity | undefined;
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
     * The populations that make up the population group, one for each type of population appropriate for the measure.
     */
    population?: fhir.IMeasureReportGroupPopulation[] | undefined;
    /**
     * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
     */
    measureScore?: fhir.IQuantity | undefined;
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
     * Typically, this is used for identifiers that can go in an HL7 V3 II data type - e.g. to identify this {{title}} outside of FHIR, where the logical URL is not possible to use.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: MeasureReportStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: MeasureReport.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Data-collection reports are used only to communicate data-of-interest for a measure. They do not necessarily include all the data for a particular subject or population, but they may.
     */
    type: MeasureReportTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: MeasureReport.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * A reference to the Measure that was calculated to produce this report.
     */
    measure: string | null;
    /**
     * Extended properties for primitive element: MeasureReport.measure
     */
    _measure?: fhir.IFhirElement | undefined;
    /**
     * Optional subject identifying the individual or individuals the report is for.
     */
    subject?: fhir.IReference | undefined;
    /**
     * The date this measure report was generated.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: MeasureReport.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * The individual, location, or organization that is reporting the data.
     */
    reporter?: fhir.IReference | undefined;
    /**
     * The reporting period for which the report was calculated.
     */
    period: fhir.IPeriod | null;
    /**
     * This element is typically defined by the measure, but reproduced here to ensure the measure score can be interpreted. The element is labeled as a modifier because it changes the interpretation of the reported measure score.
     */
    improvementNotation?: fhir.ICodeableConcept | undefined;
    /**
     * The results of the calculation, one for each population group in the measure.
     */
    group?: fhir.IMeasureReportGroup[] | undefined;
    /**
     * A reference to a Bundle containing the Resources that were used in the calculation of this measure.
     */
    evaluatedResource?: fhir.IReference[] | undefined;
};
/**
 * The populations that make up the population group, one for each type of population appropriate for the measure.
 */
export declare class MeasureReportGroupPopulation extends fhir.BackboneElement implements IMeasureReportGroupPopulation {
    /**
     * The type of the population.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The number of members of the population.
     */
    count?: number | undefined;
    /**
     * Extended properties for primitive element: MeasureReport.group.population.count
     */
    _count?: fhir.FhirElement | undefined;
    /**
     * This element refers to a List of subject level MeasureReport resources, one for each subject in this population.
     */
    subjectResults?: fhir.Reference | undefined;
    /**
     * Default constructor for MeasureReportGroupPopulation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMeasureReportGroupPopulation>);
    /**
     * Extensible-bound Value Set for code
     */
    codeExtensibleValueSet(): MeasurePopulationValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A stratifier component value.
 */
export declare class MeasureReportGroupStratifierStratumComponent extends fhir.BackboneElement implements IMeasureReportGroupStratifierStratumComponent {
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
    constructor(source?: Partial<IMeasureReportGroupStratifierStratumComponent>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The populations that make up the stratum, one for each type of population appropriate to the measure.
 */
export declare class MeasureReportGroupStratifierStratumPopulation extends fhir.BackboneElement implements IMeasureReportGroupStratifierStratumPopulation {
    /**
     * The type of the population.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The number of members of the population in this stratum.
     */
    count?: number | undefined;
    /**
     * Extended properties for primitive element: MeasureReport.group.stratifier.stratum.population.count
     */
    _count?: fhir.FhirElement | undefined;
    /**
     * This element refers to a List of subject level MeasureReport resources, one for each subject in this population in this stratum.
     */
    subjectResults?: fhir.Reference | undefined;
    /**
     * Default constructor for MeasureReportGroupStratifierStratumPopulation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMeasureReportGroupStratifierStratumPopulation>);
    /**
     * Extensible-bound Value Set for code
     */
    codeExtensibleValueSet(): MeasurePopulationValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
 */
export declare class MeasureReportGroupStratifierStratum extends fhir.BackboneElement implements IMeasureReportGroupStratifierStratum {
    /**
     * The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
     */
    value?: fhir.CodeableConcept | undefined;
    /**
     * A stratifier component value.
     */
    component?: fhir.MeasureReportGroupStratifierStratumComponent[] | undefined;
    /**
     * The populations that make up the stratum, one for each type of population appropriate to the measure.
     */
    population?: fhir.MeasureReportGroupStratifierStratumPopulation[] | undefined;
    /**
     * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
     */
    measureScore?: fhir.Quantity | undefined;
    /**
     * Default constructor for MeasureReportGroupStratifierStratum - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMeasureReportGroupStratifierStratum>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
 */
export declare class MeasureReportGroupStratifier extends fhir.BackboneElement implements IMeasureReportGroupStratifier {
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
    constructor(source?: Partial<IMeasureReportGroupStratifier>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The results of the calculation, one for each population group in the measure.
 */
export declare class MeasureReportGroup extends fhir.BackboneElement implements IMeasureReportGroup {
    /**
     * The meaning of the population group as defined in the measure definition.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The populations that make up the population group, one for each type of population appropriate for the measure.
     */
    population?: fhir.MeasureReportGroupPopulation[] | undefined;
    /**
     * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
     */
    measureScore?: fhir.Quantity | undefined;
    /**
     * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
     */
    stratifier?: fhir.MeasureReportGroupStratifier[] | undefined;
    /**
     * Default constructor for MeasureReportGroup - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMeasureReportGroup>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 */
export declare class MeasureReport extends fhir.DomainResource implements IMeasureReport {
    /**
     * Resource Type Name
     */
    resourceType: "MeasureReport";
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II data type - e.g. to identify this {{title}} outside of FHIR, where the logical URL is not possible to use.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: MeasureReportStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: MeasureReport.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Data-collection reports are used only to communicate data-of-interest for a measure. They do not necessarily include all the data for a particular subject or population, but they may.
     */
    type: MeasureReportTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: MeasureReport.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * A reference to the Measure that was calculated to produce this report.
     */
    measure: string | null;
    /**
     * Extended properties for primitive element: MeasureReport.measure
     */
    _measure?: fhir.FhirElement | undefined;
    /**
     * Optional subject identifying the individual or individuals the report is for.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The date this measure report was generated.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: MeasureReport.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * The individual, location, or organization that is reporting the data.
     */
    reporter?: fhir.Reference | undefined;
    /**
     * The reporting period for which the report was calculated.
     */
    period: fhir.Period | null;
    /**
     * This element is typically defined by the measure, but reproduced here to ensure the measure score can be interpreted. The element is labeled as a modifier because it changes the interpretation of the reported measure score.
     */
    improvementNotation?: fhir.CodeableConcept | undefined;
    /**
     * The results of the calculation, one for each population group in the measure.
     */
    group?: fhir.MeasureReportGroup[] | undefined;
    /**
     * A reference to a Bundle containing the Resources that were used in the calculation of this measure.
     */
    evaluatedResource?: fhir.Reference[] | undefined;
    /**
     * Default constructor for MeasureReport - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMeasureReport>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): MeasureReportStatusValueSetType;
    /**
     * Required-bound Value Set for type
     */
    typeRequiredValueSet(): MeasureReportTypeValueSetType;
    /**
     * Required-bound Value Set for improvementNotation
     */
    improvementNotationRequiredValueSet(): MeasureImprovementNotationValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=MeasureReport.d.ts.map