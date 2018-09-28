define({ "api": [  {    "type": "get",    "url": "/nodes/count",    "title": "Number of nodes",    "name": "Count",    "group": "Nodes",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Number of nodes.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"78\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 500": [          {            "group": "Error 500",            "type": "Object",            "optional": false,            "field": "ServerError",            "description": ""          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 500 ServerError\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/nodes/index.js",    "groupTitle": "Nodes"  },  {    "type": "get",    "url": "/nodes/:nodeId/amount",    "title": "Order amount for a node",    "name": "Order_amount_for_a_node",    "group": "Nodes",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "nodeId",            "description": "<p>The nodes id</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "currency",            "description": "<p>Currency code to convert amount</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Number of nodes.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"432.0038\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 500": [          {            "group": "Error 500",            "type": "Object",            "optional": false,            "field": "ServerError",            "description": ""          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 500 ServerError\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/nodes/index.js",    "groupTitle": "Nodes"  },  {    "type": "get",    "url": "/nodes/:nodeId/count",    "title": "Order count for a node",    "name": "Order_count_for_a_node",    "group": "Nodes",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "nodeId",            "description": "<p>The nodes id</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "currency",            "description": "<p>Currency code to convert amount</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Number of nodes.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"122\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 500": [          {            "group": "Error 500",            "type": "Object",            "optional": false,            "field": "ServerError",            "description": ""          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 500 ServerError\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/nodes/index.js",    "groupTitle": "Nodes"  },  {    "type": "get",    "url": "/orders/amount/date",    "title": "Amount per date",    "name": "Amount_per_date",    "group": "Orders",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "data",            "description": "<p>Order amount in euro grouped by dates.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"2017-05-25\": 12,\n    \"2017-05-26\": 37,\n    \"2017-05-27\": 16,\n    \"2017-05-28\": 21,\n    ...\n  }\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 500": [          {            "group": "Error 500",            "type": "Object",            "optional": false,            "field": "ServerError",            "description": ""          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 500 ServerError\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/orders/index.js",    "groupTitle": "Orders"  },  {    "type": "get",    "url": "/orders/amount",    "title": "Amount total",    "name": "Amount_total",    "group": "Orders",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Int",            "optional": false,            "field": "data",            "description": "<p>Total order amount in euro.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"32354.00888051546\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 500": [          {            "group": "Error 500",            "type": "Object",            "optional": false,            "field": "ServerError",            "description": ""          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 500 ServerError\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/orders/index.js",    "groupTitle": "Orders"  },  {    "type": "get",    "url": "/orders/count",    "title": "Number of orders",    "name": "Count",    "group": "Orders",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "data",            "description": "<p>Order amount in euro grouped by dates.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"3248\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 500": [          {            "group": "Error 500",            "type": "Object",            "optional": false,            "field": "ServerError",            "description": ""          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 500 ServerError\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/orders/index.js",    "groupTitle": "Orders"  },  {    "type": "get",    "url": "/orders/count/date",    "title": "Count per date",    "name": "Count_per_date",    "group": "Orders",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "data",            "description": "<p>Order amount in euro grouped by dates.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"2017-05-25\": 12,\n    \"2017-05-26\": 37,\n    \"2017-05-27\": 16,\n    \"2017-05-28\": 21,\n    ...\n  }\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 500": [          {            "group": "Error 500",            "type": "Object",            "optional": false,            "field": "ServerError",            "description": ""          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 500 ServerError\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/orders/index.js",    "groupTitle": "Orders"  },  {    "type": "get",    "url": "/producers/count",    "title": "Number of producers",    "name": "Count",    "group": "Producers",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Number of nodes.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"241\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 500": [          {            "group": "Error 500",            "type": "Object",            "optional": false,            "field": "ServerError",            "description": ""          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 500 ServerError\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/producers/index.js",    "groupTitle": "Producers"  },  {    "type": "get",    "url": "/users/count",    "title": "Number of users",    "name": "Count",    "group": "Users",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Number of users.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"2817\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 500": [          {            "group": "Error 500",            "type": "Object",            "optional": false,            "field": "ServerError",            "description": ""          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 500 ServerError\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/users/index.js",    "groupTitle": "Users"  }] });
