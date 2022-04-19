// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * TODO (and should this be required?).
 */
export const AdverseEventOutcomeValueSet = {
  adverse_event_outcome_Fatal: Coding.FromStrict({
    code: "fatal",
    display: "Fatal",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-outcome"
  }),
  adverse_event_outcome_Ongoing: Coding.FromStrict({
    code: "ongoing",
    display: "Ongoing",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-outcome"
  }),
  adverse_event_outcome_Recovering: Coding.FromStrict({
    code: "recovering",
    display: "Recovering",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-outcome"
  }),
  adverse_event_outcome_Resolved: Coding.FromStrict({
    code: "resolved",
    display: "Resolved",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-outcome"
  }),
  adverse_event_outcome_ResolvedWithSequelae: Coding.FromStrict({
    code: "resolvedWithSequelae",
    display: "Resolved with Sequelae",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-outcome"
  }),
  adverse_event_outcome_Unknown: Coding.FromStrict({
    code: "unknown",
    display: "Unknown",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-outcome"
  }),
};
