import * as fhir from '../fhir.js';
import { SeriesPerformerFunctionValueSetType } from '../fhirValueSets/SeriesPerformerFunctionValueSet.js';
import { DicomCid29AcquisitionModalityValueSetType } from '../fhirValueSets/DicomCid29AcquisitionModalityValueSet.js';
import { BodySiteValueSetType } from '../fhirValueSets/BodySiteValueSet.js';
import { BodysiteLateralityValueSetType } from '../fhirValueSets/BodysiteLateralityValueSet.js';
import { ImagingstudyStatusValueSetType } from '../fhirValueSets/ImagingstudyStatusValueSet.js';
import { ImagingstudyStatusValueSetEnum } from '../valueSetEnums.js';
import { ProcedureReasonValueSetType } from '../fhirValueSets/ProcedureReasonValueSet.js';
/**
 * Valid arguments for the ImagingStudySeriesPerformer type.
 */
export interface ImagingStudySeriesPerformerArgs extends fhir.BackboneElementArgs {
    /**
     * Distinguishes the type of involvement of the performer in the series.
     */
    function?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates who or what performed the series.
     */
    actor: fhir.ReferenceArgs | null;
}
/**
 * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
 */
export declare class ImagingStudySeriesPerformer extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<ImagingStudySeriesPerformerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for function
     */
    static functionExtensibleValueSet(): SeriesPerformerFunctionValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the ImagingStudySeriesInstance type.
 */
export interface ImagingStudySeriesInstanceArgs extends fhir.BackboneElementArgs {
    /**
     * See  [DICOM PS3.3 C.12.1](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.12.html#sect_C.12.1).
     */
    uid: fhir.FhirId | string | undefined;
    /**
     * DICOM instance  type.
     */
    sopClass: fhir.CodingArgs | null;
    /**
     * The number of instance in the series.
     */
    number?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Particularly for post-acquisition analytic objects, such as SR, presentation states, value mapping, etc.
     */
    title?: fhir.FhirString | string | undefined;
}
/**
 * A single SOP instance within the series, e.g. an image, or presentation state.
 */
export declare class ImagingStudySeriesInstance extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * See  [DICOM PS3.3 C.12.1](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.12.html#sect_C.12.1).
     */
    uid: fhir.FhirId | null;
    /**
     * DICOM instance  type.
     */
    sopClass: fhir.Coding | null;
    /**
     * The number of instance in the series.
     */
    number?: fhir.FhirUnsignedInt | undefined;
    /**
     * Particularly for post-acquisition analytic objects, such as SR, presentation states, value mapping, etc.
     */
    title?: fhir.FhirString | undefined;
    /**
     * Default constructor for ImagingStudySeriesInstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImagingStudySeriesInstanceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the ImagingStudySeries type.
 */
export interface ImagingStudySeriesArgs extends fhir.BackboneElementArgs {
    /**
     * See [DICOM PS3.3 C.7.3](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.3.html).
     */
    uid: fhir.FhirId | string | undefined;
    /**
     * The numeric identifier of this series in the study.
     */
    number?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * The modality of this series sequence.
     */
    modality: fhir.CodingArgs | null;
    /**
     * A description of the series.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
     */
    numberOfInstances?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG) formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; and DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances.
     */
    endpoint?: fhir.ReferenceArgs[] | undefined;
    /**
     * The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality.
     */
    bodySite?: fhir.CodingArgs | undefined;
    /**
     * The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite.
     */
    laterality?: fhir.CodingArgs | undefined;
    /**
     * The specimen imaged, e.g., for whole slide imaging of a biopsy.
     */
    specimen?: fhir.ReferenceArgs[] | undefined;
    /**
     * The date and time the series was started.
     */
    started?: fhir.FhirDateTime | string | undefined;
    /**
     * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
     */
    performer?: fhir.ImagingStudySeriesPerformerArgs[] | undefined;
    /**
     * A single SOP instance within the series, e.g. an image, or presentation state.
     */
    instance?: fhir.ImagingStudySeriesInstanceArgs[] | undefined;
}
/**
 * Each study has one or more series of images or other content.
 */
