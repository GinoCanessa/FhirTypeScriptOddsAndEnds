import { Coding } from '../fhir.js';
/**
 * Which type a compartment definition describes.
 */
export declare const CompartmentTypeValueSet: {
    /**
     * Device: The compartment definition is for the device compartment.
     */
    readonly Device: Coding;
    /**
     * Encounter: The compartment definition is for the encounter compartment.
     */
    readonly Encounter: Coding;
    /**
     * Patient: The compartment definition is for the patient compartment.
     */
    readonly Patient: Coding;
    /**
     * Practitioner: The compartment definition is for the practitioner compartment.
     */
    readonly Practitioner: Coding;
    /**
     * RelatedPerson: The compartment definition is for the related-person compartment.
     */
    readonly RelatedPerson: Coding;
};
/**
 * Which type a compartment definition describes.
 */
export declare type CompartmentTypeValueSetType = typeof CompartmentTypeValueSet;
/**
 * Which type a compartment definition describes.
 */
export declare enum CompartmentTypeValueSetEnum {
    /**
     * Device: The compartment definition is for the device compartment.
     */
    Device = "Device",
    /**
     * Encounter: The compartment definition is for the encounter compartment.
     */
    Encounter = "Encounter",
    /**
     * Patient: The compartment definition is for the patient compartment.
     */
    Patient = "Patient",
    /**
     * Practitioner: The compartment definition is for the practitioner compartment.
     */
    Practitioner = "Practitioner",
    /**
     * RelatedPerson: The compartment definition is for the related-person compartment.
     */
    RelatedPerson = "RelatedPerson"
}
//# sourceMappingURL=CompartmentTypeValueSet.d.ts.map