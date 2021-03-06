// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: MeasureReport

import * as fhir from '../fhir.js';

import { MeasurePopulationValueSet, MeasurePopulationValueSetType,} from '../fhirValueSets/MeasurePopulationValueSet.js';
import { MeasurePopulationValueSetEnum } from '../valueSetEnums.js';
import { MeasureReportStatusValueSet, MeasureReportStatusValueSetType,} from '../fhirValueSets/MeasureReportStatusValueSet.js';
import { MeasureReportStatusValueSetEnum } from '../valueSetEnums.js';
import { MeasureReportTypeValueSet, MeasureReportTypeValueSetType,} from '../fhirValueSets/MeasureReportTypeValueSet.js';
import { MeasureReportTypeValueSetEnum } from '../valueSetEnums.js';
import { MeasureImprovementNotationValueSet, MeasureImprovementNotationValueSetType,} from '../fhirValueSets/MeasureImprovementNotationValueSet.js';
import { MeasureImprovementNotationValueSetEnum } from '../valueSetEnums.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the MeasureReportGroupPopulation type.
 */
export interface MeasureReportGroupPopulationArgs extends fhir.BackboneElementArgs {
  /**
   * The type of the population.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * The number of members of the population.
   */
  count?: fhir.FhirInteger|number|undefined;
  /**
   * This element refers to a List of subject level MeasureReport resources, one for each subject in this population.
   */
  subjectResults?: fhir.ReferenceArgs|undefined;
}

/**
 * The populations that make up the population group, one for each type of population appropriate for the measure.
 */
