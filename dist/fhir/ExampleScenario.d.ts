import * as fhir from '../fhir.js';
import { ExamplescenarioActorTypeValueSetType, ExamplescenarioActorTypeValueSetEnum } from '../fhirValueSets/ExamplescenarioActorTypeValueSet.js';
import { ResourceTypesValueSetType } from '../fhirValueSets/ResourceTypesValueSet.js';
import { PublicationStatusValueSetType, PublicationStatusValueSetEnum } from '../fhirValueSets/PublicationStatusValueSet.js';
/**
 * Actor participating in the resource.
 */
export declare type IExampleScenarioActor = fhir.IBackboneElement & {
    /**
     * should this be called ID or acronym?
     */
    actorId: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.actor.actorId
     */
    _actorId?: fhir.IFhirElement | undefined;
    /**
     * The type of actor - person or system.
     */
    type: ExamplescenarioActorTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: ExampleScenario.actor.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * Cardinality: is name and description 1..1?
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.actor.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * Cardinality: is name and description 1..1?
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.actor.description
     */
    _description?: fhir.IFhirElement | undefined;
};
/**
 * A specific version of the resource.
 */
export declare type IExampleScenarioInstanceVersion = fhir.IBackboneElement & {
    /**
     * The identifier of a specific version of a resource.
     */
    versionId: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.version.versionId
     */
    _versionId?: fhir.IFhirElement | undefined;
    /**
     * The description of the resource version.
     */
    description: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.version.description
     */
    _description?: fhir.IFhirElement | undefined;
};
/**
 * Resources contained in the instance (e.g. the observations contained in a bundle).
 */
export declare type IExampleScenarioInstanceContainedInstance = fhir.IBackboneElement & {
    /**
     * Each resource contained in the instance.
     */
    resourceId: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.containedInstance.resourceId
     */
    _resourceId?: fhir.IFhirElement | undefined;
    /**
     * A specific version of a resource contained in the instance.
     */
    versionId?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.containedInstance.versionId
     */
    _versionId?: fhir.IFhirElement | undefined;
};
/**
 * Each resource and each version that is present in the workflow.
 */
export declare type IExampleScenarioInstance = fhir.IBackboneElement & {
    /**
     * The id of the resource for referencing.
     */
    resourceId: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.resourceId
     */
    _resourceId?: fhir.IFhirElement | undefined;
    /**
     * The type of the resource.
     */
    resourceType: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.resourceType
     */
    _resourceType?: fhir.IFhirElement | undefined;
    /**
     * A short name for the resource instance.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * Human-friendly description of the resource instance.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * A specific version of the resource.
     */
    version?: fhir.IExampleScenarioInstanceVersion[] | undefined;
    /**
     * Resources contained in the instance (e.g. the observations contained in a bundle).
     */
    containedInstance?: fhir.IExampleScenarioInstanceContainedInstance[] | undefined;
};
/**
 * Each interaction or action.
 */
export declare type IExampleScenarioProcessStepOperation = fhir.IBackboneElement & {
    /**
     * The sequential number of the interaction, e.g. 1.2.5.
     */
    number: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.number
     */
    _number?: fhir.IFhirElement | undefined;
    /**
     * The type of operation - CRUD.
     */
    type?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * The human-friendly name of the interaction.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * Who starts the transaction.
     */
    initiator?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.initiator
     */
    _initiator?: fhir.IFhirElement | undefined;
    /**
     * Who receives the transaction.
     */
    receiver?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.receiver
     */
    _receiver?: fhir.IFhirElement | undefined;
    /**
     * A comment to be inserted in the diagram.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * Whether the initiator is deactivated right after the transaction.
     */
    initiatorActive?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.initiatorActive
     */
    _initiatorActive?: fhir.IFhirElement | undefined;
    /**
     * Whether the receiver is deactivated right after the transaction.
     */
    receiverActive?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.receiverActive
     */
    _receiverActive?: fhir.IFhirElement | undefined;
    /**
     * Each resource instance used by the initiator.
     */
    request?: fhir.IExampleScenarioInstanceContainedInstance | undefined;
    /**
     * Each resource instance used by the responder.
     */
    response?: fhir.IExampleScenarioInstanceContainedInstance | undefined;
};
/**
 * Indicates an alternative step that can be taken instead of the operations on the base step in exceptional/atypical circumstances.
 */
