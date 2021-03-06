// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/subject-type|4.0.1
import { Coding } from '../fhir.js';
/**
 * Possible types of subjects.
 */
export const SubjectTypeValueSet = {
    /**
     * Device: A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
     */
    Device: new Coding({
        display: "Device",
        code: "Device",
        system: "http://hl7.org/fhir/resource-types",
    }),
    /**
     * Location: Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
     */
    Location: new Coding({
        display: "Location",
        code: "Location",
        system: "http://hl7.org/fhir/resource-types",
    }),
    /**
     * Organization: A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
     */
    Organization: new Coding({
        display: "Organization",
        code: "Organization",
        system: "http://hl7.org/fhir/resource-types",
    }),
    /**
     * Patient: Demographics and other administrative information about an individual or animal receiving care or other health-related services.
     */
    Patient: new Coding({
        display: "Patient",
        code: "Patient",
        system: "http://hl7.org/fhir/resource-types",
    }),
    /**
     * Practitioner: A person who is directly or indirectly involved in the provisioning of healthcare.
     */
    Practitioner: new Coding({
        display: "Practitioner",
        code: "Practitioner",
        system: "http://hl7.org/fhir/resource-types",
    }),
};
/**
 * Possible types of subjects.
 */
//# sourceMappingURL=SubjectTypeValueSet.js.map