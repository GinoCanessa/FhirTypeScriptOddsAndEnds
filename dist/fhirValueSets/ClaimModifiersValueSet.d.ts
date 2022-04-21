import { Coding } from '../fhir.js';
/**
 * This value set includes sample Modifier type codes.
 */
export declare const ClaimModifiersValueSet: {
    /**
     * a: Repair of prior service or installation.
     */
    readonly RepairOfPriorServiceOrInstallation: Coding;
    /**
     * b: Temporary service or installation.
     */
    readonly TemporaryServiceOrInstallation: Coding;
    /**
     * c: Treatment associated with TMJ.
     */
    readonly TMJTreatment: Coding;
    /**
     * e: Implant or associated with an implant.
     */
    readonly ImplantOrAssociatedWithAnImplant: Coding;
    /**
     * rooh: A Rush service or service performed outside of normal office hours.
     */
    readonly RushOrOutsideOfOfficeHours: Coding;
    /**
     * x: None.
     */
    readonly None: Coding;
};
/**
 * This value set includes sample Modifier type codes.
 */
export declare type ClaimModifiersValueSetType = typeof ClaimModifiersValueSet;
/**
 * This value set includes sample Modifier type codes.
 */
export declare enum ClaimModifiersValueSetEnum {
    /**
     * a: Repair of prior service or installation.
     */
    RepairOfPriorServiceOrInstallation = "a",
    /**
     * b: Temporary service or installation.
     */
    TemporaryServiceOrInstallation = "b",
    /**
     * c: Treatment associated with TMJ.
     */
    TMJTreatment = "c",
    /**
     * e: Implant or associated with an implant.
     */
    ImplantOrAssociatedWithAnImplant = "e",
    /**
     * rooh: A Rush service or service performed outside of normal office hours.
     */
    RushOrOutsideOfOfficeHours = "rooh",
    /**
     * x: None.
     */
    None = "x"
}
//# sourceMappingURL=ClaimModifiersValueSet.d.ts.map