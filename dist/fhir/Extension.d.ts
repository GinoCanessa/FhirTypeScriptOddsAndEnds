import * as fhir from '../fhir';
/**
 * Optional Extension Element - found in all resources.
 */
export interface IExtension extends fhir.IFhirElement {
    /**
     * The definition may point directly to a computable or human-readable definition of the extensibility codes, or it may be a logical URI as declared in some other specification. The definition SHALL be a URI for the Structure Definition defining the extension.
     */
    url: string | null;
    _url?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueBase64Binary?: string | undefined;
    _valueBase64Binary?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueCanonical?: string | undefined;
    _valueCanonical?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueCode?: string | undefined;
    _valueCode?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDate?: string | undefined;
    _valueDate?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueId?: string | undefined;
    _valueId?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueInstant?: string | undefined;
    _valueInstant?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueMarkdown?: string | undefined;
    _valueMarkdown?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueOid?: string | undefined;
    _valueOid?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valuePositiveInt?: number | undefined;
    _valuePositiveInt?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueString?: string | undefined;
    _valueString?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueTime?: string | undefined;
    _valueTime?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUnsignedInt?: number | undefined;
    _valueUnsignedInt?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUri?: string | undefined;
    _valueUri?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUrl?: string | undefined;
    _valueUrl?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUuid?: string | undefined;
    _valueUuid?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueAddress?: fhir.IAddress | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueAge?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueAnnotation?: fhir.IAnnotation | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueAttachment?: fhir.IAttachment | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueCoding?: fhir.ICoding | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueContactPoint?: fhir.IContactPoint | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueCount?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDistance?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDuration?: fhir.IDuration | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueHumanName?: fhir.IHumanName | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueIdentifier?: fhir.IIdentifier | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueMoney?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valuePeriod?: fhir.IPeriod | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueQuantity?: fhir.IQuantity | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueRange?: fhir.IRange | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueRatio?: fhir.IRatio | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueReference?: fhir.IReference | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueSampledData?: fhir.ISampledData | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueSignature?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueTiming?: fhir.ITiming | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueContactDetail?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueContributor?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDataRequirement?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueExpression?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueParameterDefinition?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueRelatedArtifact?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueTriggerDefinition?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUsageContext?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDosage?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueMeta?: fhir.IMeta | undefined;
}
/**
 * Optional Extension Element - found in all resources.
 */
export declare class Extension extends fhir.FhirElement implements fhir.IExtension {
    /**
     * The definition may point directly to a computable or human-readable definition of the extensibility codes, or it may be a logical URI as declared in some other specification. The definition SHALL be a URI for the Structure Definition defining the extension.
     */
    url: string | null;
    _url?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueBase64Binary?: string | undefined;
    _valueBase64Binary?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueCanonical?: string | undefined;
    _valueCanonical?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueCode?: string | undefined;
    _valueCode?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDate?: string | undefined;
    _valueDate?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueId?: string | undefined;
    _valueId?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueInstant?: string | undefined;
    _valueInstant?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueMarkdown?: string | undefined;
    _valueMarkdown?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueOid?: string | undefined;
    _valueOid?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valuePositiveInt?: number | undefined;
    _valuePositiveInt?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueString?: string | undefined;
    _valueString?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueTime?: string | undefined;
    _valueTime?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUnsignedInt?: number | undefined;
    _valueUnsignedInt?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUri?: string | undefined;
    _valueUri?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUrl?: string | undefined;
    _valueUrl?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUuid?: string | undefined;
    _valueUuid?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueAddress?: fhir.Address | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueAge?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueAnnotation?: fhir.Annotation | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueCoding?: fhir.Coding | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueContactPoint?: fhir.ContactPoint | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueCount?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDistance?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDuration?: fhir.Duration | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueHumanName?: fhir.HumanName | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueIdentifier?: fhir.Identifier | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueMoney?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valuePeriod?: fhir.Period | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueRange?: fhir.Range | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueRatio?: fhir.Ratio | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueSampledData?: fhir.SampledData | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueSignature?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueTiming?: fhir.Timing | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueContactDetail?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueContributor?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDataRequirement?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueExpression?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueParameterDefinition?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueRelatedArtifact?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueTriggerDefinition?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUsageContext?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDosage?: any | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueMeta?: fhir.Meta | undefined;
    /**
     * Default constructor for Extension - initializes required elements to null.
     */
    constructor();
    /**
     * Factory function to create a Extension from an object that MAY NOT contain all required elements.
     */
    static FactoryCreate(source: Partial<fhir.IExtension>): Extension;
    /**
     * Check if the current Extension contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a Extension from an object that MUST contain all required elements.
     */
    static FactoryCreateStrict(source: fhir.IExtension): Extension;
}
//# sourceMappingURL=Extension.d.ts.map