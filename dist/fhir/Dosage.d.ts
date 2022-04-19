import * as fhir from '../fhir';
/**
 * The amount of medication administered.
 */
export declare type IDosageDoseAndRate = fhir.IFhirElement & {
    /**
     * Note that this specifies the quantity of the specified medication, not the quantity for each active ingredient(s). Each ingredient amount can be communicated in the Medication resource. For example, if one wants to communicate that a tablet was 375 mg, where the dose was one tablet, you can use the Medication resource to document that the tablet was comprised of 375 mg of drug XYZ. Alternatively if the dose was 375 mg, then you may only need to use the Medication resource to indicate this was a tablet. If the example were an IV such as dopamine and you wanted to communicate that 400mg of dopamine was mixed in 500 ml of some IV solution, then this would all be communicated in the Medication resource. If the administration is not intended to be instantaneous (rate is present or timing has a duration), this can be specified to convey the total amount to be administered over the period of time as indicated by the schedule e.g. 500 ml in dose, with timing used to convey that this should be done over 4 hours.
     */
    doseRange?: fhir.IRange | undefined;
    /**
     * Note that this specifies the quantity of the specified medication, not the quantity for each active ingredient(s). Each ingredient amount can be communicated in the Medication resource. For example, if one wants to communicate that a tablet was 375 mg, where the dose was one tablet, you can use the Medication resource to document that the tablet was comprised of 375 mg of drug XYZ. Alternatively if the dose was 375 mg, then you may only need to use the Medication resource to indicate this was a tablet. If the example were an IV such as dopamine and you wanted to communicate that 400mg of dopamine was mixed in 500 ml of some IV solution, then this would all be communicated in the Medication resource. If the administration is not intended to be instantaneous (rate is present or timing has a duration), this can be specified to convey the total amount to be administered over the period of time as indicated by the schedule e.g. 500 ml in dose, with timing used to convey that this should be done over 4 hours.
     */
    doseQuantity?: fhir.IQuantity | undefined;
    /**
     * It is possible to supply both a rate and a doseQuantity to provide full details about how the medication is to be administered and supplied. If the rate is intended to change over time, depending on local rules/regulations, each change should be captured as a new version of the MedicationRequest with an updated rate, or captured with a new MedicationRequest with the new rate.
     * It is possible to specify a rate over time (for example, 100 ml/hour) using either the rateRatio and rateQuantity.  The rateQuantity approach requires systems to have the capability to parse UCUM grammer where ml/hour is included rather than a specific ratio where the time is specified as the denominator.  Where a rate such as 500ml over 2 hours is specified, the use of rateRatio may be more semantically correct than specifying using a rateQuantity of 250 mg/hour.
     */
    rateRatio?: fhir.IRatio | undefined;
    /**
     * It is possible to supply both a rate and a doseQuantity to provide full details about how the medication is to be administered and supplied. If the rate is intended to change over time, depending on local rules/regulations, each change should be captured as a new version of the MedicationRequest with an updated rate, or captured with a new MedicationRequest with the new rate.
     * It is possible to specify a rate over time (for example, 100 ml/hour) using either the rateRatio and rateQuantity.  The rateQuantity approach requires systems to have the capability to parse UCUM grammer where ml/hour is included rather than a specific ratio where the time is specified as the denominator.  Where a rate such as 500ml over 2 hours is specified, the use of rateRatio may be more semantically correct than specifying using a rateQuantity of 250 mg/hour.
     */
    rateRange?: fhir.IRange | undefined;
    /**
     * It is possible to supply both a rate and a doseQuantity to provide full details about how the medication is to be administered and supplied. If the rate is intended to change over time, depending on local rules/regulations, each change should be captured as a new version of the MedicationRequest with an updated rate, or captured with a new MedicationRequest with the new rate.
     * It is possible to specify a rate over time (for example, 100 ml/hour) using either the rateRatio and rateQuantity.  The rateQuantity approach requires systems to have the capability to parse UCUM grammer where ml/hour is included rather than a specific ratio where the time is specified as the denominator.  Where a rate such as 500ml over 2 hours is specified, the use of rateRatio may be more semantically correct than specifying using a rateQuantity of 250 mg/hour.
     */
    rateQuantity?: fhir.IQuantity | undefined;
    /**
     * The kind of dose or rate specified, for example, ordered or calculated.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * Indicates how the medication is/was taken or should be taken by the patient.
 */
export declare type IDosage = fhir.IBackboneElement & {
    /**
     * Information about administration or preparation of the medication (e.g. "infuse as rapidly as possibly via intraperitoneal port" or "immediately following drug x") should be populated in dosage.text.
     */
    additionalInstruction?: fhir.ICodeableConcept[] | undefined;
    /**
     * Can express "as needed" without a reason by setting the Boolean = True.  In this case the CodeableConcept is not populated.  Or you can express "as needed" with a reason by including the CodeableConcept.  In this case the Boolean is assumed to be True.  If you set the Boolean to False, then the dose is given according to the schedule and is not "prn" or "as needed".
     */
    asNeededBoolean?: boolean | undefined;
    _asNeededBoolean?: fhir.IFhirElement | undefined;
    /**
     * Can express "as needed" without a reason by setting the Boolean = True.  In this case the CodeableConcept is not populated.  Or you can express "as needed" with a reason by including the CodeableConcept.  In this case the Boolean is assumed to be True.  If you set the Boolean to False, then the dose is given according to the schedule and is not "prn" or "as needed".
     */
    asNeededCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * The amount of medication administered.
     */
    doseAndRate?: fhir.IDosageDoseAndRate[] | undefined;
    /**
     * This is intended for use as an adjunct to the dosage when there is an upper cap.  For example, a body surface area related dose with a maximum amount, such as 1.5 mg/m2 (maximum 2 mg) IV over 5 – 10 minutes would have doseQuantity of 1.5 mg/m2 and maxDosePerAdministration of 2 mg.
     */
    maxDosePerAdministration?: fhir.IQuantity | undefined;
    /**
     * Upper limit on medication per lifetime of the patient.
     */
    maxDosePerLifetime?: fhir.IQuantity | undefined;
    /**
     * This is intended for use as an adjunct to the dosage when there is an upper cap.  For example "2 tablets every 4 hours to a maximum of 8/day".
     */
    maxDosePerPeriod?: fhir.IRatio | undefined;
    /**
     * Terminologies used often pre-coordinate this term with the route and or form of administration.
     */
    method?: fhir.ICodeableConcept | undefined;
    /**
     * Instructions in terms that are understood by the patient or consumer.
     */
    patientInstruction?: string | undefined;
    _patientInstruction?: fhir.IFhirElement | undefined;
    /**
     * How drug should enter body.
     */
    route?: fhir.ICodeableConcept | undefined;
    /**
     * Indicates the order in which the dosage instructions should be applied or interpreted.
     */
    sequence?: number | undefined;
    _sequence?: fhir.IFhirElement | undefined;
    /**
     * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    site?: fhir.ICodeableConcept | undefined;
    /**
     * Free text dosage instructions e.g. SIG.
     */
    text?: string | undefined;
    _text?: fhir.IFhirElement | undefined;
    /**
     * This attribute might not always be populated while the Dosage.text is expected to be populated.  If both are populated, then the Dosage.text should reflect the content of the Dosage.timing.
     */
    timing?: fhir.ITiming | undefined;
};
/**
 * The amount of medication administered.
 */
export declare class DosageDoseAndRate extends fhir.FhirElement implements fhir.IDosageDoseAndRate {
    /**
     * Note that this specifies the quantity of the specified medication, not the quantity for each active ingredient(s). Each ingredient amount can be communicated in the Medication resource. For example, if one wants to communicate that a tablet was 375 mg, where the dose was one tablet, you can use the Medication resource to document that the tablet was comprised of 375 mg of drug XYZ. Alternatively if the dose was 375 mg, then you may only need to use the Medication resource to indicate this was a tablet. If the example were an IV such as dopamine and you wanted to communicate that 400mg of dopamine was mixed in 500 ml of some IV solution, then this would all be communicated in the Medication resource. If the administration is not intended to be instantaneous (rate is present or timing has a duration), this can be specified to convey the total amount to be administered over the period of time as indicated by the schedule e.g. 500 ml in dose, with timing used to convey that this should be done over 4 hours.
     */
    doseRange?: fhir.Range | undefined;
    /**
     * Note that this specifies the quantity of the specified medication, not the quantity for each active ingredient(s). Each ingredient amount can be communicated in the Medication resource. For example, if one wants to communicate that a tablet was 375 mg, where the dose was one tablet, you can use the Medication resource to document that the tablet was comprised of 375 mg of drug XYZ. Alternatively if the dose was 375 mg, then you may only need to use the Medication resource to indicate this was a tablet. If the example were an IV such as dopamine and you wanted to communicate that 400mg of dopamine was mixed in 500 ml of some IV solution, then this would all be communicated in the Medication resource. If the administration is not intended to be instantaneous (rate is present or timing has a duration), this can be specified to convey the total amount to be administered over the period of time as indicated by the schedule e.g. 500 ml in dose, with timing used to convey that this should be done over 4 hours.
     */
    doseQuantity?: fhir.Quantity | undefined;
    /**
     * It is possible to supply both a rate and a doseQuantity to provide full details about how the medication is to be administered and supplied. If the rate is intended to change over time, depending on local rules/regulations, each change should be captured as a new version of the MedicationRequest with an updated rate, or captured with a new MedicationRequest with the new rate.
     * It is possible to specify a rate over time (for example, 100 ml/hour) using either the rateRatio and rateQuantity.  The rateQuantity approach requires systems to have the capability to parse UCUM grammer where ml/hour is included rather than a specific ratio where the time is specified as the denominator.  Where a rate such as 500ml over 2 hours is specified, the use of rateRatio may be more semantically correct than specifying using a rateQuantity of 250 mg/hour.
     */
    rateRatio?: fhir.Ratio | undefined;
    /**
     * It is possible to supply both a rate and a doseQuantity to provide full details about how the medication is to be administered and supplied. If the rate is intended to change over time, depending on local rules/regulations, each change should be captured as a new version of the MedicationRequest with an updated rate, or captured with a new MedicationRequest with the new rate.
     * It is possible to specify a rate over time (for example, 100 ml/hour) using either the rateRatio and rateQuantity.  The rateQuantity approach requires systems to have the capability to parse UCUM grammer where ml/hour is included rather than a specific ratio where the time is specified as the denominator.  Where a rate such as 500ml over 2 hours is specified, the use of rateRatio may be more semantically correct than specifying using a rateQuantity of 250 mg/hour.
     */
    rateRange?: fhir.Range | undefined;
    /**
     * It is possible to supply both a rate and a doseQuantity to provide full details about how the medication is to be administered and supplied. If the rate is intended to change over time, depending on local rules/regulations, each change should be captured as a new version of the MedicationRequest with an updated rate, or captured with a new MedicationRequest with the new rate.
     * It is possible to specify a rate over time (for example, 100 ml/hour) using either the rateRatio and rateQuantity.  The rateQuantity approach requires systems to have the capability to parse UCUM grammer where ml/hour is included rather than a specific ratio where the time is specified as the denominator.  Where a rate such as 500ml over 2 hours is specified, the use of rateRatio may be more semantically correct than specifying using a rateQuantity of 250 mg/hour.
     */
    rateQuantity?: fhir.Quantity | undefined;
    /**
     * The kind of dose or rate specified, for example, ordered or calculated.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for DosageDoseAndRate - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDosageDoseAndRate>);
    /**
     * Check if the current DosageDoseAndRate contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a DosageDoseAndRate from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IDosageDoseAndRate): DosageDoseAndRate;
}
/**
 * Indicates how the medication is/was taken or should be taken by the patient.
 */
export declare class Dosage extends fhir.BackboneElement implements fhir.IDosage {
    /**
     * Information about administration or preparation of the medication (e.g. "infuse as rapidly as possibly via intraperitoneal port" or "immediately following drug x") should be populated in dosage.text.
     */
    additionalInstruction?: fhir.CodeableConcept[] | undefined;
    /**
     * Can express "as needed" without a reason by setting the Boolean = True.  In this case the CodeableConcept is not populated.  Or you can express "as needed" with a reason by including the CodeableConcept.  In this case the Boolean is assumed to be True.  If you set the Boolean to False, then the dose is given according to the schedule and is not "prn" or "as needed".
     */
    asNeededBoolean?: boolean | undefined;
    _asNeededBoolean?: fhir.FhirElement | undefined;
    /**
     * Can express "as needed" without a reason by setting the Boolean = True.  In this case the CodeableConcept is not populated.  Or you can express "as needed" with a reason by including the CodeableConcept.  In this case the Boolean is assumed to be True.  If you set the Boolean to False, then the dose is given according to the schedule and is not "prn" or "as needed".
     */
    asNeededCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The amount of medication administered.
     */
    doseAndRate?: fhir.DosageDoseAndRate[] | undefined;
    /**
     * This is intended for use as an adjunct to the dosage when there is an upper cap.  For example, a body surface area related dose with a maximum amount, such as 1.5 mg/m2 (maximum 2 mg) IV over 5 – 10 minutes would have doseQuantity of 1.5 mg/m2 and maxDosePerAdministration of 2 mg.
     */
    maxDosePerAdministration?: fhir.Quantity | undefined;
    /**
     * Upper limit on medication per lifetime of the patient.
     */
    maxDosePerLifetime?: fhir.Quantity | undefined;
    /**
     * This is intended for use as an adjunct to the dosage when there is an upper cap.  For example "2 tablets every 4 hours to a maximum of 8/day".
     */
    maxDosePerPeriod?: fhir.Ratio | undefined;
    /**
     * Terminologies used often pre-coordinate this term with the route and or form of administration.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * Instructions in terms that are understood by the patient or consumer.
     */
    patientInstruction?: string | undefined;
    _patientInstruction?: fhir.FhirElement | undefined;
    /**
     * How drug should enter body.
     */
    route?: fhir.CodeableConcept | undefined;
    /**
     * Indicates the order in which the dosage instructions should be applied or interpreted.
     */
    sequence?: number | undefined;
    _sequence?: fhir.FhirElement | undefined;
    /**
     * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    site?: fhir.CodeableConcept | undefined;
    /**
     * Free text dosage instructions e.g. SIG.
     */
    text?: string | undefined;
    _text?: fhir.FhirElement | undefined;
    /**
     * This attribute might not always be populated while the Dosage.text is expected to be populated.  If both are populated, then the Dosage.text should reflect the content of the Dosage.timing.
     */
    timing?: fhir.Timing | undefined;
    /**
     * Default constructor for Dosage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IDosage>);
    /**
     * Check if the current Dosage contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Dosage from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IDosage): Dosage;
}
//# sourceMappingURL=Dosage.d.ts.map