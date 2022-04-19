// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
 */
export type IDataRequirementCodeFilter = fhir.IFhirElement & {
  /**
   * The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes.
   */
  code?: fhir.ICoding[]|undefined;
  /**
   * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
   */
  path?: string|undefined;
  _path?: fhir.IFhirElement|undefined;
  /**
   * A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.
   */
  searchParam?: string|undefined;
  _searchParam?: fhir.IFhirElement|undefined;
  /**
   * The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
   */
  valueSet?: string|undefined;
  _valueSet?: fhir.IFhirElement|undefined;
}
/**
 * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
 */
export type IDataRequirementDateFilter = fhir.IFhirElement & {
  /**
   * The path attribute contains a [Simple FHIR Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
   */
  path?: string|undefined;
  _path?: fhir.IFhirElement|undefined;
  /**
   * A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing.
   */
  searchParam?: string|undefined;
  _searchParam?: fhir.IFhirElement|undefined;
  /**
   * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
   */
  valueDateTime?: string|undefined;
  _valueDateTime?: fhir.IFhirElement|undefined;
  /**
   * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
   */
  valuePeriod?: fhir.IPeriod|undefined;
  /**
   * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
   */
  valueDuration?: fhir.IDuration|undefined;
}
/**
 * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
 */
export type IDataRequirementSort = fhir.IFhirElement & {
  /**
   * The direction of the sort, ascending or descending.
   */
  direction: DataRequirementSortDirectionEnum|null;
  _direction?: fhir.IFhirElement|undefined;
  /**
   * The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant.
   */
  path: string|null;
  _path?: fhir.IFhirElement|undefined;
}
/**
 * Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.
 */
export type IDataRequirement = fhir.IFhirElement & {
  /**
   * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
   */
  codeFilter?: fhir.IDataRequirementCodeFilter[]|undefined;
  /**
   * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
   */
  dateFilter?: fhir.IDataRequirementDateFilter[]|undefined;
  /**
   * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5".
   */
  limit?: number|undefined;
  _limit?: fhir.IFhirElement|undefined;
  /**
   * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. 
   * The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
   */
  mustSupport?: string[]|undefined;
  _mustSupport?: fhir.IFhirElement[]|undefined;
  /**
   * The profile of the required data, specified as the uri of the profile definition.
   */
  profile?: string[]|undefined;
  _profile?: fhir.IFhirElement[]|undefined;
  /**
   * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
   */
  sort?: fhir.IDataRequirementSort[]|undefined;
  /**
   * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  subjectCodeableConcept?: fhir.ICodeableConcept|undefined;
  /**
   * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  subjectReference?: fhir.IReference|undefined;
  /**
   * The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.
   */
  type: string|null;
  _type?: fhir.IFhirElement|undefined;
}
/**
 * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
 */
