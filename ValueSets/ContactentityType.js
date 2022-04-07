/**
 * This example value set defines a set of codes that can be used to indicate the purpose for which you would contact a contact party.
 */
export var ContactentityType = {
    /**
     * Contact details for administrative enquiries.
     */
    contactentity_type_Administrative: {
        code: "ADMIN",
        display: "Administrative",
        system: "http://terminology.hl7.org/CodeSystem/contactentity-type"
    },
    /**
     * Contact details for information regarding to billing/general finance enquiries.
     */
    contactentity_type_Billing: {
        code: "BILL",
        display: "Billing",
        system: "http://terminology.hl7.org/CodeSystem/contactentity-type"
    },
    /**
     * Contact details for issues related to Human Resources, such as staff matters, OH&amp;S etc.
     */
    contactentity_type_HumanResource: {
        code: "HR",
        display: "Human Resource",
        system: "http://terminology.hl7.org/CodeSystem/contactentity-type"
    },
    /**
     * Generic information contact for patients.
     */
    contactentity_type_Patient: {
        code: "PATINF",
        display: "Patient",
        system: "http://terminology.hl7.org/CodeSystem/contactentity-type"
    },
    /**
     * Contact details for dealing with issues related to insurance claims/adjudication/payment.
     */
    contactentity_type_Payor: {
        code: "PAYOR",
        display: "Payor",
        system: "http://terminology.hl7.org/CodeSystem/contactentity-type"
    },
    /**
     * Dedicated contact point for matters relating to press enquiries.
     */
    contactentity_type_Press: {
        code: "PRESS",
        display: "Press",
        system: "http://terminology.hl7.org/CodeSystem/contactentity-type"
    }
};
