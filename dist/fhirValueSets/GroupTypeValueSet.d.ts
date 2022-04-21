import { Coding } from '../fhir.js';
/**
 * Types of resources that are part of group.
 */
export declare const GroupTypeValueSet: {
    /**
     * animal: Group contains "animal" Patient resources.
     */
    readonly Animal: Coding;
    /**
     * device: Group contains Device resources.
     */
    readonly Device: Coding;
    /**
     * medication: Group contains Medication resources.
     */
    readonly Medication: Coding;
    /**
     * person: Group contains "person" Patient resources.
     */
    readonly Person: Coding;
    /**
     * practitioner: Group contains healthcare practitioner resources (Practitioner or PractitionerRole).
     */
    readonly Practitioner: Coding;
    /**
     * substance: Group contains Substance resources.
     */
    readonly Substance: Coding;
};
/**
 * Types of resources that are part of group.
 */
export declare type GroupTypeValueSetType = typeof GroupTypeValueSet;
/**
 * Types of resources that are part of group.
 */
export declare enum GroupTypeValueSetEnum {
    /**
     * animal: Group contains "animal" Patient resources.
     */
    Animal = "animal",
    /**
     * device: Group contains Device resources.
     */
    Device = "device",
    /**
     * medication: Group contains Medication resources.
     */
    Medication = "medication",
    /**
     * person: Group contains "person" Patient resources.
     */
    Person = "person",
    /**
     * practitioner: Group contains healthcare practitioner resources (Practitioner or PractitionerRole).
     */
    Practitioner = "practitioner",
    /**
     * substance: Group contains Substance resources.
     */
    Substance = "substance"
}
//# sourceMappingURL=GroupTypeValueSet.d.ts.map