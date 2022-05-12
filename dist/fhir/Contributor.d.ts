import * as fhir from '../fhir.js';
import { ContributorTypeValueSetType } from '../fhirValueSets/ContributorTypeValueSet.js';
import { ContributorTypeValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the Contributor type.
 */
export interface ContributorArgs extends fhir.FhirElementArgs {
    /**
     * The type of contributor.
     */
    type: ContributorTypeValueSetEnum | null;
    /**
     * The name of the individual or organization responsible for the contribution.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Contact details to assist a user in finding and communicating with the contributor.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
}
/**
 * A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.
 */
export declare class Contributor extends fhir.FhirElement {
    readonly __dataType: string;
    /**
     * The type of contributor.
     */
    type: ContributorTypeValueSetEnum | null;
    /**
     * The name of the individual or organization responsible for the contribution.
     */
    name: fhir.FhirString | null;
    /**
     * Contact details to assist a user in finding and communicating with the contributor.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * Default constructor for Contributor - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContributorArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet(): ContributorTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=Contributor.d.ts.map