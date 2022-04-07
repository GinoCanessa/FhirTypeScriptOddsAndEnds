import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
 */
export declare class DataRequirementCodeFilter extends fhirModels.Element implements fhirInterfaces.IDataRequirementCodeFilter {
    /**
     * The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes.
     */
    code?: fhirModels.Coding[] | undefined;
    /**
     * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: string | undefined;
    _path?: fhirModels.Element | undefined;
    /**
     * A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.
     */
    searchParam?: string | undefined;
    _searchParam?: fhirModels.Element | undefined;
    /**
     * The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
     */
    valueSet?: string | undefined;
    _valueSet?: fhirModels.Element | undefined;
    /**
     * Default constructor for DataRequirementCodeFilter from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IDataRequirementCodeFilter);
}
/**
 * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
 */
export declare class DataRequirementDateFilter extends fhirModels.Element implements fhirInterfaces.IDataRequirementDateFilter {
    /**
     * The path attribute contains a [Simple FHIR Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: string | undefined;
    _path?: fhirModels.Element | undefined;
    /**
     * A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing.
     */
    searchParam?: string | undefined;
    _searchParam?: fhirModels.Element | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhirModels.Element | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
     */
    valuePeriod?: fhirModels.Period | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
     */
    valueDuration?: fhirModels.Duration | undefined;
    /**
     * Default constructor for DataRequirementDateFilter from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IDataRequirementDateFilter);
}
/**
 * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
 */
export declare class DataRequirementSort extends fhirModels.Element implements fhirInterfaces.IDataRequirementSort {
    /**
     * The direction of the sort, ascending or descending.
     */
    direction: DataRequirementSortDirectionEnum;
    _direction?: fhirModels.Element | undefined;
    /**
     * The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant.
     */
    path: string;
    _path?: fhirModels.Element | undefined;
    /**
     * Default constructor for DataRequirementSort from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IDataRequirementSort);
}
/**
 * Code Values for the DataRequirement.sort.direction field
 */
export declare enum DataRequirementSortDirectionEnum {
    ASCENDING = "ascending",
    DESCENDING = "descending"
}
/**
 * Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.
 */
export declare class DataRequirement extends fhirModels.Element implements fhirInterfaces.IDataRequirement {
    /**
     * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
     */
    codeFilter?: fhirModels.DataRequirementCodeFilter[] | undefined;
    /**
     * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
     */
    dateFilter?: fhirModels.DataRequirementDateFilter[] | undefined;
    /**
     * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5".
     */
    limit?: number | undefined;
    _limit?: fhirModels.Element | undefined;
    /**
     * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available.
     * The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
     */
    mustSupport?: string[] | undefined;
    _mustSupport?: fhirModels.Element[] | undefined;
    /**
     * The profile of the required data, specified as the uri of the profile definition.
     */
    profile?: string[] | undefined;
    _profile?: fhirModels.Element[] | undefined;
    /**
     * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
     */
    sort?: fhirModels.DataRequirementSort[] | undefined;
    /**
     * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectReference?: fhirModels.Reference | undefined;
    /**
     * The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.
     */
    type: string;
    _type?: fhirModels.Element | undefined;
    /**
     * Default constructor for DataRequirement from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IDataRequirement);
}
//# sourceMappingURL=DataRequirement.d.ts.map