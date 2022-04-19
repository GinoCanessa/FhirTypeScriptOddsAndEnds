import * as fhir from '../fhir';
/**
 * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
 */
export declare type IDataRequirementCodeFilter = fhir.IFhirElement & {
    /**
     * The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes.
     */
    code?: fhir.ICoding[] | undefined;
    /**
     * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: string | undefined;
    _path?: fhir.IFhirElement | undefined;
    /**
     * A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.
     */
    searchParam?: string | undefined;
    _searchParam?: fhir.IFhirElement | undefined;
    /**
     * The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
     */
    valueSet?: string | undefined;
    _valueSet?: fhir.IFhirElement | undefined;
};
/**
 * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
 */
export declare type IDataRequirementDateFilter = fhir.IFhirElement & {
    /**
     * The path attribute contains a [Simple FHIR Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: string | undefined;
    _path?: fhir.IFhirElement | undefined;
    /**
     * A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing.
     */
    searchParam?: string | undefined;
    _searchParam?: fhir.IFhirElement | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhir.IFhirElement | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
     */
    valuePeriod?: fhir.IPeriod | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
     */
    valueDuration?: fhir.IDuration | undefined;
};
/**
 * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
 */
export declare type IDataRequirementSort = fhir.IFhirElement & {
    /**
     * The direction of the sort, ascending or descending.
     */
    direction: DataRequirementSortDirectionEnum | null;
    _direction?: fhir.IFhirElement | undefined;
    /**
     * The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant.
     */
    path: string | null;
    _path?: fhir.IFhirElement | undefined;
};
/**
 * Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.
 */
export declare type IDataRequirement = fhir.IFhirElement & {
    /**
     * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
     */
    codeFilter?: fhir.IDataRequirementCodeFilter[] | undefined;
    /**
     * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
     */
    dateFilter?: fhir.IDataRequirementDateFilter[] | undefined;
    /**
     * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5".
     */
    limit?: number | undefined;
    _limit?: fhir.IFhirElement | undefined;
    /**
     * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available.
     * The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
     */
    mustSupport?: string[] | undefined;
    _mustSupport?: fhir.IFhirElement[] | undefined;
    /**
     * The profile of the required data, specified as the uri of the profile definition.
     */
    profile?: string[] | undefined;
    _profile?: fhir.IFhirElement[] | undefined;
    /**
     * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
     */
    sort?: fhir.IDataRequirementSort[] | undefined;
    /**
     * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectReference?: fhir.IReference | undefined;
    /**
     * The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.
     */
    type: string | null;
    _type?: fhir.IFhirElement | undefined;
};
/**
 * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
 */
export declare class DataRequirementCodeFilter extends fhir.FhirElement implements fhir.IDataRequirementCodeFilter {
    /**
     * The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes.
     */
    code?: fhir.Coding[] | undefined;
    /**
     * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: string | undefined;
    _path?: fhir.FhirElement | undefined;
    /**
     * A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.
     */
    searchParam?: string | undefined;
    _searchParam?: fhir.FhirElement | undefined;
    /**
     * The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
     */
    valueSet?: string | undefined;
    _valueSet?: fhir.FhirElement | undefined;
    /**
     * Default constructor for DataRequirementCodeFilter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDataRequirementCodeFilter>);
    /**
     * Check if the current DataRequirementCodeFilter contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a DataRequirementCodeFilter from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IDataRequirementCodeFilter): DataRequirementCodeFilter;
}
/**
 * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
 */
export declare class DataRequirementDateFilter extends fhir.FhirElement implements fhir.IDataRequirementDateFilter {
    /**
     * The path attribute contains a [Simple FHIR Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: string | undefined;
    _path?: fhir.FhirElement | undefined;
    /**
     * A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing.
     */
    searchParam?: string | undefined;
    _searchParam?: fhir.FhirElement | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhir.FhirElement | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
     */
    valuePeriod?: fhir.Period | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
     */
    valueDuration?: fhir.Duration | undefined;
    /**
     * Default constructor for DataRequirementDateFilter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDataRequirementDateFilter>);
    /**
     * Check if the current DataRequirementDateFilter contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a DataRequirementDateFilter from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IDataRequirementDateFilter): DataRequirementDateFilter;
}
/**
 * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
 */
export declare class DataRequirementSort extends fhir.FhirElement implements fhir.IDataRequirementSort {
    /**
     * The direction of the sort, ascending or descending.
     */
    direction: DataRequirementSortDirectionEnum | null;
    _direction?: fhir.FhirElement | undefined;
    /**
     * The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant.
     */
    path: string | null;
    _path?: fhir.FhirElement | undefined;
    /**
     * Default constructor for DataRequirementSort - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDataRequirementSort>);
    /**
     * Check if the current DataRequirementSort contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a DataRequirementSort from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IDataRequirementSort): DataRequirementSort;
}
/**
 * Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.
 */
export declare class DataRequirement extends fhir.FhirElement implements fhir.IDataRequirement {
    /**
     * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
     */
    codeFilter?: fhir.DataRequirementCodeFilter[] | undefined;
    /**
     * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
     */
    dateFilter?: fhir.DataRequirementDateFilter[] | undefined;
    /**
     * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5".
     */
    limit?: number | undefined;
    _limit?: fhir.FhirElement | undefined;
    /**
     * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available.
     * The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
     */
    mustSupport?: string[] | undefined;
    _mustSupport?: fhir.FhirElement[] | undefined;
    /**
     * The profile of the required data, specified as the uri of the profile definition.
     */
    profile?: string[] | undefined;
    _profile?: fhir.FhirElement[] | undefined;
    /**
     * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
     */
    sort?: fhir.DataRequirementSort[] | undefined;
    /**
     * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectReference?: fhir.Reference | undefined;
    /**
     * The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.
     */
    type: string | null;
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for DataRequirement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDataRequirement>);
    /**
     * Check if the current DataRequirement contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a DataRequirement from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IDataRequirement): DataRequirement;
}
/**
 * Code Values for the DataRequirement.sort.direction field
 */
export declare enum DataRequirementSortDirectionEnum {
    ASCENDING = "ascending",
    DESCENDING = "descending"
}
//# sourceMappingURL=DataRequirement.d.ts.map