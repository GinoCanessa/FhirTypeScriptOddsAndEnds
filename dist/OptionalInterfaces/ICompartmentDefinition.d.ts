import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Information about how a resource is related to the compartment.
 */
export interface ICompartmentDefinitionResource extends fhirInterfaces.IBackboneElement {
    /**
     * The name of a resource supported by the server.
     */
    code?: string | undefined;
    _code?: fhirInterfaces.IElement | undefined;
    /**
     * Additional documentation about the resource and compartment.
     */
    documentation?: string | undefined;
    _documentation?: fhirInterfaces.IElement | undefined;
    /**
     * If no search parameters are listed, then the resource is not linked to the compartment.
     */
    param?: string[] | undefined;
    _param?: fhirInterfaces.IElement[] | undefined;
}
/**
 * A compartment definition that defines how resources are accessed on a server.
 */
export interface ICompartmentDefinition extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "CompartmentDefinition";
    /**
     * Only the specification can define the compartments that can exist. Servers can choose to support them.
     */
    code?: CompartmentDefinitionCodeEnum | undefined;
    _code?: fhirInterfaces.IElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhirInterfaces.IContactDetail[] | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the compartment definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * This description can be used to capture details such as why the compartment definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the compartment definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the compartment definition is presumed to be the predominant language in the place the compartment definition was created).
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Allows filtering of compartment definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhirInterfaces.IElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.This is often the same as the code for the parameter, but does not need to be.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the compartment definition is the organization or individual primarily responsible for the maintenance and upkeep of the compartment definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the compartment definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhirInterfaces.IElement | undefined;
    /**
     * This element does not describe the usage of the compartment definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this compartment definition.
     */
    purpose?: string | undefined;
    _purpose?: fhirInterfaces.IElement | undefined;
    /**
     * Information about how a resource is related to the compartment.
     */
    resource?: fhirInterfaces.ICompartmentDefinitionResource[] | undefined;
    /**
     * Servers may define and use compartments to manage logical access without implementing the compartment related syntax.
     */
    search?: boolean | undefined;
    _search?: fhirInterfaces.IElement | undefined;
    /**
     * Allows filtering of compartment definitions that are appropriate for use versus not.
     */
    status?: CompartmentDefinitionStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    _url?: fhirInterfaces.IElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhirInterfaces.IUsageContext[] | undefined;
    /**
     * There may be different compartment definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the compartment definition with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the CompartmentDefinition.code field
 */
export declare enum CompartmentDefinitionCodeEnum {
    PATIENT = "Patient",
    ENCOUNTER = "Encounter",
    RELATEDPERSON = "RelatedPerson",
    PRACTITIONER = "Practitioner",
    DEVICE = "Device"
}
/**
 * Code Values for the CompartmentDefinition.status field
 */
export declare enum CompartmentDefinitionStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=ICompartmentDefinition.d.ts.map