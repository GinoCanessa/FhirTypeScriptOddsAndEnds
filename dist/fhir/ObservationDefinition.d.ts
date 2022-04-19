import * as fhir from '../fhir';
/**
 * Characteristics for quantitative results of this observation.
 */
export declare type IObservationDefinitionQuantitativeDetails = fhir.IBackboneElement & {
    /**
     * Factor for converting value expressed with SI unit to value expressed with customary unit.
     */
    conversionFactor?: number | undefined;
    _conversionFactor?: fhir.IFhirElement | undefined;
    /**
     * Customary unit used to report quantitative results of observations conforming to this ObservationDefinition.
     */
    customaryUnit?: fhir.ICodeableConcept | undefined;
    /**
     * Number of digits after decimal separator when the results of such observations are of type Quantity.
     */
    decimalPrecision?: number | undefined;
    _decimalPrecision?: fhir.IFhirElement | undefined;
    /**
     * SI unit used to report quantitative results of observations conforming to this ObservationDefinition.
     */
    unit?: fhir.ICodeableConcept | undefined;
};
/**
 * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
 */
export declare type IObservationDefinitionQualifiedInterval = fhir.IBackboneElement & {
    /**
     * Some analytes vary greatly over age.
     */
    age?: fhir.IRange | undefined;
    /**
     * If this element is not present then the global population is assumed.
     */
    appliesTo?: fhir.ICodeableConcept[] | undefined;
    /**
     * The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition.
     */
    category?: ObservationDefinitionQualifiedIntervalCategoryEnum | undefined;
    _category?: fhir.IFhirElement | undefined;
    /**
     * Text based condition for which the reference range is valid.
     */
    condition?: string | undefined;
    _condition?: fhir.IFhirElement | undefined;
    /**
     * Codes to indicate the health context the range applies to. For example, the normal or therapeutic range.
     */
    context?: fhir.ICodeableConcept | undefined;
    /**
     * Sex of the population the range applies to.
     */
    gender?: ObservationDefinitionQualifiedIntervalGenderEnum | undefined;
    _gender?: fhir.IFhirElement | undefined;
    /**
     * The gestational age to which this reference range is applicable, in the context of pregnancy.
     */
    gestationalAge?: fhir.IRange | undefined;
    /**
     * The low and high values determining the interval. There may be only one of the two.
     */
    range?: fhir.IRange | undefined;
};
/**
 * Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
 */
export declare type IObservationDefinition = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "ObservationDefinition";
    /**
     * The set of abnormal coded results for the observation conforming to this ObservationDefinition.
     */
    abnormalCodedValueSet?: fhir.IReference | undefined;
    /**
     * This element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used for one instance of ObservationDefinition. The level of granularity is defined by the category concepts in the value set.
     */
    category?: fhir.ICodeableConcept[] | undefined;
    /**
     * Describes what will be observed. Sometimes this is called the observation "name".
     */
    code: fhir.ICodeableConcept | null;
    /**
     * The set of critical coded results for the observation conforming to this ObservationDefinition.
     */
    criticalCodedValueSet?: fhir.IReference | undefined;
    /**
     * A unique identifier assigned to this ObservationDefinition artifact.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Only used if not implicit in observation code.
     */
    method?: fhir.ICodeableConcept | undefined;
    /**
     * An example of observation allowing multiple results is "bacteria identified by culture". Conversely, the measurement of a potassium level allows a single result.
     */
    multipleResultsAllowed?: boolean | undefined;
    _multipleResultsAllowed?: fhir.IFhirElement | undefined;
    /**
     * The set of normal coded results for the observations conforming to this ObservationDefinition.
     */
    normalCodedValueSet?: fhir.IReference | undefined;
    /**
     * The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.
     */
    permittedDataType?: ObservationDefinitionPermittedDataTypeEnum[] | undefined;
    _permittedDataType?: fhir.IFhirElement[] | undefined;
    /**
     * The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition.
     */
    preferredReportName?: string | undefined;
    _preferredReportName?: fhir.IFhirElement | undefined;
    /**
     * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
     */
    qualifiedInterval?: fhir.IObservationDefinitionQualifiedInterval[] | undefined;
    /**
     * Characteristics for quantitative results of this observation.
     */
    quantitativeDetails?: fhir.IObservationDefinitionQuantitativeDetails | undefined;
    /**
     * The set of valid coded results for the observations  conforming to this ObservationDefinition.
     */
    validCodedValueSet?: fhir.IReference | undefined;
};
/**
 * Characteristics for quantitative results of this observation.
 */
