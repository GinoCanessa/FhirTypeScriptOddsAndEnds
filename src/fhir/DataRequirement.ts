// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: DataRequirement

import * as fhir from '../fhir.js';

import { SortDirectionValueSet, SortDirectionValueSetType,} from '../fhirValueSets/SortDirectionValueSet.js';
import { SortDirectionValueSetEnum } from '../valueSetEnums.js';
import { AllTypesValueSet, AllTypesValueSetType,} from '../fhirValueSets/AllTypesValueSet.js';
import { AllTypesValueSetEnum } from '../valueSetEnums.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the DataRequirementCodeFilter type.
 */
export interface DataRequirementCodeFilterArgs extends fhir.FhirElementArgs {
  /**
   * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
   */
  path?: fhir.FhirString|string|undefined;
  /**
   * A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.
   */
  searchParam?: fhir.FhirString|string|undefined;
  /**
   * The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
   */
  valueSet?: fhir.FhirCanonical|string|undefined;
  /**
   * The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes.
   */
  code?: fhir.CodingArgs[]|undefined;
}

/**
 * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
 */
export class DataRequirementCodeFilter extends fhir.FhirElement {
  readonly __dataType:string = 'DataRequirementCodeFilter';
  /**
   * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
   */
  public path?: fhir.FhirString|undefined;
  /**
   * A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.
   */
  public searchParam?: fhir.FhirString|undefined;
  /**
   * The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
   */
  public valueSet?: fhir.FhirCanonical|undefined;
  /**
   * The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes.
   */
  public code?: fhir.Coding[]|undefined = [];
  /**
   * Default constructor for DataRequirementCodeFilter - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DataRequirementCodeFilterArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['path']) { this.path = new fhir.FhirString({value: source.path}); }
    if (source['searchParam']) { this.searchParam = new fhir.FhirString({value: source.searchParam}); }
    if (source['valueSet']) { this.valueSet = new fhir.FhirCanonical({value: source.valueSet}); }
    if (source['code']) { this.code = source.code.map((x) => new fhir.Coding(x)); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["path"]) { outcome.issue!.push(...this.path.doModelValidation().issue!); }
    if (this["searchParam"]) { outcome.issue!.push(...this.searchParam.doModelValidation().issue!); }
    if (this["valueSet"]) { outcome.issue!.push(...this.valueSet.doModelValidation().issue!); }
    if (this["code"]) { this.code.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
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
 * Valid arguments for the DataRequirementDateFilter type.
 */
export interface DataRequirementDateFilterArgs extends fhir.FhirElementArgs {
  /**
   * The path attribute contains a [Simple FHIR Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
   */
  path?: fhir.FhirString|string|undefined;
  /**
   * A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing.
   */
  searchParam?: fhir.FhirString|string|undefined;
  /**
   * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
   */
  value?: fhir.FhirDateTime|fhir.Period|fhir.Duration|undefined;
  /**
   * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
   */
  valueDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
   */
  valuePeriod?: fhir.PeriodArgs|undefined;
  /**
   * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
   */
  valueDuration?: fhir.DurationArgs|undefined;
}

/**
 * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
 */
export class DataRequirementDateFilter extends fhir.FhirElement {
  readonly __dataType:string = 'DataRequirementDateFilter';
  /**
   * The path attribute contains a [Simple FHIR Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
   */
  public path?: fhir.FhirString|undefined;
  /**
   * A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing.
   */
  public searchParam?: fhir.FhirString|undefined;
  /**
   * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
   */
  public value?: (fhir.FhirDateTime|fhir.Period|fhir.Duration)|undefined;
  readonly __valueIsChoice:true = true;
  /**
   * Default constructor for DataRequirementDateFilter - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DataRequirementDateFilterArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['path']) { this.path = new fhir.FhirString({value: source.path}); }
    if (source['searchParam']) { this.searchParam = new fhir.FhirString({value: source.searchParam}); }
    if (source['value']) { this.value = source.value; }
    else if (source['valueDateTime']) { this.value = new fhir.FhirDateTime({value: source.valueDateTime}); }
    else if (source['valuePeriod']) { this.value = new fhir.Period(source.valuePeriod); }
    else if (source['valueDuration']) { this.value = new fhir.Duration(source.valueDuration); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["path"]) { outcome.issue!.push(...this.path.doModelValidation().issue!); }
    if (this["searchParam"]) { outcome.issue!.push(...this.searchParam.doModelValidation().issue!); }
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
 * Valid arguments for the DataRequirementSort type.
 */
export interface DataRequirementSortArgs extends fhir.FhirElementArgs {
  /**
   * The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant.
   */
  path: fhir.FhirString|string|undefined;
  /**
   * The direction of the sort, ascending or descending.
   */
  direction: SortDirectionValueSetEnum|null;
}

/**
 * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
 */
export class DataRequirementSort extends fhir.FhirElement {
  readonly __dataType:string = 'DataRequirementSort';
  /**
   * The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant.
   */
  public path: fhir.FhirString|null;
  /**
   * The direction of the sort, ascending or descending.
   */
  public direction: SortDirectionValueSetEnum|null;
  /**
   * Default constructor for DataRequirementSort - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DataRequirementSortArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['path']) { this.path = new fhir.FhirString({value: source.path}); }
    else { this.path = null; }
    if (source['direction']) { this.direction = source.direction; }
    else { this.direction = null; }
  }
  /**
   * Required-bound Value Set for direction
   */
  public static directionRequiredValueSet():SortDirectionValueSetType {
    return SortDirectionValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['path']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property path:fhir.FhirString fhir: DataRequirement.sort.path:string", }));
    }
    if (this["path"]) { outcome.issue!.push(...this.path.doModelValidation().issue!); }
    if (!this['direction']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property direction:SortDirectionValueSetEnum fhir: DataRequirement.sort.direction:code", }));
    }
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
 * Valid arguments for the DataRequirement type.
 */
export interface DataRequirementArgs extends fhir.FhirElementArgs {
  /**
   * The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.
   */
  type: fhir.FhirCode|string|undefined;
  /**
   * The profile of the required data, specified as the uri of the profile definition.
   */
  profile?: fhir.FhirCanonical[]|string[]|undefined;
  /**
   * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  subject?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  subjectCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  subjectReference?: fhir.ReferenceArgs|undefined;
  /**
   * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. 
   * The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
   */
  mustSupport?: fhir.FhirString[]|string[]|undefined;
  /**
   * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
   */
  codeFilter?: fhir.DataRequirementCodeFilterArgs[]|undefined;
  /**
   * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
   */
  dateFilter?: fhir.DataRequirementDateFilterArgs[]|undefined;
  /**
   * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5".
   */
  limit?: fhir.FhirPositiveInt|number|undefined;
  /**
   * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
   */
  sort?: fhir.DataRequirementSortArgs[]|undefined;
}

/**
 * Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.
 */
export class DataRequirement extends fhir.FhirElement {
  readonly __dataType:string = 'DataRequirement';
  /**
   * The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.
   */
  public type: fhir.FhirCode|null;
  /**
   * The profile of the required data, specified as the uri of the profile definition.
   */
  public profile?: fhir.FhirCanonical[]|undefined = [];
  /**
   * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  public subject?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  readonly __subjectIsChoice:true = true;
  /**
   * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. 
   * The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
   */
  public mustSupport?: fhir.FhirString[]|undefined = [];
  /**
   * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
   */
  public codeFilter?: fhir.DataRequirementCodeFilter[]|undefined = [];
  /**
   * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
   */
  public dateFilter?: fhir.DataRequirementDateFilter[]|undefined = [];
  /**
   * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5".
   */
  public limit?: fhir.FhirPositiveInt|undefined;
  /**
   * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
   */
  public sort?: fhir.DataRequirementSort[]|undefined = [];
  /**
   * Default constructor for DataRequirement - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DataRequirementArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.FhirCode({value: source.type}); }
    else { this.type = null; }
    if (source['profile']) { this.profile = source.profile.map((x) => new fhir.FhirCanonical({value: x})); }
    if (source['subject']) { this.subject = source.subject; }
    else if (source['subjectCodeableConcept']) { this.subject = new fhir.CodeableConcept(source.subjectCodeableConcept); }
    else if (source['subjectReference']) { this.subject = new fhir.Reference(source.subjectReference); }
    if (source['mustSupport']) { this.mustSupport = source.mustSupport.map((x) => new fhir.FhirString({value: x})); }
    if (source['codeFilter']) { this.codeFilter = source.codeFilter.map((x) => new fhir.DataRequirementCodeFilter(x)); }
    if (source['dateFilter']) { this.dateFilter = source.dateFilter.map((x) => new fhir.DataRequirementDateFilter(x)); }
    if (source['limit']) { this.limit = new fhir.FhirPositiveInt({value: source.limit}); }
    if (source['sort']) { this.sort = source.sort.map((x) => new fhir.DataRequirementSort(x)); }
  }
  /**
   * Required-bound Value Set for type
   */
  public static typeRequiredValueSet():AllTypesValueSetType {
    return AllTypesValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['type']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property type:fhir.FhirCode fhir: DataRequirement.type:code", }));
    }
    if (this["type"]) { outcome.issue!.push(...this.type.doModelValidation().issue!); }
    if (this["profile"]) { this.profile.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["mustSupport"]) { this.mustSupport.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["codeFilter"]) { this.codeFilter.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["dateFilter"]) { this.dateFilter.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["limit"]) { outcome.issue!.push(...this.limit.doModelValidation().issue!); }
    if (this["sort"]) { this.sort.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
