/**
 * This value set includes sample Consent Directive Type codes, including several consent directive related LOINC codes; HL7 VALUE SET: ActConsentType(2.16.840.1.113883.1.11.19897); examples of US realm consent directive legal descriptions and references to online and/or downloadable forms such as the SSA-827 Authorization to Disclose Information to the Social Security Administration; and other anticipated consent directives related to participation in a clinical trial, medical procedures, reproductive procedures; health care directive (Living Will); advance directive, do not resuscitate (DNR); Physician Orders for Life-Sustaining Treatment (POLST)
 */
export declare enum ConsentCategoryValueSetEnum {
    /**
     * Code: 57016-8
     */
    PrivacyPolicyAcknowledgementDocument = "57016-8",
    /**
     * Code: 57017-6
     */
    PrivacyPolicyOrganizationDocument = "57017-6",
    /**
     * Code: 59284-0
     */
    PatientConsent = "59284-0",
    /**
     * Code: 64292-6
     */
    ReleaseOfInformationConsent = "64292-6",
    /**
     * acd: Any instructions, written or given verbally by a patient to a health care provider in anticipation of potential need for medical treatment. [2005 Honor My Wishes]
     */
    AdvanceDirective = "acd",
    /**
     * dnr: A legal document, signed by both the patient and their provider, stating a desire not to have CPR initiated in case of a cardiac event. Note: This form was replaced in 2003 with the Physician Orders for Life-Sustaining Treatment [POLST].
     */
    DoNotResuscitate = "dnr",
    /**
     * emrgonly: Opt-in to disclosure of health information for emergency only consent directive. Comment: This general consent directive specifically limits disclosure of health information for purpose of emergency treatment. Additional parameters may further limit the disclosure to specific users, roles, duration, types of information, and impose uses obligations. [ActConsentDirective (2.16.840.1.113883.1.11.20425)]
     */
    EmergencyOnly = "emrgonly",
    /**
     * hcd: Patient's document telling patient's health care provider what the patient wants or does not want if the patient is diagnosed as being terminally ill and in a persistent vegetative state or in a permanently unconscious condition.[2005 Honor My Wishes]
     */
    HealthCareDirective = "hcd",
    /**
     * ICOL: Definition: Consent to have healthcare information collected in an electronic health record.  This entails that the information may be used in analysis, modified, updated.
     */
    InformationCollection = "ICOL",
    /**
     * IDSCL: Definition: Consent to have collected healthcare information disclosed.
     */
    InformationDisclosure = "IDSCL",
    /**
     * INFA: Definition: Consent to access healthcare information.
     */
    InformationAccess = "INFA",
    /**
     * INFAO: Definition: Consent to access or "read" only, which entails that the information is not to be copied, screen printed, saved, emailed, stored, re-disclosed or altered in any way.  This level ensures that data which is masked or to which access is restricted will not be.
     *
     *
     *                            Example: Opened and then emailed or screen printed for use outside of the consent directive purpose.
     */
    AccessOnly = "INFAO",
    /**
     * INFASO: Definition: Consent to access and save only, which entails that access to the saved copy will remain locked.
     */
    AccessAndSaveOnly = "INFASO",
    /**
     * IRDSCL: Definition: Information re-disclosed without the patient's consent.
     */
    InformationRedisclosure = "IRDSCL",
    /**
     * npp: Acknowledgement of custodian notice of privacy practices. Usage Notes: This type of consent directive acknowledges a custodian's notice of privacy practices including its permitted collection, access, use and disclosure of health information to users and for purposes of use specified. [ActConsentDirective (2.16.840.1.113883.1.11.20425)]
     */
    NoticeOfPrivacyPractices = "npp",
    /**
     * polst: The Physician Order for Life-Sustaining Treatment form records a person's health care wishes for end of life emergency treatment and translates them into an order by the physician. It must be reviewed and signed by both the patient and the physician, Advanced Registered Nurse Practitioner or Physician Assistant. [2005 Honor My Wishes] Comment: Opt-in Consent Directive with restrictions.
     */
    POLST = "polst",
    /**
     * research: Consent to have healthcare information in an electronic health record accessed for research purposes. [VALUE SET: ActConsentType (2.16.840.1.113883.1.11.19897)]
     */
    ResearchInformationAccess = "research",
    /**
     * RESEARCH: Definition: Consent to have healthcare information in an electronic health record accessed for research purposes.
     */
    ResearchInformationAccessRESEARCH = "RESEARCH",
    /**
     * rsdid: Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes, but without consent to re-identify the information under any circumstance. [VALUE SET: ActConsentType (2.16.840.1.113883.1.11.19897)
     */
    DeIdentifiedInformationAccess = "rsdid",
    /**
     * RSDID: Definition: Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes, but without consent to re-identify the information under any circumstance.
     */
    DeIdentifiedInformationAccessRSDID = "RSDID",
    /**
     * rsreid: Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes re-identified under specific circumstances outlined in the consent. [VALUE SET: ActConsentType (2.16.840.1.113883.1.11.19897)]
     */
    ReIdentifiableInformationAccess = "rsreid",
    /**
     * RSREID: Definition: Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes re-identified under specific circumstances outlined in the consent.
     *
     *
     *                            Example:: Where there is a need to inform the subject of potential health issues.
     */
    ReIdentifiableInformationAccessRSREID = "RSREID"
}
//# sourceMappingURL=ConsentCategoryValueSetEnum.d.ts.map