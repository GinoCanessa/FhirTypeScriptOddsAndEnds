import { Coding } from '../fhir.js';
/**
 * This value set includes sample Contract Term SubType codes.
 */
export declare const ContractTermSubtypeValueSet: {
    /**
     * condition: Terms that go to the very root of a contract.
     */
    readonly Condition: Coding;
    /**
     * innominate: Breach of which might or might not go to the root of the contract depending upon the nature of the breach
     */
    readonly Innominate: Coding;
    /**
     * warranty: Less imperative than a condition, so the contract will survive a breach
     */
    readonly Warranty: Coding;
};
/**
 * This value set includes sample Contract Term SubType codes.
 */
export declare type ContractTermSubtypeValueSetType = typeof ContractTermSubtypeValueSet;
/**
 * This value set includes sample Contract Term SubType codes.
 */
export declare enum ContractTermSubtypeValueSetEnum {
    /**
     * condition: Terms that go to the very root of a contract.
     */
    Condition = "condition",
    /**
     * innominate: Breach of which might or might not go to the root of the contract depending upon the nature of the breach
     */
    Innominate = "innominate",
    /**
     * warranty: Less imperative than a condition, so the contract will survive a breach
     */
    Warranty = "warranty"
}
//# sourceMappingURL=ContractTermSubtypeValueSet.d.ts.map