import * as fhir from '../fhir';
/**
 * It is not necessary for a structure map to identify any dependent structures, though not listing them may restrict its usefulness.
 */
export declare type IStructureMapStructure = fhir.IBackboneElement & {
    /**
     * This is needed if both types have the same name (e.g. version conversion).
     */
    alias?: string | undefined;
    _alias?: fhir.IFhirElement | undefined;
    /**
     * Documentation that describes how the structure is used in the mapping.
     */
    documentation?: string | undefined;
    _documentation?: fhir.IFhirElement | undefined;
    /**
     * How the referenced structure is used in this mapping.
     */
    mode: StructureMapStructureModeEnum | null;
    _mode?: fhir.IFhirElement | undefined;
    /**
     * The canonical reference to the structure.
     */
    url: string | null;
    _url?: fhir.IFhirElement | undefined;
};
/**
 * If no inputs are named, then the entry mappings are type based.
 */
export declare type IStructureMapGroupInput = fhir.IBackboneElement & {
    /**
     * Documentation for this instance of data.
     */
    documentation?: string | undefined;
    _documentation?: fhir.IFhirElement | undefined;
    /**
     * Mode for this instance of data.
     */
    mode: StructureMapGroupInputModeEnum | null;
    _mode?: fhir.IFhirElement | undefined;
    /**
     * Name for this instance of data.
     */
    name: string | null;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Type for this instance of data.
     */
    type?: string | undefined;
    _type?: fhir.IFhirElement | undefined;
};
/**
 * Source inputs to the mapping.
 */
export declare type IStructureMapGroupRuleSource = fhir.IBackboneElement & {
    /**
     * FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.
     */
    check?: string | undefined;
    _check?: fhir.IFhirElement | undefined;
    /**
     * FHIRPath expression  - must be true or the rule does not apply.
     */
    condition?: string | undefined;
    _condition?: fhir.IFhirElement | undefined;
    /**
     * Type or variable this rule applies to.
     */
    context: string | null;
    _context?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueBase64Binary?: string | undefined;
    _defaultValueBase64Binary?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueBoolean?: boolean | undefined;
    _defaultValueBoolean?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCanonical?: string | undefined;
    _defaultValueCanonical?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCode?: string | undefined;
    _defaultValueCode?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDate?: string | undefined;
    _defaultValueDate?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDateTime?: string | undefined;
    _defaultValueDateTime?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDecimal?: number | undefined;
    _defaultValueDecimal?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueId?: string | undefined;
    _defaultValueId?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueInstant?: string | undefined;
    _defaultValueInstant?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueInteger?: number | undefined;
    _defaultValueInteger?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueMarkdown?: string | undefined;
    _defaultValueMarkdown?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueOid?: string | undefined;
    _defaultValueOid?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValuePositiveInt?: number | undefined;
    _defaultValuePositiveInt?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueString?: string | undefined;
    _defaultValueString?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueTime?: string | undefined;
    _defaultValueTime?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUnsignedInt?: number | undefined;
    _defaultValueUnsignedInt?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUri?: string | undefined;
    _defaultValueUri?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUrl?: string | undefined;
    _defaultValueUrl?: fhir.IFhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUuid?: string | undefined;
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
    _element?: fhir.IFhirElement | undefined;
    /**
     * How to handle the list mode for this element.
     */
    listMode?: StructureMapGroupRuleSourceListModeEnum | undefined;
    _listMode?: fhir.IFhirElement | undefined;
    /**
     * This is typically used for recording that something Is not transformed to the target for some reason.
     */
    logMessage?: string | undefined;
    _logMessage?: fhir.IFhirElement | undefined;
    /**
     * Specified maximum cardinality for the element - a number or a "*". This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it's the default value).
     */
    max?: string | undefined;
    _max?: fhir.IFhirElement | undefined;
    /**
     * Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.
     */
    min?: number | undefined;
    _min?: fhir.IFhirElement | undefined;
    /**
     * Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.
     */
    type?: string | undefined;
    _type?: fhir.IFhirElement | undefined;
    /**
     * Named context for field, if a field is specified.
     */
    variable?: string | undefined;
    _variable?: fhir.IFhirElement | undefined;
};
/**
 * Parameters to the transform.
 */
