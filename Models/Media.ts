// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../models'
/**
 * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
 */
export class Media extends fhirModels.DomainResource {
  /**
   * Resource Type Name
   */
  readonly resourceType: string = "Media";
  /**
   * A procedure that is fulfilled in whole or in part by the creation of this media.
   */
  basedOn?: fhirModels.Reference[];
  /**
   * Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related observation instead of an inline component.   
   * If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use the standard extension[ bodySite](extension-bodysite.html).
   */
  bodySite?: fhirModels.CodeableConcept;
  /**
   * Recommended content types: image/jpeg, image/png, image/tiff, video/mpeg, audio/mp4, application/dicom. Application/dicom can contain the transfer syntax as a parameter.  For media that covers a period of time (video/sound), the content.creationTime is the end time. Creation time is used for tracking, organizing versions and searching.
   */
  content: fhirModels.Attachment;
  /**
   * The date and time(s) at which the media was collected.
   */
  createdDateTime?: string;
  _createdDateTime?: fhirModels.Element;
  /**
   * The date and time(s) at which the media was collected.
   */
  createdPeriod?: fhirModels.Period;
  /**
   * An extension should be used if further typing of the device is needed.  Secondary devices used to support collecting a media can be represented using either extension or through the Observation.related element.
   */
  device?: fhirModels.Reference;
  /**
   * The name of the device / manufacturer of the device  that was used to make the recording.
   */
  deviceName?: string;
  _deviceName?: fhirModels.Element;
  /**
   * The duration might differ from occurrencePeriod if recording was paused.
   */
  duration?: number;
  _duration?: fhirModels.Element;
  /**
   * This will typically be the encounter the media occurred within.
   */
  encounter?: fhirModels.Reference;
  /**
   * if the number of frames is not supplied, the value may be unknown. Applications should not assume that there is only one frame unless it is explicitly stated.
   */
  frames?: number;
  _frames?: fhirModels.Element;
  /**
   * Height of the image in pixels (photo/video).
   */
  height?: number;
  _height?: fhirModels.Element;
  /**
   * The identifier label and use can be used to determine what kind of identifier it is.
   */
  identifier?: fhirModels.Identifier[];
  /**
   * It may be the same as the [`lastUpdated` ](resource-definitions.html#Meta.lastUpdated) time of the resource itself.  For Observations that do require review and verification for certain updates, it might not be the same as the `lastUpdated` time of the resource itself due to a non-clinically significant update that does not require the new version to be reviewed and verified again.
   */
  issued?: string;
  _issued?: fhirModels.Element;
  /**
   * Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
   */
  modality?: fhirModels.CodeableConcept;
  /**
   * Not to be used for observations, conclusions, etc. Instead use an [Observation](observation.html) based on the Media/ImagingStudy resource.
   */
  note?: fhirModels.Annotation[];
  /**
   * The person who administered the collection of the image.
   */
  operator?: fhirModels.Reference;
  /**
   * Not to be used to link an event to an Encounter - use Media.encounter for that.
   * [The allowed reference resources may be adjusted as appropriate for the event resource].
   */
  partOf?: fhirModels.Reference[];
  /**
   * Textual reasons can be captured using reasonCode.text.
   */
  reasonCode?: fhirModels.CodeableConcept[];
  /**
   * A nominal state-transition diagram can be found in the [[event.html#statemachine | Event pattern]] documentation
   * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
   */
  status: MediaStatusEnum;
  _status?: fhirModels.Element;
  /**
   * Who/What this Media is a record of.
   */
  subject?: fhirModels.Reference;
  /**
   * A code that classifies whether the media is an image, video or audio recording or some other media category.
   */
  type?: fhirModels.CodeableConcept;
  /**
   * The name of the imaging view e.g. Lateral or Antero-posterior (AP).
   */
  view?: fhirModels.CodeableConcept;
  /**
   * Width of the image in pixels (photo/video).
   */
  width?: number;
  _width?: fhirModels.Element;
  /**
   * Default constructor
   */
  constructor(source: Media) {
    super(source);
    if ((source['resourceType'] !== "Media") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a Media'; }
    if (source["basedOn"] !== undefined) { this.basedOn = source.basedOn; }
    if (source["bodySite"] !== undefined) { this.bodySite = source.bodySite; }
    if (source["content"] === undefined) { throw 'Missing required element content';}
    this.content = source.content;
    if (source["createdDateTime"] !== undefined) { this.createdDateTime = source.createdDateTime; }
    if (source["_createdDateTime"] !== undefined) { this._createdDateTime = source._createdDateTime; }
    if (source["createdPeriod"] !== undefined) { this.createdPeriod = source.createdPeriod; }
    if (source["device"] !== undefined) { this.device = source.device; }
    if (source["deviceName"] !== undefined) { this.deviceName = source.deviceName; }
    if (source["_deviceName"] !== undefined) { this._deviceName = source._deviceName; }
    if (source["duration"] !== undefined) { this.duration = source.duration; }
    if (source["_duration"] !== undefined) { this._duration = source._duration; }
    if (source["encounter"] !== undefined) { this.encounter = source.encounter; }
    if (source["frames"] !== undefined) { this.frames = source.frames; }
    if (source["_frames"] !== undefined) { this._frames = source._frames; }
    if (source["height"] !== undefined) { this.height = source.height; }
    if (source["_height"] !== undefined) { this._height = source._height; }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier; }
    if (source["issued"] !== undefined) { this.issued = source.issued; }
    if (source["_issued"] !== undefined) { this._issued = source._issued; }
    if (source["modality"] !== undefined) { this.modality = source.modality; }
    if (source["note"] !== undefined) { this.note = source.note; }
    if (source["operator"] !== undefined) { this.operator = source.operator; }
    if (source["partOf"] !== undefined) { this.partOf = source.partOf; }
    if (source["reasonCode"] !== undefined) { this.reasonCode = source.reasonCode; }
    if (source["status"] === undefined) { throw 'Missing required element status';}
    this.status = source.status;
    if (source["_status"] !== undefined) { this._status = source._status; }
    if (source["subject"] !== undefined) { this.subject = source.subject; }
    if (source["type"] !== undefined) { this.type = source.type; }
    if (source["view"] !== undefined) { this.view = source.view; }
    if (source["width"] !== undefined) { this.width = source.width; }
    if (source["_width"] !== undefined) { this._width = source._width; }
  }
}
/**
 * Code Values for the Media.status field
 */
export enum MediaStatusEnum {
  PREPARATION = "preparation",
  IN_PROGRESS = "in-progress",
  NOT_DONE = "not-done",
  ON_HOLD = "on-hold",
  STOPPED = "stopped",
  COMPLETED = "completed",
  ENTERED_IN_ERROR = "entered-in-error",
  UNKNOWN = "unknown",
}