export class MeasureReportGroupPopulation extends fhir.BackboneElement {
  readonly __dataType:string = 'MeasureReportGroupPopulation';
  /**
   * The type of the population.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * The number of members of the population.
   */
  public count?: fhir.FhirInteger|undefined;
  /**
   * This element refers to a List of subject level MeasureReport resources, one for each subject in this population.
   */
  public subjectResults?: fhir.Reference|undefined;
  /**
   * Default constructor for MeasureReportGroupPopulation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MeasureReportGroupPopulationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    if (source['count']) { this.count = new fhir.FhirInteger({value: source.count}); }
    if (source['subjectResults']) { this.subjectResults = new fhir.Reference(source.subjectResults); }
  }
  /**
   * Extensible-bound Value Set for code
   */
  public static codeExtensibleValueSet():MeasurePopulationValueSetType {
    return MeasurePopulationValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["code"]) { outcome.issue!.push(...this.code.doModelValidation().issue!); }
    if (this["count"]) { outcome.issue!.push(...this.count.doModelValidation().issue!); }
    if (this["subjectResults"]) { outcome.issue!.push(...this.subjectResults.doModelValidation().issue!); }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
/**
 * Valid arguments for the MeasureReportGroupStratifierStratumComponent type.
 */
export interface MeasureReportGroupStratifierStratumComponentArgs extends fhir.BackboneElementArgs {
  /**
   * The code for the stratum component value.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * The stratum component value.
   */
  value: fhir.CodeableConceptArgs|null;
}

/**
 * A stratifier component value.
 */
export class MeasureReportGroupStratifierStratumComponent extends fhir.BackboneElement {
  readonly __dataType:string = 'MeasureReportGroupStratifierStratumComponent';
  /**
   * The code for the stratum component value.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * The stratum component value.
   */
  public value: fhir.CodeableConcept|null;
  /**
   * Default constructor for MeasureReportGroupStratifierStratumComponent - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MeasureReportGroupStratifierStratumComponentArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    else { this.code = null; }
    if (source['value']) { this.value = new fhir.CodeableConcept(source.value); }
    else { this.value = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['code']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property code:fhir.CodeableConcept fhir: MeasureReport.group.stratifier.stratum.component.code:CodeableConcept", }));
    }
    if (this["code"]) { outcome.issue!.push(...this.code.doModelValidation().issue!); }
    if (!this['value']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property value:fhir.CodeableConcept fhir: MeasureReport.group.stratifier.stratum.component.value:CodeableConcept", }));
    }
    if (this["value"]) { outcome.issue!.push(...this.value.doModelValidation().issue!); }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
/**
 * Valid arguments for the MeasureReportGroupStratifierStratumPopulation type.
 */
export interface MeasureReportGroupStratifierStratumPopulationArgs extends fhir.BackboneElementArgs {
  /**
   * The type of the population.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * The number of members of the population in this stratum.
   */
  count?: fhir.FhirInteger|number|undefined;
  /**
   * This element refers to a List of subject level MeasureReport resources, one for each subject in this population in this stratum.
   */
  subjectResults?: fhir.ReferenceArgs|undefined;
}

/**
 * The populations that make up the stratum, one for each type of population appropriate to the measure.
 */
export class MeasureReportGroupStratifierStratumPopulation extends fhir.BackboneElement {
  readonly __dataType:string = 'MeasureReportGroupStratifierStratumPopulation';
  /**
   * The type of the population.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * The number of members of the population in this stratum.
   */
  public count?: fhir.FhirInteger|undefined;
  /**
   * This element refers to a List of subject level MeasureReport resources, one for each subject in this population in this stratum.
   */
  public subjectResults?: fhir.Reference|undefined;
  /**
   * Default constructor for MeasureReportGroupStratifierStratumPopulation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MeasureReportGroupStratifierStratumPopulationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    if (source['count']) { this.count = new fhir.FhirInteger({value: source.count}); }
    if (source['subjectResults']) { this.subjectResults = new fhir.Reference(source.subjectResults); }
  }
  /**
   * Extensible-bound Value Set for code
   */
  public static codeExtensibleValueSet():MeasurePopulationValueSetType {
    return MeasurePopulationValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["code"]) { outcome.issue!.push(...this.code.doModelValidation().issue!); }
    if (this["count"]) { outcome.issue!.push(...this.count.doModelValidation().issue!); }
    if (this["subjectResults"]) { outcome.issue!.push(...this.subjectResults.doModelValidation().issue!); }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
/**
 * Valid arguments for the MeasureReportGroupStratifierStratum type.
 */
export interface MeasureReportGroupStratifierStratumArgs extends fhir.BackboneElementArgs {
  /**
   * The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
   */
  value?: fhir.CodeableConceptArgs|undefined;
  /**
   * A stratifier component value.
   */
  component?: fhir.MeasureReportGroupStratifierStratumComponentArgs[]|undefined;
  /**
   * The populations that make up the stratum, one for each type of population appropriate to the measure.
   */
  population?: fhir.MeasureReportGroupStratifierStratumPopulationArgs[]|undefined;
  /**
   * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
   */
  measureScore?: fhir.QuantityArgs|undefined;
}

/**
 * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
 */
export class MeasureReportGroupStratifierStratum extends fhir.BackboneElement {
  readonly __dataType:string = 'MeasureReportGroupStratifierStratum';
  /**
   * The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
   */
  public value?: fhir.CodeableConcept|undefined;
  /**
   * A stratifier component value.
   */
  public component?: fhir.MeasureReportGroupStratifierStratumComponent[]|undefined = [];
  /**
   * The populations that make up the stratum, one for each type of population appropriate to the measure.
   */
  public population?: fhir.MeasureReportGroupStratifierStratumPopulation[]|undefined = [];
  /**
   * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
   */
  public measureScore?: fhir.Quantity|undefined;
  /**
   * Default constructor for MeasureReportGroupStratifierStratum - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MeasureReportGroupStratifierStratumArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['value']) { this.value = new fhir.CodeableConcept(source.value); }
    if (source['component']) { this.component = source.component.map((x) => new fhir.MeasureReportGroupStratifierStratumComponent(x)); }
    if (source['population']) { this.population = source.population.map((x) => new fhir.MeasureReportGroupStratifierStratumPopulation(x)); }
    if (source['measureScore']) { this.measureScore = new fhir.Quantity(source.measureScore); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["value"]) { outcome.issue!.push(...this.value.doModelValidation().issue!); }
    if (this["component"]) { this.component.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["population"]) { this.population.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["measureScore"]) { outcome.issue!.push(...this.measureScore.doModelValidation().issue!); }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
/**
 * Valid arguments for the MeasureReportGroupStratifier type.
 */
export interface MeasureReportGroupStratifierArgs extends fhir.BackboneElementArgs {
  /**
   * The meaning of this stratifier, as defined in the measure definition.
   */
  code?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
   */
  stratum?: fhir.MeasureReportGroupStratifierStratumArgs[]|undefined;
}

/**
 * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
 */
export class MeasureReportGroupStratifier extends fhir.BackboneElement {
  readonly __dataType:string = 'MeasureReportGroupStratifier';
  /**
   * The meaning of this stratifier, as defined in the measure definition.
   */
  public code?: fhir.CodeableConcept[]|undefined = [];
  /**
   * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
   */
  public stratum?: fhir.MeasureReportGroupStratifierStratum[]|undefined = [];
  /**
   * Default constructor for MeasureReportGroupStratifier - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MeasureReportGroupStratifierArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = source.code.map((x) => new fhir.CodeableConcept(x)); }
    if (source['stratum']) { this.stratum = source.stratum.map((x) => new fhir.MeasureReportGroupStratifierStratum(x)); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["code"]) { this.code.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["stratum"]) { this.stratum.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
/**
 * Valid arguments for the MeasureReportGroup type.
 */
export interface MeasureReportGroupArgs extends fhir.BackboneElementArgs {
  /**
   * The meaning of the population group as defined in the measure definition.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * The populations that make up the population group, one for each type of population appropriate for the measure.
   */
  population?: fhir.MeasureReportGroupPopulationArgs[]|undefined;
  /**
   * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
   */
  measureScore?: fhir.QuantityArgs|undefined;
  /**
   * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
   */
  stratifier?: fhir.MeasureReportGroupStratifierArgs[]|undefined;
}

/**
 * The results of the calculation, one for each population group in the measure.
 */
export class MeasureReportGroup extends fhir.BackboneElement {
  readonly __dataType:string = 'MeasureReportGroup';
  /**
   * The meaning of the population group as defined in the measure definition.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * The populations that make up the population group, one for each type of population appropriate for the measure.
   */
  public population?: fhir.MeasureReportGroupPopulation[]|undefined = [];
  /**
   * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
   */
  public measureScore?: fhir.Quantity|undefined;
  /**
   * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
   */
  public stratifier?: fhir.MeasureReportGroupStratifier[]|undefined = [];
  /**
   * Default constructor for MeasureReportGroup - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MeasureReportGroupArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    if (source['population']) { this.population = source.population.map((x) => new fhir.MeasureReportGroupPopulation(x)); }
    if (source['measureScore']) { this.measureScore = new fhir.Quantity(source.measureScore); }
    if (source['stratifier']) { this.stratifier = source.stratifier.map((x) => new fhir.MeasureReportGroupStratifier(x)); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["code"]) { outcome.issue!.push(...this.code.doModelValidation().issue!); }
    if (this["population"]) { this.population.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["measureScore"]) { outcome.issue!.push(...this.measureScore.doModelValidation().issue!); }
    if (this["stratifier"]) { this.stratifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
/**
 * Valid arguments for the MeasureReport type.
 */
export interface MeasureReportArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "MeasureReport"|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II data type - e.g. to identify this {{title}} outside of FHIR, where the logical URL is not possible to use.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: MeasureReportStatusValueSetEnum|null;
  /**
   * Data-collection reports are used only to communicate data-of-interest for a measure. They do not necessarily include all the data for a particular subject or population, but they may.
   */
  type: MeasureReportTypeValueSetEnum|null;
  /**
   * A reference to the Measure that was calculated to produce this report.
   */
  measure: fhir.FhirCanonical|string|undefined;
  /**
   * Optional subject identifying the individual or individuals the report is for.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * The date this measure report was generated.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * The individual, location, or organization that is reporting the data.
   */
  reporter?: fhir.ReferenceArgs|undefined;
  /**
   * The reporting period for which the report was calculated.
   */
  period: fhir.PeriodArgs|null;
  /**
   * This element is typically defined by the measure, but reproduced here to ensure the measure score can be interpreted. The element is labeled as a modifier because it changes the interpretation of the reported measure score.
   */
  improvementNotation?: fhir.CodeableConceptArgs|undefined;
  /**
   * The results of the calculation, one for each population group in the measure.
   */
  group?: fhir.MeasureReportGroupArgs[]|undefined;
  /**
   * A reference to a Bundle containing the Resources that were used in the calculation of this measure.
   */
  evaluatedResource?: fhir.ReferenceArgs[]|undefined;
}

/**
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 */
export class MeasureReport extends fhir.DomainResource {
  readonly __dataType:string = 'MeasureReport';
  /**
   * Resource Type Name
   */
  public resourceType: "MeasureReport";
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II data type - e.g. to identify this {{title}} outside of FHIR, where the logical URL is not possible to use.
   */
  public identifier?: fhir.Identifier[]|undefined = [];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: MeasureReportStatusValueSetEnum|null;
  /**
   * Data-collection reports are used only to communicate data-of-interest for a measure. They do not necessarily include all the data for a particular subject or population, but they may.
   */
  public type: MeasureReportTypeValueSetEnum|null;
  /**
   * A reference to the Measure that was calculated to produce this report.
   */
  public measure: fhir.FhirCanonical|null;
  /**
   * Optional subject identifying the individual or individuals the report is for.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * The date this measure report was generated.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * The individual, location, or organization that is reporting the data.
   */
  public reporter?: fhir.Reference|undefined;
  /**
   * The reporting period for which the report was calculated.
   */
  public period: fhir.Period|null;
  /**
   * This element is typically defined by the measure, but reproduced here to ensure the measure score can be interpreted. The element is labeled as a modifier because it changes the interpretation of the reported measure score.
   */
  public improvementNotation?: fhir.CodeableConcept|undefined;
  /**
   * The results of the calculation, one for each population group in the measure.
   */
  public group?: fhir.MeasureReportGroup[]|undefined = [];
  /**
   * A reference to a Bundle containing the Resources that were used in the calculation of this measure.
   */
  public evaluatedResource?: fhir.Reference[]|undefined = [];
  /**
   * Default constructor for MeasureReport - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MeasureReportArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'MeasureReport';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['type']) { this.type = source.type; }
    else { this.type = null; }
    if (source['measure']) { this.measure = new fhir.FhirCanonical({value: source.measure}); }
    else { this.measure = null; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    if (source['reporter']) { this.reporter = new fhir.Reference(source.reporter); }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    else { this.period = null; }
    if (source['improvementNotation']) { this.improvementNotation = new fhir.CodeableConcept(source.improvementNotation); }
    if (source['group']) { this.group = source.group.map((x) => new fhir.MeasureReportGroup(x)); }
    if (source['evaluatedResource']) { this.evaluatedResource = source.evaluatedResource.map((x) => new fhir.Reference(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public static statusRequiredValueSet():MeasureReportStatusValueSetType {
    return MeasureReportStatusValueSet;
  }
  /**
   * Required-bound Value Set for type
   */
  public static typeRequiredValueSet():MeasureReportTypeValueSetType {
    return MeasureReportTypeValueSet;
  }
  /**
   * Required-bound Value Set for improvementNotation
   */
  public static improvementNotationRequiredValueSet():MeasureImprovementNotationValueSetType {
    return MeasureImprovementNotationValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property resourceType:'MeasureReport' fhir: MeasureReport.resourceType:'MeasureReport'", }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['status']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property status:MeasureReportStatusValueSetEnum fhir: MeasureReport.status:code", }));
    }
    if (!this['type']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property type:MeasureReportTypeValueSetEnum fhir: MeasureReport.type:code", }));
    }
    if (!this['measure']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property measure:fhir.FhirCanonical fhir: MeasureReport.measure:canonical", }));
    }
    if (this["measure"]) { outcome.issue!.push(...this.measure.doModelValidation().issue!); }
    if (this["subject"]) { outcome.issue!.push(...this.subject.doModelValidation().issue!); }
    if (this["date"]) { outcome.issue!.push(...this.date.doModelValidation().issue!); }
    if (this["reporter"]) { outcome.issue!.push(...this.reporter.doModelValidation().issue!); }
    if (!this['period']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property period:fhir.Period fhir: MeasureReport.period:Period", }));
    }
    if (this["period"]) { outcome.issue!.push(...this.period.doModelValidation().issue!); }
    if (this["improvementNotation"]) { outcome.issue!.push(...this.improvementNotation.doModelValidation().issue!); }
    if (this["group"]) { this.group.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["evaluatedResource"]) { this.evaluatedResource.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
