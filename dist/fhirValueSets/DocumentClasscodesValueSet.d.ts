import { Coding } from '../fhir.js';
/**
 * This is the code specifying the high-level kind of document (e.g. Prescription, Discharge Summary, Report, etc.). Note: Class code for documents comes from LOINC, and is based upon one of the following:The type of service described by the document. It is described at a very high level in Section 7.3 of the LOINC Manual. The type study performed. It was determined by identifying modalities for study reports. The section of the chart where the document is placed. It was determined from the SETs created for Claims Attachment requests.
 */
export declare const DocumentClasscodesValueSet: {
    /**
     * Code: 11369-6
     */
    readonly HistoryOfImmunization: Coding;
    /**
     * Code: 11485-0
     */
    readonly AnesthesiaRecords: Coding;
    /**
     * Code: 11486-8
     */
    readonly ChemotherapyRecords: Coding;
    /**
     * Code: 11488-4
     */
    readonly ConsultNote: Coding;
    /**
     * Code: 11504-8
     */
    readonly SurgicalOperationNote: Coding;
    /**
     * Code: 11506-3
     */
    readonly ProviderUnspecifiedProgressNote: Coding;
    /**
     * Code: 11543-6
     */
    readonly NurseryRecords: Coding;
    /**
     * Code: 15508-5
     */
    readonly LaborAndDeliveryRecords: Coding;
    /**
     * Code: 18726-0
     */
    readonly RadiologyStudiesSet: Coding;
    /**
     * Code: 18748-4
     */
    readonly DiagnosticImagingStudy: Coding;
    /**
     * Code: 18761-7
     */
    readonly ProviderUnspecifiedTransferSummary: Coding;
    /**
     * Code: 18842-5
     */
    readonly DischargeSummary: Coding;
    /**
     * Code: 26436-6
     */
    readonly LaboratoryStudiesSet: Coding;
    /**
     * Code: 26441-6
     */
    readonly CardiologyStudiesSet: Coding;
    /**
     * Code: 26442-4
     */
    readonly ObstetricalStudiesSet: Coding;
    /**
     * Code: 27895-2
     */
    readonly GastroenterologyEndoscopyStudiesSet: Coding;
    /**
     * Code: 27896-0
     */
    readonly PulmonaryStudiesSet: Coding;
    /**
     * Code: 27897-8
     */
    readonly NeuromuscularElectrophysiologyStudiesSet: Coding;
    /**
     * Code: 27898-6
     */
    readonly PathologyStudiesSet: Coding;
    /**
     * Code: 28570-0
     */
    readonly ProviderUnspecifiedProcedureNote: Coding;
    /**
     * Code: 28619-5
     */
    readonly OphthalmologyOptometryStudiesSet: Coding;
    /**
     * Code: 28634-4
     */
    readonly MiscellaneousStudiesSet: Coding;
    /**
     * Code: 29749-9
     */
    readonly DialysisRecords: Coding;
    /**
     * Code: 29750-7
     */
    readonly NeonatalIntensiveCareRecords: Coding;
    /**
     * Code: 29751-5
     */
    readonly CriticalCareRecords: Coding;
    /**
     * Code: 29752-3
     */
    readonly PerioperativeRecords: Coding;
    /**
     * Code: 34109-9
     */
    readonly EvaluationAndManagementNote: Coding;
    /**
     * Code: 34117-2
     */
    readonly ProviderUnspecifiedHistoryAndPhysicalNote: Coding;
    /**
     * Code: 34121-4
     */
    readonly InterventionalProcedureNote: Coding;
    /**
     * Code: 34122-2
     */
    readonly PathologyProcedureNote: Coding;
    /**
     * Code: 34133-9
     */
    readonly SummarizationOfEpisodeNote: Coding;
    /**
     * Code: 34140-4
     */
    readonly TransferOfCareReferralNote: Coding;
    /**
     * Code: 34748-4
     */
    readonly TelephoneEncounterNote: Coding;
    /**
     * Code: 34775-7
     */
    readonly GeneralSurgeryPreOperativeEvaluationAndManagementNote: Coding;
    /**
     * Code: 47039-3
     */
    readonly InpatientAdmissionHistoryAndPhysicalNote: Coding;
    /**
     * Code: 47042-7
     */
    readonly CounselingNote: Coding;
    /**
     * Code: 47045-0
     */
    readonly StudyReportDocument: Coding;
    /**
     * Code: 47046-8
     */
    readonly SummaryOfDeath: Coding;
    /**
     * Code: 47049-2
     */
    readonly NonPatientCommunication: Coding;
    /**
     * Code: 53576-5
     */
    readonly PersonalHealthMonitoringReportDocument: Coding;
    /**
     * Code: 56445-0
     */
    readonly MedicationSummaryDocument: Coding;
    /**
     * Code: 56447-6
     */
    readonly PlanOfCareNote: Coding;
    /**
     * Code: 57016-8
     */
    readonly PrivacyPolicyAcknowledgmentDocument: Coding;
    /**
     * Code: 57017-6
     */
    readonly PrivacyPolicyOrganizationDocument: Coding;
    /**
     * Code: 57133-1
     */
    readonly ReferralNote: Coding;
};
/**
 * This is the code specifying the high-level kind of document (e.g. Prescription, Discharge Summary, Report, etc.). Note: Class code for documents comes from LOINC, and is based upon one of the following:The type of service described by the document. It is described at a very high level in Section 7.3 of the LOINC Manual. The type study performed. It was determined by identifying modalities for study reports. The section of the chart where the document is placed. It was determined from the SETs created for Claims Attachment requests.
 */
