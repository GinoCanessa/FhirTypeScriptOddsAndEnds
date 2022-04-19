import * as fhir from '../fhir';
/**
 * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
 */
export declare type IImagingStudySeriesPerformer = fhir.IBackboneElement & {
    /**
     * Indicates who or what performed the series.
     */
    actor: fhir.IReference | null;
    /**
     * Distinguishes the type of involvement of the performer in the series.
     */
    function?: fhir.ICodeableConcept | undefined;
};
/**
 * A single SOP instance within the series, e.g. an image, or presentation state.
 */
export declare type IImagingStudySeriesInstance = fhir.IBackboneElement & {
    /**
     * The number of instance in the series.
     */
    number?: number | undefined;
    _number?: fhir.IFhirElement | undefined;
    /**
     * DICOM instance  type.
     */
    sopClass: fhir.ICoding | null;
    /**
     * Particularly for post-acquisition analytic objects, such as SR, presentation states, value mapping, etc.
     */
    title?: string | undefined;
    _title?: fhir.IFhirElement | undefined;
    /**
     * See  [DICOM PS3.3 C.12.1](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.12.html#sect_C.12.1).
     */
    uid: string | null;
    _uid?: fhir.IFhirElement | undefined;
};
/**
 * Each study has one or more series of images or other content.
 */
export declare type IImagingStudySeries = fhir.IBackboneElement & {
    /**
     * The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.
     */
    bodySite?: fhir.ICoding | undefined;
    /**
     * A description of the series.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG) formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; and DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances.
     */
    endpoint?: fhir.IReference[] | undefined;
    /**
     * A single SOP instance within the series, e.g. an image, or presentation state.
     */
    instance?: fhir.IImagingStudySeriesInstance[] | undefined;
    /**
     * The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite.
     */
    laterality?: fhir.ICoding | undefined;
    /**
     * The modality of this series sequence.
     */
    modality: fhir.ICoding | null;
    /**
     * The numeric identifier of this series in the study.
     */
    number?: number | undefined;
    _number?: fhir.IFhirElement | undefined;
    /**
     * Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
     */
    numberOfInstances?: number | undefined;
    _numberOfInstances?: fhir.IFhirElement | undefined;
    /**
     * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
     */
    performer?: fhir.IImagingStudySeriesPerformer[] | undefined;
    /**
     * The specimen imaged, e.g., for whole slide imaging of a biopsy.
     */
    specimen?: fhir.IReference[] | undefined;
    /**
     * The date and time the series was started.
     */
    started?: string | undefined;
    _started?: fhir.IFhirElement | undefined;
    /**
     * See [DICOM PS3.3 C.7.3](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.3.html).
     */
    uid: string | null;
    _uid?: fhir.IFhirElement | undefined;
};
/**
 * Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 */
export declare type IImagingStudy = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "ImagingStudy";
    /**
     * A list of the diagnostic requests that resulted in this imaging study being performed.
     */
    basedOn?: fhir.IReference[] | undefined;
    /**
     * The Imaging Manager description of the study. Institution-generated description or classification of the Study (component) performed.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission test).
     */
    encounter?: fhir.IReference | undefined;
    /**
     * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG), formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances; or IHE Invoke Image Display (IID), which provides standard invocation of an imaging web viewer.
     */
    endpoint?: fhir.IReference[] | undefined;
    /**
     * See discussion under [Imaging Study Implementation Notes](imagingstudy.html#notes) for encoding of DICOM Study Instance UID. Accession Number should use ACSN Identifier type.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Who read the study and interpreted the images or other content.
     */
    interpreter?: fhir.IReference[] | undefined;
    /**
     * The principal physical location where the ImagingStudy was performed.
     */
    location?: fhir.IReference | undefined;
    /**
     * A list of all the series.modality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
     */
    modality?: fhir.ICoding[] | undefined;
    /**
     * Per the recommended DICOM mapping, this element is derived from the Study Description attribute (0008,1030). Observations or findings about the imaging study should be recorded in another resource, e.g. Observation, and not in this element.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
     */
    numberOfInstances?: number | undefined;
    _numberOfInstances?: fhir.IFhirElement | undefined;
    /**
     * Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.
     */
    numberOfSeries?: number | undefined;
    _numberOfSeries?: fhir.IFhirElement | undefined;
    /**
     * The code for the performed procedure type.
     */
    procedureCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * The procedure which this ImagingStudy was part of.
     */
    procedureReference?: fhir.IReference | undefined;
    /**
     * Description of clinical condition indicating why the ImagingStudy was requested.
     */
    reasonCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * Indicates another resource whose existence justifies this Study.
     */
    reasonReference?: fhir.IReference[] | undefined;
    /**
     * The requesting/referring physician.
     */
    referrer?: fhir.IReference | undefined;
    /**
     * Each study has one or more series of images or other content.
     */
    series?: fhir.IImagingStudySeries[] | undefined;
    /**
     * Date and time the study started.
     */
    started?: string | undefined;
    _started?: fhir.IFhirElement | undefined;
    /**
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     */
    status: ImagingStudyStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * QA phantoms can be recorded with a Device; multiple subjects (such as mice) can be recorded with a Group.
     */
    subject: fhir.IReference | null;
};
/**
 * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
 */
