import * as fhir from '../fhir.js';
import { SeriesPerformerFunctionValueSetType } from '../fhirValueSets/SeriesPerformerFunctionValueSet.js';
import { DicomCid29AcquisitionModalityValueSetType } from '../fhirValueSets/DicomCid29AcquisitionModalityValueSet.js';
import { BodySiteValueSetType } from '../fhirValueSets/BodySiteValueSet.js';
import { BodysiteLateralityValueSetType } from '../fhirValueSets/BodysiteLateralityValueSet.js';
import { ImagingstudyStatusValueSetType, ImagingstudyStatusValueSetEnum } from '../fhirValueSets/ImagingstudyStatusValueSet.js';
import { ProcedureReasonValueSetType } from '../fhirValueSets/ProcedureReasonValueSet.js';
/**
 * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
 */
export declare type IImagingStudySeriesPerformer = fhir.IBackboneElement & {
    /**
     * Distinguishes the type of involvement of the performer in the series.
     */
    function?: fhir.ICodeableConcept | undefined;
    /**
     * Indicates who or what performed the series.
     */
    actor: fhir.IReference | null;
};
/**
 * A single SOP instance within the series, e.g. an image, or presentation state.
 */
export declare type IImagingStudySeriesInstance = fhir.IBackboneElement & {
    /**
     * See  [DICOM PS3.3 C.12.1](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.12.html#sect_C.12.1).
     */
    uid: string | null;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.uid
     */
    _uid?: fhir.IFhirElement | undefined;
    /**
     * DICOM instance  type.
     */
    sopClass: fhir.ICoding | null;
    /**
     * The number of instance in the series.
     */
    number?: number | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.number
     */
    _number?: fhir.IFhirElement | undefined;
    /**
     * Particularly for post-acquisition analytic objects, such as SR, presentation states, value mapping, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.title
     */
    _title?: fhir.IFhirElement | undefined;
};
/**
 * Each study has one or more series of images or other content.
 */
