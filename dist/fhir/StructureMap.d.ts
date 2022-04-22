import * as fhir from '../fhir.js';
import { MapModelModeValueSetType, MapModelModeValueSetEnum } from '../fhirValueSets/MapModelModeValueSet.js';
import { MapInputModeValueSetType, MapInputModeValueSetEnum } from '../fhirValueSets/MapInputModeValueSet.js';
import { MapSourceListModeValueSetType, MapSourceListModeValueSetEnum } from '../fhirValueSets/MapSourceListModeValueSet.js';
import { MapContextTypeValueSetType, MapContextTypeValueSetEnum } from '../fhirValueSets/MapContextTypeValueSet.js';
import { MapTargetListModeValueSetType, MapTargetListModeValueSetEnum } from '../fhirValueSets/MapTargetListModeValueSet.js';
import { MapTransformValueSetType, MapTransformValueSetEnum } from '../fhirValueSets/MapTransformValueSet.js';
import { MapGroupTypeModeValueSetType, MapGroupTypeModeValueSetEnum } from '../fhirValueSets/MapGroupTypeModeValueSet.js';
import { PublicationStatusValueSetType, PublicationStatusValueSetEnum } from '../fhirValueSets/PublicationStatusValueSet.js';
/**
 * It is not necessary for a structure map to identify any dependent structures, though not listing them may restrict its usefulness.
 */
export declare type IStructureMapStructure = fhir.IBackboneElement & {
    /**
     * The canonical reference to the structure.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: StructureMap.structure.url
     */
    _url?: fhir.IFhirElement | undefined;
    /**
     * How the referenced structure is used in this mapping.
     */
    mode: MapModelModeValueSetEnum | null;
    /**
     * Extended properties for primitive element: StructureMap.structure.mode
     */
    _mode?: fhir.IFhirElement | undefined;
    /**
     * This is needed if both types have the same name (e.g. version conversion).
     */
    alias?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.structure.alias
     */
    _alias?: fhir.IFhirElement | undefined;
    /**
     * Documentation that describes how the structure is used in the mapping.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.structure.documentation
     */
    _documentation?: fhir.IFhirElement | undefined;
};
/**
 * If no inputs are named, then the entry mappings are type based.
 */
export declare type IStructureMapGroupInput = fhir.IBackboneElement & {
    /**
     * Name for this instance of data.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: StructureMap.group.input.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * Type for this instance of data.
     */
    type?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.input.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * Mode for this instance of data.
     */
    mode: MapInputModeValueSetEnum | null;
    /**
     * Extended properties for primitive element: StructureMap.group.input.mode
     */
    _mode?: fhir.IFhirElement | undefined;
    /**
     * Documentation for this instance of data.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.input.documentation
     */
    _documentation?: fhir.IFhirElement | undefined;
};
/**
 * Source inputs to the mapping.
 */
