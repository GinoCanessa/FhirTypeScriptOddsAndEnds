import * as fhir from '../fhir.js';
/**
 * Optional Extension Element - found in all resources.
 */
export declare type IExtension = fhir.IFhirElement & {
    /**
     * The definition may point directly to a computable or human-readable definition of the extensibility codes, or it may be a logical URI as declared in some other specification. The definition SHALL be a URI for the Structure Definition defining the extension.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: Extension.url
     */
    _url?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueBase64Binary?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueBoolean?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueCanonical?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueCode?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueCode?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDate?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueDate?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueDateTime?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueDecimal?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueId?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueId?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueInstant?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueInteger?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueMarkdown?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueOid?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueOid?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valuePositiveInt?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueString?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueTime?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueUnsignedInt?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUri?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueUri?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUrl?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueUrl?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUuid?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueUuid?: fhir.IFhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueAddress?: fhir.IAddress | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueAge?: fhir.IAge | undefined;
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
    valueCount?: fhir.ICount | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDistance?: fhir.IDistance | undefined;
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
    valueMoney?: fhir.IMoney | undefined;
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
    valueSignature?: fhir.ISignature | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueTiming?: fhir.ITiming | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueContactDetail?: fhir.IContactDetail | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueContributor?: fhir.IContributor | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDataRequirement?: fhir.IDataRequirement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueExpression?: fhir.IExpression | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueParameterDefinition?: fhir.IParameterDefinition | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueRelatedArtifact?: fhir.IRelatedArtifact | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueTriggerDefinition?: fhir.ITriggerDefinition | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUsageContext?: fhir.IUsageContext | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDosage?: fhir.IDosage | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueMeta?: fhir.IMeta | undefined;
};
/**
 * Optional Extension Element - found in all resources.
 */
export declare class Extension extends fhir.FhirElement implements IExtension {
    /**
     * The definition may point directly to a computable or human-readable definition of the extensibility codes, or it may be a logical URI as declared in some other specification. The definition SHALL be a URI for the Structure Definition defining the extension.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: Extension.url
     */
    _url?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueBase64Binary?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueBoolean?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueCanonical?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueCode?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueCode?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDate?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueDate?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueDateTime?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueDecimal?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueId?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueId?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueInstant?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueInteger?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueMarkdown?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueOid?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueOid?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valuePositiveInt?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueString?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueTime?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueUnsignedInt?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUri?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueUri?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUrl?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueUrl?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUuid?: string | undefined;
    /**
     * Extended properties for primitive element: Extension.value[x]
     */
    _valueUuid?: fhir.FhirElement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueAddress?: fhir.Address | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueAge?: fhir.Age | undefined;
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
    valueCount?: fhir.Count | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDistance?: fhir.Distance | undefined;
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
    valueMoney?: fhir.Money | undefined;
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
    valueSignature?: fhir.Signature | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueTiming?: fhir.Timing | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueContactDetail?: fhir.ContactDetail | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueContributor?: fhir.Contributor | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDataRequirement?: fhir.DataRequirement | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueExpression?: fhir.Expression | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueParameterDefinition?: fhir.ParameterDefinition | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueRelatedArtifact?: fhir.RelatedArtifact | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueTriggerDefinition?: fhir.TriggerDefinition | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueUsageContext?: fhir.UsageContext | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueDosage?: fhir.Dosage | undefined;
    /**
     * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
     */
    valueMeta?: fhir.Meta | undefined;
    /**
     * Default constructor for Extension - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExtension>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Extension.d.ts.map