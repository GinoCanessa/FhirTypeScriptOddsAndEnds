import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
 */
export declare class ImagingStudySeriesPerformer extends fhirModels.BackboneElement implements fhirInterfaces.IImagingStudySeriesPerformer {
    /**
     * Indicates who or what performed the series.
     */
    actor?: fhirModels.Reference | undefined;
    /**
     * Distinguishes the type of involvement of the performer in the series.
     */
    function?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for ImagingStudySeriesPerformer from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IImagingStudySeriesPerformer>);
    /**
     * Factory function to create a ImagingStudySeriesPerformer from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IImagingStudySeriesPerformer): ImagingStudySeriesPerformer;
    /**
     * Check if the current ImagingStudySeriesPerformer contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A single SOP instance within the series, e.g. an image, or presentation state.
 */
export declare class ImagingStudySeriesInstance extends fhirModels.BackboneElement implements fhirInterfaces.IImagingStudySeriesInstance {
    /**
     * The number of instance in the series.
     */
    number?: number | undefined;
    _number?: fhirModels.Element | undefined;
    /**
     * DICOM instance  type.
     */
    sopClass?: fhirModels.Coding | undefined;
    /**
     * Particularly for post-acquisition analytic objects, such as SR, presentation states, value mapping, etc.
     */
    title?: string | undefined;
    _title?: fhirModels.Element | undefined;
    /**
     * See  [DICOM PS3.3 C.12.1](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.12.html#sect_C.12.1).
     */
    uid?: string | undefined;
    _uid?: fhirModels.Element | undefined;
    /**
     * Default constructor for ImagingStudySeriesInstance from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IImagingStudySeriesInstance>);
    /**
     * Factory function to create a ImagingStudySeriesInstance from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IImagingStudySeriesInstance): ImagingStudySeriesInstance;
    /**
     * Check if the current ImagingStudySeriesInstance contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Each study has one or more series of images or other content.
 */
export declare class ImagingStudySeries extends fhirModels.BackboneElement implements fhirInterfaces.IImagingStudySeries {
    /**
     * The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.
     */
    bodySite?: fhirModels.Coding | undefined;
    /**
     * A description of the series.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG) formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; and DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances.
     */
    endpoint?: fhirModels.Reference[] | undefined;
    /**
     * A single SOP instance within the series, e.g. an image, or presentation state.
     */
    instance?: fhirModels.ImagingStudySeriesInstance[] | undefined;
    /**
     * The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite.
     */
    laterality?: fhirModels.Coding | undefined;
    /**
     * The modality of this series sequence.
     */
    modality?: fhirModels.Coding | undefined;
    /**
     * The numeric identifier of this series in the study.
     */
    number?: number | undefined;
    _number?: fhirModels.Element | undefined;
    /**
     * Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
     */
    numberOfInstances?: number | undefined;
    _numberOfInstances?: fhirModels.Element | undefined;
    /**
     * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
     */
    performer?: fhirModels.ImagingStudySeriesPerformer[] | undefined;
    /**
     * The specimen imaged, e.g., for whole slide imaging of a biopsy.
     */
    specimen?: fhirModels.Reference[] | undefined;
    /**
     * The date and time the series was started.
     */
    started?: string | undefined;
    _started?: fhirModels.Element | undefined;
    /**
     * See [DICOM PS3.3 C.7.3](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.3.html).
     */
    uid?: string | undefined;
    _uid?: fhirModels.Element | undefined;
    /**
     * Default constructor for ImagingStudySeries from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IImagingStudySeries>);
    /**
     * Factory function to create a ImagingStudySeries from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IImagingStudySeries): ImagingStudySeries;
    /**
     * Check if the current ImagingStudySeries contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 */
export declare class ImagingStudy extends fhirModels.DomainResource implements fhirInterfaces.IImagingStudy {
    /**
     * Resource Type Name
     */
    readonly resourceType = "ImagingStudy";
    /**
     * A list of the diagnostic requests that resulted in this imaging study being performed.
     */
    basedOn?: fhirModels.Reference[] | undefined;
    /**
     * The Imaging Manager description of the study. Institution-generated description or classification of the Study (component) performed.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission test).
     */
    encounter?: fhirModels.Reference | undefined;
    /**
     * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG), formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances; or IHE Invoke Image Display (IID), which provides standard invocation of an imaging web viewer.
     */
    endpoint?: fhirModels.Reference[] | undefined;
    /**
     * See discussion under [Imaging Study Implementation Notes](imagingstudy.html#notes) for encoding of DICOM Study Instance UID. Accession Number should use ACSN Identifier type.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Who read the study and interpreted the images or other content.
     */
    interpreter?: fhirModels.Reference[] | undefined;
    /**
     * The principal physical location where the ImagingStudy was performed.
     */
    location?: fhirModels.Reference | undefined;
    /**
     * A list of all the series.modality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
     */
    modality?: fhirModels.Coding[] | undefined;
    /**
     * Per the recommended DICOM mapping, this element is derived from the Study Description attribute (0008,1030). Observations or findings about the imaging study should be recorded in another resource, e.g. Observation, and not in this element.
     */
    note?: fhirModels.Annotation[] | undefined;
    /**
     * Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
     */
    numberOfInstances?: number | undefined;
    _numberOfInstances?: fhirModels.Element | undefined;
    /**
     * Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.
     */
    numberOfSeries?: number | undefined;
    _numberOfSeries?: fhirModels.Element | undefined;
    /**
     * The code for the performed procedure type.
     */
    procedureCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The procedure which this ImagingStudy was part of.
     */
    procedureReference?: fhirModels.Reference | undefined;
    /**
     * Description of clinical condition indicating why the ImagingStudy was requested.
     */
    reasonCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Indicates another resource whose existence justifies this Study.
     */
    reasonReference?: fhirModels.Reference[] | undefined;
    /**
     * The requesting/referring physician.
     */
    referrer?: fhirModels.Reference | undefined;
    /**
     * Each study has one or more series of images or other content.
     */
    series?: fhirModels.ImagingStudySeries[] | undefined;
    /**
     * Date and time the study started.
     */
    started?: string | undefined;
    _started?: fhirModels.Element | undefined;
    /**
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     */
    status?: ImagingStudyStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * QA phantoms can be recorded with a Device; multiple subjects (such as mice) can be recorded with a Group.
     */
    subject?: fhirModels.Reference | undefined;
    /**
     * Default constructor for ImagingStudy from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IImagingStudy>);
    /**
     * Factory function to create a ImagingStudy from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IImagingStudy): ImagingStudy;
    /**
     * Check if the current ImagingStudy contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the ImagingStudy.status field
 */
export declare enum ImagingStudyStatusEnum {
    REGISTERED = "registered",
    AVAILABLE = "available",
    CANCELLED = "cancelled",
    ENTERED_IN_ERROR = "entered-in-error",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=ImagingStudy.d.ts.map