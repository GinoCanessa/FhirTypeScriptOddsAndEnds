import * as fhir from '../fhir';
/**
 * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
 */
export declare type IMedia = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Media";
    /**
     * A procedure that is fulfilled in whole or in part by the creation of this media.
     */
    basedOn?: fhir.IReference[] | undefined;
    /**
     * Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related observation instead of an inline component.
     * If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use the standard extension[ bodySite](extension-bodysite.html).
     */
    bodySite?: fhir.ICodeableConcept | undefined;
    /**
     * Recommended content types: image/jpeg, image/png, image/tiff, video/mpeg, audio/mp4, application/dicom. Application/dicom can contain the transfer syntax as a parameter.  For media that covers a period of time (video/sound), the content.creationTime is the end time. Creation time is used for tracking, organizing versions and searching.
     */
    content: fhir.IAttachment | null;
    /**
     * The date and time(s) at which the media was collected.
     */
    createdDateTime?: string | undefined;
    _createdDateTime?: fhir.IFhirElement | undefined;
    /**
     * The date and time(s) at which the media was collected.
     */
    createdPeriod?: fhir.IPeriod | undefined;
    /**
     * An extension should be used if further typing of the device is needed.  Secondary devices used to support collecting a media can be represented using either extension or through the Observation.related element.
     */
    device?: fhir.IReference | undefined;
    /**
     * The name of the device / manufacturer of the device  that was used to make the recording.
     */
    deviceName?: string | undefined;
    _deviceName?: fhir.IFhirElement | undefined;
    /**
     * The duration might differ from occurrencePeriod if recording was paused.
     */
    duration?: number | undefined;
    _duration?: fhir.IFhirElement | undefined;
    /**
     * This will typically be the encounter the media occurred within.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * if the number of frames is not supplied, the value may be unknown. Applications should not assume that there is only one frame unless it is explicitly stated.
     */
    frames?: number | undefined;
    _frames?: fhir.IFhirElement | undefined;
    /**
     * Height of the image in pixels (photo/video).
     */
    height?: number | undefined;
    _height?: fhir.IFhirElement | undefined;
    /**
     * The identifier label and use can be used to determine what kind of identifier it is.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * It may be the same as the [`lastUpdated` ](resource-definitions.html#Meta.lastUpdated) time of the resource itself.  For Observations that do require review and verification for certain updates, it might not be the same as the `lastUpdated` time of the resource itself due to a non-clinically significant update that does not require the new version to be reviewed and verified again.
     */
    issued?: string | undefined;
    _issued?: fhir.IFhirElement | undefined;
    /**
     * Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
     */
    modality?: fhir.ICodeableConcept | undefined;
    /**
     * Not to be used for observations, conclusions, etc. Instead use an [Observation](observation.html) based on the Media/ImagingStudy resource.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * The person who administered the collection of the image.
     */
    operator?: fhir.IReference | undefined;
    /**
     * Not to be used to link an event to an Encounter - use Media.encounter for that.
     * [The allowed reference resources may be adjusted as appropriate for the event resource].
     */
    partOf?: fhir.IReference[] | undefined;
    /**
     * Textual reasons can be captured using reasonCode.text.
     */
    reasonCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * A nominal state-transition diagram can be found in the [[event.html#statemachine | Event pattern]] documentation
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     */
    status: MediaStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * Who/What this Media is a record of.
     */
    subject?: fhir.IReference | undefined;
    /**
     * A code that classifies whether the media is an image, video or audio recording or some other media category.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * The name of the imaging view e.g. Lateral or Antero-posterior (AP).
     */
    view?: fhir.ICodeableConcept | undefined;
    /**
     * Width of the image in pixels (photo/video).
     */
    width?: number | undefined;
    _width?: fhir.IFhirElement | undefined;
};
/**
 * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
 */
export declare class Media extends fhir.DomainResource implements fhir.IMedia {
    /**
     * Resource Type Name
     */
    resourceType: "Media";
    /**
     * A procedure that is fulfilled in whole or in part by the creation of this media.
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related observation instead of an inline component.
     * If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use the standard extension[ bodySite](extension-bodysite.html).
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * Recommended content types: image/jpeg, image/png, image/tiff, video/mpeg, audio/mp4, application/dicom. Application/dicom can contain the transfer syntax as a parameter.  For media that covers a period of time (video/sound), the content.creationTime is the end time. Creation time is used for tracking, organizing versions and searching.
     */
    content: fhir.Attachment | null;
    /**
     * The date and time(s) at which the media was collected.
     */
    createdDateTime?: string | undefined;
    _createdDateTime?: fhir.FhirElement | undefined;
    /**
     * The date and time(s) at which the media was collected.
     */
    createdPeriod?: fhir.Period | undefined;
    /**
     * An extension should be used if further typing of the device is needed.  Secondary devices used to support collecting a media can be represented using either extension or through the Observation.related element.
     */
    device?: fhir.Reference | undefined;
    /**
     * The name of the device / manufacturer of the device  that was used to make the recording.
     */
    deviceName?: string | undefined;
    _deviceName?: fhir.FhirElement | undefined;
    /**
     * The duration might differ from occurrencePeriod if recording was paused.
     */
    duration?: number | undefined;
    _duration?: fhir.FhirElement | undefined;
    /**
     * This will typically be the encounter the media occurred within.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * if the number of frames is not supplied, the value may be unknown. Applications should not assume that there is only one frame unless it is explicitly stated.
     */
    frames?: number | undefined;
    _frames?: fhir.FhirElement | undefined;
    /**
     * Height of the image in pixels (photo/video).
     */
    height?: number | undefined;
    _height?: fhir.FhirElement | undefined;
    /**
     * The identifier label and use can be used to determine what kind of identifier it is.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * It may be the same as the [`lastUpdated` ](resource-definitions.html#Meta.lastUpdated) time of the resource itself.  For Observations that do require review and verification for certain updates, it might not be the same as the `lastUpdated` time of the resource itself due to a non-clinically significant update that does not require the new version to be reviewed and verified again.
     */
    issued?: string | undefined;
    _issued?: fhir.FhirElement | undefined;
    /**
     * Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
     */
    modality?: fhir.CodeableConcept | undefined;
    /**
     * Not to be used for observations, conclusions, etc. Instead use an [Observation](observation.html) based on the Media/ImagingStudy resource.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * The person who administered the collection of the image.
     */
    operator?: fhir.Reference | undefined;
    /**
     * Not to be used to link an event to an Encounter - use Media.encounter for that.
     * [The allowed reference resources may be adjusted as appropriate for the event resource].
     */
    partOf?: fhir.Reference[] | undefined;
    /**
     * Textual reasons can be captured using reasonCode.text.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * A nominal state-transition diagram can be found in the [[event.html#statemachine | Event pattern]] documentation
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     */
    status: MediaStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Who/What this Media is a record of.
     */
    subject?: fhir.Reference | undefined;
    /**
     * A code that classifies whether the media is an image, video or audio recording or some other media category.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The name of the imaging view e.g. Lateral or Antero-posterior (AP).
     */
    view?: fhir.CodeableConcept | undefined;
    /**
     * Width of the image in pixels (photo/video).
     */
    width?: number | undefined;
    _width?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Media - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMedia>);
    /**
     * Check if the current Media contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Media from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMedia): Media;
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