import * as fhir from '../fhir.js';
import { ContactPointSystemValueSetType } from '../fhirValueSets/ContactPointSystemValueSet.js';
import { ContactPointSystemValueSetEnum } from '../valueSetEnums.js';
import { ContactPointUseValueSetType } from '../fhirValueSets/ContactPointUseValueSet.js';
import { ContactPointUseValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the ContactPoint type.
 */
export interface ContactPointArgs extends fhir.FhirElementArgs {
    /**
     * Telecommunications form for contact point - what communications system is required to make use of the contact.
     */
    system?: ContactPointSystemValueSetEnum | undefined;
    /**
     * Additional text data such as phone extension numbers, or notes about use of the contact are sometimes included in the value.
     */
    value?: fhir.FhirString | string | undefined;
    /**
     * Applications can assume that a contact is current unless it explicitly says that it is temporary or old.
     */
    use?: ContactPointUseValueSetEnum | undefined;
    /**
     * Note that rank does not necessarily follow the order in which the contacts are represented in the instance.
     */
    rank?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Time period when the contact point was/is in use.
     */
    period?: fhir.PeriodArgs | undefined;
}
/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 */
export declare class ContactPoint extends fhir.FhirElement {
    readonly __dataType: string;
    /**
     * Telecommunications form for contact point - what communications system is required to make use of the contact.
     */
    system?: ContactPointSystemValueSetEnum | undefined;
    /**
     * Additional text data such as phone extension numbers, or notes about use of the contact are sometimes included in the value.
     */
    value?: fhir.FhirString | undefined;
    /**
     * Applications can assume that a contact is current unless it explicitly says that it is temporary or old.
     */
    use?: ContactPointUseValueSetEnum | undefined;
    /**
     * Note that rank does not necessarily follow the order in which the contacts are represented in the instance.
     */
    rank?: fhir.FhirPositiveInt | undefined;
    /**
     * Time period when the contact point was/is in use.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for ContactPoint - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContactPointArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for system
     */
    static systemRequiredValueSet(): ContactPointSystemValueSetType;
    /**
     * Required-bound Value Set for use
     */
    static useRequiredValueSet(): ContactPointUseValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=ContactPoint.d.ts.map