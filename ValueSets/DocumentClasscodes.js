/**
 * This is the code specifying the high-level kind of document (e.g. Prescription, Discharge Summary, Report, etc.). Note: Class code for documents comes from LOINC, and is based upon one of the following:The type of service described by the document. It is described at a very high level in Section 7.3 of the LOINC Manual. The type study performed. It was determined by identifying modalities for study reports. The section of the chart where the document is placed. It was determined from the SETs created for Claims Attachment requests.
 */
export var DocumentClasscodes = {
    DocumentClasscodes_RadiologyStudiesSet: {
        code: "18726-0",
        display: "Radiology studies (set)",
        system: "http://loinc.org"
    },
    DocumentClasscodes_LaboratoryStudiesSet: {
        code: "26436-6",
        display: "Laboratory Studies (set)",
        system: "http://loinc.org"
    },
    DocumentClasscodes_CardiologyStudiesSet: {
        code: "26441-6",
        display: "Cardiology studies (set)",
        system: "http://loinc.org"
    },
    DocumentClasscodes_ObstetricalStudiesSet: {
        code: "26442-4",
        display: "Obstetrical studies (set)",
        system: "http://loinc.org"
    },
    DocumentClasscodes_GastroenterologyEndoscopyStudiesSet: {
        code: "27895-2",
        display: "Gastroenterology endoscopy studies (set)",
        system: "http://loinc.org"
    },
    DocumentClasscodes_PulmonaryStudiesSet: {
        code: "27896-0",
        display: "Pulmonary studies (set)",
        system: "http://loinc.org"
    },
    DocumentClasscodes_NeuromuscularElectrophysiologyStudiesSet: {
        code: "27897-8",
        display: "Neuromuscular electrophysiology studies (set)",
        system: "http://loinc.org"
    },
    DocumentClasscodes_PathologyStudiesSet: {
        code: "27898-6",
        display: "Pathology studies (set)",
        system: "http://loinc.org"
    },
    DocumentClasscodes_OphthalmologyOptometryStudiesSet: {
        code: "28619-5",
        display: "Ophthalmology/optometry studies (set)",
        system: "http://loinc.org"
    },
    DocumentClasscodes_MiscellaneousStudiesSet: {
        code: "28634-4",
        display: "Miscellaneous studies (set)",
        system: "http://loinc.org"
    },
    DocumentClasscodes_TransferOfCareReferralNote: {
        code: "34140-4",
        display: "Transfer of care referral note",
        system: "http://loinc.org"
    },
    DocumentClasscodes_GeneralSurgeryPreOperativeEvaluationAndManagementNote: {
        code: "34775-7",
        display: "General surgery Pre-operative evaluation and management note",
        system: "http://loinc.org"
    },
    DocumentClasscodes_NonPatientCommunication: {
        code: "47049-2",
        display: "Non-patient Communication",
        system: "http://loinc.org"
    }
};
