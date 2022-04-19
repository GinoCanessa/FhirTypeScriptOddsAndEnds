import * as fhir from '../fhir';
/**
 * Actor participating in the resource.
 */
export declare type IExampleScenarioActor = fhir.IBackboneElement & {
    /**
     * should this be called ID or acronym?
     */
    actorId: string | null;
    _actorId?: fhir.IFhirElement | undefined;
    /**
     * Cardinality: is name and description 1..1?
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Cardinality: is name and description 1..1?
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * The type of actor - person or system.
     */
    type: ExampleScenarioActorTypeEnum | null;
    _type?: fhir.IFhirElement | undefined;
};
/**
 * A specific version of the resource.
 */
export declare type IExampleScenarioInstanceVersion = fhir.IBackboneElement & {
    /**
     * The description of the resource version.
     */
    description: string | null;
    _description?: fhir.IFhirElement | undefined;
    /**
     * The identifier of a specific version of a resource.
     */
    versionId: string | null;
    _versionId?: fhir.IFhirElement | undefined;
};
/**
 * Resources contained in the instance (e.g. the observations contained in a bundle).
 */
export declare type IExampleScenarioInstanceContainedInstance = fhir.IBackboneElement & {
    /**
     * Each resource contained in the instance.
     */
    resourceId: string | null;
    _resourceId?: fhir.IFhirElement | undefined;
    /**
     * A specific version of a resource contained in the instance.
     */
    versionId?: string | undefined;
    _versionId?: fhir.IFhirElement | undefined;
};
/**
 * Each resource and each version that is present in the workflow.
 */
export declare type IExampleScenarioInstance = fhir.IBackboneElement & {
    /**
     * Resources contained in the instance (e.g. the observations contained in a bundle).
     */
    containedInstance?: fhir.IExampleScenarioInstanceContainedInstance[] | undefined;
    /**
     * Human-friendly description of the resource instance.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * A short name for the resource instance.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * The id of the resource for referencing.
     */
    resourceId: string | null;
    _resourceId?: fhir.IFhirElement | undefined;
    /**
     * The type of the resource.
     */
    resourceType: string | null;
    _resourceType?: fhir.IFhirElement | undefined;
    /**
     * A specific version of the resource.
     */
    version?: fhir.IExampleScenarioInstanceVersion[] | undefined;
};
/**
 * Each interaction or action.
 */
export declare type IExampleScenarioProcessStepOperation = fhir.IBackboneElement & {
    /**
     * A comment to be inserted in the diagram.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Who starts the transaction.
     */
    initiator?: string | undefined;
    _initiator?: fhir.IFhirElement | undefined;
    /**
     * Whether the initiator is deactivated right after the transaction.
     */
    initiatorActive?: boolean | undefined;
    _initiatorActive?: fhir.IFhirElement | undefined;
    /**
     * The human-friendly name of the interaction.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * The sequential number of the interaction, e.g. 1.2.5.
     */
    number: string | null;
    _number?: fhir.IFhirElement | undefined;
    /**
     * Who receives the transaction.
     */
    receiver?: string | undefined;
    _receiver?: fhir.IFhirElement | undefined;
    /**
     * Whether the receiver is deactivated right after the transaction.
     */
    receiverActive?: boolean | undefined;
    _receiverActive?: fhir.IFhirElement | undefined;
    /**
     * Each resource instance used by the initiator.
     */
    request?: fhir.IExampleScenarioInstanceContainedInstance | undefined;
    /**
     * Each resource instance used by the responder.
     */
    response?: fhir.IExampleScenarioInstanceContainedInstance | undefined;
    /**
     * The type of operation - CRUD.
     */
    type?: string | undefined;
    _type?: fhir.IFhirElement | undefined;
};
/**
 * Indicates an alternative step that can be taken instead of the operations on the base step in exceptional/atypical circumstances.
 */
