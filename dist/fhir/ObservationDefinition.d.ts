import * as fhir from '../fhir.js';
import { UcumUnitsValueSetType } from '../fhirValueSets/UcumUnitsValueSet.js';
import { ObservationRangeCategoryValueSetType, ObservationRangeCategoryValueSetEnum } from '../fhirValueSets/ObservationRangeCategoryValueSet.js';
import { ReferencerangeMeaningValueSetType } from '../fhirValueSets/ReferencerangeMeaningValueSet.js';
import { ReferencerangeAppliestoValueSetType } from '../fhirValueSets/ReferencerangeAppliestoValueSet.js';
import { AdministrativeGenderValueSetType, AdministrativeGenderValueSetEnum } from '../fhirValueSets/AdministrativeGenderValueSet.js';
import { ObservationCategoryValueSetType } from '../fhirValueSets/ObservationCategoryValueSet.js';
import { ObservationCodesValueSetType } from '../fhirValueSets/ObservationCodesValueSet.js';
import { PermittedDataTypeValueSetType, PermittedDataTypeValueSetEnum } from '../fhirValueSets/PermittedDataTypeValueSet.js';
import { ObservationMethodsValueSetType } from '../fhirValueSets/ObservationMethodsValueSet.js';
/**
 * Characteristics for quantitative results of this observation.
 */
export declare type IObservationDefinitionQuantitativeDetails = fhir.IBackboneElement & {
    /**
     * Customary unit used to report quantitative results of observations conforming to this ObservationDefinition.
     */
    customaryUnit?: fhir.ICodeableConcept | undefined;
    /**
     * SI unit used to report quantitative results of observations conforming to this ObservationDefinition.
     */
    unit?: fhir.ICodeableConcept | undefined;
    /**
     * Factor for converting value expressed with SI unit to value expressed with customary unit.
     */
    conversionFactor?: number | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.quantitativeDetails.conversionFactor
     */
    _conversionFactor?: fhir.IFhirElement | undefined;
    /**
     * Number of digits after decimal separator when the results of such observations are of type Quantity.
     */
    decimalPrecision?: number | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.quantitativeDetails.decimalPrecision
     */
    _decimalPrecision?: fhir.IFhirElement | undefined;
};
/**
 * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
 */
