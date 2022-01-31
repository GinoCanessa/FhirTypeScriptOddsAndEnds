// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../optionalmodels'
import * as fhirInterfaces from '../optionalinterfaces'
/**
 * Indicates who should participate in performing the action described.
 */
export class ActivityDefinitionParticipant extends fhirModels.BackboneElement implements fhirInterfaces.IActivityDefinitionParticipant {
  /**
   * The role the participant should play in performing the described action.
   */
  role?: fhirModels.CodeableConcept|undefined;
  /**
   * The type of participant in the action.
   */
  type?: ActivityDefinitionParticipantTypeEnum|undefined;
  _type?: fhirModels.Element|undefined;
  /**
   * Default constructor for ActivityDefinitionParticipant from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IActivityDefinitionParticipant>) {
    super(source);
    if (source["role"] !== undefined) { this.role = new fhirModels.CodeableConcept(source.role); }
    if (source["type"] !== undefined) { this.type = source.type; }
    if (source["_type"] !== undefined) { this._type = new fhirModels.Element(source._type); }
  }
  /**
   * Factory function to create a ActivityDefinitionParticipant from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IActivityDefinitionParticipant):ActivityDefinitionParticipant {
    var dest:ActivityDefinitionParticipant = new ActivityDefinitionParticipant(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `ActivityDefinitionParticipant is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current ActivityDefinitionParticipant contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["type"] === undefined) { missingElements.push("type"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Code Values for the ActivityDefinition.participant.type field
 */
export enum ActivityDefinitionParticipantTypeEnum {
  PATIENT = "patient",
  PRACTITIONER = "practitioner",
  RELATED_PERSON = "related-person",
  DEVICE = "device",
}
/**
 * Dynamic values are applied in the order in which they are defined in the ActivityDefinition. Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
 */
export class ActivityDefinitionDynamicValue extends fhirModels.BackboneElement implements fhirInterfaces.IActivityDefinitionDynamicValue {
  /**
   * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
   */
  expression?: fhirModels.Expression|undefined;
  /**
   * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
   */
  path?: string|undefined;
  _path?: fhirModels.Element|undefined;
  /**
   * Default constructor for ActivityDefinitionDynamicValue from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IActivityDefinitionDynamicValue>) {
    super(source);
    if (source["expression"] !== undefined) { this.expression = new fhirModels.Expression(source.expression); }
    if (source["path"] !== undefined) { this.path = source.path; }
    if (source["_path"] !== undefined) { this._path = new fhirModels.Element(source._path); }
  }
  /**
   * Factory function to create a ActivityDefinitionDynamicValue from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IActivityDefinitionDynamicValue):ActivityDefinitionDynamicValue {
    var dest:ActivityDefinitionDynamicValue = new ActivityDefinitionDynamicValue(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `ActivityDefinitionDynamicValue is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current ActivityDefinitionDynamicValue contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["expression"] === undefined) { missingElements.push("expression"); }
    if (this["path"] === undefined) { missingElements.push("path"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
 */
export class ActivityDefinition extends fhirModels.DomainResource implements fhirInterfaces.IActivityDefinition {
  /**
   * Resource Type Name
   */
  readonly resourceType = "ActivityDefinition";
  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  approvalDate?: string|undefined;
  _approvalDate?: fhirModels.Element|undefined;
  /**
   * An individiual or organization primarily involved in the creation and maintenance of the content.
   */
  author?: fhirModels.ContactDetail[]|undefined;
  /**
   * Only used if not implicit in the code found in ServiceRequest.type.
   */
  bodySite?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Tends to be less relevant for activities involving particular products.
   */
  code?: fhirModels.CodeableConcept|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhirModels.ContactDetail[]|undefined;
  /**
   * A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the activity definition.
   */
  copyright?: string|undefined;
  _copyright?: fhirModels.Element|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the activity definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string|undefined;
  _date?: fhirModels.Element|undefined;
  /**
   * This description can be used to capture details such as why the activity definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the activity definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the activity definition is presumed to be the predominant language in the place the activity definition was created).
   */
  description?: string|undefined;
  _description?: fhirModels.Element|undefined;
  /**
   * This element is not intended to be used to communicate a decision support response to cancel an order in progress. That should be done with the "remove" type of a PlanDefinition or RequestGroup.
   */
  doNotPerform?: boolean|undefined;
  _doNotPerform?: fhirModels.Element|undefined;
  /**
   * If a dosage instruction is used, the definition should not specify timing or quantity.
   */
  dosage?: fhirModels.Dosage[]|undefined;
  /**
   * Dynamic values are applied in the order in which they are defined in the ActivityDefinition. Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
   */
  dynamicValue?: fhirModels.ActivityDefinitionDynamicValue[]|undefined;
  /**
   * An individual or organization primarily responsible for internal coherence of the content.
   */
  editor?: fhirModels.ContactDetail[]|undefined;
  /**
   * The effective period for a activity definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: fhirModels.Period|undefined;
  /**
   * An individual or organization responsible for officially endorsing the content for use in some setting.
   */
  endorser?: fhirModels.ContactDetail[]|undefined;
  /**
   * Allows filtering of activity definitions that are appropriate for use versus not.
   */
  experimental?: boolean|undefined;
  _experimental?: fhirModels.Element|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this activity definition outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * Indicates the level of authority/intentionality associated with the activity and where the request should fit into the workflow chain.
   */
  intent?: ActivityDefinitionIntentEnum|undefined;
  _intent?: fhirModels.Element|undefined;
  /**
   * It may be possible for the activity definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhirModels.CodeableConcept[]|undefined;
  /**
   * May determine what types of extensions are permitted.
   */
  kind?: string|undefined;
  _kind?: fhirModels.Element|undefined;
  /**
   * If specified, this date follows the original approval date.
   */
  lastReviewDate?: string|undefined;
  _lastReviewDate?: fhirModels.Element|undefined;
  /**
   * A reference to a Library resource containing any formal logic used by the activity definition.
   */
  library?: string[]|undefined;
  _library?: fhirModels.Element[]|undefined;
  /**
   * May reference a specific clinical location or may just identify a type of location.
   */
  location?: fhirModels.Reference|undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: string|undefined;
  _name?: fhirModels.Element|undefined;
  /**
   * Defines observation requirements for the action to be performed, such as body weight or surface area.
   */
  observationRequirement?: fhirModels.Reference[]|undefined;
  /**
   * Defines the observations that are expected to be produced by the action.
   */
  observationResultRequirement?: fhirModels.Reference[]|undefined;
  /**
   * Indicates who should participate in performing the action described.
   */
  participant?: fhirModels.ActivityDefinitionParticipant[]|undefined;
  /**
   * Indicates how quickly the activity  should be addressed with respect to other requests.
   */
  priority?: ActivityDefinitionPriorityEnum|undefined;
  _priority?: fhirModels.Element|undefined;
  /**
   * Identifies the food, drug or other product being consumed or supplied in the activity.
   */
  productReference?: fhirModels.Reference|undefined;
  /**
   * Identifies the food, drug or other product being consumed or supplied in the activity.
   */
  productCodeableConcept?: fhirModels.CodeableConcept|undefined;
  /**
   * A profile to which the target of the activity definition is expected to conform.
   */
  profile?: string|undefined;
  _profile?: fhirModels.Element|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the activity definition is the organization or individual primarily responsible for the maintenance and upkeep of the activity definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the activity definition. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string|undefined;
  _publisher?: fhirModels.Element|undefined;
  /**
   * This element does not describe the usage of the activity definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this activity definition.
   */
  purpose?: string|undefined;
  _purpose?: fhirModels.Element|undefined;
  /**
   * Identifies the quantity expected to be consumed at once (per dose, per meal, etc.).
   */
  quantity?: fhirModels.Quantity|undefined;
  /**
   * Each related artifact is either an attachment, or a reference to another resource, but not both.
   */
  relatedArtifact?: fhirModels.RelatedArtifact[]|undefined;
  /**
   * An individual or organization primarily responsible for review of some aspect of the content.
   */
  reviewer?: fhirModels.ContactDetail[]|undefined;
  /**
   * Defines specimen requirements for the action to be performed, such as required specimens for a lab test.
   */
  specimenRequirement?: fhirModels.Reference[]|undefined;
  /**
   * Allows filtering of activity definitions that are appropriate for use versus not.
   */
  status?: ActivityDefinitionStatusEnum|undefined;
  _status?: fhirModels.Element|undefined;
  /**
   * A code or group definition that describes the intended subject of the activity being defined.
   */
  subjectCodeableConcept?: fhirModels.CodeableConcept|undefined;
  /**
   * A code or group definition that describes the intended subject of the activity being defined.
   */
  subjectReference?: fhirModels.Reference|undefined;
  /**
   * An explanatory or alternate title for the activity definition giving additional information about its content.
   */
  subtitle?: string|undefined;
  _subtitle?: fhirModels.Element|undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  timingTiming?: fhirModels.Timing|undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  timingDateTime?: string|undefined;
  _timingDateTime?: fhirModels.Element|undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  timingAge?: fhirModels.Age|undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  timingPeriod?: fhirModels.Period|undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  timingRange?: fhirModels.Range|undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  timingDuration?: fhirModels.Duration|undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: string|undefined;
  _title?: fhirModels.Element|undefined;
  /**
   * Descriptive topics related to the content of the activity. Topics provide a high-level categorization of the activity that can be useful for filtering and searching.
   */
  topic?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
   */
  transform?: string|undefined;
  _transform?: fhirModels.Element|undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: string|undefined;
  _url?: fhirModels.Element|undefined;
  /**
   * A detailed description of how the activity definition is used from a clinical perspective.
   */
  usage?: string|undefined;
  _usage?: fhirModels.Element|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhirModels.UsageContext[]|undefined;
  /**
   * There may be different activity definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the activity definition with the format [url]|[version].
   */
  version?: string|undefined;
  _version?: fhirModels.Element|undefined;
  /**
   * Default constructor for ActivityDefinition from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IActivityDefinition>) {
    super(source);
    if ((source['resourceType'] !== "ActivityDefinition") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a ActivityDefinition'; }
    if (source["approvalDate"] !== undefined) { this.approvalDate = source.approvalDate; }
    if (source["_approvalDate"] !== undefined) { this._approvalDate = new fhirModels.Element(source._approvalDate); }
    if (source["author"] !== undefined) { this.author = source.author.map((x) => new fhirModels.ContactDetail(x)); }
    if (source["bodySite"] !== undefined) { this.bodySite = source.bodySite.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["code"] !== undefined) { this.code = new fhirModels.CodeableConcept(source.code); }
    if (source["contact"] !== undefined) { this.contact = source.contact.map((x) => new fhirModels.ContactDetail(x)); }
    if (source["copyright"] !== undefined) { this.copyright = source.copyright; }
    if (source["_copyright"] !== undefined) { this._copyright = new fhirModels.Element(source._copyright); }
    if (source["date"] !== undefined) { this.date = source.date; }
    if (source["_date"] !== undefined) { this._date = new fhirModels.Element(source._date); }
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = new fhirModels.Element(source._description); }
    if (source["doNotPerform"] !== undefined) { this.doNotPerform = source.doNotPerform; }
    if (source["_doNotPerform"] !== undefined) { this._doNotPerform = new fhirModels.Element(source._doNotPerform); }
    if (source["dosage"] !== undefined) { this.dosage = source.dosage.map((x) => new fhirModels.Dosage(x)); }
    if (source["dynamicValue"] !== undefined) { this.dynamicValue = source.dynamicValue.map((x) => new fhirModels.ActivityDefinitionDynamicValue(x)); }
    if (source["editor"] !== undefined) { this.editor = source.editor.map((x) => new fhirModels.ContactDetail(x)); }
    if (source["effectivePeriod"] !== undefined) { this.effectivePeriod = new fhirModels.Period(source.effectivePeriod); }
    if (source["endorser"] !== undefined) { this.endorser = source.endorser.map((x) => new fhirModels.ContactDetail(x)); }
    if (source["experimental"] !== undefined) { this.experimental = source.experimental; }
    if (source["_experimental"] !== undefined) { this._experimental = new fhirModels.Element(source._experimental); }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x)); }
    if (source["intent"] !== undefined) { this.intent = source.intent; }
    if (source["_intent"] !== undefined) { this._intent = new fhirModels.Element(source._intent); }
    if (source["jurisdiction"] !== undefined) { this.jurisdiction = source.jurisdiction.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["kind"] !== undefined) { this.kind = source.kind; }
    if (source["_kind"] !== undefined) { this._kind = new fhirModels.Element(source._kind); }
    if (source["lastReviewDate"] !== undefined) { this.lastReviewDate = source.lastReviewDate; }
    if (source["_lastReviewDate"] !== undefined) { this._lastReviewDate = new fhirModels.Element(source._lastReviewDate); }
    if (source["library"] !== undefined) { this.library = source.library.map((x) => (x)); }
    if (source["_library"] !== undefined) { this._library = source._library.map((x) => new fhirModels.Element(x)); }
    if (source["location"] !== undefined) { this.location = new fhirModels.Reference(source.location); }
    if (source["name"] !== undefined) { this.name = source.name; }
    if (source["_name"] !== undefined) { this._name = new fhirModels.Element(source._name); }
    if (source["observationRequirement"] !== undefined) { this.observationRequirement = source.observationRequirement.map((x) => new fhirModels.Reference(x)); }
    if (source["observationResultRequirement"] !== undefined) { this.observationResultRequirement = source.observationResultRequirement.map((x) => new fhirModels.Reference(x)); }
    if (source["participant"] !== undefined) { this.participant = source.participant.map((x) => new fhirModels.ActivityDefinitionParticipant(x)); }
    if (source["priority"] !== undefined) { this.priority = source.priority; }
    if (source["_priority"] !== undefined) { this._priority = new fhirModels.Element(source._priority); }
    if (source["productReference"] !== undefined) { this.productReference = new fhirModels.Reference(source.productReference); }
    if (source["productCodeableConcept"] !== undefined) { this.productCodeableConcept = new fhirModels.CodeableConcept(source.productCodeableConcept); }
    if (source["profile"] !== undefined) { this.profile = source.profile; }
    if (source["_profile"] !== undefined) { this._profile = new fhirModels.Element(source._profile); }
    if (source["publisher"] !== undefined) { this.publisher = source.publisher; }
    if (source["_publisher"] !== undefined) { this._publisher = new fhirModels.Element(source._publisher); }
    if (source["purpose"] !== undefined) { this.purpose = source.purpose; }
    if (source["_purpose"] !== undefined) { this._purpose = new fhirModels.Element(source._purpose); }
    if (source["quantity"] !== undefined) { this.quantity = new fhirModels.Quantity(source.quantity); }
    if (source["relatedArtifact"] !== undefined) { this.relatedArtifact = source.relatedArtifact.map((x) => new fhirModels.RelatedArtifact(x)); }
    if (source["reviewer"] !== undefined) { this.reviewer = source.reviewer.map((x) => new fhirModels.ContactDetail(x)); }
    if (source["specimenRequirement"] !== undefined) { this.specimenRequirement = source.specimenRequirement.map((x) => new fhirModels.Reference(x)); }
    if (source["status"] !== undefined) { this.status = source.status; }
    if (source["_status"] !== undefined) { this._status = new fhirModels.Element(source._status); }
    if (source["subjectCodeableConcept"] !== undefined) { this.subjectCodeableConcept = new fhirModels.CodeableConcept(source.subjectCodeableConcept); }
    if (source["subjectReference"] !== undefined) { this.subjectReference = new fhirModels.Reference(source.subjectReference); }
    if (source["subtitle"] !== undefined) { this.subtitle = source.subtitle; }
    if (source["_subtitle"] !== undefined) { this._subtitle = new fhirModels.Element(source._subtitle); }
    if (source["timingTiming"] !== undefined) { this.timingTiming = new fhirModels.Timing(source.timingTiming); }
    if (source["timingDateTime"] !== undefined) { this.timingDateTime = source.timingDateTime; }
    if (source["_timingDateTime"] !== undefined) { this._timingDateTime = new fhirModels.Element(source._timingDateTime); }
    if (source["timingAge"] !== undefined) { this.timingAge = new fhirModels.Age(source.timingAge); }
    if (source["timingPeriod"] !== undefined) { this.timingPeriod = new fhirModels.Period(source.timingPeriod); }
    if (source["timingRange"] !== undefined) { this.timingRange = new fhirModels.Range(source.timingRange); }
    if (source["timingDuration"] !== undefined) { this.timingDuration = new fhirModels.Duration(source.timingDuration); }
    if (source["title"] !== undefined) { this.title = source.title; }
    if (source["_title"] !== undefined) { this._title = new fhirModels.Element(source._title); }
    if (source["topic"] !== undefined) { this.topic = source.topic.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["transform"] !== undefined) { this.transform = source.transform; }
    if (source["_transform"] !== undefined) { this._transform = new fhirModels.Element(source._transform); }
    if (source["url"] !== undefined) { this.url = source.url; }
    if (source["_url"] !== undefined) { this._url = new fhirModels.Element(source._url); }
    if (source["usage"] !== undefined) { this.usage = source.usage; }
    if (source["_usage"] !== undefined) { this._usage = new fhirModels.Element(source._usage); }
    if (source["useContext"] !== undefined) { this.useContext = source.useContext.map((x) => new fhirModels.UsageContext(x)); }
    if (source["version"] !== undefined) { this.version = source.version; }
    if (source["_version"] !== undefined) { this._version = new fhirModels.Element(source._version); }
  }
  /**
   * Factory function to create a ActivityDefinition from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IActivityDefinition):ActivityDefinition {
    var dest:ActivityDefinition = new ActivityDefinition(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `ActivityDefinition is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current ActivityDefinition contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["status"] === undefined) { missingElements.push("status"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Code Values for the ActivityDefinition.intent field
 */
export enum ActivityDefinitionIntentEnum {
  PROPOSAL = "proposal",
  PLAN = "plan",
  DIRECTIVE = "directive",
  ORDER = "order",
  ORIGINAL_ORDER = "original-order",
  REFLEX_ORDER = "reflex-order",
  FILLER_ORDER = "filler-order",
  INSTANCE_ORDER = "instance-order",
  OPTION = "option",
}
/**
 * Code Values for the ActivityDefinition.priority field
 */
export enum ActivityDefinitionPriorityEnum {
  ROUTINE = "routine",
  URGENT = "urgent",
  ASAP = "asap",
  STAT = "stat",
}
/**
 * Code Values for the ActivityDefinition.status field
 */
export enum ActivityDefinitionStatusEnum {
  DRAFT = "draft",
  ACTIVE = "active",
  RETIRED = "retired",
  UNKNOWN = "unknown",
}