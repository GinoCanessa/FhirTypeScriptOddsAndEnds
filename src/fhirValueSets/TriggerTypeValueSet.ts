// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * The type of trigger.
 */
export const TriggerTypeValueSet = {
  /**
   * The trigger occurs whenever access to data of a particular type is completed.
   */
  trigger_type_DataAccessEnded: Coding.FromStrict({
    code: "data-access-ended",
    display: "Data Access Ended",
    system: "http://hl7.org/fhir/trigger-type"
  }),
  /**
   * The trigger occurs whenever data of a particular type is accessed.
   */
  trigger_type_DataAccessed: Coding.FromStrict({
    code: "data-accessed",
    display: "Data Accessed",
    system: "http://hl7.org/fhir/trigger-type"
  }),
  /**
   * The trigger occurs whenever data of a particular type is added.
   */
  trigger_type_DataAdded: Coding.FromStrict({
    code: "data-added",
    display: "Data Added",
    system: "http://hl7.org/fhir/trigger-type"
  }),
  /**
   * The trigger occurs whenever data of a particular type is changed in any way, either added, modified, or removed.
   */
  trigger_type_DataChanged: Coding.FromStrict({
    code: "data-changed",
    display: "Data Changed",
    system: "http://hl7.org/fhir/trigger-type"
  }),
  /**
   * The trigger occurs whenever data of a particular type is modified.
   */
  trigger_type_DataUpdated: Coding.FromStrict({
    code: "data-modified",
    display: "Data Updated",
    system: "http://hl7.org/fhir/trigger-type"
  }),
  /**
   * The trigger occurs whenever data of a particular type is removed.
   */
  trigger_type_DataRemoved: Coding.FromStrict({
    code: "data-removed",
    display: "Data Removed",
    system: "http://hl7.org/fhir/trigger-type"
  }),
  /**
   * The trigger occurs in response to a specific named event, and no other information about the trigger is specified. Named events are completely pre-coordinated, and the formal semantics of the trigger are not provided.
   */
  trigger_type_NamedEvent: Coding.FromStrict({
    code: "named-event",
    display: "Named Event",
    system: "http://hl7.org/fhir/trigger-type"
  }),
  /**
   * The trigger occurs at a specific time or periodically as described by a timing or schedule. A periodic event cannot have any data elements, but may have a name assigned as a shorthand for the event.
   */
  trigger_type_Periodic: Coding.FromStrict({
    code: "periodic",
    display: "Periodic",
    system: "http://hl7.org/fhir/trigger-type"
  }),
};
