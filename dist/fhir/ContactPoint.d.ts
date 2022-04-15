import * as fhir from '../fhir';
/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 */
export interface IContactPoint extends fhir.IFhirElement {
    /**
     * Time period when the contact point was/is in use.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * Note that rank does not necessarily follow the order in which the contacts are represented in the instance.
     */
    rank?: number | undefined;
    _rank?: fhir.IFhirElement | undefined;
    /**
     * Telecommunications form for contact point - what communications system is required to make use of the contact.
     */
    system?: ContactPointSystemEnum | undefined;
    _system?: fhir.IFhirElement | undefined;
    /**
     * Applications can assume that a contact is current unless it explicitly says that it is temporary or old.
     */
    use?: ContactPointUseEnum | undefined;
    _use?: fhir.IFhirElement | undefined;
    /**
     * Additional text data such as phone extension numbers, or notes about use of the contact are sometimes included in the value.
     */
    value?: string | undefined;
    _value?: fhir.IFhirElement | undefined;
}
/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 */
export declare class ContactPoint extends fhir.FhirElement implements fhir.IContactPoint {
    /**
     * Time period when the contact point was/is in use.
     */
    period?: fhir.Period | undefined;
    /**
     * Note that rank does not necessarily follow the order in which the contacts are represented in the instance.
     */
    rank?: number | undefined;
    _rank?: fhir.FhirElement | undefined;
    /**
     * Telecommunications form for contact point - what communications system is required to make use of the contact.
     */
    system?: ContactPointSystemEnum | undefined;
    _system?: fhir.FhirElement | undefined;
    /**
     * Applications can assume that a contact is current unless it explicitly says that it is temporary or old.
     */
    use?: ContactPointUseEnum | undefined;
    _use?: fhir.FhirElement | undefined;
    /**
     * Additional text data such as phone extension numbers, or notes about use of the contact are sometimes included in the value.
     */
    value?: string | undefined;
    _value?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ContactPoint - initializes required elements to null.
     */
    constructor();
    /**
     * Factory function to create a ContactPoint from an object that MAY NOT contain all required elements.
     */
    static FactoryCreate(source: Partial<fhir.IContactPoint>): ContactPoint;
    /**
     * Check if the current ContactPoint contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ContactPoint from an object that MUST contain all required elements.
     */
    static FactoryCreateStrict(source: fhir.IContactPoint): ContactPoint;
}
/**
 * Code Values for the ContactPoint.system field
 */
export declare enum ContactPointSystemEnum {
    PHONE = "phone",
    FAX = "fax",
    EMAIL = "email",
    PAGER = "pager",
    URL = "url",
    SMS = "sms",
    OTHER = "other"
}
/**
 * Code Values for the ContactPoint.use field
 */
export declare enum ContactPointUseEnum {
    HOME = "home",
    WORK = "work",
    TEMP = "temp",
    OLD = "old",
    MOBILE = "mobile"
}
//# sourceMappingURL=ContactPoint.d.ts.map