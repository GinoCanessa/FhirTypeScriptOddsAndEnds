/**
 * This example value set defines a set of codes that can be used to indicate the role of one Organization in relation to another.
 */
export var OrganizationRole = {
    /**
     * An organization such as a public health agency, community/social services provider, etc.
     */
    organization_role_Agency: {
        code: "agency",
        display: "Agency",
        system: "http://hl7.org/fhir/organization-role"
    },
    /**
     * An organization providing diagnostic testing/laboratory services
     */
    organization_role_Diagnostics: {
        code: "diagnostics",
        display: "Diagnostics",
        system: "http://hl7.org/fhir/organization-role"
    },
    /**
     * An organization that facilitates electronic clinical data exchange between entities
     */
    organization_role_HIEHIO: {
        code: "HIE/HIO",
        display: "HIE/HIO",
        system: "http://hl7.org/fhir/organization-role"
    },
    /**
     * A type of non-ownership relationship between entities (encompasses partnerships, collaboration, joint ventures, etc.)
     */
    organization_role_Member: {
        code: "member",
        display: "Member",
        system: "http://hl7.org/fhir/organization-role"
    },
    /**
     * An organization providing reimbursement, payment, or related services
     */
    organization_role_Payer: {
        code: "payer",
        display: "Payer",
        system: "http://hl7.org/fhir/organization-role"
    },
    organization_role_Provider: {
        code: "provider",
        display: "Provider",
        system: "http://hl7.org/fhir/organization-role"
    },
    /**
     * An organization providing research-related services such as conducting research, recruiting research participants, analyzing data, etc.
     */
    organization_role_Research: {
        code: "research",
        display: "Research",
        system: "http://hl7.org/fhir/organization-role"
    },
    /**
     * An organization that provides medical supplies (e.g. medical devices, equipment, pharmaceutical products, etc.)
     */
    organization_role_Supplier: {
        code: "supplier",
        display: "Supplier",
        system: "http://hl7.org/fhir/organization-role"
    }
};
