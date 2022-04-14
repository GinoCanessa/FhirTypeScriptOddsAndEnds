import * as fhirInterfaces from '../strictinterfaces';
/**
 * A parameter passed to or received from the operation.
 */
export interface IParametersParameter extends fhirInterfaces.IBackboneElement {
    /**
     * The name of the parameter (reference to the operation definition).
     */
    name: string;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Only one level of nested parameters is allowed.
     */
    part?: fhirInterfaces.IParametersParameter[] | undefined;
    /**
     * When resolving references in resources, the operation definition may specify how references may be resolved between parameters. If a reference cannot be resolved between the parameters, the application should fall back to it's general resource resolution methods.
     */
    resource?: fhirInterfaces.IFhirResource | undefined;
    /**
     * If the parameter is a data type.
     */
    valueBase64Binary?: string | undefined;
    _valueBase64Binary?: fhirInterfaces.IElement | undefined;
    /**
     * If the parameter is a data type.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhirInterfaces.IElement | undefined;
    /**
     * If the parameter is a data type.
     */
    valueCanonical?: string | undefined;
    _valueCanonical?: fhirInterfaces.IElement | undefined;
    /**
     * If the parameter is a data type.
     */
    valueCode?: string | undefined;
    _valueCode?: fhirInterfaces.IElement | undefined;
    /**
     * If the parameter is a data type.
     */
    valueDate?: string | undefined;
    _valueDate?: fhirInterfaces.IElement | undefined;
    /**
     * If the parameter is a data type.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * If the parameter is a data type.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhirInterfaces.IElement | undefined;
    /**
     * If the parameter is a data type.
     */
    valueId?: string | undefined;
    _valueId?: fhirInterfaces.IElement | undefined;
    /**
     * If the parameter is a data type.
     */
    valueInstant?: string | undefined;
    _valueInstant?: fhirInterfaces.IElement | undefined;
    /**
     * If the parameter is a data type.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhirInterfaces.IElement | undefined;
    /**
     * If the parameter is a data type.
     */
    valueMarkdown?: string | undefined;
    _valueMarkdown?: fhirInterfaces.IElement | undefined;
    /**
     * If the parameter is a data type.
     */
    valueOid?: string | undefined;
    _valueOid?: fhirInterfaces.IElement | undefined;
    /**
     * If the parameter is a data type.
     */
    valuePositiveInt?: number | undefined;
    _valuePositiveInt?: fhirInterfaces.IElement | undefined;
    /**
     * If the parameter is a data type.
     */
    valueString?: string | undefined;
    _valueString?: fhirInterfaces.IElement | undefined;
    /**
     * If the parameter is a data type.
     */
    valueTime?: string | undefined;
    _valueTime?: fhirInterfaces.IElement | undefined;
    /**
     * If the parameter is a data type.
     */
    valueUnsignedInt?: number | undefined;
    _valueUnsignedInt?: fhirInterfaces.IElement | undefined;
    /**
     * If the parameter is a data type.
     */
    valueUri?: string | undefined;
    _valueUri?: fhirInterfaces.IElement | undefined;
    /**
     * If the parameter is a data type.
     */
    valueUrl?: string | undefined;
    _valueUrl?: fhirInterfaces.IElement | undefined;
    /**
     * If the parameter is a data type.
     */
    valueUuid?: string | undefined;
    _valueUuid?: fhirInterfaces.IElement | undefined;
    /**
     * If the parameter is a data type.
     */
    valueAddress?: fhirInterfaces.IAddress | undefined;
    /**
     * If the parameter is a data type.
     */
    valueAge?: fhirInterfaces.IAge | undefined;
    /**
     * If the parameter is a data type.
     */
    valueAnnotation?: fhirInterfaces.IAnnotation | undefined;
    /**
     * If the parameter is a data type.
     */
    valueAttachment?: fhirInterfaces.IAttachment | undefined;
    /**
     * If the parameter is a data type.
     */
    valueCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * If the parameter is a data type.
     */
    valueCoding?: fhirInterfaces.ICoding | undefined;
    /**
     * If the parameter is a data type.
     */
    valueContactPoint?: fhirInterfaces.IContactPoint | undefined;
    /**
     * If the parameter is a data type.
     */
    valueCount?: fhirInterfaces.ICount | undefined;
    /**
     * If the parameter is a data type.
     */
    valueDistance?: fhirInterfaces.IDistance | undefined;
    /**
     * If the parameter is a data type.
     */
    valueDuration?: fhirInterfaces.IDuration | undefined;
    /**
     * If the parameter is a data type.
     */
    valueHumanName?: fhirInterfaces.IHumanName | undefined;
    /**
     * If the parameter is a data type.
     */
    valueIdentifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * If the parameter is a data type.
     */
    valueMoney?: fhirInterfaces.IMoney | undefined;
    /**
     * If the parameter is a data type.
     */
    valuePeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * If the parameter is a data type.
     */
    valueQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * If the parameter is a data type.
     */
    valueRange?: fhirInterfaces.IRange | undefined;
    /**
     * If the parameter is a data type.
     */
    valueRatio?: fhirInterfaces.IRatio | undefined;
    /**
     * If the parameter is a data type.
     */
    valueReference?: fhirInterfaces.IReference | undefined;
    /**
     * If the parameter is a data type.
     */
    valueSampledData?: fhirInterfaces.ISampledData | undefined;
    /**
     * If the parameter is a data type.
     */
    valueSignature?: fhirInterfaces.ISignature | undefined;
    /**
     * If the parameter is a data type.
     */
    valueTiming?: fhirInterfaces.ITiming | undefined;
    /**
     * If the parameter is a data type.
     */
    valueContactDetail?: fhirInterfaces.IContactDetail | undefined;
    /**
     * If the parameter is a data type.
     */
    valueContributor?: fhirInterfaces.IContributor | undefined;
    /**
     * If the parameter is a data type.
     */
    valueDataRequirement?: fhirInterfaces.IDataRequirement | undefined;
    /**
     * If the parameter is a data type.
     */
    valueExpression?: fhirInterfaces.IExpression | undefined;
    /**
     * If the parameter is a data type.
     */
    valueParameterDefinition?: fhirInterfaces.IParameterDefinition | undefined;
    /**
     * If the parameter is a data type.
     */
    valueRelatedArtifact?: fhirInterfaces.IRelatedArtifact | undefined;
    /**
     * If the parameter is a data type.
     */
    valueTriggerDefinition?: fhirInterfaces.ITriggerDefinition | undefined;
    /**
     * If the parameter is a data type.
     */
    valueUsageContext?: fhirInterfaces.IUsageContext | undefined;
    /**
     * If the parameter is a data type.
     */
    valueDosage?: fhirInterfaces.IDosage | undefined;
    /**
     * If the parameter is a data type.
     */
    valueMeta?: fhirInterfaces.IMeta | undefined;
}
/**
 * This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it.
 */
export interface IParameters extends fhirInterfaces.IResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Parameters";
    /**
     * A parameter passed to or received from the operation.
     */
    parameter?: fhirInterfaces.IParametersParameter[] | undefined;
}
//# sourceMappingURL=IParameters.d.ts.map