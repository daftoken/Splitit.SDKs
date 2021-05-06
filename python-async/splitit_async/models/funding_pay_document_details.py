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


class FundingPayDocumentDetails(object):
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
        'pay_document_id': 'int',
        'plan_id': 'int',
        'amount': 'float',
        'plan': 'InstallmentPlans',
        'collect_document_details_id': 'int',
        'collect_document_details': 'object',
        'pay_document': 'PayDocuments'
    }

    attribute_map = {
        'id': 'Id',
        'pay_document_id': 'PayDocumentId',
        'plan_id': 'PlanId',
        'amount': 'Amount',
        'plan': 'Plan',
        'collect_document_details_id': 'CollectDocumentDetailsId',
        'collect_document_details': 'CollectDocumentDetails',
        'pay_document': 'PayDocument'
    }

    def __init__(self, id=None, pay_document_id=None, plan_id=None, amount=None, plan=None, collect_document_details_id=None, collect_document_details=None, pay_document=None):  # noqa: E501
        """FundingPayDocumentDetails - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._pay_document_id = None
        self._plan_id = None
        self._amount = None
        self._plan = None
        self._collect_document_details_id = None
        self._collect_document_details = None
        self._pay_document = None
        self.discriminator = None

        self._id = id
        if pay_document_id is not None:
            self._pay_document_id = pay_document_id
        if plan_id is not None:
            self._plan_id = plan_id
        self._amount = amount
        if plan is not None:
            self._plan = plan
        if collect_document_details_id is not None:
            self._collect_document_details_id = collect_document_details_id
        if collect_document_details is not None:
            self._collect_document_details = collect_document_details
        if pay_document is not None:
            self._pay_document = pay_document

    @property
    def id(self):
        """Gets the id of this FundingPayDocumentDetails.  # noqa: E501


        :return: The id of this FundingPayDocumentDetails.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this FundingPayDocumentDetails.


        :param id: The id of this FundingPayDocumentDetails.  # noqa: E501
        :type: int
        """
        
        if id is None:
            raise ValueError("Invalid value for `id`, must not be `None`")  # noqa: E501

        self._id = id

    @property
    def pay_document_id(self):
        """Gets the pay_document_id of this FundingPayDocumentDetails.  # noqa: E501


        :return: The pay_document_id of this FundingPayDocumentDetails.  # noqa: E501
        :rtype: int
        """
        return self._pay_document_id

    @pay_document_id.setter
    def pay_document_id(self, pay_document_id):
        """Sets the pay_document_id of this FundingPayDocumentDetails.


        :param pay_document_id: The pay_document_id of this FundingPayDocumentDetails.  # noqa: E501
        :type: int
        """

        self._pay_document_id = pay_document_id

    @property
    def plan_id(self):
        """Gets the plan_id of this FundingPayDocumentDetails.  # noqa: E501


        :return: The plan_id of this FundingPayDocumentDetails.  # noqa: E501
        :rtype: int
        """
        return self._plan_id

    @plan_id.setter
    def plan_id(self, plan_id):
        """Sets the plan_id of this FundingPayDocumentDetails.


        :param plan_id: The plan_id of this FundingPayDocumentDetails.  # noqa: E501
        :type: int
        """

        self._plan_id = plan_id

    @property
    def amount(self):
        """Gets the amount of this FundingPayDocumentDetails.  # noqa: E501


        :return: The amount of this FundingPayDocumentDetails.  # noqa: E501
        :rtype: float
        """
        return self._amount

    @amount.setter
    def amount(self, amount):
        """Sets the amount of this FundingPayDocumentDetails.


        :param amount: The amount of this FundingPayDocumentDetails.  # noqa: E501
        :type: float
        """
        
        if amount is None:
            raise ValueError("Invalid value for `amount`, must not be `None`")  # noqa: E501

        self._amount = amount

    @property
    def plan(self):
        """Gets the plan of this FundingPayDocumentDetails.  # noqa: E501


        :return: The plan of this FundingPayDocumentDetails.  # noqa: E501
        :rtype: InstallmentPlans
        """
        return self._plan

    @plan.setter
    def plan(self, plan):
        """Sets the plan of this FundingPayDocumentDetails.


        :param plan: The plan of this FundingPayDocumentDetails.  # noqa: E501
        :type: InstallmentPlans
        """

        self._plan = plan

    @property
    def collect_document_details_id(self):
        """Gets the collect_document_details_id of this FundingPayDocumentDetails.  # noqa: E501


        :return: The collect_document_details_id of this FundingPayDocumentDetails.  # noqa: E501
        :rtype: int
        """
        return self._collect_document_details_id

    @collect_document_details_id.setter
    def collect_document_details_id(self, collect_document_details_id):
        """Sets the collect_document_details_id of this FundingPayDocumentDetails.


        :param collect_document_details_id: The collect_document_details_id of this FundingPayDocumentDetails.  # noqa: E501
        :type: int
        """

        self._collect_document_details_id = collect_document_details_id

    @property
    def collect_document_details(self):
        """Gets the collect_document_details of this FundingPayDocumentDetails.  # noqa: E501


        :return: The collect_document_details of this FundingPayDocumentDetails.  # noqa: E501
        :rtype: object
        """
        return self._collect_document_details

    @collect_document_details.setter
    def collect_document_details(self, collect_document_details):
        """Sets the collect_document_details of this FundingPayDocumentDetails.


        :param collect_document_details: The collect_document_details of this FundingPayDocumentDetails.  # noqa: E501
        :type: object
        """

        self._collect_document_details = collect_document_details

    @property
    def pay_document(self):
        """Gets the pay_document of this FundingPayDocumentDetails.  # noqa: E501


        :return: The pay_document of this FundingPayDocumentDetails.  # noqa: E501
        :rtype: PayDocuments
        """
        return self._pay_document

    @pay_document.setter
    def pay_document(self, pay_document):
        """Sets the pay_document of this FundingPayDocumentDetails.


        :param pay_document: The pay_document of this FundingPayDocumentDetails.  # noqa: E501
        :type: PayDocuments
        """

        self._pay_document = pay_document

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
        if issubclass(FundingPayDocumentDetails, dict):
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
        if not isinstance(other, FundingPayDocumentDetails):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
