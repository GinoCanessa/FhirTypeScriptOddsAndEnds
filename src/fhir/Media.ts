// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Media

import * as fhir from '../fhir.js';

import { EventStatusValueSet, EventStatusValueSetType,} from '../fhirValueSets/EventStatusValueSet.js';
import { EventStatusValueSetEnum } from '../valueSetEnums.js';
import { MediaTypeValueSet, MediaTypeValueSetType,} from '../fhirValueSets/MediaTypeValueSet.js';
import { MediaTypeValueSetEnum } from '../valueSetEnums.js';
import { MediaViewValueSet, MediaViewValueSetType,} from '../fhirValueSets/MediaViewValueSet.js';
import { MediaViewValueSetEnum } from '../valueSetEnums.js';
import { ProcedureReasonValueSet, ProcedureReasonValueSetType,} from '../fhirValueSets/ProcedureReasonValueSet.js';
import { ProcedureReasonValueSetEnum } from '../valueSetEnums.js';
import { BodySiteValueSet, BodySiteValueSetType,} from '../fhirValueSets/BodySiteValueSet.js';
import { BodySiteValueSetEnum } from '../valueSetEnums.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the Media type.
 */
export interface MediaArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Media"|undefined;
  /**
   * The identifier label and use can be used to determine what kind of identifier it is.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * A procedure that is fulfilled in whole or in part by the creation of this media.
   */
  basedOn?: fhir.ReferenceArgs[]|undefined;
  /**
   * Not to be used to link an event to an Encounter - use Media.encounter for that.
   * [The allowed reference resources may be adjusted as appropriate for the event resource].
   */
  partOf?: fhir.ReferenceArgs[]|undefined;
  /**
   * A nominal state-transition diagram can be found in the [[event.html#statemachine | Event pattern]] documentation
   * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
   */
  status: EventStatusValueSetEnum|null;
  /**
   * A code that classifies whether the media is an image, video or audio recording or some other media category.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
   */
  modality?: fhir.CodeableConceptArgs|undefined;
  /**
   * The name of the imaging view e.g. Lateral or Antero-posterior (AP).
   */
  view?: fhir.CodeableConceptArgs|undefined;
  /**
   * Who/What this Media is a record of.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * This will typically be the encounter the media occurred within.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * The date and time(s) at which the media was collected.
   */
  created?: fhir.FhirDateTime|fhir.Period|undefined;
  /**
   * The date and time(s) at which the media was collected.
   */
  createdDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * The date and time(s) at which the media was collected.
   */
  createdPeriod?: fhir.PeriodArgs|undefined;
  /**
   * It may be the same as the [`lastUpdated` ](resource-definitions.html#Meta.lastUpdated) time of the resource itself.  For Observations that do require review and verification for certain updates, it might not be the same as the `lastUpdated` time of the resource itself due to a non-clinically significant update that does not require the new version to be reviewed and verified again.
   */
  issued?: fhir.FhirInstant|string|undefined;
  /**
   * The person who administered the collection of the image.
   */
  operator?: fhir.ReferenceArgs|undefined;
  /**
   * Textual reasons can be captured using reasonCode.text.
   */
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related observation instead of an inline component.   
   * If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use the standard extension[ bodySite](extension-bodysite.html).
   */
  bodySite?: fhir.CodeableConceptArgs|undefined;
  /**
   * The name of the device / manufacturer of the device  that was used to make the recording.
   */
  deviceName?: fhir.FhirString|string|undefined;
  /**
   * An extension should be used if further typing of the device is needed.  Secondary devices used to support collecting a media can be represented using either extension or through the Observation.related element.
   */
  device?: fhir.ReferenceArgs|undefined;
  /**
   * Height of the image in pixels (photo/video).
   */
  height?: fhir.FhirPositiveInt|number|undefined;
  /**
   * Width of the image in pixels (photo/video).
   */
  width?: fhir.FhirPositiveInt|number|undefined;
  /**
   * if the number of frames is not supplied, the value may be unknown. Applications should not assume that there is only one frame unless it is explicitly stated.
   */
  frames?: fhir.FhirPositiveInt|number|undefined;
  /**
   * The duration might differ from occurrencePeriod if recording was paused.
   */
  duration?: fhir.FhirDecimal|number|undefined;
  /**
   * Recommended content types: image/jpeg, image/png, image/tiff, video/mpeg, audio/mp4, application/dicom. Application/dicom can contain the transfer syntax as a parameter.  For media that covers a period of time (video/sound), the content.creationTime is the end time. Creation time is used for tracking, organizing versions and searching.
   */
  content: fhir.AttachmentArgs|null;
  /**
   * Not to be used for observations, conclusions, etc. Instead use an [Observation](observation.html) based on the Media/ImagingStudy resource.
   */
  note?: fhir.AnnotationArgs[]|undefined;
}

