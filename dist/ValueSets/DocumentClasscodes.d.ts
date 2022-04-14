import { Coding } from '../strictmodels';
/**
 * This is the code specifying the high-level kind of document (e.g. Prescription, Discharge Summary, Report, etc.). Note: Class code for documents comes from LOINC, and is based upon one of the following:The type of service described by the document. It is described at a very high level in Section 7.3 of the LOINC Manual. The type study performed. It was determined by identifying modalities for study reports. The section of the chart where the document is placed. It was determined from the SETs created for Claims Attachment requests.
 */
export declare const DocumentClasscodes: {
    DocumentClasscodes_RadiologyStudiesSet: Coding;
    DocumentClasscodes_LaboratoryStudiesSet: Coding;
    DocumentClasscodes_CardiologyStudiesSet: Coding;
    DocumentClasscodes_ObstetricalStudiesSet: Coding;
    DocumentClasscodes_GastroenterologyEndoscopyStudiesSet: Coding;
    DocumentClasscodes_PulmonaryStudiesSet: Coding;
    DocumentClasscodes_NeuromuscularElectrophysiologyStudiesSet: Coding;
    DocumentClasscodes_PathologyStudiesSet: Coding;
    DocumentClasscodes_OphthalmologyOptometryStudiesSet: Coding;
    DocumentClasscodes_MiscellaneousStudiesSet: Coding;
    DocumentClasscodes_TransferOfCareReferralNote: Coding;
    DocumentClasscodes_GeneralSurgeryPreOperativeEvaluationAndManagementNote: Coding;
    DocumentClasscodes_NonPatientCommunication: Coding;
};
//# sourceMappingURL=DocumentClasscodes.d.ts.map