cul --location 'http://ondc-stage.redbus.in/on_search' \
--header 'Content-Type: application/json' \
--header 'Cookie: JSESSIONID=18o9jto0gf2tk1nuonu3ivioh8' \
--data '{
  "context": {
    "country": "IND",
    "bpp_uri": "https://api.example-bpp.in/path/to/url",
    "domain": "ONDC:TRV10",
    "timestamp": "2023-03-23T04:43:02Z",
    "bap_id": "example-bap.in",
    "transaction_id": "870782be-6757-43f1-945c-8eeaf9536259",
    "bpp_id": "example-bpp.in",
    "message_id": "21e54d3c-9c3b-47c1-aa3b-b0e7b20818ee",
    "city": "std:080",
    "core_version": "0.9.4",
    "action": "on_search",
    "bap_uri": "https://api.example-bpp.in/path/to/url"
  },
  "message": {
    "catalog": {
      "bpp/descriptor": {
        "name": "Acme Taxis"
      },
      "bpp/providers": [
        {
          "id": "1",
          "descriptor": {
            "name": "Acme Taxis"
          },
          "locations": [
            {
              "id": "1",
              "gps": "12.9164682,77.6089985"
            },
            {
              "id": "2",
              "gps": "12.91671,77.6092983"
            },
            {
              "id": "3",
              "gps": "12.9165733,77.6152167"
            },
            {
              "id": "4",
              "gps": "12.9068578,77.6044567"
            }
          ],
          "items": [
            {
              "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e",
              "descriptor": {
                "name": "Economy",
                "code": "RIDE"
              },
              "price": {
                "value": "175",
                "currency": "INR"
              },
              "tags": {
                "groups/1/descriptor/name": "Daytime Charges",
                "groups/1/display": true,
                "groups/1/list/1/descriptor/name": "Min Fare upto 2 km",
                "groups/1/list/1/value": "₹ 30 upto 2 km",
                "groups/1/list/2/descriptor/name": "Rate above Min. Fare",
                "groups/1/list/2/value": "₹15 / km",
                "groups/1/list/3/descriptor/name": "Driver Pickup Charges",
                "groups/1/list/3/value": "₹ 10",
                "groups/1/list/4/descriptor/name": "Nominal Fare",
                "groups/1/list/4/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                "groups/1/list/4/value": "₹ 10",
                "groups/1/list/5/descriptor/name": "Waiting Charges",
                "groups/1/list/5/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
                "groups/1/list/5/value": "₹ 0 / min"
              },
              "fulfillment_id": "fb5c84d4-1b59-4b9d-96b5-9d79107432c5",
              "payment_id": "1"
            }
          ],
          "fulfillments": [
            {
              "id": "fb5c84d4-1b59-4b9d-96b5-9d79107432c5",
              "start": {
                "location": {
                  "gps": "12.9099828, 77.6118226",
                  "address": {
                    "ward": "Uttarahalli Hobli, Ramanjaneyanagar",
                    "country": "India",
                    "building": "6th Main Rd",
                    "state": "Karnataka 560061",
                    "city": "Bengaluru",
                    "locality": "Uttarahalli Hobli",
                    "door": "98A, Sarovarm 2nd cross",
                    "area_code": "560061",
                    "street": "Ramanjaneyanagar"
                  }
                }
              },
              "end": {
                "location": {
                  "gps": "12.9351856, 77.62459969999999",
                  "address": {
                    "ward": "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital",
                    "country": "India",
                    "building": "Rangadore Memorial Hospital",
                    "state": "Karnataka",
                    "city": "Bengaluru",
                    "locality": "Basavanagudi",
                    "door": null,
                    "area_code": "",
                    "street": "Chikkanna Garden"
                  }
                }
              },
              "vehicle": {
                "category": "TAXI"
              }
            }
          ],
          "payments": [
            {
              "id": "1",
              "type": "ON-FULFILLMENT",
              "collected_by": "BPP"
            }
          ]
        }
      ]
    }
  }
}'


