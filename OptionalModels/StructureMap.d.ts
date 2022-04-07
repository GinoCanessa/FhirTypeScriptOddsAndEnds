import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * It is not necessary for a structure map to identify any dependent structures, though not listing them may restrict its usefulness.
 */
export declare class StructureMapStructure extends fhirModels.BackboneElement implements fhirInterfaces.IStructureMapStructure {
    /**
     * This is needed if both types have the same name (e.g. version conversion).
     */
    alias?: string | undefined;
    _alias?: fhirModels.Element | undefined;
    /**
     * Documentation that describes how the structure is used in the mapping.
     */
    documentation?: string | undefined;
    _documentation?: fhirModels.Element | undefined;
    /**
     * How the referenced structure is used in this mapping.
     */
    mode?: StructureMapStructureModeEnum | undefined;
    _mode?: fhirModels.Element | undefined;
    /**
     * The canonical reference to the structure.
     */
    url?: string | undefined;
    _url?: fhirModels.Element | undefined;
    /**
     * Default constructor for StructureMapStructure from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IStructureMapStructure>);
    /**
     * Factory function to create a StructureMapStructure from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IStructureMapStructure): StructureMapStructure;
    /**
     * Check if the current StructureMapStructure contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class StructureMapGroupInput extends fhirModels.BackboneElement implements fhirInterfaces.IStructureMapGroupInput {
    /**
     * Documentation for this instance of data.
     */
    documentation?: string | undefined;
    _documentation?: fhirModels.Element | undefined;
    /**
     * Mode for this instance of data.
     */
    mode?: StructureMapGroupInputModeEnum | undefined;
    _mode?: fhirModels.Element | undefined;
    /**
     * Name for this instance of data.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Type for this instance of data.
     */
    type?: string | undefined;
    _type?: fhirModels.Element | undefined;
    /**
     * Default constructor for StructureMapGroupInput from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IStructureMapGroupInput>);
    /**
     * Factory function to create a StructureMapGroupInput from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IStructureMapGroupInput): StructureMapGroupInput;
    /**
     * Check if the current StructureMapGroupInput contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class StructureMapGroupRuleSource extends fhirModels.BackboneElement implements fhirInterfaces.IStructureMapGroupRuleSource {
    /**
     * FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.
     */
    check?: string | undefined;
    _check?: fhirModels.Element | undefined;
    /**
     * FHIRPath expression  - must be true or the rule does not apply.
     */
    condition?: string | undefined;
    _condition?: fhirModels.Element | undefined;
    /**
     * Type or variable this rule applies to.
     */
    context?: string | undefined;
    _context?: fhirModels.Element | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueBase64Binary?: string | undefined;
    _defaultValueBase64Binary?: fhirModels.Element | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueBoolean?: boolean | undefined;
    _defaultValueBoolean?: fhirModels.Element | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCanonical?: string | undefined;
    _defaultValueCanonical?: fhirModels.Element | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCode?: string | undefined;
    _defaultValueCode?: fhirModels.Element | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDate?: string | undefined;
    _defaultValueDate?: fhirModels.Element | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDateTime?: string | undefined;
    _defaultValueDateTime?: fhirModels.Element | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDecimal?: number | undefined;
    _defaultValueDecimal?: fhirModels.Element | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueId?: string | undefined;
    _defaultValueId?: fhirModels.Element | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueInstant?: string | undefined;
    _defaultValueInstant?: fhirModels.Element | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueInteger?: number | undefined;
    _defaultValueInteger?: fhirModels.Element | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueMarkdown?: string | undefined;
    _defaultValueMarkdown?: fhirModels.Element | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueOid?: string | undefined;
    _defaultValueOid?: fhirModels.Element | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValuePositiveInt?: number | undefined;
    _defaultValuePositiveInt?: fhirModels.Element | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueString?: string | undefined;
    _defaultValueString?: fhirModels.Element | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueTime?: string | undefined;
    _defaultValueTime?: fhirModels.Element | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUnsignedInt?: number | undefined;
    _defaultValueUnsignedInt?: fhirModels.Element | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUri?: string | undefined;
    _defaultValueUri?: fhirModels.Element | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUrl?: string | undefined;
    _defaultValueUrl?: fhirModels.Element | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUuid?: string | undefined;
    _defaultValueUuid?: fhirModels.Element | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueAddress?: fhirModels.Address | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueAge?: fhirModels.Age | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueAnnotation?: fhirModels.Annotation | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueAttachment?: fhirModels.Attachment | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCoding?: fhirModels.Coding | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueContactPoint?: fhirModels.ContactPoint | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCount?: fhirModels.Count | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDistance?: fhirModels.Distance | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDuration?: fhirModels.Duration | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueHumanName?: fhirModels.HumanName | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueIdentifier?: fhirModels.Identifier | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueMoney?: fhirModels.Money | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValuePeriod?: fhirModels.Period | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueQuantity?: fhirModels.Quantity | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueRange?: fhirModels.Range | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueRatio?: fhirModels.Ratio | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueReference?: fhirModels.Reference | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueSampledData?: fhirModels.SampledData | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueSignature?: fhirModels.Signature | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueTiming?: fhirModels.Timing | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueContactDetail?: fhirModels.ContactDetail | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueContributor?: fhirModels.Contributor | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDataRequirement?: fhirModels.DataRequirement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueExpression?: fhirModels.Expression | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueParameterDefinition?: fhirModels.ParameterDefinition | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueRelatedArtifact?: fhirModels.RelatedArtifact | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueTriggerDefinition?: fhirModels.TriggerDefinition | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUsageContext?: fhirModels.UsageContext | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDosage?: fhirModels.Dosage | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueMeta?: fhirModels.Meta | undefined;
    /**
     * Optional field for this source.
     */
    element?: string | undefined;
    _element?: fhirModels.Element | undefined;
    /**
     * How to handle the list mode for this element.
     */
    listMode?: StructureMapGroupRuleSourceListModeEnum | undefined;
    _listMode?: fhirModels.Element | undefined;
    /**
     * This is typically used for recording that something Is not transformed to the target for some reason.
     */
    logMessage?: string | undefined;
    _logMessage?: fhirModels.Element | undefined;
    /**
     * Specified maximum cardinality for the element - a number or a "*". This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it's the default value).
     */
    max?: string | undefined;
    _max?: fhirModels.Element | undefined;
    /**
     * Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.
     */
    min?: number | undefined;
    _min?: fhirModels.Element | undefined;
    /**
     * Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.
     */
    type?: string | undefined;
    _type?: fhirModels.Element | undefined;
    /**
     * Named context for field, if a field is specified.
     */
    variable?: string | undefined;
    _variable?: fhirModels.Element | undefined;
    /**
     * Default constructor for StructureMapGroupRuleSource from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IStructureMapGroupRuleSource>);
    /**
     * Factory function to create a StructureMapGroupRuleSource from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IStructureMapGroupRuleSource): StructureMapGroupRuleSource;
    /**
     * Check if the current StructureMapGroupRuleSource contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class StructureMapGroupRuleTargetParameter extends fhirModels.BackboneElement implements fhirInterfaces.IStructureMapGroupRuleTargetParameter {
    /**
     * Parameter value - variable or literal.
     */
    valueId?: string | undefined;
    _valueId?: fhirModels.Element | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueString?: string | undefined;
    _valueString?: fhirModels.Element | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhirModels.Element | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhirModels.Element | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhirModels.Element | undefined;
    /**
     * Default constructor for StructureMapGroupRuleTargetParameter from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IStructureMapGroupRuleTargetParameter>);
    /**
     * Factory function to create a StructureMapGroupRuleTargetParameter from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IStructureMapGroupRuleTargetParameter): StructureMapGroupRuleTargetParameter;
    /**
     * Check if the current StructureMapGroupRuleTargetParameter contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Content to create because of this mapping rule.
 */
export declare class StructureMapGroupRuleTarget extends fhirModels.BackboneElement implements fhirInterfaces.IStructureMapGroupRuleTarget {
    /**
     * Type or variable this rule applies to.
     */
    context?: string | undefined;
    _context?: fhirModels.Element | undefined;
    /**
     * How to interpret the context.
     */
    contextType?: StructureMapGroupRuleTargetContextTypeEnum | undefined;
    _contextType?: fhirModels.Element | undefined;
    /**
     * Field to create in the context.
     */
    element?: string | undefined;
    _element?: fhirModels.Element | undefined;
    /**
     * If field is a list, how to manage the list.
     */
    listMode?: StructureMapGroupRuleTargetListModeEnum[] | undefined;
    _listMode?: fhirModels.Element[] | undefined;
    /**
     * Internal rule reference for shared list items.
     */
    listRuleId?: string | undefined;
    _listRuleId?: fhirModels.Element | undefined;
    /**
     * Parameters to the transform.
     */
    parameter?: fhirModels.StructureMapGroupRuleTargetParameter[] | undefined;
    /**
     * How the data is copied / created.
     */
    transform?: StructureMapGroupRuleTargetTransformEnum | undefined;
    _transform?: fhirModels.Element | undefined;
    /**
     * Named context for field, if desired, and a field is specified.
     */
    variable?: string | undefined;
    _variable?: fhirModels.Element | undefined;
    /**
     * Default constructor for StructureMapGroupRuleTarget from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IStructureMapGroupRuleTarget>);
    /**
     * Factory function to create a StructureMapGroupRuleTarget from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IStructureMapGroupRuleTarget): StructureMapGroupRuleTarget;
    /**
     * Check if the current StructureMapGroupRuleTarget contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class StructureMapGroupRuleDependent extends fhirModels.BackboneElement implements fhirInterfaces.IStructureMapGroupRuleDependent {
    /**
     * Name of a rule or group to apply.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Variable to pass to the rule or group.
     */
    variable?: string[] | undefined;
    _variable?: fhirModels.Element[] | undefined;
    /**
     * Default constructor for StructureMapGroupRuleDependent from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IStructureMapGroupRuleDependent>);
    /**
     * Factory function to create a StructureMapGroupRuleDependent from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IStructureMapGroupRuleDependent): StructureMapGroupRuleDependent;
    /**
     * Check if the current StructureMapGroupRuleDependent contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Transform Rule from source to target.
 */
export declare class StructureMapGroupRule extends fhirModels.BackboneElement implements fhirInterfaces.IStructureMapGroupRule {
    /**
     * Which other rules to apply in the context of this rule.
     */
    dependent?: fhirModels.StructureMapGroupRuleDependent[] | undefined;
    /**
     * Documentation for this instance of data.
     */
    documentation?: string | undefined;
    _documentation?: fhirModels.Element | undefined;
    /**
     * Name of the rule for internal references.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Rules contained in this rule.
     */
    rule?: fhirModels.StructureMapGroupRule[] | undefined;
    /**
     * Source inputs to the mapping.
     */
    source?: fhirModels.StructureMapGroupRuleSource[] | undefined;
    /**
     * Content to create because of this mapping rule.
     */
    target?: fhirModels.StructureMapGroupRuleTarget[] | undefined;
    /**
     * Default constructor for StructureMapGroupRule from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IStructureMapGroupRule>);
    /**
     * Factory function to create a StructureMapGroupRule from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IStructureMapGroupRule): StructureMapGroupRule;
    /**
     * Check if the current StructureMapGroupRule contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Organizes the mapping into manageable chunks for human review/ease of maintenance.
 */
export declare class StructureMapGroup extends fhirModels.BackboneElement implements fhirInterfaces.IStructureMapGroup {
    /**
     * Additional supporting documentation that explains the purpose of the group and the types of mappings within it.
     */
    documentation?: string | undefined;
    _documentation?: fhirModels.Element | undefined;
    /**
     * Another group that this group adds rules to.
     */
    extends?: string | undefined;
    _extends?: fhirModels.Element | undefined;
    /**
     * If no inputs are named, then the entry mappings are type based.
     */
    input?: fhirModels.StructureMapGroupInput[] | undefined;
    /**
     * A unique name for the group for the convenience of human readers.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Transform Rule from source to target.
     */
    rule?: fhirModels.StructureMapGroupRule[] | undefined;
    /**
     * Not applicable if the underlying model is untyped. There can only be one default mapping for any particular type combination.
     */
    typeMode?: StructureMapGroupTypeModeEnum | undefined;
    _typeMode?: fhirModels.Element | undefined;
    /**
     * Default constructor for StructureMapGroup from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IStructureMapGroup>);
    /**
     * Factory function to create a StructureMapGroup from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IStructureMapGroup): StructureMapGroup;
    /**
     * Check if the current StructureMapGroup contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class StructureMap extends fhirModels.DomainResource implements fhirInterfaces.IStructureMap {
    /**
     * Resource Type Name
     */
    readonly resourceType = "StructureMap";
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhirModels.ContactDetail[] | undefined;
    /**
     * A copyright statement relating to the structure map and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure map.
     */
    copyright?: string | undefined;
    _copyright?: fhirModels.Element | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the structure map. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * This description can be used to capture details such as why the structure map was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the structure map as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the structure map is presumed to be the predominant language in the place the structure map was created).
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Allows filtering of structure maps that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhirModels.Element | undefined;
    /**
     * Organizes the mapping into manageable chunks for human review/ease of maintenance.
     */
    group?: fhirModels.StructureMapGroup[] | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this structure map outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Other maps used by this map (canonical URLs).
     */
    import?: string[] | undefined;
    _import?: fhirModels.Element[] | undefined;
    /**
     * It may be possible for the structure map to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the structure map is the organization or individual primarily responsible for the maintenance and upkeep of the structure map. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the structure map. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhirModels.Element | undefined;
    /**
     * This element does not describe the usage of the structure map. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this structure map.
     */
    purpose?: string | undefined;
    _purpose?: fhirModels.Element | undefined;
    /**
     * Allows filtering of structure maps that are appropriate for use versus not.
     */
    status?: StructureMapStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * It is not necessary for a structure map to identify any dependent structures, though not listing them may restrict its usefulness.
     */
    structure?: fhirModels.StructureMapStructure[] | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhirModels.Element | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    _url?: fhirModels.Element | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhirModels.UsageContext[] | undefined;
    /**
     * There may be different structure map instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the structure map with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirModels.Element | undefined;
    /**
     * Default constructor for StructureMap from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IStructureMap>);
    /**
     * Factory function to create a StructureMap from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IStructureMap): StructureMap;
    /**
     * Check if the current StructureMap contains all required elements.
     */
    checkRequiredElements(): string[];
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
//# sourceMappingURL=StructureMap.d.ts.map