import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Characteristics for quantitative results of this observation.
 */
export declare class ObservationDefinitionQuantitativeDetails extends fhirModels.BackboneElement implements fhirInterfaces.IObservationDefinitionQuantitativeDetails {
    /**
     * Factor for converting value expressed with SI unit to value expressed with customary unit.
     */
    conversionFactor?: number | undefined;
    _conversionFactor?: fhirModels.Element | undefined;
    /**
     * Customary unit used to report quantitative results of observations conforming to this ObservationDefinition.
     */
    customaryUnit?: fhirModels.CodeableConcept | undefined;
    /**
     * Number of digits after decimal separator when the results of such observations are of type Quantity.
     */
    decimalPrecision?: number | undefined;
    _decimalPrecision?: fhirModels.Element | undefined;
    /**
     * SI unit used to report quantitative results of observations conforming to this ObservationDefinition.
     */
    unit?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for ObservationDefinitionQuantitativeDetails from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IObservationDefinitionQuantitativeDetails>);
    /**
     * Factory function to create a ObservationDefinitionQuantitativeDetails from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IObservationDefinitionQuantitativeDetails): ObservationDefinitionQuantitativeDetails;
    /**
     * Check if the current ObservationDefinitionQuantitativeDetails contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
 */
export declare class ObservationDefinitionQualifiedInterval extends fhirModels.BackboneElement implements fhirInterfaces.IObservationDefinitionQualifiedInterval {
    /**
     * Some analytes vary greatly over age.
     */
    age?: fhirModels.Range | undefined;
    /**
     * If this element is not present then the global population is assumed.
     */
    appliesTo?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition.
     */
    category?: ObservationDefinitionQualifiedIntervalCategoryEnum | undefined;
    _category?: fhirModels.Element | undefined;
    /**
     * Text based condition for which the reference range is valid.
     */
    condition?: string | undefined;
    _condition?: fhirModels.Element | undefined;
    /**
     * Codes to indicate the health context the range applies to. For example, the normal or therapeutic range.
     */
    context?: fhirModels.CodeableConcept | undefined;
    /**
     * Sex of the population the range applies to.
     */
    gender?: ObservationDefinitionQualifiedIntervalGenderEnum | undefined;
    _gender?: fhirModels.Element | undefined;
    /**
     * The gestational age to which this reference range is applicable, in the context of pregnancy.
     */
    gestationalAge?: fhirModels.Range | undefined;
    /**
     * The low and high values determining the interval. There may be only one of the two.
     */
    range?: fhirModels.Range | undefined;
    /**
     * Default constructor for ObservationDefinitionQualifiedInterval from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IObservationDefinitionQualifiedInterval>);
    /**
     * Factory function to create a ObservationDefinitionQualifiedInterval from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IObservationDefinitionQualifiedInterval): ObservationDefinitionQualifiedInterval;
    /**
     * Check if the current ObservationDefinitionQualifiedInterval contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class ObservationDefinition extends fhirModels.DomainResource implements fhirInterfaces.IObservationDefinition {
    /**
     * Resource Type Name
     */
    readonly resourceType = "ObservationDefinition";
    /**
     * The set of abnormal coded results for the observation conforming to this ObservationDefinition.
     */
    abnormalCodedValueSet?: fhirModels.Reference | undefined;
    /**
     * This element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used for one instance of ObservationDefinition. The level of granularity is defined by the category concepts in the value set.
     */
    category?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Describes what will be observed. Sometimes this is called the observation "name".
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * The set of critical coded results for the observation conforming to this ObservationDefinition.
     */
    criticalCodedValueSet?: fhirModels.Reference | undefined;
    /**
     * A unique identifier assigned to this ObservationDefinition artifact.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Only used if not implicit in observation code.
     */
    method?: fhirModels.CodeableConcept | undefined;
    /**
     * An example of observation allowing multiple results is "bacteria identified by culture". Conversely, the measurement of a potassium level allows a single result.
     */
    multipleResultsAllowed?: boolean | undefined;
    _multipleResultsAllowed?: fhirModels.Element | undefined;
    /**
     * The set of normal coded results for the observations conforming to this ObservationDefinition.
     */
    normalCodedValueSet?: fhirModels.Reference | undefined;
    /**
     * The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.
     */
    permittedDataType?: ObservationDefinitionPermittedDataTypeEnum[] | undefined;
    _permittedDataType?: fhirModels.Element[] | undefined;
    /**
     * The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition.
     */
    preferredReportName?: string | undefined;
    _preferredReportName?: fhirModels.Element | undefined;
    /**
     * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
     */
    qualifiedInterval?: fhirModels.ObservationDefinitionQualifiedInterval[] | undefined;
    /**
     * Characteristics for quantitative results of this observation.
     */
    quantitativeDetails?: fhirModels.ObservationDefinitionQuantitativeDetails | undefined;
    /**
     * The set of valid coded results for the observations  conforming to this ObservationDefinition.
     */
    validCodedValueSet?: fhirModels.Reference | undefined;
    /**
     * Default constructor for ObservationDefinition from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IObservationDefinition>);
    /**
     * Factory function to create a ObservationDefinition from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IObservationDefinition): ObservationDefinition;
    /**
     * Check if the current ObservationDefinition contains all required elements.
     */
    checkRequiredElements(): string[];
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
//# sourceMappingURL=ObservationDefinition.d.ts.map