export declare type IExampleScenarioProcessStepAlternative = fhir.IBackboneElement & {
    /**
     * The label to display for the alternative that gives a sense of the circumstance in which the alternative should be invoked.
     */
    title: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.alternative.title
     */
    _title?: fhir.IFhirElement | undefined;
    /**
     * A human-readable description of the alternative explaining when the alternative should occur rather than the base step.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.alternative.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * What happens in each alternative option.
     */
    step?: fhir.IExampleScenarioProcessStep[] | undefined;
};
/**
 * Each step of the process.
 */
export declare type IExampleScenarioProcessStep = fhir.IBackboneElement & {
    /**
     * Nested process.
     */
    process?: fhir.IExampleScenarioProcess[] | undefined;
    /**
     * If there is a pause in the flow.
     */
    pause?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.pause
     */
    _pause?: fhir.IFhirElement | undefined;
    /**
     * Each interaction or action.
     */
    operation?: fhir.IExampleScenarioProcessStepOperation | undefined;
    /**
     * Indicates an alternative step that can be taken instead of the operations on the base step in exceptional/atypical circumstances.
     */
    alternative?: fhir.IExampleScenarioProcessStepAlternative[] | undefined;
};
/**
 * Each major process - a group of operations.
 */
export declare type IExampleScenarioProcess = fhir.IBackboneElement & {
    /**
     * The diagram title of the group of operations.
     */
    title: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.process.title
     */
    _title?: fhir.IFhirElement | undefined;
    /**
     * A longer description of the group of operations.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * Description of initial status before the process starts.
     */
    preConditions?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.preConditions
     */
    _preConditions?: fhir.IFhirElement | undefined;
    /**
     * Description of final status after the process ends.
     */
    postConditions?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.postConditions
     */
    _postConditions?: fhir.IFhirElement | undefined;
    /**
     * Each step of the process.
     */
    step?: fhir.IExampleScenarioProcessStep[] | undefined;
};
/**
 * Example of workflow instance.
 */
export declare type IExampleScenario = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "ExampleScenario";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.url
     */
    _url?: fhir.IFhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this example scenario outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * There may be different example scenario instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the example scenario with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.version
     */
    _version?: fhir.IFhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of example scenarios that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: ExampleScenario.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of example scenarios that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.experimental
     */
    _experimental?: fhir.IFhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the example scenario. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the example scenario is the organization or individual primarily responsible for the maintenance and upkeep of the example scenario. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the example scenario. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.publisher
     */
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.IUsageContext[] | undefined;
    /**
     * It may be possible for the example scenario to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * nullFrequently, the copyright differs between the value set and the codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.copyright
     */
    _copyright?: fhir.IFhirElement | undefined;
    /**
     * This element does not describe the usage of the example scenario. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this example scenario.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.purpose
     */
    _purpose?: fhir.IFhirElement | undefined;
    /**
     * Actor participating in the resource.
     */
    actor?: fhir.IExampleScenarioActor[] | undefined;
    /**
     * Each resource and each version that is present in the workflow.
     */
    instance?: fhir.IExampleScenarioInstance[] | undefined;
    /**
     * Each major process - a group of operations.
     */
    process?: fhir.IExampleScenarioProcess[] | undefined;
    /**
     * Another nested workflow.
     */
    workflow?: string[] | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.workflow
     */
    _workflow?: fhir.IFhirElement[] | undefined;
};
/**
 * Actor participating in the resource.
 */