export declare type IImagingStudySeries = fhir.IBackboneElement & {
    /**
     * See [DICOM PS3.3 C.7.3](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.3.html).
     */
    uid: string | null;
    /**
     * Extended properties for primitive element: ImagingStudy.series.uid
     */
    _uid?: fhir.IFhirElement | undefined;
    /**
     * The numeric identifier of this series in the study.
     */
    number?: number | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.number
     */
    _number?: fhir.IFhirElement | undefined;
    /**
     * The modality of this series sequence.
     */
    modality: fhir.ICoding | null;
    /**
     * A description of the series.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
     */
    numberOfInstances?: number | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.numberOfInstances
     */
    _numberOfInstances?: fhir.IFhirElement | undefined;
    /**
     * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG) formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; and DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances.
     */
    endpoint?: fhir.IReference[] | undefined;
    /**
     * The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.
     */
    bodySite?: fhir.ICoding | undefined;
    /**
     * The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite.
     */
    laterality?: fhir.ICoding | undefined;
    /**
     * The specimen imaged, e.g., for whole slide imaging of a biopsy.
     */
    specimen?: fhir.IReference[] | undefined;
    /**
     * The date and time the series was started.
     */
    started?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.started
     */
    _started?: fhir.IFhirElement | undefined;
    /**
     * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
     */
    performer?: fhir.IImagingStudySeriesPerformer[] | undefined;
    /**
     * A single SOP instance within the series, e.g. an image, or presentation state.
     */
    instance?: fhir.IImagingStudySeriesInstance[] | undefined;
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
     * See discussion under [Imaging Study Implementation Notes](imagingstudy.html#notes) for encoding of DICOM Study Instance UID. Accession Number should use ACSN Identifier type.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     */
    status: ImagingstudyStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: ImagingStudy.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * A list of all the series.modality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
     */
    modality?: fhir.ICoding[] | undefined;
    /**
     * QA phantoms can be recorded with a Device; multiple subjects (such as mice) can be recorded with a Group.
     */
    subject: fhir.IReference | null;
    /**
     * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission test).
     */
    encounter?: fhir.IReference | undefined;
    /**
     * Date and time the study started.
     */
    started?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.started
     */
    _started?: fhir.IFhirElement | undefined;
    /**
     * A list of the diagnostic requests that resulted in this imaging study being performed.
     */
    basedOn?: fhir.IReference[] | undefined;
    /**
     * The requesting/referring physician.
     */
    referrer?: fhir.IReference | undefined;
    /**
     * Who read the study and interpreted the images or other content.
     */
    interpreter?: fhir.IReference[] | undefined;
    /**
     * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG), formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances; or IHE Invoke Image Display (IID), which provides standard invocation of an imaging web viewer.
     */
    endpoint?: fhir.IReference[] | undefined;
    /**
     * Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.
     */
    numberOfSeries?: number | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.numberOfSeries
     */
    _numberOfSeries?: fhir.IFhirElement | undefined;
    /**
     * Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
     */
    numberOfInstances?: number | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.numberOfInstances
     */
    _numberOfInstances?: fhir.IFhirElement | undefined;
    /**
     * The procedure which this ImagingStudy was part of.
     */
    procedureReference?: fhir.IReference | undefined;
    /**
     * The code for the performed procedure type.
     */
    procedureCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * The principal physical location where the ImagingStudy was performed.
     */
    location?: fhir.IReference | undefined;
    /**
     * Description of clinical condition indicating why the ImagingStudy was requested.
     */
    reasonCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * Indicates another resource whose existence justifies this Study.
     */
    reasonReference?: fhir.IReference[] | undefined;
    /**
     * Per the recommended DICOM mapping, this element is derived from the Study Description attribute (0008,1030). Observations or findings about the imaging study should be recorded in another resource, e.g. Observation, and not in this element.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * The Imaging Manager description of the study. Institution-generated description or classification of the Study (component) performed.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * Each study has one or more series of images or other content.
     */
    series?: fhir.IImagingStudySeries[] | undefined;
};
/**
 * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
 */
export declare class ImagingStudySeriesPerformer extends fhir.BackboneElement implements IImagingStudySeriesPerformer {
    /**
     * Distinguishes the type of involvement of the performer in the series.
     */
    function?: fhir.CodeableConcept | undefined;
    /**
     * Indicates who or what performed the series.
     */
    actor: fhir.Reference | null;
    /**
     * Default constructor for ImagingStudySeriesPerformer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImagingStudySeriesPerformer>);
    /**
     * Extensible-bound Value Set for function
     */
    static functionExtensibleValueSet(): SeriesPerformerFunctionValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A single SOP instance within the series, e.g. an image, or presentation state.
 */
export declare class ImagingStudySeriesInstance extends fhir.BackboneElement implements IImagingStudySeriesInstance {
    /**
     * See  [DICOM PS3.3 C.12.1](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.12.html#sect_C.12.1).
     */
    uid: string | null;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.uid
     */
    _uid?: fhir.FhirElement | undefined;
    /**
     * DICOM instance  type.
     */
    sopClass: fhir.Coding | null;
    /**
     * The number of instance in the series.
     */
    number?: number | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.number
     */
    _number?: fhir.FhirElement | undefined;
    /**
     * Particularly for post-acquisition analytic objects, such as SR, presentation states, value mapping, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.instance.title
     */
    _title?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ImagingStudySeriesInstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImagingStudySeriesInstance>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Each study has one or more series of images or other content.
 */
export declare class ImagingStudySeries extends fhir.BackboneElement implements IImagingStudySeries {
    /**
     * See [DICOM PS3.3 C.7.3](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.3.html).
     */
    uid: string | null;
    /**
     * Extended properties for primitive element: ImagingStudy.series.uid
     */
    _uid?: fhir.FhirElement | undefined;
    /**
     * The numeric identifier of this series in the study.
     */
    number?: number | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.number
     */
    _number?: fhir.FhirElement | undefined;
    /**
     * The modality of this series sequence.
     */
    modality: fhir.Coding | null;
    /**
     * A description of the series.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
     */
    numberOfInstances?: number | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.numberOfInstances
     */
    _numberOfInstances?: fhir.FhirElement | undefined;
    /**
     * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG) formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; and DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances.
     */
    endpoint?: fhir.Reference[] | undefined;
    /**
     * The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.
     */
    bodySite?: fhir.Coding | undefined;
    /**
     * The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite.
     */
    laterality?: fhir.Coding | undefined;
    /**
     * The specimen imaged, e.g., for whole slide imaging of a biopsy.
     */
    specimen?: fhir.Reference[] | undefined;
    /**
     * The date and time the series was started.
     */
    started?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.series.started
     */
    _started?: fhir.FhirElement | undefined;
    /**
     * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
     */
    performer?: fhir.ImagingStudySeriesPerformer[] | undefined;
    /**
     * A single SOP instance within the series, e.g. an image, or presentation state.
     */
    instance?: fhir.ImagingStudySeriesInstance[] | undefined;
    /**
     * Default constructor for ImagingStudySeries - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImagingStudySeries>);
    /**
     * Extensible-bound Value Set for modality
     */
    static modalityExtensibleValueSet(): DicomCid29AcquisitionModalityValueSetType;
    /**
     * Example-bound Value Set for bodySite
     */
    static bodySiteExampleValueSet(): BodySiteValueSetType;
    /**
     * Example-bound Value Set for laterality
     */
    static lateralityExampleValueSet(): BodysiteLateralityValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 */
export declare class ImagingStudy extends fhir.DomainResource implements IImagingStudy {
    /**
     * Resource Type Name
     */
    resourceType: "ImagingStudy";
    /**
     * See discussion under [Imaging Study Implementation Notes](imagingstudy.html#notes) for encoding of DICOM Study Instance UID. Accession Number should use ACSN Identifier type.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     */
    status: ImagingstudyStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: ImagingStudy.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * A list of all the series.modality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
     */
    modality?: fhir.Coding[] | undefined;
    /**
     * QA phantoms can be recorded with a Device; multiple subjects (such as mice) can be recorded with a Group.
     */
    subject: fhir.Reference | null;
    /**
     * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission test).
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Date and time the study started.
     */
    started?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.started
     */
    _started?: fhir.FhirElement | undefined;
    /**
     * A list of the diagnostic requests that resulted in this imaging study being performed.
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * The requesting/referring physician.
     */
    referrer?: fhir.Reference | undefined;
    /**
     * Who read the study and interpreted the images or other content.
     */
    interpreter?: fhir.Reference[] | undefined;
    /**
     * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG), formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances; or IHE Invoke Image Display (IID), which provides standard invocation of an imaging web viewer.
     */
    endpoint?: fhir.Reference[] | undefined;
    /**
     * Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.
     */
    numberOfSeries?: number | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.numberOfSeries
     */
    _numberOfSeries?: fhir.FhirElement | undefined;
    /**
     * Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
     */
    numberOfInstances?: number | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.numberOfInstances
     */
    _numberOfInstances?: fhir.FhirElement | undefined;
    /**
     * The procedure which this ImagingStudy was part of.
     */
    procedureReference?: fhir.Reference | undefined;
    /**
     * The code for the performed procedure type.
     */
    procedureCode?: fhir.CodeableConcept[] | undefined;
    /**
     * The principal physical location where the ImagingStudy was performed.
     */
    location?: fhir.Reference | undefined;
    /**
     * Description of clinical condition indicating why the ImagingStudy was requested.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Indicates another resource whose existence justifies this Study.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * Per the recommended DICOM mapping, this element is derived from the Study Description attribute (0008,1030). Observations or findings about the imaging study should be recorded in another resource, e.g. Observation, and not in this element.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * The Imaging Manager description of the study. Institution-generated description or classification of the Study (component) performed.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImagingStudy.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Each study has one or more series of images or other content.
     */
    series?: fhir.ImagingStudySeries[] | undefined;
    /**
     * Default constructor for ImagingStudy - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IImagingStudy>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): ImagingstudyStatusValueSetType;
    /**
     * Extensible-bound Value Set for modality
     */
    static modalityExtensibleValueSet(): DicomCid29AcquisitionModalityValueSetType;
    /**
     * Example-bound Value Set for reasonCode
     */
    static reasonCodeExampleValueSet(): ProcedureReasonValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=ImagingStudy.d.ts.map