// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v3-ConfidentialityClassification|2014-03-26
import { Coding } from '../fhir.js';
/**
 *  Set of codes used to value Act.Confidentiality and Role.Confidentiality attribute in accordance with the definition for concept domain "Confidentiality".
 */
export const V3ConfidentialityClassificationValueSet = {
    /**
     * L: Definition: Privacy metadata indicating that the information has been de-identified, and there are mitigating circumstances that prevent re-identification, which minimize risk of harm from unauthorized disclosure.  The information requires protection to maintain low sensitivity.
     *
     *
     *                            Examples: Includes anonymized, pseudonymized, or non-personally identifiable information such as HIPAA limited data sets.
     *
     *
     *                            Map: No clear map to ISO 13606-4 Sensitivity Level (1) Care Management:   RECORD_COMPONENTs that might need to be accessed by a wide range of administrative staff to manage the subject of care's access to health services.
     *
     *
     *                            Usage Note: This metadata indicates the receiver may have an obligation to comply with a data use agreement.
     */
    Low: new Coding({
        display: "low",
        code: "L",
        system: "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
    }),
    /**
     * M: Definition: Privacy metadata indicating moderately sensitive information, which presents moderate risk of harm if disclosed without authorization.
     *
     *
     *                            Examples: Includes allergies of non-sensitive nature used inform food service; health information a patient authorizes to be used for marketing, released to a bank for a health credit card or savings account; or information in personal health record systems that are not governed under health privacy laws.
     *
     *
     *                            Map: Partial Map to ISO 13606-4 Sensitivity Level (2) Clinical Management:  Less sensitive RECORD_COMPONENTs that might need to be accessed by a wider range of personnel not all of whom are actively caring for the patient (e.g. radiology staff).
     *
     *
     *                            Usage Note: This metadata indicates that the receiver may be obligated to comply with the receiver's terms of use or privacy policies.
     */
    Moderate: new Coding({
        display: "moderate",
        code: "M",
        system: "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
    }),
    /**
     * N: Definition: Privacy metadata indicating that the information is typical, non-stigmatizing health information, which presents typical risk of harm if disclosed without authorization.
     *
     *
     *                            Examples: In the US, this includes what HIPAA identifies as the minimum necessary protected health information (PHI) given a covered purpose of use (treatment, payment, or operations).  Includes typical, non-stigmatizing health information disclosed in an application for health, workers compensation, disability, or life insurance.
     *
     *
     *                            Map: Partial Map to ISO 13606-4 Sensitivity Level (3) Clinical Care:   Default for normal clinical care access (i.e. most clinical staff directly caring for the patient should be able to access nearly all of the EHR).   Maps to normal confidentiality for treatment information but not to ancillary care, payment and operations.
     *
     *
     *                            Usage Note: This metadata indicates that the receiver may be obligated to comply with applicable jurisdictional privacy law or disclosure authorization.
     */
    Normal: new Coding({
        display: "normal",
        code: "N",
        system: "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
    }),
    /**
     * R: Privacy metadata indicating highly sensitive, potentially stigmatizing information, which presents a high risk to the information subject if disclosed without authorization. May be pre-empted by jurisdictional law, e.g., for public health reporting or emergency treatment.
     *
     *
     *                            Examples: Includes information that is additionally protected such as sensitive conditions mental health, HIV, substance abuse, domestic violence, child abuse, genetic disease, and reproductive health; or sensitive demographic information such as a patient's standing as an employee or a celebrity. May be used to indicate proprietary or classified information that is not related to an individual, e.g., secret ingredients in a therapeutic substance; or the name of a manufacturer.
     *
     *
     *                            Map: Partial Map to ISO 13606-4 Sensitivity Level (3) Clinical Care: Default for normal clinical care access (i.e. most clinical staff directly caring for the patient should be able to access nearly all of the EHR). Maps to normal confidentiality for treatment information but not to ancillary care, payment and operations..
     *
     *
     *                            Usage Note: This metadata indicates that the receiver may be obligated to comply with applicable, prevailing (default) jurisdictional privacy law or disclosure authorization..
     */
    Restricted: new Coding({
        display: "restricted",
        code: "R",
        system: "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
    }),
    /**
     * U: Definition: Privacy metadata indicating that the information is not classified as sensitive.
     *
     *
     *                            Examples: Includes publicly available information, e.g., business name, phone, email or physical address.
     *
     *
     *                            Usage Note: This metadata indicates that the receiver has no obligation to consider additional policies when making access control decisions.   Note that in some jurisdictions, personally identifiable information must be protected as confidential, so it would not be appropriate to assign a confidentiality code of "unrestricted"  to that information even if it is publicly available.
     */
    Unrestricted: new Coding({
        display: "unrestricted",
        code: "U",
        system: "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
    }),
    /**
     * V: . Privacy metadata indicating that the information is extremely sensitive and likely stigmatizing health information that presents a very high risk if disclosed without authorization.  This information must be kept in the highest confidence.
     *
     *
     *                            Examples:  Includes information about a victim of abuse, patient requested information sensitivity, and taboo subjects relating to health status that must be discussed with the patient by an attending provider before sharing with the patient.  May also include information held under â€œlegal lockâ€? or attorney-client privilege
     *
     *
     *                            Map:  This metadata indicates that the receiver may not disclose this information except as directed by the information custodian, who may be the information subject.
     *
     *
     *                            Usage Note:  This metadata indicates that the receiver may not disclose this information except as directed by the information custodian, who may be the information subject.
     */
    VeryRestricted: new Coding({
        display: "very restricted",
        code: "V",
        system: "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
    }),
};
/**
 *  Set of codes used to value Act.Confidentiality and Role.Confidentiality attribute in accordance with the definition for concept domain "Confidentiality".
 */
