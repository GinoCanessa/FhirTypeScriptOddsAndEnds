import * as fhir from '../fhir.js';
import { MeasurePopulationValueSetType } from '../fhirValueSets/MeasurePopulationValueSet.js';
import { MeasureReportStatusValueSetType } from '../fhirValueSets/MeasureReportStatusValueSet.js';
import { MeasureReportStatusValueSetEnum } from '../valueSetEnums.js';
import { MeasureReportTypeValueSetType } from '../fhirValueSets/MeasureReportTypeValueSet.js';
import { MeasureReportTypeValueSetEnum } from '../valueSetEnums.js';
import { MeasureImprovementNotationValueSetType } from '../fhirValueSets/MeasureImprovementNotationValueSet.js';
/**
 * Valid arguments for the MeasureReportGroupPopulation type.
 */
export interface MeasureReportGroupPopulationArgs extends fhir.BackboneElementArgs {
    /**
     * The type of the population.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * The number of members of the population.
     */
    count?: fhir.FhirInteger | number | undefined;
    /**
     * This element refers to a List of subject level MeasureReport resources, one for each subject in this population.
     */
    subjectResults?: fhir.ReferenceArgs | undefined;
}
/**
 * The populations that make up the population group, one for each type of population appropriate for the measure.
 */
export declare class MeasureReportGroupPopulation extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The type of the population.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The number of members of the population.
     */
    count?: fhir.FhirInteger | undefined;
    /**
     * This element refers to a List of subject level MeasureReport resources, one for each subject in this population.
     */
    subjectResults?: fhir.Reference | undefined;
    /**
     * Default constructor for MeasureReportGroupPopulation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MeasureReportGroupPopulationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for code
     */
    static codeExtensibleValueSet(): MeasurePopulationValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the MeasureReportGroupStratifierStratumComponent type.
 */
export interface MeasureReportGroupStratifierStratumComponentArgs extends fhir.BackboneElementArgs {
    /**
     * The code for the stratum component value.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * The stratum component value.
     */
    value: fhir.CodeableConceptArgs | null;
}
/**
 * A stratifier component value.
 */
export declare class MeasureReportGroupStratifierStratumComponent extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<MeasureReportGroupStratifierStratumComponentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the MeasureReportGroupStratifierStratumPopulation type.
 */
export interface MeasureReportGroupStratifierStratumPopulationArgs extends fhir.BackboneElementArgs {
    /**
     * The type of the population.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * The number of members of the population in this stratum.
     */
    count?: fhir.FhirInteger | number | undefined;
    /**
     * This element refers to a List of subject level MeasureReport resources, one for each subject in this population in this stratum.
     */
    subjectResults?: fhir.ReferenceArgs | undefined;
}
/**
 * The populations that make up the stratum, one for each type of population appropriate to the measure.
 */
export declare class MeasureReportGroupStratifierStratumPopulation extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The type of the population.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The number of members of the population in this stratum.
     */
    count?: fhir.FhirInteger | undefined;
    /**
     * This element refers to a List of subject level MeasureReport resources, one for each subject in this population in this stratum.
     */
    subjectResults?: fhir.Reference | undefined;
    /**
     * Default constructor for MeasureReportGroupStratifierStratumPopulation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MeasureReportGroupStratifierStratumPopulationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for code
     */
    static codeExtensibleValueSet(): MeasurePopulationValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the MeasureReportGroupStratifierStratum type.
 */
export interface MeasureReportGroupStratifierStratumArgs extends fhir.BackboneElementArgs {
    /**
     * The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
     */
    value?: fhir.CodeableConceptArgs | undefined;
    /**
     * A stratifier component value.
     */
    component?: fhir.MeasureReportGroupStratifierStratumComponentArgs[] | undefined;
    /**
     * The populations that make up the stratum, one for each type of population appropriate to the measure.
     */
    population?: fhir.MeasureReportGroupStratifierStratumPopulationArgs[] | undefined;
    /**
     * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
     */
    measureScore?: fhir.QuantityArgs | undefined;
}
/**
 * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
 */
export declare class MeasureReportGroupStratifierStratum extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<MeasureReportGroupStratifierStratumArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the MeasureReportGroupStratifier type.
 */
export interface MeasureReportGroupStratifierArgs extends fhir.BackboneElementArgs {
    /**
     * The meaning of this stratifier, as defined in the measure definition.
     */
    code?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
     */
    stratum?: fhir.MeasureReportGroupStratifierStratumArgs[] | undefined;
}
/**
 * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
 */
export declare class MeasureReportGroupStratifier extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<MeasureReportGroupStratifierArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the MeasureReportGroup type.
 */
export interface MeasureReportGroupArgs extends fhir.BackboneElementArgs {
    /**
     * The meaning of the population group as defined in the measure definition.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * The populations that make up the population group, one for each type of population appropriate for the measure.
     */
    population?: fhir.MeasureReportGroupPopulationArgs[] | undefined;
    /**
     * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
     */
    measureScore?: fhir.QuantityArgs | undefined;
    /**
     * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
     */
    stratifier?: fhir.MeasureReportGroupStratifierArgs[] | undefined;
}
/**
 * The results of the calculation, one for each population group in the measure.
 */
export declare class MeasureReportGroup extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<MeasureReportGroupArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the MeasureReport type.
 */
export interface MeasureReportArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MeasureReport" | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II data type - e.g. to identify this {{title}} outside of FHIR, where the logical URL is not possible to use.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: MeasureReportStatusValueSetEnum | null;
    /**
     * Data-collection reports are used only to communicate data-of-interest for a measure. They do not necessarily include all the data for a particular subject or population, but they may.
     */
    type: MeasureReportTypeValueSetEnum | null;
    /**
     * A reference to the Measure that was calculated to produce this report.
     */
    measure: fhir.FhirCanonical | string | undefined;
    /**
     * Optional subject identifying the individual or individuals the report is for.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * The date this measure report was generated.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * The individual, location, or organization that is reporting the data.
     */
    reporter?: fhir.ReferenceArgs | undefined;
    /**
     * The reporting period for which the report was calculated.
     */
    period: fhir.PeriodArgs | null;
    /**
     * This element is typically defined by the measure, but reproduced here to ensure the measure score can be interpreted. The element is labeled as a modifier because it changes the interpretation of the reported measure score.
     */
    improvementNotation?: fhir.CodeableConceptArgs | undefined;
    /**
     * The results of the calculation, one for each population group in the measure.
     */
    group?: fhir.MeasureReportGroupArgs[] | undefined;
    /**
     * A reference to a Bundle containing the Resources that were used in the calculation of this measure.
     */
    evaluatedResource?: fhir.ReferenceArgs[] | undefined;
}
/**
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 */
export declare class MeasureReport extends fhir.DomainResource {
    readonly __dataType: string;
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
     * Data-collection reports are used only to communicate data-of-interest for a measure. They do not necessarily include all the data for a particular subject or population, but they may.
     */
    type: MeasureReportTypeValueSetEnum | null;
    /**
     * A reference to the Measure that was calculated to produce this report.
     */
    measure: fhir.FhirCanonical | null;
    /**
     * Optional subject identifying the individual or individuals the report is for.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The date this measure report was generated.
     */
    date?: fhir.FhirDateTime | undefined;
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
    constructor(source?: Partial<MeasureReportArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): MeasureReportStatusValueSetType;
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet(): MeasureReportTypeValueSetType;
    /**
     * Required-bound Value Set for improvementNotation
     */
    static improvementNotationRequiredValueSet(): MeasureImprovementNotationValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=MeasureReport.d.ts.map