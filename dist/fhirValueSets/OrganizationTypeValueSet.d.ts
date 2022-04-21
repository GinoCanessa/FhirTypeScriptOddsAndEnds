import { Coding } from '../fhir.js';
/**
 * This example value set defines a set of codes that can be used to indicate a type of organization.
 */
export declare const OrganizationTypeValueSet: {
    /**
     * bus: An organization that is a registered business or corporation but not identified by other types.
     */
    readonly NonHealthcareBusinessOrCorporation: Coding;
    /**
     * cg: An un-incorporated community group.
     */
    readonly CommunityGroup: Coding;
    /**
     * crs: An organization that is identified as a Pharmaceutical/Clinical Research Sponsor.
     */
    readonly ClinicalResearchSponsor: Coding;
    /**
     * dept: A department or ward within a hospital (Generally is not applicable to top level organizations)
     */
    readonly HospitalDepartment: Coding;
    /**
     * edu: An educational institution that provides education or research facilities.
     */
    readonly EducationalInstitute: Coding;
    /**
     * govt: A political body, often used when including organization records for government bodies such as a Federal Government, State or Local Government.
     */
    readonly Government: Coding;
    /**
     * ins: A company that provides insurance to its subscribers that may include healthcare related policies.
     */
    readonly InsuranceCompany: Coding;
    /**
     * other: Other type of organization not already specified.
     */
    readonly Other: Coding;
    /**
     * pay: A company, charity, or governmental organization, which processes claims and/or issues payments to providers on behalf of patients or groups of patients.
     */
    readonly Payer: Coding;
    /**
     * prov: An organization that provides healthcare services.
     */
    readonly HealthcareProvider: Coding;
    /**
     * reli: An organization that is identified as a part of a religious institution.
     */
    readonly ReligiousInstitution: Coding;
    /**
     * team: An organizational team is usually a grouping of practitioners that perform a specific function within an organization (which could be a top level organization, or a department).
     */
    readonly OrganizationalTeam: Coding;
};
/**
 * This example value set defines a set of codes that can be used to indicate a type of organization.
 */
export declare type OrganizationTypeValueSetType = typeof OrganizationTypeValueSet;
/**
 * This example value set defines a set of codes that can be used to indicate a type of organization.
 */
export declare enum OrganizationTypeValueSetEnum {
    /**
     * bus: An organization that is a registered business or corporation but not identified by other types.
     */
    NonHealthcareBusinessOrCorporation = "bus",
    /**
     * cg: An un-incorporated community group.
     */
    CommunityGroup = "cg",
    /**
     * crs: An organization that is identified as a Pharmaceutical/Clinical Research Sponsor.
     */
    ClinicalResearchSponsor = "crs",
    /**
     * dept: A department or ward within a hospital (Generally is not applicable to top level organizations)
     */
    HospitalDepartment = "dept",
    /**
     * edu: An educational institution that provides education or research facilities.
     */
    EducationalInstitute = "edu",
    /**
     * govt: A political body, often used when including organization records for government bodies such as a Federal Government, State or Local Government.
     */
    Government = "govt",
    /**
     * ins: A company that provides insurance to its subscribers that may include healthcare related policies.
     */
    InsuranceCompany = "ins",
    /**
     * other: Other type of organization not already specified.
     */
    Other = "other",
    /**
     * pay: A company, charity, or governmental organization, which processes claims and/or issues payments to providers on behalf of patients or groups of patients.
     */
    Payer = "pay",
    /**
     * prov: An organization that provides healthcare services.
     */
    HealthcareProvider = "prov",
    /**
     * reli: An organization that is identified as a part of a religious institution.
     */
    ReligiousInstitution = "reli",
    /**
     * team: An organizational team is usually a grouping of practitioners that perform a specific function within an organization (which could be a top level organization, or a department).
     */
    OrganizationalTeam = "team"
}
//# sourceMappingURL=OrganizationTypeValueSet.d.ts.map