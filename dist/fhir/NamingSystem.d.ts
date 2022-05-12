import * as fhir from '../fhir.js';
import { NamingsystemIdentifierTypeValueSetType } from '../fhirValueSets/NamingsystemIdentifierTypeValueSet.js';
import { NamingsystemIdentifierTypeValueSetEnum } from '../valueSetEnums.js';
import { PublicationStatusValueSetType } from '../fhirValueSets/PublicationStatusValueSet.js';
import { PublicationStatusValueSetEnum } from '../valueSetEnums.js';
import { NamingsystemTypeValueSetType } from '../fhirValueSets/NamingsystemTypeValueSet.js';
import { NamingsystemTypeValueSetEnum } from '../valueSetEnums.js';
import { IdentifierTypeValueSetType } from '../fhirValueSets/IdentifierTypeValueSet.js';
/**
 * Valid arguments for the NamingSystemUniqueId type.
 */
export interface NamingSystemUniqueIdArgs extends fhir.BackboneElementArgs {
    /**
     * Different identifier types may be used in different types of communications (OIDs for v3, URIs for FHIR, etc.).  Other includes RUIDs from v3, standard v2 code name strings, etc.
     */
    type: NamingsystemIdentifierTypeValueSetEnum | null;
    /**
     * If the value is a URI intended for use as FHIR system identifier, the URI should not contain "\" or "?" or "," since this makes escaping very difficult.
     */
    value: fhir.FhirString | string | undefined;
    /**
     * Indicates whether this identifier is the "preferred" identifier of this type.
     */
    preferred?: fhir.FhirBoolean | boolean | undefined;
    /**
     * e.g. "must be used in Germany" or "was initially published in error with this value".
     */
    comment?: fhir.FhirString | string | undefined;
    /**
     * Within a registry, a given identifier should only be "active" for a single namespace at a time.  (Ideally, an identifier should only ever be associated with a single namespace across all time).
     */
    period?: fhir.PeriodArgs | undefined;
}
/**
 * Multiple identifiers may exist, either due to duplicate registration, regional rules, needs of different communication technologies, etc.
 */
export declare class NamingSystemUniqueId extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Different identifier types may be used in different types of communications (OIDs for v3, URIs for FHIR, etc.).  Other includes RUIDs from v3, standard v2 code name strings, etc.
     */
    type: NamingsystemIdentifierTypeValueSetEnum | null;
    /**
     * If the value is a URI intended for use as FHIR system identifier, the URI should not contain "\" or "?" or "," since this makes escaping very difficult.
     */
    value: fhir.FhirString | null;
    /**
     * Indicates whether this identifier is the "preferred" identifier of this type.
     */
    preferred?: fhir.FhirBoolean | undefined;
    /**
     * e.g. "must be used in Germany" or "was initially published in error with this value".
     */
    comment?: fhir.FhirString | undefined;
    /**
     * Within a registry, a given identifier should only be "active" for a single namespace at a time.  (Ideally, an identifier should only ever be associated with a single namespace across all time).
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for NamingSystemUniqueId - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NamingSystemUniqueIdArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet(): NamingsystemIdentifierTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the NamingSystem type.
 */
export interface NamingSystemArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "NamingSystem" | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.The"symbolic name" for an OID would be captured as an extension.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Allows filtering of naming systems that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Indicates the purpose for the naming system - what kinds of things does it make unique?
     */
    kind: NamingsystemTypeValueSetEnum | null;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the naming system. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: fhir.FhirDateTime | string | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the naming system is the organization or individual primarily responsible for the maintenance and upkeep of the naming system. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the naming system. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This is the primary organization.  Responsibility for some aspects of a namespace may be delegated.
     */
    responsible?: fhir.FhirString | string | undefined;
    /**
     * This will most commonly be used for identifier namespaces, but categories could potentially be useful for code systems and authorities as well.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * This description can be used to capture details such as why the naming system was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the naming system as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the naming system is presumed to be the predominant language in the place the naming system was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the naming system to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower case, etc.
     */
    usage?: fhir.FhirString | string | undefined;
    /**
     * Multiple identifiers may exist, either due to duplicate registration, regional rules, needs of different communication technologies, etc.
     */
    uniqueId: fhir.NamingSystemUniqueIdArgs[] | null;
}
/**
 * A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.
 */
export declare class NamingSystem extends fhir.DomainResource {
    readonly __dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "NamingSystem";
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.The"symbolic name" for an OID would be captured as an extension.
     */
    name: fhir.FhirString | null;
    /**
     * Allows filtering of naming systems that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Indicates the purpose for the naming system - what kinds of things does it make unique?
     */
    kind: NamingsystemTypeValueSetEnum | null;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the naming system. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: fhir.FhirDateTime | null;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the naming system is the organization or individual primarily responsible for the maintenance and upkeep of the naming system. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the naming system. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This is the primary organization.  Responsibility for some aspects of a namespace may be delegated.
     */
    responsible?: fhir.FhirString | undefined;
    /**
     * This will most commonly be used for identifier namespaces, but categories could potentially be useful for code systems and authorities as well.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * This description can be used to capture details such as why the naming system was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the naming system as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the naming system is presumed to be the predominant language in the place the naming system was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the naming system to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower case, etc.
     */
    usage?: fhir.FhirString | undefined;
    /**
     * Multiple identifiers may exist, either due to duplicate registration, regional rules, needs of different communication technologies, etc.
     */
    uniqueId: fhir.NamingSystemUniqueId[] | null;
    /**
     * Default constructor for NamingSystem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NamingSystemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): PublicationStatusValueSetType;
    /**
     * Required-bound Value Set for kind
     */
    static kindRequiredValueSet(): NamingsystemTypeValueSetType;
    /**
     * Extensible-bound Value Set for type
     */
    static typeExtensibleValueSet(): IdentifierTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=NamingSystem.d.ts.map