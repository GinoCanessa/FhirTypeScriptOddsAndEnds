import { Coding } from '../fhir';
/**
 * This example value set defines a set of codes that can be used to indicate a type of organization.
 */
export declare const OrganizationTypeValueSet: {
    /**
     * An organization that is a registered business or corporation but not identified by other types.
     */
    organization_type_NonHealthcareBusinessOrCorporation: Coding;
    /**
     * An un-incorporated community group.
     */
    organization_type_CommunityGroup: Coding;
    /**
     * An organization that is identified as a Pharmaceutical/Clinical Research Sponsor.
     */
    organization_type_ClinicalResearchSponsor: Coding;
    /**
     * A department or ward within a hospital (Generally is not applicable to top level organizations)
     */
    organization_type_HospitalDepartment: Coding;
    /**
     * An educational institution that provides education or research facilities.
     */
    organization_type_EducationalInstitute: Coding;
    /**
     * A political body, often used when including organization records for government bodies such as a Federal Government, State or Local Government.
     */
    organization_type_Government: Coding;
    /**
     * A company that provides insurance to its subscribers that may include healthcare related policies.
     */
    organization_type_InsuranceCompany: Coding;
    /**
     * Other type of organization not already specified.
     */
    organization_type_Other: Coding;
    /**
     * A company, charity, or governmental organization, which processes claims and/or issues payments to providers on behalf of patients or groups of patients.
     */
    organization_type_Payer: Coding;
    /**
     * An organization that provides healthcare services.
     */
    organization_type_HealthcareProvider: Coding;
    /**
     * An organization that is identified as a part of a religious institution.
     */
    organization_type_ReligiousInstitution: Coding;
    /**
     * An organizational team is usually a grouping of practitioners that perform a specific function within an organization (which could be a top level organization, or a department).
     */
    organization_type_OrganizationalTeam: Coding;
};
//# sourceMappingURL=OrganizationTypeValueSet.d.ts.map