const confirm = [
  {
    context: {
      country: 'IND',
      bpp_uri: 'https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f',
      domain: 'ONDC:TRV10',
      timestamp: '2023-03-23T04:48:53Z',
      bap_id: 'example-bap.com',
      bpp_id: 'example-bpp.com',
      transaction_id: 'b580c989-f84d-4abe-af28-2c818aafce3b',
      message_id: '8926b747-0362-4fcc-b795-0994a6287700',
      city: 'std:080',
      core_version: '0.9.4',
      action: 'on_confirm',
      bap_uri: 'https://api.example-bap.com/pilot/bap/cab/v1',
    },
    message: {
      order: {
        id: '7751bd26-3fdc-47ca-9b64-e998dc5abe68',
        provider: {
          id: 'e8542642-0f4a-454c-9a9f-f46110c367a3',
          descriptor: {
            name: 'Raghavendra J',
          },
        },
        items: [
          {
            id: '5777a0bf-9a08-49aa-a97d-1e5561a9622e',
            descriptor: {
              name: 'Auto Ride',
              code: 'RIDE',
            },
            tags: {
              'groups/1/descriptor/name': 'Daytime Charges',
              'groups/1/display': true,
              'groups/1/list/1/descriptor/name': 'Min Fare upto 2 km',
              'groups/1/list/1/value': '₹ 30 upto 2 km',
              'groups/1/list/2/descriptor/name': 'Rate above Min. Fare',
              'groups/1/list/2/value': '₹15 / km',
              'groups/1/list/3/descriptor/name': 'Driver Pickup Charges',
              'groups/1/list/3/value': '₹ 10',
              'groups/1/list/4/descriptor/name': 'Nominal Fare',
              'groups/1/list/4/descriptor/short_desc': 'Driver may quote extra to cover for traffic, chance of return trip, etc.',
              'groups/1/list/4/value': '₹ 10',
              'groups/1/list/5/descriptor/name': 'Nominal Fare',
              'groups/1/list/5/descriptor/short_desc': 'Driver may quote extra to cover for traffic, chance of return trip, etc.',
              'groups/1/list/5/value': '₹ 0 / min',
              'groups/2/descriptor/name': 'Waiting Charges',
              'groups/2/display': true,
              'groups/2/list/1/descriptor/name': 'Night Charges',
              'groups/2/list/1/value': '1.5x of daytime charges applicable at night from 10 PM to 5 PM',
              'groups/2/list/2/descriptor/name': 'Night Shift Start',
              'groups/2/list/2/value': '22:00:00',
              'groups/2/list/3/descriptor/name': 'Night Shift End',
              'groups/2/list/3/value': '05:00:00',
              'groups/3/descriptor/name': 'General Information',
              'groups/3/display': true,
              'groups/3/list/1/descriptor/name': 'Distance to nearest driver',
              'groups/3/list/1/value': '661 m',
              'groups/3/list/2/descriptor/name': 'Wait time upto',
              'groups/3/list/2/value': '3 min',
            },
            fulfillment_id: 'fb5c84d4-1b59-4b9d-96b5-9d79107432c5',
            payment_id: '1',
          },
        ],
        quote: {
          value: '81',
          currency: 'INR',
          breakup: [
            {
              title: 'Base Fare',
              price: {
                value: '30',
                currency: 'INR',
              },
            },
            {
              title: 'Per km fare',
              price: {
                value: '56',
                currency: 'INR',
              },
            },
            {
              title: 'CGST @ 5%',
              price: {
                value: '2.5',
                currency: 'INR',
              },
            },
            {
              title: 'SGST @ 5%',
              price: {
                value: '2.5',
                currency: 'INR',
              },
            },
          ],
        },
        fulfillment: {
          id: 'fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e',
          state: {
            descriptor: {
              code: 'DRIVER_EN_ROUTE',
              name: 'Driver is on the way',
            },
          },
          start: {
            authorization: {
              type: 'OTP',
              token: '234234',
            },
            location: {
              gps: '13.008935, 77.6444085',
              address: {
                ward: 'Uttarahalli Hobli, Ramanjaneyanagar',
                country: 'India',
                building: '6th Main Rd',
                state: 'Karnataka 560061',
                city: 'Bengaluru',
                locality: 'Uttarahalli Hobli',
                door: '98A, Sarovarm 2nd cross',
                area_code: '560061',
                street: 'Ramanjaneyanagar',
              },
            },
          },
          end: {
            location: {
              gps: '12.9711869, 77.5868122',
              address: {
                ward: 'Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital',
                country: 'India',
                building: 'Rangadore Memorial Hospital',
                state: 'Karnataka',
                city: 'Bengaluru',
                locality: 'Basavanagudi',
                door: null,
                area_code: '',
                street: 'Chikkanna Garden',
              },
            },
          },
          agent: {
            name: 'RAGHAVENDRA J',
            phone: '+91-98978675645',
            rateable: true,
            rating: '5',
          },
          vehicle: {
            category: 'AUTO_RICKSHAW',
            registration: 'KA01JG1231',
          },
          customer: {
            person: {
              name: 'John Doe',
              phone: '+91-9897867564',
              tags: {
                'groups/1/descriptor/name': 'Localization',
                'groups/1/display': false,
                'groups/1/list/1/descriptor/name': 'Language',
                'groups/1/list/1/value': 'en',
              },
            },
          },
        },
        payment: {
          id: '7f7896dd-787e-4a0b-8675-e9e6fe93bb8f',
          type: 'ON-FULFILLMENT',
          params: {
            amount: '81',
            currency: 'INR',
            transaction_status: 'NOT-PAID',
          },
        },
      },
    },
  },
];

export default confirm;
