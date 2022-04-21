import * as fhir from '../fhir.js';
import { NameUseValueSetType, NameUseValueSetEnum } from '../fhirValueSets/NameUseValueSet.js';
/**
 * A human's name with the ability to identify parts and usage.
 */
export declare type IHumanName = fhir.IFhirElement & {
    /**
     * Applications can assume that a name is current unless it explicitly says that it is temporary or old.
     */
    use?: NameUseValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: HumanName.use
     */
    _use?: fhir.IFhirElement | undefined;
    /**
     * Can provide both a text representation and parts. Applications updating a name SHALL ensure that when both text and parts are present,  no content is included in the text that isn't found in a part.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: HumanName.text
     */
    _text?: fhir.IFhirElement | undefined;
    /**
     * Family Name may be decomposed into specific parts using extensions (de, nl, es related cultures).
     */
    family?: string | undefined;
    /**
     * Extended properties for primitive element: HumanName.family
     */
    _family?: fhir.IFhirElement | undefined;
    /**
     * If only initials are recorded, they may be used in place of the full name parts. Initials may be separated into multiple given names but often aren't due to paractical limitations.  This element is not called "first name" since given names do not always come first.
     */
    given?: string[] | undefined;
    /**
     * Extended properties for primitive element: HumanName.given
     */
    _given?: fhir.IFhirElement[] | undefined;
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
     */
    prefix?: string[] | undefined;
    /**
     * Extended properties for primitive element: HumanName.prefix
     */
    _prefix?: fhir.IFhirElement[] | undefined;
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
     */
    suffix?: string[] | undefined;
    /**
     * Extended properties for primitive element: HumanName.suffix
     */
    _suffix?: fhir.IFhirElement[] | undefined;
    /**
     * Indicates the period of time when this name was valid for the named person.
     */
    period?: fhir.IPeriod | undefined;
};
/**
 * A human's name with the ability to identify parts and usage.
 */
export declare class HumanName extends fhir.FhirElement implements IHumanName {
    /**
     * Applications can assume that a name is current unless it explicitly says that it is temporary or old.
     */
    use?: NameUseValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: HumanName.use
     */
    _use?: fhir.FhirElement | undefined;
    /**
     * Can provide both a text representation and parts. Applications updating a name SHALL ensure that when both text and parts are present,  no content is included in the text that isn't found in a part.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: HumanName.text
     */
    _text?: fhir.FhirElement | undefined;
    /**
     * Family Name may be decomposed into specific parts using extensions (de, nl, es related cultures).
     */
    family?: string | undefined;
    /**
     * Extended properties for primitive element: HumanName.family
     */
    _family?: fhir.FhirElement | undefined;
    /**
     * If only initials are recorded, they may be used in place of the full name parts. Initials may be separated into multiple given names but often aren't due to paractical limitations.  This element is not called "first name" since given names do not always come first.
     */
    given?: string[] | undefined;
    /**
     * Extended properties for primitive element: HumanName.given
     */
    _given?: fhir.FhirElement[] | undefined;
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
     */
    prefix?: string[] | undefined;
    /**
     * Extended properties for primitive element: HumanName.prefix
     */
    _prefix?: fhir.FhirElement[] | undefined;
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
     */
    suffix?: string[] | undefined;
    /**
     * Extended properties for primitive element: HumanName.suffix
     */
    _suffix?: fhir.FhirElement[] | undefined;
    /**
     * Indicates the period of time when this name was valid for the named person.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for HumanName - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IHumanName>);
    /**
     * Required-bound Value Set for use
     */
    useRequiredValueSet(): NameUseValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
    /**
     * Convert a HumanName into a displayable string
     */
    toDisplay(familyFirst?: boolean, includeAnnotations?: boolean): string;
}
//# sourceMappingURL=HumanName.d.ts.map