export declare type IStructureMapGroupRuleTargetParameter = fhir.IBackboneElement & {
    /**
     * Parameter value - variable or literal.
     */
    valueId?: string | undefined;
    _valueId?: fhir.IFhirElement | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueString?: string | undefined;
    _valueString?: fhir.IFhirElement | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhir.IFhirElement | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhir.IFhirElement | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueDecimal?: number | undefined;
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
    _context?: fhir.IFhirElement | undefined;
    /**
     * How to interpret the context.
     */
    contextType?: StructureMapGroupRuleTargetContextTypeEnum | undefined;
    _contextType?: fhir.IFhirElement | undefined;
    /**
     * Field to create in the context.
     */
    element?: string | undefined;
    _element?: fhir.IFhirElement | undefined;
    /**
     * If field is a list, how to manage the list.
     */
    listMode?: StructureMapGroupRuleTargetListModeEnum[] | undefined;
    _listMode?: fhir.IFhirElement[] | undefined;
    /**
     * Internal rule reference for shared list items.
     */
    listRuleId?: string | undefined;
    _listRuleId?: fhir.IFhirElement | undefined;
    /**
     * Parameters to the transform.
     */
    parameter?: fhir.IStructureMapGroupRuleTargetParameter[] | undefined;
    /**
     * How the data is copied / created.
     */
    transform?: StructureMapGroupRuleTargetTransformEnum | undefined;
    _transform?: fhir.IFhirElement | undefined;
    /**
     * Named context for field, if desired, and a field is specified.
     */
    variable?: string | undefined;
    _variable?: fhir.IFhirElement | undefined;
};
/**
 * Which other rules to apply in the context of this rule.
 */
export declare type IStructureMapGroupRuleDependent = fhir.IBackboneElement & {
    /**
     * Name of a rule or group to apply.
     */
    name: string | null;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Variable to pass to the rule or group.
     */
    variable: string[] | null;
    _variable?: fhir.IFhirElement[] | undefined;
};
/**
 * Transform Rule from source to target.
 */
export declare type IStructureMapGroupRule = fhir.IBackboneElement & {
    /**
     * Which other rules to apply in the context of this rule.
     */
    dependent?: fhir.IStructureMapGroupRuleDependent[] | undefined;
    /**
     * Documentation for this instance of data.
     */
    documentation?: string | undefined;
    _documentation?: fhir.IFhirElement | undefined;
    /**
     * Name of the rule for internal references.
     */
    name: string | null;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Rules contained in this rule.
     */
    rule?: fhir.IStructureMapGroupRule[] | undefined;
    /**
     * Source inputs to the mapping.
     */
    source: fhir.IStructureMapGroupRuleSource[] | null;
    /**
     * Content to create because of this mapping rule.
     */
    target?: fhir.IStructureMapGroupRuleTarget[] | undefined;
};
/**
 * Organizes the mapping into manageable chunks for human review/ease of maintenance.
 */
export declare type IStructureMapGroup = fhir.IBackboneElement & {
    /**
     * Additional supporting documentation that explains the purpose of the group and the types of mappings within it.
     */
    documentation?: string | undefined;
    _documentation?: fhir.IFhirElement | undefined;
    /**
     * Another group that this group adds rules to.
     */
    extends?: string | undefined;
    _extends?: fhir.IFhirElement | undefined;
    /**
     * If no inputs are named, then the entry mappings are type based.
     */
    input: fhir.IStructureMapGroupInput[] | null;
    /**
     * A unique name for the group for the convenience of human readers.
     */
    name: string | null;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Transform Rule from source to target.
     */
    rule: fhir.IStructureMapGroupRule[] | null;
    /**
     * Not applicable if the underlying model is untyped. There can only be one default mapping for any particular type combination.
     */
    typeMode: StructureMapGroupTypeModeEnum | null;
    _typeMode?: fhir.IFhirElement | undefined;
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
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * A copyright statement relating to the structure map and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure map.
     */
    copyright?: string | undefined;
    _copyright?: fhir.IFhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the structure map. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * This description can be used to capture details such as why the structure map was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the structure map as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the structure map is presumed to be the predominant language in the place the structure map was created).
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of structure maps that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhir.IFhirElement | undefined;
    /**
     * Organizes the mapping into manageable chunks for human review/ease of maintenance.
     */
    group: fhir.IStructureMapGroup[] | null;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this structure map outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Other maps used by this map (canonical URLs).
     */
    import?: string[] | undefined;
    _import?: fhir.IFhirElement[] | undefined;
    /**
     * It may be possible for the structure map to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string | null;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the structure map is the organization or individual primarily responsible for the maintenance and upkeep of the structure map. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the structure map. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * This element does not describe the usage of the structure map. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this structure map.
     */
    purpose?: string | undefined;
    _purpose?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of structure maps that are appropriate for use versus not.
     */
    status: StructureMapStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * It is not necessary for a structure map to identify any dependent structures, though not listing them may restrict its usefulness.
     */
    structure?: fhir.IStructureMapStructure[] | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhir.IFhirElement | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: string | null;
    _url?: fhir.IFhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.IUsageContext[] | undefined;
    /**
     * There may be different structure map instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the structure map with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.IFhirElement | undefined;
};
/**
 * It is not necessary for a structure map to identify any dependent structures, though not listing them may restrict its usefulness.
 */
