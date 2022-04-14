"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentCategory = void 0;
/**
 * This value set includes sample Consent Directive Type codes, including several consent directive related LOINC codes; HL7 VALUE SET: ActConsentType(2.16.840.1.113883.1.11.19897); examples of US realm consent directive legal descriptions and references to online and/or downloadable forms such as the SSA-827 Authorization to Disclose Information to the Social Security Administration; and other anticipated consent directives related to participation in a clinical trial, medical procedures, reproductive procedures; health care directive (Living Will); advance directive, do not resuscitate (DNR); Physician Orders for Life-Sustaining Treatment (POLST)
 */
exports.ConsentCategory = {
    /**
     * Any instructions, written or given verbally by a patient to a health care provider in anticipation of potential need for medical treatment. [2005 Honor My Wishes]
     */
    consent_category_AdvanceDirective: {
        code: "acd",
        display: "Advance Directive",
        system: "http://terminology.hl7.org/CodeSystem/consentcategorycodes"
    },
    /**
     * A legal document, signed by both the patient and their provider, stating a desire not to have CPR initiated in case of a cardiac event. Note: This form was replaced in 2003 with the Physician Orders for Life-Sustaining Treatment [POLST].
     */
    consent_category_DoNotResuscitate: {
        code: "dnr",
        display: "Do Not Resuscitate",
        system: "http://terminology.hl7.org/CodeSystem/consentcategorycodes"
    },
    /**
     * Opt-in to disclosure of health information for emergency only consent directive. Comment: This general consent directive specifically limits disclosure of health information for purpose of emergency treatment. Additional parameters may further limit the disclosure to specific users, roles, duration, types of information, and impose uses obligations. [ActConsentDirective (2.16.840.1.113883.1.11.20425)]
     */
    consent_category_EmergencyOnly: {
        code: "emrgonly",
        display: "Emergency Only",
        system: "http://terminology.hl7.org/CodeSystem/consentcategorycodes"
    },
    /**
     * Patient's document telling patient's health care provider what the patient wants or does not want if the patient is diagnosed as being terminally ill and in a persistent vegetative state or in a permanently unconscious condition.[2005 Honor My Wishes]
     */
    consent_category_HealthCareDirective: {
        code: "hcd",
        display: "Health Care Directive",
        system: "http://terminology.hl7.org/CodeSystem/consentcategorycodes"
    },
    /**
     * Definition: Consent to have healthcare information collected in an electronic health record.  This entails that the information may be used in analysis, modified, updated.
     */
    v3_ActCode_InformationCollection: {
        code: "ICOL",
        display: "information collection",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Definition: Consent to have collected healthcare information disclosed.
     */
    v3_ActCode_InformationDisclosure: {
        code: "IDSCL",
        display: "information disclosure",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Definition: Consent to access healthcare information.
     */
    v3_ActCode_InformationAccess: {
        code: "INFA",
        display: "information access",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Definition: Consent to access or "read" only, which entails that the information is not to be copied, screen printed, saved, emailed, stored, re-disclosed or altered in any way.  This level ensures that data which is masked or to which access is restricted will not be.
     *
     *
     *                            Example: Opened and then emailed or screen printed for use outside of the consent directive purpose.
     */
    v3_ActCode_AccessOnly: {
        code: "INFAO",
        display: "access only",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Definition: Consent to access and save only, which entails that access to the saved copy will remain locked.
     */
    v3_ActCode_AccessAndSaveOnly: {
        code: "INFASO",
        display: "access and save only",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Definition: Information re-disclosed without the patient's consent.
     */
    v3_ActCode_InformationRedisclosure: {
        code: "IRDSCL",
        display: "information redisclosure",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Acknowledgement of custodian notice of privacy practices. Usage Notes: This type of consent directive acknowledges a custodian's notice of privacy practices including its permitted collection, access, use and disclosure of health information to users and for purposes of use specified. [ActConsentDirective (2.16.840.1.113883.1.11.20425)]
     */
    consent_category_NoticeOfPrivacyPractices: {
        code: "npp",
        display: "Notice of Privacy Practices",
        system: "http://terminology.hl7.org/CodeSystem/consentcategorycodes"
    },
    /**
     * The Physician Order for Life-Sustaining Treatment form records a person's health care wishes for end of life emergency treatment and translates them into an order by the physician. It must be reviewed and signed by both the patient and the physician, Advanced Registered Nurse Practitioner or Physician Assistant. [2005 Honor My Wishes] Comment: Opt-in Consent Directive with restrictions.
     */
    consent_category_POLST: {
        code: "polst",
        display: "POLST",
        system: "http://terminology.hl7.org/CodeSystem/consentcategorycodes"
    },
    /**
     * Consent to have healthcare information in an electronic health record accessed for research purposes. [VALUE SET: ActConsentType (2.16.840.1.113883.1.11.19897)]
     */
    consent_category_ResearchInformationAccess: {
        code: "research",
        display: "Research Information Access",
        system: "http://terminology.hl7.org/CodeSystem/consentcategorycodes"
    },
    /**
     * Definition: Consent to have healthcare information in an electronic health record accessed for research purposes.
     */
    v3_ActCode_ResearchInformationAccess: {
        code: "RESEARCH",
        display: "research information access",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes, but without consent to re-identify the information under any circumstance. [VALUE SET: ActConsentType (2.16.840.1.113883.1.11.19897)
     */
    consent_category_DeIdentifiedInformationAccess: {
        code: "rsdid",
        display: "De-identified Information Access",
        system: "http://terminology.hl7.org/CodeSystem/consentcategorycodes"
    },
    /**
     * Definition: Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes, but without consent to re-identify the information under any circumstance.
     */
    v3_ActCode_DeIdentifiedInformationAccess: {
        code: "RSDID",
        display: "de-identified information access",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes re-identified under specific circumstances outlined in the consent. [VALUE SET: ActConsentType (2.16.840.1.113883.1.11.19897)]
     */
    consent_category_ReIdentifiableInformationAccess: {
        code: "rsreid",
        display: "Re-identifiable Information Access",
        system: "http://terminology.hl7.org/CodeSystem/consentcategorycodes"
    },
    /**
     * Definition: Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes re-identified under specific circumstances outlined in the consent.
     *
     *
     *                            Example:: Where there is a need to inform the subject of potential health issues.
     */
    v3_ActCode_ReIdentifiableInformationAccess: {
        code: "RSREID",
        display: "re-identifiable information access",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
};
//# sourceMappingURL=ConsentCategory.js.map