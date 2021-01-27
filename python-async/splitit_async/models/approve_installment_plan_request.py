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


class ApproveInstallmentPlanRequest(object):
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
        'installment_plan_number': 'str',
        'customer_signature_png_as_base64': 'str',
        'are_terms_and_conditions_approved': 'bool'
    }

    attribute_map = {
        'installment_plan_number': 'InstallmentPlanNumber',
        'customer_signature_png_as_base64': 'CustomerSignaturePngAsBase64',
        'are_terms_and_conditions_approved': 'AreTermsAndConditionsApproved'
    }

    def __init__(self, installment_plan_number=None, customer_signature_png_as_base64=None, are_terms_and_conditions_approved=None):  # noqa: E501
        """ApproveInstallmentPlanRequest - a model defined in Swagger"""  # noqa: E501

        self._installment_plan_number = None
        self._customer_signature_png_as_base64 = None
        self._are_terms_and_conditions_approved = None
        self.discriminator = None

        if installment_plan_number is not None:
            self.installment_plan_number = installment_plan_number
        if customer_signature_png_as_base64 is not None:
            self.customer_signature_png_as_base64 = customer_signature_png_as_base64
        self.are_terms_and_conditions_approved = are_terms_and_conditions_approved

    @property
    def installment_plan_number(self):
        """Gets the installment_plan_number of this ApproveInstallmentPlanRequest.  # noqa: E501


        :return: The installment_plan_number of this ApproveInstallmentPlanRequest.  # noqa: E501
        :rtype: str
        """
        return self._installment_plan_number

    @installment_plan_number.setter
    def installment_plan_number(self, installment_plan_number):
        """Sets the installment_plan_number of this ApproveInstallmentPlanRequest.


        :param installment_plan_number: The installment_plan_number of this ApproveInstallmentPlanRequest.  # noqa: E501
        :type: str
        """

        self._installment_plan_number = installment_plan_number

    @property
    def customer_signature_png_as_base64(self):
        """Gets the customer_signature_png_as_base64 of this ApproveInstallmentPlanRequest.  # noqa: E501


        :return: The customer_signature_png_as_base64 of this ApproveInstallmentPlanRequest.  # noqa: E501
        :rtype: str
        """
        return self._customer_signature_png_as_base64

    @customer_signature_png_as_base64.setter
    def customer_signature_png_as_base64(self, customer_signature_png_as_base64):
        """Sets the customer_signature_png_as_base64 of this ApproveInstallmentPlanRequest.


        :param customer_signature_png_as_base64: The customer_signature_png_as_base64 of this ApproveInstallmentPlanRequest.  # noqa: E501
        :type: str
        """

        self._customer_signature_png_as_base64 = customer_signature_png_as_base64

    @property
    def are_terms_and_conditions_approved(self):
        """Gets the are_terms_and_conditions_approved of this ApproveInstallmentPlanRequest.  # noqa: E501


        :return: The are_terms_and_conditions_approved of this ApproveInstallmentPlanRequest.  # noqa: E501
        :rtype: bool
        """
        return self._are_terms_and_conditions_approved

    @are_terms_and_conditions_approved.setter
    def are_terms_and_conditions_approved(self, are_terms_and_conditions_approved):
        """Sets the are_terms_and_conditions_approved of this ApproveInstallmentPlanRequest.


        :param are_terms_and_conditions_approved: The are_terms_and_conditions_approved of this ApproveInstallmentPlanRequest.  # noqa: E501
        :type: bool
        """
        are_terms_and_conditions_approved = bool(are_terms_and_conditions_approved)
        if are_terms_and_conditions_approved is None:
            raise ValueError("Invalid value for `are_terms_and_conditions_approved`, must not be `None`")  # noqa: E501

        self._are_terms_and_conditions_approved = are_terms_and_conditions_approved

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
        if issubclass(ApproveInstallmentPlanRequest, dict):
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
        if not isinstance(other, ApproveInstallmentPlanRequest):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