export class DataRequirementCodeFilter extends fhir.FhirElement implements fhir.IDataRequirementCodeFilter {
  /**
   * The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes.
   */
  public code?: fhir.Coding[]|undefined;
  /**
   * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
   */
  public path?: string|undefined;
  public _path?: fhir.FhirElement|undefined;
  /**
   * A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.
   */
  public searchParam?: string|undefined;
  public _searchParam?: fhir.FhirElement|undefined;
  /**
   * The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
   */
  public valueSet?: string|undefined;
  public _valueSet?: fhir.FhirElement|undefined;
  /**
   * Default constructor for DataRequirementCodeFilter - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IDataRequirementCodeFilter> = {}) {
    super(source);
    if (source["code"]) { this.code = source.code.map((x:Partial<fhir.ICoding>) => new fhir.Coding(x)); }
    if (source["path"]) { this.path = source.path; }
    if (source["_path"]) { this._path = new fhir.FhirElement(source._path!); }
    if (source["searchParam"]) { this.searchParam = source.searchParam; }
    if (source["_searchParam"]) { this._searchParam = new fhir.FhirElement(source._searchParam!); }
    if (source["valueSet"]) { this.valueSet = source.valueSet; }
    if (source["_valueSet"]) { this._valueSet = new fhir.FhirElement(source._valueSet!); }
  }
  /**
   * Check if the current DataRequirementCodeFilter contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a DataRequirementCodeFilter from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IDataRequirementCodeFilter):DataRequirementCodeFilter {
    var dest:DataRequirementCodeFilter = new DataRequirementCodeFilter(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `DataRequirementCodeFilter is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
 */
export class DataRequirementDateFilter extends fhir.FhirElement implements fhir.IDataRequirementDateFilter {
  /**
   * The path attribute contains a [Simple FHIR Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
   */
  public path?: string|undefined;
  public _path?: fhir.FhirElement|undefined;
  /**
   * A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing.
   */
  public searchParam?: string|undefined;
  public _searchParam?: fhir.FhirElement|undefined;
  /**
   * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
   */
  public valueDateTime?: string|undefined;
  public _valueDateTime?: fhir.FhirElement|undefined;
  /**
   * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
   */
  public valuePeriod?: fhir.Period|undefined;
  /**
   * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
   */
  public valueDuration?: fhir.Duration|undefined;
  /**
   * Default constructor for DataRequirementDateFilter - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IDataRequirementDateFilter> = {}) {
    super(source);
    if (source["path"]) { this.path = source.path; }
    if (source["_path"]) { this._path = new fhir.FhirElement(source._path!); }
    if (source["searchParam"]) { this.searchParam = source.searchParam; }
    if (source["_searchParam"]) { this._searchParam = new fhir.FhirElement(source._searchParam!); }
    if (source["valueDateTime"]) { this.valueDateTime = source.valueDateTime; }
    if (source["_valueDateTime"]) { this._valueDateTime = new fhir.FhirElement(source._valueDateTime!); }
    if (source["valuePeriod"]) { this.valuePeriod = new fhir.Period(source.valuePeriod!); }
    if (source["valueDuration"]) { this.valueDuration = new fhir.Duration(source.valueDuration!); }
  }
  /**
   * Check if the current DataRequirementDateFilter contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a DataRequirementDateFilter from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IDataRequirementDateFilter):DataRequirementDateFilter {
    var dest:DataRequirementDateFilter = new DataRequirementDateFilter(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `DataRequirementDateFilter is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
 */
export class DataRequirementSort extends fhir.FhirElement implements fhir.IDataRequirementSort {
  /**
   * The direction of the sort, ascending or descending.
   */
  public direction: DataRequirementSortDirectionEnum|null;
  public _direction?: fhir.FhirElement|undefined;
  /**
   * The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant.
   */
  public path: string|null;
  public _path?: fhir.FhirElement|undefined;
  /**
   * Default constructor for DataRequirementSort - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IDataRequirementSort> = {}) {
    super(source);
    this.direction = null;
    if (source["direction"]) { this.direction = source.direction; }
    if (this.direction === undefined) { this.direction = null }
    if (source["_direction"]) { this._direction = new fhir.FhirElement(source._direction!); }
    this.path = null;
    if (source["path"]) { this.path = source.path; }
    if (this.path === undefined) { this.path = null }
    if (source["_path"]) { this._path = new fhir.FhirElement(source._path!); }
  }
  /**
   * Check if the current DataRequirementSort contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["direction"] === undefined) { missingElements.push("direction"); }
    if (this["path"] === undefined) { missingElements.push("path"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a DataRequirementSort from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IDataRequirementSort):DataRequirementSort {
    var dest:DataRequirementSort = new DataRequirementSort(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `DataRequirementSort is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.
 */
export class DataRequirement extends fhir.FhirElement implements fhir.IDataRequirement {
  /**
   * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
   */
  public codeFilter?: fhir.DataRequirementCodeFilter[]|undefined;
  /**
   * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
   */
  public dateFilter?: fhir.DataRequirementDateFilter[]|undefined;
  /**
   * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5".
   */
  public limit?: number|undefined;
  public _limit?: fhir.FhirElement|undefined;
  /**
   * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. 
   * The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
   */
  public mustSupport?: string[]|undefined;
  public _mustSupport?: fhir.FhirElement[]|undefined;
  /**
   * The profile of the required data, specified as the uri of the profile definition.
   */
  public profile?: string[]|undefined;
  public _profile?: fhir.FhirElement[]|undefined;
  /**
   * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
   */
  public sort?: fhir.DataRequirementSort[]|undefined;
  /**
   * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  public subjectCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  public subjectReference?: fhir.Reference|undefined;
  /**
   * The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.
   */
  public type: string|null;
  public _type?: fhir.FhirElement|undefined;
  /**
   * Default constructor for DataRequirement - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IDataRequirement> = {}) {
    super(source);
    if (source["codeFilter"]) { this.codeFilter = source.codeFilter.map((x:Partial<fhir.IDataRequirementCodeFilter>) => new fhir.DataRequirementCodeFilter(x)); }
    if (source["dateFilter"]) { this.dateFilter = source.dateFilter.map((x:Partial<fhir.IDataRequirementDateFilter>) => new fhir.DataRequirementDateFilter(x)); }
    if (source["limit"]) { this.limit = source.limit; }
    if (source["_limit"]) { this._limit = new fhir.FhirElement(source._limit!); }
    if (source["mustSupport"]) { this.mustSupport = source.mustSupport.map((x) => (x)); }
    if (source["_mustSupport"]) { this._mustSupport = source._mustSupport.map((x:Partial<fhir.IFhirElement>) => new fhir.FhirElement(x)); }
    if (source["profile"]) { this.profile = source.profile.map((x) => (x)); }
    if (source["_profile"]) { this._profile = source._profile.map((x:Partial<fhir.IFhirElement>) => new fhir.FhirElement(x)); }
    if (source["sort"]) { this.sort = source.sort.map((x:Partial<fhir.IDataRequirementSort>) => new fhir.DataRequirementSort(x)); }
    if (source["subjectCodeableConcept"]) { this.subjectCodeableConcept = new fhir.CodeableConcept(source.subjectCodeableConcept!); }
    if (source["subjectReference"]) { this.subjectReference = new fhir.Reference(source.subjectReference!); }
    this.type = null;
    if (source["type"]) { this.type = source.type; }
    if (this.type === undefined) { this.type = null }
    if (source["_type"]) { this._type = new fhir.FhirElement(source._type!); }
  }
  /**
   * Check if the current DataRequirement contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["type"] === undefined) { missingElements.push("type"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a DataRequirement from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IDataRequirement):DataRequirement {
    var dest:DataRequirement = new DataRequirement(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `DataRequirement is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the DataRequirement.sort.direction field
 */
export enum DataRequirementSortDirectionEnum {
  ASCENDING = "ascending",
  DESCENDING = "descending",
}