export declare class ImagingStudySeriesPerformer extends fhir.BackboneElement implements fhir.IImagingStudySeriesPerformer {
    /**
     * Indicates who or what performed the series.
     */
    actor: fhir.Reference | null;
    /**
     * Distinguishes the type of involvement of the performer in the series.
     */
    function?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ImagingStudySeriesPerformer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImagingStudySeriesPerformer>);
    /**
     * Check if the current ImagingStudySeriesPerformer contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ImagingStudySeriesPerformer from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IImagingStudySeriesPerformer): ImagingStudySeriesPerformer;
}
/**
 * A single SOP instance within the series, e.g. an image, or presentation state.
 */
export declare class ImagingStudySeriesInstance extends fhir.BackboneElement implements fhir.IImagingStudySeriesInstance {
    /**
     * The number of instance in the series.
     */
    number?: number | undefined;
    _number?: fhir.FhirElement | undefined;
    /**
     * DICOM instance  type.
     */
    sopClass: fhir.Coding | null;
    /**
     * Particularly for post-acquisition analytic objects, such as SR, presentation states, value mapping, etc.
     */
    title?: string | undefined;
    _title?: fhir.FhirElement | undefined;
    /**
     * See  [DICOM PS3.3 C.12.1](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.12.html#sect_C.12.1).
     */
    uid: string | null;
    _uid?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImagingStudySeriesInstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImagingStudySeriesInstance>);
    /**
     * Check if the current ImagingStudySeriesInstance contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ImagingStudySeriesInstance from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IImagingStudySeriesInstance): ImagingStudySeriesInstance;
}
/**
 * Each study has one or more series of images or other content.
 */
export declare class ImagingStudySeries extends fhir.BackboneElement implements fhir.IImagingStudySeries {
    /**
     * The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.
     */
    bodySite?: fhir.Coding | undefined;
    /**
     * A description of the series.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG) formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; and DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances.
     */
    endpoint?: fhir.Reference[] | undefined;
    /**
     * A single SOP instance within the series, e.g. an image, or presentation state.
     */
    instance?: fhir.ImagingStudySeriesInstance[] | undefined;
    /**
     * The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite.
     */
    laterality?: fhir.Coding | undefined;
    /**
     * The modality of this series sequence.
     */
    modality: fhir.Coding | null;
    /**
     * The numeric identifier of this series in the study.
     */
    number?: number | undefined;
    _number?: fhir.FhirElement | undefined;
    /**
     * Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
     */
    numberOfInstances?: number | undefined;
    _numberOfInstances?: fhir.FhirElement | undefined;
    /**
     * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
     */
    performer?: fhir.ImagingStudySeriesPerformer[] | undefined;
    /**
     * The specimen imaged, e.g., for whole slide imaging of a biopsy.
     */
    specimen?: fhir.Reference[] | undefined;
    /**
     * The date and time the series was started.
     */
    started?: string | undefined;
    _started?: fhir.FhirElement | undefined;
    /**
     * See [DICOM PS3.3 C.7.3](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.3.html).
     */
    uid: string | null;
    _uid?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImagingStudySeries - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImagingStudySeries>);
    /**
     * Check if the current ImagingStudySeries contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ImagingStudySeries from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IImagingStudySeries): ImagingStudySeries;
}
/**
 * Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 */
export declare class ImagingStudy extends fhir.DomainResource implements fhir.IImagingStudy {
    /**
     * Resource Type Name
     */
    resourceType: "ImagingStudy";
    /**
     * A list of the diagnostic requests that resulted in this imaging study being performed.
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * The Imaging Manager description of the study. Institution-generated description or classification of the Study (component) performed.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission test).
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG), formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances; or IHE Invoke Image Display (IID), which provides standard invocation of an imaging web viewer.
     */
    endpoint?: fhir.Reference[] | undefined;
    /**
     * See discussion under [Imaging Study Implementation Notes](imagingstudy.html#notes) for encoding of DICOM Study Instance UID. Accession Number should use ACSN Identifier type.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Who read the study and interpreted the images or other content.
     */
    interpreter?: fhir.Reference[] | undefined;
    /**
     * The principal physical location where the ImagingStudy was performed.
     */
    location?: fhir.Reference | undefined;
    /**
     * A list of all the series.modality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
     */
    modality?: fhir.Coding[] | undefined;
    /**
     * Per the recommended DICOM mapping, this element is derived from the Study Description attribute (0008,1030). Observations or findings about the imaging study should be recorded in another resource, e.g. Observation, and not in this element.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
     */
    numberOfInstances?: number | undefined;
    _numberOfInstances?: fhir.FhirElement | undefined;
    /**
     * Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.
     */
    numberOfSeries?: number | undefined;
    _numberOfSeries?: fhir.FhirElement | undefined;
    /**
     * The code for the performed procedure type.
     */
    procedureCode?: fhir.CodeableConcept[] | undefined;
    /**
     * The procedure which this ImagingStudy was part of.
     */
    procedureReference?: fhir.Reference | undefined;
    /**
     * Description of clinical condition indicating why the ImagingStudy was requested.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Indicates another resource whose existence justifies this Study.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * The requesting/referring physician.
     */
    referrer?: fhir.Reference | undefined;
    /**
     * Each study has one or more series of images or other content.
     */
    series?: fhir.ImagingStudySeries[] | undefined;
    /**
     * Date and time the study started.
     */
    started?: string | undefined;
    _started?: fhir.FhirElement | undefined;
    /**
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     */
    status: ImagingStudyStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * QA phantoms can be recorded with a Device; multiple subjects (such as mice) can be recorded with a Group.
     */
    subject: fhir.Reference | null;
    /**
     * Default constructor for ImagingStudy - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IImagingStudy>);
    /**
     * Check if the current ImagingStudy contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ImagingStudy from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IImagingStudy): ImagingStudy;
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