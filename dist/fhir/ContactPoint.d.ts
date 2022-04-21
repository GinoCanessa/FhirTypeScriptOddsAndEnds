import * as fhir from '../fhir.js';
import { ContactPointSystemValueSetType, ContactPointSystemValueSetEnum } from '../fhirValueSets/ContactPointSystemValueSet.js';
import { ContactPointUseValueSetType, ContactPointUseValueSetEnum } from '../fhirValueSets/ContactPointUseValueSet.js';
/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 */
export declare type IContactPoint = fhir.IFhirElement & {
    /**
     * Telecommunications form for contact point - what communications system is required to make use of the contact.
     */
    system?: ContactPointSystemValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: ContactPoint.system
     */
    _system?: fhir.IFhirElement | undefined;
    /**
     * Additional text data such as phone extension numbers, or notes about use of the contact are sometimes included in the value.
     */
    value?: string | undefined;
    /**
     * Extended properties for primitive element: ContactPoint.value
     */
    _value?: fhir.IFhirElement | undefined;
    /**
     * Applications can assume that a contact is current unless it explicitly says that it is temporary or old.
     */
    use?: ContactPointUseValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: ContactPoint.use
     */
    _use?: fhir.IFhirElement | undefined;
    /**
     * Note that rank does not necessarily follow the order in which the contacts are represented in the instance.
     */
    rank?: number | undefined;
    /**
     * Extended properties for primitive element: ContactPoint.rank
     */
    _rank?: fhir.IFhirElement | undefined;
    /**
     * Time period when the contact point was/is in use.
     */
    period?: fhir.IPeriod | undefined;
};
/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 */
export declare class ContactPoint extends fhir.FhirElement implements IContactPoint {
    /**
     * Telecommunications form for contact point - what communications system is required to make use of the contact.
     */
    system?: ContactPointSystemValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: ContactPoint.system
     */
    _system?: fhir.FhirElement | undefined;
    /**
     * Additional text data such as phone extension numbers, or notes about use of the contact are sometimes included in the value.
     */
    value?: string | undefined;
    /**
     * Extended properties for primitive element: ContactPoint.value
     */
    _value?: fhir.FhirElement | undefined;
    /**
     * Applications can assume that a contact is current unless it explicitly says that it is temporary or old.
     */
    use?: ContactPointUseValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: ContactPoint.use
     */
    _use?: fhir.FhirElement | undefined;
    /**
     * Note that rank does not necessarily follow the order in which the contacts are represented in the instance.
     */
    rank?: number | undefined;
    /**
     * Extended properties for primitive element: ContactPoint.rank
     */
    _rank?: fhir.FhirElement | undefined;
    /**
     * Time period when the contact point was/is in use.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for ContactPoint - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IContactPoint>);
    /**
     * Required-bound Value Set for system
     */
    systemRequiredValueSet(): ContactPointSystemValueSetType;
    /**
     * Required-bound Value Set for use
     */
    useRequiredValueSet(): ContactPointUseValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=ContactPoint.d.ts.map