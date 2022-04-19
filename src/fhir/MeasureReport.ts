// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * The populations that make up the population group, one for each type of population appropriate for the measure.
 */
export type IMeasureReportGroupPopulation = fhir.IBackboneElement & {
  /**
   * The type of the population.
   */
  code?: fhir.ICodeableConcept|undefined;
  /**
   * The number of members of the population.
   */
  count?: number|undefined;
  _count?: fhir.IFhirElement|undefined;
  /**
   * This element refers to a List of subject level MeasureReport resources, one for each subject in this population.
   */
  subjectResults?: fhir.IReference|undefined;
}
/**
 * A stratifier component value.
 */
export type IMeasureReportGroupStratifierStratumComponent = fhir.IBackboneElement & {
  /**
   * The code for the stratum component value.
   */
  code: fhir.ICodeableConcept|null;
  /**
   * The stratum component value.
   */
  value: fhir.ICodeableConcept|null;
}
/**
 * The populations that make up the stratum, one for each type of population appropriate to the measure.
 */
export type IMeasureReportGroupStratifierStratumPopulation = fhir.IBackboneElement & {
  /**
   * The type of the population.
   */
  code?: fhir.ICodeableConcept|undefined;
  /**
   * The number of members of the population in this stratum.
   */
  count?: number|undefined;
  _count?: fhir.IFhirElement|undefined;
  /**
   * This element refers to a List of subject level MeasureReport resources, one for each subject in this population in this stratum.
   */
  subjectResults?: fhir.IReference|undefined;
}
/**
 * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
 */
export type IMeasureReportGroupStratifierStratum = fhir.IBackboneElement & {
  /**
   * A stratifier component value.
   */
  component?: fhir.IMeasureReportGroupStratifierStratumComponent[]|undefined;
  /**
   * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
   */
  measureScore?: fhir.IQuantity|undefined;
  /**
   * The populations that make up the stratum, one for each type of population appropriate to the measure.
   */
  population?: fhir.IMeasureReportGroupStratifierStratumPopulation[]|undefined;
  /**
   * The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
   */
  value?: fhir.ICodeableConcept|undefined;
}
/**
 * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
 */
export type IMeasureReportGroupStratifier = fhir.IBackboneElement & {
  /**
   * The meaning of this stratifier, as defined in the measure definition.
   */
  code?: fhir.ICodeableConcept[]|undefined;
  /**
   * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
   */
  stratum?: fhir.IMeasureReportGroupStratifierStratum[]|undefined;
}
/**
 * The results of the calculation, one for each population group in the measure.
 */
export type IMeasureReportGroup = fhir.IBackboneElement & {
  /**
   * The meaning of the population group as defined in the measure definition.
   */
  code?: fhir.ICodeableConcept|undefined;
  /**
   * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
   */
  measureScore?: fhir.IQuantity|undefined;
  /**
   * The populations that make up the population group, one for each type of population appropriate for the measure.
   */
  population?: fhir.IMeasureReportGroupPopulation[]|undefined;
  /**
   * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
   */
  stratifier?: fhir.IMeasureReportGroupStratifier[]|undefined;
}
/**
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 */
export type IMeasureReport = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "MeasureReport";
  /**
   * The date this measure report was generated.
   */
  date?: string|undefined;
  _date?: fhir.IFhirElement|undefined;
  /**
   * A reference to a Bundle containing the Resources that were used in the calculation of this measure.
   */
  evaluatedResource?: fhir.IReference[]|undefined;
  /**
   * The results of the calculation, one for each population group in the measure.
   */
  group?: fhir.IMeasureReportGroup[]|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II data type - e.g. to identify this {{title}} outside of FHIR, where the logical URL is not possible to use.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * This element is typically defined by the measure, but reproduced here to ensure the measure score can be interpreted. The element is labeled as a modifier because it changes the interpretation of the reported measure score.
   */
  improvementNotation?: fhir.ICodeableConcept|undefined;
  /**
   * A reference to the Measure that was calculated to produce this report.
   */
  measure: string|null;
  _measure?: fhir.IFhirElement|undefined;
  /**
   * The reporting period for which the report was calculated.
   */
  period: fhir.IPeriod|null;
  /**
   * The individual, location, or organization that is reporting the data.
   */
  reporter?: fhir.IReference|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: MeasureReportStatusEnum|null;
  _status?: fhir.IFhirElement|undefined;
  /**
   * Optional subject identifying the individual or individuals the report is for.
   */
  subject?: fhir.IReference|undefined;
  /**
   * Data-collection reports are used only to communicate data-of-interest for a measure. They do not necessarily include all the data for a particular subject or population, but they may.
   */
  type: MeasureReportTypeEnum|null;
  _type?: fhir.IFhirElement|undefined;
}
/**
 * The populations that make up the population group, one for each type of population appropriate for the measure.
 */
