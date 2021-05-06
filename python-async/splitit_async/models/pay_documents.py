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


class PayDocuments(object):
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
        'total_amount': 'float',
        'scp_provider_id': 'int',
        'business_unit_id': 'int',
        'discriminator': 'str',
        'currency_id': 'int',
        'business_unit': 'BusinessUnits',
        'currency': 'Currencies',
        'scp_provider': 'object',
        'funding_pay_document_details': 'list[FundingPayDocumentDetails]'
    }

    attribute_map = {
        'id': 'Id',
        'total_amount': 'TotalAmount',
        'scp_provider_id': 'ScpProviderId',
        'business_unit_id': 'BusinessUnitId',
        'discriminator': 'Discriminator',
        'currency_id': 'CurrencyId',
        'business_unit': 'BusinessUnit',
        'currency': 'Currency',
        'scp_provider': 'ScpProvider',
        'funding_pay_document_details': 'FundingPayDocumentDetails'
    }

    def __init__(self, id=None, total_amount=None, scp_provider_id=None, business_unit_id=None, discriminator=None, currency_id=None, business_unit=None, currency=None, scp_provider=None, funding_pay_document_details=None):  # noqa: E501
        """PayDocuments - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._total_amount = None
        self._scp_provider_id = None
        self._business_unit_id = None
        self._discriminator = None
        self._currency_id = None
        self._business_unit = None
        self._currency = None
        self._scp_provider = None
        self._funding_pay_document_details = None
        self.discriminator = None

        self._id = id
        self._total_amount = total_amount
        if scp_provider_id is not None:
            self._scp_provider_id = scp_provider_id
        if business_unit_id is not None:
            self._business_unit_id = business_unit_id
        if discriminator is not None:
            self._discriminator = discriminator
        if currency_id is not None:
            self._currency_id = currency_id
        if business_unit is not None:
            self._business_unit = business_unit
        if currency is not None:
            self._currency = currency
        if scp_provider is not None:
            self._scp_provider = scp_provider
        if funding_pay_document_details is not None:
            self._funding_pay_document_details = funding_pay_document_details

    @property
    def id(self):
        """Gets the id of this PayDocuments.  # noqa: E501


        :return: The id of this PayDocuments.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this PayDocuments.


        :param id: The id of this PayDocuments.  # noqa: E501
        :type: int
        """
        
        if id is None:
            raise ValueError("Invalid value for `id`, must not be `None`")  # noqa: E501

        self._id = id

    @property
    def total_amount(self):
        """Gets the total_amount of this PayDocuments.  # noqa: E501


        :return: The total_amount of this PayDocuments.  # noqa: E501
        :rtype: float
        """
        return self._total_amount

    @total_amount.setter
    def total_amount(self, total_amount):
        """Sets the total_amount of this PayDocuments.


        :param total_amount: The total_amount of this PayDocuments.  # noqa: E501
        :type: float
        """
        
        if total_amount is None:
            raise ValueError("Invalid value for `total_amount`, must not be `None`")  # noqa: E501

        self._total_amount = total_amount

    @property
    def scp_provider_id(self):
        """Gets the scp_provider_id of this PayDocuments.  # noqa: E501


        :return: The scp_provider_id of this PayDocuments.  # noqa: E501
        :rtype: int
        """
        return self._scp_provider_id

    @scp_provider_id.setter
    def scp_provider_id(self, scp_provider_id):
        """Sets the scp_provider_id of this PayDocuments.


        :param scp_provider_id: The scp_provider_id of this PayDocuments.  # noqa: E501
        :type: int
        """

        self._scp_provider_id = scp_provider_id

    @property
    def business_unit_id(self):
        """Gets the business_unit_id of this PayDocuments.  # noqa: E501


        :return: The business_unit_id of this PayDocuments.  # noqa: E501
        :rtype: int
        """
        return self._business_unit_id

    @business_unit_id.setter
    def business_unit_id(self, business_unit_id):
        """Sets the business_unit_id of this PayDocuments.


        :param business_unit_id: The business_unit_id of this PayDocuments.  # noqa: E501
        :type: int
        """

        self._business_unit_id = business_unit_id

    @property
    def discriminator(self):
        """Gets the discriminator of this PayDocuments.  # noqa: E501


        :return: The discriminator of this PayDocuments.  # noqa: E501
        :rtype: str
        """
        return self._discriminator

    @discriminator.setter
    def discriminator(self, discriminator):
        """Sets the discriminator of this PayDocuments.


        :param discriminator: The discriminator of this PayDocuments.  # noqa: E501
        :type: str
        """

        self._discriminator = discriminator

    @property
    def currency_id(self):
        """Gets the currency_id of this PayDocuments.  # noqa: E501


        :return: The currency_id of this PayDocuments.  # noqa: E501
        :rtype: int
        """
        return self._currency_id

    @currency_id.setter
    def currency_id(self, currency_id):
        """Sets the currency_id of this PayDocuments.


        :param currency_id: The currency_id of this PayDocuments.  # noqa: E501
        :type: int
        """

        self._currency_id = currency_id

    @property
    def business_unit(self):
        """Gets the business_unit of this PayDocuments.  # noqa: E501


        :return: The business_unit of this PayDocuments.  # noqa: E501
        :rtype: BusinessUnits
        """
        return self._business_unit

    @business_unit.setter
    def business_unit(self, business_unit):
        """Sets the business_unit of this PayDocuments.


        :param business_unit: The business_unit of this PayDocuments.  # noqa: E501
        :type: BusinessUnits
        """

        self._business_unit = business_unit

    @property
    def currency(self):
        """Gets the currency of this PayDocuments.  # noqa: E501


        :return: The currency of this PayDocuments.  # noqa: E501
        :rtype: Currencies
        """
        return self._currency

    @currency.setter
    def currency(self, currency):
        """Sets the currency of this PayDocuments.


        :param currency: The currency of this PayDocuments.  # noqa: E501
        :type: Currencies
        """

        self._currency = currency

    @property
    def scp_provider(self):
        """Gets the scp_provider of this PayDocuments.  # noqa: E501


        :return: The scp_provider of this PayDocuments.  # noqa: E501
        :rtype: object
        """
        return self._scp_provider

    @scp_provider.setter
    def scp_provider(self, scp_provider):
        """Sets the scp_provider of this PayDocuments.


        :param scp_provider: The scp_provider of this PayDocuments.  # noqa: E501
        :type: object
        """

        self._scp_provider = scp_provider

    @property
    def funding_pay_document_details(self):
        """Gets the funding_pay_document_details of this PayDocuments.  # noqa: E501


        :return: The funding_pay_document_details of this PayDocuments.  # noqa: E501
        :rtype: list[FundingPayDocumentDetails]
        """
        return self._funding_pay_document_details

    @funding_pay_document_details.setter
    def funding_pay_document_details(self, funding_pay_document_details):
        """Sets the funding_pay_document_details of this PayDocuments.


        :param funding_pay_document_details: The funding_pay_document_details of this PayDocuments.  # noqa: E501
        :type: list[FundingPayDocumentDetails]
        """

        self._funding_pay_document_details = funding_pay_document_details

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
        if issubclass(PayDocuments, dict):
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
        if not isinstance(other, PayDocuments):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
