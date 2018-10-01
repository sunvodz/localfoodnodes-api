define({ "api": [  {    "type": "get",    "url": "/delivery/:nodeId/:date/orders",    "title": "Orders",    "name": "Number_of_orders",    "group": "Delivery",    "version": "1.0.0",    "description": "<p>Get the number of orders for the specific delivery.</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "nodeId",            "description": "<p>The node id</p>"          },          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "date",            "description": "<p>Date formatted as yyyy-mm-dd.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Amount.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"45\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Object",            "optional": false,            "field": "error",            "description": "<p>Object containing error message.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/delivery/index.js",    "groupTitle": "Delivery"  },  {    "type": "get",    "url": "/delivery/:nodeId/:date/producers",    "title": "Producers",    "name": "Number_of_producers_for_a_specific_delivery",    "group": "Delivery",    "version": "1.0.0",    "description": "<p>Get the number of producers for a specific delivery.</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "nodeId",            "description": "<p>The node id</p>"          },          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "date",            "description": "<p>Date formatted as yyyy-mm-dd.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Number of producers for the delivery.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"45\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Object",            "optional": false,            "field": "error",            "description": "<p>Object containing error message.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/delivery/index.js",    "groupTitle": "Delivery"  },  {    "type": "get",    "url": "/delivery/:nodeId/:date/products",    "title": "Products",    "name": "Number_of_sold_products_per_delivery",    "group": "Delivery",    "version": "1.0.0",    "description": "<p>Get the number of sold products for a delivery.</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "nodeId",            "description": "<p>The node id</p>"          },          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "date",            "description": "<p>Date formatted as yyyy-mm-dd.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Number of sold product for delivery.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"45\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Object",            "optional": false,            "field": "error",            "description": "<p>Object containing error message.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/delivery/index.js",    "groupTitle": "Delivery"  },  {    "type": "get",    "url": "/delivery/:nodeId/:date/customers",    "title": "Customers",    "name": "Total_number_of_customers_per_node__and_date_",    "group": "Delivery",    "version": "1.0.0",    "description": "<p>Get the total number of ordering customers for a node. If you provide a date you'll get the number of customers who placed orders for the specified date.</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "nodeId",            "description": "<p>The node id</p>"          },          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "date",            "description": "<p>Date formatted as yyyy-mm-dd.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Number of customers per node (and date).</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"45\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Object",            "optional": false,            "field": "error",            "description": "<p>Object containing error message.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/delivery/index.js",    "groupTitle": "Delivery"  },  {    "type": "get",    "url": "/delivery/:nodeId/:date/amount",    "title": "Amount",    "name": "Total_order_amount",    "group": "Delivery",    "version": "1.0.0",    "description": "<p>Get the total amount for the products sold for the specific delivery.</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "nodeId",            "description": "<p>The node id</p>"          },          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "date",            "description": "<p>Date formatted as yyyy-mm-dd.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Amount.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"45\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Object",            "optional": false,            "field": "error",            "description": "<p>Object containing error message.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/delivery/index.js",    "groupTitle": "Delivery"  },  {    "type": "get",    "url": "/node/:nodeId/products",    "title": "Products",    "name": "Number_of_currently_available_products",    "group": "Node",    "version": "1.0.0",    "description": "<p>Get the number of sold products for a node. If you provide a date you'll get the number of products sold on the specificed date.</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "nodeId",            "description": "<p>The node id</p>"          },          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "date",            "description": "<p>Date formatted as yyyy-mm-dd.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Number of sold product for node (and date).</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"45\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Object",            "optional": false,            "field": "error",            "description": "<p>Object containing error message.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/node/index.js",    "groupTitle": "Node"  },  {    "type": "get",    "url": "/node/:nodeId/members",    "title": "Members",    "name": "Number_of_members",    "group": "Node",    "version": "1.0.0",    "description": "<p>Get the number of users that's currently a member of a node.</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "nodeId",            "description": "<p>The node id</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Number of members.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"122\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Object",            "optional": false,            "field": "error",            "description": "<p>Object containing error message.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/node/index.js",    "groupTitle": "Node"  },  {    "type": "get",    "url": "/node/:nodeId/producers",    "title": "Producers",    "name": "Number_of_producers",    "group": "Node",    "version": "1.0.0",    "description": "<p>Get the number of producers for a node.</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "nodeId",            "description": "<p>The node id</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Number of producers</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"45\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Object",            "optional": false,            "field": "error",            "description": "<p>Object containing error message.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/node/index.js",    "groupTitle": "Node"  },  {    "type": "get",    "url": "/node/:nodeId/customers",    "title": "Customers",    "name": "Total_number_of_customers",    "group": "Node",    "version": "1.0.0",    "description": "<p>Get the total number of ordering customers on the node.</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "nodeId",            "description": "<p>The node id</p>"          },          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "date",            "description": "<p>Date formatted as yyyy-mm-dd.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Number of customers.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"45\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Object",            "optional": false,            "field": "error",            "description": "<p>Object containing error message.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/node/index.js",    "groupTitle": "Node"  },  {    "type": "get",    "url": "/node/:nodeId/orders",    "title": "Number or products ordered",    "name": "Total_number_orders",    "group": "Node",    "version": "1.0.0",    "description": "<p>Get the total number of products ordered for the specified node.</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "nodeId",            "description": "<p>The node id</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Number of orders.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"122\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Object",            "optional": false,            "field": "error",            "description": "<p>Object containing error message.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/node/index.js",    "groupTitle": "Node"  },  {    "type": "get",    "url": "/node/:nodeId/amount",    "title": "Total order amount",    "name": "Total_order_amount_per_node",    "group": "Node",    "version": "1.0.0",    "description": "<p>Get the total amount (EUR) for all orders placed on the specified node.</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Int",            "optional": false,            "field": "nodeId",            "description": "<p>The node id</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "currency",            "description": "<p>Currency code to convert amount</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Amount in EUR if no other currency is specified.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"432.0038\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Object",            "optional": false,            "field": "error",            "description": "<p>Object containing error message.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/node/index.js",    "groupTitle": "Node"  },  {    "type": "get",    "url": "/nodes/count",    "title": "Count",    "name": "Count",    "group": "Nodes",    "version": "1.0.0",    "description": "<p>Get the total number of nodes registered on localfoodnodes.org.</p>",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Number of nodes.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"78\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 500": [          {            "group": "Error 500",            "type": "Object",            "optional": false,            "field": "error",            "description": "<p>Object containing error message.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/nodes/index.js",    "groupTitle": "Nodes"  },  {    "type": "get",    "url": "/orders/amount/date",    "title": "Amount per date",    "name": "Amount_per_date",    "group": "Orders",    "version": "1.0.0",    "description": "<p>Get the total order amount grouped by date.</p>",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "data",            "description": "<p>Total order amount grouped by date</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"2017-05-25\": 12,\n    \"2017-05-26\": 37,\n    \"2017-05-27\": 16,\n    \"2017-05-28\": 21,\n    ...\n  }\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Object",            "optional": false,            "field": "error",            "description": "<p>Object containing error message.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/orders/index.js",    "groupTitle": "Orders"  },  {    "type": "get",    "url": "/orders/count",    "title": "Product count",    "name": "Total_number_of_ordered_products",    "group": "Orders",    "version": "1.0.0",    "description": "<p>Get the total number of ordered products.</p>",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "data",            "description": "<p>Total number of ordered product.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"3248\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Object",            "optional": false,            "field": "error",            "description": "<p>Object containing error message.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/orders/index.js",    "groupTitle": "Orders"  },  {    "type": "get",    "url": "/orders/count",    "title": "Count",    "name": "Total_number_of_orders",    "group": "Orders",    "version": "1.0.0",    "description": "<p>Get the total number of orders.</p>",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "data",            "description": "<p>Total order count.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"3248\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Object",            "optional": false,            "field": "error",            "description": "<p>Object containing error message.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/orders/index.js",    "groupTitle": "Orders"  },  {    "type": "get",    "url": "/orders/count/date",    "title": "Count per date",    "name": "Total_number_of_orders_grouped_per_date",    "group": "Orders",    "version": "1.0.0",    "description": "<p>Get the total number of orders grouped per date.</p>",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "data",            "description": "<p>Total order product count grouped by date.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"2017-05-25\": 12,\n    \"2017-05-26\": 37,\n    \"2017-05-27\": 16,\n    \"2017-05-28\": 21,\n    ...\n  }\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Object",            "optional": false,            "field": "error",            "description": "<p>Object containing error message.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/orders/index.js",    "groupTitle": "Orders"  },  {    "type": "get",    "url": "/orders/amount",    "title": "Amount",    "name": "Total_order_amount",    "group": "Orders",    "version": "1.0.0",    "description": "<p>Get the total order amount.</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "currency",            "description": "<p>Currency code to convert amount</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Int",            "optional": false,            "field": "data",            "description": "<p>Amount in EUR if no other currency is specified.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"32354.00888051546\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Object",            "optional": false,            "field": "error",            "description": "<p>Object containing error message.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/orders/index.js",    "groupTitle": "Orders"  },  {    "type": "get",    "url": "/producers/count",    "title": "Count",    "name": "Number_of_producers",    "group": "Producers",    "version": "1.0.0",    "description": "<p>Get the number of producers registered on localfoodnodes.org.</p>",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Number of nodes.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"241\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Object",            "optional": false,            "field": "error",            "description": "<p>Object containing error message.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/producers/index.js",    "groupTitle": "Producers"  },  {    "type": "get",    "url": "/users/count",    "title": "Count",    "name": "Number_of_users",    "group": "Users",    "version": "1.0.0",    "description": "<p>Get the number of users registered on localfoodnodes.org.</p>",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Number of users.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"2817\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Object",            "optional": false,            "field": "error",            "description": "<p>Object containing error message.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    message: \"A message describing the error.\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/v1.0/users/index.js",    "groupTitle": "Users"  }] });
