// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Restricted to: Patient|Encounter|Observation
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * Identifies the purpose for this identifier, if known .
 */
export var IdentifierUseValueSet = {
    /**
     * The identifier considered to be most trusted for the identification of this item. Sometimes also known as "primary" and "main". The determination of "official" is subjective and implementation guides often provide additional guidelines for use.
     */
    identifier_use_Official: Coding.FactoryCreateStrict({
        code: "official",
        display: "Official",
        system: "http://hl7.org/fhir/identifier-use"
    }),
    /**
     * The identifier id no longer considered valid, but may be relevant for search purposes.  E.g. Changes to identifier schemes, account merges, etc.
     */
    identifier_use_Old: Coding.FactoryCreateStrict({
        code: "old",
        display: "Old",
        system: "http://hl7.org/fhir/identifier-use"
    }),
    /**
     * An identifier that was assigned in secondary use - it serves to identify the object in a relative context, but cannot be consistently assigned to the same object again in a different context.
     */
    identifier_use_Secondary: Coding.FactoryCreateStrict({
        code: "secondary",
        display: "Secondary",
        system: "http://hl7.org/fhir/identifier-use"
    }),
    /**
     * A temporary identifier.
     */
    identifier_use_Temp: Coding.FactoryCreateStrict({
        code: "temp",
        display: "Temp",
        system: "http://hl7.org/fhir/identifier-use"
    }),
    /**
     * The identifier recommended for display and use in real-world interactions.
     */
    identifier_use_Usual: Coding.FactoryCreateStrict({
        code: "usual",
        display: "Usual",
        system: "http://hl7.org/fhir/identifier-use"
    }),
};
//# sourceMappingURL=IdentifierUseValueSet.js.map