curl -L 'http://ondc-stage.redbus.in/on_select' \
--header 'Content-Type: application/json' \
--header 'Cookie: JSESSIONID=18o9jto0gf2tk1nuonu3ivioh8' \
--data '{
  "context": {
    "country": "IND",
    "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
    "domain": "ONDC:TRV10",
    "timestamp": "2023-03-23T04:48:53Z",
    "bap_id": "example-bap.com",
    "bpp_id": "example-bpp.com",
    "message_id": "8926b747-0362-4fcc-b795-0994a6287700",
    "transaction_id": "870782be-6757-43f1-945c-8eeaf9536259",
    "city": "std:080",
    "core_version": "0.9.4",
    "action": "on_select",
    "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1"
  },
  "message": {
    "order": {
      "provider": {
        "id": "e8542642-0f4a-454c-9a9f-f46110c367a3",
        "descriptor": {
          "name": "Raghavendra J"
        }
      },
      "items": [
        {
          "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e",
          "descriptor": {
            "name": "Auto Ride",
            "code": "RIDE"
          },
          "tags": {
            "groups/1/descriptor/name": "Daytime Charges",
            "groups/1/display": true,
            "groups/1/list/1/descriptor/name": "Min Fare upto 2 km",
            "groups/1/list/1/value": "₹ 30 upto 2 km",
            "groups/1/list/2/descriptor/name": "Rate above Min. Fare",
            "groups/1/list/2/value": "₹15 / km",
            "groups/1/list/3/descriptor/name": "Driver Pickup Charges",
            "groups/1/list/3/value": "₹ 10",
            "groups/1/list/4/descriptor/name": "Nominal Fare",
            "groups/1/list/4/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
            "groups/1/list/4/value": "₹ 10",
            "groups/1/list/5/descriptor/name": "Nominal Fare",
            "groups/1/list/5/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
            "groups/1/list/5/value": "₹ 0 / min",
            "groups/2/descriptor/name": "Waiting Charges",
            "groups/2/display": true,
            "groups/2/list/1/descriptor/name": "Night Charges",
            "groups/2/list/1/value": "1.5x of daytime charges applicable at night from 10 PM to 5 PM",
            "groups/2/list/2/descriptor/name": "Night Shift Start",
            "groups/2/list/2/value": "22:00:00",
            "groups/2/list/3/descriptor/name": "Night Shift End",
            "groups/2/list/3/value": "05:00:00",
            "groups/3/descriptor/name": "General Information",
            "groups/3/display": true,
            "groups/3/list/1/descriptor/name": "Distance to nearest driver",
            "groups/3/list/1/value": "661 m",
            "groups/3/list/2/descriptor/name": "Wait time upto",
            "groups/3/list/2/value": "3 min"
          },
          "fulfillment_id": "fb5c84d4-1b59-4b9d-96b5-9d79107432c5",
          "payment_id": "1"
        }
      ],
      "quote": {
        "value": "76",
        "currency": "INR",
        "breakup": [
          {
            "title": "Base Fare",
            "price": {
              "value": "30",
              "currency": "INR"
            }
          },
          {
            "title": "Per km fare",
            "price": {
              "value": "56",
              "currency": "INR"
            }
          }
        ],
        "ttl": "P200S"
      },
      "fulfillment": {
        "id": "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
        "state": {
          "descriptor": {
            "name": "Found drivers",
            "code": "AGENTS_FOUND"
          }
        },
        "start": {
          "location": {
            "gps": "13.008935, 77.6444085",
            "address": {
              "ward": "Uttarahalli Hobli, Ramanjaneyanagar",
              "country": "India",
              "building": "6th Main Rd",
              "state": "Karnataka 560061",
              "city": "Bengaluru",
              "locality": "Uttarahalli Hobli",
              "door": "98A, Sarovarm 2nd cross",
              "area_code": "560061",
              "street": "Ramanjaneyanagar"
            }
          }
        },
        "end": {
          "location": {
            "gps": "12.9711869, 77.5868122",
            "address": {
              "ward": "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital",
              "country": "India",
              "building": "Rangadore Memorial Hospital",
              "state": "Karnataka",
              "city": "Bengaluru",
              "locality": "Basavanagudi",
              "door": null,
              "area_code": "",
              "street": "Chikkanna Garden"
            }
          }
        },
        "agent": {
          "name": "RAGHAVENDRA J",
          "rateable": true,
          "rating": "5"
        },
        "vehicle": {
          "category": "AUTO_RICKSHAW"
        }
      }
    }
  }
}'

