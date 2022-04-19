// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Example value set for clinical impression prognosis.
 */
export const ClinicalimpressionPrognosisValueSet = {
  ClinicalimpressionPrognosisValueSet_GoodPrognosis: Coding.FromStrict({
    code: "170968001",
    display: "Good prognosis",
    system: "http://snomed.info/sct"
  }),
  ClinicalimpressionPrognosisValueSet_PoorPrognosis: Coding.FromStrict({
    code: "170969009",
    display: "Poor prognosis",
    system: "http://snomed.info/sct"
  }),
  ClinicalimpressionPrognosisValueSet_PrognosisUncertain: Coding.FromStrict({
    code: "170970005",
    display: "Prognosis uncertain",
    system: "http://snomed.info/sct"
  }),
  ClinicalimpressionPrognosisValueSet_ConditionalPrognosis: Coding.FromStrict({
    code: "60484009",
    display: "Conditional prognosis",
    system: "http://snomed.info/sct"
  }),
  ClinicalimpressionPrognosisValueSet_FairPrognosis: Coding.FromStrict({
    code: "65872000",
    display: "Fair prognosis",
    system: "http://snomed.info/sct"
  }),
  ClinicalimpressionPrognosisValueSet_GuardedPrognosis: Coding.FromStrict({
    code: "67334001",
    display: "Guarded prognosis",
    system: "http://snomed.info/sct"
  }),
};
