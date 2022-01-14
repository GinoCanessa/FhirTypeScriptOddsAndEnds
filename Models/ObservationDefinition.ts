// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../models'
/**
 * Characteristics for quantitative results of this observation.
 */
export class ObservationDefinitionQuantitativeDetails extends fhirModels.BackboneElement {
  /**
   * Factor for converting value expressed with SI unit to value expressed with customary unit.
   */
  conversionFactor?: number;
  _conversionFactor?: fhirModels.Element;
  /**
   * Customary unit used to report quantitative results of observations conforming to this ObservationDefinition.
   */
  customaryUnit?: fhirModels.CodeableConcept;
  /**
   * Number of digits after decimal separator when the results of such observations are of type Quantity.
   */
  decimalPrecision?: number;
  _decimalPrecision?: fhirModels.Element;
  /**
   * SI unit used to report quantitative results of observations conforming to this ObservationDefinition.
   */
  unit?: fhirModels.CodeableConcept;
  /**
   * Default constructor
   */
  constructor(source: ObservationDefinitionQuantitativeDetails) {
    super(source);
    if (source["conversionFactor"] !== undefined) { this.conversionFactor = source.conversionFactor; }
    if (source["_conversionFactor"] !== undefined) { this._conversionFactor = source._conversionFactor; }
    if (source["customaryUnit"] !== undefined) { this.customaryUnit = source.customaryUnit; }
    if (source["decimalPrecision"] !== undefined) { this.decimalPrecision = source.decimalPrecision; }
    if (source["_decimalPrecision"] !== undefined) { this._decimalPrecision = source._decimalPrecision; }
    if (source["unit"] !== undefined) { this.unit = source.unit; }
  }
}
/**
 * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
 */
export class ObservationDefinitionQualifiedInterval extends fhirModels.BackboneElement {
  /**
   * Some analytes vary greatly over age.
   */
  age?: fhirModels.Range;
  /**
   * If this element is not present then the global population is assumed.
   */
  appliesTo?: fhirModels.CodeableConcept[];
  /**
   * The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition.
   */
  category?: ObservationDefinitionQualifiedIntervalCategoryEnum;
  _category?: fhirModels.Element;
  /**
   * Text based condition for which the reference range is valid.
   */
  condition?: string;
  _condition?: fhirModels.Element;
  /**
   * Codes to indicate the health context the range applies to. For example, the normal or therapeutic range.
   */
  context?: fhirModels.CodeableConcept;
  /**
   * Sex of the population the range applies to.
   */
  gender?: ObservationDefinitionQualifiedIntervalGenderEnum;
  _gender?: fhirModels.Element;
  /**
   * The gestational age to which this reference range is applicable, in the context of pregnancy.
   */
  gestationalAge?: fhirModels.Range;
  /**
   * The low and high values determining the interval. There may be only one of the two.
   */
  range?: fhirModels.Range;
  /**
   * Default constructor
   */
  constructor(source: ObservationDefinitionQualifiedInterval) {
    super(source);
    if (source["age"] !== undefined) { this.age = source.age; }
    if (source["appliesTo"] !== undefined) { this.appliesTo = source.appliesTo; }
    if (source["category"] !== undefined) { this.category = source.category; }
    if (source["_category"] !== undefined) { this._category = source._category; }
    if (source["condition"] !== undefined) { this.condition = source.condition; }
    if (source["_condition"] !== undefined) { this._condition = source._condition; }
    if (source["context"] !== undefined) { this.context = source.context; }
    if (source["gender"] !== undefined) { this.gender = source.gender; }
    if (source["_gender"] !== undefined) { this._gender = source._gender; }
    if (source["gestationalAge"] !== undefined) { this.gestationalAge = source.gestationalAge; }
    if (source["range"] !== undefined) { this.range = source.range; }
  }
}
/**
 * Code Values for the ObservationDefinition.qualifiedInterval.category field
 */
export enum ObservationDefinitionQualifiedIntervalCategoryEnum {
  REFERENCE = "reference",
  CRITICAL = "critical",
  ABSOLUTE = "absolute",
}
/**
 * Code Values for the ObservationDefinition.qualifiedInterval.gender field
 */