export declare type IStructureMapGroupRuleSource = fhir.IBackboneElement & {
    /**
     * Type or variable this rule applies to.
     */
    context: string | null;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.context
     */
    _context?: fhir.IFhirElement | undefined;
    /**
     * Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.
     */
    min?: number | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.min
     */
    _min?: fhir.IFhirElement | undefined;
    /**
     * Specified maximum cardinality for the element - a number or a "*". This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it's the default value).
     */
    max?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.max
     */
    _max?: fhir.IFhirElement | undefined;
    /**
     * Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.
     */
    type?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueBase64Binary?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueBoolean?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueCanonical?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCode?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueCode?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDate?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueDate?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueDateTime?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueDecimal?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueId?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueId?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueInstant?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueInteger?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueMarkdown?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueOid?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueOid?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValuePositiveInt?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueString?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueString?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueTime?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueTime?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueUnsignedInt?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUri?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueUri?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUrl?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueUrl?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUuid?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueUuid?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueAddress?: fhir.IAddress | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueAge?: fhir.IAge | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueAnnotation?: fhir.IAnnotation | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueAttachment?: fhir.IAttachment | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCoding?: fhir.ICoding | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueContactPoint?: fhir.IContactPoint | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCount?: fhir.ICount | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDistance?: fhir.IDistance | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDuration?: fhir.IDuration | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueHumanName?: fhir.IHumanName | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueIdentifier?: fhir.IIdentifier | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueMoney?: fhir.IMoney | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValuePeriod?: fhir.IPeriod | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueQuantity?: fhir.IQuantity | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueRange?: fhir.IRange | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueRatio?: fhir.IRatio | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueReference?: fhir.IReference | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueSampledData?: fhir.ISampledData | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueSignature?: fhir.ISignature | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueTiming?: fhir.ITiming | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueContactDetail?: fhir.IContactDetail | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueContributor?: fhir.IContributor | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDataRequirement?: fhir.IDataRequirement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueExpression?: fhir.IExpression | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueParameterDefinition?: fhir.IParameterDefinition | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueRelatedArtifact?: fhir.IRelatedArtifact | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueTriggerDefinition?: fhir.ITriggerDefinition | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUsageContext?: fhir.IUsageContext | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDosage?: fhir.IDosage | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueMeta?: fhir.IMeta | undefined;
    /**
     * Optional field for this source.
     */
    element?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.element
     */
    _element?: fhir.IFhirElement | undefined;
    /**
     * How to handle the list mode for this element.
     */
    listMode?: MapSourceListModeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.listMode
     */
    _listMode?: fhir.IFhirElement | undefined;
    /**
     * Named context for field, if a field is specified.
     */
    variable?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.variable
     */
    _variable?: fhir.IFhirElement | undefined;
    /**
     * FHIRPath expression  - must be true or the rule does not apply.
     */
    condition?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.condition
     */
    _condition?: fhir.IFhirElement | undefined;
    /**
     * FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.
     */
    check?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.check
     */
    _check?: fhir.IFhirElement | undefined;
    /**
     * This is typically used for recording that something Is not transformed to the target for some reason.
     */
    logMessage?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.logMessage
     */
    _logMessage?: fhir.IFhirElement | undefined;
};
/**
 * Parameters to the transform.
 */
export declare type IStructureMapGroupRuleTargetParameter = fhir.IBackboneElement & {
    /**
     * Parameter value - variable or literal.
     */
    valueId?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.parameter.value[x]
     */
    _valueId?: fhir.IFhirElement | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.parameter.value[x]
     */
    _valueString?: fhir.IFhirElement | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.parameter.value[x]
     */
    _valueBoolean?: fhir.IFhirElement | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.parameter.value[x]
     */
    _valueInteger?: fhir.IFhirElement | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.parameter.value[x]
     */
    _valueDecimal?: fhir.IFhirElement | undefined;
};
/**
 * Content to create because of this mapping rule.
 */
export declare type IStructureMapGroupRuleTarget = fhir.IBackboneElement & {
    /**
     * Type or variable this rule applies to.
     */
    context?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.context
     */
    _context?: fhir.IFhirElement | undefined;
    /**
     * How to interpret the context.
     */
    contextType?: MapContextTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.contextType
     */
    _contextType?: fhir.IFhirElement | undefined;
    /**
     * Field to create in the context.
     */
    element?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.element
     */
    _element?: fhir.IFhirElement | undefined;
    /**
     * Named context for field, if desired, and a field is specified.
     */
    variable?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.variable
     */
    _variable?: fhir.IFhirElement | undefined;
    /**
     * If field is a list, how to manage the list.
     */
    listMode?: MapTargetListModeValueSetEnum[] | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.listMode
     */
    _listMode?: fhir.IFhirElement[] | undefined;
    /**
     * Internal rule reference for shared list items.
     */
    listRuleId?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.listRuleId
     */
    _listRuleId?: fhir.IFhirElement | undefined;
    /**
     * How the data is copied / created.
     */
    transform?: MapTransformValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.transform
     */
    _transform?: fhir.IFhirElement | undefined;
    /**
     * Parameters to the transform.
     */
    parameter?: fhir.IStructureMapGroupRuleTargetParameter[] | undefined;
};
/**
 * Which other rules to apply in the context of this rule.
 */
