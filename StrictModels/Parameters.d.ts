import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * A parameter passed to or received from the operation.
 */
export declare class ParametersParameter extends fhirModels.BackboneElement implements fhirInterfaces.IParametersParameter {
    /**
     * The name of the parameter (reference to the operation definition).
     */
    name: string;
    _name?: fhirModels.Element | undefined;
    /**
     * Only one level of nested parameters is allowed.
     */
    part?: fhirModels.ParametersParameter[] | undefined;
    /**
     * When resolving references in resources, the operation definition may specify how references may be resolved between parameters. If a reference cannot be resolved between the parameters, the application should fall back to it's general resource resolution methods.
     */
    resource?: fhirModels.FhirResource | undefined;
    /**
     * If the parameter is a data type.
     */
    valueBase64Binary?: string | undefined;
    _valueBase64Binary?: fhirModels.Element | undefined;
    /**
     * If the parameter is a data type.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhirModels.Element | undefined;
    /**
     * If the parameter is a data type.
     */
    valueCanonical?: string | undefined;
    _valueCanonical?: fhirModels.Element | undefined;
    /**
     * If the parameter is a data type.
     */
    valueCode?: string | undefined;
    _valueCode?: fhirModels.Element | undefined;
    /**
     * If the parameter is a data type.
     */
    valueDate?: string | undefined;
    _valueDate?: fhirModels.Element | undefined;
    /**
     * If the parameter is a data type.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhirModels.Element | undefined;
    /**
     * If the parameter is a data type.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhirModels.Element | undefined;
    /**
     * If the parameter is a data type.
     */
    valueId?: string | undefined;
    _valueId?: fhirModels.Element | undefined;
    /**
     * If the parameter is a data type.
     */
    valueInstant?: string | undefined;
    _valueInstant?: fhirModels.Element | undefined;
    /**
     * If the parameter is a data type.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhirModels.Element | undefined;
    /**
     * If the parameter is a data type.
     */
    valueMarkdown?: string | undefined;
    _valueMarkdown?: fhirModels.Element | undefined;
    /**
     * If the parameter is a data type.
     */
    valueOid?: string | undefined;
    _valueOid?: fhirModels.Element | undefined;
    /**
     * If the parameter is a data type.
     */
    valuePositiveInt?: number | undefined;
    _valuePositiveInt?: fhirModels.Element | undefined;
    /**
     * If the parameter is a data type.
     */
    valueString?: string | undefined;
    _valueString?: fhirModels.Element | undefined;
    /**
     * If the parameter is a data type.
     */
    valueTime?: string | undefined;
    _valueTime?: fhirModels.Element | undefined;
    /**
     * If the parameter is a data type.
     */
    valueUnsignedInt?: number | undefined;
    _valueUnsignedInt?: fhirModels.Element | undefined;
    /**
     * If the parameter is a data type.
     */
    valueUri?: string | undefined;
    _valueUri?: fhirModels.Element | undefined;
    /**
     * If the parameter is a data type.
     */
    valueUrl?: string | undefined;
    _valueUrl?: fhirModels.Element | undefined;
    /**
     * If the parameter is a data type.
     */
    valueUuid?: string | undefined;
    _valueUuid?: fhirModels.Element | undefined;
    /**
     * If the parameter is a data type.
     */
    valueAddress?: fhirModels.Address | undefined;
    /**
     * If the parameter is a data type.
     */
    valueAge?: fhirModels.Age | undefined;
    /**
     * If the parameter is a data type.
     */
    valueAnnotation?: fhirModels.Annotation | undefined;
    /**
     * If the parameter is a data type.
     */
    valueAttachment?: fhirModels.Attachment | undefined;
    /**
     * If the parameter is a data type.
     */
    valueCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * If the parameter is a data type.
     */
    valueCoding?: fhirModels.Coding | undefined;
    /**
     * If the parameter is a data type.
     */
    valueContactPoint?: fhirModels.ContactPoint | undefined;
    /**
     * If the parameter is a data type.
     */
    valueCount?: fhirModels.Count | undefined;
    /**
     * If the parameter is a data type.
     */
    valueDistance?: fhirModels.Distance | undefined;
    /**
     * If the parameter is a data type.
     */
    valueDuration?: fhirModels.Duration | undefined;
    /**
     * If the parameter is a data type.
     */
    valueHumanName?: fhirModels.HumanName | undefined;
    /**
     * If the parameter is a data type.
     */
    valueIdentifier?: fhirModels.Identifier | undefined;
    /**
     * If the parameter is a data type.
     */
    valueMoney?: fhirModels.Money | undefined;
    /**
     * If the parameter is a data type.
     */
    valuePeriod?: fhirModels.Period | undefined;
    /**
     * If the parameter is a data type.
     */
    valueQuantity?: fhirModels.Quantity | undefined;
    /**
     * If the parameter is a data type.
     */
    valueRange?: fhirModels.Range | undefined;
    /**
     * If the parameter is a data type.
     */
    valueRatio?: fhirModels.Ratio | undefined;
    /**
     * If the parameter is a data type.
     */
    valueReference?: fhirModels.Reference | undefined;
    /**
     * If the parameter is a data type.
     */
    valueSampledData?: fhirModels.SampledData | undefined;
    /**
     * If the parameter is a data type.
     */
    valueSignature?: fhirModels.Signature | undefined;
    /**
     * If the parameter is a data type.
     */
    valueTiming?: fhirModels.Timing | undefined;
    /**
     * If the parameter is a data type.
     */
    valueContactDetail?: fhirModels.ContactDetail | undefined;
    /**
     * If the parameter is a data type.
     */
    valueContributor?: fhirModels.Contributor | undefined;
    /**
     * If the parameter is a data type.
     */
    valueDataRequirement?: fhirModels.DataRequirement | undefined;
    /**
     * If the parameter is a data type.
     */
    valueExpression?: fhirModels.Expression | undefined;
    /**
     * If the parameter is a data type.
     */
    valueParameterDefinition?: fhirModels.ParameterDefinition | undefined;
    /**
     * If the parameter is a data type.
     */
    valueRelatedArtifact?: fhirModels.RelatedArtifact | undefined;
    /**
     * If the parameter is a data type.
     */
    valueTriggerDefinition?: fhirModels.TriggerDefinition | undefined;
    /**
     * If the parameter is a data type.
     */
    valueUsageContext?: fhirModels.UsageContext | undefined;
    /**
     * If the parameter is a data type.
     */
    valueDosage?: fhirModels.Dosage | undefined;
    /**
     * If the parameter is a data type.
     */
    valueMeta?: fhirModels.Meta | undefined;
    /**
     * Default constructor for ParametersParameter from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IParametersParameter);
}
/**
 * This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it.
 */
export declare class Parameters extends fhirModels.Resource implements fhirInterfaces.IParameters {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Parameters";
    /**
     * A parameter passed to or received from the operation.
     */
    parameter?: fhirModels.ParametersParameter[] | undefined;
    /**
     * Default constructor for Parameters from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IParameters);
}
//# sourceMappingURL=Parameters.d.ts.map