export enum ObservationDefinitionQualifiedIntervalGenderEnum {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
  UNKNOWN = "unknown",
}
/**
 * Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
 */
export class ObservationDefinition extends fhirModels.DomainResource {
  /**
   * Resource Type Name
   */
  readonly resourceType: string = "ObservationDefinition";
  /**
   * The set of abnormal coded results for the observation conforming to this ObservationDefinition.
   */
  abnormalCodedValueSet?: fhirModels.Reference;
  /**
   * This element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used for one instance of ObservationDefinition. The level of granularity is defined by the category concepts in the value set.
   */
  category?: fhirModels.CodeableConcept[];
  /**
   * Describes what will be observed. Sometimes this is called the observation "name".
   */
  code: fhirModels.CodeableConcept;
  /**
   * The set of critical coded results for the observation conforming to this ObservationDefinition.
   */
  criticalCodedValueSet?: fhirModels.Reference;
  /**
   * A unique identifier assigned to this ObservationDefinition artifact.
   */
  identifier?: fhirModels.Identifier[];
  /**
   * Only used if not implicit in observation code.
   */
  method?: fhirModels.CodeableConcept;
  /**
   * An example of observation allowing multiple results is "bacteria identified by culture". Conversely, the measurement of a potassium level allows a single result.
   */
  multipleResultsAllowed?: boolean;
  _multipleResultsAllowed?: fhirModels.Element;
  /**
   * The set of normal coded results for the observations conforming to this ObservationDefinition.
   */
  normalCodedValueSet?: fhirModels.Reference;
  /**
   * The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.
   */
  permittedDataType?: ObservationDefinitionPermittedDataTypeEnum[];
  _permittedDataType?: fhirModels.Element[];
  /**
   * The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition.
   */
  preferredReportName?: string;
  _preferredReportName?: fhirModels.Element;
  /**
   * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
   */
  qualifiedInterval?: fhirModels.ObservationDefinitionQualifiedInterval[];
  /**
   * Characteristics for quantitative results of this observation.
   */
  quantitativeDetails?: fhirModels.ObservationDefinitionQuantitativeDetails;
  /**
   * The set of valid coded results for the observations  conforming to this ObservationDefinition.
   */
  validCodedValueSet?: fhirModels.Reference;
  /**
   * Default constructor
   */
  constructor(source: ObservationDefinition) {
    super(source);
    if ((source['resourceType'] !== "ObservationDefinition") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a ObservationDefinition'; }
    if (source["abnormalCodedValueSet"] !== undefined) { this.abnormalCodedValueSet = source.abnormalCodedValueSet; }
    if (source["category"] !== undefined) { this.category = source.category; }
    if (source["code"] === undefined) { throw 'Missing required element code';}
    this.code = source.code;
    if (source["criticalCodedValueSet"] !== undefined) { this.criticalCodedValueSet = source.criticalCodedValueSet; }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier; }
    if (source["method"] !== undefined) { this.method = source.method; }
    if (source["multipleResultsAllowed"] !== undefined) { this.multipleResultsAllowed = source.multipleResultsAllowed; }
    if (source["_multipleResultsAllowed"] !== undefined) { this._multipleResultsAllowed = source._multipleResultsAllowed; }
    if (source["normalCodedValueSet"] !== undefined) { this.normalCodedValueSet = source.normalCodedValueSet; }
    if (source["permittedDataType"] !== undefined) { this.permittedDataType = source.permittedDataType; }
    if (source["_permittedDataType"] !== undefined) { this._permittedDataType = source._permittedDataType; }
    if (source["preferredReportName"] !== undefined) { this.preferredReportName = source.preferredReportName; }
    if (source["_preferredReportName"] !== undefined) { this._preferredReportName = source._preferredReportName; }
    if (source["qualifiedInterval"] !== undefined) { this.qualifiedInterval = source.qualifiedInterval; }
    if (source["quantitativeDetails"] !== undefined) { this.quantitativeDetails = source.quantitativeDetails; }
    if (source["validCodedValueSet"] !== undefined) { this.validCodedValueSet = source.validCodedValueSet; }
  }
}
/**
 * Code Values for the ObservationDefinition.permittedDataType field
 */
export enum ObservationDefinitionPermittedDataTypeEnum {
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
  PERIOD = "Period",
}
