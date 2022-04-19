import * as fhir from '../fhir';
/**
 * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
 */
export declare type IDiagnosticReportMedia = fhir.IBackboneElement & {
    /**
     * The comment should be displayed with the image. It would be common for the report to include additional discussion of the image contents in other sections such as the conclusion.
     */
    comment?: string | undefined;
    _comment?: fhir.IFhirElement | undefined;
    /**
     * Reference to the image source.
     */
    link: fhir.IReference | null;
};
/**
 * The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
 */
export declare type IDiagnosticReport = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "DiagnosticReport";
    /**
     * Note: Usually there is one test request for each result, however in some circumstances multiple test requests may be represented using a single test result resource. Note that there are also cases where one request leads to multiple reports.
     */
    basedOn?: fhir.IReference[] | undefined;
    /**
     * Multiple categories are allowed using various categorization schemes.   The level of granularity is defined by the category concepts in the value set. More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in DiagnosticReport.code.
     */
    category?: fhir.ICodeableConcept[] | undefined;
    /**
     * A code or name that describes this diagnostic report.
     */
    code: fhir.ICodeableConcept | null;
    /**
     * Concise and clinically contextualized summary conclusion (interpretation/impression) of the diagnostic report.
     */
    conclusion?: string | undefined;
    _conclusion?: fhir.IFhirElement | undefined;
    /**
     * One or more codes that represent the summary conclusion (interpretation/impression) of the diagnostic report.
     */
    conclusionCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the diagnostically relevant time can be derived from the specimen collection times, but the specimen information is not always available, and the exact relationship between the specimens and the diagnostically relevant time is not always automatic.
     */
    effectiveDateTime?: string | undefined;
    _effectiveDateTime?: fhir.IFhirElement | undefined;
    /**
     * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the diagnostically relevant time can be derived from the specimen collection times, but the specimen information is not always available, and the exact relationship between the specimens and the diagnostically relevant time is not always automatic.
     */
    effectivePeriod?: fhir.IPeriod | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter  but still be tied to the context of the encounter  (e.g. pre-admission laboratory tests).
     */
    encounter?: fhir.IReference | undefined;
    /**
     * Usually assigned by the Information System of the diagnostic service provider (filler id).
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * ImagingStudy and the image element are somewhat overlapping - typically, the list of image references in the image element will also be found in one of the imaging study resources. However, each caters to different types of displays for different types of purposes. Neither, either, or both may be provided.
     */
    imagingStudy?: fhir.IReference[] | undefined;
    /**
     * May be different from the update time of the resource itself, because that is the status of the record (potentially a secondary copy), not the actual release time of the report.
     */
    issued?: string | undefined;
    _issued?: fhir.IFhirElement | undefined;
    /**
     * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
     */
    media?: fhir.IDiagnosticReportMedia[] | undefined;
    /**
     * This is not necessarily the source of the atomic data items or the entity that interpreted the results. It is the entity that takes responsibility for the clinical report.
     */
    performer?: fhir.IReference[] | undefined;
    /**
     * "application/pdf" is recommended as the most reliable and interoperable in this context.
     */
    presentedForm?: fhir.IAttachment[] | undefined;
    /**
     * Observations can contain observations.
     */
    result?: fhir.IReference[] | undefined;
    /**
     * Might not be the same entity that takes responsibility for the clinical report.
     */
    resultsInterpreter?: fhir.IReference[] | undefined;
    /**
     * If the specimen is sufficiently specified with a code in the test result name, then this additional data may be redundant. If there are multiple specimens, these may be represented per observation or group.
     */
    specimen?: fhir.IReference[] | undefined;
    /**
     * The status of the diagnostic report.
     */
    status: DiagnosticReportStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * The subject of the report. Usually, but not always, this is a patient. However, diagnostic services also perform analyses on specimens collected from a variety of other sources.
     */
    subject?: fhir.IReference | undefined;
};
/**
 * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
 */
