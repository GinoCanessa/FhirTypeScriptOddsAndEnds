// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/servicerequest-orderdetail|4.0.1

import { Coding } from '../fhir.js'

/**
 * An example value set of Codified order entry details concepts.  These concepts only make sense in the context of what is being ordered.  This example is for a patient ventilation order
 */
export const ServicerequestOrderdetailValueSet = {
  /**
   * Code: 243144002
   */
  PatientTriggeredInspiratoryAssistanceProcedure: new Coding({
    display: "Patient triggered inspiratory assistance (procedure)",
    code: "243144002",
    system: "http://snomed.info/sct",
  }),
  /**
   * Code: 243150007
   */
  AssistedControlledMandatoryVentilationProcedure: new Coding({
    display: "Assisted controlled mandatory ventilation (procedure)",
    code: "243150007",
    system: "http://snomed.info/sct",
  }),
  /**
   * Code: 286812008
   */
  PressureControlledVentilationProcedure: new Coding({
    display: "Pressure controlled ventilation (procedure)",
    code: "286812008",
    system: "http://snomed.info/sct",
  }),
  /**
   * Code: 47545007
   */
  ContinuousPositiveAirwayPressureVentilationTreatmentRegimeTherapy: new Coding({
    display: "Continuous positive airway pressure ventilation treatment (regime/therapy)",
    code: "47545007",
    system: "http://snomed.info/sct",
  }),
  /**
   * Code: 59427005
   */
  SynchronizedIntermittentMandatoryVentilationProcedure: new Coding({
    display: "Synchronized intermittent mandatory ventilation (procedure)",
    code: "59427005",
    system: "http://snomed.info/sct",
  }),
} as const;

/**
 * An example value set of Codified order entry details concepts.  These concepts only make sense in the context of what is being ordered.  This example is for a patient ventilation order
 */
export type ServicerequestOrderdetailValueSetType = typeof ServicerequestOrderdetailValueSet;

/**
 * An example value set of Codified order entry details concepts.  These concepts only make sense in the context of what is being ordered.  This example is for a patient ventilation order
 */
