/**
 * This example value set defines a set of codes that can be used to indicate a type of organization.
 */
export var OrganizationType = {
    /**
     * An organization that is a registered business or corporation but not identified by other types.
     */
    organization_type_NonHealthcareBusinessOrCorporation: {
        code: "bus",
        display: "Non-Healthcare Business or Corporation",
        system: "http://terminology.hl7.org/CodeSystem/organization-type"
    },
    /**
     * An un-incorporated community group.
     */
    organization_type_CommunityGroup: {
        code: "cg",
        display: "Community Group",
        system: "http://terminology.hl7.org/CodeSystem/organization-type"
    },
    /**
     * An organization that is identified as a Pharmaceutical/Clinical Research Sponsor.
     */
    organization_type_ClinicalResearchSponsor: {
        code: "crs",
        display: "Clinical Research Sponsor",
        system: "http://terminology.hl7.org/CodeSystem/organization-type"
    },
    /**
     * A department or ward within a hospital (Generally is not applicable to top level organizations)
     */
    organization_type_HospitalDepartment: {
        code: "dept",
        display: "Hospital Department",
        system: "http://terminology.hl7.org/CodeSystem/organization-type"
    },
    /**
     * An educational institution that provides education or research facilities.
     */
    organization_type_EducationalInstitute: {
        code: "edu",
        display: "Educational Institute",
        system: "http://terminology.hl7.org/CodeSystem/organization-type"
    },
    /**
     * A political body, often used when including organization records for government bodies such as a Federal Government, State or Local Government.
     */
    organization_type_Government: {
        code: "govt",
        display: "Government",
        system: "http://terminology.hl7.org/CodeSystem/organization-type"
    },
    /**
     * A company that provides insurance to its subscribers that may include healthcare related policies.
     */
    organization_type_InsuranceCompany: {
        code: "ins",
        display: "Insurance Company",
        system: "http://terminology.hl7.org/CodeSystem/organization-type"
    },
    /**
     * Other type of organization not already specified.
     */
    organization_type_Other: {
        code: "other",
        display: "Other",
        system: "http://terminology.hl7.org/CodeSystem/organization-type"
    },
    /**
     * A company, charity, or governmental organization, which processes claims and/or issues payments to providers on behalf of patients or groups of patients.
     */
    organization_type_Payer: {
        code: "pay",
        display: "Payer",
        system: "http://terminology.hl7.org/CodeSystem/organization-type"
    },
    /**
     * An organization that provides healthcare services.
     */
    organization_type_HealthcareProvider: {
        code: "prov",
        display: "Healthcare Provider",
        system: "http://terminology.hl7.org/CodeSystem/organization-type"
    },
    /**
     * An organization that is identified as a part of a religious institution.
     */
    organization_type_ReligiousInstitution: {
        code: "reli",
        display: "Religious Institution",
        system: "http://terminology.hl7.org/CodeSystem/organization-type"
    },
    /**
     * An organizational team is usually a grouping of practitioners that perform a specific function within an organization (which could be a top level organization, or a department).
     */
    organization_type_OrganizationalTeam: {
        code: "team",
        display: "Organizational team",
        system: "http://terminology.hl7.org/CodeSystem/organization-type"
    }
};
