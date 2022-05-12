// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://terminology.hl7.org/ValueSet/v3-PurposeOfUse|2014-03-26
/**
 *  Supports communication of purpose of use at a general level.
 */
export var V3PurposeOfUseValueSetEnum;
(function (V3PurposeOfUseValueSetEnum) {
    /**
     * BIORCH: To perform one or more operations on information for conducting scientific investigations to obtain health care knowledge. Use of the data must be related to specified biomedical basic or applied research.  For example, research on rare plants to determine whether biologic properties may be useful for pharmaceutical development. May be used in combination with clinical trial and other healthcare research purposes of use.
     */
    V3PurposeOfUseValueSetEnum["BiomedicalResearch"] = "BIORCH";
    /**
     * BTG: To perform policy override operations on information for provision of immediately needed health care for an emergent condition affecting potential harm, death or patient safety by end users who are not provisioned for this purpose of use.  Includes override of organizational provisioning policies and may include override of subject of care consent directive restricting access.
     *
     *
     *                            Map: Partially Maps to ISO 14265 Classification Term "Emergency care provision to an individual subject of care" described as "To inform persons needing to provide health care services to the subject of care urgently, possibly needing to over-ride the  policies and consents pertaining to Purpose 1 above." Purpose 1 is equivalent to HL7 treatment purpose of use: "Clinical care provision to an individual subject of care" described as "To inform persons or processes responsible for providing health care services to the subject of care."
     * The ISO description conflates both of the proposed specializations of HL7 ETREAT: break the glass and the typically broader access to health information normally available to providers who are provisioned for emergency workflows on a regular basis, e.g., Emergency Room providers. Examples of greater access than is normally accessible by providers based on the need to know are access to sensitive information for which access typically requires a patient's consent.  This is not an override of a patient's dissent to disclose sensitive information in cases where the applicable policy waives the need for that consent to access this information. In US, Title 38 Section 7332 and 42 CFR Part 2 both permit emergency access without the need to override a patient's consent directive; rather, this access is a limitation to the patient's right to dissent from disclosure.
     */
    V3PurposeOfUseValueSetEnum["BreakTheGlass"] = "BTG";
    /**
     * CAREMGT: To perform analytics, evaluation and other secondary uses of treatment and healthcare related information to manage the quality, efficacy, patient safety, population health, and cost effectiveness of healthcare delivery. Explicitly excludes the use of information to organize the delivery of health care for care coordination and case management, or to provide healthcare treatment.
     *
     *
     *                            Usage Note: The concept of care management is narrower than the list of activities related to more general organizational objectives such as provider profiling, education of healthcare and non-healthcare professionals; insurance underwriting, premium rating, reinsurance; organizational legal, medical review, auditing, compliance and fraud and abuse detection; business planning, development, and restructuring; fund-raising; and customer service.
     *
     *
     *                            Map: Maps to ISO 14265 Classification Term "Health service management and quality assurance" described as "To inform persons or processes responsible for determining the availability, quality, safety, equity and cost-effectiveness of health care services."
     *
     *                         There is a semantic gap in concepts.  This classification term  is described as activities, i.e., "to inform persons" or "to inform processes" rather than the rationale for performing actions/operations on information related to the activity.
     */
    V3PurposeOfUseValueSetEnum["CareManagement"] = "CAREMGT";
    /**
     * CLINTRCH: To perform one or more operations on information for conducting scientific investigations in accordance with clinical trial protocols to obtain health care knowledge.
     */
    V3PurposeOfUseValueSetEnum["ClinicalTrialResearch"] = "CLINTRCH";
    /**
     * CLINTRCHNPC: To perform one or more operations on information for conducting scientific investigations in accordance with clinical trial protocols to obtain health care knowledge without provision of patient care. May be post-coordinated or used with other purposes of use such as disease, discipline, specialty, population origins or ancestry, translational healthcare research. For example, a clinical trial conducted on laboratory specimens collected from a specified patient population.
     */
    V3PurposeOfUseValueSetEnum["ClinicalTrialResearchWithoutPatientCare"] = "CLINTRCHNPC";
    /**
     * CLINTRCHPC: To perform one or more operations on information for conducting scientific investigations with patient care in accordance with clinical trial protocols to obtain health care knowledge. May be post-coordinated or used with other purposes of use such as disease, discipline, specialty, population origins or ancestry, translational healthcare research. For example, an "off-label" drug used for cancer therapy administer to a specified patient population.
     */
    V3PurposeOfUseValueSetEnum["ClinicalTrialResearchWithPatientCare"] = "CLINTRCHPC";
    /**
     * CLINTRL: To perform health care as part of the clinical trial protocol.
     */
    V3PurposeOfUseValueSetEnum["ClinicalTrial"] = "CLINTRL";
    /**
     * CLMATTCH: To perform one or more operations on information for provision of additional clinical evidence in support of a request for coverage or payment for health services.
     */
    V3PurposeOfUseValueSetEnum["ClaimAttachment"] = "CLMATTCH";
    /**
     * COC: To perform one or more actions on information in order to organize the provision and case management of an individualâ€™s healthcare, including: Monitoring a person's goals, needs, and preferences; acting as the communication link between two or more participants concerned with a person's health and wellness; organizing and facilitating care activities and promoting self-management by advocating for, empowering, and educating a person; and ensuring safe, appropriate, non-duplicative, and effective integrated care.
     *
     *
     *                            Usage Note: Use when describing these functions: 1. Monitoring a personâ€™s goals, needs, and preferences.   2. Acting as the communication link between two or more participants concerned with a person's health and wellness.  3. Organizing and facilitating care activities and promoting self-management by advocating for, empowering, and educating a person.  4. Ensuring safe, appropriate, non-duplicative, and effective integrated care.
     *
     *                         The goal is to clearly differentiate this type of coordination of care from HIPAA Operations by specifying that these actions on information are undertaken in the provision of healthcare treatment.
     *
     *                         For similar uses of this concept, see SAMHSA Confidentiality of Substance Use Disorder Patient Records Supplemental notice of proposed rulemaking, which differentiates concepts of care coordination and case management for the provision of treatment as specifically distinct from activities related to health care delivery management and the operations of organizational entities involved in the delivery of healthcare.
     *
     *
     *                            Map: Maps to ISO 14265 Classification Terms: "Support of care activities within the provider organisation for an individual subject of care" described as "To inform persons or processes enabling others to provide health care services to the subject of care."  "Subject of Care Uses" described as "To inform the subject of care in support of his or her own interests."
     */
    V3PurposeOfUseValueSetEnum["CoordinationOfCare"] = "COC";
    /**
     * COVAUTH: To perform one or more operations on information for conducting prior authorization or predetermination of coverage for services.
     */
    V3PurposeOfUseValueSetEnum["CoverageAuthorization"] = "COVAUTH";
    /**
     * COVERAGE: To perform one or more operations on information for conducting activities related to coverage under a program or policy.
     */
    V3PurposeOfUseValueSetEnum["CoverageUnderPolicyOrProgram"] = "COVERAGE";
    /**
     * DISASTER: To perform one or more operations on information used for provision of immediately needed health care to a population of living subjects located in a disaster zone.
     */
    V3PurposeOfUseValueSetEnum["Disaster"] = "DISASTER";
    /**
     * DONAT: To perform one or more operations on information used for cadaveric organ, eye or tissue donation.
     */
    V3PurposeOfUseValueSetEnum["Donation"] = "DONAT";
    /**
     * DSRCH: To perform one or more operations on information for conducting scientific investigations to obtain health care knowledge. Use of the data must be related to specified conditions, diagnosis, or disease healthcare research.  For example, conducting cancer research by testing reaction of tumor cells to certain biologics. May be used in combination with clinical trial and other healthcare research purposes of use.
     */
    V3PurposeOfUseValueSetEnum["DiseaseSpecificHealthcareResearch"] = "DSRCH";
    /**
     * ELIGDTRM: To perform one or more operations on information used for conducting eligibility determination for coverage in a program or policy.  May entail review of financial status or disability assessment.
     */
    V3PurposeOfUseValueSetEnum["EligibilityDetermination"] = "ELIGDTRM";
    /**
     * ELIGVER: To perform one or more operations on information used for conducting eligibility verification of coverage in a program or policy.  May entail provider contacting coverage source (e.g., government health program such as workers compensation or health plan) for confirmation of enrollment, eligibility for specific services, and any applicable copays.
     */
    V3PurposeOfUseValueSetEnum["EligibilityVerification"] = "ELIGVER";
    /**
     * ENROLLM: To perform one or more operations on information used for enrolling a covered party in a program or policy.  May entail recording of covered party's and any dependent's demographic information and benefit choices.
     */
    V3PurposeOfUseValueSetEnum["Enrollment"] = "ENROLLM";
    /**
     * ERTREAT: To perform one or more operations on information for provision of immediately needed health care for an emergent condition in an emergency room or similar emergent care context by end users provisioned for this purpose, which does not constitute as policy override such as in a "Break the Glass" purpose of use.
     *
     *                         Map:Partially Maps to ISO 14265 Classification Term "Emergency care provision to an individual subject of care" described as "To inform persons needing to provide health care services to the subject of care urgently, possibly needing to over-ride the  policies and consents pertaining to Purpose 1 above." Purpose 1 is equivalent to HL7 treatment purpose of use: "Clinical care provision to an individual subject of care" described as "To inform persons or processes responsible for providing health care services to the subject of care."
     *
     *                         The ISO description conflates both of the proposed specializations of HL7 ETREAT: break the glass and the typically broader access to health information normally available to providers who are provisioned for emergency workflows on a regular basis, e.g., Emergency Room providers. Examples of greater access than is normally accessible by providers based on the need to know are access to sensitive information for which access typically requires a patient's consent.  This is not an override of a patient's dissent to disclose sensitive information in cases where the applicable policy waives the need for that consent to access this information. In US, Title 38 Section 7332 and 42 CFR Part 2 both permit emergency access without the need to override a patient's consent directive; rather, this access is a limitation to the patient's right to dissent from disclosure.
     *
     *                         There is a semantic gap in concepts.  This classification term is described as activities â€œto inform personsâ€? rather than the rationale for performing actions/operations on information related to the activity.
     */
    V3PurposeOfUseValueSetEnum["EmergencyRoomTreatment"] = "ERTREAT";
    /**
     * ETREAT: To perform one or more operations on information for provision of immediately needed health care for an emergent condition.
     */
    V3PurposeOfUseValueSetEnum["EmergencyTreatment"] = "ETREAT";
    /**
     * FAMRQT: To perform one or more operations on information in response to a request by a family member authorized by the patient.
     */
    V3PurposeOfUseValueSetEnum["FamilyRequested"] = "FAMRQT";
    /**
     * FRAUD: To perform one or more operations on information used for fraud detection and prevention processes.
     */
    V3PurposeOfUseValueSetEnum["Fraud"] = "FRAUD";
    /**
     * GOV: To perform one or more operations on information used within government processes.
     */
    V3PurposeOfUseValueSetEnum["Government"] = "GOV";
    /**
     * HACCRED: To perform one or more operations on information for conducting activities related to meeting accreditation criteria.
     */
    V3PurposeOfUseValueSetEnum["HealthAccreditation"] = "HACCRED";
    /**
     * HCOMPL: To perform one or more operations on information used for conducting activities required to meet a mandate.
     */
    V3PurposeOfUseValueSetEnum["HealthCompliance"] = "HCOMPL";
    /**
     * HDECD: To perform one or more operations on information used for handling deceased patient matters.
     */
    V3PurposeOfUseValueSetEnum["Decedent"] = "HDECD";
    /**
     * HDIRECT: To perform one or more operation operations on information used to manage a patient directory.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            facility
     *                            enterprise
     *                            payer
     *                            health information exchange patient directory
     */
    V3PurposeOfUseValueSetEnum["Directory"] = "HDIRECT";
    /**
     * HDM: To perform one or more actions on information used for conducting administrative and contractual activities by or on behalf of organizational entities responsible for delivery of  an individual's benefits in a healthcare program, health plan or insurance.   Explicitly excludes the use of information to organize the delivery of health care for care coordination and case management, or to provide healthcare treatment.
     *
     *
     *                            Usage Note: Examples of activities conducted under this purpose of use: provider profiling, risk adjustment, underwriting, fraud and abuse, quality improvement population health and care management. Aligns with HIPAA Operation POU minus coordination of care or other treatment related activities. Similar to the description in SAMHSA Confidentiality of Substance Use Disorder Patient Records Supplemental notice of proposed rulemaking.
     *
     *
     *                            Map: Maps to ISO 14265 Classification Term  "Administration of care for an individual subject of care" described as "To inform persons or processes responsible for enabling the availability of resources or funding or permissions for providing health care services to the subject of care."
     *
     *                         However, this classification term is described as activities, i.e., "to inform persons" or "to inform processes" rather than the rationale for performing actions/operations on information related to the activity.
     */
    V3PurposeOfUseValueSetEnum["HealthcareDeliveryManagement"] = "HDM";
    /**
     * HLEGAL: To perform one or more operations on information for conducting activities required by legal proceeding.
     */
    V3PurposeOfUseValueSetEnum["Legal"] = "HLEGAL";
    /**
     * HMARKT: To perform one or more operations on information for marketing services and products related to health care.
     */
    V3PurposeOfUseValueSetEnum["HealthcareMarketing"] = "HMARKT";
    /**
     * HOPERAT: To perform one or more operations on information used for conducting administrative and contractual activities related to the provision of health care.
     */
    V3PurposeOfUseValueSetEnum["HealthcareOperations"] = "HOPERAT";
    /**
     * HOUTCOMS: To perform one or more operations on information used for assessing results and comparative effectiveness achieved by health care practices and interventions.
     */
    V3PurposeOfUseValueSetEnum["HealthOutcomeMeasure"] = "HOUTCOMS";
    /**
     * HPAYMT: To perform one or more operations on information for conducting financial or contractual activities related to payment for provision of health care.
     */
    V3PurposeOfUseValueSetEnum["HealthcarePayment"] = "HPAYMT";
    /**
     * HPRGRP: To perform one or more operations on information used for conducting activities to meet program accounting requirements.
     */
    V3PurposeOfUseValueSetEnum["HealthProgramReporting"] = "HPRGRP";
    /**
     * HQUALIMP: To perform one or more operations on information used for conducting administrative activities to improve health care quality.
     */
    V3PurposeOfUseValueSetEnum["HealthQualityImprovement"] = "HQUALIMP";
    /**
     * HRESCH: To perform one or more operations on information for conducting scientific investigations to obtain health care knowledge.  Use of the data iincludes basic and applied research such as biomedical, population origin or ancestry, translational research, and disease, discipline, specialty specific healthcare research and clinical trial research.
     */
    V3PurposeOfUseValueSetEnum["HealthcareResearch"] = "HRESCH";
    /**
     * HSYSADMIN: To perform one or more operations on information to administer the electronic systems used for the delivery of health care.
     */
    V3PurposeOfUseValueSetEnum["HealthSystemAdministration"] = "HSYSADMIN";
    /**
     * HTEST: To perform one or more operations on information that is simulated or synthetic health data used for testing system capabilities outside of a production or operational system environment.
     *
     *
     *                            Usage Note: Data marked with a HTEST security label enables an access control system to permit interfacing systems or end users provisioned with a clearance, which includes a HTEST purpose of use attribute, to test, verify, or validate that a system or application will operate in production as intended based on design specifications.
     */
    V3PurposeOfUseValueSetEnum["TestHealthData"] = "HTEST";
    /**
     * LABELING: To perform one or more operations on information to assign, persist, and manage labels to healthcare data to characterize various aspects, such as its security classification, sensitivity, compartment, integrity, and provenance; applicable privacy, consent, security, provenance, and trust policies; and handling caveats such as purpose of use, obligations, and refrain policies.
     *
     *                         Label management includes classification of target data by constructing and binding of a label set per applicable policies, security policy information file semantics, and classification guides.  Label management also includes process and procedures for subsequent revision of a label for, e.g., reclassification, downgrading classification, and declassification.
     *
     *                         Label revisions may be triggered by, e.g., expiry of classification period; changes in applicable policy, e.g., revocation of a consent directive; or changes in the governing policy domain in which the data is relocated or a copy of the data is sent.  If a label is revised, an audit log should be kept and the provenance of the label changes should be tracked.
     */
    V3PurposeOfUseValueSetEnum["Labeling"] = "LABELING";
    /**
     * MEMADMIN: To perform one or more operations on information to administer health care coverage to an enrollee under a policy or program.
     */
    V3PurposeOfUseValueSetEnum["MemberAdministration"] = "MEMADMIN";
    /**
     * METAMGT: To perform one or more operations on information to assign, persist, and manage metadata to healthcare data to characterize various aspects used for its indexing, discovery, retrieval, and processing by systems, applications, and end users.  For example, master index identifier, media type, and location.
     */
    V3PurposeOfUseValueSetEnum["MetadataManagement"] = "METAMGT";
    /**
     * MILCDM: To perform one or more operations on information for conducting activities required by military processes, procedures, policies, or law.
     */
    V3PurposeOfUseValueSetEnum["MilitaryCommand"] = "MILCDM";
    /**
     * MILDCRG: To perform one or more operations on information for the process of releasing military personnel from their service obligations, which may include determining service merit, discharge benefits, and disability assessment.
     */
    V3PurposeOfUseValueSetEnum["MilitaryDischarge"] = "MILDCRG";
    /**
     * PATADMIN: To perform one or more operations on information used for operational activities conducted to administer the delivery of health care to a patient.
     */
    V3PurposeOfUseValueSetEnum["PatientAdministration"] = "PATADMIN";
    /**
     * PATRQT: To perform one or more operations on information in response to a patient's request.
     */
    V3PurposeOfUseValueSetEnum["PatientRequested"] = "PATRQT";
    /**
     * PATSFTY: To perform one or more operations on information in processes related to ensuring the safety of health care.
     */
    V3PurposeOfUseValueSetEnum["PatientSafety"] = "PATSFTY";
    /**
     * PERFMSR: To perform one or more operations on information used for monitoring performance of recommended health care practices and interventions.
     */
    V3PurposeOfUseValueSetEnum["PerformanceMeasure"] = "PERFMSR";
    /**
     * POARCH: To perform one or more operations on information, including genealogical pedigrees, historical records, surveys, family health data, health records, and genetic information, for conducting scientific investigations to obtain health care knowledge. Use of the data must be related to population origins and/or ancestry healthcare research.  For example, gathering genetic specimens from a specific population in order to determine the ancestry and population origins of that group. May be used in combination with clinical trial and other healthcare research purposes of use.
     */
    V3PurposeOfUseValueSetEnum["PopulationOriginsOrAncestryHealthcareResearch"] = "POARCH";
    /**
     * POPHLTH: To perform one or more operations on information for provision of health care to a population of living subjects, e.g., needle exchange program.
     */
    V3PurposeOfUseValueSetEnum["PopulationHealth"] = "POPHLTH";
    /**
     * PRECLINTRCH: To perform one or more operations on information in preparation for conducting scientific investigation to obtain health care knowledge, such as research on animals or review of patient health records, to determine the feasibility of a clinical trial study; assist with protocol design; or in preparation for institutional review board or ethics committee approval process.  May be post-coordinated or used with other purposes of use such as disease, discipline, specialty, population origins or ancestry, translational healthcare research.
     */
    V3PurposeOfUseValueSetEnum["PreclinicalTrialResearch"] = "PRECLINTRCH";
    /**
     * PUBHLTH: To perform one or more operations on information for conducting public health activities, such as the reporting of notifiable conditions.
     */
    V3PurposeOfUseValueSetEnum["PublicHealth"] = "PUBHLTH";
    /**
     * PurposeOfUse: Reason for performing one or more operations on information, which may be permitted by source system's security policy in accordance with one or more privacy policies and consent directives.
     *
     *
     *                            Usage Notes: The rationale or purpose for an act relating to the management of personal health information, such as collecting personal health information for research or public health purposes.
     */
    V3PurposeOfUseValueSetEnum["PurposeOfUse"] = "PurposeOfUse";
    /**
     * PWATRNY: To perform one or more operations on information in response to a request by a person appointed as the patient's legal representative.
     */
    V3PurposeOfUseValueSetEnum["PowerOfAttorney"] = "PWATRNY";
    /**
     * RECORDMGT: To perform one or more operations on information used within the health records management process.
     */
    V3PurposeOfUseValueSetEnum["RecordsManagement"] = "RECORDMGT";
    /**
     * REMITADV: To perform one or more operations on information about the amount remitted for a health care claim.
     */
    V3PurposeOfUseValueSetEnum["RemittanceAdvice"] = "REMITADV";
    /**
     * SUPNWK: To perform one or more operations on information in response to a request by a person authorized by the patient.
     */
    V3PurposeOfUseValueSetEnum["SupportNetwork"] = "SUPNWK";
    /**
     * SYSDEV: To perform one or more operations on information to design, develop, implement, test, or deploy a healthcare system or application.
     */
    V3PurposeOfUseValueSetEnum["SystemDevelopment"] = "SYSDEV";
    /**
     * THREAT: To perform one or more operations on information used to prevent injury or disease to living subjects who may be the target of violence.
     */
    V3PurposeOfUseValueSetEnum["Threat"] = "THREAT";
    /**
     * TRAIN: To perform one or more operations on information used in training and education.
     */
    V3PurposeOfUseValueSetEnum["Training"] = "TRAIN";
    /**
     * TRANSRCH: To perform one or more operations on information for conducting scientific investigations to obtain health care knowledge related to evidence based medicine during the course of providing healthcare treatment.  Sometimes referred to as "bench to bedside", which is the iterative feedback loop between healthcare research and clinical trials with input from information collected in the course of routine provision of healthcare. For example, by extending a patient encounter to conduct a survey related to a research topic such as attitudes about use of a wellness device that a patient agreed to use. May be used in combination with clinical trial and other healthcare research purposes of use.
     */
    V3PurposeOfUseValueSetEnum["TranslationalHealthcareResearch"] = "TRANSRCH";
    /**
     * TREAT: To perform one or more operations on information for provision of health care.
     */
    V3PurposeOfUseValueSetEnum["Treatment"] = "TREAT";
})(V3PurposeOfUseValueSetEnum || (V3PurposeOfUseValueSetEnum = {}));
//# sourceMappingURL=V3PurposeOfUseValueSetEnum.js.map