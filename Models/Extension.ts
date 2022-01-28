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
 * Optional Extension Element - found in all resources.
 */
export class Extension extends fhirModels.Element implements fhirInterfaces.IExtension {
  /**
   * The definition may point directly to a computable or human-readable definition of the extensibility codes, or it may be a logical URI as declared in some other specification. The definition SHALL be a URI for the Structure Definition defining the extension.
   */
  url: string|undefined;
  _url?: fhirModels.Element|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueBase64Binary?: string|undefined;
  _valueBase64Binary?: fhirModels.Element|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueBoolean?: boolean|undefined;
  _valueBoolean?: fhirModels.Element|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCanonical?: string|undefined;
  _valueCanonical?: fhirModels.Element|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCode?: string|undefined;
  _valueCode?: fhirModels.Element|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDate?: string|undefined;
  _valueDate?: fhirModels.Element|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDateTime?: string|undefined;
  _valueDateTime?: fhirModels.Element|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDecimal?: number|undefined;
  _valueDecimal?: fhirModels.Element|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueId?: string|undefined;
  _valueId?: fhirModels.Element|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueInstant?: string|undefined;
  _valueInstant?: fhirModels.Element|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueInteger?: number|undefined;
  _valueInteger?: fhirModels.Element|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueMarkdown?: string|undefined;
  _valueMarkdown?: fhirModels.Element|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueOid?: string|undefined;
  _valueOid?: fhirModels.Element|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valuePositiveInt?: number|undefined;
  _valuePositiveInt?: fhirModels.Element|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueString?: string|undefined;
  _valueString?: fhirModels.Element|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueTime?: string|undefined;
  _valueTime?: fhirModels.Element|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUnsignedInt?: number|undefined;
  _valueUnsignedInt?: fhirModels.Element|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUri?: string|undefined;
  _valueUri?: fhirModels.Element|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUrl?: string|undefined;
  _valueUrl?: fhirModels.Element|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUuid?: string|undefined;
  _valueUuid?: fhirModels.Element|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueAddress?: fhirModels.Address|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueAge?: fhirModels.Age|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueAnnotation?: fhirModels.Annotation|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueAttachment?: fhirModels.Attachment|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCodeableConcept?: fhirModels.CodeableConcept|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCoding?: fhirModels.Coding|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueContactPoint?: fhirModels.ContactPoint|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCount?: fhirModels.Count|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDistance?: fhirModels.Distance|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDuration?: fhirModels.Duration|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueHumanName?: fhirModels.HumanName|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueIdentifier?: fhirModels.Identifier|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueMoney?: fhirModels.Money|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valuePeriod?: fhirModels.Period|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueQuantity?: fhirModels.Quantity|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueRange?: fhirModels.Range|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueRatio?: fhirModels.Ratio|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueReference?: fhirModels.Reference|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueSampledData?: fhirModels.SampledData|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueSignature?: fhirModels.Signature|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueTiming?: fhirModels.Timing|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueContactDetail?: fhirModels.ContactDetail|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueContributor?: fhirModels.Contributor|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDataRequirement?: fhirModels.DataRequirement|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueExpression?: fhirModels.Expression|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueParameterDefinition?: fhirModels.ParameterDefinition|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueRelatedArtifact?: fhirModels.RelatedArtifact|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueTriggerDefinition?: fhirModels.TriggerDefinition|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUsageContext?: fhirModels.UsageContext|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDosage?: fhirModels.Dosage|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueMeta?: fhirModels.Meta|undefined;
  /**
   * Default constructor for Extension from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IExtension>) {
    super(source);
    if (source["url"] !== undefined) { this.url = source.url; }
    if (source["_url"] !== undefined) { this._url = new fhirModels.Element(source._url); }
    if (source["valueBase64Binary"] !== undefined) { this.valueBase64Binary = source.valueBase64Binary; }
    if (source["_valueBase64Binary"] !== undefined) { this._valueBase64Binary = new fhirModels.Element(source._valueBase64Binary); }
    if (source["valueBoolean"] !== undefined) { this.valueBoolean = source.valueBoolean; }
    if (source["_valueBoolean"] !== undefined) { this._valueBoolean = new fhirModels.Element(source._valueBoolean); }
    if (source["valueCanonical"] !== undefined) { this.valueCanonical = source.valueCanonical; }
    if (source["_valueCanonical"] !== undefined) { this._valueCanonical = new fhirModels.Element(source._valueCanonical); }
    if (source["valueCode"] !== undefined) { this.valueCode = source.valueCode; }
    if (source["_valueCode"] !== undefined) { this._valueCode = new fhirModels.Element(source._valueCode); }
    if (source["valueDate"] !== undefined) { this.valueDate = source.valueDate; }
    if (source["_valueDate"] !== undefined) { this._valueDate = new fhirModels.Element(source._valueDate); }
    if (source["valueDateTime"] !== undefined) { this.valueDateTime = source.valueDateTime; }
    if (source["_valueDateTime"] !== undefined) { this._valueDateTime = new fhirModels.Element(source._valueDateTime); }
    if (source["valueDecimal"] !== undefined) { this.valueDecimal = source.valueDecimal; }
    if (source["_valueDecimal"] !== undefined) { this._valueDecimal = new fhirModels.Element(source._valueDecimal); }
    if (source["valueId"] !== undefined) { this.valueId = source.valueId; }
    if (source["_valueId"] !== undefined) { this._valueId = new fhirModels.Element(source._valueId); }
    if (source["valueInstant"] !== undefined) { this.valueInstant = source.valueInstant; }
    if (source["_valueInstant"] !== undefined) { this._valueInstant = new fhirModels.Element(source._valueInstant); }
    if (source["valueInteger"] !== undefined) { this.valueInteger = source.valueInteger; }
    if (source["_valueInteger"] !== undefined) { this._valueInteger = new fhirModels.Element(source._valueInteger); }
    if (source["valueMarkdown"] !== undefined) { this.valueMarkdown = source.valueMarkdown; }
    if (source["_valueMarkdown"] !== undefined) { this._valueMarkdown = new fhirModels.Element(source._valueMarkdown); }
    if (source["valueOid"] !== undefined) { this.valueOid = source.valueOid; }
    if (source["_valueOid"] !== undefined) { this._valueOid = new fhirModels.Element(source._valueOid); }
    if (source["valuePositiveInt"] !== undefined) { this.valuePositiveInt = source.valuePositiveInt; }
    if (source["_valuePositiveInt"] !== undefined) { this._valuePositiveInt = new fhirModels.Element(source._valuePositiveInt); }
    if (source["valueString"] !== undefined) { this.valueString = source.valueString; }
    if (source["_valueString"] !== undefined) { this._valueString = new fhirModels.Element(source._valueString); }
    if (source["valueTime"] !== undefined) { this.valueTime = source.valueTime; }
    if (source["_valueTime"] !== undefined) { this._valueTime = new fhirModels.Element(source._valueTime); }
    if (source["valueUnsignedInt"] !== undefined) { this.valueUnsignedInt = source.valueUnsignedInt; }
    if (source["_valueUnsignedInt"] !== undefined) { this._valueUnsignedInt = new fhirModels.Element(source._valueUnsignedInt); }
    if (source["valueUri"] !== undefined) { this.valueUri = source.valueUri; }
    if (source["_valueUri"] !== undefined) { this._valueUri = new fhirModels.Element(source._valueUri); }
    if (source["valueUrl"] !== undefined) { this.valueUrl = source.valueUrl; }
    if (source["_valueUrl"] !== undefined) { this._valueUrl = new fhirModels.Element(source._valueUrl); }
    if (source["valueUuid"] !== undefined) { this.valueUuid = source.valueUuid; }
    if (source["_valueUuid"] !== undefined) { this._valueUuid = new fhirModels.Element(source._valueUuid); }
    if (source["valueAddress"] !== undefined) { this.valueAddress = new fhirModels.Address(source.valueAddress); }
    if (source["valueAge"] !== undefined) { this.valueAge = new fhirModels.Age(source.valueAge); }
    if (source["valueAnnotation"] !== undefined) { this.valueAnnotation = new fhirModels.Annotation(source.valueAnnotation); }
    if (source["valueAttachment"] !== undefined) { this.valueAttachment = new fhirModels.Attachment(source.valueAttachment); }
    if (source["valueCodeableConcept"] !== undefined) { this.valueCodeableConcept = new fhirModels.CodeableConcept(source.valueCodeableConcept); }
    if (source["valueCoding"] !== undefined) { this.valueCoding = new fhirModels.Coding(source.valueCoding); }
    if (source["valueContactPoint"] !== undefined) { this.valueContactPoint = new fhirModels.ContactPoint(source.valueContactPoint); }
    if (source["valueCount"] !== undefined) { this.valueCount = new fhirModels.Count(source.valueCount); }
    if (source["valueDistance"] !== undefined) { this.valueDistance = new fhirModels.Distance(source.valueDistance); }
    if (source["valueDuration"] !== undefined) { this.valueDuration = new fhirModels.Duration(source.valueDuration); }
    if (source["valueHumanName"] !== undefined) { this.valueHumanName = new fhirModels.HumanName(source.valueHumanName); }
    if (source["valueIdentifier"] !== undefined) { this.valueIdentifier = new fhirModels.Identifier(source.valueIdentifier); }
    if (source["valueMoney"] !== undefined) { this.valueMoney = new fhirModels.Money(source.valueMoney); }
    if (source["valuePeriod"] !== undefined) { this.valuePeriod = new fhirModels.Period(source.valuePeriod); }
    if (source["valueQuantity"] !== undefined) { this.valueQuantity = new fhirModels.Quantity(source.valueQuantity); }
    if (source["valueRange"] !== undefined) { this.valueRange = new fhirModels.Range(source.valueRange); }
    if (source["valueRatio"] !== undefined) { this.valueRatio = new fhirModels.Ratio(source.valueRatio); }
    if (source["valueReference"] !== undefined) { this.valueReference = new fhirModels.Reference(source.valueReference); }
    if (source["valueSampledData"] !== undefined) { this.valueSampledData = new fhirModels.SampledData(source.valueSampledData); }
    if (source["valueSignature"] !== undefined) { this.valueSignature = new fhirModels.Signature(source.valueSignature); }
    if (source["valueTiming"] !== undefined) { this.valueTiming = new fhirModels.Timing(source.valueTiming); }
    if (source["valueContactDetail"] !== undefined) { this.valueContactDetail = new fhirModels.ContactDetail(source.valueContactDetail); }
    if (source["valueContributor"] !== undefined) { this.valueContributor = new fhirModels.Contributor(source.valueContributor); }
    if (source["valueDataRequirement"] !== undefined) { this.valueDataRequirement = new fhirModels.DataRequirement(source.valueDataRequirement); }
    if (source["valueExpression"] !== undefined) { this.valueExpression = new fhirModels.Expression(source.valueExpression); }
    if (source["valueParameterDefinition"] !== undefined) { this.valueParameterDefinition = new fhirModels.ParameterDefinition(source.valueParameterDefinition); }
    if (source["valueRelatedArtifact"] !== undefined) { this.valueRelatedArtifact = new fhirModels.RelatedArtifact(source.valueRelatedArtifact); }
    if (source["valueTriggerDefinition"] !== undefined) { this.valueTriggerDefinition = new fhirModels.TriggerDefinition(source.valueTriggerDefinition); }
    if (source["valueUsageContext"] !== undefined) { this.valueUsageContext = new fhirModels.UsageContext(source.valueUsageContext); }
    if (source["valueDosage"] !== undefined) { this.valueDosage = new fhirModels.Dosage(source.valueDosage); }
    if (source["valueMeta"] !== undefined) { this.valueMeta = new fhirModels.Meta(source.valueMeta); }
  }
  /**
   * Check if the current Extension contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["url"] === undefined) { missingElements.push("url"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a Extension from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IExtension):Extension {
    var dest:Extension = new Extension(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `Extension is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
