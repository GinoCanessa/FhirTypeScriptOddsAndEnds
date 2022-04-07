import { Coding } from '../strictmodels';
/**
 * The type of PlanDefinition.
 */
export declare const PlanDefinitionType: {
    /**
     * Defines a desired/typical sequence of clinical activities including preconditions, triggers and temporal relationships.
     */
    plan_definition_type_ClinicalProtocol: Coding;
    /**
     * A decision support rule of the form [on Event] if Condition then Action. It is intended to be a shareable, computable definition of actions that should be taken whenever some condition is met in response to a particular event or events.
     */
    plan_definition_type_ECARule: Coding;
    /**
     * A pre-defined and approved group of orders related to a particular clinical condition (e.g. hypertension treatment and monitoring) or stage of care (e.g. hospital admission to Coronary Care Unit). An order set is used as a checklist for the clinician when managing a patient with a specific condition. It is a structured collection of orders relevant to that condition and presented to the clinician in a computerized provider order entry (CPOE) system.
     */
    plan_definition_type_OrderSet: Coding;
    /**
     * Defines the steps for a group of one or more systems in an event flow process along with the step constraints, sequence, pre-conditions and decision points to complete a particular objective.
     */
    plan_definition_type_WorkflowDefinition: Coding;
};
//# sourceMappingURL=PlanDefinitionType.d.ts.map