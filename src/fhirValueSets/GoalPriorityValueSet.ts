// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/goal-priority|4.0.1

import { Coding } from '../fhir.js'

/**
 * Indicates the level of importance associated with reaching or sustaining a goal.
 */
export const GoalPriorityValueSet = {
  /**
   * high-priority: Indicates that the goal is of considerable importance and should be a primary focus of care delivery.
   */
  HighPriority: new Coding({
    display: "High Priority",
    code: "high-priority",
    system: "http://terminology.hl7.org/CodeSystem/goal-priority",
  }),
  /**
   * low-priority: The goal is desirable but is not sufficiently important to devote significant resources to.  Achievement of the goal may be sought when incidental to achieving other goals.
   */
  LowPriority: new Coding({
    display: "Low Priority",
    code: "low-priority",
    system: "http://terminology.hl7.org/CodeSystem/goal-priority",
  }),
  /**
   * medium-priority: Indicates that the goal has a reasonable degree of importance and that concrete action should be taken towards the goal.  Attainment is not as critical as high-priority goals.
   */
  MediumPriority: new Coding({
    display: "Medium Priority",
    code: "medium-priority",
    system: "http://terminology.hl7.org/CodeSystem/goal-priority",
  }),
} as const;

/**
 * Indicates the level of importance associated with reaching or sustaining a goal.
 */
export type GoalPriorityValueSetType = typeof GoalPriorityValueSet;

/**
 * Indicates the level of importance associated with reaching or sustaining a goal.
 */
export enum GoalPriorityValueSetEnum {
  /**
   * high-priority: Indicates that the goal is of considerable importance and should be a primary focus of care delivery.
   */
  HighPriority = "high-priority",
  /**
   * low-priority: The goal is desirable but is not sufficiently important to devote significant resources to.  Achievement of the goal may be sought when incidental to achieving other goals.
   */
  LowPriority = "low-priority",
  /**
   * medium-priority: Indicates that the goal has a reasonable degree of importance and that concrete action should be taken towards the goal.  Attainment is not as critical as high-priority goals.
   */
  MediumPriority = "medium-priority",
}