export class MeasureReportGroupPopulation extends fhir.BackboneElement implements fhir.IMeasureReportGroupPopulation {
  /**
   * The type of the population.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * The number of members of the population.
   */
  public count?: number|undefined;
  public _count?: fhir.FhirElement|undefined;
  /**
   * This element refers to a List of subject level MeasureReport resources, one for each subject in this population.
   */
  public subjectResults?: fhir.Reference|undefined;
  /**
   * Default constructor for MeasureReportGroupPopulation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMeasureReportGroupPopulation> = {}) {
    super(source);
    if (source["code"]) { this.code = new fhir.CodeableConcept(source.code!); }
    if (source["count"]) { this.count = source.count; }
    if (source["_count"]) { this._count = new fhir.FhirElement(source._count!); }
    if (source["subjectResults"]) { this.subjectResults = new fhir.Reference(source.subjectResults!); }
  }
  /**
   * Check if the current MeasureReportGroupPopulation contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MeasureReportGroupPopulation from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IMeasureReportGroupPopulation):MeasureReportGroupPopulation {
    var dest:MeasureReportGroupPopulation = new MeasureReportGroupPopulation(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `MeasureReportGroupPopulation is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * A stratifier component value.
 */
export class MeasureReportGroupStratifierStratumComponent extends fhir.BackboneElement implements fhir.IMeasureReportGroupStratifierStratumComponent {
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
  constructor(source:Partial<fhir.IMeasureReportGroupStratifierStratumComponent> = {}) {
    super(source);
    this.code = null;
    if (source["code"]) { this.code = new fhir.CodeableConcept(source.code!); }
    if (this.code === undefined) { this.code = null }
    this.value = null;
    if (source["value"]) { this.value = new fhir.CodeableConcept(source.value!); }
    if (this.value === undefined) { this.value = null }
  }
  /**
   * Check if the current MeasureReportGroupStratifierStratumComponent contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["code"] === undefined) { missingElements.push("code"); }
    if (this["value"] === undefined) { missingElements.push("value"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MeasureReportGroupStratifierStratumComponent from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IMeasureReportGroupStratifierStratumComponent):MeasureReportGroupStratifierStratumComponent {
    var dest:MeasureReportGroupStratifierStratumComponent = new MeasureReportGroupStratifierStratumComponent(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `MeasureReportGroupStratifierStratumComponent is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * The populations that make up the stratum, one for each type of population appropriate to the measure.
 */
export class MeasureReportGroupStratifierStratumPopulation extends fhir.BackboneElement implements fhir.IMeasureReportGroupStratifierStratumPopulation {
  /**
   * The type of the population.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * The number of members of the population in this stratum.
   */
  public count?: number|undefined;
  public _count?: fhir.FhirElement|undefined;
  /**
   * This element refers to a List of subject level MeasureReport resources, one for each subject in this population in this stratum.
   */
  public subjectResults?: fhir.Reference|undefined;
  /**
   * Default constructor for MeasureReportGroupStratifierStratumPopulation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMeasureReportGroupStratifierStratumPopulation> = {}) {
    super(source);
    if (source["code"]) { this.code = new fhir.CodeableConcept(source.code!); }
    if (source["count"]) { this.count = source.count; }
    if (source["_count"]) { this._count = new fhir.FhirElement(source._count!); }
    if (source["subjectResults"]) { this.subjectResults = new fhir.Reference(source.subjectResults!); }
  }
  /**
   * Check if the current MeasureReportGroupStratifierStratumPopulation contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MeasureReportGroupStratifierStratumPopulation from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IMeasureReportGroupStratifierStratumPopulation):MeasureReportGroupStratifierStratumPopulation {
    var dest:MeasureReportGroupStratifierStratumPopulation = new MeasureReportGroupStratifierStratumPopulation(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `MeasureReportGroupStratifierStratumPopulation is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
 */
export class MeasureReportGroupStratifierStratum extends fhir.BackboneElement implements fhir.IMeasureReportGroupStratifierStratum {
  /**
   * A stratifier component value.
   */
  public component?: fhir.MeasureReportGroupStratifierStratumComponent[]|undefined;
  /**
   * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
   */
  public measureScore?: fhir.Quantity|undefined;
  /**
   * The populations that make up the stratum, one for each type of population appropriate to the measure.
   */
  public population?: fhir.MeasureReportGroupStratifierStratumPopulation[]|undefined;
  /**
   * The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
   */
  public value?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for MeasureReportGroupStratifierStratum - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMeasureReportGroupStratifierStratum> = {}) {
    super(source);
    if (source["component"]) { this.component = source.component.map((x:Partial<fhir.IMeasureReportGroupStratifierStratumComponent>) => new fhir.MeasureReportGroupStratifierStratumComponent(x)); }
    if (source["measureScore"]) { this.measureScore = new fhir.Quantity(source.measureScore!); }
    if (source["population"]) { this.population = source.population.map((x:Partial<fhir.IMeasureReportGroupStratifierStratumPopulation>) => new fhir.MeasureReportGroupStratifierStratumPopulation(x)); }
    if (source["value"]) { this.value = new fhir.CodeableConcept(source.value!); }
  }
  /**
   * Check if the current MeasureReportGroupStratifierStratum contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MeasureReportGroupStratifierStratum from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IMeasureReportGroupStratifierStratum):MeasureReportGroupStratifierStratum {
    var dest:MeasureReportGroupStratifierStratum = new MeasureReportGroupStratifierStratum(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `MeasureReportGroupStratifierStratum is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
 */
export class MeasureReportGroupStratifier extends fhir.BackboneElement implements fhir.IMeasureReportGroupStratifier {
  /**
   * The meaning of this stratifier, as defined in the measure definition.
   */
  public code?: fhir.CodeableConcept[]|undefined;
  /**
   * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
   */
  public stratum?: fhir.MeasureReportGroupStratifierStratum[]|undefined;
  /**
   * Default constructor for MeasureReportGroupStratifier - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMeasureReportGroupStratifier> = {}) {
    super(source);
    if (source["code"]) { this.code = source.code.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["stratum"]) { this.stratum = source.stratum.map((x:Partial<fhir.IMeasureReportGroupStratifierStratum>) => new fhir.MeasureReportGroupStratifierStratum(x)); }
  }
  /**
   * Check if the current MeasureReportGroupStratifier contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MeasureReportGroupStratifier from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IMeasureReportGroupStratifier):MeasureReportGroupStratifier {
    var dest:MeasureReportGroupStratifier = new MeasureReportGroupStratifier(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `MeasureReportGroupStratifier is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * The results of the calculation, one for each population group in the measure.
 */
export class MeasureReportGroup extends fhir.BackboneElement implements fhir.IMeasureReportGroup {
  /**
   * The meaning of the population group as defined in the measure definition.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
   */
  public measureScore?: fhir.Quantity|undefined;
  /**
   * The populations that make up the population group, one for each type of population appropriate for the measure.
   */
  public population?: fhir.MeasureReportGroupPopulation[]|undefined;
  /**
   * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
   */
  public stratifier?: fhir.MeasureReportGroupStratifier[]|undefined;
  /**
   * Default constructor for MeasureReportGroup - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMeasureReportGroup> = {}) {
    super(source);
    if (source["code"]) { this.code = new fhir.CodeableConcept(source.code!); }
    if (source["measureScore"]) { this.measureScore = new fhir.Quantity(source.measureScore!); }
    if (source["population"]) { this.population = source.population.map((x:Partial<fhir.IMeasureReportGroupPopulation>) => new fhir.MeasureReportGroupPopulation(x)); }
    if (source["stratifier"]) { this.stratifier = source.stratifier.map((x:Partial<fhir.IMeasureReportGroupStratifier>) => new fhir.MeasureReportGroupStratifier(x)); }
  }
  /**
   * Check if the current MeasureReportGroup contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MeasureReportGroup from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IMeasureReportGroup):MeasureReportGroup {
    var dest:MeasureReportGroup = new MeasureReportGroup(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `MeasureReportGroup is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 */
export class MeasureReport extends fhir.DomainResource implements fhir.IMeasureReport {
  /**
   * Resource Type Name
   */
  public override resourceType: "MeasureReport";
  /**
   * The date this measure report was generated.
   */
  public date?: string|undefined;
  public _date?: fhir.FhirElement|undefined;
  /**
   * A reference to a Bundle containing the Resources that were used in the calculation of this measure.
   */
  public evaluatedResource?: fhir.Reference[]|undefined;
  /**
   * The results of the calculation, one for each population group in the measure.
   */
  public group?: fhir.MeasureReportGroup[]|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II data type - e.g. to identify this {{title}} outside of FHIR, where the logical URL is not possible to use.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * This element is typically defined by the measure, but reproduced here to ensure the measure score can be interpreted. The element is labeled as a modifier because it changes the interpretation of the reported measure score.
   */
  public improvementNotation?: fhir.CodeableConcept|undefined;
  /**
   * A reference to the Measure that was calculated to produce this report.
   */
  public measure: string|null;
  public _measure?: fhir.FhirElement|undefined;
  /**
   * The reporting period for which the report was calculated.
   */
  public period: fhir.Period|null;
  /**
   * The individual, location, or organization that is reporting the data.
   */
  public reporter?: fhir.Reference|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: MeasureReportStatusEnum|null;
  public _status?: fhir.FhirElement|undefined;
  /**
   * Optional subject identifying the individual or individuals the report is for.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * Data-collection reports are used only to communicate data-of-interest for a measure. They do not necessarily include all the data for a particular subject or population, but they may.
   */
  public type: MeasureReportTypeEnum|null;
  public _type?: fhir.FhirElement|undefined;
  /**
   * Default constructor for MeasureReport - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IMeasureReport> = {}) {
    super(source);
    this.resourceType = 'MeasureReport';
    if (source["date"]) { this.date = source.date; }
    if (source["_date"]) { this._date = new fhir.FhirElement(source._date!); }
    if (source["evaluatedResource"]) { this.evaluatedResource = source.evaluatedResource.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["group"]) { this.group = source.group.map((x:Partial<fhir.IMeasureReportGroup>) => new fhir.MeasureReportGroup(x)); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["improvementNotation"]) { this.improvementNotation = new fhir.CodeableConcept(source.improvementNotation!); }
    this.measure = null;
    if (source["measure"]) { this.measure = source.measure; }
    if (this.measure === undefined) { this.measure = null }
    if (source["_measure"]) { this._measure = new fhir.FhirElement(source._measure!); }
    this.period = null;
    if (source["period"]) { this.period = new fhir.Period(source.period!); }
    if (this.period === undefined) { this.period = null }
    if (source["reporter"]) { this.reporter = new fhir.Reference(source.reporter!); }
    this.status = null;
    if (source["status"]) { this.status = source.status; }
    if (this.status === undefined) { this.status = null }
    if (source["_status"]) { this._status = new fhir.FhirElement(source._status!); }
    if (source["subject"]) { this.subject = new fhir.Reference(source.subject!); }
    this.type = null;
    if (source["type"]) { this.type = source.type; }
    if (this.type === undefined) { this.type = null }
    if (source["_type"]) { this._type = new fhir.FhirElement(source._type!); }
  }
  /**
   * Check if the current MeasureReport contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["measure"] === undefined) { missingElements.push("measure"); }
    if (this["period"] === undefined) { missingElements.push("period"); }
    if (this["status"] === undefined) { missingElements.push("status"); }
    if (this["type"] === undefined) { missingElements.push("type"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a MeasureReport from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IMeasureReport):MeasureReport {
    var dest:MeasureReport = new MeasureReport(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `MeasureReport is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the MeasureReport.status field
 */
export enum MeasureReportStatusEnum {
  COMPLETE = "complete",
  PENDING = "pending",
  ERROR = "error",
}
/**
 * Code Values for the MeasureReport.type field
 */
export enum MeasureReportTypeEnum {
  INDIVIDUAL = "individual",
  SUBJECT_LIST = "subject-list",
  SUMMARY = "summary",
  DATA_COLLECTION = "data-collection",
}