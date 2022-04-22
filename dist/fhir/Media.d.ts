import * as fhir from '../fhir.js';
import { EventStatusValueSetType, EventStatusValueSetEnum } from '../fhirValueSets/EventStatusValueSet.js';
import { MediaTypeValueSetType } from '../fhirValueSets/MediaTypeValueSet.js';
import { MediaViewValueSetType } from '../fhirValueSets/MediaViewValueSet.js';
import { ProcedureReasonValueSetType } from '../fhirValueSets/ProcedureReasonValueSet.js';
import { BodySiteValueSetType } from '../fhirValueSets/BodySiteValueSet.js';
/**
 * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
 */
export declare type IMedia = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Media";
    /**
     * The identifier label and use can be used to determine what kind of identifier it is.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * A procedure that is fulfilled in whole or in part by the creation of this media.
     */
    basedOn?: fhir.IReference[] | undefined;
    /**
     * Not to be used to link an event to an Encounter - use Media.encounter for that.
     * [The allowed reference resources may be adjusted as appropriate for the event resource].
     */
    partOf?: fhir.IReference[] | undefined;
    /**
     * A nominal state-transition diagram can be found in the [[event.html#statemachine | Event pattern]] documentation
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     */
    status: EventStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Media.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * A code that classifies whether the media is an image, video or audio recording or some other media category.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
     */
    modality?: fhir.ICodeableConcept | undefined;
    /**
     * The name of the imaging view e.g. Lateral or Antero-posterior (AP).
     */
    view?: fhir.ICodeableConcept | undefined;
    /**
     * Who/What this Media is a record of.
     */
    subject?: fhir.IReference | undefined;
    /**
     * This will typically be the encounter the media occurred within.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * The date and time(s) at which the media was collected.
     */
    createdDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Media.created[x]
     */
    _createdDateTime?: fhir.IFhirElement | undefined;
    /**
     * The date and time(s) at which the media was collected.
     */
    createdPeriod?: fhir.IPeriod | undefined;
    /**
     * It may be the same as the [`lastUpdated` ](resource-definitions.html#Meta.lastUpdated) time of the resource itself.  For Observations that do require review and verification for certain updates, it might not be the same as the `lastUpdated` time of the resource itself due to a non-clinically significant update that does not require the new version to be reviewed and verified again.
     */
    issued?: string | undefined;
    /**
     * Extended properties for primitive element: Media.issued
     */
    _issued?: fhir.IFhirElement | undefined;
    /**
     * The person who administered the collection of the image.
     */
    operator?: fhir.IReference | undefined;
    /**
     * Textual reasons can be captured using reasonCode.text.
     */
    reasonCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related observation instead of an inline component.
     * If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use the standard extension[ bodySite](extension-bodysite.html).
     */
    bodySite?: fhir.ICodeableConcept | undefined;
    /**
     * The name of the device / manufacturer of the device  that was used to make the recording.
     */
    deviceName?: string | undefined;
    /**
     * Extended properties for primitive element: Media.deviceName
     */
    _deviceName?: fhir.IFhirElement | undefined;
    /**
     * An extension should be used if further typing of the device is needed.  Secondary devices used to support collecting a media can be represented using either extension or through the Observation.related element.
     */
    device?: fhir.IReference | undefined;
    /**
     * Height of the image in pixels (photo/video).
     */
    height?: number | undefined;
    /**
     * Extended properties for primitive element: Media.height
     */
    _height?: fhir.IFhirElement | undefined;
    /**
     * Width of the image in pixels (photo/video).
     */
    width?: number | undefined;
    /**
     * Extended properties for primitive element: Media.width
     */
    _width?: fhir.IFhirElement | undefined;
    /**
     * if the number of frames is not supplied, the value may be unknown. Applications should not assume that there is only one frame unless it is explicitly stated.
     */
    frames?: number | undefined;
    /**
     * Extended properties for primitive element: Media.frames
     */
    _frames?: fhir.IFhirElement | undefined;
    /**
     * The duration might differ from occurrencePeriod if recording was paused.
     */
    duration?: number | undefined;
    /**
     * Extended properties for primitive element: Media.duration
     */
    _duration?: fhir.IFhirElement | undefined;
    /**
     * Recommended content types: image/jpeg, image/png, image/tiff, video/mpeg, audio/mp4, application/dicom. Application/dicom can contain the transfer syntax as a parameter.  For media that covers a period of time (video/sound), the content.creationTime is the end time. Creation time is used for tracking, organizing versions and searching.
     */
    content: fhir.IAttachment | null;
    /**
     * Not to be used for observations, conclusions, etc. Instead use an [Observation](observation.html) based on the Media/ImagingStudy resource.
     */
    note?: fhir.IAnnotation[] | undefined;
};
/**
 * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
 */
