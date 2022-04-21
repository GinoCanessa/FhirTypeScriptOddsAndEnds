import { Coding } from '../fhir.js';
/**
 * Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
 */
export declare const QuestionnaireEnableBehaviorValueSet: {
    /**
     * all: Enable the question when all the enableWhen criteria are satisfied.
     */
    readonly All: Coding;
    /**
     * any: Enable the question when any of the enableWhen criteria are satisfied.
     */
    readonly Any: Coding;
};
/**
 * Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
 */
export declare type QuestionnaireEnableBehaviorValueSetType = typeof QuestionnaireEnableBehaviorValueSet;
/**
 * Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
 */
export declare enum QuestionnaireEnableBehaviorValueSetEnum {
    /**
     * all: Enable the question when all the enableWhen criteria are satisfied.
     */
    All = "all",
    /**
     * any: Enable the question when any of the enableWhen criteria are satisfied.
     */
    Any = "any"
}
//# sourceMappingURL=QuestionnaireEnableBehaviorValueSet.d.ts.map