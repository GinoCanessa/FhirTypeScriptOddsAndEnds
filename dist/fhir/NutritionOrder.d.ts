import * as fhir from '../fhir.js';
import { NutrientCodeValueSetType } from '../fhirValueSets/NutrientCodeValueSet.js';
import { ModifiedFoodtypeValueSetType } from '../fhirValueSets/ModifiedFoodtypeValueSet.js';
import { DietTypeValueSetType } from '../fhirValueSets/DietTypeValueSet.js';
import { EntformulaAdditiveValueSetType } from '../fhirValueSets/EntformulaAdditiveValueSet.js';
import { EnteralRouteValueSetType } from '../fhirValueSets/EnteralRouteValueSet.js';
import { RequestStatusValueSetType, RequestStatusValueSetEnum } from '../fhirValueSets/RequestStatusValueSet.js';
import { RequestIntentValueSetType, RequestIntentValueSetEnum } from '../fhirValueSets/RequestIntentValueSet.js';
import { EncounterDietValueSetType } from '../fhirValueSets/EncounterDietValueSet.js';
import { FoodTypeValueSetType } from '../fhirValueSets/FoodTypeValueSet.js';
/**
 * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
 */
export declare type INutritionOrderOralDietNutrient = fhir.IBackboneElement & {
    /**
     * The nutrient that is being modified such as carbohydrate or sodium.
     */
    modifier?: fhir.ICodeableConcept | undefined;
    /**
     * The quantity of the specified nutrient to include in diet.
     */
    amount?: fhir.IQuantity | undefined;
};
/**
 * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
 */
export declare type INutritionOrderOralDietTexture = fhir.IBackboneElement & {
    /**
     * Coupled with the foodType (Meat).
     */
    modifier?: fhir.ICodeableConcept | undefined;
    /**
     * Coupled with the `texture.modifier`; could be (All Foods).
     */
    foodType?: fhir.ICodeableConcept | undefined;
};
/**
 * Diet given orally in contrast to enteral (tube) feeding.
 */
export declare type INutritionOrderOralDiet = fhir.IBackboneElement & {
    /**
     * The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
     */
    type?: fhir.ICodeableConcept[] | undefined;
    /**
     * The time period and frequency at which the diet should be given.  The diet should be given for the combination of all schedules if more than one schedule is present.
     */
    schedule?: fhir.ITiming[] | undefined;
    /**
     * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
     */
    nutrient?: fhir.INutritionOrderOralDietNutrient[] | undefined;
    /**
     * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
     */
    texture?: fhir.INutritionOrderOralDietTexture[] | undefined;
    /**
     * The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.
     */
    fluidConsistencyType?: fhir.ICodeableConcept[] | undefined;
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    instruction?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.oralDiet.instruction
     */
    _instruction?: fhir.IFhirElement | undefined;
};
/**
 * Oral nutritional products given in order to add further nutritional value to the patient's diet.
 */
export declare type INutritionOrderSupplement = fhir.IBackboneElement & {
    /**
     * The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * The product or brand name of the nutritional supplement such as "Acme Protein Shake".
     */
    productName?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.supplement.productName
     */
    _productName?: fhir.IFhirElement | undefined;
    /**
     * The time period and frequency at which the supplement(s) should be given.  The supplement should be given for the combination of all schedules if more than one schedule is present.
     */
    schedule?: fhir.ITiming[] | undefined;
    /**
     * The amount of the nutritional supplement to be given.
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    instruction?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.supplement.instruction
     */
    _instruction?: fhir.IFhirElement | undefined;
};
/**
 * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
 */
export declare type INutritionOrderEnteralFormulaAdministration = fhir.IBackboneElement & {
    /**
     * The time period and frequency at which the enteral formula should be delivered to the patient.
     */
    schedule?: fhir.ITiming | undefined;
    /**
     * The volume of formula to provide to the patient per the specified administration schedule.
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio datatype is used for "200 mL/4 hrs" versus the Quantity datatype for "50 mL/hr".
     */
    rateQuantity?: fhir.IQuantity | undefined;
    /**
     * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio datatype is used for "200 mL/4 hrs" versus the Quantity datatype for "50 mL/hr".
     */
    rateRatio?: fhir.IRatio | undefined;
};
/**
 * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
 */
