const search = [
  {
    context: {
      country: 'IND',
      bpp_uri: 'https://api.example-bpp.in/path/to/url',
      domain: 'ONDC:TRV10',
      timestamp: '2023-03-23T04:43:02Z',
      bap_id: 'example-bap.in',
      transaction_id: '870782be-6757-43f1-945c-8eeaf9536259',
      bpp_id: 'example-bpp.in',
      message_id: '21e54d3c-9c3b-47c1-aa3b-b0e7b20818ee',
      city: 'std:080',
      core_version: '0.9.4',
      action: 'on_search',
      bap_uri: 'https://api.example-bpp.in/path/to/url',
    },
    message: {
      catalog: {
        'bpp/descriptor': {
          name: 'Acme Taxis',
        },
        'bpp/providers': [
          {
            id: '1',
            descriptor: {
              name: 'Acme Taxis',
            },
            locations: [
              {
                id: '1',
                gps: '12.9164682,77.6089985',
              },
              {
                id: '2',
                gps: '12.91671,77.6092983',
              },
              {
                id: '3',
                gps: '12.9165733,77.6152167',
              },
              {
                id: '4',
                gps: '12.9068578,77.6044567',
              },
            ],
            items: [
              {
                id: '5777a0bf-9a08-49aa-a97d-1e5561a9622e',
                descriptor: {
                  name: 'Economy',
                  code: 'RIDE',
                },
                price: {
                  value: '175',
                  currency: 'INR',
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
                  'groups/1/list/5/descriptor/name': 'Waiting Charges',
                  'groups/1/list/5/descriptor/short_desc': 'Driver may quote extra to cover for traffic, chance of return trip, etc.',
                  'groups/1/list/5/value': '₹ 0 / min',
                },
                fulfillment_id: 'fb5c84d4-1b59-4b9d-96b5-9d79107432c5',
                payment_id: '1',
              },
            ],
            fulfillments: [
              {
                id: 'fb5c84d4-1b59-4b9d-96b5-9d79107432c5',
                start: {
                  location: {
                    gps: '12.9099828, 77.6118226',
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
                    gps: '12.9351856, 77.62459969999999',
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
                vehicle: {
                  category: 'TAXI',
                },
              },
            ],
            payments: [
              {
                id: '1',
                type: 'ON-FULFILLMENT',
                collected_by: 'BPP',
              },
            ],
          },
        ],
      },
    },
  },
];

export default search;
