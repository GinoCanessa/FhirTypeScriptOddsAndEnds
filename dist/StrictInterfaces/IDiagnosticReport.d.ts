import * as fhirInterfaces from '../strictinterfaces';
/**
 * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
 */
export interface IDiagnosticReportMedia extends fhirInterfaces.IBackboneElement {
    /**
     * The comment should be displayed with the image. It would be common for the report to include additional discussion of the image contents in other sections such as the conclusion.
     */
    comment?: string | undefined;
    _comment?: fhirInterfaces.IElement | undefined;
    /**
     * Reference to the image source.
     */
    link: fhirInterfaces.IReference;
}
/**
 * The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
 */
export interface IDiagnosticReport extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "DiagnosticReport";
    /**
     * Note: Usually there is one test request for each result, however in some circumstances multiple test requests may be represented using a single test result resource. Note that there are also cases where one request leads to multiple reports.
     */
    basedOn?: fhirInterfaces.IReference[] | undefined;
    /**
     * Multiple categories are allowed using various categorization schemes.   The level of granularity is defined by the category concepts in the value set. More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in DiagnosticReport.code.
     */
    category?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * A code or name that describes this diagnostic report.
     */
    code: fhirInterfaces.ICodeableConcept;
    /**
     * Concise and clinically contextualized summary conclusion (interpretation/impression) of the diagnostic report.
     */
    conclusion?: string | undefined;
    _conclusion?: fhirInterfaces.IElement | undefined;
    /**
     * One or more codes that represent the summary conclusion (interpretation/impression) of the diagnostic report.
     */
    conclusionCode?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the diagnostically relevant time can be derived from the specimen collection times, but the specimen information is not always available, and the exact relationship between the specimens and the diagnostically relevant time is not always automatic.
     */
    effectiveDateTime?: string | undefined;
    _effectiveDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the diagnostically relevant time can be derived from the specimen collection times, but the specimen information is not always available, and the exact relationship between the specimens and the diagnostically relevant time is not always automatic.
     */
    effectivePeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter  but still be tied to the context of the encounter  (e.g. pre-admission laboratory tests).
     */
    encounter?: fhirInterfaces.IReference | undefined;
    /**
     * Usually assigned by the Information System of the diagnostic service provider (filler id).
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * ImagingStudy and the image element are somewhat overlapping - typically, the list of image references in the image element will also be found in one of the imaging study resources. However, each caters to different types of displays for different types of purposes. Neither, either, or both may be provided.
     */
    imagingStudy?: fhirInterfaces.IReference[] | undefined;
    /**
     * May be different from the update time of the resource itself, because that is the status of the record (potentially a secondary copy), not the actual release time of the report.
     */
    issued?: string | undefined;
    _issued?: fhirInterfaces.IElement | undefined;
    /**
     * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
     */
    media?: fhirInterfaces.IDiagnosticReportMedia[] | undefined;
    /**
     * This is not necessarily the source of the atomic data items or the entity that interpreted the results. It is the entity that takes responsibility for the clinical report.
     */
    performer?: fhirInterfaces.IReference[] | undefined;
    /**
     * "application/pdf" is recommended as the most reliable and interoperable in this context.
     */
    presentedForm?: fhirInterfaces.IAttachment[] | undefined;
    /**
     * Observations can contain observations.
     */
    result?: fhirInterfaces.IReference[] | undefined;
    /**
     * Might not be the same entity that takes responsibility for the clinical report.
     */
    resultsInterpreter?: fhirInterfaces.IReference[] | undefined;
    /**
     * If the specimen is sufficiently specified with a code in the test result name, then this additional data may be redundant. If there are multiple specimens, these may be represented per observation or group.
     */
    specimen?: fhirInterfaces.IReference[] | undefined;
    /**
     * The status of the diagnostic report.
     */
    status: DiagnosticReportStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * The subject of the report. Usually, but not always, this is a patient. However, diagnostic services also perform analyses on specimens collected from a variety of other sources.
     */
    subject?: fhirInterfaces.IReference | undefined;
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
//# sourceMappingURL=IDiagnosticReport.d.ts.map