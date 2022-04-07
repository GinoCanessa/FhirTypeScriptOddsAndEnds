import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Multiple identifiers may exist, either due to duplicate registration, regional rules, needs of different communication technologies, etc.
 */
export declare class NamingSystemUniqueId extends fhirModels.BackboneElement implements fhirInterfaces.INamingSystemUniqueId {
    /**
     * e.g. "must be used in Germany" or "was initially published in error with this value".
     */
    comment?: string | undefined;
    _comment?: fhirModels.Element | undefined;
    /**
     * Within a registry, a given identifier should only be "active" for a single namespace at a time.  (Ideally, an identifier should only ever be associated with a single namespace across all time).
     */
    period?: fhirModels.Period | undefined;
    /**
     * Indicates whether this identifier is the "preferred" identifier of this type.
     */
    preferred?: boolean | undefined;
    _preferred?: fhirModels.Element | undefined;
    /**
     * Different identifier types may be used in different types of communications (OIDs for v3, URIs for FHIR, etc.).  Other includes RUIDs from v3, standard v2 code name strings, etc.
     */
    type: NamingSystemUniqueIdTypeEnum;
    _type?: fhirModels.Element | undefined;
    /**
     * If the value is a URI intended for use as FHIR system identifier, the URI should not contain "\" or "?" or "," since this makes escaping very difficult.
     */
    value: string;
    _value?: fhirModels.Element | undefined;
    /**
     * Default constructor for NamingSystemUniqueId from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.INamingSystemUniqueId);
}
/**
 * Code Values for the NamingSystem.uniqueId.type field
 */
export declare enum NamingSystemUniqueIdTypeEnum {
    OID = "oid",
    UUID = "uuid",
    URI = "uri",
    OTHER = "other"
}
/**
 * A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.
 */
export declare class NamingSystem extends fhirModels.DomainResource implements fhirInterfaces.INamingSystem {
    /**
     * Resource Type Name
     */
    readonly resourceType = "NamingSystem";
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhirModels.ContactDetail[] | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the naming system. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: string;
    _date?: fhirModels.Element | undefined;
    /**
     * This description can be used to capture details such as why the naming system was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the naming system as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the naming system is presumed to be the predominant language in the place the naming system was created).
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * It may be possible for the naming system to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Indicates the purpose for the naming system - what kinds of things does it make unique?
     */
    kind: NamingSystemKindEnum;
    _kind?: fhirModels.Element | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.The"symbolic name" for an OID would be captured as an extension.
     */
    name: string;
    _name?: fhirModels.Element | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the naming system is the organization or individual primarily responsible for the maintenance and upkeep of the naming system. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the naming system. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhirModels.Element | undefined;
    /**
     * This is the primary organization.  Responsibility for some aspects of a namespace may be delegated.
     */
    responsible?: string | undefined;
    _responsible?: fhirModels.Element | undefined;
    /**
     * Allows filtering of naming systems that are appropriate for use versus not.
     */
    status: NamingSystemStatusEnum;
    _status?: fhirModels.Element | undefined;
    /**
     * This will most commonly be used for identifier namespaces, but categories could potentially be useful for code systems and authorities as well.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Multiple identifiers may exist, either due to duplicate registration, regional rules, needs of different communication technologies, etc.
     */
    uniqueId: fhirModels.NamingSystemUniqueId[];
    /**
     * Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower case, etc.
     */
    usage?: string | undefined;
    _usage?: fhirModels.Element | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhirModels.UsageContext[] | undefined;
    /**
     * Default constructor for NamingSystem from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.INamingSystem);
}
/**
 * Code Values for the NamingSystem.kind field
 */
export declare enum NamingSystemKindEnum {
    CODESYSTEM = "codesystem",
    IDENTIFIER = "identifier",
    ROOT = "root"
}
/**
 * Code Values for the NamingSystem.status field
 */
export declare enum NamingSystemStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=NamingSystem.d.ts.map