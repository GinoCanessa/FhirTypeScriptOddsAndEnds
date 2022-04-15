import * as fhir from '../fhir';
/**
 * A human's name with the ability to identify parts and usage.
 */
export interface IHumanName extends fhir.IFhirElement {
    /**
     * Family Name may be decomposed into specific parts using extensions (de, nl, es related cultures).
     */
    family?: string | undefined;
    _family?: fhir.IFhirElement | undefined;
    /**
     * If only initials are recorded, they may be used in place of the full name parts. Initials may be separated into multiple given names but often aren't due to paractical limitations.  This element is not called "first name" since given names do not always come first.
     */
    given?: string[] | undefined;
    _given?: fhir.IFhirElement[] | undefined;
    /**
     * Indicates the period of time when this name was valid for the named person.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
     */
    prefix?: string[] | undefined;
    _prefix?: fhir.IFhirElement[] | undefined;
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
     */
    suffix?: string[] | undefined;
    _suffix?: fhir.IFhirElement[] | undefined;
    /**
     * Can provide both a text representation and parts. Applications updating a name SHALL ensure that when both text and parts are present,  no content is included in the text that isn't found in a part.
     */
    text?: string | undefined;
    _text?: fhir.IFhirElement | undefined;
    /**
     * Applications can assume that a name is current unless it explicitly says that it is temporary or old.
     */
    use?: HumanNameUseEnum | undefined;
    _use?: fhir.IFhirElement | undefined;
}
/**
 * A human's name with the ability to identify parts and usage.
 */
export declare class HumanName extends fhir.FhirElement implements fhir.IHumanName {
    /**
     * Family Name may be decomposed into specific parts using extensions (de, nl, es related cultures).
     */
    family?: string | undefined;
    _family?: fhir.FhirElement | undefined;
    /**
     * If only initials are recorded, they may be used in place of the full name parts. Initials may be separated into multiple given names but often aren't due to paractical limitations.  This element is not called "first name" since given names do not always come first.
     */
    given?: string[] | undefined;
    _given?: fhir.FhirElement[] | undefined;
    /**
     * Indicates the period of time when this name was valid for the named person.
     */
    period?: fhir.Period | undefined;
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
     */
    prefix?: string[] | undefined;
    _prefix?: fhir.FhirElement[] | undefined;
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
     */
    suffix?: string[] | undefined;
    _suffix?: fhir.FhirElement[] | undefined;
    /**
     * Can provide both a text representation and parts. Applications updating a name SHALL ensure that when both text and parts are present,  no content is included in the text that isn't found in a part.
     */
    text?: string | undefined;
    _text?: fhir.FhirElement | undefined;
    /**
     * Applications can assume that a name is current unless it explicitly says that it is temporary or old.
     */
    use?: HumanNameUseEnum | undefined;
    _use?: fhir.FhirElement | undefined;
    /**
     * Default constructor for HumanName - initializes required elements to null.
     */
    constructor();
    /**
     * Factory function to create a HumanName from an object that MAY NOT contain all required elements.
     */
    static FactoryCreate(source: Partial<fhir.IHumanName>): HumanName;
    /**
     * Check if the current HumanName contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a HumanName from an object that MUST contain all required elements.
     */
    static FactoryCreateStrict(source: fhir.IHumanName): HumanName;
}
/**
 * Code Values for the HumanName.use field
 */
export declare enum HumanNameUseEnum {
    USUAL = "usual",
    OFFICIAL = "official",
    TEMP = "temp",
    NICKNAME = "nickname",
    ANONYMOUS = "anonymous",
    OLD = "old",
    MAIDEN = "maiden"
}
//# sourceMappingURL=HumanName.d.ts.map