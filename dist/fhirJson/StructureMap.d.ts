import * as fhir from '../fhirJson.js';
/**
 * It is not necessary for a structure map to identify any dependent structures, though not listing them may restrict its usefulness.
 */
export interface StructureMapStructure extends fhir.BackboneElement {
    /**
     * The canonical reference to the structure.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: StructureMap.structure.url
     */
    _url?: fhir.FhirElement;
    /**
     * How the referenced structure is used in this mapping.
     */
    mode: 'produced' | 'queried' | 'source' | 'target' | null;
    /**
     * This is needed if both types have the same name (e.g. version conversion).
     */
    alias?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.structure.alias
     */
    _alias?: fhir.FhirElement;
    /**
     * Documentation that describes how the structure is used in the mapping.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.structure.documentation
     */
    _documentation?: fhir.FhirElement;
}
/**
 * If no inputs are named, then the entry mappings are type based.
 */
export interface StructureMapGroupInput extends fhir.BackboneElement {
    /**
     * Name for this instance of data.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: StructureMap.group.input.name
     */
    _name?: fhir.FhirElement;
    /**
     * Type for this instance of data.
     */
    type?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.input.type
     */
    _type?: fhir.FhirElement;
    /**
     * Mode for this instance of data.
     */
    mode: 'source' | 'target' | null;
    /**
     * Documentation for this instance of data.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.input.documentation
     */
    _documentation?: fhir.FhirElement;
}
/**
 * Source inputs to the mapping.
 */
export interface StructureMapGroupRuleSource extends fhir.BackboneElement {
    /**
     * Type or variable this rule applies to.
     */
    context: string | null;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.context
     */
    _context?: fhir.FhirElement;
    /**
     * Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.
     */
    min?: number | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.min
     */
    _min?: fhir.FhirElement;
    /**
     * Specified maximum cardinality for the element - a number or a "*". This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it's the default value).
     */
    max?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.max
     */
    _max?: fhir.FhirElement;
    /**
     * Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.
     */
    type?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.type
     */
    _type?: fhir.FhirElement;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueBase64Binary?: fhir.FhirElement;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueBoolean?: fhir.FhirElement;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueCanonical?: fhir.FhirElement;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueCode?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueCode?: fhir.FhirElement;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDate?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueDate?: fhir.FhirElement;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueDateTime?: fhir.FhirElement;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueDecimal?: fhir.FhirElement;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueId?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueId?: fhir.FhirElement;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueInstant?: fhir.FhirElement;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueInteger?: fhir.FhirElement;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueMarkdown?: fhir.FhirElement;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueOid?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueOid?: fhir.FhirElement;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValuePositiveInt?: fhir.FhirElement;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueString?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueString?: fhir.FhirElement;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueTime?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueTime?: fhir.FhirElement;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueUnsignedInt?: fhir.FhirElement;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUri?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueUri?: fhir.FhirElement;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUrl?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueUrl?: fhir.FhirElement;
    /**
     * If there's a default value on an item that can repeat, it will only be used once.
     */
    defaultValueUuid?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.defaultValue[x]
     */
    _defaultValueUuid?: fhir.FhirElement;
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
    _element?: fhir.FhirElement;
    /**
     * How to handle the list mode for this element.
     */
    listMode?: 'first' | 'last' | 'not_first' | 'not_last' | 'only_one' | undefined;
    /**
     * Named context for field, if a field is specified.
     */
    variable?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.variable
     */
    _variable?: fhir.FhirElement;
    /**
     * FHIRPath expression  - must be true or the rule does not apply.
     */
    condition?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.condition
     */
    _condition?: fhir.FhirElement;
    /**
     * FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.
     */
    check?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.check
     */
    _check?: fhir.FhirElement;
    /**
     * This is typically used for recording that something Is not transformed to the target for some reason.
     */
    logMessage?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.source.logMessage
     */
    _logMessage?: fhir.FhirElement;
}
/**
 * Parameters to the transform.
 */
export interface StructureMapGroupRuleTargetParameter extends fhir.BackboneElement {
    /**
     * Parameter value - variable or literal.
     */
    valueId?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.parameter.value[x]
     */
    _valueId?: fhir.FhirElement;
    /**
     * Parameter value - variable or literal.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.parameter.value[x]
     */
    _valueString?: fhir.FhirElement;
    /**
     * Parameter value - variable or literal.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.parameter.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
    /**
     * Parameter value - variable or literal.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.parameter.value[x]
     */
    _valueInteger?: fhir.FhirElement;
    /**
     * Parameter value - variable or literal.
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.parameter.value[x]
     */
    _valueDecimal?: fhir.FhirElement;
}
/**
 * Content to create because of this mapping rule.
 */
