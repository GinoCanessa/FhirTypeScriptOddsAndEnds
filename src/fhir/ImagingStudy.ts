// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
 */
export type IImagingStudySeriesPerformer = fhir.IBackboneElement & {
  /**
   * Indicates who or what performed the series.
   */
  actor: fhir.IReference|null;
  /**
   * Distinguishes the type of involvement of the performer in the series.
   */
  function?: fhir.ICodeableConcept|undefined;
}
/**
 * A single SOP instance within the series, e.g. an image, or presentation state.
 */
export type IImagingStudySeriesInstance = fhir.IBackboneElement & {
  /**
   * The number of instance in the series.
   */
  number?: number|undefined;
  _number?: fhir.IFhirElement|undefined;
  /**
   * DICOM instance  type.
   */
  sopClass: fhir.ICoding|null;
  /**
   * Particularly for post-acquisition analytic objects, such as SR, presentation states, value mapping, etc.
   */
  title?: string|undefined;
  _title?: fhir.IFhirElement|undefined;
  /**
   * See  [DICOM PS3.3 C.12.1](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.12.html#sect_C.12.1).
   */
  uid: string|null;
  _uid?: fhir.IFhirElement|undefined;
}
/**
 * Each study has one or more series of images or other content.
 */
export type IImagingStudySeries = fhir.IBackboneElement & {
  /**
   * The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.
   */
  bodySite?: fhir.ICoding|undefined;
  /**
   * A description of the series.
   */
  description?: string|undefined;
  _description?: fhir.IFhirElement|undefined;
  /**
   * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG) formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; and DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances.
   */
  endpoint?: fhir.IReference[]|undefined;
  /**
   * A single SOP instance within the series, e.g. an image, or presentation state.
   */
  instance?: fhir.IImagingStudySeriesInstance[]|undefined;
  /**
   * The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite.
   */
  laterality?: fhir.ICoding|undefined;
  /**
   * The modality of this series sequence.
   */
  modality: fhir.ICoding|null;
  /**
   * The numeric identifier of this series in the study.
   */
  number?: number|undefined;
  _number?: fhir.IFhirElement|undefined;
  /**
   * Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
   */
  numberOfInstances?: number|undefined;
  _numberOfInstances?: fhir.IFhirElement|undefined;
  /**
   * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
   */
  performer?: fhir.IImagingStudySeriesPerformer[]|undefined;
  /**
   * The specimen imaged, e.g., for whole slide imaging of a biopsy.
   */
  specimen?: fhir.IReference[]|undefined;
  /**
   * The date and time the series was started.
   */
  started?: string|undefined;
  _started?: fhir.IFhirElement|undefined;
  /**
   * See [DICOM PS3.3 C.7.3](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.3.html).
   */
  uid: string|null;
  _uid?: fhir.IFhirElement|undefined;
}
/**
 * Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 */
export type IImagingStudy = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "ImagingStudy";
  /**
   * A list of the diagnostic requests that resulted in this imaging study being performed.
   */
  basedOn?: fhir.IReference[]|undefined;
  /**
   * The Imaging Manager description of the study. Institution-generated description or classification of the Study (component) performed.
   */
  description?: string|undefined;
  _description?: fhir.IFhirElement|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission test).
   */
  encounter?: fhir.IReference|undefined;
  /**
   * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG), formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances; or IHE Invoke Image Display (IID), which provides standard invocation of an imaging web viewer.
   */
  endpoint?: fhir.IReference[]|undefined;
  /**
   * See discussion under [Imaging Study Implementation Notes](imagingstudy.html#notes) for encoding of DICOM Study Instance UID. Accession Number should use ACSN Identifier type.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * Who read the study and interpreted the images or other content.
   */
  interpreter?: fhir.IReference[]|undefined;
  /**
   * The principal physical location where the ImagingStudy was performed.
   */
  location?: fhir.IReference|undefined;
  /**
   * A list of all the series.modality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
   */
  modality?: fhir.ICoding[]|undefined;
  /**
   * Per the recommended DICOM mapping, this element is derived from the Study Description attribute (0008,1030). Observations or findings about the imaging study should be recorded in another resource, e.g. Observation, and not in this element.
   */
  note?: fhir.IAnnotation[]|undefined;
  /**
   * Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
   */
  numberOfInstances?: number|undefined;
  _numberOfInstances?: fhir.IFhirElement|undefined;
  /**
   * Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.
   */
  numberOfSeries?: number|undefined;
  _numberOfSeries?: fhir.IFhirElement|undefined;
  /**
   * The code for the performed procedure type.
   */
  procedureCode?: fhir.ICodeableConcept[]|undefined;
  /**
   * The procedure which this ImagingStudy was part of.
   */
  procedureReference?: fhir.IReference|undefined;
  /**
   * Description of clinical condition indicating why the ImagingStudy was requested.
   */
  reasonCode?: fhir.ICodeableConcept[]|undefined;
  /**
   * Indicates another resource whose existence justifies this Study.
   */
  reasonReference?: fhir.IReference[]|undefined;
  /**
   * The requesting/referring physician.
   */
  referrer?: fhir.IReference|undefined;
  /**
   * Each study has one or more series of images or other content.
   */
  series?: fhir.IImagingStudySeries[]|undefined;
  /**
   * Date and time the study started.
   */
  started?: string|undefined;
  _started?: fhir.IFhirElement|undefined;
  /**
   * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
   */
  status: ImagingStudyStatusEnum|null;
  _status?: fhir.IFhirElement|undefined;
  /**
   * QA phantoms can be recorded with a Device; multiple subjects (such as mice) can be recorded with a Group.
   */
  subject: fhir.IReference|null;
}
/**
 * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
 */