export declare class Media extends fhir.DomainResource implements IMedia {
    /**
     * Resource Type Name
     */
    resourceType: "Media";
    /**
     * The identifier label and use can be used to determine what kind of identifier it is.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * A procedure that is fulfilled in whole or in part by the creation of this media.
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * Not to be used to link an event to an Encounter - use Media.encounter for that.
     * [The allowed reference resources may be adjusted as appropriate for the event resource].
     */
    partOf?: fhir.Reference[] | undefined;
    /**
     * A nominal state-transition diagram can be found in the [[event.html#statemachine | Event pattern]] documentation
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     */
    status: EventStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Media.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * A code that classifies whether the media is an image, video or audio recording or some other media category.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
     */
    modality?: fhir.CodeableConcept | undefined;
    /**
     * The name of the imaging view e.g. Lateral or Antero-posterior (AP).
     */
    view?: fhir.CodeableConcept | undefined;
    /**
     * Who/What this Media is a record of.
     */
    subject?: fhir.Reference | undefined;
    /**
     * This will typically be the encounter the media occurred within.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The date and time(s) at which the media was collected.
     */
    createdDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Media.created[x]
     */
    _createdDateTime?: fhir.FhirElement | undefined;
    /**
     * The date and time(s) at which the media was collected.
     */
    createdPeriod?: fhir.Period | undefined;
    /**
     * It may be the same as the [`lastUpdated` ](resource-definitions.html#Meta.lastUpdated) time of the resource itself.  For Observations that do require review and verification for certain updates, it might not be the same as the `lastUpdated` time of the resource itself due to a non-clinically significant update that does not require the new version to be reviewed and verified again.
     */
    issued?: string | undefined;
    /**
     * Extended properties for primitive element: Media.issued
     */
    _issued?: fhir.FhirElement | undefined;
    /**
     * The person who administered the collection of the image.
     */
    operator?: fhir.Reference | undefined;
    /**
     * Textual reasons can be captured using reasonCode.text.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related observation instead of an inline component.
     * If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use the standard extension[ bodySite](extension-bodysite.html).
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * The name of the device / manufacturer of the device  that was used to make the recording.
     */
    deviceName?: string | undefined;
    /**
     * Extended properties for primitive element: Media.deviceName
     */
    _deviceName?: fhir.FhirElement | undefined;
    /**
     * An extension should be used if further typing of the device is needed.  Secondary devices used to support collecting a media can be represented using either extension or through the Observation.related element.
     */
    device?: fhir.Reference | undefined;
    /**
     * Height of the image in pixels (photo/video).
     */
    height?: number | undefined;
    /**
     * Extended properties for primitive element: Media.height
     */
    _height?: fhir.FhirElement | undefined;
    /**
     * Width of the image in pixels (photo/video).
     */
    width?: number | undefined;
    /**
     * Extended properties for primitive element: Media.width
     */
    _width?: fhir.FhirElement | undefined;
    /**
     * if the number of frames is not supplied, the value may be unknown. Applications should not assume that there is only one frame unless it is explicitly stated.
     */
    frames?: number | undefined;
    /**
     * Extended properties for primitive element: Media.frames
     */
    _frames?: fhir.FhirElement | undefined;
    /**
     * The duration might differ from occurrencePeriod if recording was paused.
     */
    duration?: number | undefined;
    /**
     * Extended properties for primitive element: Media.duration
     */
    _duration?: fhir.FhirElement | undefined;
    /**
     * Recommended content types: image/jpeg, image/png, image/tiff, video/mpeg, audio/mp4, application/dicom. Application/dicom can contain the transfer syntax as a parameter.  For media that covers a period of time (video/sound), the content.creationTime is the end time. Creation time is used for tracking, organizing versions and searching.
     */
    content: fhir.Attachment | null;
    /**
     * Not to be used for observations, conclusions, etc. Instead use an [Observation](observation.html) based on the Media/ImagingStudy resource.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Default constructor for Media - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMedia>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): EventStatusValueSetType;
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet(): MediaTypeValueSetType;
    /**
     * Example-bound Value Set for view
     */
    static viewExampleValueSet(): MediaViewValueSetType;
    /**
     * Example-bound Value Set for reasonCode
     */
    static reasonCodeExampleValueSet(): ProcedureReasonValueSetType;
    /**
     * Example-bound Value Set for bodySite
     */
    static bodySiteExampleValueSet(): BodySiteValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Media.d.ts.map