export var V3ConfidentialityClassificationValueSetEnum;
(function (V3ConfidentialityClassificationValueSetEnum) {
    /**
     * L: Definition: Privacy metadata indicating that the information has been de-identified, and there are mitigating circumstances that prevent re-identification, which minimize risk of harm from unauthorized disclosure.  The information requires protection to maintain low sensitivity.
     *
     *
     *                            Examples: Includes anonymized, pseudonymized, or non-personally identifiable information such as HIPAA limited data sets.
     *
     *
     *                            Map: No clear map to ISO 13606-4 Sensitivity Level (1) Care Management:   RECORD_COMPONENTs that might need to be accessed by a wide range of administrative staff to manage the subject of care's access to health services.
     *
     *
     *                            Usage Note: This metadata indicates the receiver may have an obligation to comply with a data use agreement.
     */
    V3ConfidentialityClassificationValueSetEnum["Low"] = "L";
    /**
     * M: Definition: Privacy metadata indicating moderately sensitive information, which presents moderate risk of harm if disclosed without authorization.
     *
     *
     *                            Examples: Includes allergies of non-sensitive nature used inform food service; health information a patient authorizes to be used for marketing, released to a bank for a health credit card or savings account; or information in personal health record systems that are not governed under health privacy laws.
     *
     *
     *                            Map: Partial Map to ISO 13606-4 Sensitivity Level (2) Clinical Management:  Less sensitive RECORD_COMPONENTs that might need to be accessed by a wider range of personnel not all of whom are actively caring for the patient (e.g. radiology staff).
     *
     *
     *                            Usage Note: This metadata indicates that the receiver may be obligated to comply with the receiver's terms of use or privacy policies.
     */
    V3ConfidentialityClassificationValueSetEnum["Moderate"] = "M";
    /**
     * N: Definition: Privacy metadata indicating that the information is typical, non-stigmatizing health information, which presents typical risk of harm if disclosed without authorization.
     *
     *
     *                            Examples: In the US, this includes what HIPAA identifies as the minimum necessary protected health information (PHI) given a covered purpose of use (treatment, payment, or operations).  Includes typical, non-stigmatizing health information disclosed in an application for health, workers compensation, disability, or life insurance.
     *
     *
     *                            Map: Partial Map to ISO 13606-4 Sensitivity Level (3) Clinical Care:   Default for normal clinical care access (i.e. most clinical staff directly caring for the patient should be able to access nearly all of the EHR).   Maps to normal confidentiality for treatment information but not to ancillary care, payment and operations.
     *
     *
     *                            Usage Note: This metadata indicates that the receiver may be obligated to comply with applicable jurisdictional privacy law or disclosure authorization.
     */
    V3ConfidentialityClassificationValueSetEnum["Normal"] = "N";
    /**
     * R: Privacy metadata indicating highly sensitive, potentially stigmatizing information, which presents a high risk to the information subject if disclosed without authorization. May be pre-empted by jurisdictional law, e.g., for public health reporting or emergency treatment.
     *
     *
     *                            Examples: Includes information that is additionally protected such as sensitive conditions mental health, HIV, substance abuse, domestic violence, child abuse, genetic disease, and reproductive health; or sensitive demographic information such as a patient's standing as an employee or a celebrity. May be used to indicate proprietary or classified information that is not related to an individual, e.g., secret ingredients in a therapeutic substance; or the name of a manufacturer.
     *
     *
     *                            Map: Partial Map to ISO 13606-4 Sensitivity Level (3) Clinical Care: Default for normal clinical care access (i.e. most clinical staff directly caring for the patient should be able to access nearly all of the EHR). Maps to normal confidentiality for treatment information but not to ancillary care, payment and operations..
     *
     *
     *                            Usage Note: This metadata indicates that the receiver may be obligated to comply with applicable, prevailing (default) jurisdictional privacy law or disclosure authorization..
     */
    V3ConfidentialityClassificationValueSetEnum["Restricted"] = "R";
    /**
     * U: Definition: Privacy metadata indicating that the information is not classified as sensitive.
     *
     *
     *                            Examples: Includes publicly available information, e.g., business name, phone, email or physical address.
     *
     *
     *                            Usage Note: This metadata indicates that the receiver has no obligation to consider additional policies when making access control decisions.   Note that in some jurisdictions, personally identifiable information must be protected as confidential, so it would not be appropriate to assign a confidentiality code of "unrestricted"  to that information even if it is publicly available.
     */
    V3ConfidentialityClassificationValueSetEnum["Unrestricted"] = "U";
    /**
     * V: . Privacy metadata indicating that the information is extremely sensitive and likely stigmatizing health information that presents a very high risk if disclosed without authorization.  This information must be kept in the highest confidence.
     *
     *
     *                            Examples:  Includes information about a victim of abuse, patient requested information sensitivity, and taboo subjects relating to health status that must be discussed with the patient by an attending provider before sharing with the patient.  May also include information held under â€œlegal lockâ€? or attorney-client privilege
     *
     *
     *                            Map:  This metadata indicates that the receiver may not disclose this information except as directed by the information custodian, who may be the information subject.
     *
     *
     *                            Usage Note:  This metadata indicates that the receiver may not disclose this information except as directed by the information custodian, who may be the information subject.
     */
    V3ConfidentialityClassificationValueSetEnum["VeryRestricted"] = "V";
})(V3ConfidentialityClassificationValueSetEnum || (V3ConfidentialityClassificationValueSetEnum = {}));
//# sourceMappingURL=V3ConfidentialityClassificationValueSet.js.map