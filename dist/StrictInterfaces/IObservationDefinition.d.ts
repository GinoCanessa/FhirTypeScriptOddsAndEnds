import * as fhirInterfaces from '../strictinterfaces';
/**
 * Characteristics for quantitative results of this observation.
 */
export interface IObservationDefinitionQuantitativeDetails extends fhirInterfaces.IBackboneElement {
    /**
     * Factor for converting value expressed with SI unit to value expressed with customary unit.
     */
    conversionFactor?: number | undefined;
    _conversionFactor?: fhirInterfaces.IElement | undefined;
    /**
     * Customary unit used to report quantitative results of observations conforming to this ObservationDefinition.
     */
    customaryUnit?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Number of digits after decimal separator when the results of such observations are of type Quantity.
     */
    decimalPrecision?: number | undefined;
    _decimalPrecision?: fhirInterfaces.IElement | undefined;
    /**
     * SI unit used to report quantitative results of observations conforming to this ObservationDefinition.
     */
    unit?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
 */
export interface IObservationDefinitionQualifiedInterval extends fhirInterfaces.IBackboneElement {
    /**
     * Some analytes vary greatly over age.
     */
    age?: fhirInterfaces.IRange | undefined;
    /**
     * If this element is not present then the global population is assumed.
     */
    appliesTo?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition.
     */
    category?: ObservationDefinitionQualifiedIntervalCategoryEnum | undefined;
    _category?: fhirInterfaces.IElement | undefined;
    /**
     * Text based condition for which the reference range is valid.
     */
    condition?: string | undefined;
    _condition?: fhirInterfaces.IElement | undefined;
    /**
     * Codes to indicate the health context the range applies to. For example, the normal or therapeutic range.
     */
    context?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Sex of the population the range applies to.
     */
    gender?: ObservationDefinitionQualifiedIntervalGenderEnum | undefined;
    _gender?: fhirInterfaces.IElement | undefined;
    /**
     * The gestational age to which this reference range is applicable, in the context of pregnancy.
     */
    gestationalAge?: fhirInterfaces.IRange | undefined;
    /**
     * The low and high values determining the interval. There may be only one of the two.
     */
    range?: fhirInterfaces.IRange | undefined;
}
/**
 * Code Values for the ObservationDefinition.qualifiedInterval.category field
 */
export declare enum ObservationDefinitionQualifiedIntervalCategoryEnum {
    REFERENCE = "reference",
    CRITICAL = "critical",
    ABSOLUTE = "absolute"
}
/**
 * Code Values for the ObservationDefinition.qualifiedInterval.gender field
 */
export declare enum ObservationDefinitionQualifiedIntervalGenderEnum {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other",
    UNKNOWN = "unknown"
}
/**
 * Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
 */
export interface IObservationDefinition extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "ObservationDefinition";
    /**
     * The set of abnormal coded results for the observation conforming to this ObservationDefinition.
     */
    abnormalCodedValueSet?: fhirInterfaces.IReference | undefined;
    /**
     * This element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used for one instance of ObservationDefinition. The level of granularity is defined by the category concepts in the value set.
     */
    category?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Describes what will be observed. Sometimes this is called the observation "name".
     */
    code: fhirInterfaces.ICodeableConcept;
    /**
     * The set of critical coded results for the observation conforming to this ObservationDefinition.
     */
    criticalCodedValueSet?: fhirInterfaces.IReference | undefined;
    /**
     * A unique identifier assigned to this ObservationDefinition artifact.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Only used if not implicit in observation code.
     */
    method?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * An example of observation allowing multiple results is "bacteria identified by culture". Conversely, the measurement of a potassium level allows a single result.
     */
    multipleResultsAllowed?: boolean | undefined;
    _multipleResultsAllowed?: fhirInterfaces.IElement | undefined;
    /**
     * The set of normal coded results for the observations conforming to this ObservationDefinition.
     */
    normalCodedValueSet?: fhirInterfaces.IReference | undefined;
    /**
     * The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.
     */
    permittedDataType?: ObservationDefinitionPermittedDataTypeEnum[] | undefined;
    _permittedDataType?: fhirInterfaces.IElement[] | undefined;
    /**
     * The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition.
     */
    preferredReportName?: string | undefined;
    _preferredReportName?: fhirInterfaces.IElement | undefined;
    /**
     * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
     */
    qualifiedInterval?: fhirInterfaces.IObservationDefinitionQualifiedInterval[] | undefined;
    /**
     * Characteristics for quantitative results of this observation.
     */
    quantitativeDetails?: fhirInterfaces.IObservationDefinitionQuantitativeDetails | undefined;
    /**
     * The set of valid coded results for the observations  conforming to this ObservationDefinition.
     */
    validCodedValueSet?: fhirInterfaces.IReference | undefined;
}
/**
 * Code Values for the ObservationDefinition.permittedDataType field
 */
export declare enum ObservationDefinitionPermittedDataTypeEnum {
    QUANTITY = "Quantity",
    CODEABLECONCEPT = "CodeableConcept",
    STRING = "string",
    BOOLEAN = "boolean",
    INTEGER = "integer",
    RANGE = "Range",
    RATIO = "Ratio",
    SAMPLEDDATA = "SampledData",
    TIME = "time",
    DATETIME = "dateTime",
    PERIOD = "Period"
}
//# sourceMappingURL=IObservationDefinition.d.ts.map