export declare type DocumentClasscodesValueSetType = typeof DocumentClasscodesValueSet;
/**
 * This is the code specifying the high-level kind of document (e.g. Prescription, Discharge Summary, Report, etc.). Note: Class code for documents comes from LOINC, and is based upon one of the following:The type of service described by the document. It is described at a very high level in Section 7.3 of the LOINC Manual. The type study performed. It was determined by identifying modalities for study reports. The section of the chart where the document is placed. It was determined from the SETs created for Claims Attachment requests.
 */
export declare enum DocumentClasscodesValueSetEnum {
    /**
     * Code: 11369-6
     */
    HistoryOfImmunization = "11369-6",
    /**
     * Code: 11485-0
     */
    AnesthesiaRecords = "11485-0",
    /**
     * Code: 11486-8
     */
    ChemotherapyRecords = "11486-8",
    /**
     * Code: 11488-4
     */
    ConsultNote = "11488-4",
    /**
     * Code: 11504-8
     */
    SurgicalOperationNote = "11504-8",
    /**
     * Code: 11506-3
     */
    ProviderUnspecifiedProgressNote = "11506-3",
    /**
     * Code: 11543-6
     */
    NurseryRecords = "11543-6",
    /**
     * Code: 15508-5
     */
    LaborAndDeliveryRecords = "15508-5",
    /**
     * Code: 18726-0
     */
    RadiologyStudiesSet = "18726-0",
    /**
     * Code: 18748-4
     */
    DiagnosticImagingStudy = "18748-4",
    /**
     * Code: 18761-7
     */
    ProviderUnspecifiedTransferSummary = "18761-7",
    /**
     * Code: 18842-5
     */
    DischargeSummary = "18842-5",
    /**
     * Code: 26436-6
     */
    LaboratoryStudiesSet = "26436-6",
    /**
     * Code: 26441-6
     */
    CardiologyStudiesSet = "26441-6",
    /**
     * Code: 26442-4
     */
    ObstetricalStudiesSet = "26442-4",
    /**
     * Code: 27895-2
     */
    GastroenterologyEndoscopyStudiesSet = "27895-2",
    /**
     * Code: 27896-0
     */
    PulmonaryStudiesSet = "27896-0",
    /**
     * Code: 27897-8
     */
    NeuromuscularElectrophysiologyStudiesSet = "27897-8",
    /**
     * Code: 27898-6
     */
    PathologyStudiesSet = "27898-6",
    /**
     * Code: 28570-0
     */
    ProviderUnspecifiedProcedureNote = "28570-0",
    /**
     * Code: 28619-5
     */
    OphthalmologyOptometryStudiesSet = "28619-5",
    /**
     * Code: 28634-4
     */
    MiscellaneousStudiesSet = "28634-4",
    /**
     * Code: 29749-9
     */
    DialysisRecords = "29749-9",
    /**
     * Code: 29750-7
     */
    NeonatalIntensiveCareRecords = "29750-7",
    /**
     * Code: 29751-5
     */
    CriticalCareRecords = "29751-5",
    /**
     * Code: 29752-3
     */
    PerioperativeRecords = "29752-3",
    /**
     * Code: 34109-9
     */
    EvaluationAndManagementNote = "34109-9",
    /**
     * Code: 34117-2
     */
    ProviderUnspecifiedHistoryAndPhysicalNote = "34117-2",
    /**
     * Code: 34121-4
     */
    InterventionalProcedureNote = "34121-4",
    /**
     * Code: 34122-2
     */
    PathologyProcedureNote = "34122-2",
    /**
     * Code: 34133-9
     */
    SummarizationOfEpisodeNote = "34133-9",
    /**
     * Code: 34140-4
     */
    TransferOfCareReferralNote = "34140-4",
    /**
     * Code: 34748-4
     */
    TelephoneEncounterNote = "34748-4",
    /**
     * Code: 34775-7
     */
    GeneralSurgeryPreOperativeEvaluationAndManagementNote = "34775-7",
    /**
     * Code: 47039-3
     */
    InpatientAdmissionHistoryAndPhysicalNote = "47039-3",
    /**
     * Code: 47042-7
     */
    CounselingNote = "47042-7",
    /**
     * Code: 47045-0
     */
    StudyReportDocument = "47045-0",
    /**
     * Code: 47046-8
     */
    SummaryOfDeath = "47046-8",
    /**
     * Code: 47049-2
     */
    NonPatientCommunication = "47049-2",
    /**
     * Code: 53576-5
     */
    PersonalHealthMonitoringReportDocument = "53576-5",
    /**
     * Code: 56445-0
     */
    MedicationSummaryDocument = "56445-0",
    /**
     * Code: 56447-6
     */
    PlanOfCareNote = "56447-6",
    /**
     * Code: 57016-8
     */
    PrivacyPolicyAcknowledgmentDocument = "57016-8",
    /**
     * Code: 57017-6
     */
    PrivacyPolicyOrganizationDocument = "57017-6",
    /**
     * Code: 57133-1
     */
    ReferralNote = "57133-1"
}
//# sourceMappingURL=DocumentClasscodesValueSet.d.ts.map