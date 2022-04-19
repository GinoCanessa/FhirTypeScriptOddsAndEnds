import * as fhir from '../fhir';
/**
 * Information about how a resource is related to the compartment.
 */
export declare type ICompartmentDefinitionResource = fhir.IBackboneElement & {
    /**
     * The name of a resource supported by the server.
     */
    code: string | null;
    _code?: fhir.IFhirElement | undefined;
    /**
     * Additional documentation about the resource and compartment.
     */
    documentation?: string | undefined;
    _documentation?: fhir.IFhirElement | undefined;
    /**
     * If no search parameters are listed, then the resource is not linked to the compartment.
     */
    param?: string[] | undefined;
    _param?: fhir.IFhirElement[] | undefined;
};
/**
 * A compartment definition that defines how resources are accessed on a server.
 */
export declare type ICompartmentDefinition = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "CompartmentDefinition";
    /**
     * Only the specification can define the compartments that can exist. Servers can choose to support them.
     */
    code: CompartmentDefinitionCodeEnum | null;
    _code?: fhir.IFhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the compartment definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * This description can be used to capture details such as why the compartment definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the compartment definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the compartment definition is presumed to be the predominant language in the place the compartment definition was created).
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of compartment definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhir.IFhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.This is often the same as the code for the parameter, but does not need to be.
     */
    name: string | null;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the compartment definition is the organization or individual primarily responsible for the maintenance and upkeep of the compartment definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the compartment definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * This element does not describe the usage of the compartment definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this compartment definition.
     */
    purpose?: string | undefined;
    _purpose?: fhir.IFhirElement | undefined;
    /**
     * Information about how a resource is related to the compartment.
     */
    resource?: fhir.ICompartmentDefinitionResource[] | undefined;
    /**
     * Servers may define and use compartments to manage logical access without implementing the compartment related syntax.
     */
    search: boolean | null;
    _search?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of compartment definitions that are appropriate for use versus not.
     */
    status: CompartmentDefinitionStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: string | null;
    _url?: fhir.IFhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.IUsageContext[] | undefined;
    /**
     * There may be different compartment definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the compartment definition with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.IFhirElement | undefined;
};
/**
 * Information about how a resource is related to the compartment.
 */
export declare class CompartmentDefinitionResource extends fhir.BackboneElement implements fhir.ICompartmentDefinitionResource {
    /**
     * The name of a resource supported by the server.
     */
    code: string | null;
    _code?: fhir.FhirElement | undefined;
    /**
     * Additional documentation about the resource and compartment.
     */
    documentation?: string | undefined;
    _documentation?: fhir.FhirElement | undefined;
    /**
     * If no search parameters are listed, then the resource is not linked to the compartment.
     */
    param?: string[] | undefined;
    _param?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for CompartmentDefinitionResource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ICompartmentDefinitionResource>);
    /**
     * Check if the current CompartmentDefinitionResource contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a CompartmentDefinitionResource from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ICompartmentDefinitionResource): CompartmentDefinitionResource;
}
/**
 * A compartment definition that defines how resources are accessed on a server.
 */
export declare class CompartmentDefinition extends fhir.DomainResource implements fhir.ICompartmentDefinition {
    /**
     * Resource Type Name
     */
    resourceType: "CompartmentDefinition";
    /**
     * Only the specification can define the compartments that can exist. Servers can choose to support them.
     */
    code: CompartmentDefinitionCodeEnum | null;
    _code?: fhir.FhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the compartment definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * This description can be used to capture details such as why the compartment definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the compartment definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the compartment definition is presumed to be the predominant language in the place the compartment definition was created).
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of compartment definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhir.FhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.This is often the same as the code for the parameter, but does not need to be.
     */
    name: string | null;
    _name?: fhir.FhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the compartment definition is the organization or individual primarily responsible for the maintenance and upkeep of the compartment definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the compartment definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhir.FhirElement | undefined;
    /**
     * This element does not describe the usage of the compartment definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this compartment definition.
     */
    purpose?: string | undefined;
    _purpose?: fhir.FhirElement | undefined;
    /**
     * Information about how a resource is related to the compartment.
     */
    resource?: fhir.CompartmentDefinitionResource[] | undefined;
    /**
     * Servers may define and use compartments to manage logical access without implementing the compartment related syntax.
     */
    search: boolean | null;
    _search?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of compartment definitions that are appropriate for use versus not.
     */
    status: CompartmentDefinitionStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: string | null;
    _url?: fhir.FhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * There may be different compartment definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the compartment definition with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.FhirElement | undefined;
    /**
     * Default constructor for CompartmentDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ICompartmentDefinition>);
    /**
     * Check if the current CompartmentDefinition contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a CompartmentDefinition from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ICompartmentDefinition): CompartmentDefinition;
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
//# sourceMappingURL=CompartmentDefinition.d.ts.map