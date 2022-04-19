// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
 */
export type IDiagnosticReportMedia = fhir.IBackboneElement & {
  /**
   * The comment should be displayed with the image. It would be common for the report to include additional discussion of the image contents in other sections such as the conclusion.
   */
  comment?: string|undefined;
  _comment?: fhir.IFhirElement|undefined;
  /**
   * Reference to the image source.
   */
  link: fhir.IReference|null;
}
/**
 * The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
 */
export type IDiagnosticReport = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "DiagnosticReport";
  /**
   * Note: Usually there is one test request for each result, however in some circumstances multiple test requests may be represented using a single test result resource. Note that there are also cases where one request leads to multiple reports.
   */
  basedOn?: fhir.IReference[]|undefined;
  /**
   * Multiple categories are allowed using various categorization schemes.   The level of granularity is defined by the category concepts in the value set. More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in DiagnosticReport.code.
   */
  category?: fhir.ICodeableConcept[]|undefined;
  /**
   * A code or name that describes this diagnostic report.
   */
  code: fhir.ICodeableConcept|null;
  /**
   * Concise and clinically contextualized summary conclusion (interpretation/impression) of the diagnostic report.
   */
  conclusion?: string|undefined;
  _conclusion?: fhir.IFhirElement|undefined;
  /**
   * One or more codes that represent the summary conclusion (interpretation/impression) of the diagnostic report.
   */
  conclusionCode?: fhir.ICodeableConcept[]|undefined;
  /**
   * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the diagnostically relevant time can be derived from the specimen collection times, but the specimen information is not always available, and the exact relationship between the specimens and the diagnostically relevant time is not always automatic.
   */
  effectiveDateTime?: string|undefined;
  _effectiveDateTime?: fhir.IFhirElement|undefined;
  /**
   * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the diagnostically relevant time can be derived from the specimen collection times, but the specimen information is not always available, and the exact relationship between the specimens and the diagnostically relevant time is not always automatic.
   */
  effectivePeriod?: fhir.IPeriod|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter  but still be tied to the context of the encounter  (e.g. pre-admission laboratory tests).
   */
  encounter?: fhir.IReference|undefined;
  /**
   * Usually assigned by the Information System of the diagnostic service provider (filler id).
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * ImagingStudy and the image element are somewhat overlapping - typically, the list of image references in the image element will also be found in one of the imaging study resources. However, each caters to different types of displays for different types of purposes. Neither, either, or both may be provided.
   */
  imagingStudy?: fhir.IReference[]|undefined;
  /**
   * May be different from the update time of the resource itself, because that is the status of the record (potentially a secondary copy), not the actual release time of the report.
   */
  issued?: string|undefined;
  _issued?: fhir.IFhirElement|undefined;
  /**
   * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
   */
  media?: fhir.IDiagnosticReportMedia[]|undefined;
  /**
   * This is not necessarily the source of the atomic data items or the entity that interpreted the results. It is the entity that takes responsibility for the clinical report.
   */
  performer?: fhir.IReference[]|undefined;
  /**
   * "application/pdf" is recommended as the most reliable and interoperable in this context.
   */
  presentedForm?: fhir.IAttachment[]|undefined;
  /**
   * Observations can contain observations.
   */
  result?: fhir.IReference[]|undefined;
  /**
   * Might not be the same entity that takes responsibility for the clinical report.
   */
  resultsInterpreter?: fhir.IReference[]|undefined;
  /**
   * If the specimen is sufficiently specified with a code in the test result name, then this additional data may be redundant. If there are multiple specimens, these may be represented per observation or group.
   */
  specimen?: fhir.IReference[]|undefined;
  /**
   * The status of the diagnostic report.
   */
  status: DiagnosticReportStatusEnum|null;
  _status?: fhir.IFhirElement|undefined;
  /**
   * The subject of the report. Usually, but not always, this is a patient. However, diagnostic services also perform analyses on specimens collected from a variety of other sources.
   */
  subject?: fhir.IReference|undefined;
}
/**
 * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
 */
