import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A human's name with the ability to identify parts and usage.
 */
export interface IHumanName extends fhirInterfaces.IElement {
    /**
     * Family Name may be decomposed into specific parts using extensions (de, nl, es related cultures).
     */
    family?: string | undefined;
    _family?: fhirInterfaces.IElement | undefined;
    /**
     * If only initials are recorded, they may be used in place of the full name parts. Initials may be separated into multiple given names but often aren't due to paractical limitations.  This element is not called "first name" since given names do not always come first.
     */
    given?: string[] | undefined;
    _given?: fhirInterfaces.IElement[] | undefined;
    /**
     * Indicates the period of time when this name was valid for the named person.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
     */
    prefix?: string[] | undefined;
    _prefix?: fhirInterfaces.IElement[] | undefined;
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
     */
    suffix?: string[] | undefined;
    _suffix?: fhirInterfaces.IElement[] | undefined;
    /**
     * Can provide both a text representation and parts. Applications updating a name SHALL ensure that when both text and parts are present,  no content is included in the text that isn't found in a part.
     */
    text?: string | undefined;
    _text?: fhirInterfaces.IElement | undefined;
    /**
     * Applications can assume that a name is current unless it explicitly says that it is temporary or old.
     */
    use?: HumanNameUseEnum | undefined;
    _use?: fhirInterfaces.IElement | undefined;
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
//# sourceMappingURL=IHumanName.d.ts.map