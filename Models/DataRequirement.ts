// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../models'
import * as fhirInterfaces from '../interfaces'
/**
 * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
 */
export class DataRequirementCodeFilter extends fhirModels.Element implements fhirInterfaces.IDataRequirementCodeFilter {
  /**
   * The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes.
   */
  code?: fhirModels.Coding[]|undefined;
  /**
   * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
   */
  path?: string|undefined;
  _path?: fhirModels.Element|undefined;
  /**
   * A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.
   */
  searchParam?: string|undefined;
  _searchParam?: fhirModels.Element|undefined;
  /**
   * The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
   */
  valueSet?: string|undefined;
  _valueSet?: fhirModels.Element|undefined;
  /**
   * Default constructor for DataRequirementCodeFilter from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IDataRequirementCodeFilter>) {
    super(source);
    if (source["code"] !== undefined) { this.code = source.code.map((x) => new fhirModels.Coding(x)); }
    if (source["path"] !== undefined) { this.path = source.path; }
    if (source["_path"] !== undefined) { this._path = new fhirModels.Element(source._path); }
    if (source["searchParam"] !== undefined) { this.searchParam = source.searchParam; }
    if (source["_searchParam"] !== undefined) { this._searchParam = new fhirModels.Element(source._searchParam); }
    if (source["valueSet"] !== undefined) { this.valueSet = source.valueSet; }
    if (source["_valueSet"] !== undefined) { this._valueSet = new fhirModels.Element(source._valueSet); }
  }
  /**
   * Check if the current DataRequirementCodeFilter contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a DataRequirementCodeFilter from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IDataRequirementCodeFilter):DataRequirementCodeFilter {
    var dest:DataRequirementCodeFilter = new DataRequirementCodeFilter(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `DataRequirementCodeFilter is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
 */
export class DataRequirementDateFilter extends fhirModels.Element implements fhirInterfaces.IDataRequirementDateFilter {
  /**
   * The path attribute contains a [Simple FHIR Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
   */
  path?: string|undefined;
  _path?: fhirModels.Element|undefined;
  /**
   * A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing.
   */
  searchParam?: string|undefined;
  _searchParam?: fhirModels.Element|undefined;
  /**
   * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
   */
  valueDateTime?: string|undefined;
  _valueDateTime?: fhirModels.Element|undefined;
  /**
   * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
   */
  valuePeriod?: fhirModels.Period|undefined;
  /**
   * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
   */
  valueDuration?: fhirModels.Duration|undefined;
  /**
   * Default constructor for DataRequirementDateFilter from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IDataRequirementDateFilter>) {
    super(source);
    if (source["path"] !== undefined) { this.path = source.path; }
    if (source["_path"] !== undefined) { this._path = new fhirModels.Element(source._path); }
    if (source["searchParam"] !== undefined) { this.searchParam = source.searchParam; }
    if (source["_searchParam"] !== undefined) { this._searchParam = new fhirModels.Element(source._searchParam); }
    if (source["valueDateTime"] !== undefined) { this.valueDateTime = source.valueDateTime; }
    if (source["_valueDateTime"] !== undefined) { this._valueDateTime = new fhirModels.Element(source._valueDateTime); }
    if (source["valuePeriod"] !== undefined) { this.valuePeriod = new fhirModels.Period(source.valuePeriod); }
    if (source["valueDuration"] !== undefined) { this.valueDuration = new fhirModels.Duration(source.valueDuration); }
  }
  /**
   * Check if the current DataRequirementDateFilter contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a DataRequirementDateFilter from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IDataRequirementDateFilter):DataRequirementDateFilter {
    var dest:DataRequirementDateFilter = new DataRequirementDateFilter(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `DataRequirementDateFilter is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
 */
export class DataRequirementSort extends fhirModels.Element implements fhirInterfaces.IDataRequirementSort {
  /**
   * The direction of the sort, ascending or descending.
   */
  direction: DataRequirementSortDirectionEnum|undefined;
  _direction?: fhirModels.Element|undefined;
  /**
   * The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant.
   */
  path: string|undefined;
  _path?: fhirModels.Element|undefined;
  /**
   * Default constructor for DataRequirementSort from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IDataRequirementSort>) {
    super(source);
    if (source["direction"] !== undefined) { this.direction = source.direction; }
    if (source["_direction"] !== undefined) { this._direction = new fhirModels.Element(source._direction); }
    if (source["path"] !== undefined) { this.path = source.path; }
    if (source["_path"] !== undefined) { this._path = new fhirModels.Element(source._path); }
  }
  /**
   * Check if the current DataRequirementSort contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["direction"] === undefined) { missingElements.push("direction"); }
    if (this["path"] === undefined) { missingElements.push("path"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a DataRequirementSort from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IDataRequirementSort):DataRequirementSort {
    var dest:DataRequirementSort = new DataRequirementSort(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `DataRequirementSort is missing elements: ${missingElements.join(", ")}`
     }
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
/**
 * Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.
 */
export class DataRequirement extends fhirModels.Element implements fhirInterfaces.IDataRequirement {
  /**
   * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
   */
  codeFilter?: fhirModels.DataRequirementCodeFilter[]|undefined;
  /**
   * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
   */
  dateFilter?: fhirModels.DataRequirementDateFilter[]|undefined;
  /**
   * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5".
   */
  limit?: number|undefined;
  _limit?: fhirModels.Element|undefined;
  /**
   * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. 
   * The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
   */
  mustSupport?: string[]|undefined;
  _mustSupport?: fhirModels.Element[]|undefined;
  /**
   * The profile of the required data, specified as the uri of the profile definition.
   */
  profile?: string[]|undefined;
  _profile?: fhirModels.Element[]|undefined;
  /**
   * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
   */
  sort?: fhirModels.DataRequirementSort[]|undefined;
  /**
   * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  subjectCodeableConcept?: fhirModels.CodeableConcept|undefined;
  /**
   * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  subjectReference?: fhirModels.Reference|undefined;
  /**
   * The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.
   */
  type: string|undefined;
  _type?: fhirModels.Element|undefined;
  /**
   * Default constructor for DataRequirement from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IDataRequirement>) {
    super(source);
    if (source["codeFilter"] !== undefined) { this.codeFilter = source.codeFilter.map((x) => new fhirModels.DataRequirementCodeFilter(x)); }
    if (source["dateFilter"] !== undefined) { this.dateFilter = source.dateFilter.map((x) => new fhirModels.DataRequirementDateFilter(x)); }
    if (source["limit"] !== undefined) { this.limit = source.limit; }
    if (source["_limit"] !== undefined) { this._limit = new fhirModels.Element(source._limit); }
    if (source["mustSupport"] !== undefined) { this.mustSupport = source.mustSupport.map((x) => (x)); }
    if (source["_mustSupport"] !== undefined) { this._mustSupport = source._mustSupport.map((x) => new fhirModels.Element(x)); }
    if (source["profile"] !== undefined) { this.profile = source.profile.map((x) => (x)); }
    if (source["_profile"] !== undefined) { this._profile = source._profile.map((x) => new fhirModels.Element(x)); }
    if (source["sort"] !== undefined) { this.sort = source.sort.map((x) => new fhirModels.DataRequirementSort(x)); }
    if (source["subjectCodeableConcept"] !== undefined) { this.subjectCodeableConcept = new fhirModels.CodeableConcept(source.subjectCodeableConcept); }
    if (source["subjectReference"] !== undefined) { this.subjectReference = new fhirModels.Reference(source.subjectReference); }
    if (source["type"] !== undefined) { this.type = source.type; }
    if (source["_type"] !== undefined) { this._type = new fhirModels.Element(source._type); }
  }
  /**
   * Check if the current DataRequirement contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["type"] === undefined) { missingElements.push("type"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a DataRequirement from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IDataRequirement):DataRequirement {
    var dest:DataRequirement = new DataRequirement(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `DataRequirement is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