curl --location 'http://ondc-stage.redbus.in/on_track' \
--header 'Content-Type: application/json' \
--header 'Cookie: JSESSIONID=18o9jto0gf2tk1nuonu3ivioh8' \
--data '{
  "context": {
    "country": "IND",
    "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
    "domain": "ONDC:TRV10",
    "timestamp": "2023-03-23T05:41:09Z",
    "bap_id": "example-bap.com",
    "bpp_id": "example-bpp.com",
    "message_id": "ec3dea8c-c64c-4f06-b2a0-ec1f9584d7ba",
    "city": "std:080",
    "core_version": "0.9.4",
    "action": "on_track",
    "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1"
  },
  "message": {
    "tracking": {
      "content_type": "application/json",
      "url": "https://api.beckn.juspay.in/dobpp/ui/driver/location/abc9f0aa-bbfd-4e91-b378-41feee12f05f",
      "status": "active"
    }
  }
}'

curl --location 'http://ondc-stage.redbus.in/on_confirm' \
--header 'Content-Type: application/json' \
--header 'Cookie: JSESSIONID=18o9jto0gf2tk1nuonu3ivioh8' \
--data-raw '{
  "context": {
    "country": "IND",
    "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
    "domain": "ONDC:TRV10",
    "timestamp": "2023-03-23T04:48:53Z",
    "bap_id": "example-bap.com",
    "bpp_id": "example-bpp.com",
    "transaction_id": "b580c989-f84d-4abe-af28-2c818aafce3b",
    "message_id": "8926b747-0362-4fcc-b795-0994a6287700",
    "city": "std:080",
    "core_version": "0.9.4",
    "action": "on_confirm",
    "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1"
  },
  "message": {
    "order": {
      "id": "7751bd26-3fdc-47ca-9b64-e998dc5abe68",
      "provider": {
        "id": "e8542642-0f4a-454c-9a9f-f46110c367a3",
        "descriptor": {
          "name": "Raghavendra J"
        }
      },
      "items": [
        {
          "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e",
          "descriptor": {
            "name": "Auto Ride",
            "code": "RIDE"
          },
          "tags": {
            "groups/1/descriptor/name": "Daytime Charges",
            "groups/1/display": true,
            "groups/1/list/1/descriptor/name": "Min Fare upto 2 km",
            "groups/1/list/1/value": "₹ 30 upto 2 km",
            "groups/1/list/2/descriptor/name": "Rate above Min. Fare",
            "groups/1/list/2/value": "₹15 / km",
            "groups/1/list/3/descriptor/name": "Driver Pickup Charges",
            "groups/1/list/3/value": "₹ 10",
            "groups/1/list/4/descriptor/name": "Nominal Fare",
            "groups/1/list/4/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
            "groups/1/list/4/value": "₹ 10",
            "groups/1/list/5/descriptor/name": "Nominal Fare",
            "groups/1/list/5/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
            "groups/1/list/5/value": "₹ 0 / min",
            "groups/2/descriptor/name": "Waiting Charges",
            "groups/2/display": true,
            "groups/2/list/1/descriptor/name": "Night Charges",
            "groups/2/list/1/value": "1.5x of daytime charges applicable at night from 10 PM to 5 PM",
            "groups/2/list/2/descriptor/name": "Night Shift Start",
            "groups/2/list/2/value": "22:00:00",
            "groups/2/list/3/descriptor/name": "Night Shift End",
            "groups/2/list/3/value": "05:00:00",
            "groups/3/descriptor/name": "General Information",
            "groups/3/display": true,
            "groups/3/list/1/descriptor/name": "Distance to nearest driver",
            "groups/3/list/1/value": "661 m",
            "groups/3/list/2/descriptor/name": "Wait time upto",
            "groups/3/list/2/value": "3 min"
          },
          "fulfillment_id": "fb5c84d4-1b59-4b9d-96b5-9d79107432c5",
          "payment_id": "1"
        }
      ],
      "quote": {
        "value": "81",
        "currency": "INR",
        "breakup": [
          {
            "title": "Base Fare",
            "price": {
              "value": "30",
              "currency": "INR"
            }
          },
          {
            "title": "Per km fare",
            "price": {
              "value": "56",
              "currency": "INR"
            }
          },
          {
            "title": "CGST @ 5%",
            "price": {
              "value": "2.5",
              "currency": "INR"
            }
          },
          {
            "title": "SGST @ 5%",
            "price": {
              "value": "2.5",
              "currency": "INR"
            }
          }
        ]
      },
      "fulfillment": {
        "id": "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
        "state": {
          "descriptor": {
            "code": "DRIVER_EN_ROUTE",
            "name": "Driver is on the way"
          }
        },
        "start": {
          "authorization": {
            "type": "OTP",
            "token": "234234"
          },
          "location": {
            "gps": "13.008935, 77.6444085",
            "address": {
              "ward": "Uttarahalli Hobli, Ramanjaneyanagar",
              "country": "India",
              "building": "6th Main Rd",
              "state": "Karnataka 560061",
              "city": "Bengaluru",
              "locality": "Uttarahalli Hobli",
              "door": "98A, Sarovarm 2nd cross",
              "area_code": "560061",
              "street": "Ramanjaneyanagar"
            }
          }
        },
        "end": {
          "location": {
            "gps": "12.9711869, 77.5868122",
            "address": {
              "ward": "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital",
              "country": "India",
              "building": "Rangadore Memorial Hospital",
              "state": "Karnataka",
              "city": "Bengaluru",
              "locality": "Basavanagudi",
              "door": null,
              "area_code": "",
              "street": "Chikkanna Garden"
            }
          }
        },
        "agent": {
          "name": "RAGHAVENDRA J",
          "phone": "+91-98978675645",
          "rateable": true,
          "rating": "5"
        },
        "vehicle": {
          "category": "AUTO_RICKSHAW",
          "registration": "KA01JG1231"
        },
        "customer": {
          "person": {
            "name": "John Doe",
            "phone": "+91-9897867564",
            "tags": {
              "groups/1/descriptor/name": "Localization",
              "groups/1/display": false,
              "groups/1/list/1/descriptor/name": "Language",
              "groups/1/list/1/value": "en"
            }
          }
        }
      },
      "payment": {
        "id": "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
        "type": "ON-FULFILLMENT",
        "params": {
          "amount": "81",
          "currency": "INR",
          "transaction_status": "NOT-PAID"
        }
      }
    }
  }
}'

