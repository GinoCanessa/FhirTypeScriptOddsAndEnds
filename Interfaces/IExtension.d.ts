// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirInterfaces from '../interfaces'
/**
 * Optional Extension Element - found in all resources.
 */
export interface IExtension extends fhirInterfaces.IElement {
  /**
   * The definition may point directly to a computable or human-readable definition of the extensibility codes, or it may be a logical URI as declared in some other specification. The definition SHALL be a URI for the Structure Definition defining the extension.
   */
  url: string|undefined;
  _url?: fhirInterfaces.IElement|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueBase64Binary?: string|undefined;
  _valueBase64Binary?: fhirInterfaces.IElement|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueBoolean?: boolean|undefined;
  _valueBoolean?: fhirInterfaces.IElement|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCanonical?: string|undefined;
  _valueCanonical?: fhirInterfaces.IElement|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCode?: string|undefined;
  _valueCode?: fhirInterfaces.IElement|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDate?: string|undefined;
  _valueDate?: fhirInterfaces.IElement|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDateTime?: string|undefined;
  _valueDateTime?: fhirInterfaces.IElement|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDecimal?: number|undefined;
  _valueDecimal?: fhirInterfaces.IElement|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueId?: string|undefined;
  _valueId?: fhirInterfaces.IElement|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueInstant?: string|undefined;
  _valueInstant?: fhirInterfaces.IElement|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueInteger?: number|undefined;
  _valueInteger?: fhirInterfaces.IElement|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueMarkdown?: string|undefined;
  _valueMarkdown?: fhirInterfaces.IElement|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueOid?: string|undefined;
  _valueOid?: fhirInterfaces.IElement|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valuePositiveInt?: number|undefined;
  _valuePositiveInt?: fhirInterfaces.IElement|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueString?: string|undefined;
  _valueString?: fhirInterfaces.IElement|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueTime?: string|undefined;
  _valueTime?: fhirInterfaces.IElement|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUnsignedInt?: number|undefined;
  _valueUnsignedInt?: fhirInterfaces.IElement|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUri?: string|undefined;
  _valueUri?: fhirInterfaces.IElement|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUrl?: string|undefined;
  _valueUrl?: fhirInterfaces.IElement|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUuid?: string|undefined;
  _valueUuid?: fhirInterfaces.IElement|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueAddress?: fhirInterfaces.IAddress|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueAge?: fhirInterfaces.IAge|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueAnnotation?: fhirInterfaces.IAnnotation|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueAttachment?: fhirInterfaces.IAttachment|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCodeableConcept?: fhirInterfaces.ICodeableConcept|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCoding?: fhirInterfaces.ICoding|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueContactPoint?: fhirInterfaces.IContactPoint|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCount?: fhirInterfaces.ICount|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDistance?: fhirInterfaces.IDistance|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDuration?: fhirInterfaces.IDuration|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueHumanName?: fhirInterfaces.IHumanName|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueIdentifier?: fhirInterfaces.IIdentifier|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueMoney?: fhirInterfaces.IMoney|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valuePeriod?: fhirInterfaces.IPeriod|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueQuantity?: fhirInterfaces.IQuantity|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueRange?: fhirInterfaces.IRange|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueRatio?: fhirInterfaces.IRatio|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueReference?: fhirInterfaces.IReference|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueSampledData?: fhirInterfaces.ISampledData|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueSignature?: fhirInterfaces.ISignature|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueTiming?: fhirInterfaces.ITiming|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueContactDetail?: fhirInterfaces.IContactDetail|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueContributor?: fhirInterfaces.IContributor|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDataRequirement?: fhirInterfaces.IDataRequirement|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueExpression?: fhirInterfaces.IExpression|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueParameterDefinition?: fhirInterfaces.IParameterDefinition|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueRelatedArtifact?: fhirInterfaces.IRelatedArtifact|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueTriggerDefinition?: fhirInterfaces.ITriggerDefinition|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUsageContext?: fhirInterfaces.IUsageContext|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDosage?: fhirInterfaces.IDosage|undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueMeta?: fhirInterfaces.IMeta|undefined;
}
