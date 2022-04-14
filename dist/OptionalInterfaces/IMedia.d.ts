import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
 */
export interface IMedia extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Media";
    /**
     * A procedure that is fulfilled in whole or in part by the creation of this media.
     */
    basedOn?: fhirInterfaces.IReference[] | undefined;
    /**
     * Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related observation instead of an inline component.
     * If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use the standard extension[ bodySite](extension-bodysite.html).
     */
    bodySite?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Recommended content types: image/jpeg, image/png, image/tiff, video/mpeg, audio/mp4, application/dicom. Application/dicom can contain the transfer syntax as a parameter.  For media that covers a period of time (video/sound), the content.creationTime is the end time. Creation time is used for tracking, organizing versions and searching.
     */
    content?: fhirInterfaces.IAttachment | undefined;
    /**
     * The date and time(s) at which the media was collected.
     */
    createdDateTime?: string | undefined;
    _createdDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * The date and time(s) at which the media was collected.
     */
    createdPeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * An extension should be used if further typing of the device is needed.  Secondary devices used to support collecting a media can be represented using either extension or through the Observation.related element.
     */
    device?: fhirInterfaces.IReference | undefined;
    /**
     * The name of the device / manufacturer of the device  that was used to make the recording.
     */
    deviceName?: string | undefined;
    _deviceName?: fhirInterfaces.IElement | undefined;
    /**
     * The duration might differ from occurrencePeriod if recording was paused.
     */
    duration?: number | undefined;
    _duration?: fhirInterfaces.IElement | undefined;
    /**
     * This will typically be the encounter the media occurred within.
     */
    encounter?: fhirInterfaces.IReference | undefined;
    /**
     * if the number of frames is not supplied, the value may be unknown. Applications should not assume that there is only one frame unless it is explicitly stated.
     */
    frames?: number | undefined;
    _frames?: fhirInterfaces.IElement | undefined;
    /**
     * Height of the image in pixels (photo/video).
     */
    height?: number | undefined;
    _height?: fhirInterfaces.IElement | undefined;
    /**
     * The identifier label and use can be used to determine what kind of identifier it is.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * It may be the same as the [`lastUpdated` ](resource-definitions.html#Meta.lastUpdated) time of the resource itself.  For Observations that do require review and verification for certain updates, it might not be the same as the `lastUpdated` time of the resource itself due to a non-clinically significant update that does not require the new version to be reviewed and verified again.
     */
    issued?: string | undefined;
    _issued?: fhirInterfaces.IElement | undefined;
    /**
     * Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
     */
    modality?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Not to be used for observations, conclusions, etc. Instead use an [Observation](observation.html) based on the Media/ImagingStudy resource.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * The person who administered the collection of the image.
     */
    operator?: fhirInterfaces.IReference | undefined;
    /**
     * Not to be used to link an event to an Encounter - use Media.encounter for that.
     * [The allowed reference resources may be adjusted as appropriate for the event resource].
     */
    partOf?: fhirInterfaces.IReference[] | undefined;
    /**
     * Textual reasons can be captured using reasonCode.text.
     */
    reasonCode?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * A nominal state-transition diagram can be found in the [[event.html#statemachine | Event pattern]] documentation
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     */
    status?: MediaStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * Who/What this Media is a record of.
     */
    subject?: fhirInterfaces.IReference | undefined;
    /**
     * A code that classifies whether the media is an image, video or audio recording or some other media category.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The name of the imaging view e.g. Lateral or Antero-posterior (AP).
     */
    view?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Width of the image in pixels (photo/video).
     */
    width?: number | undefined;
    _width?: fhirInterfaces.IElement | undefined;
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
//# sourceMappingURL=IMedia.d.ts.map