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


class Keks(object):
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
        'cards': 'list[Cards]',
        'key': 'str',
        'version': 'int'
    }

    attribute_map = {
        'id': 'Id',
        'cards': 'Cards',
        'key': 'Key',
        'version': 'Version'
    }

    def __init__(self, id=None, cards=None, key=None, version=None):  # noqa: E501
        """Keks - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._cards = None
        self._key = None
        self._version = None
        self.discriminator = None

        self._id = id
        if cards is not None:
            self._cards = cards
        if key is not None:
            self._key = key
        self._version = version

    @property
    def id(self):
        """Gets the id of this Keks.  # noqa: E501


        :return: The id of this Keks.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Keks.


        :param id: The id of this Keks.  # noqa: E501
        :type: int
        """
        
        if id is None:
            raise ValueError("Invalid value for `id`, must not be `None`")  # noqa: E501

        self._id = id

    @property
    def cards(self):
        """Gets the cards of this Keks.  # noqa: E501


        :return: The cards of this Keks.  # noqa: E501
        :rtype: list[Cards]
        """
        return self._cards

    @cards.setter
    def cards(self, cards):
        """Sets the cards of this Keks.


        :param cards: The cards of this Keks.  # noqa: E501
        :type: list[Cards]
        """

        self._cards = cards

    @property
    def key(self):
        """Gets the key of this Keks.  # noqa: E501


        :return: The key of this Keks.  # noqa: E501
        :rtype: str
        """
        return self._key

    @key.setter
    def key(self, key):
        """Sets the key of this Keks.


        :param key: The key of this Keks.  # noqa: E501
        :type: str
        """

        self._key = key

    @property
    def version(self):
        """Gets the version of this Keks.  # noqa: E501


        :return: The version of this Keks.  # noqa: E501
        :rtype: int
        """
        return self._version

    @version.setter
    def version(self, version):
        """Sets the version of this Keks.


        :param version: The version of this Keks.  # noqa: E501
        :type: int
        """
        
        if version is None:
            raise ValueError("Invalid value for `version`, must not be `None`")  # noqa: E501

        self._version = version

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
        if issubclass(Keks, dict):
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
        if not isinstance(other, Keks):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
