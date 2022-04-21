import * as fhir from '../fhir.js';
import { SortDirectionValueSetType, SortDirectionValueSetEnum } from '../fhirValueSets/SortDirectionValueSet.js';
import { AllTypesValueSetType } from '../fhirValueSets/AllTypesValueSet.js';
import { SubjectTypeValueSetType } from '../fhirValueSets/SubjectTypeValueSet.js';
/**
 * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
 */
export declare type IDataRequirementCodeFilter = fhir.IFhirElement & {
    /**
     * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.codeFilter.path
     */
    _path?: fhir.IFhirElement | undefined;
    /**
     * A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.
     */
    searchParam?: string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.codeFilter.searchParam
     */
    _searchParam?: fhir.IFhirElement | undefined;
    /**
     * The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
     */
    valueSet?: string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.codeFilter.valueSet
     */
    _valueSet?: fhir.IFhirElement | undefined;
    /**
     * The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes.
     */
    code?: fhir.ICoding[] | undefined;
};
/**
 * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
 */
export declare type IDataRequirementDateFilter = fhir.IFhirElement & {
    /**
     * The path attribute contains a [Simple FHIR Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.dateFilter.path
     */
    _path?: fhir.IFhirElement | undefined;
    /**
     * A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing.
     */
    searchParam?: string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.dateFilter.searchParam
     */
    _searchParam?: fhir.IFhirElement | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.dateFilter.value[x]
     */
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
     * The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant.
     */
    path: string | null;
    /**
     * Extended properties for primitive element: DataRequirement.sort.path
     */
    _path?: fhir.IFhirElement | undefined;
    /**
     * The direction of the sort, ascending or descending.
     */
    direction: SortDirectionValueSetEnum | null;
    /**
     * Extended properties for primitive element: DataRequirement.sort.direction
     */
    _direction?: fhir.IFhirElement | undefined;
};
/**
 * Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.
 */
export declare type IDataRequirement = fhir.IFhirElement & {
    /**
     * The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.
     */
    type: string | null;
    /**
     * Extended properties for primitive element: DataRequirement.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * The profile of the required data, specified as the uri of the profile definition.
     */
    profile?: string[] | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.profile
     */
    _profile?: fhir.IFhirElement[] | undefined;
    /**
     * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectReference?: fhir.IReference | undefined;
    /**
     * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available.
     * The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
     */
    mustSupport?: string[] | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.mustSupport
     */
    _mustSupport?: fhir.IFhirElement[] | undefined;
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
    /**
     * Extended properties for primitive element: DataRequirement.limit
     */
    _limit?: fhir.IFhirElement | undefined;
    /**
     * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
     */
    sort?: fhir.IDataRequirementSort[] | undefined;
};
/**
 * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
 */
export declare class DataRequirementCodeFilter extends fhir.FhirElement implements IDataRequirementCodeFilter {
    /**
     * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.codeFilter.path
     */
    _path?: fhir.FhirElement | undefined;
    /**
     * A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.
     */
    searchParam?: string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.codeFilter.searchParam
     */
    _searchParam?: fhir.FhirElement | undefined;
    /**
     * The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
     */
    valueSet?: string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.codeFilter.valueSet
     */
    _valueSet?: fhir.FhirElement | undefined;
    /**
     * The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes.
     */
    code?: fhir.Coding[] | undefined;
    /**
     * Default constructor for DataRequirementCodeFilter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IDataRequirementCodeFilter>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
 */
export declare class DataRequirementDateFilter extends fhir.FhirElement implements IDataRequirementDateFilter {
    /**
     * The path attribute contains a [Simple FHIR Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.dateFilter.path
     */
    _path?: fhir.FhirElement | undefined;
    /**
     * A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing.
     */
    searchParam?: string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.dateFilter.searchParam
     */
    _searchParam?: fhir.FhirElement | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.dateFilter.value[x]
     */
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
    constructor(source?: Partial<IDataRequirementDateFilter>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
 */
export declare class DataRequirementSort extends fhir.FhirElement implements IDataRequirementSort {
    /**
     * The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant.
     */
    path: string | null;
    /**
     * Extended properties for primitive element: DataRequirement.sort.path
     */
    _path?: fhir.FhirElement | undefined;
    /**
     * The direction of the sort, ascending or descending.
     */
    direction: SortDirectionValueSetEnum | null;
    /**
     * Extended properties for primitive element: DataRequirement.sort.direction
     */
    _direction?: fhir.FhirElement | undefined;
    /**
     * Default constructor for DataRequirementSort - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IDataRequirementSort>);
    /**
     * Required-bound Value Set for direction
     */
    directionRequiredValueSet(): SortDirectionValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.
 */
export declare class DataRequirement extends fhir.FhirElement implements IDataRequirement {
    /**
     * The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.
     */
    type: string | null;
    /**
     * Extended properties for primitive element: DataRequirement.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * The profile of the required data, specified as the uri of the profile definition.
     */
    profile?: string[] | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.profile
     */
    _profile?: fhir.FhirElement[] | undefined;
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
    _mustSupport?: fhir.FhirElement[] | undefined;
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
    _limit?: fhir.FhirElement | undefined;
    /**
     * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
     */
    sort?: fhir.DataRequirementSort[] | undefined;
    /**
     * Default constructor for DataRequirement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IDataRequirement>);
    /**
     * Required-bound Value Set for type
     */
    typeRequiredValueSet(): AllTypesValueSetType;
    /**
     * Extensible-bound Value Set for subjectCodeableConcept
     */
    subjectCodeableConceptExtensibleValueSet(): SubjectTypeValueSetType;
    /**
     * Extensible-bound Value Set for subjectReference
     */
    subjectReferenceExtensibleValueSet(): SubjectTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=DataRequirement.d.ts.map