// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * This example value set defines a set of codes that can be used to indicate the role of one Organization in relation to another.
 */
export const OrganizationRoleValueSet = {
  /**
   * An organization such as a public health agency, community/social services provider, etc.
   */
  organization_role_Agency: new Coding({
    code: "agency",
    display: "Agency",
    system: "http://hl7.org/fhir/organization-role"
  }),
  /**
   * An organization providing diagnostic testing/laboratory services
   */
  organization_role_Diagnostics: new Coding({
    code: "diagnostics",
    display: "Diagnostics",
    system: "http://hl7.org/fhir/organization-role"
  }),
  /**
   * An organization that facilitates electronic clinical data exchange between entities
   */
  organization_role_HIEHIO: new Coding({
    code: "HIE/HIO",
    display: "HIE/HIO",
    system: "http://hl7.org/fhir/organization-role"
  }),
  /**
   * A type of non-ownership relationship between entities (encompasses partnerships, collaboration, joint ventures, etc.)
   */
  organization_role_Member: new Coding({
    code: "member",
    display: "Member",
    system: "http://hl7.org/fhir/organization-role"
  }),
  /**
   * An organization providing reimbursement, payment, or related services
   */
  organization_role_Payer: new Coding({
    code: "payer",
    display: "Payer",
    system: "http://hl7.org/fhir/organization-role"
  }),
  organization_role_Provider: new Coding({
    code: "provider",
    display: "Provider",
    system: "http://hl7.org/fhir/organization-role"
  }),
  /**
   * An organization providing research-related services such as conducting research, recruiting research participants, analyzing data, etc.
   */
  organization_role_Research: new Coding({
    code: "research",
    display: "Research",
    system: "http://hl7.org/fhir/organization-role"
  }),
  /**
   * An organization that provides medical supplies (e.g. medical devices, equipment, pharmaceutical products, etc.)
   */
  organization_role_Supplier: new Coding({
    code: "supplier",
    display: "Supplier",
    system: "http://hl7.org/fhir/organization-role"
  }),
};
