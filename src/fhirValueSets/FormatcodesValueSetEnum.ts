// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/formatcodes|4.0.1

/**
 * The value set is defined to be the set of format codes defined by the IHE Technical Framework, and also including additional format codes defined by the    HL7. The value set is listed in HITSP C80 Table 2-153 Format Code Value Set Definition,    with additions published later by IHE as published    at http://wiki.ihe.net/index.php?title=IHE_Format_Codes   and with additions published later by HL7 as published at https://confluence.hl7.org/display/SD/Format+Codes+for+IHE+XDS.   This is the code specifying the technical format of the document. Along with the typeCode,    it should provide sufficient information to allow any potential document consumer to know    if it will be able to process the document. The code shall be sufficiently specific to    ensure processing/display by identifying a document encoding, structure and template. The actual list of codes here is incomplete
 */
export enum FormatcodesValueSetEnum {
  /**
   * Code: urn:hl7-org:sdwg:ccda-nonXMLBody:1.1
   */
  ForDocumentsFollowingCCDA11ConstraintsUsingANonStructuredBody = "urn:hl7-org:sdwg:ccda-nonXMLBody:1.1",
  /**
   * Code: urn:hl7-org:sdwg:ccda-nonXMLBody:2.1
   */
  ForDocumentsFollowingCCDA21ConstraintsUsingANonStructuredBody = "urn:hl7-org:sdwg:ccda-nonXMLBody:2.1",
  /**
   * Code: urn:hl7-org:sdwg:ccda-structuredBody:1.1
   */
  ForDocumentsFollowingCCDA11ConstraintsUsingAStructuredBody = "urn:hl7-org:sdwg:ccda-structuredBody:1.1",
  /**
   * Code: urn:hl7-org:sdwg:ccda-structuredBody:2.1
   */
  ForDocumentsFollowingCCDA21ConstraintsUsingAStructuredBody = "urn:hl7-org:sdwg:ccda-structuredBody:2.1",
  /**
   * Code: urn:ihe:card:CRC:2012
   */
  CardiologyCRC = "urn:ihe:card:CRC:2012",
  /**
   * Code: urn:ihe:card:EPRC-IE:2014
   */
  CardiologyEPRCIE = "urn:ihe:card:EPRC-IE:2014",
  /**
   * Code: urn:ihe:card:imaging:2011
   */
  CardiacImagingReport = "urn:ihe:card:imaging:2011",
  /**
   * Code: urn:ihe:dent:CDA:ImagingReportStructuredHeadings:2013
   */
  DentalCDA = "urn:ihe:dent:CDA:ImagingReportStructuredHeadings:2013",
  /**
   * Code: urn:ihe:dent:PDF
   */
  DentalPDF = "urn:ihe:dent:PDF",
  /**
   * Code: urn:ihe:dent:TEXT
   */
  DentalText = "urn:ihe:dent:TEXT",
  /**
   * Code: urn:ihe:iti:appc:2016:consent
   */
  AdvancedPatientPrivacyConsents = "urn:ihe:iti:appc:2016:consent",
  /**
   * Code: urn:ihe:iti:bppc-sd:2007
   */
  BasicPatientPrivacyConsentsWithScannedDocument = "urn:ihe:iti:bppc-sd:2007",
  /**
   * Code: urn:ihe:iti:bppc:2007
   */
  BasicPatientPrivacyConsents = "urn:ihe:iti:bppc:2007",
  /**
   * Code: urn:ihe:iti:dsg:detached:2014
   */
  DSGDetachedDocument = "urn:ihe:iti:dsg:detached:2014",
  /**
   * Code: urn:ihe:iti:dsg:enveloping:2014
   */
  DSGEnvelopingDocument = "urn:ihe:iti:dsg:enveloping:2014",
  /**
   * Code: urn:ihe:iti:xds-sd:pdf:2008
   */
  PDFEmbeddedInCDAPerXDSSDProfile = "urn:ihe:iti:xds-sd:pdf:2008",
  /**
   * Code: urn:ihe:iti:xds-sd:text:2008
   */
  TextEmbeddedInCDAPerXDSSDProfile = "urn:ihe:iti:xds-sd:text:2008",
  /**
   * Code: urn:ihe:iti:xds:2017:mimeTypeSufficient
   */
  MimeTypeSufficient = "urn:ihe:iti:xds:2017:mimeTypeSufficient",
  /**
   * Code: urn:ihe:iti:xdw:2011:workflowDoc
   */
  XDWWorkflowDocument = "urn:ihe:iti:xdw:2011:workflowDoc",
  /**
   * Code: urn:ihe:lab:xd-lab:2008
   */
  CDALaboratoryReport = "urn:ihe:lab:xd-lab:2008",
  /**
   * Code: urn:ihe:pat:apsr:all:2010
   */
  AnatomicPathologyStructuredReportAll = "urn:ihe:pat:apsr:all:2010",
  /**
   * Code: urn:ihe:pat:apsr:cancer:all:2010
   */
  AnatomicPathologyStructuredReportCancerAll = "urn:ihe:pat:apsr:cancer:all:2010",
  /**
   * Code: urn:ihe:pat:apsr:cancer:breast:2010
   */
  AnatomicPathologyStructuredReportCancerBreast = "urn:ihe:pat:apsr:cancer:breast:2010",
  /**
   * Code: urn:ihe:pat:apsr:cancer:cervix:2010
   */
  AnatomicPathologyStructuredReportCancerCervix = "urn:ihe:pat:apsr:cancer:cervix:2010",
  /**
   * Code: urn:ihe:pat:apsr:cancer:colon:2010
   */
  AnatomicPathologyStructuredReportCancerColon = "urn:ihe:pat:apsr:cancer:colon:2010",
  /**
   * Code: urn:ihe:pat:apsr:cancer:endometrium:2010
   */
  AnatomicPathologyStructuredReportCancerEndometrium = "urn:ihe:pat:apsr:cancer:endometrium:2010",
  /**
   * Code: urn:ihe:pat:apsr:cancer:esophagus:2010
   */
  AnatomicPathologyStructuredReportCancerEsophagus = "urn:ihe:pat:apsr:cancer:esophagus:2010",
  /**
   * Code: urn:ihe:pat:apsr:cancer:kidney:2010
   */
  AnatomicPathologyStructuredReportCancerKidney = "urn:ihe:pat:apsr:cancer:kidney:2010",
  /**
   * Code: urn:ihe:pat:apsr:cancer:larynx:2010
   */
  AnatomicPathologyStructuredReportCancerLarynx = "urn:ihe:pat:apsr:cancer:larynx:2010",
  /**
   * Code: urn:ihe:pat:apsr:cancer:lip_oral_cavity:2010
   */
  AnatomicPathologyStructuredReportCancerLipOralCavity = "urn:ihe:pat:apsr:cancer:lip_oral_cavity:2010",
  /**
   * Code: urn:ihe:pat:apsr:cancer:liver:2010
   */
  AnatomicPathologyStructuredReportCancerLiver = "urn:ihe:pat:apsr:cancer:liver:2010",
  /**
   * Code: urn:ihe:pat:apsr:cancer:lung:2010
   */
  AnatomicPathologyStructuredReportCancerLung = "urn:ihe:pat:apsr:cancer:lung:2010",
  /**
   * Code: urn:ihe:pat:apsr:cancer:ovary:2010
   */
  AnatomicPathologyStructuredReportCancerOvary = "urn:ihe:pat:apsr:cancer:ovary:2010",
  /**
   * Code: urn:ihe:pat:apsr:cancer:pancreas:2010
   */
  AnatomicPathologyStructuredReportCancerPancreas = "urn:ihe:pat:apsr:cancer:pancreas:2010",
  /**
   * Code: urn:ihe:pat:apsr:cancer:pharynx:2010
   */
  AnatomicPathologyStructuredReportCancerPharynx = "urn:ihe:pat:apsr:cancer:pharynx:2010",
  /**
   * Code: urn:ihe:pat:apsr:cancer:prostate:2010
   */
  AnatomicPathologyStructuredReportCancerProstate = "urn:ihe:pat:apsr:cancer:prostate:2010",
  /**
   * Code: urn:ihe:pat:apsr:cancer:salivary_gland:2010
   */
  AnatomicPathologyStructuredReportCancerSalivaryGland = "urn:ihe:pat:apsr:cancer:salivary_gland:2010",
  /**
   * Code: urn:ihe:pat:apsr:cancer:skin:2010
   */
  AnatomicPathologyStructuredReportCancerSkin = "urn:ihe:pat:apsr:cancer:skin:2010",
  /**
   * Code: urn:ihe:pat:apsr:cancer:stomach:2010
   */
  AnatomicPathologyStructuredReportCancerStomach = "urn:ihe:pat:apsr:cancer:stomach:2010",
  /**
   * Code: urn:ihe:pat:apsr:cancer:testis:2010
   */
  AnatomicPathologyStructuredReportCancerTestis = "urn:ihe:pat:apsr:cancer:testis:2010",
  /**
   * Code: urn:ihe:pat:apsr:cancer:thyroid:2010
   */
  AnatomicPathologyStructuredReportCancerThyroid = "urn:ihe:pat:apsr:cancer:thyroid:2010",
  /**
   * Code: urn:ihe:pat:apsr:cancer:urinary_bladder:2010
   */
  AnatomicPathologyStructuredReportCancerUrinaryBladder = "urn:ihe:pat:apsr:cancer:urinary_bladder:2010",
  /**
   * Code: urn:ihe:pcc:apr:edu:2008
   */
  AntepartumRecordAPREducation = "urn:ihe:pcc:apr:edu:2008",
  /**
   * Code: urn:ihe:pcc:apr:handp:2008
   */
  AntepartumRecordAPRHistoryAndPhysical = "urn:ihe:pcc:apr:handp:2008",
  /**
   * Code: urn:ihe:pcc:apr:lab:2008
   */
  AntepartumRecordAPRLaboratory = "urn:ihe:pcc:apr:lab:2008",
  /**
   * Code: urn:ihe:pcc:aps:2007
   */
  IHEAntepartumSummary = "urn:ihe:pcc:aps:2007",
  /**
   * Code: urn:ihe:pcc:cm:2008
   */
  CareManagementCM = "urn:ihe:pcc:cm:2008",
  /**
   * Code: urn:ihe:pcc:crc:2008
   */
  CancerRegistryContentCRC = "urn:ihe:pcc:crc:2008",
  /**
   * Code: urn:ihe:pcc:ctn:2007
   */
  PCCCTN = "urn:ihe:pcc:ctn:2007",
  /**
   * Code: urn:ihe:pcc:edes:2007
   */
  EmergencyDepartmentEncounterSummaryEDES = "urn:ihe:pcc:edes:2007",
  /**
   * Code: urn:ihe:pcc:edpn:2007
   */
  PCCEDPN = "urn:ihe:pcc:edpn:2007",
  /**
   * Code: urn:ihe:pcc:edr:2007
   */
  EmergencyDepartmentReferralEDR = "urn:ihe:pcc:edr:2007",
  /**
   * Code: urn:ihe:pcc:ets:2011
   */
  PCCETS = "urn:ihe:pcc:ets:2011",
  /**
   * Code: urn:ihe:pcc:hp:2008
   */
  PCCHP = "urn:ihe:pcc:hp:2008",
  /**
   * Code: urn:ihe:pcc:ic:2008
   */
  ImmunizationContentIC = "urn:ihe:pcc:ic:2008",
  /**
   * Code: urn:ihe:pcc:its:2011
   */
  PCCITS = "urn:ihe:pcc:its:2011",
  /**
   * Code: urn:ihe:pcc:ldhp:2009
   */
  PCCLDHP = "urn:ihe:pcc:ldhp:2009",
  /**
   * Code: urn:ihe:pcc:lds:2009
   */
  PCCLDS = "urn:ihe:pcc:lds:2009",
  /**
   * Code: urn:ihe:pcc:mds:2009
   */
  PCCMDS = "urn:ihe:pcc:mds:2009",
  /**
   * Code: urn:ihe:pcc:nds:2010
   */
  PCCNDS = "urn:ihe:pcc:nds:2010",
  /**
   * Code: urn:ihe:pcc:nn:2007
   */
  PCCNN = "urn:ihe:pcc:nn:2007",
  /**
   * Code: urn:ihe:pcc:ppvs:2010
   */
  PCCPPVS = "urn:ihe:pcc:ppvs:2010",
  /**
   * Code: urn:ihe:pcc:ript:2017
   */
  RoutineInterfacilityPatientTransportRIPT = "urn:ihe:pcc:ript:2017",
  /**
   * Code: urn:ihe:pcc:tn:2007
   */
  PCCTN = "urn:ihe:pcc:tn:2007",
  /**
   * Code: urn:ihe:pcc:trs:2011
   */
  PCCTRS = "urn:ihe:pcc:trs:2011",
  /**
   * Code: urn:ihe:pcc:xds-ms:2007
   */
  XDSMedicalSummaries = "urn:ihe:pcc:xds-ms:2007",
  /**
   * Code: urn:ihe:pcc:xphr:2007
   */
  PersonalHealthRecordsAlsoKnownAsHL7CCDAndHITSPC32 = "urn:ihe:pcc:xphr:2007",
  /**
   * Code: urn:ihe:pharm:dis:2010
   */
  PharmacyDIS = "urn:ihe:pharm:dis:2010",
  /**
   * Code: urn:ihe:pharm:padv:2010
   */
  PharmacyPADV = "urn:ihe:pharm:padv:2010",
  /**
   * Code: urn:ihe:pharm:pml:2013
   */
  PharmacyPML = "urn:ihe:pharm:pml:2013",
  /**
   * Code: urn:ihe:pharm:pre:2010
   */
  PharmacyPre = "urn:ihe:pharm:pre:2010",
  /**
   * Code: urn:ihe:rad:CDA:ImagingReportStructuredHeadings:2013
   */
  RadiologyXDSIStructuredCDA = "urn:ihe:rad:CDA:ImagingReportStructuredHeadings:2013",
  /**
   * Code: urn:ihe:rad:PDF
   */
  RadiologyXDSIPDF = "urn:ihe:rad:PDF",
  /**
   * Code: urn:ihe:rad:TEXT
   */
  RadiologyXDSIText = "urn:ihe:rad:TEXT",
}