export declare class ExampleScenarioActor extends fhir.BackboneElement implements IExampleScenarioActor {
    /**
     * should this be called ID or acronym?
     */
    actorId: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.actor.actorId
     */
    _actorId?: fhir.FhirElement | undefined;
    /**
     * The type of actor - person or system.
     */
    type: ExamplescenarioActorTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: ExampleScenario.actor.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * Cardinality: is name and description 1..1?
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.actor.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Cardinality: is name and description 1..1?
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.actor.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ExampleScenarioActor - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExampleScenarioActor>);
    /**
     * Required-bound Value Set for type
     */
    typeRequiredValueSet(): ExamplescenarioActorTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A specific version of the resource.
 */
export declare class ExampleScenarioInstanceVersion extends fhir.BackboneElement implements IExampleScenarioInstanceVersion {
    /**
     * The identifier of a specific version of a resource.
     */
    versionId: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.version.versionId
     */
    _versionId?: fhir.FhirElement | undefined;
    /**
     * The description of the resource version.
     */
    description: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.version.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ExampleScenarioInstanceVersion - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExampleScenarioInstanceVersion>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Resources contained in the instance (e.g. the observations contained in a bundle).
 */
export declare class ExampleScenarioInstanceContainedInstance extends fhir.BackboneElement implements IExampleScenarioInstanceContainedInstance {
    /**
     * Each resource contained in the instance.
     */
    resourceId: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.containedInstance.resourceId
     */
    _resourceId?: fhir.FhirElement | undefined;
    /**
     * A specific version of a resource contained in the instance.
     */
    versionId?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.containedInstance.versionId
     */
    _versionId?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ExampleScenarioInstanceContainedInstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExampleScenarioInstanceContainedInstance>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Each resource and each version that is present in the workflow.
 */
export declare class ExampleScenarioInstance extends fhir.BackboneElement implements IExampleScenarioInstance {
    /**
     * The id of the resource for referencing.
     */
    resourceId: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.resourceId
     */
    _resourceId?: fhir.FhirElement | undefined;
    /**
     * The type of the resource.
     */
    resourceType: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.resourceType
     */
    _resourceType?: fhir.FhirElement | undefined;
    /**
     * A short name for the resource instance.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Human-friendly description of the resource instance.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * A specific version of the resource.
     */
    version?: fhir.ExampleScenarioInstanceVersion[] | undefined;
    /**
     * Resources contained in the instance (e.g. the observations contained in a bundle).
     */
    containedInstance?: fhir.ExampleScenarioInstanceContainedInstance[] | undefined;
    /**
     * Default constructor for ExampleScenarioInstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExampleScenarioInstance>);
    /**
     * Required-bound Value Set for resourceType
     */
    resourceTypeRequiredValueSet(): ResourceTypesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Each interaction or action.
 */
export declare class ExampleScenarioProcessStepOperation extends fhir.BackboneElement implements IExampleScenarioProcessStepOperation {
    /**
     * The sequential number of the interaction, e.g. 1.2.5.
     */
    number: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.number
     */
    _number?: fhir.FhirElement | undefined;
    /**
     * The type of operation - CRUD.
     */
    type?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * The human-friendly name of the interaction.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Who starts the transaction.
     */
    initiator?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.initiator
     */
    _initiator?: fhir.FhirElement | undefined;
    /**
     * Who receives the transaction.
     */
    receiver?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.receiver
     */
    _receiver?: fhir.FhirElement | undefined;
    /**
     * A comment to be inserted in the diagram.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Whether the initiator is deactivated right after the transaction.
     */
    initiatorActive?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.initiatorActive
     */
    _initiatorActive?: fhir.FhirElement | undefined;
    /**
     * Whether the receiver is deactivated right after the transaction.
     */
    receiverActive?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.receiverActive
     */
    _receiverActive?: fhir.FhirElement | undefined;
    /**
     * Each resource instance used by the initiator.
     */
    request?: fhir.ExampleScenarioInstanceContainedInstance | undefined;
    /**
     * Each resource instance used by the responder.
     */
    response?: fhir.ExampleScenarioInstanceContainedInstance | undefined;
    /**
     * Default constructor for ExampleScenarioProcessStepOperation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExampleScenarioProcessStepOperation>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Indicates an alternative step that can be taken instead of the operations on the base step in exceptional/atypical circumstances.
 */
export declare class ExampleScenarioProcessStepAlternative extends fhir.BackboneElement implements IExampleScenarioProcessStepAlternative {
    /**
     * The label to display for the alternative that gives a sense of the circumstance in which the alternative should be invoked.
     */
    title: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.alternative.title
     */
    _title?: fhir.FhirElement | undefined;
    /**
     * A human-readable description of the alternative explaining when the alternative should occur rather than the base step.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.alternative.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * What happens in each alternative option.
     */
    step?: fhir.ExampleScenarioProcessStep[] | undefined;
    /**
     * Default constructor for ExampleScenarioProcessStepAlternative - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExampleScenarioProcessStepAlternative>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Each step of the process.
 */
export declare class ExampleScenarioProcessStep extends fhir.BackboneElement implements IExampleScenarioProcessStep {
    /**
     * Nested process.
     */
    process?: fhir.ExampleScenarioProcess[] | undefined;
    /**
     * If there is a pause in the flow.
     */
    pause?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.pause
     */
    _pause?: fhir.FhirElement | undefined;
    /**
     * Each interaction or action.
     */
    operation?: fhir.ExampleScenarioProcessStepOperation | undefined;
    /**
     * Indicates an alternative step that can be taken instead of the operations on the base step in exceptional/atypical circumstances.
     */
    alternative?: fhir.ExampleScenarioProcessStepAlternative[] | undefined;
    /**
     * Default constructor for ExampleScenarioProcessStep - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExampleScenarioProcessStep>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Each major process - a group of operations.
 */
export declare class ExampleScenarioProcess extends fhir.BackboneElement implements IExampleScenarioProcess {
    /**
     * The diagram title of the group of operations.
     */
    title: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.process.title
     */
    _title?: fhir.FhirElement | undefined;
    /**
     * A longer description of the group of operations.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Description of initial status before the process starts.
     */
    preConditions?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.preConditions
     */
    _preConditions?: fhir.FhirElement | undefined;
    /**
     * Description of final status after the process ends.
     */
    postConditions?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.postConditions
     */
    _postConditions?: fhir.FhirElement | undefined;
    /**
     * Each step of the process.
     */
    step?: fhir.ExampleScenarioProcessStep[] | undefined;
    /**
     * Default constructor for ExampleScenarioProcess - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExampleScenarioProcess>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Example of workflow instance.
 */
export declare class ExampleScenario extends fhir.DomainResource implements IExampleScenario {
    /**
     * Resource Type Name
     */
    resourceType: "ExampleScenario";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.url
     */
    _url?: fhir.FhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this example scenario outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * There may be different example scenario instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the example scenario with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.version
     */
    _version?: fhir.FhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of example scenarios that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: ExampleScenario.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of example scenarios that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.experimental
     */
    _experimental?: fhir.FhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the example scenario. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the example scenario is the organization or individual primarily responsible for the maintenance and upkeep of the example scenario. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the example scenario. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.publisher
     */
    _publisher?: fhir.FhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the example scenario to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * nullFrequently, the copyright differs between the value set and the codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.copyright
     */
    _copyright?: fhir.FhirElement | undefined;
    /**
     * This element does not describe the usage of the example scenario. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this example scenario.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.purpose
     */
    _purpose?: fhir.FhirElement | undefined;
    /**
     * Actor participating in the resource.
     */
    actor?: fhir.ExampleScenarioActor[] | undefined;
    /**
     * Each resource and each version that is present in the workflow.
     */
    instance?: fhir.ExampleScenarioInstance[] | undefined;
    /**
     * Each major process - a group of operations.
     */
    process?: fhir.ExampleScenarioProcess[] | undefined;
    /**
     * Another nested workflow.
     */
    workflow?: string[] | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.workflow
     */
    _workflow?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for ExampleScenario - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IExampleScenario>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): PublicationStatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=ExampleScenario.d.ts.map