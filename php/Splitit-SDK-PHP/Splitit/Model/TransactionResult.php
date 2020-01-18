<?php
/**
 * TransactionResult
 *
 * PHP version 5
 *
 * @category Class
 * @package  SplititSdkClient
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * splitit-web-api-public-sdk
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 2.4.12
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace SplititSdkClient\Model;

use \ArrayAccess;
use \SplititSdkClient\ObjectSerializer;

/**
 * TransactionResult Class Doc Comment
 *
 * @category Class
 * @package  SplititSdkClient
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class TransactionResult implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'TransactionResult';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'gateway_transaction_id' => 'string',
        'splitit_transaction_id' => 'int',
        'gateway_result_code' => 'string',
        'gateway_result_message' => 'string',
        'operation_type' => '\SplititSdkClient\Model\ReferenceEntityBase',
        'gateway_result' => 'bool',
        'gateway_transaction_date' => '\DateTime',
        'is_chargeback' => 'bool'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'gateway_transaction_id' => null,
        'splitit_transaction_id' => 'int64',
        'gateway_result_code' => null,
        'gateway_result_message' => null,
        'operation_type' => null,
        'gateway_result' => null,
        'gateway_transaction_date' => 'date-time',
        'is_chargeback' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerTypes()
    {
        return self::$swaggerTypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerFormats()
    {
        return self::$swaggerFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'gateway_transaction_id' => 'GatewayTransactionId',
        'splitit_transaction_id' => 'SplititTransactionId',
        'gateway_result_code' => 'GatewayResultCode',
        'gateway_result_message' => 'GatewayResultMessage',
        'operation_type' => 'OperationType',
        'gateway_result' => 'GatewayResult',
        'gateway_transaction_date' => 'GatewayTransactionDate',
        'is_chargeback' => 'IsChargeback'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'gateway_transaction_id' => 'setGatewayTransactionId',
        'splitit_transaction_id' => 'setSplititTransactionId',
        'gateway_result_code' => 'setGatewayResultCode',
        'gateway_result_message' => 'setGatewayResultMessage',
        'operation_type' => 'setOperationType',
        'gateway_result' => 'setGatewayResult',
        'gateway_transaction_date' => 'setGatewayTransactionDate',
        'is_chargeback' => 'setIsChargeback'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'gateway_transaction_id' => 'getGatewayTransactionId',
        'splitit_transaction_id' => 'getSplititTransactionId',
        'gateway_result_code' => 'getGatewayResultCode',
        'gateway_result_message' => 'getGatewayResultMessage',
        'operation_type' => 'getOperationType',
        'gateway_result' => 'getGatewayResult',
        'gateway_transaction_date' => 'getGatewayTransactionDate',
        'is_chargeback' => 'getIsChargeback'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$swaggerModelName;
    }

    

    

    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['gateway_transaction_id'] = isset($data['gateway_transaction_id']) ? $data['gateway_transaction_id'] : null;
        $this->container['splitit_transaction_id'] = isset($data['splitit_transaction_id']) ? $data['splitit_transaction_id'] : null;
        $this->container['gateway_result_code'] = isset($data['gateway_result_code']) ? $data['gateway_result_code'] : null;
        $this->container['gateway_result_message'] = isset($data['gateway_result_message']) ? $data['gateway_result_message'] : null;
        $this->container['operation_type'] = isset($data['operation_type']) ? $data['operation_type'] : null;
        $this->container['gateway_result'] = isset($data['gateway_result']) ? $data['gateway_result'] : null;
        $this->container['gateway_transaction_date'] = isset($data['gateway_transaction_date']) ? $data['gateway_transaction_date'] : null;
        $this->container['is_chargeback'] = isset($data['is_chargeback']) ? $data['is_chargeback'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['splitit_transaction_id'] === null) {
            $invalidProperties[] = "'splitit_transaction_id' can't be null";
        }
        if ($this->container['gateway_result'] === null) {
            $invalidProperties[] = "'gateway_result' can't be null";
        }
        if ($this->container['gateway_transaction_date'] === null) {
            $invalidProperties[] = "'gateway_transaction_date' can't be null";
        }
        if ($this->container['is_chargeback'] === null) {
            $invalidProperties[] = "'is_chargeback' can't be null";
        }
        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets gateway_transaction_id
     *
     * @return string
     */
    public function getGatewayTransactionId()
    {
        return $this->container['gateway_transaction_id'];
    }

    /**
     * Sets gateway_transaction_id
     *
     * @param string $gateway_transaction_id gateway_transaction_id
     *
     * @return $this
     */
    public function setGatewayTransactionId($gateway_transaction_id)
    {
        $this->container['gateway_transaction_id'] = $gateway_transaction_id;

        return $this;
    }

    /**
     * Gets splitit_transaction_id
     *
     * @return int
     */
    public function getSplititTransactionId()
    {
        return $this->container['splitit_transaction_id'];
    }

    /**
     * Sets splitit_transaction_id
     *
     * @param int $splitit_transaction_id splitit_transaction_id
     *
     * @return $this
     */
    public function setSplititTransactionId($splitit_transaction_id)
    {
        $this->container['splitit_transaction_id'] = $splitit_transaction_id;

        return $this;
    }

    /**
     * Gets gateway_result_code
     *
     * @return string
     */
    public function getGatewayResultCode()
    {
        return $this->container['gateway_result_code'];
    }

    /**
     * Sets gateway_result_code
     *
     * @param string $gateway_result_code gateway_result_code
     *
     * @return $this
     */
    public function setGatewayResultCode($gateway_result_code)
    {
        $this->container['gateway_result_code'] = $gateway_result_code;

        return $this;
    }

    /**
     * Gets gateway_result_message
     *
     * @return string
     */
    public function getGatewayResultMessage()
    {
        return $this->container['gateway_result_message'];
    }

    /**
     * Sets gateway_result_message
     *
     * @param string $gateway_result_message gateway_result_message
     *
     * @return $this
     */
    public function setGatewayResultMessage($gateway_result_message)
    {
        $this->container['gateway_result_message'] = $gateway_result_message;

        return $this;
    }

    /**
     * Gets operation_type
     *
     * @return \SplititSdkClient\Model\ReferenceEntityBase
     */
    public function getOperationType()
    {
        return $this->container['operation_type'];
    }

    /**
     * Sets operation_type
     *
     * @param \SplititSdkClient\Model\ReferenceEntityBase $operation_type operation_type
     *
     * @return $this
     */
    public function setOperationType($operation_type)
    {
        $this->container['operation_type'] = $operation_type;

        return $this;
    }

    /**
     * Gets gateway_result
     *
     * @return bool
     */
    public function getGatewayResult()
    {
        return $this->container['gateway_result'];
    }

    /**
     * Sets gateway_result
     *
     * @param bool $gateway_result gateway_result
     *
     * @return $this
     */
    public function setGatewayResult($gateway_result)
    {
        $this->container['gateway_result'] = $gateway_result;

        return $this;
    }

    /**
     * Gets gateway_transaction_date
     *
     * @return \DateTime
     */
    public function getGatewayTransactionDate()
    {
        return $this->container['gateway_transaction_date'];
    }

    /**
     * Sets gateway_transaction_date
     *
     * @param \DateTime $gateway_transaction_date gateway_transaction_date
     *
     * @return $this
     */
    public function setGatewayTransactionDate($gateway_transaction_date)
    {
        $this->container['gateway_transaction_date'] = $gateway_transaction_date;

        return $this;
    }

    /**
     * Gets is_chargeback
     *
     * @return bool
     */
    public function getIsChargeback()
    {
        return $this->container['is_chargeback'];
    }

    /**
     * Sets is_chargeback
     *
     * @param bool $is_chargeback is_chargeback
     *
     * @return $this
     */
    public function setIsChargeback($is_chargeback)
    {
        $this->container['is_chargeback'] = $is_chargeback;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }

    /**
     * Sets value based on offset.
     *
     * @param integer $offset Offset
     * @param mixed   $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        if (defined('JSON_PRETTY_PRINT')) { // use JSON pretty print
            return json_encode(
                ObjectSerializer::sanitizeForSerialization($this),
                JSON_PRETTY_PRINT
            );
        }

        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