export declare class ImagingStudySeries extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * See [DICOM PS3.3 C.7.3](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.3.html).
     */
    uid: fhir.FhirId | null;
    /**
     * The numeric identifier of this series in the study.
     */
    number?: fhir.FhirUnsignedInt | undefined;
    /**
     * The modality of this series sequence.
     */
    modality: fhir.Coding | null;
    /**
     * A description of the series.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
     */
    numberOfInstances?: fhir.FhirUnsignedInt | undefined;
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
    started?: fhir.FhirDateTime | undefined;
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
    constructor(source?: Partial<ImagingStudySeriesArgs>, options?: fhir.FhirConstructorOptions);
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
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the ImagingStudy type.
 */
export interface ImagingStudyArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ImagingStudy" | undefined;
    /**
     * See discussion under [Imaging Study Implementation Notes](imagingstudy.html#notes) for encoding of DICOM Study Instance UID. Accession Number should use ACSN Identifier type.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     */
    status: ImagingstudyStatusValueSetEnum | null;
    /**
     * A list of all the series.modality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
     */
    modality?: fhir.CodingArgs[] | undefined;
    /**
     * QA phantoms can be recorded with a Device; multiple subjects (such as mice) can be recorded with a Group.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission test).
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * Date and time the study started.
     */
    started?: fhir.FhirDateTime | string | undefined;
    /**
     * A list of the diagnostic requests that resulted in this imaging study being performed.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * The requesting/referring physician.
     */
    referrer?: fhir.ReferenceArgs | undefined;
    /**
     * Who read the study and interpreted the images or other content.
     */
    interpreter?: fhir.ReferenceArgs[] | undefined;
    /**
     * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG, PNG), formats using a RESTful API; DICOM WADO-URI, which can similarly retrieve native or rendered instances, except using an HTTP query-based approach; DICOM QIDO-RS, which allows RESTful query for DICOM information without retrieving the actual instances; or IHE Invoke Image Display (IID), which provides standard invocation of an imaging web viewer.
     */
    endpoint?: fhir.ReferenceArgs[] | undefined;
    /**
     * Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present.
     */
    numberOfSeries?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
     */
    numberOfInstances?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * The procedure which this ImagingStudy was part of.
     */
    procedureReference?: fhir.ReferenceArgs | undefined;
    /**
     * The code for the performed procedure type.
     */
    procedureCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The principal physical location where the ImagingStudy was performed.
     */
    location?: fhir.ReferenceArgs | undefined;
    /**
     * Description of clinical condition indicating why the ImagingStudy was requested.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates another resource whose existence justifies this Study.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Per the recommended DICOM mapping, this element is derived from the Study Description attribute (0008,1030). Observations or findings about the imaging study should be recorded in another resource, e.g. Observation, and not in this element.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * The Imaging Manager description of the study. Institution-generated description or classification of the Study (component) performed.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Each study has one or more series of images or other content.
     */
    series?: fhir.ImagingStudySeriesArgs[] | undefined;
}
/**
 * Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 */
export declare class ImagingStudy extends fhir.DomainResource {
    readonly __dataType: string;
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
    started?: fhir.FhirDateTime | undefined;
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
    numberOfSeries?: fhir.FhirUnsignedInt | undefined;
    /**
     * Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present.
     */
    numberOfInstances?: fhir.FhirUnsignedInt | undefined;
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
    description?: fhir.FhirString | undefined;
    /**
     * Each study has one or more series of images or other content.
     */
    series?: fhir.ImagingStudySeries[] | undefined;
    /**
     * Default constructor for ImagingStudy - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImagingStudyArgs>, options?: fhir.FhirConstructorOptions);
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
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=ImagingStudy.d.ts.map