// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * This value set includes the FHIR resource types, along with some other important content class codes
 */
export const ConsentContentClassValueSet = {
  ConsentContentClassValueSet_CDADocuments: new Coding({
    code: "application/hl7-cda+xml",
    display: "CDA Documents",
    system: "urn:ietf:bcp:13"
  }),
  ConsentContentClassValueSet_LipidLabReport: new Coding({
    code: "http://hl7.org/fhir/StructureDefinition/lipidprofile",
    display: "Lipid Lab Report",
    system: "urn:ietf:rfc:3986"
  }),
  ConsentContentClassValueSet_ForDocumentsFollowingCCDA11ConstraintsUsingANonStructuredBody: new Coding({
    code: "urn:hl7-org:sdwg:ccda-nonXMLBody:1.1",
    display: "For documents following C-CDA 1.1 constraints using a non structured body.",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_ForDocumentsFollowingCCDA21ConstraintsUsingANonStructuredBody: new Coding({
    code: "urn:hl7-org:sdwg:ccda-nonXMLBody:2.1",
    display: "For documents following C-CDA 2.1 constraints using a non structured body.",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_ForDocumentsFollowingCCDA11ConstraintsUsingAStructuredBody: new Coding({
    code: "urn:hl7-org:sdwg:ccda-structuredBody:1.1",
    display: "For documents following C-CDA 1.1 constraints using a structured body.",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_ForDocumentsFollowingCCDA21ConstraintsUsingAStructuredBody: new Coding({
    code: "urn:hl7-org:sdwg:ccda-structuredBody:2.1",
    display: "For documents following C-CDA 2.1 constraints using a structured body.",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_CardiologyCRC: new Coding({
    code: "urn:ihe:card:CRC:2012",
    display: "Cardiology CRC",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_CardiologyEPRCIE: new Coding({
    code: "urn:ihe:card:EPRC-IE:2014",
    display: "Cardiology EPRC-IE",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_CardiacImagingReport: new Coding({
    code: "urn:ihe:card:imaging:2011",
    display: "Cardiac Imaging Report",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_DentalCDA: new Coding({
    code: "urn:ihe:dent:CDA:ImagingReportStructuredHeadings:2013",
    display: "Dental CDA",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_DentalPDF: new Coding({
    code: "urn:ihe:dent:PDF",
    display: "Dental PDF",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_DentalText: new Coding({
    code: "urn:ihe:dent:TEXT",
    display: "Dental Text",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AdvancedPatientPrivacyConsents: new Coding({
    code: "urn:ihe:iti:appc:2016:consent",
    display: "Advanced Patient Privacy Consents",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_BasicPatientPrivacyConsentsWithScannedDocument: new Coding({
    code: "urn:ihe:iti:bppc-sd:2007",
    display: "Basic Patient Privacy Consents with Scanned Document",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_BasicPatientPrivacyConsents: new Coding({
    code: "urn:ihe:iti:bppc:2007",
    display: "Basic Patient Privacy Consents",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_DSGDetachedDocument: new Coding({
    code: "urn:ihe:iti:dsg:detached:2014",
    display: "DSG Detached Document",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_DSGEnvelopingDocument: new Coding({
    code: "urn:ihe:iti:dsg:enveloping:2014",
    display: "DSG Enveloping Document",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_PDFEmbeddedInCDAPerXDSSDProfile: new Coding({
    code: "urn:ihe:iti:xds-sd:pdf:2008",
    display: "PDF embedded in CDA per XDS-SD profile",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_TextEmbeddedInCDAPerXDSSDProfile: new Coding({
    code: "urn:ihe:iti:xds-sd:text:2008",
    display: "Text embedded in CDA per XDS-SD profile",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_MimeTypeSufficient: new Coding({
    code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
    display: "mimeType Sufficient",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_XDWWorkflowDocument: new Coding({
    code: "urn:ihe:iti:xdw:2011:workflowDoc",
    display: "XDW Workflow Document",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_CDALaboratoryReport: new Coding({
    code: "urn:ihe:lab:xd-lab:2008",
    display: "CDA Laboratory Report",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AnatomicPathologyStructuredReportAll: new Coding({
    code: "urn:ihe:pat:apsr:all:2010",
    display: "Anatomic Pathology Structured Report All",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AnatomicPathologyStructuredReportCancerAll: new Coding({
    code: "urn:ihe:pat:apsr:cancer:all:2010",
    display: "Anatomic Pathology Structured Report Cancer All",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AnatomicPathologyStructuredReportCancerBreast: new Coding({
    code: "urn:ihe:pat:apsr:cancer:breast:2010",
    display: "Anatomic Pathology Structured Report Cancer Breast",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AnatomicPathologyStructuredReportCancerCervix: new Coding({
    code: "urn:ihe:pat:apsr:cancer:cervix:2010",
    display: "Anatomic Pathology Structured Report Cancer Cervix",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AnatomicPathologyStructuredReportCancerColon: new Coding({
    code: "urn:ihe:pat:apsr:cancer:colon:2010",
    display: "Anatomic Pathology Structured Report Cancer Colon",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AnatomicPathologyStructuredReportCancerEndometrium: new Coding({
    code: "urn:ihe:pat:apsr:cancer:endometrium:2010",
    display: "Anatomic Pathology Structured Report Cancer Endometrium",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AnatomicPathologyStructuredReportCancerEsophagus: new Coding({
    code: "urn:ihe:pat:apsr:cancer:esophagus:2010",
    display: "Anatomic Pathology Structured Report Cancer Esophagus",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AnatomicPathologyStructuredReportCancerKidney: new Coding({
    code: "urn:ihe:pat:apsr:cancer:kidney:2010",
    display: "Anatomic Pathology Structured Report Cancer Kidney",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AnatomicPathologyStructuredReportCancerLarynx: new Coding({
    code: "urn:ihe:pat:apsr:cancer:larynx:2010",
    display: "Anatomic Pathology Structured Report Cancer Larynx",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AnatomicPathologyStructuredReportCancerLipOralCavity: new Coding({
    code: "urn:ihe:pat:apsr:cancer:lip_oral_cavity:2010",
    display: "Anatomic Pathology Structured Report Cancer Lip Oral Cavity",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AnatomicPathologyStructuredReportCancerLiver: new Coding({
    code: "urn:ihe:pat:apsr:cancer:liver:2010",
    display: "Anatomic Pathology Structured Report Cancer Liver",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AnatomicPathologyStructuredReportCancerLung: new Coding({
    code: "urn:ihe:pat:apsr:cancer:lung:2010",
    display: "Anatomic Pathology Structured Report Cancer Lung",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AnatomicPathologyStructuredReportCancerOvary: new Coding({
    code: "urn:ihe:pat:apsr:cancer:ovary:2010",
    display: "Anatomic Pathology Structured Report Cancer Ovary",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AnatomicPathologyStructuredReportCancerPancreas: new Coding({
    code: "urn:ihe:pat:apsr:cancer:pancreas:2010",
    display: "Anatomic Pathology Structured Report Cancer Pancreas",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AnatomicPathologyStructuredReportCancerPharynx: new Coding({
    code: "urn:ihe:pat:apsr:cancer:pharynx:2010",
    display: "Anatomic Pathology Structured Report Cancer Pharynx",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AnatomicPathologyStructuredReportCancerProstate: new Coding({
    code: "urn:ihe:pat:apsr:cancer:prostate:2010",
    display: "Anatomic Pathology Structured Report Cancer Prostate",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AnatomicPathologyStructuredReportCancerSalivaryGland: new Coding({
    code: "urn:ihe:pat:apsr:cancer:salivary_gland:2010",
    display: "Anatomic Pathology Structured Report Cancer Salivary Gland",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AnatomicPathologyStructuredReportCancerSkin: new Coding({
    code: "urn:ihe:pat:apsr:cancer:skin:2010",
    display: "Anatomic Pathology Structured Report Cancer Skin",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AnatomicPathologyStructuredReportCancerStomach: new Coding({
    code: "urn:ihe:pat:apsr:cancer:stomach:2010",
    display: "Anatomic Pathology Structured Report Cancer Stomach",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AnatomicPathologyStructuredReportCancerTestis: new Coding({
    code: "urn:ihe:pat:apsr:cancer:testis:2010",
    display: "Anatomic Pathology Structured Report Cancer Testis",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AnatomicPathologyStructuredReportCancerThyroid: new Coding({
    code: "urn:ihe:pat:apsr:cancer:thyroid:2010",
    display: "Anatomic Pathology Structured Report Cancer Thyroid",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AnatomicPathologyStructuredReportCancerUrinaryBladder: new Coding({
    code: "urn:ihe:pat:apsr:cancer:urinary_bladder:2010",
    display: "Anatomic Pathology Structured Report Cancer Urinary Bladder",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AntepartumRecordAPREducation: new Coding({
    code: "urn:ihe:pcc:apr:edu:2008",
    display: "Antepartum Record (APR) - Education",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AntepartumRecordAPRHistoryAndPhysical: new Coding({
    code: "urn:ihe:pcc:apr:handp:2008",
    display: "Antepartum Record (APR) - History and Physical",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_AntepartumRecordAPRLaboratory: new Coding({
    code: "urn:ihe:pcc:apr:lab:2008",
    display: "Antepartum Record (APR) - Laboratory",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_IHEAntepartumSummary: new Coding({
    code: "urn:ihe:pcc:aps:2007",
    display: "IHE Antepartum Summary",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_CareManagementCM: new Coding({
    code: "urn:ihe:pcc:cm:2008",
    display: "Care Management (CM)",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_CancerRegistryContentCRC: new Coding({
    code: "urn:ihe:pcc:crc:2008",
    display: "Cancer Registry Content (CRC)",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_PCCCTN: new Coding({
    code: "urn:ihe:pcc:ctn:2007",
    display: "PCC CTN",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_EmergencyDepartmentEncounterSummaryEDES: new Coding({
    code: "urn:ihe:pcc:edes:2007",
    display: "Emergency Department Encounter Summary (EDES)",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_PCCEDPN: new Coding({
    code: "urn:ihe:pcc:edpn:2007",
    display: "PCC EDPN",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_EmergencyDepartmentReferralEDR: new Coding({
    code: "urn:ihe:pcc:edr:2007",
    display: "Emergency Department Referral (EDR)",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_PCCETS: new Coding({
    code: "urn:ihe:pcc:ets:2011",
    display: "PCC ETS",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_PCCHP: new Coding({
    code: "urn:ihe:pcc:hp:2008",
    display: "PCC HP",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_ImmunizationContentIC: new Coding({
    code: "urn:ihe:pcc:ic:2008",
    display: "Immunization Content (IC)",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_PCCITS: new Coding({
    code: "urn:ihe:pcc:its:2011",
    display: "PCC ITS",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_PCCLDHP: new Coding({
    code: "urn:ihe:pcc:ldhp:2009",
    display: "PCC LDHP",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_PCCLDS: new Coding({
    code: "urn:ihe:pcc:lds:2009",
    display: "PCC LDS",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_PCCMDS: new Coding({
    code: "urn:ihe:pcc:mds:2009",
    display: "PCC MDS",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_PCCNDS: new Coding({
    code: "urn:ihe:pcc:nds:2010",
    display: "PCC NDS",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_PCCNN: new Coding({
    code: "urn:ihe:pcc:nn:2007",
    display: "PCC NN",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_PCCPPVS: new Coding({
    code: "urn:ihe:pcc:ppvs:2010",
    display: "PCC PPVS",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_RoutineInterfacilityPatientTransportRIPT: new Coding({
    code: "urn:ihe:pcc:ript:2017",
    display: "Routine Interfacility Patient Transport (RIPT)",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_PCCTN: new Coding({
    code: "urn:ihe:pcc:tn:2007",
    display: "PCC TN",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_PCCTRS: new Coding({
    code: "urn:ihe:pcc:trs:2011",
    display: "PCC TRS",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_XDSMedicalSummaries: new Coding({
    code: "urn:ihe:pcc:xds-ms:2007",
    display: "XDS Medical Summaries",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_PersonalHealthRecordsAlsoKnownAsHL7CCDAndHITSPC32: new Coding({
    code: "urn:ihe:pcc:xphr:2007",
    display: "Personal Health Records. Also known as HL7 CCD and HITSP C32",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_PharmacyDIS: new Coding({
    code: "urn:ihe:pharm:dis:2010",
    display: "Pharmacy DIS",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_PharmacyPADV: new Coding({
    code: "urn:ihe:pharm:padv:2010",
    display: "Pharmacy PADV",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_PharmacyPML: new Coding({
    code: "urn:ihe:pharm:pml:2013",
    display: "Pharmacy PML",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_PharmacyPre: new Coding({
    code: "urn:ihe:pharm:pre:2010",
    display: "Pharmacy Pre",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_RadiologyXDSIStructuredCDA: new Coding({
    code: "urn:ihe:rad:CDA:ImagingReportStructuredHeadings:2013",
    display: "Radiology XDS-I Structured CDA",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_RadiologyXDSIPDF: new Coding({
    code: "urn:ihe:rad:PDF",
    display: "Radiology XDS-I PDF",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
  ConsentContentClassValueSet_RadiologyXDSIText: new Coding({
    code: "urn:ihe:rad:TEXT",
    display: "Radiology XDS-I Text",
    system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem"
  }),
};