export declare type IExampleScenarioProcessStepAlternative = fhir.IBackboneElement & {
    /**
     * A human-readable description of the alternative explaining when the alternative should occur rather than the base step.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * What happens in each alternative option.
     */
    step?: fhir.IExampleScenarioProcessStep[] | undefined;
    /**
     * The label to display for the alternative that gives a sense of the circumstance in which the alternative should be invoked.
     */
    title: string | null;
    _title?: fhir.IFhirElement | undefined;
};
/**
 * Each step of the process.
 */
export declare type IExampleScenarioProcessStep = fhir.IBackboneElement & {
    /**
     * Indicates an alternative step that can be taken instead of the operations on the base step in exceptional/atypical circumstances.
     */
    alternative?: fhir.IExampleScenarioProcessStepAlternative[] | undefined;
    /**
     * Each interaction or action.
     */
    operation?: fhir.IExampleScenarioProcessStepOperation | undefined;
    /**
     * If there is a pause in the flow.
     */
    pause?: boolean | undefined;
    _pause?: fhir.IFhirElement | undefined;
    /**
     * Nested process.
     */
    process?: fhir.IExampleScenarioProcess[] | undefined;
};
/**
 * Each major process - a group of operations.
 */
export declare type IExampleScenarioProcess = fhir.IBackboneElement & {
    /**
     * A longer description of the group of operations.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Description of final status after the process ends.
     */
    postConditions?: string | undefined;
    _postConditions?: fhir.IFhirElement | undefined;
    /**
     * Description of initial status before the process starts.
     */
    preConditions?: string | undefined;
    _preConditions?: fhir.IFhirElement | undefined;
    /**
     * Each step of the process.
     */
    step?: fhir.IExampleScenarioProcessStep[] | undefined;
    /**
     * The diagram title of the group of operations.
     */
    title: string | null;
    _title?: fhir.IFhirElement | undefined;
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
     * Actor participating in the resource.
     */
    actor?: fhir.IExampleScenarioActor[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * nullFrequently, the copyright differs between the value set and the codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: string | undefined;
    _copyright?: fhir.IFhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the example scenario. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of example scenarios that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhir.IFhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this example scenario outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Each resource and each version that is present in the workflow.
     */
    instance?: fhir.IExampleScenarioInstance[] | undefined;
    /**
     * It may be possible for the example scenario to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Each major process - a group of operations.
     */
    process?: fhir.IExampleScenarioProcess[] | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the example scenario is the organization or individual primarily responsible for the maintenance and upkeep of the example scenario. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the example scenario. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * This element does not describe the usage of the example scenario. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this example scenario.
     */
    purpose?: string | undefined;
    _purpose?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of example scenarios that are appropriate for use versus not.
     */
    status: ExampleScenarioStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    _url?: fhir.IFhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.IUsageContext[] | undefined;
    /**
     * There may be different example scenario instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the example scenario with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.IFhirElement | undefined;
    /**
     * Another nested workflow.
     */
    workflow?: string[] | undefined;
    _workflow?: fhir.IFhirElement[] | undefined;
};
/**
 * Actor participating in the resource.
 */
export declare class ExampleScenarioActor extends fhir.BackboneElement implements fhir.IExampleScenarioActor {
    /**
     * should this be called ID or acronym?
     */
    actorId: string | null;
    _actorId?: fhir.FhirElement | undefined;
    /**
     * Cardinality: is name and description 1..1?
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Cardinality: is name and description 1..1?
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * The type of actor - person or system.
     */
    type: ExampleScenarioActorTypeEnum | null;
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ExampleScenarioActor - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExampleScenarioActor>);
    /**
     * Check if the current ExampleScenarioActor contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ExampleScenarioActor from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IExampleScenarioActor): ExampleScenarioActor;
}
/**
 * A specific version of the resource.
 */
export declare class ExampleScenarioInstanceVersion extends fhir.BackboneElement implements fhir.IExampleScenarioInstanceVersion {
    /**
     * The description of the resource version.
     */
    description: string | null;
    _description?: fhir.FhirElement | undefined;
    /**
     * The identifier of a specific version of a resource.
     */
    versionId: string | null;
    _versionId?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ExampleScenarioInstanceVersion - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExampleScenarioInstanceVersion>);
    /**
     * Check if the current ExampleScenarioInstanceVersion contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ExampleScenarioInstanceVersion from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IExampleScenarioInstanceVersion): ExampleScenarioInstanceVersion;
}
/**
 * Resources contained in the instance (e.g. the observations contained in a bundle).
 */
export declare class ExampleScenarioInstanceContainedInstance extends fhir.BackboneElement implements fhir.IExampleScenarioInstanceContainedInstance {
    /**
     * Each resource contained in the instance.
     */
    resourceId: string | null;
    _resourceId?: fhir.FhirElement | undefined;
    /**
     * A specific version of a resource contained in the instance.
     */
    versionId?: string | undefined;
    _versionId?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ExampleScenarioInstanceContainedInstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExampleScenarioInstanceContainedInstance>);
    /**
     * Check if the current ExampleScenarioInstanceContainedInstance contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ExampleScenarioInstanceContainedInstance from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IExampleScenarioInstanceContainedInstance): ExampleScenarioInstanceContainedInstance;
}
/**
 * Each resource and each version that is present in the workflow.
 */
export declare class ExampleScenarioInstance extends fhir.BackboneElement implements fhir.IExampleScenarioInstance {
    /**
     * Resources contained in the instance (e.g. the observations contained in a bundle).
     */
    containedInstance?: fhir.ExampleScenarioInstanceContainedInstance[] | undefined;
    /**
     * Human-friendly description of the resource instance.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * A short name for the resource instance.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * The id of the resource for referencing.
     */
    resourceId: string | null;
    _resourceId?: fhir.FhirElement | undefined;
    /**
     * The type of the resource.
     */
    resourceType: string | null;
    _resourceType?: fhir.FhirElement | undefined;
    /**
     * A specific version of the resource.
     */
    version?: fhir.ExampleScenarioInstanceVersion[] | undefined;
    /**
     * Default constructor for ExampleScenarioInstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExampleScenarioInstance>);
    /**
     * Check if the current ExampleScenarioInstance contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ExampleScenarioInstance from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IExampleScenarioInstance): ExampleScenarioInstance;
}
/**
 * Each interaction or action.
 */
export declare class ExampleScenarioProcessStepOperation extends fhir.BackboneElement implements fhir.IExampleScenarioProcessStepOperation {
    /**
     * A comment to be inserted in the diagram.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Who starts the transaction.
     */
    initiator?: string | undefined;
    _initiator?: fhir.FhirElement | undefined;
    /**
     * Whether the initiator is deactivated right after the transaction.
     */
    initiatorActive?: boolean | undefined;
    _initiatorActive?: fhir.FhirElement | undefined;
    /**
     * The human-friendly name of the interaction.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * The sequential number of the interaction, e.g. 1.2.5.
     */
    number: string | null;
    _number?: fhir.FhirElement | undefined;
    /**
     * Who receives the transaction.
     */
    receiver?: string | undefined;
    _receiver?: fhir.FhirElement | undefined;
    /**
     * Whether the receiver is deactivated right after the transaction.
     */
    receiverActive?: boolean | undefined;
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
     * The type of operation - CRUD.
     */
    type?: string | undefined;
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ExampleScenarioProcessStepOperation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExampleScenarioProcessStepOperation>);
    /**
     * Check if the current ExampleScenarioProcessStepOperation contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ExampleScenarioProcessStepOperation from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IExampleScenarioProcessStepOperation): ExampleScenarioProcessStepOperation;
}
/**
 * Indicates an alternative step that can be taken instead of the operations on the base step in exceptional/atypical circumstances.
 */
export declare class ExampleScenarioProcessStepAlternative extends fhir.BackboneElement implements fhir.IExampleScenarioProcessStepAlternative {
    /**
     * A human-readable description of the alternative explaining when the alternative should occur rather than the base step.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * What happens in each alternative option.
     */
    step?: fhir.ExampleScenarioProcessStep[] | undefined;
    /**
     * The label to display for the alternative that gives a sense of the circumstance in which the alternative should be invoked.
     */
    title: string | null;
    _title?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ExampleScenarioProcessStepAlternative - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExampleScenarioProcessStepAlternative>);
    /**
     * Check if the current ExampleScenarioProcessStepAlternative contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ExampleScenarioProcessStepAlternative from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IExampleScenarioProcessStepAlternative): ExampleScenarioProcessStepAlternative;
}
/**
 * Each step of the process.
 */
export declare class ExampleScenarioProcessStep extends fhir.BackboneElement implements fhir.IExampleScenarioProcessStep {
    /**
     * Indicates an alternative step that can be taken instead of the operations on the base step in exceptional/atypical circumstances.
     */
    alternative?: fhir.ExampleScenarioProcessStepAlternative[] | undefined;
    /**
     * Each interaction or action.
     */
    operation?: fhir.ExampleScenarioProcessStepOperation | undefined;
    /**
     * If there is a pause in the flow.
     */
    pause?: boolean | undefined;
    _pause?: fhir.FhirElement | undefined;
    /**
     * Nested process.
     */
    process?: fhir.ExampleScenarioProcess[] | undefined;
    /**
     * Default constructor for ExampleScenarioProcessStep - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExampleScenarioProcessStep>);
    /**
     * Check if the current ExampleScenarioProcessStep contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ExampleScenarioProcessStep from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IExampleScenarioProcessStep): ExampleScenarioProcessStep;
}
/**
 * Each major process - a group of operations.
 */
export declare class ExampleScenarioProcess extends fhir.BackboneElement implements fhir.IExampleScenarioProcess {
    /**
     * A longer description of the group of operations.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Description of final status after the process ends.
     */
    postConditions?: string | undefined;
    _postConditions?: fhir.FhirElement | undefined;
    /**
     * Description of initial status before the process starts.
     */
    preConditions?: string | undefined;
    _preConditions?: fhir.FhirElement | undefined;
    /**
     * Each step of the process.
     */
    step?: fhir.ExampleScenarioProcessStep[] | undefined;
    /**
     * The diagram title of the group of operations.
     */
    title: string | null;
    _title?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ExampleScenarioProcess - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExampleScenarioProcess>);
    /**
     * Check if the current ExampleScenarioProcess contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ExampleScenarioProcess from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IExampleScenarioProcess): ExampleScenarioProcess;
}
/**
 * Example of workflow instance.
 */
export declare class ExampleScenario extends fhir.DomainResource implements fhir.IExampleScenario {
    /**
     * Resource Type Name
     */
    resourceType: "ExampleScenario";
    /**
     * Actor participating in the resource.
     */
    actor?: fhir.ExampleScenarioActor[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * nullFrequently, the copyright differs between the value set and the codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: string | undefined;
    _copyright?: fhir.FhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the example scenario. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of example scenarios that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhir.FhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this example scenario outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Each resource and each version that is present in the workflow.
     */
    instance?: fhir.ExampleScenarioInstance[] | undefined;
    /**
     * It may be possible for the example scenario to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * Each major process - a group of operations.
     */
    process?: fhir.ExampleScenarioProcess[] | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the example scenario is the organization or individual primarily responsible for the maintenance and upkeep of the example scenario. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the example scenario. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhir.FhirElement | undefined;
    /**
     * This element does not describe the usage of the example scenario. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this example scenario.
     */
    purpose?: string | undefined;
    _purpose?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of example scenarios that are appropriate for use versus not.
     */
    status: ExampleScenarioStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    _url?: fhir.FhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * There may be different example scenario instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the example scenario with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.FhirElement | undefined;
    /**
     * Another nested workflow.
     */
    workflow?: string[] | undefined;
    _workflow?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for ExampleScenario - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IExampleScenario>);
    /**
     * Check if the current ExampleScenario contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ExampleScenario from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IExampleScenario): ExampleScenario;
}
/**
 * Code Values for the ExampleScenario.actor.type field
 */
export declare enum ExampleScenarioActorTypeEnum {
    PERSON = "person",
    ENTITY = "entity"
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