export declare type IStructureMapGroupRuleDependent = fhir.IBackboneElement & {
    /**
     * Name of a rule or group to apply.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.dependent.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * Variable to pass to the rule or group.
     */
    variable: string[] | null;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.dependent.variable
     */
    _variable?: fhir.IFhirElement[] | undefined;
};
/**
 * Transform Rule from source to target.
 */
export declare type IStructureMapGroupRule = fhir.IBackboneElement & {
    /**
     * Name of the rule for internal references.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * Source inputs to the mapping.
     */
    source: fhir.IStructureMapGroupRuleSource[] | null;
    /**
     * Content to create because of this mapping rule.
     */
    target?: fhir.IStructureMapGroupRuleTarget[] | undefined;
    /**
     * Rules contained in this rule.
     */
    rule?: fhir.IStructureMapGroupRule[] | undefined;
    /**
     * Which other rules to apply in the context of this rule.
     */
    dependent?: fhir.IStructureMapGroupRuleDependent[] | undefined;
    /**
     * Documentation for this instance of data.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.documentation
     */
    _documentation?: fhir.IFhirElement | undefined;
};
/**
 * Organizes the mapping into manageable chunks for human review/ease of maintenance.
 */
export declare type IStructureMapGroup = fhir.IBackboneElement & {
    /**
     * A unique name for the group for the convenience of human readers.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: StructureMap.group.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * Another group that this group adds rules to.
     */
    extends?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.extends
     */
    _extends?: fhir.IFhirElement | undefined;
    /**
     * Not applicable if the underlying model is untyped. There can only be one default mapping for any particular type combination.
     */
    typeMode: MapGroupTypeModeValueSetEnum | null;
    /**
     * Extended properties for primitive element: StructureMap.group.typeMode
     */
    _typeMode?: fhir.IFhirElement | undefined;
    /**
     * Additional supporting documentation that explains the purpose of the group and the types of mappings within it.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.documentation
     */
    _documentation?: fhir.IFhirElement | undefined;
    /**
     * If no inputs are named, then the entry mappings are type based.
     */
    input: fhir.IStructureMapGroupInput[] | null;
    /**
     * Transform Rule from source to target.
     */
    rule: fhir.IStructureMapGroupRule[] | null;
};
/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
export declare type IStructureMap = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "StructureMap";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: StructureMap.url
     */
    _url?: fhir.IFhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this structure map outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * There may be different structure map instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the structure map with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.version
     */
    _version?: fhir.IFhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: StructureMap.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.title
     */
    _title?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of structure maps that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: StructureMap.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of structure maps that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: StructureMap.experimental
     */
    _experimental?: fhir.IFhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the structure map. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the structure map is the organization or individual primarily responsible for the maintenance and upkeep of the structure map. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the structure map. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.publisher
     */
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the structure map was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the structure map as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the structure map is presumed to be the predominant language in the place the structure map was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.IUsageContext[] | undefined;
    /**
     * It may be possible for the structure map to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * This element does not describe the usage of the structure map. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this structure map.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.purpose
     */
    _purpose?: fhir.IFhirElement | undefined;
    /**
     * A copyright statement relating to the structure map and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure map.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.copyright
     */
    _copyright?: fhir.IFhirElement | undefined;
    /**
     * It is not necessary for a structure map to identify any dependent structures, though not listing them may restrict its usefulness.
     */
    structure?: fhir.IStructureMapStructure[] | undefined;
    /**
     * Other maps used by this map (canonical URLs).
     */
    import?: string[] | undefined;
    /**
     * Extended properties for primitive element: StructureMap.import
     */
    _import?: fhir.IFhirElement[] | undefined;
    /**
     * Organizes the mapping into manageable chunks for human review/ease of maintenance.
     */
    group: fhir.IStructureMapGroup[] | null;
};
/**
 * It is not necessary for a structure map to identify any dependent structures, though not listing them may restrict its usefulness.
 */
