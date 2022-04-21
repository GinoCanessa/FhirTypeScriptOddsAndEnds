import { Coding } from '../fhir.js';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the evaluation for vaccine administration event.
 */
export declare const ImmunizationEvaluationStatusValueSet: {
    /**
     * completed: All actions that are implied by the administration have occurred.
     */
    readonly Completed: Coding;
    /**
     * entered-in-error: The administration was entered in error and therefore nullified.
     */
    readonly EnteredInError: Coding;
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the evaluation for vaccine administration event.
 */
export declare type ImmunizationEvaluationStatusValueSetType = typeof ImmunizationEvaluationStatusValueSet;
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the evaluation for vaccine administration event.
 */
export declare enum ImmunizationEvaluationStatusValueSetEnum {
    /**
     * completed: All actions that are implied by the administration have occurred.
     */
    Completed = "completed",
    /**
     * entered-in-error: The administration was entered in error and therefore nullified.
     */
    EnteredInError = "entered-in-error"
}
//# sourceMappingURL=ImmunizationEvaluationStatusValueSet.d.ts.map