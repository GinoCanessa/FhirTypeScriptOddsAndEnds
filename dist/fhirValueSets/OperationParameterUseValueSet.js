// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * Whether an operation parameter is an input or an output parameter.
 */
export const OperationParameterUseValueSet = {
    /**
     * This is an input parameter.
     */
    operation_parameter_use_In: new Coding({
        code: "in",
        display: "In",
        system: "http://hl7.org/fhir/operation-parameter-use"
    }),
    /**
     * This is an output parameter.
     */
    operation_parameter_use_Out: new Coding({
        code: "out",
        display: "Out",
        system: "http://hl7.org/fhir/operation-parameter-use"
    }),
};
//# sourceMappingURL=OperationParameterUseValueSet.js.map