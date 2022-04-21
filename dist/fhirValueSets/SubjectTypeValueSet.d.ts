import { Coding } from '../fhir.js';
/**
 * Possible types of subjects.
 */
export declare const SubjectTypeValueSet: {
    /**
     * Device: A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
     */
    readonly Device: Coding;
    /**
     * Location: Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
     */
    readonly Location: Coding;
    /**
     * Organization: A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
     */
    readonly Organization: Coding;
    /**
     * Patient: Demographics and other administrative information about an individual or animal receiving care or other health-related services.
     */
    readonly Patient: Coding;
    /**
     * Practitioner: A person who is directly or indirectly involved in the provisioning of healthcare.
     */
    readonly Practitioner: Coding;
};
/**
 * Possible types of subjects.
 */
export declare type SubjectTypeValueSetType = typeof SubjectTypeValueSet;
/**
 * Possible types of subjects.
 */
export declare enum SubjectTypeValueSetEnum {
    /**
     * Device: A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
     */
    Device = "Device",
    /**
     * Location: Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
     */
    Location = "Location",
    /**
     * Organization: A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
     */
    Organization = "Organization",
    /**
     * Patient: Demographics and other administrative information about an individual or animal receiving care or other health-related services.
     */
    Patient = "Patient",
    /**
     * Practitioner: A person who is directly or indirectly involved in the provisioning of healthcare.
     */
    Practitioner = "Practitioner"
}
//# sourceMappingURL=SubjectTypeValueSet.d.ts.map