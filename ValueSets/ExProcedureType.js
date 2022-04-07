/**
 * This value set includes example Procedure Type codes.
 */
export var ExProcedureType = {
    /**
     * The first procedure in a series required to produce and overall patient outcome.
     */
    ex_procedure_type_PrimaryProcedure: {
        code: "primary",
        display: "Primary procedure",
        system: "http://terminology.hl7.org/CodeSystem/ex-procedure-type"
    },
    /**
     * The second procedure in a series required to produce and overall patient outcome.
     */
    ex_procedure_type_SecondaryProcedure: {
        code: "secondary",
        display: "Secondary procedure",
        system: "http://terminology.hl7.org/CodeSystem/ex-procedure-type"
    }
};
