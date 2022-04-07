import { Coding } from '../strictmodels';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why an administered dose has been assigned a particular status. Often, this reason describes why a dose is considered invalid. This value set is provided as a suggestive example.
 */
export declare const ImmunizationEvaluationDoseStatusReason: {
    /**
     * The product was stored in a manner inconsistent with manufacturer guidelines potentially reducing the effectiveness of the product.
     */
    immunization_evaluation_dose_status_reason_AdverseStorageCondition: Coding;
    /**
     * The product was stored at a temperature inconsistent with manufacturer guidelines potentially reducing the effectiveness of the product.
     */
    immunization_evaluation_dose_status_reason_ColdChainBreak: Coding;
    /**
     * The product was administered after the expiration date associated with lot of vaccine.
     */
    immunization_evaluation_dose_status_reason_ExpiredLot: Coding;
    /**
     * The product was administered at a time inconsistent with the documented schedule.
     */
    immunization_evaluation_dose_status_reason_AdministeredOutsideRecommendedSchedule: Coding;
    /**
     * The product administered has been recalled by the manufacturer.
     */
    immunization_evaluation_dose_status_reason_ProductRecall: Coding;
};
//# sourceMappingURL=ImmunizationEvaluationDoseStatusReason.d.ts.map