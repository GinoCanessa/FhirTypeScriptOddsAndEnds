// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contributor-type|4.0.1
import { Coding } from '../fhir.js';
/**
 * The type of contributor.
 */
export const ContributorTypeValueSet = {
    /**
     * author: An author of the content of the module.
     */
    Author: new Coding({
        display: "Author",
        code: "author",
        system: "http://hl7.org/fhir/contributor-type",
    }),
    /**
     * editor: An editor of the content of the module.
     */
    Editor: new Coding({
        display: "Editor",
        code: "editor",
        system: "http://hl7.org/fhir/contributor-type",
    }),
    /**
     * endorser: An endorser of the content of the module.
     */
    Endorser: new Coding({
        display: "Endorser",
        code: "endorser",
        system: "http://hl7.org/fhir/contributor-type",
    }),
    /**
     * reviewer: A reviewer of the content of the module.
     */
    Reviewer: new Coding({
        display: "Reviewer",
        code: "reviewer",
        system: "http://hl7.org/fhir/contributor-type",
    }),
};
/**
 * The type of contributor.
 */
export var ContributorTypeValueSetEnum;
(function (ContributorTypeValueSetEnum) {
    /**
     * author: An author of the content of the module.
     */
    ContributorTypeValueSetEnum["Author"] = "author";
    /**
     * editor: An editor of the content of the module.
     */
    ContributorTypeValueSetEnum["Editor"] = "editor";
    /**
     * endorser: An endorser of the content of the module.
     */
    ContributorTypeValueSetEnum["Endorser"] = "endorser";
    /**
     * reviewer: A reviewer of the content of the module.
     */
    ContributorTypeValueSetEnum["Reviewer"] = "reviewer";
})(ContributorTypeValueSetEnum || (ContributorTypeValueSetEnum = {}));
//# sourceMappingURL=ContributorTypeValueSet.js.map