export declare class StructureMapStructure extends fhir.BackboneElement implements IStructureMapStructure {
    /**
     * The canonical reference to the structure.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: StructureMap.structure.url
     */
    _url?: fhir.FhirElement | undefined;
    /**
     * How the referenced structure is used in this mapping.
     */
    mode: MapModelModeValueSetEnum | null;
    /**
     * Extended properties for primitive element: StructureMap.structure.mode
     */
    _mode?: fhir.FhirElement | undefined;
    /**
     * This is needed if both types have the same name (e.g. version conversion).
     */
    alias?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.structure.alias
     */
    _alias?: fhir.FhirElement | undefined;
    /**
     * Documentation that describes how the structure is used in the mapping.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.structure.documentation
     */
    _documentation?: fhir.FhirElement | undefined;
    /**
     * Default constructor for StructureMapStructure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IStructureMapStructure>);
    /**
     * Required-bound Value Set for mode
     */
    static modeRequiredValueSet(): MapModelModeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * If no inputs are named, then the entry mappings are type based.
 */
export declare class StructureMapGroupInput extends fhir.BackboneElement implements IStructureMapGroupInput {
    /**
     * Name for this instance of data.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: StructureMap.group.input.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Type for this instance of data.
     */
    type?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.input.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * Mode for this instance of data.
     */
    mode: MapInputModeValueSetEnum | null;
    /**
     * Extended properties for primitive element: StructureMap.group.input.mode
     */
    _mode?: fhir.FhirElement | undefined;
    /**
     * Documentation for this instance of data.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.input.documentation
     */
    _documentation?: fhir.FhirElement | undefined;
    /**
     * Default constructor for StructureMapGroupInput - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IStructureMapGroupInput>);
    /**
     * Required-bound Value Set for mode
     */
    static modeRequiredValueSet(): MapInputModeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Source inputs to the mapping.
 */
export declare class StructureMapGroupRuleSource extends fhir.BackboneElement implements IStructureMapGroupRuleSource {
    /**
     * Type or variable this rule applies to.
     */
    context: string | null;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.context
     */
    _context?: fhir.FhirElement | undefined;
    /**
     * Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.
     */
    min?: number | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.min
     */
    _min?: fhir.FhirElement | undefined;
    /**
     * Specified maximum cardinality for the element - a number or a "*". This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it's the default value).
     */
    max?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.max
     */
    _max?: fhir.FhirElement | undefined;
    /**
     * Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.
     */
    type?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueBase64Binary?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueBoolean?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueCanonical?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCode?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueCode?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDate?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueDate?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueDateTime?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueDecimal?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueId?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueId?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueInstant?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueInteger?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueMarkdown?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueOid?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueOid?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValuePositiveInt?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueString?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueString?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueTime?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueTime?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueUnsignedInt?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUri?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueUri?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUrl?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueUrl?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUuid?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueUuid?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueAddress?: fhir.Address | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueAge?: fhir.Age | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueAnnotation?: fhir.Annotation | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueAttachment?: fhir.Attachment | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCoding?: fhir.Coding | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueContactPoint?: fhir.ContactPoint | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCount?: fhir.Count | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDistance?: fhir.Distance | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDuration?: fhir.Duration | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueHumanName?: fhir.HumanName | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueIdentifier?: fhir.Identifier | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueMoney?: fhir.Money | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValuePeriod?: fhir.Period | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueQuantity?: fhir.Quantity | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueRange?: fhir.Range | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueRatio?: fhir.Ratio | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueReference?: fhir.Reference | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueSampledData?: fhir.SampledData | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueSignature?: fhir.Signature | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueTiming?: fhir.Timing | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueContactDetail?: fhir.ContactDetail | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueContributor?: fhir.Contributor | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDataRequirement?: fhir.DataRequirement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueExpression?: fhir.Expression | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueParameterDefinition?: fhir.ParameterDefinition | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueRelatedArtifact?: fhir.RelatedArtifact | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueTriggerDefinition?: fhir.TriggerDefinition | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUsageContext?: fhir.UsageContext | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDosage?: fhir.Dosage | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueMeta?: fhir.Meta | undefined;
    /**
     * Optional field for this source.
     */
    element?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.element
     */
    _element?: fhir.FhirElement | undefined;
    /**
     * How to handle the list mode for this element.
     */
    listMode?: MapSourceListModeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.listMode
     */
    _listMode?: fhir.FhirElement | undefined;
    /**
     * Named context for field, if a field is specified.
     */
    variable?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.variable
     */
    _variable?: fhir.FhirElement | undefined;
    /**
     * FHIRPath expression  - must be true or the rule does not apply.
     */
    condition?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.condition
     */
    _condition?: fhir.FhirElement | undefined;
    /**
     * FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.
     */
    check?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.check
     */
    _check?: fhir.FhirElement | undefined;
    /**
     * This is typically used for recording that something Is not transformed to the target for some reason.
     */
    logMessage?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.logMessage
     */
    _logMessage?: fhir.FhirElement | undefined;
    /**
     * Default constructor for StructureMapGroupRuleSource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IStructureMapGroupRuleSource>);
    /**
     * Required-bound Value Set for listMode
     */
    static listModeRequiredValueSet(): MapSourceListModeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Parameters to the transform.
 */
export declare class StructureMapGroupRuleTargetParameter extends fhir.BackboneElement implements IStructureMapGroupRuleTargetParameter {
    /**
     * Parameter value - variable or literal.
     */
    valueId?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.parameter.value[x]
     */
    _valueId?: fhir.FhirElement | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.parameter.value[x]
     */
    _valueString?: fhir.FhirElement | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.parameter.value[x]
     */
    _valueBoolean?: fhir.FhirElement | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.parameter.value[x]
     */
    _valueInteger?: fhir.FhirElement | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.parameter.value[x]
     */
    _valueDecimal?: fhir.FhirElement | undefined;
    /**
     * Default constructor for StructureMapGroupRuleTargetParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IStructureMapGroupRuleTargetParameter>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Content to create because of this mapping rule.
 */
export declare class StructureMapGroupRuleTarget extends fhir.BackboneElement implements IStructureMapGroupRuleTarget {
    /**
     * Type or variable this rule applies to.
     */
    context?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.context
     */
    _context?: fhir.FhirElement | undefined;
    /**
     * How to interpret the context.
     */
    contextType?: MapContextTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.contextType
     */
    _contextType?: fhir.FhirElement | undefined;
    /**
     * Field to create in the context.
     */
    element?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.element
     */
    _element?: fhir.FhirElement | undefined;
    /**
     * Named context for field, if desired, and a field is specified.
     */
    variable?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.variable
     */
    _variable?: fhir.FhirElement | undefined;
    /**
     * If field is a list, how to manage the list.
     */
    listMode?: MapTargetListModeValueSetEnum[] | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.listMode
     */
    _listMode?: fhir.FhirElement[] | undefined;
    /**
     * Internal rule reference for shared list items.
     */
    listRuleId?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.listRuleId
     */
    _listRuleId?: fhir.FhirElement | undefined;
    /**
     * How the data is copied / created.
     */
    transform?: MapTransformValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.transform
     */
    _transform?: fhir.FhirElement | undefined;
    /**
     * Parameters to the transform.
     */
    parameter?: fhir.StructureMapGroupRuleTargetParameter[] | undefined;
    /**
     * Default constructor for StructureMapGroupRuleTarget - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IStructureMapGroupRuleTarget>);
    /**
     * Required-bound Value Set for contextType
     */
    static contextTypeRequiredValueSet(): MapContextTypeValueSetType;
    /**
     * Required-bound Value Set for listMode
     */
    static listModeRequiredValueSet(): MapTargetListModeValueSetType;
    /**
     * Required-bound Value Set for transform
     */
    static transformRequiredValueSet(): MapTransformValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Which other rules to apply in the context of this rule.
 */
export declare class StructureMapGroupRuleDependent extends fhir.BackboneElement implements IStructureMapGroupRuleDependent {
    /**
     * Name of a rule or group to apply.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.dependent.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Variable to pass to the rule or group.
     */
    variable: string[] | null;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.dependent.variable
     */
    _variable?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for StructureMapGroupRuleDependent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IStructureMapGroupRuleDependent>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Transform Rule from source to target.
 */
export declare class StructureMapGroupRule extends fhir.BackboneElement implements IStructureMapGroupRule {
    /**
     * Name of the rule for internal references.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Source inputs to the mapping.
     */
    source: fhir.StructureMapGroupRuleSource[] | null;
    /**
     * Content to create because of this mapping rule.
     */
    target?: fhir.StructureMapGroupRuleTarget[] | undefined;
    /**
     * Rules contained in this rule.
     */
    rule?: fhir.StructureMapGroupRule[] | undefined;
    /**
     * Which other rules to apply in the context of this rule.
     */
    dependent?: fhir.StructureMapGroupRuleDependent[] | undefined;
    /**
     * Documentation for this instance of data.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.documentation
     */
    _documentation?: fhir.FhirElement | undefined;
    /**
     * Default constructor for StructureMapGroupRule - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IStructureMapGroupRule>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Organizes the mapping into manageable chunks for human review/ease of maintenance.
 */
export declare class StructureMapGroup extends fhir.BackboneElement implements IStructureMapGroup {
    /**
     * A unique name for the group for the convenience of human readers.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: StructureMap.group.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Another group that this group adds rules to.
     */
    extends?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.extends
     */
    _extends?: fhir.FhirElement | undefined;
    /**
     * Not applicable if the underlying model is untyped. There can only be one default mapping for any particular type combination.
     */
    typeMode: MapGroupTypeModeValueSetEnum | null;
    /**
     * Extended properties for primitive element: StructureMap.group.typeMode
     */
    _typeMode?: fhir.FhirElement | undefined;
    /**
     * Additional supporting documentation that explains the purpose of the group and the types of mappings within it.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.documentation
     */
    _documentation?: fhir.FhirElement | undefined;
    /**
     * If no inputs are named, then the entry mappings are type based.
     */
    input: fhir.StructureMapGroupInput[] | null;
    /**
     * Transform Rule from source to target.
     */
    rule: fhir.StructureMapGroupRule[] | null;
    /**
     * Default constructor for StructureMapGroup - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IStructureMapGroup>);
    /**
     * Required-bound Value Set for typeMode
     */
    static typeModeRequiredValueSet(): MapGroupTypeModeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
export declare class StructureMap extends fhir.DomainResource implements IStructureMap {
    /**
     * Resource Type Name
     */
    resourceType: "StructureMap";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: StructureMap.url
     */
    _url?: fhir.FhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this structure map outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * There may be different structure map instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the structure map with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.version
     */
    _version?: fhir.FhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: StructureMap.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.title
     */
    _title?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of structure maps that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: StructureMap.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of structure maps that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: StructureMap.experimental
     */
    _experimental?: fhir.FhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the structure map. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the structure map is the organization or individual primarily responsible for the maintenance and upkeep of the structure map. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the structure map. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.publisher
     */
    _publisher?: fhir.FhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the structure map was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the structure map as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the structure map is presumed to be the predominant language in the place the structure map was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the structure map to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * This element does not describe the usage of the structure map. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this structure map.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.purpose
     */
    _purpose?: fhir.FhirElement | undefined;
    /**
     * A copyright statement relating to the structure map and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure map.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.copyright
     */
    _copyright?: fhir.FhirElement | undefined;
    /**
     * It is not necessary for a structure map to identify any dependent structures, though not listing them may restrict its usefulness.
     */
    structure?: fhir.StructureMapStructure[] | undefined;
    /**
     * Other maps used by this map (canonical URLs).
     */
    import?: string[] | undefined;
    /**
     * Extended properties for primitive element: StructureMap.import
     */
    _import?: fhir.FhirElement[] | undefined;
    /**
     * Organizes the mapping into manageable chunks for human review/ease of maintenance.
     */
    group: fhir.StructureMapGroup[] | null;
    /**
     * Default constructor for StructureMap - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IStructureMap>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): PublicationStatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=StructureMap.d.ts.map