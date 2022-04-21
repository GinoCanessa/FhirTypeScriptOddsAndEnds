import * as fhir from '../fhir.js';
import { NamingsystemIdentifierTypeValueSetType, NamingsystemIdentifierTypeValueSetEnum } from '../fhirValueSets/NamingsystemIdentifierTypeValueSet.js';
import { PublicationStatusValueSetType, PublicationStatusValueSetEnum } from '../fhirValueSets/PublicationStatusValueSet.js';
import { NamingsystemTypeValueSetType, NamingsystemTypeValueSetEnum } from '../fhirValueSets/NamingsystemTypeValueSet.js';
import { IdentifierTypeValueSetType } from '../fhirValueSets/IdentifierTypeValueSet.js';
/**
 * Multiple identifiers may exist, either due to duplicate registration, regional rules, needs of different communication technologies, etc.
 */
export declare type INamingSystemUniqueId = fhir.IBackboneElement & {
    /**
     * Different identifier types may be used in different types of communications (OIDs for v3, URIs for FHIR, etc.).  Other includes RUIDs from v3, standard v2 code name strings, etc.
     */
    type: NamingsystemIdentifierTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: NamingSystem.uniqueId.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * If the value is a URI intended for use as FHIR system identifier, the URI should not contain "\" or "?" or "," since this makes escaping very difficult.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: NamingSystem.uniqueId.value
     */
    _value?: fhir.IFhirElement | undefined;
    /**
     * Indicates whether this identifier is the "preferred" identifier of this type.
     */
    preferred?: boolean | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.uniqueId.preferred
     */
    _preferred?: fhir.IFhirElement | undefined;
    /**
     * e.g. "must be used in Germany" or "was initially published in error with this value".
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.uniqueId.comment
     */
    _comment?: fhir.IFhirElement | undefined;
    /**
     * Within a registry, a given identifier should only be "active" for a single namespace at a time.  (Ideally, an identifier should only ever be associated with a single namespace across all time).
     */
    period?: fhir.IPeriod | undefined;
};
/**
 * A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.
 */
export declare type INamingSystem = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "NamingSystem";
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.The"symbolic name" for an OID would be captured as an extension.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: NamingSystem.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of naming systems that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: NamingSystem.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Indicates the purpose for the naming system - what kinds of things does it make unique?
     */
    kind: NamingsystemTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: NamingSystem.kind
     */
    _kind?: fhir.IFhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the naming system. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: string | null;
    /**
     * Extended properties for primitive element: NamingSystem.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the naming system is the organization or individual primarily responsible for the maintenance and upkeep of the naming system. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the naming system. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.publisher
     */
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * This is the primary organization.  Responsibility for some aspects of a namespace may be delegated.
     */
    responsible?: string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.responsible
     */
    _responsible?: fhir.IFhirElement | undefined;
    /**
     * This will most commonly be used for identifier namespaces, but categories could potentially be useful for code systems and authorities as well.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * This description can be used to capture details such as why the naming system was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the naming system as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the naming system is presumed to be the predominant language in the place the naming system was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.IUsageContext[] | undefined;
    /**
     * It may be possible for the naming system to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower case, etc.
     */
    usage?: string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.usage
     */
    _usage?: fhir.IFhirElement | undefined;
    /**
     * Multiple identifiers may exist, either due to duplicate registration, regional rules, needs of different communication technologies, etc.
     */
    uniqueId: fhir.INamingSystemUniqueId[] | null;
};
/**
 * Multiple identifiers may exist, either due to duplicate registration, regional rules, needs of different communication technologies, etc.
 */
export declare class NamingSystemUniqueId extends fhir.BackboneElement implements INamingSystemUniqueId {
    /**
     * Different identifier types may be used in different types of communications (OIDs for v3, URIs for FHIR, etc.).  Other includes RUIDs from v3, standard v2 code name strings, etc.
     */
    type: NamingsystemIdentifierTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: NamingSystem.uniqueId.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * If the value is a URI intended for use as FHIR system identifier, the URI should not contain "\" or "?" or "," since this makes escaping very difficult.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: NamingSystem.uniqueId.value
     */
    _value?: fhir.FhirElement | undefined;
    /**
     * Indicates whether this identifier is the "preferred" identifier of this type.
     */
    preferred?: boolean | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.uniqueId.preferred
     */
    _preferred?: fhir.FhirElement | undefined;
    /**
     * e.g. "must be used in Germany" or "was initially published in error with this value".
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.uniqueId.comment
     */
    _comment?: fhir.FhirElement | undefined;
    /**
     * Within a registry, a given identifier should only be "active" for a single namespace at a time.  (Ideally, an identifier should only ever be associated with a single namespace across all time).
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for NamingSystemUniqueId - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<INamingSystemUniqueId>);
    /**
     * Required-bound Value Set for type
     */
    typeRequiredValueSet(): NamingsystemIdentifierTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.
 */
export declare class NamingSystem extends fhir.DomainResource implements INamingSystem {
    /**
     * Resource Type Name
     */
    resourceType: "NamingSystem";
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.The"symbolic name" for an OID would be captured as an extension.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: NamingSystem.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of naming systems that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: NamingSystem.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Indicates the purpose for the naming system - what kinds of things does it make unique?
     */
    kind: NamingsystemTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: NamingSystem.kind
     */
    _kind?: fhir.FhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the naming system. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: string | null;
    /**
     * Extended properties for primitive element: NamingSystem.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the naming system is the organization or individual primarily responsible for the maintenance and upkeep of the naming system. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the naming system. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.publisher
     */
    _publisher?: fhir.FhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This is the primary organization.  Responsibility for some aspects of a namespace may be delegated.
     */
    responsible?: string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.responsible
     */
    _responsible?: fhir.FhirElement | undefined;
    /**
     * This will most commonly be used for identifier namespaces, but categories could potentially be useful for code systems and authorities as well.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * This description can be used to capture details such as why the naming system was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the naming system as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the naming system is presumed to be the predominant language in the place the naming system was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.description
     */
    _description?: fhir.FhirElement | undefined;
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
    usage?: string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.usage
     */
    _usage?: fhir.FhirElement | undefined;
    /**
     * Multiple identifiers may exist, either due to duplicate registration, regional rules, needs of different communication technologies, etc.
     */
    uniqueId: fhir.NamingSystemUniqueId[] | null;
    /**
     * Default constructor for NamingSystem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<INamingSystem>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): PublicationStatusValueSetType;
    /**
     * Required-bound Value Set for kind
     */
    kindRequiredValueSet(): NamingsystemTypeValueSetType;
    /**
     * Extensible-bound Value Set for type
     */
    typeExtensibleValueSet(): IdentifierTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=NamingSystem.d.ts.map