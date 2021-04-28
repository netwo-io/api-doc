/**
  * @module NetwoEligibilityAPILib
  *
  * TODO Enter a description
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const APIController = require('./Controllers/APIController');
const EligibilityProductResult = require('./Models/EligibilityProductResult');
const EligibilityResult = require('./Models/EligibilityResult');
const EligibilityStatus = require('./Models/EligibilityStatus');
const CustomerTypeEnum = require('./Models/CustomerTypeEnum');
const Entity = require('./Models/Entity');
const Entity1 = require('./Models/Entity1');
const MError = require('./Models/MError');
const InterventionTimeGuaranteedApplicabilityEnum =
  require('./Models/InterventionTimeGuaranteedApplicabilityEnum');
const ProcessingEnum = require('./Models/ProcessingEnum');
const RecoveryTimeGuaranteedApplicabilityEnum =
  require('./Models/RecoveryTimeGuaranteedApplicabilityEnum');
const Relation = require('./Models/Relation');
const ResolverEnum = require('./Models/ResolverEnum');
const Success = require('./Models/Success');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of NetwoEligibilityAPILib
    Configuration,
    Environments,
    // controllers of NetwoEligibilityAPILib
    APIController,
    // models of NetwoEligibilityAPILib
    EligibilityProductResult,
    EligibilityResult,
    EligibilityStatus,
    CustomerTypeEnum,
    Entity,
    Entity1,
    MError,
    InterventionTimeGuaranteedApplicabilityEnum,
    ProcessingEnum,
    RecoveryTimeGuaranteedApplicabilityEnum,
    Relation,
    ResolverEnum,
    Success,
    // exceptions of NetwoEligibilityAPILib
    APIException,
};

module.exports = initializer;
