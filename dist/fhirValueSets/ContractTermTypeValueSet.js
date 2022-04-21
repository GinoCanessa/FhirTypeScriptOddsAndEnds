// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contract-term-type|4.0.1
import { Coding } from '../fhir.js';
/**
 * This value set includes sample Contract Term Type codes.
 */
export const ContractTermTypeValueSet = {
    /**
     * statutory: Based on specialized statutes that deal with particular subjects.
     */
    Statutory: new Coding({
        display: "Statutory",
        code: "statutory",
        system: "http://terminology.hl7.org/CodeSystem/contracttermtypecodes",
    }),
    /**
     * subject-to: Execution of the term in the contract is conditional on the execution of other actions.
     */
    SubjectTo: new Coding({
        display: "Subject To",
        code: "subject-to",
        system: "http://terminology.hl7.org/CodeSystem/contracttermtypecodes",
    }),
};
/**
 * This value set includes sample Contract Term Type codes.
 */
export var ContractTermTypeValueSetEnum;
(function (ContractTermTypeValueSetEnum) {
    /**
     * statutory: Based on specialized statutes that deal with particular subjects.
     */
    ContractTermTypeValueSetEnum["Statutory"] = "statutory";
    /**
     * subject-to: Execution of the term in the contract is conditional on the execution of other actions.
     */
    ContractTermTypeValueSetEnum["SubjectTo"] = "subject-to";
})(ContractTermTypeValueSetEnum || (ContractTermTypeValueSetEnum = {}));
//# sourceMappingURL=ContractTermTypeValueSet.js.map