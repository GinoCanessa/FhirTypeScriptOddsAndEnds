/**
 * This value set includes sample Contract Term SubType codes.
 */
export var ContractTermSubtype = {
    /**
     * Terms that go to the very root of a contract.
     */
    contract_term_subtype_Condition: {
        code: "condition",
        display: "Condition",
        system: "http://terminology.hl7.org/CodeSystem/contracttermsubtypecodes"
    },
    /**
     * Breach of which might or might not go to the root of the contract depending upon the nature of the breach
     */
    contract_term_subtype_Innominate: {
        code: "innominate",
        display: "Innominate",
        system: "http://terminology.hl7.org/CodeSystem/contracttermsubtypecodes"
    },
    /**
     * Less imperative than a condition, so the contract will survive a breach
     */
    contract_term_subtype_Warranty: {
        code: "warranty",
        display: "Warranty",
        system: "http://terminology.hl7.org/CodeSystem/contracttermsubtypecodes"
    }
};
