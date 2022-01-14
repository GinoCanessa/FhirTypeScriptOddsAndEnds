// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../models'
/**
 * Example codes for grouping goals to use for filtering or presentation.
 */
export const GoalCategory = {
  /**
   * Goals related to the manner in which the subject acts.
   */
  goal_category_Behavioral: {
    code: "behavioral",
    display: "Behavioral",
    system: "http://terminology.hl7.org/CodeSystem/goal-category"
  } as Coding,
  /**
   * Goals related to the consumption of food and/or beverages.
   */
  goal_category_Dietary: {
    code: "dietary",
    display: "Dietary",
    system: "http://terminology.hl7.org/CodeSystem/goal-category"
  } as Coding,
  /**
   * Goals related to the practice of nursing or established by nurses.
   */
  goal_category_Nursing: {
    code: "nursing",
    display: "Nursing",
    system: "http://terminology.hl7.org/CodeSystem/goal-category"
  } as Coding,
  /**
   * Goals related to the mobility and/or motor capability of the subject.
   */
  goal_category_Physiotherapy: {
    code: "physiotherapy",
    display: "Physiotherapy",
    system: "http://terminology.hl7.org/CodeSystem/goal-category"
  } as Coding,
  /**
   * Goals related to the personal protection of the subject.
   */
  goal_category_Safety: {
    code: "safety",
    display: "Safety",
    system: "http://terminology.hl7.org/CodeSystem/goal-category"
  } as Coding,
};
