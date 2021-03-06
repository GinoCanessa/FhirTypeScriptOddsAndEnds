// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/action-type|4.0.1
import { Coding } from '../fhir.js';
/**
 * The type of action to be performed.
 */
export const ActionTypeValueSet = {
    /**
     * create: The action is to create a new resource.
     */
    Create: new Coding({
        display: "Create",
        code: "create",
        system: "http://terminology.hl7.org/CodeSystem/action-type",
    }),
    /**
     * fire-event: The action is to fire a specific event.
     */
    FireEvent: new Coding({
        display: "Fire Event",
        code: "fire-event",
        system: "http://terminology.hl7.org/CodeSystem/action-type",
    }),
    /**
     * remove: The action is to remove an existing resource.
     */
    Remove: new Coding({
        display: "Remove",
        code: "remove",
        system: "http://terminology.hl7.org/CodeSystem/action-type",
    }),
    /**
     * update: The action is to update an existing resource.
     */
    Update: new Coding({
        display: "Update",
        code: "update",
        system: "http://terminology.hl7.org/CodeSystem/action-type",
    }),
};
/**
 * The type of action to be performed.
 */
//# sourceMappingURL=ActionTypeValueSet.js.map