export declare type INutritionOrderEnteralFormula = fhir.IBackboneElement & {
    /**
     * The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula.
     */
    baseFormulaType?: fhir.ICodeableConcept | undefined;
    /**
     * The product or brand name of the enteral or infant formula product such as "ACME Adult Standard Formula".
     */
    baseFormulaProductName?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.enteralFormula.baseFormulaProductName
     */
    _baseFormulaProductName?: fhir.IFhirElement | undefined;
    /**
     * Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula.
     */
    additiveType?: fhir.ICodeableConcept | undefined;
    /**
     * The product or brand name of the type of modular component to be added to the formula.
     */
    additiveProductName?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.enteralFormula.additiveProductName
     */
    _additiveProductName?: fhir.IFhirElement | undefined;
    /**
     * The amount of energy (calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 calories per fluid ounce or an adult may require an enteral formula that provides 1.5 calorie/mL.
     */
    caloricDensity?: fhir.IQuantity | undefined;
    /**
     * The route or physiological path of administration into the patient's gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube.
     */
    routeofAdministration?: fhir.ICodeableConcept | undefined;
    /**
     * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
     */
    administration?: fhir.INutritionOrderEnteralFormulaAdministration[] | undefined;
    /**
     * The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours.
     */
    maxVolumeToDeliver?: fhir.IQuantity | undefined;
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    administrationInstruction?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.enteralFormula.administrationInstruction
     */
    _administrationInstruction?: fhir.IFhirElement | undefined;
};
/**
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
 */
export declare type INutritionOrder = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "NutritionOrder";
    /**
     * The Identifier.type element can be to indicate filler vs. placer if needed.  This is explained in further detail [here](servicerequest.html#notes).
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    instantiatesCanonical?: string[] | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.instantiatesCanonical
     */
    _instantiatesCanonical?: fhir.IFhirElement[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: string[] | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.instantiatesUri
     */
    _instantiatesUri?: fhir.IFhirElement[] | undefined;
    /**
     * The URL pointing to a protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.
     */
    instantiates?: string[] | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.instantiates
     */
    _instantiates?: fhir.IFhirElement[] | undefined;
    /**
     * Typically the system placing the order sets the status to "requested". Thereafter, the order is maintained by the receiver that updates the status as the request is handled.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: RequestStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: NutritionOrder.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * When resources map to this element, they are free to define as many codes as necessary to cover their space and will map to "proposal, plan or order".  Can have multiple codes that map to one of these.  E.g. "original order", "encoded order", "reflex order" would all map to "order".  Expectation is that the set of codes is mutually exclusive or a strict all-encompassing hierarchy.
     */
    intent: RequestIntentValueSetEnum | null;
    /**
     * Extended properties for primitive element: NutritionOrder.intent
     */
    _intent?: fhir.IFhirElement | undefined;
    /**
     * The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.
     */
    patient: fhir.IReference | null;
    /**
     * An encounter that provides additional information about the healthcare context in which this request is made.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * The date and time that this nutrition order was requested.
     */
    dateTime: string | null;
    /**
     * Extended properties for primitive element: NutritionOrder.dateTime
     */
    _dateTime?: fhir.IFhirElement | undefined;
    /**
     * The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.
     */
    orderer?: fhir.IReference | undefined;
    /**
     * Information on a patient's food allergies and intolerances to inform healthcare personnel about the type of foods that the patient shouldn't receive or consume.
     */
    allergyIntolerance?: fhir.IReference[] | undefined;
    /**
     * Information on a patient's food preferences that inform healthcare personnel about the food that the patient should receive or consume.
     */
    foodPreferenceModifier?: fhir.ICodeableConcept[] | undefined;
    /**
     * Information on a patient's food allergies, intolerances and preferences to inform healthcare personnel about the type  of foods that the patient shouldn't receive or consume.
     */
    excludeFoodModifier?: fhir.ICodeableConcept[] | undefined;
    /**
     * Diet given orally in contrast to enteral (tube) feeding.
     */
    oralDiet?: fhir.INutritionOrderOralDiet | undefined;
    /**
     * Oral nutritional products given in order to add further nutritional value to the patient's diet.
     */
    supplement?: fhir.INutritionOrderSupplement[] | undefined;
    /**
     * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
     */
    enteralFormula?: fhir.INutritionOrderEnteralFormula | undefined;
    /**
     * This element SHALL NOT be used to supply free text instructions for the diet which are represented in the `.oralDiet.instruction`, `supplement.instruction`, or `enteralFormula.administrationInstruction` elements.
     */
    note?: fhir.IAnnotation[] | undefined;
};
/**
 * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
 */