export class ImagingStudySeriesPerformer extends fhir.BackboneElement implements fhir.IImagingStudySeriesPerformer {
  /**
   * Indicates who or what performed the series.
   */
  public actor: fhir.Reference|null;
  /**
   * Distinguishes the type of involvement of the performer in the series.
   */
  public function?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for ImagingStudySeriesPerformer - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IImagingStudySeriesPerformer> = {}) {
    super(source);
    this.actor = null;
    if (source["actor"]) { this.actor = new fhir.Reference(source.actor!); }
    if (this.actor === undefined) { this.actor = null }
    if (source["function"]) { this.function = new fhir.CodeableConcept(source.function!); }
  }
  /**
   * Check if the current ImagingStudySeriesPerformer contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["actor"] === undefined) { missingElements.push("actor"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a ImagingStudySeriesPerformer from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IImagingStudySeriesPerformer):ImagingStudySeriesPerformer {
    var dest:ImagingStudySeriesPerformer = new ImagingStudySeriesPerformer(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `ImagingStudySeriesPerformer is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * A single SOP instance within the series, e.g. an image, or presentation state.
 */
export class ImagingStudySeriesInstance extends fhir.BackboneElement implements fhir.IImagingStudySeriesInstance {
  /**
   * The number of instance in the series.
   */
  public number?: number|undefined;
  public _number?: fhir.FhirElement|undefined;
  /**
   * DICOM instance  type.
   */
  public sopClass: fhir.Coding|null;
  /**
   * Particularly for post-acquisition analytic objects, such as SR, presentation states, value mapping, etc.
   */
  public title?: string|undefined;
  public _title?: fhir.FhirElement|undefined;
  /**
   * See  [DICOM PS3.3 C.12.1](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.12.html#sect_C.12.1).
   */
  public uid: string|null;
  public _uid?: fhir.FhirElement|undefined;
  /**
   * Default constructor for ImagingStudySeriesInstance - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IImagingStudySeriesInstance> = {}) {
    super(source);
    if (source["number"]) { this.number = source.number; }
    if (source["_number"]) { this._number = new fhir.FhirElement(source._number!); }
    this.sopClass = null;
    if (source["sopClass"]) { this.sopClass = new fhir.Coding(source.sopClass!); }
    if (this.sopClass === undefined) { this.sopClass = null }
    if (source["title"]) { this.title = source.title; }
    if (source["_title"]) { this._title = new fhir.FhirElement(source._title!); }
    this.uid = null;
    if (source["uid"]) { this.uid = source.uid; }
    if (this.uid === undefined) { this.uid = null }
    if (source["_uid"]) { this._uid = new fhir.FhirElement(source._uid!); }
  }
  /**
   * Check if the current ImagingStudySeriesInstance contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["sopClass"] === undefined) { missingElements.push("sopClass"); }
    if (this["uid"] === undefined) { missingElements.push("uid"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a ImagingStudySeriesInstance from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IImagingStudySeriesInstance):ImagingStudySeriesInstance {
    var dest:ImagingStudySeriesInstance = new ImagingStudySeriesInstance(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `ImagingStudySeriesInstance is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Each study has one or more series of images or other content.
 */
export class ImagingStudySeries extends fhir.BackboneElement implements fhir.IImagingStudySeries {
  /**
   * The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.
   */
  public bodySite?: fhir.Coding|undefined;
  /**
   * A description of the series.
   */
  public description?: string|undefined;
  public _description?: fhir.FhirElement|undefined;
  /**
   * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG) formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; and DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances.
   */
  public endpoint?: fhir.Reference[]|undefined;
  /**
   * A single SOP instance within the series, e.g. an image, or presentation state.
   */
  public instance?: fhir.ImagingStudySeriesInstance[]|undefined;
  /**
   * The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite.
   */
  public laterality?: fhir.Coding|undefined;
  /**
   * The modality of this series sequence.
   */
  public modality: fhir.Coding|null;
  /**
   * The numeric identifier of this series in the study.
   */
  public number?: number|undefined;
  public _number?: fhir.FhirElement|undefined;
  /**
   * Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
   */
  public numberOfInstances?: number|undefined;
  public _numberOfInstances?: fhir.FhirElement|undefined;
  /**
   * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
   */
  public performer?: fhir.ImagingStudySeriesPerformer[]|undefined;
  /**
   * The specimen imaged, e.g., for whole slide imaging of a biopsy.
   */
  public specimen?: fhir.Reference[]|undefined;
  /**
   * The date and time the series was started.
   */
  public started?: string|undefined;
  public _started?: fhir.FhirElement|undefined;
  /**
   * See [DICOM PS3.3 C.7.3](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.3.html).
   */
  public uid: string|null;
  public _uid?: fhir.FhirElement|undefined;
  /**
   * Default constructor for ImagingStudySeries - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IImagingStudySeries> = {}) {
    super(source);
    if (source["bodySite"]) { this.bodySite = new fhir.Coding(source.bodySite!); }
    if (source["description"]) { this.description = source.description; }
    if (source["_description"]) { this._description = new fhir.FhirElement(source._description!); }
    if (source["endpoint"]) { this.endpoint = source.endpoint.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["instance"]) { this.instance = source.instance.map((x:Partial<fhir.IImagingStudySeriesInstance>) => new fhir.ImagingStudySeriesInstance(x)); }
    if (source["laterality"]) { this.laterality = new fhir.Coding(source.laterality!); }
    this.modality = null;
    if (source["modality"]) { this.modality = new fhir.Coding(source.modality!); }
    if (this.modality === undefined) { this.modality = null }
    if (source["number"]) { this.number = source.number; }
    if (source["_number"]) { this._number = new fhir.FhirElement(source._number!); }
    if (source["numberOfInstances"]) { this.numberOfInstances = source.numberOfInstances; }
    if (source["_numberOfInstances"]) { this._numberOfInstances = new fhir.FhirElement(source._numberOfInstances!); }
    if (source["performer"]) { this.performer = source.performer.map((x:Partial<fhir.IImagingStudySeriesPerformer>) => new fhir.ImagingStudySeriesPerformer(x)); }
    if (source["specimen"]) { this.specimen = source.specimen.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["started"]) { this.started = source.started; }
    if (source["_started"]) { this._started = new fhir.FhirElement(source._started!); }
    this.uid = null;
    if (source["uid"]) { this.uid = source.uid; }
    if (this.uid === undefined) { this.uid = null }
    if (source["_uid"]) { this._uid = new fhir.FhirElement(source._uid!); }
  }
  /**
   * Check if the current ImagingStudySeries contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["modality"] === undefined) { missingElements.push("modality"); }
    if (this["uid"] === undefined) { missingElements.push("uid"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a ImagingStudySeries from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IImagingStudySeries):ImagingStudySeries {
    var dest:ImagingStudySeries = new ImagingStudySeries(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `ImagingStudySeries is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 */
export class ImagingStudy extends fhir.DomainResource implements fhir.IImagingStudy {
  /**
   * Resource Type Name
   */
  public override resourceType: "ImagingStudy";
  /**
   * A list of the diagnostic requests that resulted in this imaging study being performed.
   */
  public basedOn?: fhir.Reference[]|undefined;
  /**
   * The Imaging Manager description of the study. Institution-generated description or classification of the Study (component) performed.
   */
  public description?: string|undefined;
  public _description?: fhir.FhirElement|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission test).
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG), formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances; or IHE Invoke Image Display (IID), which provides standard invocation of an imaging web viewer.
   */
  public endpoint?: fhir.Reference[]|undefined;
  /**
   * See discussion under [Imaging Study Implementation Notes](imagingstudy.html#notes) for encoding of DICOM Study Instance UID. Accession Number should use ACSN Identifier type.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * Who read the study and interpreted the images or other content.
   */
  public interpreter?: fhir.Reference[]|undefined;
  /**
   * The principal physical location where the ImagingStudy was performed.
   */
  public location?: fhir.Reference|undefined;
  /**
   * A list of all the series.modality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
   */
  public modality?: fhir.Coding[]|undefined;
  /**
   * Per the recommended DICOM mapping, this element is derived from the Study Description attribute (0008,1030). Observations or findings about the imaging study should be recorded in another resource, e.g. Observation, and not in this element.
   */
  public note?: fhir.Annotation[]|undefined;
  /**
   * Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
   */
  public numberOfInstances?: number|undefined;
  public _numberOfInstances?: fhir.FhirElement|undefined;
  /**
   * Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.
   */
  public numberOfSeries?: number|undefined;
  public _numberOfSeries?: fhir.FhirElement|undefined;
  /**
   * The code for the performed procedure type.
   */
  public procedureCode?: fhir.CodeableConcept[]|undefined;
  /**
   * The procedure which this ImagingStudy was part of.
   */
  public procedureReference?: fhir.Reference|undefined;
  /**
   * Description of clinical condition indicating why the ImagingStudy was requested.
   */
  public reasonCode?: fhir.CodeableConcept[]|undefined;
  /**
   * Indicates another resource whose existence justifies this Study.
   */
  public reasonReference?: fhir.Reference[]|undefined;
  /**
   * The requesting/referring physician.
   */
  public referrer?: fhir.Reference|undefined;
  /**
   * Each study has one or more series of images or other content.
   */
  public series?: fhir.ImagingStudySeries[]|undefined;
  /**
   * Date and time the study started.
   */
  public started?: string|undefined;
  public _started?: fhir.FhirElement|undefined;
  /**
   * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
   */
  public status: ImagingStudyStatusEnum|null;
  public _status?: fhir.FhirElement|undefined;
  /**
   * QA phantoms can be recorded with a Device; multiple subjects (such as mice) can be recorded with a Group.
   */
  public subject: fhir.Reference|null;
  /**
   * Default constructor for ImagingStudy - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IImagingStudy> = {}) {
    super(source);
    this.resourceType = 'ImagingStudy';
    if (source["basedOn"]) { this.basedOn = source.basedOn.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["description"]) { this.description = source.description; }
    if (source["_description"]) { this._description = new fhir.FhirElement(source._description!); }
    if (source["encounter"]) { this.encounter = new fhir.Reference(source.encounter!); }
    if (source["endpoint"]) { this.endpoint = source.endpoint.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["interpreter"]) { this.interpreter = source.interpreter.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["location"]) { this.location = new fhir.Reference(source.location!); }
    if (source["modality"]) { this.modality = source.modality.map((x:Partial<fhir.ICoding>) => new fhir.Coding(x)); }
    if (source["note"]) { this.note = source.note.map((x:Partial<fhir.IAnnotation>) => new fhir.Annotation(x)); }
    if (source["numberOfInstances"]) { this.numberOfInstances = source.numberOfInstances; }
    if (source["_numberOfInstances"]) { this._numberOfInstances = new fhir.FhirElement(source._numberOfInstances!); }
    if (source["numberOfSeries"]) { this.numberOfSeries = source.numberOfSeries; }
    if (source["_numberOfSeries"]) { this._numberOfSeries = new fhir.FhirElement(source._numberOfSeries!); }
    if (source["procedureCode"]) { this.procedureCode = source.procedureCode.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["procedureReference"]) { this.procedureReference = new fhir.Reference(source.procedureReference!); }
    if (source["reasonCode"]) { this.reasonCode = source.reasonCode.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["reasonReference"]) { this.reasonReference = source.reasonReference.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["referrer"]) { this.referrer = new fhir.Reference(source.referrer!); }
    if (source["series"]) { this.series = source.series.map((x:Partial<fhir.IImagingStudySeries>) => new fhir.ImagingStudySeries(x)); }
    if (source["started"]) { this.started = source.started; }
    if (source["_started"]) { this._started = new fhir.FhirElement(source._started!); }
    this.status = null;
    if (source["status"]) { this.status = source.status; }
    if (this.status === undefined) { this.status = null }
    if (source["_status"]) { this._status = new fhir.FhirElement(source._status!); }
    this.subject = null;
    if (source["subject"]) { this.subject = new fhir.Reference(source.subject!); }
    if (this.subject === undefined) { this.subject = null }
  }
  /**
   * Check if the current ImagingStudy contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["status"] === undefined) { missingElements.push("status"); }
    if (this["subject"] === undefined) { missingElements.push("subject"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a ImagingStudy from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IImagingStudy):ImagingStudy {
    var dest:ImagingStudy = new ImagingStudy(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `ImagingStudy is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the ImagingStudy.status field
 */
export enum ImagingStudyStatusEnum {
  REGISTERED = "registered",
  AVAILABLE = "available",
  CANCELLED = "cancelled",
  ENTERED_IN_ERROR = "entered-in-error",
  UNKNOWN = "unknown",
}