export declare type IObservationDefinitionQualifiedInterval = fhir.IBackboneElement & {
    /**
     * The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition.
     */
    category?: ObservationRangeCategoryValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.qualifiedInterval.category
     */
    _category?: fhir.IFhirElement | undefined;
    /**
     * The low and high values determining the interval. There may be only one of the two.
     */
    range?: fhir.IRange | undefined;
    /**
     * Codes to indicate the health context the range applies to. For example, the normal or therapeutic range.
     */
    context?: fhir.ICodeableConcept | undefined;
    /**
     * If this element is not present then the global population is assumed.
     */
    appliesTo?: fhir.ICodeableConcept[] | undefined;
    /**
     * Sex of the population the range applies to.
     */
    gender?: AdministrativeGenderValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.qualifiedInterval.gender
     */
    _gender?: fhir.IFhirElement | undefined;
    /**
     * Some analytes vary greatly over age.
     */
    age?: fhir.IRange | undefined;
    /**
     * The gestational age to which this reference range is applicable, in the context of pregnancy.
     */
    gestationalAge?: fhir.IRange | undefined;
    /**
     * Text based condition for which the reference range is valid.
     */
    condition?: string | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.qualifiedInterval.condition
     */
    _condition?: fhir.IFhirElement | undefined;
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
     * This element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used for one instance of ObservationDefinition. The level of granularity is defined by the category concepts in the value set.
     */
    category?: fhir.ICodeableConcept[] | undefined;
    /**
     * Describes what will be observed. Sometimes this is called the observation "name".
     */
    code: fhir.ICodeableConcept | null;
    /**
     * A unique identifier assigned to this ObservationDefinition artifact.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.
     */
    permittedDataType?: PermittedDataTypeValueSetEnum[] | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.permittedDataType
     */
    _permittedDataType?: fhir.IFhirElement[] | undefined;
    /**
     * An example of observation allowing multiple results is "bacteria identified by culture". Conversely, the measurement of a potassium level allows a single result.
     */
    multipleResultsAllowed?: boolean | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.multipleResultsAllowed
     */
    _multipleResultsAllowed?: fhir.IFhirElement | undefined;
    /**
     * Only used if not implicit in observation code.
     */
    method?: fhir.ICodeableConcept | undefined;
    /**
     * The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition.
     */
    preferredReportName?: string | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.preferredReportName
     */
    _preferredReportName?: fhir.IFhirElement | undefined;
    /**
     * Characteristics for quantitative results of this observation.
     */
    quantitativeDetails?: fhir.IObservationDefinitionQuantitativeDetails | undefined;
    /**
     * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
     */
    qualifiedInterval?: fhir.IObservationDefinitionQualifiedInterval[] | undefined;
    /**
     * The set of valid coded results for the observations  conforming to this ObservationDefinition.
     */
    validCodedValueSet?: fhir.IReference | undefined;
    /**
     * The set of normal coded results for the observations conforming to this ObservationDefinition.
     */
    normalCodedValueSet?: fhir.IReference | undefined;
    /**
     * The set of abnormal coded results for the observation conforming to this ObservationDefinition.
     */
    abnormalCodedValueSet?: fhir.IReference | undefined;
    /**
     * The set of critical coded results for the observation conforming to this ObservationDefinition.
     */
    criticalCodedValueSet?: fhir.IReference | undefined;
};
/**
 * Characteristics for quantitative results of this observation.
 */
export declare class ObservationDefinitionQuantitativeDetails extends fhir.BackboneElement implements IObservationDefinitionQuantitativeDetails {
    /**
     * Customary unit used to report quantitative results of observations conforming to this ObservationDefinition.
     */
    customaryUnit?: fhir.CodeableConcept | undefined;
    /**
     * SI unit used to report quantitative results of observations conforming to this ObservationDefinition.
     */
    unit?: fhir.CodeableConcept | undefined;
    /**
     * Factor for converting value expressed with SI unit to value expressed with customary unit.
     */
    conversionFactor?: number | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.quantitativeDetails.conversionFactor
     */
    _conversionFactor?: fhir.FhirElement | undefined;
    /**
     * Number of digits after decimal separator when the results of such observations are of type Quantity.
     */
    decimalPrecision?: number | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.quantitativeDetails.decimalPrecision
     */
    _decimalPrecision?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ObservationDefinitionQuantitativeDetails - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IObservationDefinitionQuantitativeDetails>);
    /**
     * Extensible-bound Value Set for customaryUnit
     */
    customaryUnitExtensibleValueSet(): UcumUnitsValueSetType;
    /**
     * Extensible-bound Value Set for unit
     */
    unitExtensibleValueSet(): UcumUnitsValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
 */
