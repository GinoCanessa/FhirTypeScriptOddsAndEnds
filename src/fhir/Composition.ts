// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * Only list each attester once.
 */
export type ICompositionAttester = fhir.IBackboneElement & {
  /**
   * The type of attestation the authenticator offers.
   */
  mode: CompositionAttesterModeEnum|null;
  _mode?: fhir.IFhirElement|undefined;
  /**
   * Who attested the composition in the specified way.
   */
  party?: fhir.IReference|undefined;
  /**
   * When the composition was attested by the party.
   */
  time?: string|undefined;
  _time?: fhir.IFhirElement|undefined;
}
/**
 * A document is a version specific composition.
 */
export type ICompositionRelatesTo = fhir.IBackboneElement & {
  /**
   * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
   */
  code: CompositionRelatesToCodeEnum|null;
  _code?: fhir.IFhirElement|undefined;
  /**
   * The target composition/document of this relationship.
   */
  targetIdentifier?: fhir.IIdentifier|undefined;
  /**
   * The target composition/document of this relationship.
   */
  targetReference?: fhir.IReference|undefined;
}
/**
 * The event needs to be consistent with the type element, though can provide further information if desired.
 */
export type ICompositionEvent = fhir.IBackboneElement & {
  /**
   * An event can further specialize the act inherent in the typeCode, such as where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more eventCodes are included, they SHALL NOT conflict with the values inherent in the classCode, practiceSettingCode or typeCode, as such a conflict would create an ambiguous situation. This short list of codes is provided to be used as key words for certain types of queries.
   */
  code?: fhir.ICodeableConcept[]|undefined;
  /**
   * The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy.
   */
  detail?: fhir.IReference[]|undefined;
  /**
   * The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time.
   */
  period?: fhir.IPeriod|undefined;
}
/**
 * The root of the sections that make up the composition.
 */
export type ICompositionSection = fhir.IBackboneElement & {
  /**
   * Identifies who is responsible for the information in this section, not necessarily who typed it in.
   */
  author?: fhir.IReference[]|undefined;
  /**
   * The code identifies the section for an automated processor of the document. This is particularly relevant when using profiles to control the structure of the document.   
   * If the section has content (instead of sub-sections), the section.code does not change the meaning or interpretation of the resource that is the content of the section in the comments for the section.code.
   */
  code?: fhir.ICodeableConcept|undefined;
  /**
   * The various reasons for an empty section make a significant interpretation to its interpretation. Note that this code is for use when the entire section content has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
   */
  emptyReason?: fhir.ICodeableConcept|undefined;
  /**
   * If there are no entries in the list, an emptyReason SHOULD be provided.
   */
  entry?: fhir.IReference[]|undefined;
  /**
   * Typically, sections in a doument are about the subject of the document, whether that is a  patient, or group of patients, location, or device, or whatever. For some kind of documents, some sections actually contain data about related entities. Typical examples are  a section in a newborn discharge summary concerning the mother, or family history documents, with a section about each family member, though there are many other examples.
   */
  focus?: fhir.IReference|undefined;
  /**
   * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
   */
  mode?: CompositionSectionModeEnum|undefined;
  _mode?: fhir.IFhirElement|undefined;
  /**
   * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
   */
  orderedBy?: fhir.ICodeableConcept|undefined;
  /**
   * Nested sections are primarily used to help human readers navigate to particular portions of the document.
   */
  section?: fhir.ICompositionSection[]|undefined;
  /**
   * Document profiles may define what content should be represented in the narrative to ensure clinical safety.
   */
  text?: fhir.INarrative|undefined;
  /**
   * The title identifies the section for a human reader. The title must be consistent with the narrative of the resource that is the target of the section.content reference. Generally, sections SHOULD have titles, but in some documents, it is unnecessary or inappropriate. Typically, this is where a section has subsections that have their own adequately distinguishing title,  or documents that only have a single section. Most Implementation Guides will make section title to be a required element.
   */
  title?: string|undefined;
  _title?: fhir.IFhirElement|undefined;
}
/**
 * A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
 */
