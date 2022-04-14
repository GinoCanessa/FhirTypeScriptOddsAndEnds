import * as fhirInterfaces from '../strictinterfaces';
/**
 * It is not necessary for a structure map to identify any dependent structures, though not listing them may restrict its usefulness.
 */
export interface IStructureMapStructure extends fhirInterfaces.IBackboneElement {
    /**
     * This is needed if both types have the same name (e.g. version conversion).
     */
    alias?: string | undefined;
    _alias?: fhirInterfaces.IElement | undefined;
    /**
     * Documentation that describes how the structure is used in the mapping.
     */
    documentation?: string | undefined;
    _documentation?: fhirInterfaces.IElement | undefined;
    /**
     * How the referenced structure is used in this mapping.
     */
    mode: StructureMapStructureModeEnum;
    _mode?: fhirInterfaces.IElement | undefined;
    /**
     * The canonical reference to the structure.
     */
    url: string;
    _url?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the StructureMap.structure.mode field
 */
export declare enum StructureMapStructureModeEnum {
    SOURCE = "source",
    QUERIED = "queried",
    TARGET = "target",
    PRODUCED = "produced"
}
/**
 * If no inputs are named, then the entry mappings are type based.
 */
export interface IStructureMapGroupInput extends fhirInterfaces.IBackboneElement {
    /**
     * Documentation for this instance of data.
     */
    documentation?: string | undefined;
    _documentation?: fhirInterfaces.IElement | undefined;
    /**
     * Mode for this instance of data.
     */
    mode: StructureMapGroupInputModeEnum;
    _mode?: fhirInterfaces.IElement | undefined;
    /**
     * Name for this instance of data.
     */
    name: string;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Type for this instance of data.
     */
    type?: string | undefined;
    _type?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the StructureMap.group.input.mode field
 */
export declare enum StructureMapGroupInputModeEnum {
    SOURCE = "source",
    TARGET = "target"
}
/**
 * Source inputs to the mapping.
 */
export interface IStructureMapGroupRuleSource extends fhirInterfaces.IBackboneElement {
    /**
     * FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.
     */
    check?: string | undefined;
    _check?: fhirInterfaces.IElement | undefined;
    /**
     * FHIRPath expression  - must be true or the rule does not apply.
     */
    condition?: string | undefined;
    _condition?: fhirInterfaces.IElement | undefined;
    /**
     * Type or variable this rule applies to.
     */
    context: string;
    _context?: fhirInterfaces.IElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueBase64Binary?: string | undefined;
    _defaultValueBase64Binary?: fhirInterfaces.IElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueBoolean?: boolean | undefined;
    _defaultValueBoolean?: fhirInterfaces.IElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCanonical?: string | undefined;
    _defaultValueCanonical?: fhirInterfaces.IElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCode?: string | undefined;
    _defaultValueCode?: fhirInterfaces.IElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDate?: string | undefined;
    _defaultValueDate?: fhirInterfaces.IElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDateTime?: string | undefined;
    _defaultValueDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDecimal?: number | undefined;
    _defaultValueDecimal?: fhirInterfaces.IElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueId?: string | undefined;
    _defaultValueId?: fhirInterfaces.IElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueInstant?: string | undefined;
    _defaultValueInstant?: fhirInterfaces.IElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueInteger?: number | undefined;
    _defaultValueInteger?: fhirInterfaces.IElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueMarkdown?: string | undefined;
    _defaultValueMarkdown?: fhirInterfaces.IElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueOid?: string | undefined;
    _defaultValueOid?: fhirInterfaces.IElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValuePositiveInt?: number | undefined;
    _defaultValuePositiveInt?: fhirInterfaces.IElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueString?: string | undefined;
    _defaultValueString?: fhirInterfaces.IElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueTime?: string | undefined;
    _defaultValueTime?: fhirInterfaces.IElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUnsignedInt?: number | undefined;
    _defaultValueUnsignedInt?: fhirInterfaces.IElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUri?: string | undefined;
    _defaultValueUri?: fhirInterfaces.IElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUrl?: string | undefined;
    _defaultValueUrl?: fhirInterfaces.IElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUuid?: string | undefined;
    _defaultValueUuid?: fhirInterfaces.IElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueAddress?: fhirInterfaces.IAddress | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueAge?: fhirInterfaces.IAge | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueAnnotation?: fhirInterfaces.IAnnotation | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueAttachment?: fhirInterfaces.IAttachment | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCoding?: fhirInterfaces.ICoding | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueContactPoint?: fhirInterfaces.IContactPoint | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCount?: fhirInterfaces.ICount | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDistance?: fhirInterfaces.IDistance | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDuration?: fhirInterfaces.IDuration | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueHumanName?: fhirInterfaces.IHumanName | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueIdentifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueMoney?: fhirInterfaces.IMoney | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValuePeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueRange?: fhirInterfaces.IRange | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueRatio?: fhirInterfaces.IRatio | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueReference?: fhirInterfaces.IReference | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueSampledData?: fhirInterfaces.ISampledData | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueSignature?: fhirInterfaces.ISignature | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueTiming?: fhirInterfaces.ITiming | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueContactDetail?: fhirInterfaces.IContactDetail | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueContributor?: fhirInterfaces.IContributor | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDataRequirement?: fhirInterfaces.IDataRequirement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueExpression?: fhirInterfaces.IExpression | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueParameterDefinition?: fhirInterfaces.IParameterDefinition | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueRelatedArtifact?: fhirInterfaces.IRelatedArtifact | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueTriggerDefinition?: fhirInterfaces.ITriggerDefinition | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUsageContext?: fhirInterfaces.IUsageContext | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDosage?: fhirInterfaces.IDosage | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueMeta?: fhirInterfaces.IMeta | undefined;
    /**
     * Optional field for this source.
     */
    element?: string | undefined;
    _element?: fhirInterfaces.IElement | undefined;
    /**
     * How to handle the list mode for this element.
     */
    listMode?: StructureMapGroupRuleSourceListModeEnum | undefined;
    _listMode?: fhirInterfaces.IElement | undefined;
    /**
     * This is typically used for recording that something Is not transformed to the target for some reason.
     */
    logMessage?: string | undefined;
    _logMessage?: fhirInterfaces.IElement | undefined;
    /**
     * Specified maximum cardinality for the element - a number or a "*". This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it's the default value).
     */
    max?: string | undefined;
    _max?: fhirInterfaces.IElement | undefined;
    /**
     * Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.
     */
    min?: number | undefined;
    _min?: fhirInterfaces.IElement | undefined;
    /**
     * Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.
     */
    type?: string | undefined;
    _type?: fhirInterfaces.IElement | undefined;
    /**
     * Named context for field, if a field is specified.
     */
    variable?: string | undefined;
    _variable?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the StructureMap.group.rule.source.listMode field
 */
export declare enum StructureMapGroupRuleSourceListModeEnum {
    FIRST = "first",
    NOT_FIRST = "not_first",
    LAST = "last",
    NOT_LAST = "not_last",
    ONLY_ONE = "only_one"
}
/**
 * Parameters to the transform.
 */
export interface IStructureMapGroupRuleTargetParameter extends fhirInterfaces.IBackboneElement {
    /**
     * Parameter value - variable or literal.
     */
    valueId?: string | undefined;
    _valueId?: fhirInterfaces.IElement | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueString?: string | undefined;
    _valueString?: fhirInterfaces.IElement | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhirInterfaces.IElement | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhirInterfaces.IElement | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhirInterfaces.IElement | undefined;
}
/**
 * Content to create because of this mapping rule.
 */
export interface IStructureMapGroupRuleTarget extends fhirInterfaces.IBackboneElement {
    /**
     * Type or variable this rule applies to.
     */
    context?: string | undefined;
    _context?: fhirInterfaces.IElement | undefined;
    /**
     * How to interpret the context.
     */
    contextType?: StructureMapGroupRuleTargetContextTypeEnum | undefined;
    _contextType?: fhirInterfaces.IElement | undefined;
    /**
     * Field to create in the context.
     */
    element?: string | undefined;
    _element?: fhirInterfaces.IElement | undefined;
    /**
     * If field is a list, how to manage the list.
     */
    listMode?: StructureMapGroupRuleTargetListModeEnum[] | undefined;
    _listMode?: fhirInterfaces.IElement[] | undefined;
    /**
     * Internal rule reference for shared list items.
     */
    listRuleId?: string | undefined;
    _listRuleId?: fhirInterfaces.IElement | undefined;
    /**
     * Parameters to the transform.
     */
    parameter?: fhirInterfaces.IStructureMapGroupRuleTargetParameter[] | undefined;
    /**
     * How the data is copied / created.
     */
    transform?: StructureMapGroupRuleTargetTransformEnum | undefined;
    _transform?: fhirInterfaces.IElement | undefined;
    /**
     * Named context for field, if desired, and a field is specified.
     */
    variable?: string | undefined;
    _variable?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the StructureMap.group.rule.target.contextType field
 */
export declare enum StructureMapGroupRuleTargetContextTypeEnum {
    TYPE = "type",
    VARIABLE = "variable"
}
/**
 * Code Values for the StructureMap.group.rule.target.listMode field
 */
export declare enum StructureMapGroupRuleTargetListModeEnum {
    FIRST = "first",
    SHARE = "share",
    LAST = "last",
    COLLATE = "collate"
}
/**
 * Code Values for the StructureMap.group.rule.target.transform field
 */
export declare enum StructureMapGroupRuleTargetTransformEnum {
    CREATE = "create",
    COPY = "copy",
    TRUNCATE = "truncate",
    ESCAPE = "escape",
    CAST = "cast",
    APPEND = "append",
    TRANSLATE = "translate",
    REFERENCE = "reference",
    DATEOP = "dateOp",
    UUID = "uuid",
    POINTER = "pointer",
    EVALUATE = "evaluate",
    CC = "cc",
    C = "c",
    QTY = "qty",
    ID = "id",
    CP = "cp"
}
/**
 * Which other rules to apply in the context of this rule.
 */
export interface IStructureMapGroupRuleDependent extends fhirInterfaces.IBackboneElement {
    /**
     * Name of a rule or group to apply.
     */
    name: string;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Variable to pass to the rule or group.
     */
    variable: string[];
    _variable?: fhirInterfaces.IElement[] | undefined;
}
/**
 * Transform Rule from source to target.
 */
export interface IStructureMapGroupRule extends fhirInterfaces.IBackboneElement {
    /**
     * Which other rules to apply in the context of this rule.
     */
    dependent?: fhirInterfaces.IStructureMapGroupRuleDependent[] | undefined;
    /**
     * Documentation for this instance of data.
     */
    documentation?: string | undefined;
    _documentation?: fhirInterfaces.IElement | undefined;
    /**
     * Name of the rule for internal references.
     */
    name: string;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Rules contained in this rule.
     */
    rule?: fhirInterfaces.IStructureMapGroupRule[] | undefined;
    /**
     * Source inputs to the mapping.
     */
    source: fhirInterfaces.IStructureMapGroupRuleSource[];
    /**
     * Content to create because of this mapping rule.
     */
    target?: fhirInterfaces.IStructureMapGroupRuleTarget[] | undefined;
}
/**
 * Organizes the mapping into manageable chunks for human review/ease of maintenance.
 */
export interface IStructureMapGroup extends fhirInterfaces.IBackboneElement {
    /**
     * Additional supporting documentation that explains the purpose of the group and the types of mappings within it.
     */
    documentation?: string | undefined;
    _documentation?: fhirInterfaces.IElement | undefined;
    /**
     * Another group that this group adds rules to.
     */
    extends?: string | undefined;
    _extends?: fhirInterfaces.IElement | undefined;
    /**
     * If no inputs are named, then the entry mappings are type based.
     */
    input: fhirInterfaces.IStructureMapGroupInput[];
    /**
     * A unique name for the group for the convenience of human readers.
     */
    name: string;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Transform Rule from source to target.
     */
    rule: fhirInterfaces.IStructureMapGroupRule[];
    /**
     * Not applicable if the underlying model is untyped. There can only be one default mapping for any particular type combination.
     */
    typeMode: StructureMapGroupTypeModeEnum;
    _typeMode?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the StructureMap.group.typeMode field
 */
export declare enum StructureMapGroupTypeModeEnum {
    NONE = "none",
    TYPES = "types",
    TYPE_AND_TYPES = "type-and-types"
}
/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
export interface IStructureMap extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "StructureMap";
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhirInterfaces.IContactDetail[] | undefined;
    /**
     * A copyright statement relating to the structure map and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure map.
     */
    copyright?: string | undefined;
    _copyright?: fhirInterfaces.IElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the structure map. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * This description can be used to capture details such as why the structure map was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the structure map as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the structure map is presumed to be the predominant language in the place the structure map was created).
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Allows filtering of structure maps that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhirInterfaces.IElement | undefined;
    /**
     * Organizes the mapping into manageable chunks for human review/ease of maintenance.
     */
    group: fhirInterfaces.IStructureMapGroup[];
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this structure map outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Other maps used by this map (canonical URLs).
     */
    import?: string[] | undefined;
    _import?: fhirInterfaces.IElement[] | undefined;
    /**
     * It may be possible for the structure map to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the structure map is the organization or individual primarily responsible for the maintenance and upkeep of the structure map. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the structure map. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhirInterfaces.IElement | undefined;
    /**
     * This element does not describe the usage of the structure map. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this structure map.
     */
    purpose?: string | undefined;
    _purpose?: fhirInterfaces.IElement | undefined;
    /**
     * Allows filtering of structure maps that are appropriate for use versus not.
     */
    status: StructureMapStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * It is not necessary for a structure map to identify any dependent structures, though not listing them may restrict its usefulness.
     */
    structure?: fhirInterfaces.IStructureMapStructure[] | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhirInterfaces.IElement | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: string;
    _url?: fhirInterfaces.IElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhirInterfaces.IUsageContext[] | undefined;
    /**
     * There may be different structure map instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the structure map with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the StructureMap.status field
 */
export declare enum StructureMapStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=IStructureMap.d.ts.map