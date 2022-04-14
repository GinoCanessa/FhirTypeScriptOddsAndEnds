import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Actor participating in the resource.
 */
export declare class ExampleScenarioActor extends fhirModels.BackboneElement implements fhirInterfaces.IExampleScenarioActor {
    /**
     * should this be called ID or acronym?
     */
    actorId?: string | undefined;
    _actorId?: fhirModels.Element | undefined;
    /**
     * Cardinality: is name and description 1..1?
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Cardinality: is name and description 1..1?
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * The type of actor - person or system.
     */
    type?: ExampleScenarioActorTypeEnum | undefined;
    _type?: fhirModels.Element | undefined;
    /**
     * Default constructor for ExampleScenarioActor from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExampleScenarioActor>);
    /**
     * Factory function to create a ExampleScenarioActor from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExampleScenarioActor): ExampleScenarioActor;
    /**
     * Check if the current ExampleScenarioActor contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class ExampleScenarioInstanceVersion extends fhirModels.BackboneElement implements fhirInterfaces.IExampleScenarioInstanceVersion {
    /**
     * The description of the resource version.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * The identifier of a specific version of a resource.
     */
    versionId?: string | undefined;
    _versionId?: fhirModels.Element | undefined;
    /**
     * Default constructor for ExampleScenarioInstanceVersion from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExampleScenarioInstanceVersion>);
    /**
     * Factory function to create a ExampleScenarioInstanceVersion from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExampleScenarioInstanceVersion): ExampleScenarioInstanceVersion;
    /**
     * Check if the current ExampleScenarioInstanceVersion contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Resources contained in the instance (e.g. the observations contained in a bundle).
 */
export declare class ExampleScenarioInstanceContainedInstance extends fhirModels.BackboneElement implements fhirInterfaces.IExampleScenarioInstanceContainedInstance {
    /**
     * Each resource contained in the instance.
     */
    resourceId?: string | undefined;
    _resourceId?: fhirModels.Element | undefined;
    /**
     * A specific version of a resource contained in the instance.
     */
    versionId?: string | undefined;
    _versionId?: fhirModels.Element | undefined;
    /**
     * Default constructor for ExampleScenarioInstanceContainedInstance from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExampleScenarioInstanceContainedInstance>);
    /**
     * Factory function to create a ExampleScenarioInstanceContainedInstance from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExampleScenarioInstanceContainedInstance): ExampleScenarioInstanceContainedInstance;
    /**
     * Check if the current ExampleScenarioInstanceContainedInstance contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Each resource and each version that is present in the workflow.
 */
export declare class ExampleScenarioInstance extends fhirModels.BackboneElement implements fhirInterfaces.IExampleScenarioInstance {
    /**
     * Resources contained in the instance (e.g. the observations contained in a bundle).
     */
    containedInstance?: fhirModels.ExampleScenarioInstanceContainedInstance[] | undefined;
    /**
     * Human-friendly description of the resource instance.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * A short name for the resource instance.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * The id of the resource for referencing.
     */
    resourceId?: string | undefined;
    _resourceId?: fhirModels.Element | undefined;
    /**
     * The type of the resource.
     */
    resourceType?: string | undefined;
    _resourceType?: fhirModels.Element | undefined;
    /**
     * A specific version of the resource.
     */
    version?: fhirModels.ExampleScenarioInstanceVersion[] | undefined;
    /**
     * Default constructor for ExampleScenarioInstance from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExampleScenarioInstance>);
    /**
     * Factory function to create a ExampleScenarioInstance from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExampleScenarioInstance): ExampleScenarioInstance;
    /**
     * Check if the current ExampleScenarioInstance contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Each interaction or action.
 */
export declare class ExampleScenarioProcessStepOperation extends fhirModels.BackboneElement implements fhirInterfaces.IExampleScenarioProcessStepOperation {
    /**
     * A comment to be inserted in the diagram.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Who starts the transaction.
     */
    initiator?: string | undefined;
    _initiator?: fhirModels.Element | undefined;
    /**
     * Whether the initiator is deactivated right after the transaction.
     */
    initiatorActive?: boolean | undefined;
    _initiatorActive?: fhirModels.Element | undefined;
    /**
     * The human-friendly name of the interaction.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * The sequential number of the interaction, e.g. 1.2.5.
     */
    number?: string | undefined;
    _number?: fhirModels.Element | undefined;
    /**
     * Who receives the transaction.
     */
    receiver?: string | undefined;
    _receiver?: fhirModels.Element | undefined;
    /**
     * Whether the receiver is deactivated right after the transaction.
     */
    receiverActive?: boolean | undefined;
    _receiverActive?: fhirModels.Element | undefined;
    /**
     * Each resource instance used by the initiator.
     */
    request?: fhirModels.ExampleScenarioInstanceContainedInstance | undefined;
    /**
     * Each resource instance used by the responder.
     */
    response?: fhirModels.ExampleScenarioInstanceContainedInstance | undefined;
    /**
     * The type of operation - CRUD.
     */
    type?: string | undefined;
    _type?: fhirModels.Element | undefined;
    /**
     * Default constructor for ExampleScenarioProcessStepOperation from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExampleScenarioProcessStepOperation>);
    /**
     * Factory function to create a ExampleScenarioProcessStepOperation from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExampleScenarioProcessStepOperation): ExampleScenarioProcessStepOperation;
    /**
     * Check if the current ExampleScenarioProcessStepOperation contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Indicates an alternative step that can be taken instead of the operations on the base step in exceptional/atypical circumstances.
 */
export declare class ExampleScenarioProcessStepAlternative extends fhirModels.BackboneElement implements fhirInterfaces.IExampleScenarioProcessStepAlternative {
    /**
     * A human-readable description of the alternative explaining when the alternative should occur rather than the base step.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * What happens in each alternative option.
     */
    step?: fhirModels.ExampleScenarioProcessStep[] | undefined;
    /**
     * The label to display for the alternative that gives a sense of the circumstance in which the alternative should be invoked.
     */
    title?: string | undefined;
    _title?: fhirModels.Element | undefined;
    /**
     * Default constructor for ExampleScenarioProcessStepAlternative from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExampleScenarioProcessStepAlternative>);
    /**
     * Factory function to create a ExampleScenarioProcessStepAlternative from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExampleScenarioProcessStepAlternative): ExampleScenarioProcessStepAlternative;
    /**
     * Check if the current ExampleScenarioProcessStepAlternative contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Each step of the process.
 */
export declare class ExampleScenarioProcessStep extends fhirModels.BackboneElement implements fhirInterfaces.IExampleScenarioProcessStep {
    /**
     * Indicates an alternative step that can be taken instead of the operations on the base step in exceptional/atypical circumstances.
     */
    alternative?: fhirModels.ExampleScenarioProcessStepAlternative[] | undefined;
    /**
     * Each interaction or action.
     */
    operation?: fhirModels.ExampleScenarioProcessStepOperation | undefined;
    /**
     * If there is a pause in the flow.
     */
    pause?: boolean | undefined;
    _pause?: fhirModels.Element | undefined;
    /**
     * Nested process.
     */
    process?: fhirModels.ExampleScenarioProcess[] | undefined;
    /**
     * Default constructor for ExampleScenarioProcessStep from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExampleScenarioProcessStep>);
    /**
     * Factory function to create a ExampleScenarioProcessStep from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExampleScenarioProcessStep): ExampleScenarioProcessStep;
    /**
     * Check if the current ExampleScenarioProcessStep contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Each major process - a group of operations.
 */
export declare class ExampleScenarioProcess extends fhirModels.BackboneElement implements fhirInterfaces.IExampleScenarioProcess {
    /**
     * A longer description of the group of operations.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Description of final status after the process ends.
     */
    postConditions?: string | undefined;
    _postConditions?: fhirModels.Element | undefined;
    /**
     * Description of initial status before the process starts.
     */
    preConditions?: string | undefined;
    _preConditions?: fhirModels.Element | undefined;
    /**
     * Each step of the process.
     */
    step?: fhirModels.ExampleScenarioProcessStep[] | undefined;
    /**
     * The diagram title of the group of operations.
     */
    title?: string | undefined;
    _title?: fhirModels.Element | undefined;
    /**
     * Default constructor for ExampleScenarioProcess from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExampleScenarioProcess>);
    /**
     * Factory function to create a ExampleScenarioProcess from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExampleScenarioProcess): ExampleScenarioProcess;
    /**
     * Check if the current ExampleScenarioProcess contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Example of workflow instance.
 */
export declare class ExampleScenario extends fhirModels.DomainResource implements fhirInterfaces.IExampleScenario {
    /**
     * Resource Type Name
     */
    readonly resourceType = "ExampleScenario";
    /**
     * Actor participating in the resource.
     */
    actor?: fhirModels.ExampleScenarioActor[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhirModels.ContactDetail[] | undefined;
    /**
     * nullFrequently, the copyright differs between the value set and the codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: string | undefined;
    _copyright?: fhirModels.Element | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the example scenario. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * Allows filtering of example scenarios that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhirModels.Element | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this example scenario outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Each resource and each version that is present in the workflow.
     */
    instance?: fhirModels.ExampleScenarioInstance[] | undefined;
    /**
     * It may be possible for the example scenario to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Each major process - a group of operations.
     */
    process?: fhirModels.ExampleScenarioProcess[] | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the example scenario is the organization or individual primarily responsible for the maintenance and upkeep of the example scenario. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the example scenario. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhirModels.Element | undefined;
    /**
     * This element does not describe the usage of the example scenario. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this example scenario.
     */
    purpose?: string | undefined;
    _purpose?: fhirModels.Element | undefined;
    /**
     * Allows filtering of example scenarios that are appropriate for use versus not.
     */
    status?: ExampleScenarioStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    _url?: fhirModels.Element | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhirModels.UsageContext[] | undefined;
    /**
     * There may be different example scenario instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the example scenario with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirModels.Element | undefined;
    /**
     * Another nested workflow.
     */
    workflow?: string[] | undefined;
    _workflow?: fhirModels.Element[] | undefined;
    /**
     * Default constructor for ExampleScenario from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IExampleScenario>);
    /**
     * Factory function to create a ExampleScenario from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IExampleScenario): ExampleScenario;
    /**
     * Check if the current ExampleScenario contains all required elements.
     */
    checkRequiredElements(): string[];
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
//# sourceMappingURL=ExampleScenario.d.ts.map