/**
 * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
 */
export class Media extends fhir.DomainResource {
  readonly __dataType:string = 'Media';
  /**
   * Resource Type Name
   */
  public resourceType: "Media";
  /**
   * The identifier label and use can be used to determine what kind of identifier it is.
   */
  public identifier?: fhir.Identifier[]|undefined = [];
  /**
   * A procedure that is fulfilled in whole or in part by the creation of this media.
   */
  public basedOn?: fhir.Reference[]|undefined = [];
  /**
   * Not to be used to link an event to an Encounter - use Media.encounter for that.
   * [The allowed reference resources may be adjusted as appropriate for the event resource].
   */
  public partOf?: fhir.Reference[]|undefined = [];
  /**
   * A nominal state-transition diagram can be found in the [[event.html#statemachine | Event pattern]] documentation
   * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
   */
  public status: EventStatusValueSetEnum|null;
  /**
   * A code that classifies whether the media is an image, video or audio recording or some other media category.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
   */
  public modality?: fhir.CodeableConcept|undefined;
  /**
   * The name of the imaging view e.g. Lateral or Antero-posterior (AP).
   */
  public view?: fhir.CodeableConcept|undefined;
  /**
   * Who/What this Media is a record of.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * This will typically be the encounter the media occurred within.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * The date and time(s) at which the media was collected.
   */
  public created?: (fhir.FhirDateTime|fhir.Period)|undefined;
  readonly __createdIsChoice:true = true;
  /**
   * It may be the same as the [`lastUpdated` ](resource-definitions.html#Meta.lastUpdated) time of the resource itself.  For Observations that do require review and verification for certain updates, it might not be the same as the `lastUpdated` time of the resource itself due to a non-clinically significant update that does not require the new version to be reviewed and verified again.
   */
  public issued?: fhir.FhirInstant|undefined;
  /**
   * The person who administered the collection of the image.
   */
  public operator?: fhir.Reference|undefined;
  /**
   * Textual reasons can be captured using reasonCode.text.
   */
  public reasonCode?: fhir.CodeableConcept[]|undefined = [];
  /**
   * Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related observation instead of an inline component.   
   * If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use the standard extension[ bodySite](extension-bodysite.html).
   */
  public bodySite?: fhir.CodeableConcept|undefined;
  /**
   * The name of the device / manufacturer of the device  that was used to make the recording.
   */
  public deviceName?: fhir.FhirString|undefined;
  /**
   * An extension should be used if further typing of the device is needed.  Secondary devices used to support collecting a media can be represented using either extension or through the Observation.related element.
   */
  public device?: fhir.Reference|undefined;
  /**
   * Height of the image in pixels (photo/video).
   */
  public height?: fhir.FhirPositiveInt|undefined;
  /**
   * Width of the image in pixels (photo/video).
   */
  public width?: fhir.FhirPositiveInt|undefined;
  /**
   * if the number of frames is not supplied, the value may be unknown. Applications should not assume that there is only one frame unless it is explicitly stated.
   */
  public frames?: fhir.FhirPositiveInt|undefined;
  /**
   * The duration might differ from occurrencePeriod if recording was paused.
   */
  public duration?: fhir.FhirDecimal|undefined;
  /**
   * Recommended content types: image/jpeg, image/png, image/tiff, video/mpeg, audio/mp4, application/dicom. Application/dicom can contain the transfer syntax as a parameter.  For media that covers a period of time (video/sound), the content.creationTime is the end time. Creation time is used for tracking, organizing versions and searching.
   */
  public content: fhir.Attachment|null;
  /**
   * Not to be used for observations, conclusions, etc. Instead use an [Observation](observation.html) based on the Media/ImagingStudy resource.
   */
  public note?: fhir.Annotation[]|undefined = [];
  /**
   * Default constructor for Media - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MediaArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Media';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['basedOn']) { this.basedOn = source.basedOn.map((x) => new fhir.Reference(x)); }
    if (source['partOf']) { this.partOf = source.partOf.map((x) => new fhir.Reference(x)); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['modality']) { this.modality = new fhir.CodeableConcept(source.modality); }
    if (source['view']) { this.view = new fhir.CodeableConcept(source.view); }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['created']) { this.created = source.created; }
    else if (source['createdDateTime']) { this.created = new fhir.FhirDateTime({value: source.createdDateTime}); }
    else if (source['createdPeriod']) { this.created = new fhir.Period(source.createdPeriod); }
    if (source['issued']) { this.issued = new fhir.FhirInstant({value: source.issued}); }
    if (source['operator']) { this.operator = new fhir.Reference(source.operator); }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x)); }
    if (source['bodySite']) { this.bodySite = new fhir.CodeableConcept(source.bodySite); }
    if (source['deviceName']) { this.deviceName = new fhir.FhirString({value: source.deviceName}); }
    if (source['device']) { this.device = new fhir.Reference(source.device); }
    if (source['height']) { this.height = new fhir.FhirPositiveInt({value: source.height}); }
    if (source['width']) { this.width = new fhir.FhirPositiveInt({value: source.width}); }
    if (source['frames']) { this.frames = new fhir.FhirPositiveInt({value: source.frames}); }
    if (source['duration']) { this.duration = new fhir.FhirDecimal({value: source.duration}); }
    if (source['content']) { this.content = new fhir.Attachment(source.content); }
    else { this.content = null; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public static statusRequiredValueSet():EventStatusValueSetType {
    return EventStatusValueSet;
  }
  /**
   * Extensible-bound Value Set for type
   */
  public static typeExtensibleValueSet():MediaTypeValueSetType {
    return MediaTypeValueSet;
  }
  /**
   * Example-bound Value Set for view
   */
  public static viewExampleValueSet():MediaViewValueSetType {
    return MediaViewValueSet;
  }
  /**
   * Example-bound Value Set for reasonCode
   */
  public static reasonCodeExampleValueSet():ProcedureReasonValueSetType {
    return ProcedureReasonValueSet;
  }
  /**
   * Example-bound Value Set for bodySite
   */
  public static bodySiteExampleValueSet():BodySiteValueSetType {
    return BodySiteValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property resourceType:'Media' fhir: Media.resourceType:'Media'", }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["basedOn"]) { this.basedOn.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["partOf"]) { this.partOf.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['status']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property status:EventStatusValueSetEnum fhir: Media.status:code", }));
    }
    if (this["type"]) { outcome.issue!.push(...this.type.doModelValidation().issue!); }
    if (this["modality"]) { outcome.issue!.push(...this.modality.doModelValidation().issue!); }
    if (this["view"]) { outcome.issue!.push(...this.view.doModelValidation().issue!); }
    if (this["subject"]) { outcome.issue!.push(...this.subject.doModelValidation().issue!); }
    if (this["encounter"]) { outcome.issue!.push(...this.encounter.doModelValidation().issue!); }
    if (this["issued"]) { outcome.issue!.push(...this.issued.doModelValidation().issue!); }
    if (this["operator"]) { outcome.issue!.push(...this.operator.doModelValidation().issue!); }
    if (this["reasonCode"]) { this.reasonCode.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["bodySite"]) { outcome.issue!.push(...this.bodySite.doModelValidation().issue!); }
    if (this["deviceName"]) { outcome.issue!.push(...this.deviceName.doModelValidation().issue!); }
    if (this["device"]) { outcome.issue!.push(...this.device.doModelValidation().issue!); }
    if (this["height"]) { outcome.issue!.push(...this.height.doModelValidation().issue!); }
    if (this["width"]) { outcome.issue!.push(...this.width.doModelValidation().issue!); }
    if (this["frames"]) { outcome.issue!.push(...this.frames.doModelValidation().issue!); }
    if (this["duration"]) { outcome.issue!.push(...this.duration.doModelValidation().issue!); }
    if (!this['content']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property content:fhir.Attachment fhir: Media.content:Attachment", }));
    }
    if (this["content"]) { outcome.issue!.push(...this.content.doModelValidation().issue!); }
    if (this["note"]) { this.note.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