export declare class ObservationDefinitionQualifiedInterval extends fhir.BackboneElement implements IObservationDefinitionQualifiedInterval {
    /**
     * The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition.
     */
    category?: ObservationRangeCategoryValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.qualifiedInterval.category
     */
    _category?: fhir.FhirElement | undefined;
    /**
     * The low and high values determining the interval. There may be only one of the two.
     */
    range?: fhir.Range | undefined;
    /**
     * Codes to indicate the health context the range applies to. For example, the normal or therapeutic range.
     */
    context?: fhir.CodeableConcept | undefined;
    /**
     * If this element is not present then the global population is assumed.
     */
    appliesTo?: fhir.CodeableConcept[] | undefined;
    /**
     * Sex of the population the range applies to.
     */
    gender?: AdministrativeGenderValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.qualifiedInterval.gender
     */
    _gender?: fhir.FhirElement | undefined;
    /**
     * Some analytes vary greatly over age.
     */
    age?: fhir.Range | undefined;
    /**
     * The gestational age to which this reference range is applicable, in the context of pregnancy.
     */
    gestationalAge?: fhir.Range | undefined;
    /**
     * Text based condition for which the reference range is valid.
     */
    condition?: string | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.qualifiedInterval.condition
     */
    _condition?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ObservationDefinitionQualifiedInterval - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IObservationDefinitionQualifiedInterval>);
    /**
     * Required-bound Value Set for category
     */
    categoryRequiredValueSet(): ObservationRangeCategoryValueSetType;
    /**
     * Extensible-bound Value Set for context
     */
    contextExtensibleValueSet(): ReferencerangeMeaningValueSetType;
    /**
     * Example-bound Value Set for appliesTo
     */
    appliesToExampleValueSet(): ReferencerangeAppliestoValueSetType;
    /**
     * Required-bound Value Set for gender
     */
    genderRequiredValueSet(): AdministrativeGenderValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
 */
export declare class ObservationDefinition extends fhir.DomainResource implements IObservationDefinition {
    /**
     * Resource Type Name
     */
    resourceType: "ObservationDefinition";
    /**
     * This element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used for one instance of ObservationDefinition. The level of granularity is defined by the category concepts in the value set.
     */
    category?: fhir.CodeableConcept[] | undefined;
    /**
     * Describes what will be observed. Sometimes this is called the observation "name".
     */
    code: fhir.CodeableConcept | null;
    /**
     * A unique identifier assigned to this ObservationDefinition artifact.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.
     */
    permittedDataType?: PermittedDataTypeValueSetEnum[] | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.permittedDataType
     */
    _permittedDataType?: fhir.FhirElement[] | undefined;
    /**
     * An example of observation allowing multiple results is "bacteria identified by culture". Conversely, the measurement of a potassium level allows a single result.
     */
    multipleResultsAllowed?: boolean | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.multipleResultsAllowed
     */
    _multipleResultsAllowed?: fhir.FhirElement | undefined;
    /**
     * Only used if not implicit in observation code.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition.
     */
    preferredReportName?: string | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.preferredReportName
     */
    _preferredReportName?: fhir.FhirElement | undefined;
    /**
     * Characteristics for quantitative results of this observation.
     */
    quantitativeDetails?: fhir.ObservationDefinitionQuantitativeDetails | undefined;
    /**
     * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
     */
    qualifiedInterval?: fhir.ObservationDefinitionQualifiedInterval[] | undefined;
    /**
     * The set of valid coded results for the observations  conforming to this ObservationDefinition.
     */
    validCodedValueSet?: fhir.Reference | undefined;
    /**
     * The set of normal coded results for the observations conforming to this ObservationDefinition.
     */
    normalCodedValueSet?: fhir.Reference | undefined;
    /**
     * The set of abnormal coded results for the observation conforming to this ObservationDefinition.
     */
    abnormalCodedValueSet?: fhir.Reference | undefined;
    /**
     * The set of critical coded results for the observation conforming to this ObservationDefinition.
     */
    criticalCodedValueSet?: fhir.Reference | undefined;
    /**
     * Default constructor for ObservationDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IObservationDefinition>);
    /**
     * Example-bound Value Set for category
     */
    categoryExampleValueSet(): ObservationCategoryValueSetType;
    /**
     * Example-bound Value Set for code
     */
    codeExampleValueSet(): ObservationCodesValueSetType;
    /**
     * Required-bound Value Set for permittedDataType
     */
    permittedDataTypeRequiredValueSet(): PermittedDataTypeValueSetType;
    /**
     * Example-bound Value Set for method
     */
    methodExampleValueSet(): ObservationMethodsValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=ObservationDefinition.d.ts.map