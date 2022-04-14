import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
 */
export declare class DiagnosticReportMedia extends fhirModels.BackboneElement implements fhirInterfaces.IDiagnosticReportMedia {
    /**
     * The comment should be displayed with the image. It would be common for the report to include additional discussion of the image contents in other sections such as the conclusion.
     */
    comment?: string | undefined;
    _comment?: fhirModels.Element | undefined;
    /**
     * Reference to the image source.
     */
    link: fhirModels.Reference;
    /**
     * Default constructor for DiagnosticReportMedia from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IDiagnosticReportMedia);
}
/**
 * The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
 */
export declare class DiagnosticReport extends fhirModels.DomainResource implements fhirInterfaces.IDiagnosticReport {
    /**
     * Resource Type Name
     */
    readonly resourceType = "DiagnosticReport";
    /**
     * Note: Usually there is one test request for each result, however in some circumstances multiple test requests may be represented using a single test result resource. Note that there are also cases where one request leads to multiple reports.
     */
    basedOn?: fhirModels.Reference[] | undefined;
    /**
     * Multiple categories are allowed using various categorization schemes.   The level of granularity is defined by the category concepts in the value set. More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in DiagnosticReport.code.
     */
    category?: fhirModels.CodeableConcept[] | undefined;
    /**
     * A code or name that describes this diagnostic report.
     */
    code: fhirModels.CodeableConcept;
    /**
     * Concise and clinically contextualized summary conclusion (interpretation/impression) of the diagnostic report.
     */
    conclusion?: string | undefined;
    _conclusion?: fhirModels.Element | undefined;
    /**
     * One or more codes that represent the summary conclusion (interpretation/impression) of the diagnostic report.
     */
    conclusionCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the diagnostically relevant time can be derived from the specimen collection times, but the specimen information is not always available, and the exact relationship between the specimens and the diagnostically relevant time is not always automatic.
     */
    effectiveDateTime?: string | undefined;
    _effectiveDateTime?: fhirModels.Element | undefined;
    /**
     * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the diagnostically relevant time can be derived from the specimen collection times, but the specimen information is not always available, and the exact relationship between the specimens and the diagnostically relevant time is not always automatic.
     */
    effectivePeriod?: fhirModels.Period | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter  but still be tied to the context of the encounter  (e.g. pre-admission laboratory tests).
     */
    encounter?: fhirModels.Reference | undefined;
    /**
     * Usually assigned by the Information System of the diagnostic service provider (filler id).
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * ImagingStudy and the image element are somewhat overlapping - typically, the list of image references in the image element will also be found in one of the imaging study resources. However, each caters to different types of displays for different types of purposes. Neither, either, or both may be provided.
     */
    imagingStudy?: fhirModels.Reference[] | undefined;
    /**
     * May be different from the update time of the resource itself, because that is the status of the record (potentially a secondary copy), not the actual release time of the report.
     */
    issued?: string | undefined;
    _issued?: fhirModels.Element | undefined;
    /**
     * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
     */
    media?: fhirModels.DiagnosticReportMedia[] | undefined;
    /**
     * This is not necessarily the source of the atomic data items or the entity that interpreted the results. It is the entity that takes responsibility for the clinical report.
     */
    performer?: fhirModels.Reference[] | undefined;
    /**
     * "application/pdf" is recommended as the most reliable and interoperable in this context.
     */
    presentedForm?: fhirModels.Attachment[] | undefined;
    /**
     * Observations can contain observations.
     */
    result?: fhirModels.Reference[] | undefined;
    /**
     * Might not be the same entity that takes responsibility for the clinical report.
     */
    resultsInterpreter?: fhirModels.Reference[] | undefined;
    /**
     * If the specimen is sufficiently specified with a code in the test result name, then this additional data may be redundant. If there are multiple specimens, these may be represented per observation or group.
     */
    specimen?: fhirModels.Reference[] | undefined;
    /**
     * The status of the diagnostic report.
     */
    status: DiagnosticReportStatusEnum;
    _status?: fhirModels.Element | undefined;
    /**
     * The subject of the report. Usually, but not always, this is a patient. However, diagnostic services also perform analyses on specimens collected from a variety of other sources.
     */
    subject?: fhirModels.Reference | undefined;
    /**
     * Default constructor for DiagnosticReport from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IDiagnosticReport);
}
/**
 * Code Values for the DiagnosticReport.status field
 */
export declare enum DiagnosticReportStatusEnum {
    REGISTERED = "registered",
    PARTIAL = "partial",
    PRELIMINARY = "preliminary",
    FINAL = "final",
    AMENDED = "amended",
    CORRECTED = "corrected",
    APPENDED = "appended",
    CANCELLED = "cancelled",
    ENTERED_IN_ERROR = "entered-in-error",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=DiagnosticReport.d.ts.map