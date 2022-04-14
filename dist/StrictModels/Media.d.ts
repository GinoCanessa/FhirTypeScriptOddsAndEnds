import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
 */
export declare class Media extends fhirModels.DomainResource implements fhirInterfaces.IMedia {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Media";
    /**
     * A procedure that is fulfilled in whole or in part by the creation of this media.
     */
    basedOn?: fhirModels.Reference[] | undefined;
    /**
     * Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related observation instead of an inline component.
     * If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use the standard extension[ bodySite](extension-bodysite.html).
     */
    bodySite?: fhirModels.CodeableConcept | undefined;
    /**
     * Recommended content types: image/jpeg, image/png, image/tiff, video/mpeg, audio/mp4, application/dicom. Application/dicom can contain the transfer syntax as a parameter.  For media that covers a period of time (video/sound), the content.creationTime is the end time. Creation time is used for tracking, organizing versions and searching.
     */
    content: fhirModels.Attachment;
    /**
     * The date and time(s) at which the media was collected.
     */
    createdDateTime?: string | undefined;
    _createdDateTime?: fhirModels.Element | undefined;
    /**
     * The date and time(s) at which the media was collected.
     */
    createdPeriod?: fhirModels.Period | undefined;
    /**
     * An extension should be used if further typing of the device is needed.  Secondary devices used to support collecting a media can be represented using either extension or through the Observation.related element.
     */
    device?: fhirModels.Reference | undefined;
    /**
     * The name of the device / manufacturer of the device  that was used to make the recording.
     */
    deviceName?: string | undefined;
    _deviceName?: fhirModels.Element | undefined;
    /**
     * The duration might differ from occurrencePeriod if recording was paused.
     */
    duration?: number | undefined;
    _duration?: fhirModels.Element | undefined;
    /**
     * This will typically be the encounter the media occurred within.
     */
    encounter?: fhirModels.Reference | undefined;
    /**
     * if the number of frames is not supplied, the value may be unknown. Applications should not assume that there is only one frame unless it is explicitly stated.
     */
    frames?: number | undefined;
    _frames?: fhirModels.Element | undefined;
    /**
     * Height of the image in pixels (photo/video).
     */
    height?: number | undefined;
    _height?: fhirModels.Element | undefined;
    /**
     * The identifier label and use can be used to determine what kind of identifier it is.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * It may be the same as the [`lastUpdated` ](resource-definitions.html#Meta.lastUpdated) time of the resource itself.  For Observations that do require review and verification for certain updates, it might not be the same as the `lastUpdated` time of the resource itself due to a non-clinically significant update that does not require the new version to be reviewed and verified again.
     */
    issued?: string | undefined;
    _issued?: fhirModels.Element | undefined;
    /**
     * Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
     */
    modality?: fhirModels.CodeableConcept | undefined;
    /**
     * Not to be used for observations, conclusions, etc. Instead use an [Observation](observation.html) based on the Media/ImagingStudy resource.
     */
    note?: fhirModels.Annotation[] | undefined;
    /**
     * The person who administered the collection of the image.
     */
    operator?: fhirModels.Reference | undefined;
    /**
     * Not to be used to link an event to an Encounter - use Media.encounter for that.
     * [The allowed reference resources may be adjusted as appropriate for the event resource].
     */
    partOf?: fhirModels.Reference[] | undefined;
    /**
     * Textual reasons can be captured using reasonCode.text.
     */
    reasonCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * A nominal state-transition diagram can be found in the [[event.html#statemachine | Event pattern]] documentation
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     */
    status: MediaStatusEnum;
    _status?: fhirModels.Element | undefined;
    /**
     * Who/What this Media is a record of.
     */
    subject?: fhirModels.Reference | undefined;
    /**
     * A code that classifies whether the media is an image, video or audio recording or some other media category.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * The name of the imaging view e.g. Lateral or Antero-posterior (AP).
     */
    view?: fhirModels.CodeableConcept | undefined;
    /**
     * Width of the image in pixels (photo/video).
     */
    width?: number | undefined;
    _width?: fhirModels.Element | undefined;
    /**
     * Default constructor for Media from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IMedia);
}
/**
 * Code Values for the Media.status field
 */
export declare enum MediaStatusEnum {
    PREPARATION = "preparation",
    IN_PROGRESS = "in-progress",
    NOT_DONE = "not-done",
    ON_HOLD = "on-hold",
    STOPPED = "stopped",
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=Media.d.ts.map