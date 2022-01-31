// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../strictmodels'
import * as fhirInterfaces from '../strictinterfaces'
/**
 * Only list each attester once.
 */
export class CompositionAttester extends fhirModels.BackboneElement implements fhirInterfaces.ICompositionAttester {
  /**
   * The type of attestation the authenticator offers.
   */
  mode: CompositionAttesterModeEnum;
  _mode?: fhirModels.Element|undefined;
  /**
   * Who attested the composition in the specified way.
   */
  party?: fhirModels.Reference|undefined;
  /**
   * When the composition was attested by the party.
   */
  time?: string|undefined;
  _time?: fhirModels.Element|undefined;
  /**
   * Default constructor for CompositionAttester from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.ICompositionAttester) {
    super(source);
    {
      this.mode = source.mode;
    }
    if (source["_mode"] !== undefined) {
      this._mode = new fhirModels.Element(source._mode);
    }
    if (source["party"] !== undefined) {
      this.party = new fhirModels.Reference(source.party);
    }
    if (source["time"] !== undefined) {
      this.time = source.time;
    }
    if (source["_time"] !== undefined) {
      this._time = new fhirModels.Element(source._time);
    }
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
 * A document is a version specific composition.
 */
export class CompositionRelatesTo extends fhirModels.BackboneElement implements fhirInterfaces.ICompositionRelatesTo {
  /**
   * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
   */
  code: CompositionRelatesToCodeEnum;
  _code?: fhirModels.Element|undefined;
  /**
   * The target composition/document of this relationship.
   */
  targetIdentifier?: fhirModels.Identifier|undefined;
  /**
   * The target composition/document of this relationship.
   */
  targetReference?: fhirModels.Reference|undefined;
  /**
   * Default constructor for CompositionRelatesTo from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.ICompositionRelatesTo) {
    super(source);
    {
      this.code = source.code;
    }
    if (source["_code"] !== undefined) {
      this._code = new fhirModels.Element(source._code);
    }
    if (source["targetIdentifier"] !== undefined) {
      this.targetIdentifier = new fhirModels.Identifier(source.targetIdentifier);
    }
    if (source["targetReference"] !== undefined) {
      this.targetReference = new fhirModels.Reference(source.targetReference);
    }
  }
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
 * The event needs to be consistent with the type element, though can provide further information if desired.
 */
export class CompositionEvent extends fhirModels.BackboneElement implements fhirInterfaces.ICompositionEvent {
  /**
   * An event can further specialize the act inherent in the typeCode, such as where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more eventCodes are included, they SHALL NOT conflict with the values inherent in the classCode, practiceSettingCode or typeCode, as such a conflict would create an ambiguous situation. This short list of codes is provided to be used as key words for certain types of queries.
   */
  code?: fhirModels.CodeableConcept[]|undefined;
  /**
   * The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy.
   */
  detail?: fhirModels.Reference[]|undefined;
  /**
   * The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time.
   */
  period?: fhirModels.Period|undefined;
  /**
   * Default constructor for CompositionEvent from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.ICompositionEvent) {
    super(source);
    if (source["code"] !== undefined) {
      this.code = source.code.map((x) => new fhirModels.CodeableConcept(x));
    }
    if (source["detail"] !== undefined) {
      this.detail = source.detail.map((x) => new fhirModels.Reference(x));
    }
    if (source["period"] !== undefined) {
      this.period = new fhirModels.Period(source.period);
    }
  }
}
/**
 * The root of the sections that make up the composition.
 */
export class CompositionSection extends fhirModels.BackboneElement implements fhirInterfaces.ICompositionSection {
  /**
   * Identifies who is responsible for the information in this section, not necessarily who typed it in.
   */
  author?: fhirModels.Reference[]|undefined;
  /**
   * The code identifies the section for an automated processor of the document. This is particularly relevant when using profiles to control the structure of the document.   
   * If the section has content (instead of sub-sections), the section.code does not change the meaning or interpretation of the resource that is the content of the section in the comments for the section.code.
   */
  code?: fhirModels.CodeableConcept|undefined;
  /**
   * The various reasons for an empty section make a significant interpretation to its interpretation. Note that this code is for use when the entire section content has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
   */
  emptyReason?: fhirModels.CodeableConcept|undefined;
  /**
   * If there are no entries in the list, an emptyReason SHOULD be provided.
   */
  entry?: fhirModels.Reference[]|undefined;
  /**
   * Typically, sections in a doument are about the subject of the document, whether that is a  patient, or group of patients, location, or device, or whatever. For some kind of documents, some sections actually contain data about related entities. Typical examples are  a section in a newborn discharge summary concerning the mother, or family history documents, with a section about each family member, though there are many other examples.
   */
  focus?: fhirModels.Reference|undefined;
  /**
   * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
   */
  mode?: CompositionSectionModeEnum|undefined;
  _mode?: fhirModels.Element|undefined;
  /**
   * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
   */
  orderedBy?: fhirModels.CodeableConcept|undefined;
  /**
   * Nested sections are primarily used to help human readers navigate to particular portions of the document.
   */
  section?: fhirModels.CompositionSection[]|undefined;
  /**
   * Document profiles may define what content should be represented in the narrative to ensure clinical safety.
   */
  text?: fhirModels.Narrative|undefined;
  /**
   * The title identifies the section for a human reader. The title must be consistent with the narrative of the resource that is the target of the section.content reference. Generally, sections SHOULD have titles, but in some documents, it is unnecessary or inappropriate. Typically, this is where a section has subsections that have their own adequately distinguishing title,  or documents that only have a single section. Most Implementation Guides will make section title to be a required element.
   */
  title?: string|undefined;
  _title?: fhirModels.Element|undefined;
  /**
   * Default constructor for CompositionSection from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.ICompositionSection) {
    super(source);
    if (source["author"] !== undefined) {
      this.author = source.author.map((x) => new fhirModels.Reference(x));
    }
    if (source["code"] !== undefined) {
      this.code = new fhirModels.CodeableConcept(source.code);
    }
    if (source["emptyReason"] !== undefined) {
      this.emptyReason = new fhirModels.CodeableConcept(source.emptyReason);
    }
    if (source["entry"] !== undefined) {
      this.entry = source.entry.map((x) => new fhirModels.Reference(x));
    }
    if (source["focus"] !== undefined) {
      this.focus = new fhirModels.Reference(source.focus);
    }
    if (source["mode"] !== undefined) {
      this.mode = source.mode;
    }
    if (source["_mode"] !== undefined) {
      this._mode = new fhirModels.Element(source._mode);
    }
    if (source["orderedBy"] !== undefined) {
      this.orderedBy = new fhirModels.CodeableConcept(source.orderedBy);
    }
    if (source["section"] !== undefined) {
      this.section = source.section.map((x) => new fhirModels.CompositionSection(x));
    }
    if (source["text"] !== undefined) {
      this.text = new fhirModels.Narrative(source.text);
    }
    if (source["title"] !== undefined) {
      this.title = source.title;
    }
    if (source["_title"] !== undefined) {
      this._title = new fhirModels.Element(source._title);
    }
  }
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
 * A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
 */
export class Composition extends fhirModels.DomainResource implements fhirInterfaces.IComposition {
  /**
   * Resource Type Name
   */
  readonly resourceType = "Composition";
  /**
   * Only list each attester once.
   */
  attester?: fhirModels.CompositionAttester[]|undefined;
  /**
   * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
   */
  author: fhirModels.Reference[];
  /**
   * This is a metadata field from [XDS/MHD](http://wiki.ihe.net/index.php?title=Mobile_access_to_Health_Documents_(MHD)).
   */
  category?: fhirModels.CodeableConcept[]|undefined;
  /**
   * The exact use of this element, and enforcement and issues related to highly sensitive documents are out of scope for the base specification, and delegated to implementation profiles (see security section).  This element is labeled as a modifier because highly confidential documents must not be treated as if they are not.
   */
  confidentiality?: string|undefined;
  _confidentiality?: fhirModels.Element|undefined;
  /**
   * This is useful when documents are derived from a composition - provides guidance for how to get the latest version of the document. This is optional because this is sometimes not known by the authoring system, and can be inferred by context. However, it is important that this information be known when working with a derived document, so providing a custodian is encouraged.
   */
  custodian?: fhirModels.Reference|undefined;
  /**
   * The Last Modified Date on the composition may be after the date of the document was attested without being changed.
   */
  date: string;
  _date?: fhirModels.Element|undefined;
  /**
   * Describes the clinical encounter or type of care this documentation is associated with.
   */
  encounter?: fhirModels.Reference|undefined;
  /**
   * The event needs to be consistent with the type element, though can provide further information if desired.
   */
  event?: fhirModels.CompositionEvent[]|undefined;
  /**
   * Similar to ClinicalDocument/setId in CDA. See discussion in resource definition for how these relate.
   */
  identifier?: fhirModels.Identifier|undefined;
  /**
   * A document is a version specific composition.
   */
  relatesTo?: fhirModels.CompositionRelatesTo[]|undefined;
  /**
   * The root of the sections that make up the composition.
   */
  section?: fhirModels.CompositionSection[]|undefined;
  /**
   * If a composition is marked as withdrawn, the compositions/documents in the series, or data from the composition or document series, should never be displayed to a user without being clearly marked as untrustworthy. The flag "entered-in-error" is why this element is labeled as a modifier of other elements.   
   * Some reporting work flows require that the original narrative of a final document never be altered; instead, only new narrative can be added. The composition resource has no explicit status for explicitly noting whether this business rule is in effect. This would be handled by an extension if required.
   */
  status: CompositionStatusEnum;
  _status?: fhirModels.Element|undefined;
  /**
   * For clinical documents, this is usually the patient.
   */
  subject?: fhirModels.Reference|undefined;
  /**
   * For many compositions, the title is the same as the text or a display name of Composition.type (e.g. a "consultation" or "progress note"). Note that CDA does not make title mandatory, but there are no known cases where it is useful for title to be omitted, so it is mandatory here. Feedback on this requirement is welcome during the trial use period.
   */
  title: string;
  _title?: fhirModels.Element|undefined;
  /**
   * For Composition type, LOINC is ubiquitous and strongly endorsed by HL7. Most implementation guides will require a specific LOINC code, or use LOINC as an extensible binding.
   */
  type: fhirModels.CodeableConcept;
  /**
   * Default constructor for Composition from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IComposition) {
    super(source);
    if ((source['resourceType'] !== "Composition") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a Composition'; }
    if (source["attester"] !== undefined) {
      this.attester = source.attester.map((x) => new fhirModels.CompositionAttester(x));
    }
    {
      this.author = source.author.map((x) => new fhirModels.Reference(x));
    }
    if (source["category"] !== undefined) {
      this.category = source.category.map((x) => new fhirModels.CodeableConcept(x));
    }
    if (source["confidentiality"] !== undefined) {
      this.confidentiality = source.confidentiality;
    }
    if (source["_confidentiality"] !== undefined) {
      this._confidentiality = new fhirModels.Element(source._confidentiality);
    }
    if (source["custodian"] !== undefined) {
      this.custodian = new fhirModels.Reference(source.custodian);
    }
    {
      this.date = source.date;
    }
    if (source["_date"] !== undefined) {
      this._date = new fhirModels.Element(source._date);
    }
    if (source["encounter"] !== undefined) {
      this.encounter = new fhirModels.Reference(source.encounter);
    }
    if (source["event"] !== undefined) {
      this.event = source.event.map((x) => new fhirModels.CompositionEvent(x));
    }
    if (source["identifier"] !== undefined) {
      this.identifier = new fhirModels.Identifier(source.identifier);
    }
    if (source["relatesTo"] !== undefined) {
      this.relatesTo = source.relatesTo.map((x) => new fhirModels.CompositionRelatesTo(x));
    }
    if (source["section"] !== undefined) {
      this.section = source.section.map((x) => new fhirModels.CompositionSection(x));
    }
    {
      this.status = source.status;
    }
    if (source["_status"] !== undefined) {
      this._status = new fhirModels.Element(source._status);
    }
    if (source["subject"] !== undefined) {
      this.subject = new fhirModels.Reference(source.subject);
    }
    {
      this.title = source.title;
    }
    if (source["_title"] !== undefined) {
      this._title = new fhirModels.Element(source._title);
    }
    {
      this.type = new fhirModels.CodeableConcept(source.type);
    }
  }
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