export type IComposition = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "Composition";
  /**
   * Only list each attester once.
   */
  attester?: fhir.ICompositionAttester[]|undefined;
  /**
   * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
   */
  author: fhir.IReference[]|null;
  /**
   * This is a metadata field from [XDS/MHD](http://wiki.ihe.net/index.php?title=Mobile_access_to_Health_Documents_(MHD)).
   */
  category?: fhir.ICodeableConcept[]|undefined;
  /**
   * The exact use of this element, and enforcement and issues related to highly sensitive documents are out of scope for the base specification, and delegated to implementation profiles (see security section).  This element is labeled as a modifier because highly confidential documents must not be treated as if they are not.
   */
  confidentiality?: string|undefined;
  _confidentiality?: fhir.IFhirElement|undefined;
  /**
   * This is useful when documents are derived from a composition - provides guidance for how to get the latest version of the document. This is optional because this is sometimes not known by the authoring system, and can be inferred by context. However, it is important that this information be known when working with a derived document, so providing a custodian is encouraged.
   */
  custodian?: fhir.IReference|undefined;
  /**
   * The Last Modified Date on the composition may be after the date of the document was attested without being changed.
   */
  date: string|null;
  _date?: fhir.IFhirElement|undefined;
  /**
   * Describes the clinical encounter or type of care this documentation is associated with.
   */
  encounter?: fhir.IReference|undefined;
  /**
   * The event needs to be consistent with the type element, though can provide further information if desired.
   */
  event?: fhir.ICompositionEvent[]|undefined;
  /**
   * Similar to ClinicalDocument/setId in CDA. See discussion in resource definition for how these relate.
   */
  identifier?: fhir.IIdentifier|undefined;
  /**
   * A document is a version specific composition.
   */
  relatesTo?: fhir.ICompositionRelatesTo[]|undefined;
  /**
   * The root of the sections that make up the composition.
   */
  section?: fhir.ICompositionSection[]|undefined;
  /**
   * If a composition is marked as withdrawn, the compositions/documents in the series, or data from the composition or document series, should never be displayed to a user without being clearly marked as untrustworthy. The flag "entered-in-error" is why this element is labeled as a modifier of other elements.   
   * Some reporting work flows require that the original narrative of a final document never be altered; instead, only new narrative can be added. The composition resource has no explicit status for explicitly noting whether this business rule is in effect. This would be handled by an extension if required.
   */
  status: CompositionStatusEnum|null;
  _status?: fhir.IFhirElement|undefined;
  /**
   * For clinical documents, this is usually the patient.
   */
  subject?: fhir.IReference|undefined;
  /**
   * For many compositions, the title is the same as the text or a display name of Composition.type (e.g. a "consultation" or "progress note"). Note that CDA does not make title mandatory, but there are no known cases where it is useful for title to be omitted, so it is mandatory here. Feedback on this requirement is welcome during the trial use period.
   */
  title: string|null;
  _title?: fhir.IFhirElement|undefined;
  /**
   * For Composition type, LOINC is ubiquitous and strongly endorsed by HL7. Most implementation guides will require a specific LOINC code, or use LOINC as an extensible binding.
   */
  type: fhir.ICodeableConcept|null;
}
/**
 * Only list each attester once.
 */
