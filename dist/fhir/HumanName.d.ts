import * as fhir from '../fhir.js';
import { NameUseValueSetType } from '../fhirValueSets/NameUseValueSet.js';
import { NameUseValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the HumanName type.
 */
export interface HumanNameArgs extends fhir.FhirElementArgs {
    /**
     * Applications can assume that a name is current unless it explicitly says that it is temporary or old.
     */
    use?: NameUseValueSetEnum | undefined;
    /**
     * Can provide both a text representation and parts. Applications updating a name SHALL ensure that when both text and parts are present,  no content is included in the text that isn't found in a part.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Family Name may be decomposed into specific parts using extensions (de, nl, es related cultures).
     */
    family?: fhir.FhirString | string | undefined;
    /**
     * If only initials are recorded, they may be used in place of the full name parts. Initials may be separated into multiple given names but often aren't due to paractical limitations.  This element is not called "first name" since given names do not always come first.
     */
    given?: fhir.FhirString[] | string[] | undefined;
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
     */
    prefix?: fhir.FhirString[] | string[] | undefined;
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
     */
    suffix?: fhir.FhirString[] | string[] | undefined;
    /**
     * Indicates the period of time when this name was valid for the named person.
     */
    period?: fhir.PeriodArgs | undefined;
}
/**
 * A human's name with the ability to identify parts and usage.
 */
export declare class HumanName extends fhir.FhirElement {
    readonly __dataType: string;
    /**
     * Applications can assume that a name is current unless it explicitly says that it is temporary or old.
     */
    use?: NameUseValueSetEnum | undefined;
    /**
     * Can provide both a text representation and parts. Applications updating a name SHALL ensure that when both text and parts are present,  no content is included in the text that isn't found in a part.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Family Name may be decomposed into specific parts using extensions (de, nl, es related cultures).
     */
    family?: fhir.FhirString | undefined;
    /**
     * If only initials are recorded, they may be used in place of the full name parts. Initials may be separated into multiple given names but often aren't due to paractical limitations.  This element is not called "first name" since given names do not always come first.
     */
    given?: fhir.FhirString[] | undefined;
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
     */
    prefix?: fhir.FhirString[] | undefined;
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
     */
    suffix?: fhir.FhirString[] | undefined;
    /**
     * Indicates the period of time when this name was valid for the named person.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for HumanName - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<HumanNameArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for use
     */
    static useRequiredValueSet(): NameUseValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
    /**
     * Convert a HumanName into a displayable string
     */
    toDisplay(familyFirst?: boolean, includeAnnotations?: boolean): string;
}
//# sourceMappingURL=HumanName.d.ts.map