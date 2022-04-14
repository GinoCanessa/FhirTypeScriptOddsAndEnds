// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirInterfaces from '../strictinterfaces'
/**
 * A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element.
 */
export interface ITriggerDefinition extends fhirInterfaces.IElement {
  /**
   * This element can be only be specified for data type triggers and provides additional semantics for the trigger. The context available within the condition is based on the type of data event. For all events, the current resource will be available as context. In addition, for modification events, the previous resource will also be available. The expression may be inlined, or may be a simple absolute URI, which is a reference to a named expression within a logic library referenced by a library element or extension within the containing resource. If the expression is a FHIR Path expression, it evaluates in the context of a resource of one of the type identified in the data requirement, and may also refer to the variable %previous for delta comparisons on events of type data-changed, data-modified, and data-deleted which will always have the same type.
   */
  condition?: fhirInterfaces.IExpression|undefined;
  /**
   * This element shall be present for any data type trigger.
   */
  data?: fhirInterfaces.IDataRequirement[]|undefined;
  /**
   * An event name can be provided for all event types, but is required for named events. If a name is provided for a type other than named events, it is considered to be a shorthand for the semantics described by the formal description of the event.
   */
  name?: string|undefined;
  _name?: fhirInterfaces.IElement|undefined;
  /**
   * The timing of the event (if this is a periodic trigger).
   */
  timingTiming?: fhirInterfaces.ITiming|undefined;
  /**
   * The timing of the event (if this is a periodic trigger).
   */
  timingReference?: fhirInterfaces.IReference|undefined;
  /**
   * The timing of the event (if this is a periodic trigger).
   */
  timingDate?: string|undefined;
  _timingDate?: fhirInterfaces.IElement|undefined;
  /**
   * The timing of the event (if this is a periodic trigger).
   */
  timingDateTime?: string|undefined;
  _timingDateTime?: fhirInterfaces.IElement|undefined;
  /**
   * The type of triggering event.
   */
  type: TriggerDefinitionTypeEnum;
  _type?: fhirInterfaces.IElement|undefined;
}
/**
 * Code Values for the TriggerDefinition.type field
 */
export enum TriggerDefinitionTypeEnum {
  NAMED_EVENT = "named-event",
  PERIODIC = "periodic",
  DATA_CHANGED = "data-changed",
  DATA_ADDED = "data-added",
  DATA_MODIFIED = "data-modified",
  DATA_REMOVED = "data-removed",
  DATA_ACCESSED = "data-accessed",
  DATA_ACCESS_ENDED = "data-access-ended",
}