export class CompositionAttester extends fhir.BackboneElement implements fhir.ICompositionAttester {
  /**
   * The type of attestation the authenticator offers.
   */
  public mode: CompositionAttesterModeEnum|null;
  public _mode?: fhir.FhirElement|undefined;
  /**
   * Who attested the composition in the specified way.
   */
  public party?: fhir.Reference|undefined;
  /**
   * When the composition was attested by the party.
   */
  public time?: string|undefined;
  public _time?: fhir.FhirElement|undefined;
  /**
   * Default constructor for CompositionAttester - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ICompositionAttester> = {}) {
    super(source);
    this.mode = null;
    if (source["mode"]) { this.mode = source.mode; }
    if (this.mode === undefined) { this.mode = null }
    if (source["_mode"]) { this._mode = new fhir.FhirElement(source._mode!); }
    if (source["party"]) { this.party = new fhir.Reference(source.party!); }
    if (source["time"]) { this.time = source.time; }
    if (source["_time"]) { this._time = new fhir.FhirElement(source._time!); }
  }
  /**
   * Check if the current CompositionAttester contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["mode"] === undefined) { missingElements.push("mode"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a CompositionAttester from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.ICompositionAttester):CompositionAttester {
    var dest:CompositionAttester = new CompositionAttester(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `CompositionAttester is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * A document is a version specific composition.
 */
export class CompositionRelatesTo extends fhir.BackboneElement implements fhir.ICompositionRelatesTo {
  /**
   * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
   */
  public code: CompositionRelatesToCodeEnum|null;
  public _code?: fhir.FhirElement|undefined;
  /**
   * The target composition/document of this relationship.
   */
  public targetIdentifier?: fhir.Identifier|undefined;
  /**
   * The target composition/document of this relationship.
   */
  public targetReference?: fhir.Reference|undefined;
  /**
   * Default constructor for CompositionRelatesTo - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ICompositionRelatesTo> = {}) {
    super(source);
    this.code = null;
    if (source["code"]) { this.code = source.code; }
    if (this.code === undefined) { this.code = null }
    if (source["_code"]) { this._code = new fhir.FhirElement(source._code!); }
    if (source["targetIdentifier"]) { this.targetIdentifier = new fhir.Identifier(source.targetIdentifier!); }
    if (source["targetReference"]) { this.targetReference = new fhir.Reference(source.targetReference!); }
  }
  /**
   * Check if the current CompositionRelatesTo contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["code"] === undefined) { missingElements.push("code"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a CompositionRelatesTo from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.ICompositionRelatesTo):CompositionRelatesTo {
    var dest:CompositionRelatesTo = new CompositionRelatesTo(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `CompositionRelatesTo is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * The event needs to be consistent with the type element, though can provide further information if desired.
 */
export class CompositionEvent extends fhir.BackboneElement implements fhir.ICompositionEvent {
  /**
   * An event can further specialize the act inherent in the typeCode, such as where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more eventCodes are included, they SHALL NOT conflict with the values inherent in the classCode, practiceSettingCode or typeCode, as such a conflict would create an ambiguous situation. This short list of codes is provided to be used as key words for certain types of queries.
   */
  public code?: fhir.CodeableConcept[]|undefined;
  /**
   * The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy.
   */
  public detail?: fhir.Reference[]|undefined;
  /**
   * The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time.
   */
  public period?: fhir.Period|undefined;
  /**
   * Default constructor for CompositionEvent - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ICompositionEvent> = {}) {
    super(source);
    if (source["code"]) { this.code = source.code.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["detail"]) { this.detail = source.detail.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["period"]) { this.period = new fhir.Period(source.period!); }
  }
  /**
   * Check if the current CompositionEvent contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a CompositionEvent from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.ICompositionEvent):CompositionEvent {
    var dest:CompositionEvent = new CompositionEvent(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `CompositionEvent is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * The root of the sections that make up the composition.
 */
export class CompositionSection extends fhir.BackboneElement implements fhir.ICompositionSection {
  /**
   * Identifies who is responsible for the information in this section, not necessarily who typed it in.
   */
  public author?: fhir.Reference[]|undefined;
  /**
   * The code identifies the section for an automated processor of the document. This is particularly relevant when using profiles to control the structure of the document.   
   * If the section has content (instead of sub-sections), the section.code does not change the meaning or interpretation of the resource that is the content of the section in the comments for the section.code.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * The various reasons for an empty section make a significant interpretation to its interpretation. Note that this code is for use when the entire section content has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
   */
  public emptyReason?: fhir.CodeableConcept|undefined;
  /**
   * If there are no entries in the list, an emptyReason SHOULD be provided.
   */
  public entry?: fhir.Reference[]|undefined;
  /**
   * Typically, sections in a doument are about the subject of the document, whether that is a  patient, or group of patients, location, or device, or whatever. For some kind of documents, some sections actually contain data about related entities. Typical examples are  a section in a newborn discharge summary concerning the mother, or family history documents, with a section about each family member, though there are many other examples.
   */
  public focus?: fhir.Reference|undefined;
  /**
   * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
   */
  public mode?: CompositionSectionModeEnum|undefined;
  public _mode?: fhir.FhirElement|undefined;
  /**
   * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
   */
  public orderedBy?: fhir.CodeableConcept|undefined;
  /**
   * Nested sections are primarily used to help human readers navigate to particular portions of the document.
   */
  public section?: fhir.CompositionSection[]|undefined;
  /**
   * Document profiles may define what content should be represented in the narrative to ensure clinical safety.
   */
  public text?: fhir.Narrative|undefined;
  /**
   * The title identifies the section for a human reader. The title must be consistent with the narrative of the resource that is the target of the section.content reference. Generally, sections SHOULD have titles, but in some documents, it is unnecessary or inappropriate. Typically, this is where a section has subsections that have their own adequately distinguishing title,  or documents that only have a single section. Most Implementation Guides will make section title to be a required element.
   */
  public title?: string|undefined;
  public _title?: fhir.FhirElement|undefined;
  /**
   * Default constructor for CompositionSection - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ICompositionSection> = {}) {
    super(source);
    if (source["author"]) { this.author = source.author.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["code"]) { this.code = new fhir.CodeableConcept(source.code!); }
    if (source["emptyReason"]) { this.emptyReason = new fhir.CodeableConcept(source.emptyReason!); }
    if (source["entry"]) { this.entry = source.entry.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["focus"]) { this.focus = new fhir.Reference(source.focus!); }
    if (source["mode"]) { this.mode = source.mode; }
    if (source["_mode"]) { this._mode = new fhir.FhirElement(source._mode!); }
    if (source["orderedBy"]) { this.orderedBy = new fhir.CodeableConcept(source.orderedBy!); }
    if (source["section"]) { this.section = source.section.map((x:Partial<fhir.ICompositionSection>) => new fhir.CompositionSection(x)); }
    if (source["text"]) { this.text = new fhir.Narrative(source.text!); }
    if (source["title"]) { this.title = source.title; }
    if (source["_title"]) { this._title = new fhir.FhirElement(source._title!); }
  }
  /**
   * Check if the current CompositionSection contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a CompositionSection from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.ICompositionSection):CompositionSection {
    var dest:CompositionSection = new CompositionSection(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `CompositionSection is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
 */
export class Composition extends fhir.DomainResource implements fhir.IComposition {
  /**
   * Resource Type Name
   */
  public override resourceType: "Composition";
  /**
   * Only list each attester once.
   */
  public attester?: fhir.CompositionAttester[]|undefined;
  /**
   * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
   */
  public author: fhir.Reference[]|null;
  /**
   * This is a metadata field from [XDS/MHD](http://wiki.ihe.net/index.php?title=Mobile_access_to_Health_Documents_(MHD)).
   */
  public category?: fhir.CodeableConcept[]|undefined;
  /**
   * The exact use of this element, and enforcement and issues related to highly sensitive documents are out of scope for the base specification, and delegated to implementation profiles (see security section).  This element is labeled as a modifier because highly confidential documents must not be treated as if they are not.
   */
  public confidentiality?: string|undefined;
  public _confidentiality?: fhir.FhirElement|undefined;
  /**
   * This is useful when documents are derived from a composition - provides guidance for how to get the latest version of the document. This is optional because this is sometimes not known by the authoring system, and can be inferred by context. However, it is important that this information be known when working with a derived document, so providing a custodian is encouraged.
   */
  public custodian?: fhir.Reference|undefined;
  /**
   * The Last Modified Date on the composition may be after the date of the document was attested without being changed.
   */
  public date: string|null;
  public _date?: fhir.FhirElement|undefined;
  /**
   * Describes the clinical encounter or type of care this documentation is associated with.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * The event needs to be consistent with the type element, though can provide further information if desired.
   */
  public event?: fhir.CompositionEvent[]|undefined;
  /**
   * Similar to ClinicalDocument/setId in CDA. See discussion in resource definition for how these relate.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * A document is a version specific composition.
   */
  public relatesTo?: fhir.CompositionRelatesTo[]|undefined;
  /**
   * The root of the sections that make up the composition.
   */
  public section?: fhir.CompositionSection[]|undefined;
  /**
   * If a composition is marked as withdrawn, the compositions/documents in the series, or data from the composition or document series, should never be displayed to a user without being clearly marked as untrustworthy. The flag "entered-in-error" is why this element is labeled as a modifier of other elements.   
   * Some reporting work flows require that the original narrative of a final document never be altered; instead, only new narrative can be added. The composition resource has no explicit status for explicitly noting whether this business rule is in effect. This would be handled by an extension if required.
   */
  public status: CompositionStatusEnum|null;
  public _status?: fhir.FhirElement|undefined;
  /**
   * For clinical documents, this is usually the patient.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * For many compositions, the title is the same as the text or a display name of Composition.type (e.g. a "consultation" or "progress note"). Note that CDA does not make title mandatory, but there are no known cases where it is useful for title to be omitted, so it is mandatory here. Feedback on this requirement is welcome during the trial use period.
   */
  public title: string|null;
  public _title?: fhir.FhirElement|undefined;
  /**
   * For Composition type, LOINC is ubiquitous and strongly endorsed by HL7. Most implementation guides will require a specific LOINC code, or use LOINC as an extensible binding.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * Default constructor for Composition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IComposition> = {}) {
    super(source);
    this.resourceType = 'Composition';
    if (source["attester"]) { this.attester = source.attester.map((x:Partial<fhir.ICompositionAttester>) => new fhir.CompositionAttester(x)); }
    this.author = null;
    if (source["author"]) { this.author = source.author.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (this.author === undefined) { this.author = null }
    if (source["category"]) { this.category = source.category.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["confidentiality"]) { this.confidentiality = source.confidentiality; }
    if (source["_confidentiality"]) { this._confidentiality = new fhir.FhirElement(source._confidentiality!); }
    if (source["custodian"]) { this.custodian = new fhir.Reference(source.custodian!); }
    this.date = null;
    if (source["date"]) { this.date = source.date; }
    if (this.date === undefined) { this.date = null }
    if (source["_date"]) { this._date = new fhir.FhirElement(source._date!); }
    if (source["encounter"]) { this.encounter = new fhir.Reference(source.encounter!); }
    if (source["event"]) { this.event = source.event.map((x:Partial<fhir.ICompositionEvent>) => new fhir.CompositionEvent(x)); }
    if (source["identifier"]) { this.identifier = new fhir.Identifier(source.identifier!); }
    if (source["relatesTo"]) { this.relatesTo = source.relatesTo.map((x:Partial<fhir.ICompositionRelatesTo>) => new fhir.CompositionRelatesTo(x)); }
    if (source["section"]) { this.section = source.section.map((x:Partial<fhir.ICompositionSection>) => new fhir.CompositionSection(x)); }
    this.status = null;
    if (source["status"]) { this.status = source.status; }
    if (this.status === undefined) { this.status = null }
    if (source["_status"]) { this._status = new fhir.FhirElement(source._status!); }
    if (source["subject"]) { this.subject = new fhir.Reference(source.subject!); }
    this.title = null;
    if (source["title"]) { this.title = source.title; }
    if (this.title === undefined) { this.title = null }
    if (source["_title"]) { this._title = new fhir.FhirElement(source._title!); }
    this.type = null;
    if (source["type"]) { this.type = new fhir.CodeableConcept(source.type!); }
    if (this.type === undefined) { this.type = null }
  }
  /**
   * Check if the current Composition contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if ((!this["author"]) || (this["author"].length === 0)) { missingElements.push("author"); }
    if (this["date"] === undefined) { missingElements.push("date"); }
    if (this["status"] === undefined) { missingElements.push("status"); }
    if (this["title"] === undefined) { missingElements.push("title"); }
    if (this["type"] === undefined) { missingElements.push("type"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a Composition from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IComposition):Composition {
    var dest:Composition = new Composition(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `Composition is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the Composition.attester.mode field
 */
export enum CompositionAttesterModeEnum {
  PERSONAL = "personal",
  PROFESSIONAL = "professional",
  LEGAL = "legal",
  OFFICIAL = "official",
}
/**
 * Code Values for the Composition.relatesTo.code field
 */
export enum CompositionRelatesToCodeEnum {
  REPLACES = "replaces",
  TRANSFORMS = "transforms",
  SIGNS = "signs",
  APPENDS = "appends",
}
/**
 * Code Values for the Composition.section.mode field
 */
export enum CompositionSectionModeEnum {
  WORKING = "working",
  SNAPSHOT = "snapshot",
  CHANGES = "changes",
}
/**
 * Code Values for the Composition.status field
 */
export enum CompositionStatusEnum {
  PRELIMINARY = "preliminary",
  FINAL = "final",
  AMENDED = "amended",
  ENTERED_IN_ERROR = "entered-in-error",
}