export declare class DiagnosticReportMedia extends fhir.BackboneElement implements fhir.IDiagnosticReportMedia {
    /**
     * The comment should be displayed with the image. It would be common for the report to include additional discussion of the image contents in other sections such as the conclusion.
     */
    comment?: string | undefined;
    _comment?: fhir.FhirElement | undefined;
    /**
     * Reference to the image source.
     */
    link: fhir.Reference | null;
    /**
     * Default constructor for DiagnosticReportMedia - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDiagnosticReportMedia>);
    /**
     * Check if the current DiagnosticReportMedia contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a DiagnosticReportMedia from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IDiagnosticReportMedia): DiagnosticReportMedia;
}
/**
 * The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
 */
export declare class DiagnosticReport extends fhir.DomainResource implements fhir.IDiagnosticReport {
    /**
     * Resource Type Name
     */
    resourceType: "DiagnosticReport";
    /**
     * Note: Usually there is one test request for each result, however in some circumstances multiple test requests may be represented using a single test result resource. Note that there are also cases where one request leads to multiple reports.
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * Multiple categories are allowed using various categorization schemes.   The level of granularity is defined by the category concepts in the value set. More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in DiagnosticReport.code.
     */
    category?: fhir.CodeableConcept[] | undefined;
    /**
     * A code or name that describes this diagnostic report.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Concise and clinically contextualized summary conclusion (interpretation/impression) of the diagnostic report.
     */
    conclusion?: string | undefined;
    _conclusion?: fhir.FhirElement | undefined;
    /**
     * One or more codes that represent the summary conclusion (interpretation/impression) of the diagnostic report.
     */
    conclusionCode?: fhir.CodeableConcept[] | undefined;
    /**
     * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the diagnostically relevant time can be derived from the specimen collection times, but the specimen information is not always available, and the exact relationship between the specimens and the diagnostically relevant time is not always automatic.
     */
    effectiveDateTime?: string | undefined;
    _effectiveDateTime?: fhir.FhirElement | undefined;
    /**
     * If the diagnostic procedure was performed on the patient, this is the time it was performed. If there are specimens, the diagnostically relevant time can be derived from the specimen collection times, but the specimen information is not always available, and the exact relationship between the specimens and the diagnostically relevant time is not always automatic.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter  but still be tied to the context of the encounter  (e.g. pre-admission laboratory tests).
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Usually assigned by the Information System of the diagnostic service provider (filler id).
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * ImagingStudy and the image element are somewhat overlapping - typically, the list of image references in the image element will also be found in one of the imaging study resources. However, each caters to different types of displays for different types of purposes. Neither, either, or both may be provided.
     */
    imagingStudy?: fhir.Reference[] | undefined;
    /**
     * May be different from the update time of the resource itself, because that is the status of the record (potentially a secondary copy), not the actual release time of the report.
     */
    issued?: string | undefined;
    _issued?: fhir.FhirElement | undefined;
    /**
     * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
     */
    media?: fhir.DiagnosticReportMedia[] | undefined;
    /**
     * This is not necessarily the source of the atomic data items or the entity that interpreted the results. It is the entity that takes responsibility for the clinical report.
     */
    performer?: fhir.Reference[] | undefined;
    /**
     * "application/pdf" is recommended as the most reliable and interoperable in this context.
     */
    presentedForm?: fhir.Attachment[] | undefined;
    /**
     * Observations can contain observations.
     */
    result?: fhir.Reference[] | undefined;
    /**
     * Might not be the same entity that takes responsibility for the clinical report.
     */
    resultsInterpreter?: fhir.Reference[] | undefined;
    /**
     * If the specimen is sufficiently specified with a code in the test result name, then this additional data may be redundant. If there are multiple specimens, these may be represented per observation or group.
     */
    specimen?: fhir.Reference[] | undefined;
    /**
     * The status of the diagnostic report.
     */
    status: DiagnosticReportStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * The subject of the report. Usually, but not always, this is a patient. However, diagnostic services also perform analyses on specimens collected from a variety of other sources.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Default constructor for DiagnosticReport - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDiagnosticReport>);
    /**
     * Check if the current DiagnosticReport contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a DiagnosticReport from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IDiagnosticReport): DiagnosticReport;
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