curl --location 'http://ondc-stage.redbus.in/on_init' \
--header 'Content-Type: application/json' \
--header 'Cookie: JSESSIONID=18o9jto0gf2tk1nuonu3ivioh8' \
--data-raw '{
  "context": {
    "country": "IND",
    "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
    "domain": "ONDC:TRV10",
    "timestamp": "2023-03-23T04:48:53Z",
    "bap_id": "example-bap.com",
    "bpp_id": "example-bpp.com",
    "transaction_id": "b580c989-f84d-4abe-af28-2c818aafce3b",
    "message_id": "8926b747-0362-4fcc-b795-0994a6287700",
    "city": "std:080",
    "core_version": "0.9.4",
    "action": "on_init",
    "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1"
  },
  "message": {
    "order": {
      "provider": {
        "id": "e8542642-0f4a-454c-9a9f-f46110c367a3",
        "descriptor": {
          "name": "Raghavendra J"
        }
      },
      "items": [
        {
          "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e",
          "descriptor": {
            "name": "Auto Ride",
            "code": "RIDE"
          },
          "tags": {
            "groups/1/descriptor/name": "Daytime Charges",
            "groups/1/display": true,
            "groups/1/list/1/descriptor/name": "Min Fare upto 2 km",
            "groups/1/list/1/value": "₹ 30 upto 2 km",
            "groups/1/list/2/descriptor/name": "Rate above Min. Fare",
            "groups/1/list/2/value": "₹15 / km",
            "groups/1/list/3/descriptor/name": "Driver Pickup Charges",
            "groups/1/list/3/value": "₹ 10",
            "groups/1/list/4/descriptor/name": "Nominal Fare",
            "groups/1/list/4/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
            "groups/1/list/4/value": "₹ 10",
            "groups/1/list/5/descriptor/name": "Nominal Fare",
            "groups/1/list/5/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
            "groups/1/list/5/value": "₹ 0 / min",
            "groups/2/descriptor/name": "Waiting Charges",
            "groups/2/display": true,
            "groups/2/list/1/descriptor/name": "Night Charges",
            "groups/2/list/1/value": "1.5x of daytime charges applicable at night from 10 PM to 5 PM",
            "groups/2/list/2/descriptor/name": "Night Shift Start",
            "groups/2/list/2/value": "22:00:00",
            "groups/2/list/3/descriptor/name": "Night Shift End",
            "groups/2/list/3/value": "05:00:00",
            "groups/3/descriptor/name": "General Information",
            "groups/3/display": true,
            "groups/3/list/1/descriptor/name": "Distance to nearest driver",
            "groups/3/list/1/value": "661 m",
            "groups/3/list/2/descriptor/name": "Wait time upto",
            "groups/3/list/2/value": "3 min"
          },
          "fulfillment_id": "fb5c84d4-1b59-4b9d-96b5-9d79107432c5",
          "payment_id": "1"
        }
      ],
      "quote": {
        "value": "81",
        "currency": "INR",
        "breakup": [
          {
            "title": "Base Fare",
            "price": {
              "value": "30",
              "currency": "INR"
            }
          },
          {
            "title": "Per km fare",
            "price": {
              "value": "56",
              "currency": "INR"
            }
          },
          {
            "title": "CGST @ 5%",
            "price": {
              "value": "2.5",
              "currency": "INR"
            }
          },
          {
            "title": "SGST @ 5%",
            "price": {
              "value": "2.5",
              "currency": "INR"
            }
          }
        ]
      },
      "fulfillment": {
        "id": "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
        "start": {
          "location": {
            "gps": "13.008935, 77.6444085",
            "address": {
              "ward": "Uttarahalli Hobli, Ramanjaneyanagar",
              "country": "India",
              "building": "6th Main Rd",
              "state": "Karnataka 560061",
              "city": "Bengaluru",
              "locality": "Uttarahalli Hobli",
              "door": "98A, Sarovarm 2nd cross",
              "area_code": "560061",
              "street": "Ramanjaneyanagar"
            }
          }
        },
        "end": {
          "location": {
            "gps": "12.9711869, 77.5868122",
            "address": {
              "ward": "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital",
              "country": "India",
              "building": "Rangadore Memorial Hospital",
              "state": "Karnataka",
              "city": "Bengaluru",
              "locality": "Basavanagudi",
              "door": null,
              "area_code": "",
              "street": "Chikkanna Garden"
            }
          }
        },
        "agent": {
          "name": "RAGHAVENDRA J",
          "rateable": true,
          "rating": "5"
        },
        "vehicle": {
          "category": "AUTO_RICKSHAW"
        },
        "customer": {
          "person": {
            "name": "John Doe",
            "phone": "+91-9897867564",
            "tags": {
              "groups/1/descriptor/name": "Localization",
              "groups/1/display": false,
              "groups/1/list/1/descriptor/name": "Language",
              "groups/1/list/1/value": "en"
            }
          }
        }
      },
      "payment": {
        "id": "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
        "type": "ON-FULFILLMENT",
        "params": {
          "amount": "81",
          "currency": "INR",
          "transaction_status": "NOT-PAID"
        }
      }
    }
  }
}'

