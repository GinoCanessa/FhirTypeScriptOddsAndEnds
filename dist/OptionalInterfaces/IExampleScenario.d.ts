import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Actor participating in the resource.
 */
export interface IExampleScenarioActor extends fhirInterfaces.IBackboneElement {
    /**
     * should this be called ID or acronym?
     */
    actorId?: string | undefined;
    _actorId?: fhirInterfaces.IElement | undefined;
    /**
     * Cardinality: is name and description 1..1?
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Cardinality: is name and description 1..1?
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * The type of actor - person or system.
     */
    type?: ExampleScenarioActorTypeEnum | undefined;
    _type?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the ExampleScenario.actor.type field
 */
export declare enum ExampleScenarioActorTypeEnum {
    PERSON = "person",
    ENTITY = "entity"
}
/**
 * A specific version of the resource.
 */
export interface IExampleScenarioInstanceVersion extends fhirInterfaces.IBackboneElement {
    /**
     * The description of the resource version.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * The identifier of a specific version of a resource.
     */
    versionId?: string | undefined;
    _versionId?: fhirInterfaces.IElement | undefined;
}
/**
 * Resources contained in the instance (e.g. the observations contained in a bundle).
 */
export interface IExampleScenarioInstanceContainedInstance extends fhirInterfaces.IBackboneElement {
    /**
     * Each resource contained in the instance.
     */
    resourceId?: string | undefined;
    _resourceId?: fhirInterfaces.IElement | undefined;
    /**
     * A specific version of a resource contained in the instance.
     */
    versionId?: string | undefined;
    _versionId?: fhirInterfaces.IElement | undefined;
}
/**
 * Each resource and each version that is present in the workflow.
 */
export interface IExampleScenarioInstance extends fhirInterfaces.IBackboneElement {
    /**
     * Resources contained in the instance (e.g. the observations contained in a bundle).
     */
    containedInstance?: fhirInterfaces.IExampleScenarioInstanceContainedInstance[] | undefined;
    /**
     * Human-friendly description of the resource instance.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * A short name for the resource instance.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * The id of the resource for referencing.
     */
    resourceId?: string | undefined;
    _resourceId?: fhirInterfaces.IElement | undefined;
    /**
     * The type of the resource.
     */
    resourceType?: string | undefined;
    _resourceType?: fhirInterfaces.IElement | undefined;
    /**
     * A specific version of the resource.
     */
    version?: fhirInterfaces.IExampleScenarioInstanceVersion[] | undefined;
}
/**
 * Each interaction or action.
 */
export interface IExampleScenarioProcessStepOperation extends fhirInterfaces.IBackboneElement {
    /**
     * A comment to be inserted in the diagram.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Who starts the transaction.
     */
    initiator?: string | undefined;
    _initiator?: fhirInterfaces.IElement | undefined;
    /**
     * Whether the initiator is deactivated right after the transaction.
     */
    initiatorActive?: boolean | undefined;
    _initiatorActive?: fhirInterfaces.IElement | undefined;
    /**
     * The human-friendly name of the interaction.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * The sequential number of the interaction, e.g. 1.2.5.
     */
    number?: string | undefined;
    _number?: fhirInterfaces.IElement | undefined;
    /**
     * Who receives the transaction.
     */
    receiver?: string | undefined;
    _receiver?: fhirInterfaces.IElement | undefined;
    /**
     * Whether the receiver is deactivated right after the transaction.
     */
    receiverActive?: boolean | undefined;
    _receiverActive?: fhirInterfaces.IElement | undefined;
    /**
     * Each resource instance used by the initiator.
     */
    request?: fhirInterfaces.IExampleScenarioInstanceContainedInstance | undefined;
    /**
     * Each resource instance used by the responder.
     */
    response?: fhirInterfaces.IExampleScenarioInstanceContainedInstance | undefined;
    /**
     * The type of operation - CRUD.
     */
    type?: string | undefined;
    _type?: fhirInterfaces.IElement | undefined;
}
/**
 * Indicates an alternative step that can be taken instead of the operations on the base step in exceptional/atypical circumstances.
 */
export interface IExampleScenarioProcessStepAlternative extends fhirInterfaces.IBackboneElement {
    /**
     * A human-readable description of the alternative explaining when the alternative should occur rather than the base step.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * What happens in each alternative option.
     */
    step?: fhirInterfaces.IExampleScenarioProcessStep[] | undefined;
    /**
     * The label to display for the alternative that gives a sense of the circumstance in which the alternative should be invoked.
     */
    title?: string | undefined;
    _title?: fhirInterfaces.IElement | undefined;
}
/**
 * Each step of the process.
 */
export interface IExampleScenarioProcessStep extends fhirInterfaces.IBackboneElement {
    /**
     * Indicates an alternative step that can be taken instead of the operations on the base step in exceptional/atypical circumstances.
     */
    alternative?: fhirInterfaces.IExampleScenarioProcessStepAlternative[] | undefined;
    /**
     * Each interaction or action.
     */
    operation?: fhirInterfaces.IExampleScenarioProcessStepOperation | undefined;
    /**
     * If there is a pause in the flow.
     */
    pause?: boolean | undefined;
    _pause?: fhirInterfaces.IElement | undefined;
    /**
     * Nested process.
     */
    process?: fhirInterfaces.IExampleScenarioProcess[] | undefined;
}
/**
 * Each major process - a group of operations.
 */
export interface IExampleScenarioProcess extends fhirInterfaces.IBackboneElement {
    /**
     * A longer description of the group of operations.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Description of final status after the process ends.
     */
    postConditions?: string | undefined;
    _postConditions?: fhirInterfaces.IElement | undefined;
    /**
     * Description of initial status before the process starts.
     */
    preConditions?: string | undefined;
    _preConditions?: fhirInterfaces.IElement | undefined;
    /**
     * Each step of the process.
     */
    step?: fhirInterfaces.IExampleScenarioProcessStep[] | undefined;
    /**
     * The diagram title of the group of operations.
     */
    title?: string | undefined;
    _title?: fhirInterfaces.IElement | undefined;
}
/**
 * Example of workflow instance.
 */
export interface IExampleScenario extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "ExampleScenario";
    /**
     * Actor participating in the resource.
     */
    actor?: fhirInterfaces.IExampleScenarioActor[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhirInterfaces.IContactDetail[] | undefined;
    /**
     * nullFrequently, the copyright differs between the value set and the codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: string | undefined;
    _copyright?: fhirInterfaces.IElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the example scenario. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * Allows filtering of example scenarios that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhirInterfaces.IElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this example scenario outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Each resource and each version that is present in the workflow.
     */
    instance?: fhirInterfaces.IExampleScenarioInstance[] | undefined;
    /**
     * It may be possible for the example scenario to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Each major process - a group of operations.
     */
    process?: fhirInterfaces.IExampleScenarioProcess[] | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the example scenario is the organization or individual primarily responsible for the maintenance and upkeep of the example scenario. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the example scenario. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhirInterfaces.IElement | undefined;
    /**
     * This element does not describe the usage of the example scenario. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this example scenario.
     */
    purpose?: string | undefined;
    _purpose?: fhirInterfaces.IElement | undefined;
    /**
     * Allows filtering of example scenarios that are appropriate for use versus not.
     */
    status?: ExampleScenarioStatusEnum | undefined;
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
     * There may be different example scenario instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the example scenario with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirInterfaces.IElement | undefined;
    /**
     * Another nested workflow.
     */
    workflow?: string[] | undefined;
    _workflow?: fhirInterfaces.IElement[] | undefined;
}
/**
 * Code Values for the ExampleScenario.status field
 */
export declare enum ExampleScenarioStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=IExampleScenario.d.ts.map