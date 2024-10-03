const schemaGetPatients = {
    "type": "object",
    "required": [
        "message",
        "statusCode",
        "data"
    ],
    "additionalProperties": true,
    "properties": {
        "message": {
            "type": "string"
        },
        "statusCode": {
            "type": "integer"
        },
        "data": {
            "type": "array",
            "additionalItems": true,
            "items": {
                "type": "object",
                "required": [
                    "name",
                    "phone",
                    "address",
                    "status",
                    "in_date_at",
                    "out_date_at",
                    "timestamp"
                ],
                "additionalProperties": true,
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "phone": {
                        "type": "string"
                    },
                    "address": {
                        "type": "string"
                    },
                    "status": {
                        "type": "string"
                    },
                    "in_date_at": {
                        "type": "string"
                    },
                    "out_date_at": {
                        "type": [
                            "string",
                            "null"
                        ]
                    },
                    "timestamp": {
                        "type": "string"
                    }
                }
            },
            "uniqueItems": true
        }
    }
};

export {
    schemaGetPatients,
}