curl --location 'http://ondc-stage.redbus.in/on_status' \
--header 'Content-Type: application/json' \
--header 'Cookie: JSESSIONID=18o9jto0gf2tk1nuonu3ivioh8' \
--data-raw '{
  "context": {
    "country": "IND",
    "bpp_uri": "https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
    "domain": "ONDC:TRV10",
    "timestamp": "2023-03-23T04:48:53Z",
    "bap_id": "example-bap.com",
    "bpp_id": "example-bpp.com",
    "transaction_id": "b580c989-f84d-4abe-af28-2c818aafce3b",
    "message_id": "8926b747-0362-4fcc-b795-0994a6287700",
    "city": "std:080",
    "core_version": "0.9.4",
    "action": "on_status",
    "bap_uri": "https://api.example-bap.com/pilot/bap/cab/v1"
  },
  "message": {
    "order": {
      "id": "7751bd26-3fdc-47ca-9b64-e998dc5abe68",
      "provider": {
        "id": "e8542642-0f4a-454c-9a9f-f46110c367a3",
        "descriptor": {
          "name": "Raghavendra J"
        }
      },
      "items": [
        {
          "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e",
          "descriptor": {
            "name": "Auto Ride",
            "code": "RIDE"
          },
          "tags": {
            "groups/1/descriptor/name": "Daytime Charges",
            "groups/1/display": true,
            "groups/1/list/1/descriptor/name": "Min Fare upto 2 km",
            "groups/1/list/1/value": "₹ 30 upto 2 km",
            "groups/1/list/2/descriptor/name": "Rate above Min. Fare",
            "groups/1/list/2/value": "₹15 / km",
            "groups/1/list/3/descriptor/name": "Driver Pickup Charges",
            "groups/1/list/3/value": "₹ 10",
            "groups/1/list/4/descriptor/name": "Nominal Fare",
            "groups/1/list/4/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
            "groups/1/list/4/value": "₹ 10",
            "groups/1/list/5/descriptor/name": "Nominal Fare",
            "groups/1/list/5/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
            "groups/1/list/5/value": "₹ 0 / min",
            "groups/2/descriptor/name": "Waiting Charges",
            "groups/2/display": true,
            "groups/2/list/1/descriptor/name": "Night Charges",
            "groups/2/list/1/value": "1.5x of daytime charges applicable at night from 10 PM to 5 PM",
            "groups/2/list/2/descriptor/name": "Night Shift Start",
            "groups/2/list/2/value": "22:00:00",
            "groups/2/list/3/descriptor/name": "Night Shift End",
            "groups/2/list/3/value": "05:00:00",
            "groups/3/descriptor/name": "General Information",
            "groups/3/display": true,
            "groups/3/list/1/descriptor/name": "Distance to nearest driver",
            "groups/3/list/1/value": "661 m",
            "groups/3/list/2/descriptor/name": "Wait time upto",
            "groups/3/list/2/value": "3 min"
          },
          "fulfillment_id": "fb5c84d4-1b59-4b9d-96b5-9d79107432c5",
          "payment_id": "1"
        }
      ],
      "quote": {
        "value": "81",
        "currency": "INR",
        "breakup": [
          {
            "title": "Base Fare",
            "price": {
              "value": "30",
              "currency": "INR"
            }
          },
          {
            "title": "Per km fare",
            "price": {
              "value": "56",
              "currency": "INR"
            }
          },
          {
            "title": "CGST @ 5%",
            "price": {
              "value": "2.5",
              "currency": "INR"
            }
          },
          {
            "title": "SGST @ 5%",
            "price": {
              "value": "2.5",
              "currency": "INR"
            }
          }
        ]
      },
      "fulfillment": {
        "id": "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
        "state": {
          "descriptor": {
            "code": "DRIVER_AT_PICKUP",
            "name": "Driver Arrived at Pickup Location"
          }
        },
        "start": {
          "authorization": {
            "type": "OTP",
            "token": "234234"
          },
          "location": {
            "gps": "13.008935, 77.6444085",
            "address": {
              "ward": "Uttarahalli Hobli, Ramanjaneyanagar",
              "country": "India",
              "building": "6th Main Rd",
              "state": "Karnataka 560061",
              "city": "Bengaluru",
              "locality": "Uttarahalli Hobli",
              "door": "98A, Sarovarm 2nd cross",
              "area_code": "560061",
              "street": "Ramanjaneyanagar"
            }
          }
        },
        "end": {
          "location": {
            "gps": "12.9711869, 77.5868122",
            "address": {
              "ward": "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital",
              "country": "India",
              "building": "Rangadore Memorial Hospital",
              "state": "Karnataka",
              "city": "Bengaluru",
              "locality": "Basavanagudi",
              "door": null,
              "area_code": "",
              "street": "Chikkanna Garden"
            }
          }
        },
        "agent": {
          "name": "RAGHAVENDRA J",
          "phone": "+91-98978675645",
          "rateable": true,
          "rating": "5"
        },
        "vehicle": {
          "category": "AUTO_RICKSHAW",
          "registration": "KA01JG1231"
        },
        "customer": {
          "person": {
            "name": "John Doe",
            "phone": "+91-9897867564",
            "tags": {
              "groups/1/descriptor/name": "Localization",
              "groups/1/display": false,
              "groups/1/list/1/descriptor/name": "Language",
              "groups/1/list/1/value": "en"
            }
          }
        }
      },
      "payment": {
        "id": "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
        "type": "ON-FULFILLMENT",
        "params": {
          "amount": "81",
          "currency": "INR",
          "transaction_status": "NOT-PAID"
        }
      }
    }
  }
}'