export declare class StructureMapStructure extends fhir.BackboneElement implements fhir.IStructureMapStructure {
    /**
     * This is needed if both types have the same name (e.g. version conversion).
     */
    alias?: string | undefined;
    _alias?: fhir.FhirElement | undefined;
    /**
     * Documentation that describes how the structure is used in the mapping.
     */
    documentation?: string | undefined;
    _documentation?: fhir.FhirElement | undefined;
    /**
     * How the referenced structure is used in this mapping.
     */
    mode: StructureMapStructureModeEnum | null;
    _mode?: fhir.FhirElement | undefined;
    /**
     * The canonical reference to the structure.
     */
    url: string | null;
    _url?: fhir.FhirElement | undefined;
    /**
     * Default constructor for StructureMapStructure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IStructureMapStructure>);
    /**
     * Check if the current StructureMapStructure contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a StructureMapStructure from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IStructureMapStructure): StructureMapStructure;
}
/**
 * If no inputs are named, then the entry mappings are type based.
 */
export declare class StructureMapGroupInput extends fhir.BackboneElement implements fhir.IStructureMapGroupInput {
    /**
     * Documentation for this instance of data.
     */
    documentation?: string | undefined;
    _documentation?: fhir.FhirElement | undefined;
    /**
     * Mode for this instance of data.
     */
    mode: StructureMapGroupInputModeEnum | null;
    _mode?: fhir.FhirElement | undefined;
    /**
     * Name for this instance of data.
     */
    name: string | null;
    _name?: fhir.FhirElement | undefined;
    /**
     * Type for this instance of data.
     */
    type?: string | undefined;
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for StructureMapGroupInput - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IStructureMapGroupInput>);
    /**
     * Check if the current StructureMapGroupInput contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a StructureMapGroupInput from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IStructureMapGroupInput): StructureMapGroupInput;
}
/**
 * Source inputs to the mapping.
 */
export declare class StructureMapGroupRuleSource extends fhir.BackboneElement implements fhir.IStructureMapGroupRuleSource {
    /**
     * FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.
     */
    check?: string | undefined;
    _check?: fhir.FhirElement | undefined;
    /**
     * FHIRPath expression  - must be true or the rule does not apply.
     */
    condition?: string | undefined;
    _condition?: fhir.FhirElement | undefined;
    /**
     * Type or variable this rule applies to.
     */
    context: string | null;
    _context?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueBase64Binary?: string | undefined;
    _defaultValueBase64Binary?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueBoolean?: boolean | undefined;
    _defaultValueBoolean?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCanonical?: string | undefined;
    _defaultValueCanonical?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCode?: string | undefined;
    _defaultValueCode?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDate?: string | undefined;
    _defaultValueDate?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDateTime?: string | undefined;
    _defaultValueDateTime?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDecimal?: number | undefined;
    _defaultValueDecimal?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueId?: string | undefined;
    _defaultValueId?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueInstant?: string | undefined;
    _defaultValueInstant?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueInteger?: number | undefined;
    _defaultValueInteger?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueMarkdown?: string | undefined;
    _defaultValueMarkdown?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueOid?: string | undefined;
    _defaultValueOid?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValuePositiveInt?: number | undefined;
    _defaultValuePositiveInt?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueString?: string | undefined;
    _defaultValueString?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueTime?: string | undefined;
    _defaultValueTime?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUnsignedInt?: number | undefined;
    _defaultValueUnsignedInt?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUri?: string | undefined;
    _defaultValueUri?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUrl?: string | undefined;
    _defaultValueUrl?: fhir.FhirElement | undefined;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUuid?: string | undefined;
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
    _element?: fhir.FhirElement | undefined;
    /**
     * How to handle the list mode for this element.
     */
    listMode?: StructureMapGroupRuleSourceListModeEnum | undefined;
    _listMode?: fhir.FhirElement | undefined;
    /**
     * This is typically used for recording that something Is not transformed to the target for some reason.
     */
    logMessage?: string | undefined;
    _logMessage?: fhir.FhirElement | undefined;
    /**
     * Specified maximum cardinality for the element - a number or a "*". This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it's the default value).
     */
    max?: string | undefined;
    _max?: fhir.FhirElement | undefined;
    /**
     * Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.
     */
    min?: number | undefined;
    _min?: fhir.FhirElement | undefined;
    /**
     * Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.
     */
    type?: string | undefined;
    _type?: fhir.FhirElement | undefined;
    /**
     * Named context for field, if a field is specified.
     */
    variable?: string | undefined;
    _variable?: fhir.FhirElement | undefined;
    /**
     * Default constructor for StructureMapGroupRuleSource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IStructureMapGroupRuleSource>);
    /**
     * Check if the current StructureMapGroupRuleSource contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a StructureMapGroupRuleSource from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IStructureMapGroupRuleSource): StructureMapGroupRuleSource;
}
/**
 * Parameters to the transform.
 */
export declare class StructureMapGroupRuleTargetParameter extends fhir.BackboneElement implements fhir.IStructureMapGroupRuleTargetParameter {
    /**
     * Parameter value - variable or literal.
     */
    valueId?: string | undefined;
    _valueId?: fhir.FhirElement | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueString?: string | undefined;
    _valueString?: fhir.FhirElement | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhir.FhirElement | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhir.FhirElement | undefined;
    /**
     * Parameter value - variable or literal.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhir.FhirElement | undefined;
    /**
     * Default constructor for StructureMapGroupRuleTargetParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IStructureMapGroupRuleTargetParameter>);
    /**
     * Check if the current StructureMapGroupRuleTargetParameter contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a StructureMapGroupRuleTargetParameter from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IStructureMapGroupRuleTargetParameter): StructureMapGroupRuleTargetParameter;
}
/**
 * Content to create because of this mapping rule.
 */
export declare class StructureMapGroupRuleTarget extends fhir.BackboneElement implements fhir.IStructureMapGroupRuleTarget {
    /**
     * Type or variable this rule applies to.
     */
    context?: string | undefined;
    _context?: fhir.FhirElement | undefined;
    /**
     * How to interpret the context.
     */
    contextType?: StructureMapGroupRuleTargetContextTypeEnum | undefined;
    _contextType?: fhir.FhirElement | undefined;
    /**
     * Field to create in the context.
     */
    element?: string | undefined;
    _element?: fhir.FhirElement | undefined;
    /**
     * If field is a list, how to manage the list.
     */
    listMode?: StructureMapGroupRuleTargetListModeEnum[] | undefined;
    _listMode?: fhir.FhirElement[] | undefined;
    /**
     * Internal rule reference for shared list items.
     */
    listRuleId?: string | undefined;
    _listRuleId?: fhir.FhirElement | undefined;
    /**
     * Parameters to the transform.
     */
    parameter?: fhir.StructureMapGroupRuleTargetParameter[] | undefined;
    /**
     * How the data is copied / created.
     */
    transform?: StructureMapGroupRuleTargetTransformEnum | undefined;
    _transform?: fhir.FhirElement | undefined;
    /**
     * Named context for field, if desired, and a field is specified.
     */
    variable?: string | undefined;
    _variable?: fhir.FhirElement | undefined;
    /**
     * Default constructor for StructureMapGroupRuleTarget - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IStructureMapGroupRuleTarget>);
    /**
     * Check if the current StructureMapGroupRuleTarget contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a StructureMapGroupRuleTarget from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IStructureMapGroupRuleTarget): StructureMapGroupRuleTarget;
}
/**
 * Which other rules to apply in the context of this rule.
 */
export declare class StructureMapGroupRuleDependent extends fhir.BackboneElement implements fhir.IStructureMapGroupRuleDependent {
    /**
     * Name of a rule or group to apply.
     */
    name: string | null;
    _name?: fhir.FhirElement | undefined;
    /**
     * Variable to pass to the rule or group.
     */
    variable: string[] | null;
    _variable?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for StructureMapGroupRuleDependent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IStructureMapGroupRuleDependent>);
    /**
     * Check if the current StructureMapGroupRuleDependent contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a StructureMapGroupRuleDependent from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IStructureMapGroupRuleDependent): StructureMapGroupRuleDependent;
}
/**
 * Transform Rule from source to target.
 */
export declare class StructureMapGroupRule extends fhir.BackboneElement implements fhir.IStructureMapGroupRule {
    /**
     * Which other rules to apply in the context of this rule.
     */
    dependent?: fhir.StructureMapGroupRuleDependent[] | undefined;
    /**
     * Documentation for this instance of data.
     */
    documentation?: string | undefined;
    _documentation?: fhir.FhirElement | undefined;
    /**
     * Name of the rule for internal references.
     */
    name: string | null;
    _name?: fhir.FhirElement | undefined;
    /**
     * Rules contained in this rule.
     */
    rule?: fhir.StructureMapGroupRule[] | undefined;
    /**
     * Source inputs to the mapping.
     */
    source: fhir.StructureMapGroupRuleSource[] | null;
    /**
     * Content to create because of this mapping rule.
     */
    target?: fhir.StructureMapGroupRuleTarget[] | undefined;
    /**
     * Default constructor for StructureMapGroupRule - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IStructureMapGroupRule>);
    /**
     * Check if the current StructureMapGroupRule contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a StructureMapGroupRule from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IStructureMapGroupRule): StructureMapGroupRule;
}
/**
 * Organizes the mapping into manageable chunks for human review/ease of maintenance.
 */
export declare class StructureMapGroup extends fhir.BackboneElement implements fhir.IStructureMapGroup {
    /**
     * Additional supporting documentation that explains the purpose of the group and the types of mappings within it.
     */
    documentation?: string | undefined;
    _documentation?: fhir.FhirElement | undefined;
    /**
     * Another group that this group adds rules to.
     */
    extends?: string | undefined;
    _extends?: fhir.FhirElement | undefined;
    /**
     * If no inputs are named, then the entry mappings are type based.
     */
    input: fhir.StructureMapGroupInput[] | null;
    /**
     * A unique name for the group for the convenience of human readers.
     */
    name: string | null;
    _name?: fhir.FhirElement | undefined;
    /**
     * Transform Rule from source to target.
     */
    rule: fhir.StructureMapGroupRule[] | null;
    /**
     * Not applicable if the underlying model is untyped. There can only be one default mapping for any particular type combination.
     */
    typeMode: StructureMapGroupTypeModeEnum | null;
    _typeMode?: fhir.FhirElement | undefined;
    /**
     * Default constructor for StructureMapGroup - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IStructureMapGroup>);
    /**
     * Check if the current StructureMapGroup contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a StructureMapGroup from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IStructureMapGroup): StructureMapGroup;
}
/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
export declare class StructureMap extends fhir.DomainResource implements fhir.IStructureMap {
    /**
     * Resource Type Name
     */
    resourceType: "StructureMap";
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * A copyright statement relating to the structure map and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure map.
     */
    copyright?: string | undefined;
    _copyright?: fhir.FhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the structure map. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * This description can be used to capture details such as why the structure map was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the structure map as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the structure map is presumed to be the predominant language in the place the structure map was created).
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of structure maps that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhir.FhirElement | undefined;
    /**
     * Organizes the mapping into manageable chunks for human review/ease of maintenance.
     */
    group: fhir.StructureMapGroup[] | null;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this structure map outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Other maps used by this map (canonical URLs).
     */
    import?: string[] | undefined;
    _import?: fhir.FhirElement[] | undefined;
    /**
     * It may be possible for the structure map to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string | null;
    _name?: fhir.FhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the structure map is the organization or individual primarily responsible for the maintenance and upkeep of the structure map. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the structure map. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhir.FhirElement | undefined;
    /**
     * This element does not describe the usage of the structure map. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this structure map.
     */
    purpose?: string | undefined;
    _purpose?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of structure maps that are appropriate for use versus not.
     */
    status: StructureMapStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * It is not necessary for a structure map to identify any dependent structures, though not listing them may restrict its usefulness.
     */
    structure?: fhir.StructureMapStructure[] | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhir.FhirElement | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: string | null;
    _url?: fhir.FhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * There may be different structure map instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the structure map with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.FhirElement | undefined;
    /**
     * Default constructor for StructureMap - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IStructureMap>);
    /**
     * Check if the current StructureMap contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a StructureMap from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IStructureMap): StructureMap;
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
 * Code Values for the StructureMap.group.input.mode field
 */
export declare enum StructureMapGroupInputModeEnum {
    SOURCE = "source",
    TARGET = "target"
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
 * Code Values for the StructureMap.group.typeMode field
 */
export declare enum StructureMapGroupTypeModeEnum {
    NONE = "none",
    TYPES = "types",
    TYPE_AND_TYPES = "type-and-types"
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