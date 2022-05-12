import * as fhir from '../fhirJson.js';
/**
 * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
 */
export interface DataRequirementCodeFilter extends fhir.FhirElement {
    /**
     * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.codeFilter.path
     */
    _path?: fhir.FhirElement;
    /**
     * A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.
     */
    searchParam?: string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.codeFilter.searchParam
     */
    _searchParam?: fhir.FhirElement;
    /**
     * The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
     */
    valueSet?: string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.codeFilter.valueSet
     */
    _valueSet?: fhir.FhirElement;
    /**
     * The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes.
     */
    code?: fhir.Coding[] | undefined;
}
/**
 * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
 */
export interface DataRequirementDateFilter extends fhir.FhirElement {
    /**
     * The path attribute contains a [Simple FHIR Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.dateFilter.path
     */
    _path?: fhir.FhirElement;
    /**
     * A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing.
     */
    searchParam?: string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.dateFilter.searchParam
     */
    _searchParam?: fhir.FhirElement;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.dateFilter.value[x]
     */
    _valueDateTime?: fhir.FhirElement;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
     */
    valuePeriod?: fhir.Period | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
     */
    valueDuration?: fhir.Duration | undefined;
}
/**
 * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
 */
export interface DataRequirementSort extends fhir.FhirElement {
    /**
     * The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant.
     */
    path: string | null;
    /**
     * Extended properties for primitive element: DataRequirement.sort.path
     */
    _path?: fhir.FhirElement;
    /**
     * The direction of the sort, ascending or descending.
     */
    direction: 'ascending' | 'descending' | null;
}
/**
 * Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.
 */
export interface DataRequirement extends fhir.FhirElement {
    /**
     * The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.
     */
    type: string | null;
    /**
     * Extended properties for primitive element: DataRequirement.type
     */
    _type?: fhir.FhirElement;
    /**
     * The profile of the required data, specified as the uri of the profile definition.
     */
    profile?: string[] | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.profile
     */
    _profile?: (fhir.FhirElement | null)[];
    /**
     * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectReference?: fhir.Reference | undefined;
    /**
     * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available.
     * The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
     */
    mustSupport?: string[] | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.mustSupport
     */
    _mustSupport?: (fhir.FhirElement | null)[];
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
    /**
     * Extended properties for primitive element: DataRequirement.limit
     */
    _limit?: fhir.FhirElement;
    /**
     * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
     */
    sort?: fhir.DataRequirementSort[] | undefined;
}
//# sourceMappingURL=DataRequirement.d.ts.map