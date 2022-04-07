/**
 * This value set defines the set of codes that can be used to indicate the marital status of a person.
 */
export var MaritalStatus = {
    /**
     * Marriage contract has been declared null and to not have existed
     */
    v3_MaritalStatus_Annulled: {
        code: "A",
        display: "Annulled",
        system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus"
    },
    /**
     * Marriage contract has been declared dissolved and inactive
     */
    v3_MaritalStatus_Divorced: {
        code: "D",
        display: "Divorced",
        system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus"
    },
    /**
     * Subject to an Interlocutory Decree.
     */
    v3_MaritalStatus_Interlocutory: {
        code: "I",
        display: "Interlocutory",
        system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus"
    },
    /**
     * Legally Separated
     */
    v3_MaritalStatus_LegallySeparated: {
        code: "L",
        display: "Legally Separated",
        system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus"
    },
    /**
     * A current marriage contract is active
     */
    v3_MaritalStatus_Married: {
        code: "M",
        display: "Married",
        system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus"
    },
    /**
     * More than 1 current spouse
     */
    v3_MaritalStatus_Polygamous: {
        code: "P",
        display: "Polygamous",
        system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus"
    },
    /**
     * No marriage contract has ever been entered
     */
    v3_MaritalStatus_NeverMarried: {
        code: "S",
        display: "Never Married",
        system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus"
    },
    /**
     * Person declares that a domestic partner relationship exists.
     */
    v3_MaritalStatus_DomesticPartner: {
        code: "T",
        display: "Domestic partner",
        system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus"
    },
    /**
     * Currently not in a marriage contract.
     */
    v3_MaritalStatus_Unmarried: {
        code: "U",
        display: "unmarried",
        system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus"
    },
    /**
     * The spouse has died
     */
    v3_MaritalStatus_Widowed: {
        code: "W",
        display: "Widowed",
        system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus"
    }
};
