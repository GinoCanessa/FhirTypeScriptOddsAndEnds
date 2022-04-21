import { Coding } from '../fhir.js';
/**
 * This example value set defines a set of codes that can be used to indicate the role of one Organization in relation to another.
 */
export declare const OrganizationRoleValueSet: {
    /**
     * agency: An organization such as a public health agency, community/social services provider, etc.
     */
    readonly Agency: Coding;
    /**
     * diagnostics: An organization providing diagnostic testing/laboratory services
     */
    readonly Diagnostics: Coding;
    /**
     * HIE/HIO: An organization that facilitates electronic clinical data exchange between entities
     */
    readonly HIEHIO: Coding;
    /**
     * member: A type of non-ownership relationship between entities (encompasses partnerships, collaboration, joint ventures, etc.)
     */
    readonly Member: Coding;
    /**
     * payer: An organization providing reimbursement, payment, or related services
     */
    readonly Payer: Coding;
    /**
     * Code: provider
     */
    readonly Provider: Coding;
    /**
     * research: An organization providing research-related services such as conducting research, recruiting research participants, analyzing data, etc.
     */
    readonly Research: Coding;
    /**
     * supplier: An organization that provides medical supplies (e.g. medical devices, equipment, pharmaceutical products, etc.)
     */
    readonly Supplier: Coding;
};
/**
 * This example value set defines a set of codes that can be used to indicate the role of one Organization in relation to another.
 */
export declare type OrganizationRoleValueSetType = typeof OrganizationRoleValueSet;
/**
 * This example value set defines a set of codes that can be used to indicate the role of one Organization in relation to another.
 */
export declare enum OrganizationRoleValueSetEnum {
    /**
     * agency: An organization such as a public health agency, community/social services provider, etc.
     */
    Agency = "agency",
    /**
     * diagnostics: An organization providing diagnostic testing/laboratory services
     */
    Diagnostics = "diagnostics",
    /**
     * HIE/HIO: An organization that facilitates electronic clinical data exchange between entities
     */
    HIEHIO = "HIE/HIO",
    /**
     * member: A type of non-ownership relationship between entities (encompasses partnerships, collaboration, joint ventures, etc.)
     */
    Member = "member",
    /**
     * payer: An organization providing reimbursement, payment, or related services
     */
    Payer = "payer",
    /**
     * Code: provider
     */
    Provider = "provider",
    /**
     * research: An organization providing research-related services such as conducting research, recruiting research participants, analyzing data, etc.
     */
    Research = "research",
    /**
     * supplier: An organization that provides medical supplies (e.g. medical devices, equipment, pharmaceutical products, etc.)
     */
    Supplier = "supplier"
}
//# sourceMappingURL=OrganizationRoleValueSet.d.ts.map