export class DiagnosticReportMedia extends fhir.BackboneElement implements fhir.IDiagnosticReportMedia {
  /**
   * The comment should be displayed with the image. It would be common for the report to include additional discussion of the image contents in other sections such as the conclusion.
   */
  public comment?: string|undefined;
  public _comment?: fhir.FhirElement|undefined;
  /**
   * Reference to the image source.
   */
  public link: fhir.Reference|null;
  /**
   * Default constructor for DiagnosticReportMedia - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IDiagnosticReportMedia> = {}) {
    super(source);
    if (source["comment"]) { this.comment = source.comment; }
    if (source["_comment"]) { this._comment = new fhir.FhirElement(source._comment!); }
    this.link = null;
    if (source["link"]) { this.link = new fhir.Reference(source.link!); }
    if (this.link === undefined) { this.link = null }
  }
  /**
   * Check if the current DiagnosticReportMedia contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["link"] === undefined) { missingElements.push("link"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a DiagnosticReportMedia from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IDiagnosticReportMedia):DiagnosticReportMedia {
    var dest:DiagnosticReportMedia = new DiagnosticReportMedia(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `DiagnosticReportMedia is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
 */
export class DiagnosticReport extends fhir.DomainResource implements fhir.IDiagnosticReport {
  /**
   * Resource Type Name
   */
  public override resourceType: "DiagnosticReport";
  /**
   * Note: Usually there is one test request for each result, however in some circumstances multiple test requests may be represented using a single test result resource. Note that there are also cases where one request leads to multiple reports.
   */
  public basedOn?: fhir.Reference[]|undefined;
  /**
   * Multiple categories are allowed using various categorization schemes.   The level of granularity is defined by the category concepts in the value set. More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in DiagnosticReport.code.
   */
  public category?: fhir.CodeableConcept[]|undefined;
  /**
   * A code or name that describes this diagnostic report.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * Concise and clinically contextualized summary conclusion (interpretation/impression) of the diagnostic report.
   */
  public conclusion?: string|undefined;
  public _conclusion?: fhir.FhirElement|undefined;
  /**
   * One or more codes that represent the summary conclusion (interpretation/impression) of the diagnostic report.
   */
  public conclusionCode?: fhir.CodeableConcept[]|undefined;
  /**
   * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the diagnostically relevant time can be derived from the specimen collection times, but the specimen information is not always available, and the exact relationship between the specimens and the diagnostically relevant time is not always automatic.
   */
  public effectiveDateTime?: string|undefined;
  public _effectiveDateTime?: fhir.FhirElement|undefined;
  /**
   * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the diagnostically relevant time can be derived from the specimen collection times, but the specimen information is not always available, and the exact relationship between the specimens and the diagnostically relevant time is not always automatic.
   */
  public effectivePeriod?: fhir.Period|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter  but still be tied to the context of the encounter  (e.g. pre-admission laboratory tests).
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * Usually assigned by the Information System of the diagnostic service provider (filler id).
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * ImagingStudy and the image element are somewhat overlapping - typically, the list of image references in the image element will also be found in one of the imaging study resources. However, each caters to different types of displays for different types of purposes. Neither, either, or both may be provided.
   */
  public imagingStudy?: fhir.Reference[]|undefined;
  /**
   * May be different from the update time of the resource itself, because that is the status of the record (potentially a secondary copy), not the actual release time of the report.
   */
  public issued?: string|undefined;
  public _issued?: fhir.FhirElement|undefined;
  /**
   * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
   */
  public media?: fhir.DiagnosticReportMedia[]|undefined;
  /**
   * This is not necessarily the source of the atomic data items or the entity that interpreted the results. It is the entity that takes responsibility for the clinical report.
   */
  public performer?: fhir.Reference[]|undefined;
  /**
   * "application/pdf" is recommended as the most reliable and interoperable in this context.
   */
  public presentedForm?: fhir.Attachment[]|undefined;
  /**
   * Observations can contain observations.
   */
  public result?: fhir.Reference[]|undefined;
  /**
   * Might not be the same entity that takes responsibility for the clinical report.
   */
  public resultsInterpreter?: fhir.Reference[]|undefined;
  /**
   * If the specimen is sufficiently specified with a code in the test result name, then this additional data may be redundant. If there are multiple specimens, these may be represented per observation or group.
   */
  public specimen?: fhir.Reference[]|undefined;
  /**
   * The status of the diagnostic report.
   */
  public status: DiagnosticReportStatusEnum|null;
  public _status?: fhir.FhirElement|undefined;
  /**
   * The subject of the report. Usually, but not always, this is a patient. However, diagnostic services also perform analyses on specimens collected from a variety of other sources.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * Default constructor for DiagnosticReport - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IDiagnosticReport> = {}) {
    super(source);
    this.resourceType = 'DiagnosticReport';
    if (source["basedOn"]) { this.basedOn = source.basedOn.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["category"]) { this.category = source.category.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    this.code = null;
    if (source["code"]) { this.code = new fhir.CodeableConcept(source.code!); }
    if (this.code === undefined) { this.code = null }
    if (source["conclusion"]) { this.conclusion = source.conclusion; }
    if (source["_conclusion"]) { this._conclusion = new fhir.FhirElement(source._conclusion!); }
    if (source["conclusionCode"]) { this.conclusionCode = source.conclusionCode.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["effectiveDateTime"]) { this.effectiveDateTime = source.effectiveDateTime; }
    if (source["_effectiveDateTime"]) { this._effectiveDateTime = new fhir.FhirElement(source._effectiveDateTime!); }
    if (source["effectivePeriod"]) { this.effectivePeriod = new fhir.Period(source.effectivePeriod!); }
    if (source["encounter"]) { this.encounter = new fhir.Reference(source.encounter!); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["imagingStudy"]) { this.imagingStudy = source.imagingStudy.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["issued"]) { this.issued = source.issued; }
    if (source["_issued"]) { this._issued = new fhir.FhirElement(source._issued!); }
    if (source["media"]) { this.media = source.media.map((x:Partial<fhir.IDiagnosticReportMedia>) => new fhir.DiagnosticReportMedia(x)); }
    if (source["performer"]) { this.performer = source.performer.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["presentedForm"]) { this.presentedForm = source.presentedForm.map((x:Partial<fhir.IAttachment>) => new fhir.Attachment(x)); }
    if (source["result"]) { this.result = source.result.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["resultsInterpreter"]) { this.resultsInterpreter = source.resultsInterpreter.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["specimen"]) { this.specimen = source.specimen.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    this.status = null;
    if (source["status"]) { this.status = source.status; }
    if (this.status === undefined) { this.status = null }
    if (source["_status"]) { this._status = new fhir.FhirElement(source._status!); }
    if (source["subject"]) { this.subject = new fhir.Reference(source.subject!); }
  }
  /**
   * Check if the current DiagnosticReport contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["code"] === undefined) { missingElements.push("code"); }
    if (this["status"] === undefined) { missingElements.push("status"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a DiagnosticReport from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IDiagnosticReport):DiagnosticReport {
    var dest:DiagnosticReport = new DiagnosticReport(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `DiagnosticReport is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the DiagnosticReport.status field
 */
export enum DiagnosticReportStatusEnum {
  REGISTERED = "registered",
  PARTIAL = "partial",
  PRELIMINARY = "preliminary",
  FINAL = "final",
  AMENDED = "amended",
  CORRECTED = "corrected",
  APPENDED = "appended",
  CANCELLED = "cancelled",
  ENTERED_IN_ERROR = "entered-in-error",
  UNKNOWN = "unknown",
}