export interface StructureMapGroupRuleTarget extends fhir.BackboneElement {
    /**
     * Type or variable this rule applies to.
     */
    context?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.context
     */
    _context?: fhir.FhirElement;
    /**
     * How to interpret the context.
     */
    contextType?: 'type' | 'variable' | undefined;
    /**
     * Field to create in the context.
     */
    element?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.element
     */
    _element?: fhir.FhirElement;
    /**
     * Named context for field, if desired, and a field is specified.
     */
    variable?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.variable
     */
    _variable?: fhir.FhirElement;
    /**
     * If field is a list, how to manage the list.
     */
    listMode?: ('collate' | 'first' | 'last' | 'share')[] | undefined;
    /**
     * Internal rule reference for shared list items.
     */
    listRuleId?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.target.listRuleId
     */
    _listRuleId?: fhir.FhirElement;
    /**
     * How the data is copied / created.
     */
    transform?: 'append' | 'c' | 'cast' | 'cc' | 'copy' | 'cp' | 'create' | 'dateOp' | 'escape' | 'evaluate' | 'id' | 'pointer' | 'qty' | 'reference' | 'translate' | 'truncate' | 'uuid' | undefined;
    /**
     * Parameters to the transform.
     */
    parameter?: fhir.StructureMapGroupRuleTargetParameter[] | undefined;
}
/**
 * Which other rules to apply in the context of this rule.
 */
export interface StructureMapGroupRuleDependent extends fhir.BackboneElement {
    /**
     * Name of a rule or group to apply.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.dependent.name
     */
    _name?: fhir.FhirElement;
    /**
     * Variable to pass to the rule or group.
     */
    variable: string[] | null;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.dependent.variable
     */
    _variable?: (fhir.FhirElement | null)[];
}
/**
 * Transform Rule from source to target.
 */
export interface StructureMapGroupRule extends fhir.BackboneElement {
    /**
     * Name of the rule for internal references.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: StructureMap.group.rule.name
     */
    _name?: fhir.FhirElement;
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
    _documentation?: fhir.FhirElement;
}
/**
 * Organizes the mapping into manageable chunks for human review/ease of maintenance.
 */
export interface StructureMapGroup extends fhir.BackboneElement {
    /**
     * A unique name for the group for the convenience of human readers.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: StructureMap.group.name
     */
    _name?: fhir.FhirElement;
    /**
     * Another group that this group adds rules to.
     */
    extends?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.extends
     */
    _extends?: fhir.FhirElement;
    /**
     * Not applicable if the underlying model is untyped. There can only be one default mapping for any particular type combination.
     */
    typeMode: 'none' | 'type-and-types' | 'types' | null;
    /**
     * Additional supporting documentation that explains the purpose of the group and the types of mappings within it.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.group.documentation
     */
    _documentation?: fhir.FhirElement;
    /**
     * If no inputs are named, then the entry mappings are type based.
     */
    input: fhir.StructureMapGroupInput[] | null;
    /**
     * Transform Rule from source to target.
     */
    rule: fhir.StructureMapGroupRule[] | null;
}
/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
export interface StructureMap extends fhir.DomainResource {
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
    _url?: fhir.FhirElement;
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
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: StructureMap.name
     */
    _name?: fhir.FhirElement;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.title
     */
    _title?: fhir.FhirElement;
    /**
     * Allows filtering of structure maps that are appropriate for use versus not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Allows filtering of structure maps that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: StructureMap.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the structure map. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the structure map is the organization or individual primarily responsible for the maintenance and upkeep of the structure map. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the structure map. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.publisher
     */
    _publisher?: fhir.FhirElement;
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
    _description?: fhir.FhirElement;
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
    _purpose?: fhir.FhirElement;
    /**
     * A copyright statement relating to the structure map and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure map.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: StructureMap.copyright
     */
    _copyright?: fhir.FhirElement;
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
    _import?: (fhir.FhirElement | null)[];
    /**
     * Organizes the mapping into manageable chunks for human review/ease of maintenance.
     */
    group: fhir.StructureMapGroup[] | null;
}
//# sourceMappingURL=StructureMap.d.ts.map