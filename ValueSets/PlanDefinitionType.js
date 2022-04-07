/**
 * The type of PlanDefinition.
 */
export var PlanDefinitionType = {
    /**
     * Defines a desired/typical sequence of clinical activities including preconditions, triggers and temporal relationships.
     */
    plan_definition_type_ClinicalProtocol: {
        code: "clinical-protocol",
        display: "Clinical Protocol",
        system: "http://terminology.hl7.org/CodeSystem/plan-definition-type"
    },
    /**
     * A decision support rule of the form [on Event] if Condition then Action. It is intended to be a shareable, computable definition of actions that should be taken whenever some condition is met in response to a particular event or events.
     */
    plan_definition_type_ECARule: {
        code: "eca-rule",
        display: "ECA Rule",
        system: "http://terminology.hl7.org/CodeSystem/plan-definition-type"
    },
    /**
     * A pre-defined and approved group of orders related to a particular clinical condition (e.g. hypertension treatment and monitoring) or stage of care (e.g. hospital admission to Coronary Care Unit). An order set is used as a checklist for the clinician when managing a patient with a specific condition. It is a structured collection of orders relevant to that condition and presented to the clinician in a computerized provider order entry (CPOE) system.
     */
    plan_definition_type_OrderSet: {
        code: "order-set",
        display: "Order Set",
        system: "http://terminology.hl7.org/CodeSystem/plan-definition-type"
    },
    /**
     * Defines the steps for a group of one or more systems in an event flow process along with the step constraints, sequence, pre-conditions and decision points to complete a particular objective.
     */
    plan_definition_type_WorkflowDefinition: {
        code: "workflow-definition",
        display: "Workflow Definition",
        system: "http://terminology.hl7.org/CodeSystem/plan-definition-type"
    }
};