/**
 * NetwoEligibilityAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Entity
 */
class Entity extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.accessFee = this.constructor.getValue(obj.accessFee || obj.access_fee);
        this.accountingAccountAccessFee =
          this.constructor.getValue(obj.accountingAccountAccessFee
     || obj.accounting_account_access_fee);
        this.accountingAccountRecurringPrice =
          this.constructor.getValue(obj.accountingAccountRecurringPrice
     || obj.accounting_account_recurring_price);
        this.acquisitionType =
          this.constructor.getValue(obj.acquisitionType
     || obj.acquisition_type);
        this.back2backProhibit =
          this.constructor.getValue(obj.back2backProhibit
     || obj.back2back_prohibit);
        this.billingPeriodicity =
          this.constructor.getValue(obj.billingPeriodicity
     || obj.billing_periodicity);
        this.broadbandNetworkGatewayProtocol =
          this.constructor.getValue(obj.broadbandNetworkGatewayProtocol
     || obj.broadband_network_gateway_protocol);
        this.commitmentDuration =
          this.constructor.getValue(obj.commitmentDuration
     || obj.commitment_duration);
        this.copperPairNumber =
          this.constructor.getValue(obj.copperPairNumber
     || obj.copper_pair_number);
        this.debitDownGuaranteed =
          this.constructor.getValue(obj.debitDownGuaranteed
     || obj.debit_down_guaranteed);
        this.debitDownMax = this.constructor.getValue(obj.debitDownMax || obj.debit_down_max);
        this.debitUpGuaranteed =
          this.constructor.getValue(obj.debitUpGuaranteed
     || obj.debit_up_guaranteed);
        this.debitUpMax = this.constructor.getValue(obj.debitUpMax || obj.debit_up_max);
        this.deploymentDelayExceedPenalty =
          this.constructor.getValue(obj.deploymentDelayExceedPenalty
     || obj.deployment_delay_exceed_penalty);
        this.entityId = this.constructor.getValue(obj.entityId || obj.entity_id);
        this.europeanCommunicationCodeCompliance =
          this.constructor.getValue(obj.europeanCommunicationCodeCompliance
     || obj.european_communication_code_compliance);
        this.gdpr = this.constructor.getValue(obj.gdpr);
        this.grtExceedPenalty =
          this.constructor.getValue(obj.grtExceedPenalty
     || obj.grt_exceed_penalty);
        this.grtTriggerThreshold =
          this.constructor.getValue(obj.grtTriggerThreshold
     || obj.grt_trigger_threshold);
        this.infraProvider = this.constructor.getValue(obj.infraProvider || obj.infra_provider);
        this.infraType = this.constructor.getValue(obj.infraType || obj.infra_type);
        this.infrastructureEncryption =
          this.constructor.getValue(obj.infrastructureEncryption
     || obj.infrastructure_encryption);
        this.infrastructureEncryptionComment =
          this.constructor.getValue(obj.infrastructureEncryptionComment
     || obj.infrastructure_encryption_comment);
        this.interfaceType = this.constructor.getValue(obj.interfaceType || obj.interface_type);
        this.interventionTimeGuaranteedApplicability =
          this.constructor.getValue(obj.interventionTimeGuaranteedApplicability
     || obj.intervention_time_guaranteed_applicability);
        this.interventionTimeGuaranteedDelay =
          this.constructor.getValue(obj.interventionTimeGuaranteedDelay
     || obj.intervention_time_guaranteed_delay);
        this.isSellable = this.constructor.getValue(obj.isSellable || obj.is_sellable);
        this.latencyGuarantee =
          this.constructor.getValue(obj.latencyGuarantee
     || obj.latency_guarantee);
        this.legalDeploymentDelay =
          this.constructor.getValue(obj.legalDeploymentDelay
     || obj.legal_deployment_delay);
        this.misExceedPenalty =
          this.constructor.getValue(obj.misExceedPenalty
     || obj.mis_exceed_penalty);
        this.name = this.constructor.getValue(obj.name);
        this.packetLossExceedPenalty =
          this.constructor.getValue(obj.packetLossExceedPenalty
     || obj.packet_loss_exceed_penalty);
        this.packetLossMax = this.constructor.getValue(obj.packetLossMax || obj.packet_loss_max);
        this.paymentTerm = this.constructor.getValue(obj.paymentTerm || obj.payment_term);
        this.recoveryTimeGuaranteedApplicability =
          this.constructor.getValue(obj.recoveryTimeGuaranteedApplicability
     || obj.recovery_time_guaranteed_applicability);
        this.recoveryTimeGuaranteedDelay =
          this.constructor.getValue(obj.recoveryTimeGuaranteedDelay
     || obj.recovery_time_guaranteed_delay);
        this.recurringPrice = this.constructor.getValue(obj.recurringPrice || obj.recurring_price);
        this.soldOnlyAsOption =
          this.constructor.getValue(obj.soldOnlyAsOption
     || obj.sold_only_as_option);
        this.tariffZone = this.constructor.getValue(obj.tariffZone || obj.tariff_zone);
        this.vatApplicability =
          this.constructor.getValue(obj.vatApplicability
     || obj.vat_applicability);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'accessFee', realName: 'access_fee' },
            { name: 'accountingAccountAccessFee', realName: 'accounting_account_access_fee' },
            {
                name: 'accountingAccountRecurringPrice',
                realName: 'accounting_account_recurring_price',
            },
            { name: 'acquisitionType', realName: 'acquisition_type' },
            { name: 'back2backProhibit', realName: 'back2back_prohibit' },
            { name: 'billingPeriodicity', realName: 'billing_periodicity' },
            {
                name: 'broadbandNetworkGatewayProtocol',
                realName: 'broadband_network_gateway_protocol',
            },
            { name: 'commitmentDuration', realName: 'commitment_duration' },
            { name: 'copperPairNumber', realName: 'copper_pair_number' },
            { name: 'debitDownGuaranteed', realName: 'debit_down_guaranteed' },
            { name: 'debitDownMax', realName: 'debit_down_max' },
            { name: 'debitUpGuaranteed', realName: 'debit_up_guaranteed' },
            { name: 'debitUpMax', realName: 'debit_up_max' },
            { name: 'deploymentDelayExceedPenalty', realName: 'deployment_delay_exceed_penalty' },
            { name: 'entityId', realName: 'entity_id' },
            {
                name: 'europeanCommunicationCodeCompliance',
                realName: 'european_communication_code_compliance',
            },
            { name: 'gdpr', realName: 'gdpr' },
            { name: 'grtExceedPenalty', realName: 'grt_exceed_penalty' },
            { name: 'grtTriggerThreshold', realName: 'grt_trigger_threshold' },
            { name: 'infraProvider', realName: 'infra_provider' },
            { name: 'infraType', realName: 'infra_type' },
            { name: 'infrastructureEncryption', realName: 'infrastructure_encryption' },
            {
                name: 'infrastructureEncryptionComment',
                realName: 'infrastructure_encryption_comment',
            },
            { name: 'interfaceType', realName: 'interface_type' },
            {
                name: 'interventionTimeGuaranteedApplicability',
                realName: 'intervention_time_guaranteed_applicability',
            },
            {
                name: 'interventionTimeGuaranteedDelay',
                realName: 'intervention_time_guaranteed_delay',
            },
            { name: 'isSellable', realName: 'is_sellable' },
            { name: 'latencyGuarantee', realName: 'latency_guarantee' },
            { name: 'legalDeploymentDelay', realName: 'legal_deployment_delay' },
            { name: 'misExceedPenalty', realName: 'mis_exceed_penalty' },
            { name: 'name', realName: 'name' },
            { name: 'packetLossExceedPenalty', realName: 'packet_loss_exceed_penalty' },
            { name: 'packetLossMax', realName: 'packet_loss_max' },
            { name: 'paymentTerm', realName: 'payment_term' },
            {
                name: 'recoveryTimeGuaranteedApplicability',
                realName: 'recovery_time_guaranteed_applicability',
            },
            { name: 'recoveryTimeGuaranteedDelay', realName: 'recovery_time_guaranteed_delay' },
            { name: 'recurringPrice', realName: 'recurring_price' },
            { name: 'soldOnlyAsOption', realName: 'sold_only_as_option' },
            { name: 'tariffZone', realName: 'tariff_zone' },
            { name: 'vatApplicability', realName: 'vat_applicability' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = Entity;