export declare class ObservationDefinitionQuantitativeDetails extends fhir.BackboneElement implements fhir.IObservationDefinitionQuantitativeDetails {
    /**
     * Factor for converting value expressed with SI unit to value expressed with customary unit.
     */
    conversionFactor?: number | undefined;
    _conversionFactor?: fhir.FhirElement | undefined;
    /**
     * Customary unit used to report quantitative results of observations conforming to this ObservationDefinition.
     */
    customaryUnit?: fhir.CodeableConcept | undefined;
    /**
     * Number of digits after decimal separator when the results of such observations are of type Quantity.
     */
    decimalPrecision?: number | undefined;
    _decimalPrecision?: fhir.FhirElement | undefined;
    /**
     * SI unit used to report quantitative results of observations conforming to this ObservationDefinition.
     */
    unit?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ObservationDefinitionQuantitativeDetails - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IObservationDefinitionQuantitativeDetails>);
    /**
     * Check if the current ObservationDefinitionQuantitativeDetails contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ObservationDefinitionQuantitativeDetails from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IObservationDefinitionQuantitativeDetails): ObservationDefinitionQuantitativeDetails;
}
/**
 * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
 */
export declare class ObservationDefinitionQualifiedInterval extends fhir.BackboneElement implements fhir.IObservationDefinitionQualifiedInterval {
    /**
     * Some analytes vary greatly over age.
     */
    age?: fhir.Range | undefined;
    /**
     * If this element is not present then the global population is assumed.
     */
    appliesTo?: fhir.CodeableConcept[] | undefined;
    /**
     * The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition.
     */
    category?: ObservationDefinitionQualifiedIntervalCategoryEnum | undefined;
    _category?: fhir.FhirElement | undefined;
    /**
     * Text based condition for which the reference range is valid.
     */
    condition?: string | undefined;
    _condition?: fhir.FhirElement | undefined;
    /**
     * Codes to indicate the health context the range applies to. For example, the normal or therapeutic range.
     */
    context?: fhir.CodeableConcept | undefined;
    /**
     * Sex of the population the range applies to.
     */
    gender?: ObservationDefinitionQualifiedIntervalGenderEnum | undefined;
    _gender?: fhir.FhirElement | undefined;
    /**
     * The gestational age to which this reference range is applicable, in the context of pregnancy.
     */
    gestationalAge?: fhir.Range | undefined;
    /**
     * The low and high values determining the interval. There may be only one of the two.
     */
    range?: fhir.Range | undefined;
    /**
     * Default constructor for ObservationDefinitionQualifiedInterval - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IObservationDefinitionQualifiedInterval>);
    /**
     * Check if the current ObservationDefinitionQualifiedInterval contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ObservationDefinitionQualifiedInterval from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IObservationDefinitionQualifiedInterval): ObservationDefinitionQualifiedInterval;
}
/**
 * Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
 */
export declare class ObservationDefinition extends fhir.DomainResource implements fhir.IObservationDefinition {
    /**
     * Resource Type Name
     */
    resourceType: "ObservationDefinition";
    /**
     * The set of abnormal coded results for the observation conforming to this ObservationDefinition.
     */
    abnormalCodedValueSet?: fhir.Reference | undefined;
    /**
     * This element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used for one instance of ObservationDefinition. The level of granularity is defined by the category concepts in the value set.
     */
    category?: fhir.CodeableConcept[] | undefined;
    /**
     * Describes what will be observed. Sometimes this is called the observation "name".
     */
    code: fhir.CodeableConcept | null;
    /**
     * The set of critical coded results for the observation conforming to this ObservationDefinition.
     */
    criticalCodedValueSet?: fhir.Reference | undefined;
    /**
     * A unique identifier assigned to this ObservationDefinition artifact.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Only used if not implicit in observation code.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * An example of observation allowing multiple results is "bacteria identified by culture". Conversely, the measurement of a potassium level allows a single result.
     */
    multipleResultsAllowed?: boolean | undefined;
    _multipleResultsAllowed?: fhir.FhirElement | undefined;
    /**
     * The set of normal coded results for the observations conforming to this ObservationDefinition.
     */
    normalCodedValueSet?: fhir.Reference | undefined;
    /**
     * The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.
     */
    permittedDataType?: ObservationDefinitionPermittedDataTypeEnum[] | undefined;
    _permittedDataType?: fhir.FhirElement[] | undefined;
    /**
     * The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition.
     */
    preferredReportName?: string | undefined;
    _preferredReportName?: fhir.FhirElement | undefined;
    /**
     * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
     */
    qualifiedInterval?: fhir.ObservationDefinitionQualifiedInterval[] | undefined;
    /**
     * Characteristics for quantitative results of this observation.
     */
    quantitativeDetails?: fhir.ObservationDefinitionQuantitativeDetails | undefined;
    /**
     * The set of valid coded results for the observations  conforming to this ObservationDefinition.
     */
    validCodedValueSet?: fhir.Reference | undefined;
    /**
     * Default constructor for ObservationDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IObservationDefinition>);
    /**
     * Check if the current ObservationDefinition contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ObservationDefinition from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IObservationDefinition): ObservationDefinition;
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