export declare class NutritionOrderOralDietNutrient extends fhir.BackboneElement implements INutritionOrderOralDietNutrient {
    /**
     * The nutrient that is being modified such as carbohydrate or sodium.
     */
    modifier?: fhir.CodeableConcept | undefined;
    /**
     * The quantity of the specified nutrient to include in diet.
     */
    amount?: fhir.Quantity | undefined;
    /**
     * Default constructor for NutritionOrderOralDietNutrient - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<INutritionOrderOralDietNutrient>);
    /**
     * Example-bound Value Set for modifier
     */
    modifierExampleValueSet(): NutrientCodeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
 */
export declare class NutritionOrderOralDietTexture extends fhir.BackboneElement implements INutritionOrderOralDietTexture {
    /**
     * Coupled with the foodType (Meat).
     */
    modifier?: fhir.CodeableConcept | undefined;
    /**
     * Coupled with the `texture.modifier`; could be (All Foods).
     */
    foodType?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for NutritionOrderOralDietTexture - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<INutritionOrderOralDietTexture>);
    /**
     * Example-bound Value Set for foodType
     */
    foodTypeExampleValueSet(): ModifiedFoodtypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Diet given orally in contrast to enteral (tube) feeding.
 */
export declare class NutritionOrderOralDiet extends fhir.BackboneElement implements INutritionOrderOralDiet {
    /**
     * The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * The time period and frequency at which the diet should be given.  The diet should be given for the combination of all schedules if more than one schedule is present.
     */
    schedule?: fhir.Timing[] | undefined;
    /**
     * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
     */
    nutrient?: fhir.NutritionOrderOralDietNutrient[] | undefined;
    /**
     * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
     */
    texture?: fhir.NutritionOrderOralDietTexture[] | undefined;
    /**
     * The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.
     */
    fluidConsistencyType?: fhir.CodeableConcept[] | undefined;
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    instruction?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.oralDiet.instruction
     */
    _instruction?: fhir.FhirElement | undefined;
    /**
     * Default constructor for NutritionOrderOralDiet - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<INutritionOrderOralDiet>);
    /**
     * Example-bound Value Set for type
     */
    typeExampleValueSet(): DietTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Oral nutritional products given in order to add further nutritional value to the patient's diet.
 */
export declare class NutritionOrderSupplement extends fhir.BackboneElement implements INutritionOrderSupplement {
    /**
     * The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The product or brand name of the nutritional supplement such as "Acme Protein Shake".
     */
    productName?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.supplement.productName
     */
    _productName?: fhir.FhirElement | undefined;
    /**
     * The time period and frequency at which the supplement(s) should be given.  The supplement should be given for the combination of all schedules if more than one schedule is present.
     */
    schedule?: fhir.Timing[] | undefined;
    /**
     * The amount of the nutritional supplement to be given.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    instruction?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.supplement.instruction
     */
    _instruction?: fhir.FhirElement | undefined;
    /**
     * Default constructor for NutritionOrderSupplement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<INutritionOrderSupplement>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
 */
export declare class NutritionOrderEnteralFormulaAdministration extends fhir.BackboneElement implements INutritionOrderEnteralFormulaAdministration {
    /**
     * The time period and frequency at which the enteral formula should be delivered to the patient.
     */
    schedule?: fhir.Timing | undefined;
    /**
     * The volume of formula to provide to the patient per the specified administration schedule.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio datatype is used for "200 mL/4 hrs" versus the Quantity datatype for "50 mL/hr".
     */
    rateQuantity?: fhir.Quantity | undefined;
    /**
     * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio datatype is used for "200 mL/4 hrs" versus the Quantity datatype for "50 mL/hr".
     */
    rateRatio?: fhir.Ratio | undefined;
    /**
     * Default constructor for NutritionOrderEnteralFormulaAdministration - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<INutritionOrderEnteralFormulaAdministration>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
 */
export declare class NutritionOrderEnteralFormula extends fhir.BackboneElement implements INutritionOrderEnteralFormula {
    /**
     * The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula.
     */
    baseFormulaType?: fhir.CodeableConcept | undefined;
    /**
     * The product or brand name of the enteral or infant formula product such as "ACME Adult Standard Formula".
     */
    baseFormulaProductName?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.enteralFormula.baseFormulaProductName
     */
    _baseFormulaProductName?: fhir.FhirElement | undefined;
    /**
     * Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula.
     */
    additiveType?: fhir.CodeableConcept | undefined;
    /**
     * The product or brand name of the type of modular component to be added to the formula.
     */
    additiveProductName?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.enteralFormula.additiveProductName
     */
    _additiveProductName?: fhir.FhirElement | undefined;
    /**
     * The amount of energy (calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 calories per fluid ounce or an adult may require an enteral formula that provides 1.5 calorie/mL.
     */
    caloricDensity?: fhir.Quantity | undefined;
    /**
     * The route or physiological path of administration into the patient's gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube.
     */
    routeofAdministration?: fhir.CodeableConcept | undefined;
    /**
     * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
     */
    administration?: fhir.NutritionOrderEnteralFormulaAdministration[] | undefined;
    /**
     * The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours.
     */
    maxVolumeToDeliver?: fhir.Quantity | undefined;
    /**
     * Free text dosage instructions can be used for cases where the instructions are too complex to code.
     */
    administrationInstruction?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.enteralFormula.administrationInstruction
     */
    _administrationInstruction?: fhir.FhirElement | undefined;
    /**
     * Default constructor for NutritionOrderEnteralFormula - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<INutritionOrderEnteralFormula>);
    /**
     * Example-bound Value Set for additiveType
     */
    additiveTypeExampleValueSet(): EntformulaAdditiveValueSetType;
    /**
     * Extensible-bound Value Set for routeofAdministration
     */
    routeofAdministrationExtensibleValueSet(): EnteralRouteValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
 */
export declare class NutritionOrder extends fhir.DomainResource implements INutritionOrder {
    /**
     * Resource Type Name
     */
    resourceType: "NutritionOrder";
    /**
     * The Identifier.type element can be to indicate filler vs. placer if needed.  This is explained in further detail [here](servicerequest.html#notes).
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    instantiatesCanonical?: string[] | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.instantiatesCanonical
     */
    _instantiatesCanonical?: fhir.FhirElement[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: string[] | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.instantiatesUri
     */
    _instantiatesUri?: fhir.FhirElement[] | undefined;
    /**
     * The URL pointing to a protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.
     */
    instantiates?: string[] | undefined;
    /**
     * Extended properties for primitive element: NutritionOrder.instantiates
     */
    _instantiates?: fhir.FhirElement[] | undefined;
    /**
     * Typically the system placing the order sets the status to "requested". Thereafter, the order is maintained by the receiver that updates the status as the request is handled.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: RequestStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: NutritionOrder.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * When resources map to this element, they are free to define as many codes as necessary to cover their space and will map to "proposal, plan or order".  Can have multiple codes that map to one of these.  E.g. "original order", "encoded order", "reflex order" would all map to "order".  Expectation is that the set of codes is mutually exclusive or a strict all-encompassing hierarchy.
     */
    intent: RequestIntentValueSetEnum | null;
    /**
     * Extended properties for primitive element: NutritionOrder.intent
     */
    _intent?: fhir.FhirElement | undefined;
    /**
     * The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.
     */
    patient: fhir.Reference | null;
    /**
     * An encounter that provides additional information about the healthcare context in which this request is made.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The date and time that this nutrition order was requested.
     */
    dateTime: string | null;
    /**
     * Extended properties for primitive element: NutritionOrder.dateTime
     */
    _dateTime?: fhir.FhirElement | undefined;
    /**
     * The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.
     */
    orderer?: fhir.Reference | undefined;
    /**
     * Information on a patient's food allergies and intolerances to inform healthcare personnel about the type of foods that the patient shouldn't receive or consume.
     */
    allergyIntolerance?: fhir.Reference[] | undefined;
    /**
     * Information on a patient's food preferences that inform healthcare personnel about the food that the patient should receive or consume.
     */
    foodPreferenceModifier?: fhir.CodeableConcept[] | undefined;
    /**
     * Information on a patient's food allergies, intolerances and preferences to inform healthcare personnel about the type  of foods that the patient shouldn't receive or consume.
     */
    excludeFoodModifier?: fhir.CodeableConcept[] | undefined;
    /**
     * Diet given orally in contrast to enteral (tube) feeding.
     */
    oralDiet?: fhir.NutritionOrderOralDiet | undefined;
    /**
     * Oral nutritional products given in order to add further nutritional value to the patient's diet.
     */
    supplement?: fhir.NutritionOrderSupplement[] | undefined;
    /**
     * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
     */
    enteralFormula?: fhir.NutritionOrderEnteralFormula | undefined;
    /**
     * This element SHALL NOT be used to supply free text instructions for the diet which are represented in the `.oralDiet.instruction`, `supplement.instruction`, or `enteralFormula.administrationInstruction` elements.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Default constructor for NutritionOrder - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<INutritionOrder>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): RequestStatusValueSetType;
    /**
     * Required-bound Value Set for intent
     */
    intentRequiredValueSet(): RequestIntentValueSetType;
    /**
     * Example-bound Value Set for foodPreferenceModifier
     */
    foodPreferenceModifierExampleValueSet(): EncounterDietValueSetType;
    /**
     * Example-bound Value Set for excludeFoodModifier
     */
    excludeFoodModifierExampleValueSet(): FoodTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=NutritionOrder.d.ts.map