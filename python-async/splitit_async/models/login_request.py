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


class LoginRequest(object):
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
        'user_name': 'str',
        'password': 'str',
        'touch_point': 'TouchPoint'
    }

    attribute_map = {
        'user_name': 'UserName',
        'password': 'Password',
        'touch_point': 'TouchPoint'
    }

    def __init__(self, user_name=None, password=None, touch_point=None):  # noqa: E501
        """LoginRequest - a model defined in Swagger"""  # noqa: E501

        self._user_name = None
        self._password = None
        self._touch_point = None
        self.discriminator = None

        if user_name is not None:
            self.user_name = user_name
        if password is not None:
            self.password = password
        if touch_point is not None:
            self.touch_point = touch_point

    @property
    def user_name(self):
        """Gets the user_name of this LoginRequest.  # noqa: E501


        :return: The user_name of this LoginRequest.  # noqa: E501
        :rtype: str
        """
        return self._user_name

    @user_name.setter
    def user_name(self, user_name):
        """Sets the user_name of this LoginRequest.


        :param user_name: The user_name of this LoginRequest.  # noqa: E501
        :type: str
        """

        self._user_name = user_name

    @property
    def password(self):
        """Gets the password of this LoginRequest.  # noqa: E501


        :return: The password of this LoginRequest.  # noqa: E501
        :rtype: str
        """
        return self._password

    @password.setter
    def password(self, password):
        """Sets the password of this LoginRequest.


        :param password: The password of this LoginRequest.  # noqa: E501
        :type: str
        """

        self._password = password

    @property
    def touch_point(self):
        """Gets the touch_point of this LoginRequest.  # noqa: E501


        :return: The touch_point of this LoginRequest.  # noqa: E501
        :rtype: TouchPoint
        """
        return self._touch_point

    @touch_point.setter
    def touch_point(self, touch_point):
        """Sets the touch_point of this LoginRequest.


        :param touch_point: The touch_point of this LoginRequest.  # noqa: E501
        :type: TouchPoint
        """

        self._touch_point = touch_point

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
        if issubclass(LoginRequest, dict):
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
        if not isinstance(other, LoginRequest):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
