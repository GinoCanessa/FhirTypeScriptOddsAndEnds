// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: DeviceMetric
import * as fhir from '../fhir.js';
import { MetricCalibrationTypeValueSet, } from '../fhirValueSets/MetricCalibrationTypeValueSet.js';
import { MetricCalibrationStateValueSet, } from '../fhirValueSets/MetricCalibrationStateValueSet.js';
import { MetricOperationalStatusValueSet, } from '../fhirValueSets/MetricOperationalStatusValueSet.js';
import { MetricColorValueSet, } from '../fhirValueSets/MetricColorValueSet.js';
import { MetricCategoryValueSet, } from '../fhirValueSets/MetricCategoryValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Describes the calibrations that have been performed or that are required to be performed.
 */
export class DeviceMetricCalibration extends fhir.BackboneElement {
    /**
     * Default constructor for DeviceMetricCalibration - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'DeviceMetricCalibration';
        if (source['type']) {
            this.type = source.type;
        }
        if (source['state']) {
            this.state = source.state;
        }
        if (source['time']) {
            this.time = new fhir.FhirInstant({ value: source.time });
        }
    }
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet() {
        return MetricCalibrationTypeValueSet;
    }
    /**
     * Required-bound Value Set for state
     */
    static stateRequiredValueSet() {
        return MetricCalibrationStateValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["time"]) {
            outcome.issue.push(...this.time.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * Describes a measurement, calculation or setting capability of a medical device.
 */
export class DeviceMetric extends fhir.DomainResource {
    /**
     * Default constructor for DeviceMetric - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'DeviceMetric';
        /**
         * For identifiers assigned to a device by the device or gateway software, the `system` element of the identifier should be set to the unique identifier of the device.
         */
        this.identifier = [];
        /**
         * Describes the calibrations that have been performed or that are required to be performed.
         */
        this.calibration = [];
        this.resourceType = 'DeviceMetric';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        else {
            this.type = null;
        }
        if (source['unit']) {
            this.unit = new fhir.CodeableConcept(source.unit);
        }
        if (source['source']) {
            this.source = new fhir.Reference(source.source);
        }
        if (source['parent']) {
            this.parent = new fhir.Reference(source.parent);
        }
        if (source['operationalStatus']) {
            this.operationalStatus = source.operationalStatus;
        }
        if (source['color']) {
            this.color = source.color;
        }
        if (source['category']) {
            this.category = source.category;
        }
        else {
            this.category = null;
        }
        if (source['measurementPeriod']) {
            this.measurementPeriod = new fhir.Timing(source.measurementPeriod);
        }
        if (source['calibration']) {
            this.calibration = source.calibration.map((x) => new fhir.DeviceMetricCalibration(x));
        }
    }
    /**
     * Required-bound Value Set for operationalStatus
     */
    static operationalStatusRequiredValueSet() {
        return MetricOperationalStatusValueSet;
    }
    /**
     * Required-bound Value Set for color
     */
    static colorRequiredValueSet() {
        return MetricColorValueSet;
    }
    /**
     * Required-bound Value Set for category
     */
    static categoryRequiredValueSet() {
        return MetricCategoryValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'DeviceMetric' fhir: DeviceMetric.resourceType:'DeviceMetric'", }));
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (!this['type']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property type:fhir.CodeableConcept fhir: DeviceMetric.type:CodeableConcept", }));
        }
        if (this["type"]) {
            outcome.issue.push(...this.type.doModelValidation().issue);
        }
        if (this["unit"]) {
            outcome.issue.push(...this.unit.doModelValidation().issue);
        }
        if (this["source"]) {
            outcome.issue.push(...this.source.doModelValidation().issue);
        }
        if (this["parent"]) {
            outcome.issue.push(...this.parent.doModelValidation().issue);
        }
        if (!this['category']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property category:MetricCategoryValueSetEnum fhir: DeviceMetric.category:code", }));
        }
        if (this["measurementPeriod"]) {
            outcome.issue.push(...this.measurementPeriod.doModelValidation().issue);
        }
        if (this["calibration"]) {
            this.calibration.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
//# sourceMappingURL=DeviceMetric.js.map