import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A human's name with the ability to identify parts and usage.
 */
export declare class HumanName extends fhirModels.Element implements fhirInterfaces.IHumanName {
    /**
     * Family Name may be decomposed into specific parts using extensions (de, nl, es related cultures).
     */
    family?: string | undefined;
    _family?: fhirModels.Element | undefined;
    /**
     * If only initials are recorded, they may be used in place of the full name parts. Initials may be separated into multiple given names but often aren't due to paractical limitations.  This element is not called "first name" since given names do not always come first.
     */
    given?: string[] | undefined;
    _given?: fhirModels.Element[] | undefined;
    /**
     * Indicates the period of time when this name was valid for the named person.
     */
    period?: fhirModels.Period | undefined;
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
     */
    prefix?: string[] | undefined;
    _prefix?: fhirModels.Element[] | undefined;
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
     */
    suffix?: string[] | undefined;
    _suffix?: fhirModels.Element[] | undefined;
    /**
     * Can provide both a text representation and parts. Applications updating a name SHALL ensure that when both text and parts are present,  no content is included in the text that isn't found in a part.
     */
    text?: string | undefined;
    _text?: fhirModels.Element | undefined;
    /**
     * Applications can assume that a name is current unless it explicitly says that it is temporary or old.
     */
    use?: HumanNameUseEnum | undefined;
    _use?: fhirModels.Element | undefined;
    /**
     * Default constructor for HumanName from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IHumanName>);
    /**
     * Factory function to create a HumanName from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IHumanName): HumanName;
    /**
     * Check if the current HumanName contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Convert a HumanName into a displayable string
     */
    toDisplay(familyFirst?: boolean, includeAnnotations?: boolean): string;
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