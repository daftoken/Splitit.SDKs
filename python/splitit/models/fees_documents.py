# coding: utf-8

"""
    splitit-web-api-public-sdk

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: 1.0.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class FeesDocuments(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'id': 'int',
        'fee_amount_in_effective_currency_amount': 'float',
        'fee_amount_in_transaction_currency_amount': 'float',
        'fee_amount_in_uniform_currency_amount': 'float',
        'effective_currency_id': 'int',
        'transaction_currency_id': 'int',
        'uniform_currency_id': 'int',
        'reference_fees_document_id': 'int',
        'installment_id': 'int',
        'plan_id': 'int',
        'business_unit_id': 'int',
        'effective_date_utc': 'datetime',
        'fee_rule_data_id': 'int',
        'fee_rule_data': 'FeesRuleDatas',
        'business_unit': 'BusinessUnits',
        'effective_currency': 'Currencies',
        'installment': 'Installments',
        'plan': 'InstallmentPlans',
        'reference_fees_document': 'FeesDocuments',
        'transaction_currency': 'Currencies',
        'uniform_currency': 'Currencies',
        'inverse_reference_fees_document': 'list[FeesDocuments]',
        'fee_entity': 'AccountingParty',
        'fee_type': 'FeesTypes',
        'range_type': 'RangeType',
        'fee_amount_in_effective_currency': 'Money2',
        'fee_amount_in_transaction_currency': 'Money2',
        'fee_amount_in_uniform_currency': 'Money2'
    }

    attribute_map = {
        'id': 'Id',
        'fee_amount_in_effective_currency_amount': 'FeeAmountInEffectiveCurrencyAmount',
        'fee_amount_in_transaction_currency_amount': 'FeeAmountInTransactionCurrencyAmount',
        'fee_amount_in_uniform_currency_amount': 'FeeAmountInUniformCurrencyAmount',
        'effective_currency_id': 'EffectiveCurrencyId',
        'transaction_currency_id': 'TransactionCurrencyId',
        'uniform_currency_id': 'UniformCurrencyId',
        'reference_fees_document_id': 'ReferenceFeesDocumentId',
        'installment_id': 'InstallmentId',
        'plan_id': 'PlanId',
        'business_unit_id': 'BusinessUnitId',
        'effective_date_utc': 'EffectiveDateUtc',
        'fee_rule_data_id': 'FeeRuleDataId',
        'fee_rule_data': 'FeeRuleData',
        'business_unit': 'BusinessUnit',
        'effective_currency': 'EffectiveCurrency',
        'installment': 'Installment',
        'plan': 'Plan',
        'reference_fees_document': 'ReferenceFeesDocument',
        'transaction_currency': 'TransactionCurrency',
        'uniform_currency': 'UniformCurrency',
        'inverse_reference_fees_document': 'InverseReferenceFeesDocument',
        'fee_entity': 'FeeEntity',
        'fee_type': 'FeeType',
        'range_type': 'RangeType',
        'fee_amount_in_effective_currency': 'FeeAmountInEffectiveCurrency',
        'fee_amount_in_transaction_currency': 'FeeAmountInTransactionCurrency',
        'fee_amount_in_uniform_currency': 'FeeAmountInUniformCurrency'
    }

    def __init__(self, id=None, fee_amount_in_effective_currency_amount=None, fee_amount_in_transaction_currency_amount=None, fee_amount_in_uniform_currency_amount=None, effective_currency_id=None, transaction_currency_id=None, uniform_currency_id=None, reference_fees_document_id=None, installment_id=None, plan_id=None, business_unit_id=None, effective_date_utc=None, fee_rule_data_id=None, fee_rule_data=None, business_unit=None, effective_currency=None, installment=None, plan=None, reference_fees_document=None, transaction_currency=None, uniform_currency=None, inverse_reference_fees_document=None, fee_entity=None, fee_type=None, range_type=None, fee_amount_in_effective_currency=None, fee_amount_in_transaction_currency=None, fee_amount_in_uniform_currency=None):  # noqa: E501
        """FeesDocuments - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._fee_amount_in_effective_currency_amount = None
        self._fee_amount_in_transaction_currency_amount = None
        self._fee_amount_in_uniform_currency_amount = None
        self._effective_currency_id = None
        self._transaction_currency_id = None
        self._uniform_currency_id = None
        self._reference_fees_document_id = None
        self._installment_id = None
        self._plan_id = None
        self._business_unit_id = None
        self._effective_date_utc = None
        self._fee_rule_data_id = None
        self._fee_rule_data = None
        self._business_unit = None
        self._effective_currency = None
        self._installment = None
        self._plan = None
        self._reference_fees_document = None
        self._transaction_currency = None
        self._uniform_currency = None
        self._inverse_reference_fees_document = None
        self._fee_entity = None
        self._fee_type = None
        self._range_type = None
        self._fee_amount_in_effective_currency = None
        self._fee_amount_in_transaction_currency = None
        self._fee_amount_in_uniform_currency = None
        self.discriminator = None

        self._id = id
        self._fee_amount_in_effective_currency_amount = fee_amount_in_effective_currency_amount
        self._fee_amount_in_transaction_currency_amount = fee_amount_in_transaction_currency_amount
        self._fee_amount_in_uniform_currency_amount = fee_amount_in_uniform_currency_amount
        self._effective_currency_id = effective_currency_id
        if transaction_currency_id is not None:
            self._transaction_currency_id = transaction_currency_id
        self._uniform_currency_id = uniform_currency_id
        if reference_fees_document_id is not None:
            self._reference_fees_document_id = reference_fees_document_id
        if installment_id is not None:
            self._installment_id = installment_id
        if plan_id is not None:
            self._plan_id = plan_id
        if business_unit_id is not None:
            self._business_unit_id = business_unit_id
        self._effective_date_utc = effective_date_utc
        if fee_rule_data_id is not None:
            self._fee_rule_data_id = fee_rule_data_id
        if fee_rule_data is not None:
            self._fee_rule_data = fee_rule_data
        if business_unit is not None:
            self._business_unit = business_unit
        if effective_currency is not None:
            self._effective_currency = effective_currency
        if installment is not None:
            self._installment = installment
        if plan is not None:
            self._plan = plan
        if reference_fees_document is not None:
            self._reference_fees_document = reference_fees_document
        if transaction_currency is not None:
            self._transaction_currency = transaction_currency
        if uniform_currency is not None:
            self._uniform_currency = uniform_currency
        if inverse_reference_fees_document is not None:
            self._inverse_reference_fees_document = inverse_reference_fees_document
        self._fee_entity = fee_entity
        self._fee_type = fee_type
        if range_type is not None:
            self._range_type = range_type
        if fee_amount_in_effective_currency is not None:
            self._fee_amount_in_effective_currency = fee_amount_in_effective_currency
        if fee_amount_in_transaction_currency is not None:
            self._fee_amount_in_transaction_currency = fee_amount_in_transaction_currency
        if fee_amount_in_uniform_currency is not None:
            self._fee_amount_in_uniform_currency = fee_amount_in_uniform_currency

    @property
    def id(self):
        """Gets the id of this FeesDocuments.  # noqa: E501


        :return: The id of this FeesDocuments.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this FeesDocuments.


        :param id: The id of this FeesDocuments.  # noqa: E501
        :type: int
        """
        
        if id is None:
            raise ValueError("Invalid value for `id`, must not be `None`")  # noqa: E501

        self._id = id

    @property
    def fee_amount_in_effective_currency_amount(self):
        """Gets the fee_amount_in_effective_currency_amount of this FeesDocuments.  # noqa: E501


        :return: The fee_amount_in_effective_currency_amount of this FeesDocuments.  # noqa: E501
        :rtype: float
        """
        return self._fee_amount_in_effective_currency_amount

    @fee_amount_in_effective_currency_amount.setter
    def fee_amount_in_effective_currency_amount(self, fee_amount_in_effective_currency_amount):
        """Sets the fee_amount_in_effective_currency_amount of this FeesDocuments.


        :param fee_amount_in_effective_currency_amount: The fee_amount_in_effective_currency_amount of this FeesDocuments.  # noqa: E501
        :type: float
        """
        
        if fee_amount_in_effective_currency_amount is None:
            raise ValueError("Invalid value for `fee_amount_in_effective_currency_amount`, must not be `None`")  # noqa: E501

        self._fee_amount_in_effective_currency_amount = fee_amount_in_effective_currency_amount

    @property
    def fee_amount_in_transaction_currency_amount(self):
        """Gets the fee_amount_in_transaction_currency_amount of this FeesDocuments.  # noqa: E501


        :return: The fee_amount_in_transaction_currency_amount of this FeesDocuments.  # noqa: E501
        :rtype: float
        """
        return self._fee_amount_in_transaction_currency_amount

    @fee_amount_in_transaction_currency_amount.setter
    def fee_amount_in_transaction_currency_amount(self, fee_amount_in_transaction_currency_amount):
        """Sets the fee_amount_in_transaction_currency_amount of this FeesDocuments.


        :param fee_amount_in_transaction_currency_amount: The fee_amount_in_transaction_currency_amount of this FeesDocuments.  # noqa: E501
        :type: float
        """
        
        if fee_amount_in_transaction_currency_amount is None:
            raise ValueError("Invalid value for `fee_amount_in_transaction_currency_amount`, must not be `None`")  # noqa: E501

        self._fee_amount_in_transaction_currency_amount = fee_amount_in_transaction_currency_amount

    @property
    def fee_amount_in_uniform_currency_amount(self):
        """Gets the fee_amount_in_uniform_currency_amount of this FeesDocuments.  # noqa: E501


        :return: The fee_amount_in_uniform_currency_amount of this FeesDocuments.  # noqa: E501
        :rtype: float
        """
        return self._fee_amount_in_uniform_currency_amount

    @fee_amount_in_uniform_currency_amount.setter
    def fee_amount_in_uniform_currency_amount(self, fee_amount_in_uniform_currency_amount):
        """Sets the fee_amount_in_uniform_currency_amount of this FeesDocuments.


        :param fee_amount_in_uniform_currency_amount: The fee_amount_in_uniform_currency_amount of this FeesDocuments.  # noqa: E501
        :type: float
        """
        
        if fee_amount_in_uniform_currency_amount is None:
            raise ValueError("Invalid value for `fee_amount_in_uniform_currency_amount`, must not be `None`")  # noqa: E501

        self._fee_amount_in_uniform_currency_amount = fee_amount_in_uniform_currency_amount

    @property
    def effective_currency_id(self):
        """Gets the effective_currency_id of this FeesDocuments.  # noqa: E501


        :return: The effective_currency_id of this FeesDocuments.  # noqa: E501
        :rtype: int
        """
        return self._effective_currency_id

    @effective_currency_id.setter
    def effective_currency_id(self, effective_currency_id):
        """Sets the effective_currency_id of this FeesDocuments.


        :param effective_currency_id: The effective_currency_id of this FeesDocuments.  # noqa: E501
        :type: int
        """
        
        if effective_currency_id is None:
            raise ValueError("Invalid value for `effective_currency_id`, must not be `None`")  # noqa: E501

        self._effective_currency_id = effective_currency_id

    @property
    def transaction_currency_id(self):
        """Gets the transaction_currency_id of this FeesDocuments.  # noqa: E501


        :return: The transaction_currency_id of this FeesDocuments.  # noqa: E501
        :rtype: int
        """
        return self._transaction_currency_id

    @transaction_currency_id.setter
    def transaction_currency_id(self, transaction_currency_id):
        """Sets the transaction_currency_id of this FeesDocuments.


        :param transaction_currency_id: The transaction_currency_id of this FeesDocuments.  # noqa: E501
        :type: int
        """

        self._transaction_currency_id = transaction_currency_id

    @property
    def uniform_currency_id(self):
        """Gets the uniform_currency_id of this FeesDocuments.  # noqa: E501


        :return: The uniform_currency_id of this FeesDocuments.  # noqa: E501
        :rtype: int
        """
        return self._uniform_currency_id

    @uniform_currency_id.setter
    def uniform_currency_id(self, uniform_currency_id):
        """Sets the uniform_currency_id of this FeesDocuments.


        :param uniform_currency_id: The uniform_currency_id of this FeesDocuments.  # noqa: E501
        :type: int
        """
        
        if uniform_currency_id is None:
            raise ValueError("Invalid value for `uniform_currency_id`, must not be `None`")  # noqa: E501

        self._uniform_currency_id = uniform_currency_id

    @property
    def reference_fees_document_id(self):
        """Gets the reference_fees_document_id of this FeesDocuments.  # noqa: E501


        :return: The reference_fees_document_id of this FeesDocuments.  # noqa: E501
        :rtype: int
        """
        return self._reference_fees_document_id

    @reference_fees_document_id.setter
    def reference_fees_document_id(self, reference_fees_document_id):
        """Sets the reference_fees_document_id of this FeesDocuments.


        :param reference_fees_document_id: The reference_fees_document_id of this FeesDocuments.  # noqa: E501
        :type: int
        """

        self._reference_fees_document_id = reference_fees_document_id

    @property
    def installment_id(self):
        """Gets the installment_id of this FeesDocuments.  # noqa: E501


        :return: The installment_id of this FeesDocuments.  # noqa: E501
        :rtype: int
        """
        return self._installment_id

    @installment_id.setter
    def installment_id(self, installment_id):
        """Sets the installment_id of this FeesDocuments.


        :param installment_id: The installment_id of this FeesDocuments.  # noqa: E501
        :type: int
        """

        self._installment_id = installment_id

    @property
    def plan_id(self):
        """Gets the plan_id of this FeesDocuments.  # noqa: E501


        :return: The plan_id of this FeesDocuments.  # noqa: E501
        :rtype: int
        """
        return self._plan_id

    @plan_id.setter
    def plan_id(self, plan_id):
        """Sets the plan_id of this FeesDocuments.


        :param plan_id: The plan_id of this FeesDocuments.  # noqa: E501
        :type: int
        """

        self._plan_id = plan_id

    @property
    def business_unit_id(self):
        """Gets the business_unit_id of this FeesDocuments.  # noqa: E501


        :return: The business_unit_id of this FeesDocuments.  # noqa: E501
        :rtype: int
        """
        return self._business_unit_id

    @business_unit_id.setter
    def business_unit_id(self, business_unit_id):
        """Sets the business_unit_id of this FeesDocuments.


        :param business_unit_id: The business_unit_id of this FeesDocuments.  # noqa: E501
        :type: int
        """

        self._business_unit_id = business_unit_id

    @property
    def effective_date_utc(self):
        """Gets the effective_date_utc of this FeesDocuments.  # noqa: E501


        :return: The effective_date_utc of this FeesDocuments.  # noqa: E501
        :rtype: datetime
        """
        return self._effective_date_utc

    @effective_date_utc.setter
    def effective_date_utc(self, effective_date_utc):
        """Sets the effective_date_utc of this FeesDocuments.


        :param effective_date_utc: The effective_date_utc of this FeesDocuments.  # noqa: E501
        :type: datetime
        """
        
        if effective_date_utc is None:
            raise ValueError("Invalid value for `effective_date_utc`, must not be `None`")  # noqa: E501

        self._effective_date_utc = effective_date_utc

    @property
    def fee_rule_data_id(self):
        """Gets the fee_rule_data_id of this FeesDocuments.  # noqa: E501


        :return: The fee_rule_data_id of this FeesDocuments.  # noqa: E501
        :rtype: int
        """
        return self._fee_rule_data_id

    @fee_rule_data_id.setter
    def fee_rule_data_id(self, fee_rule_data_id):
        """Sets the fee_rule_data_id of this FeesDocuments.


        :param fee_rule_data_id: The fee_rule_data_id of this FeesDocuments.  # noqa: E501
        :type: int
        """

        self._fee_rule_data_id = fee_rule_data_id

    @property
    def fee_rule_data(self):
        """Gets the fee_rule_data of this FeesDocuments.  # noqa: E501


        :return: The fee_rule_data of this FeesDocuments.  # noqa: E501
        :rtype: FeesRuleDatas
        """
        return self._fee_rule_data

    @fee_rule_data.setter
    def fee_rule_data(self, fee_rule_data):
        """Sets the fee_rule_data of this FeesDocuments.


        :param fee_rule_data: The fee_rule_data of this FeesDocuments.  # noqa: E501
        :type: FeesRuleDatas
        """

        self._fee_rule_data = fee_rule_data

    @property
    def business_unit(self):
        """Gets the business_unit of this FeesDocuments.  # noqa: E501


        :return: The business_unit of this FeesDocuments.  # noqa: E501
        :rtype: BusinessUnits
        """
        return self._business_unit

    @business_unit.setter
    def business_unit(self, business_unit):
        """Sets the business_unit of this FeesDocuments.


        :param business_unit: The business_unit of this FeesDocuments.  # noqa: E501
        :type: BusinessUnits
        """

        self._business_unit = business_unit

    @property
    def effective_currency(self):
        """Gets the effective_currency of this FeesDocuments.  # noqa: E501


        :return: The effective_currency of this FeesDocuments.  # noqa: E501
        :rtype: Currencies
        """
        return self._effective_currency

    @effective_currency.setter
    def effective_currency(self, effective_currency):
        """Sets the effective_currency of this FeesDocuments.


        :param effective_currency: The effective_currency of this FeesDocuments.  # noqa: E501
        :type: Currencies
        """

        self._effective_currency = effective_currency

    @property
    def installment(self):
        """Gets the installment of this FeesDocuments.  # noqa: E501


        :return: The installment of this FeesDocuments.  # noqa: E501
        :rtype: Installments
        """
        return self._installment

    @installment.setter
    def installment(self, installment):
        """Sets the installment of this FeesDocuments.


        :param installment: The installment of this FeesDocuments.  # noqa: E501
        :type: Installments
        """

        self._installment = installment

    @property
    def plan(self):
        """Gets the plan of this FeesDocuments.  # noqa: E501


        :return: The plan of this FeesDocuments.  # noqa: E501
        :rtype: InstallmentPlans
        """
        return self._plan

    @plan.setter
    def plan(self, plan):
        """Sets the plan of this FeesDocuments.


        :param plan: The plan of this FeesDocuments.  # noqa: E501
        :type: InstallmentPlans
        """

        self._plan = plan

    @property
    def reference_fees_document(self):
        """Gets the reference_fees_document of this FeesDocuments.  # noqa: E501


        :return: The reference_fees_document of this FeesDocuments.  # noqa: E501
        :rtype: FeesDocuments
        """
        return self._reference_fees_document

    @reference_fees_document.setter
    def reference_fees_document(self, reference_fees_document):
        """Sets the reference_fees_document of this FeesDocuments.


        :param reference_fees_document: The reference_fees_document of this FeesDocuments.  # noqa: E501
        :type: FeesDocuments
        """

        self._reference_fees_document = reference_fees_document

    @property
    def transaction_currency(self):
        """Gets the transaction_currency of this FeesDocuments.  # noqa: E501


        :return: The transaction_currency of this FeesDocuments.  # noqa: E501
        :rtype: Currencies
        """
        return self._transaction_currency

    @transaction_currency.setter
    def transaction_currency(self, transaction_currency):
        """Sets the transaction_currency of this FeesDocuments.


        :param transaction_currency: The transaction_currency of this FeesDocuments.  # noqa: E501
        :type: Currencies
        """

        self._transaction_currency = transaction_currency

    @property
    def uniform_currency(self):
        """Gets the uniform_currency of this FeesDocuments.  # noqa: E501


        :return: The uniform_currency of this FeesDocuments.  # noqa: E501
        :rtype: Currencies
        """
        return self._uniform_currency

    @uniform_currency.setter
    def uniform_currency(self, uniform_currency):
        """Sets the uniform_currency of this FeesDocuments.


        :param uniform_currency: The uniform_currency of this FeesDocuments.  # noqa: E501
        :type: Currencies
        """

        self._uniform_currency = uniform_currency

    @property
    def inverse_reference_fees_document(self):
        """Gets the inverse_reference_fees_document of this FeesDocuments.  # noqa: E501


        :return: The inverse_reference_fees_document of this FeesDocuments.  # noqa: E501
        :rtype: list[FeesDocuments]
        """
        return self._inverse_reference_fees_document

    @inverse_reference_fees_document.setter
    def inverse_reference_fees_document(self, inverse_reference_fees_document):
        """Sets the inverse_reference_fees_document of this FeesDocuments.


        :param inverse_reference_fees_document: The inverse_reference_fees_document of this FeesDocuments.  # noqa: E501
        :type: list[FeesDocuments]
        """

        self._inverse_reference_fees_document = inverse_reference_fees_document

    @property
    def fee_entity(self):
        """Gets the fee_entity of this FeesDocuments.  # noqa: E501


        :return: The fee_entity of this FeesDocuments.  # noqa: E501
        :rtype: AccountingParty
        """
        return self._fee_entity

    @fee_entity.setter
    def fee_entity(self, fee_entity):
        """Sets the fee_entity of this FeesDocuments.


        :param fee_entity: The fee_entity of this FeesDocuments.  # noqa: E501
        :type: AccountingParty
        """
        
        if fee_entity is None:
            raise ValueError("Invalid value for `fee_entity`, must not be `None`")  # noqa: E501

        self._fee_entity = fee_entity

    @property
    def fee_type(self):
        """Gets the fee_type of this FeesDocuments.  # noqa: E501


        :return: The fee_type of this FeesDocuments.  # noqa: E501
        :rtype: FeesTypes
        """
        return self._fee_type

    @fee_type.setter
    def fee_type(self, fee_type):
        """Sets the fee_type of this FeesDocuments.


        :param fee_type: The fee_type of this FeesDocuments.  # noqa: E501
        :type: FeesTypes
        """
        
        if fee_type is None:
            raise ValueError("Invalid value for `fee_type`, must not be `None`")  # noqa: E501

        self._fee_type = fee_type

    @property
    def range_type(self):
        """Gets the range_type of this FeesDocuments.  # noqa: E501


        :return: The range_type of this FeesDocuments.  # noqa: E501
        :rtype: RangeType
        """
        return self._range_type

    @range_type.setter
    def range_type(self, range_type):
        """Sets the range_type of this FeesDocuments.


        :param range_type: The range_type of this FeesDocuments.  # noqa: E501
        :type: RangeType
        """

        self._range_type = range_type

    @property
    def fee_amount_in_effective_currency(self):
        """Gets the fee_amount_in_effective_currency of this FeesDocuments.  # noqa: E501


        :return: The fee_amount_in_effective_currency of this FeesDocuments.  # noqa: E501
        :rtype: Money2
        """
        return self._fee_amount_in_effective_currency

    @fee_amount_in_effective_currency.setter
    def fee_amount_in_effective_currency(self, fee_amount_in_effective_currency):
        """Sets the fee_amount_in_effective_currency of this FeesDocuments.


        :param fee_amount_in_effective_currency: The fee_amount_in_effective_currency of this FeesDocuments.  # noqa: E501
        :type: Money2
        """

        self._fee_amount_in_effective_currency = fee_amount_in_effective_currency

    @property
    def fee_amount_in_transaction_currency(self):
        """Gets the fee_amount_in_transaction_currency of this FeesDocuments.  # noqa: E501


        :return: The fee_amount_in_transaction_currency of this FeesDocuments.  # noqa: E501
        :rtype: Money2
        """
        return self._fee_amount_in_transaction_currency

    @fee_amount_in_transaction_currency.setter
    def fee_amount_in_transaction_currency(self, fee_amount_in_transaction_currency):
        """Sets the fee_amount_in_transaction_currency of this FeesDocuments.


        :param fee_amount_in_transaction_currency: The fee_amount_in_transaction_currency of this FeesDocuments.  # noqa: E501
        :type: Money2
        """

        self._fee_amount_in_transaction_currency = fee_amount_in_transaction_currency

    @property
    def fee_amount_in_uniform_currency(self):
        """Gets the fee_amount_in_uniform_currency of this FeesDocuments.  # noqa: E501


        :return: The fee_amount_in_uniform_currency of this FeesDocuments.  # noqa: E501
        :rtype: Money2
        """
        return self._fee_amount_in_uniform_currency

    @fee_amount_in_uniform_currency.setter
    def fee_amount_in_uniform_currency(self, fee_amount_in_uniform_currency):
        """Sets the fee_amount_in_uniform_currency of this FeesDocuments.


        :param fee_amount_in_uniform_currency: The fee_amount_in_uniform_currency of this FeesDocuments.  # noqa: E501
        :type: Money2
        """

        self._fee_amount_in_uniform_currency = fee_amount_in_uniform_currency

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(FeesDocuments, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, FeesDocuments):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
