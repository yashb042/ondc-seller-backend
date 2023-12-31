const track = [
  {
    context: {
      country: 'IND',
      bpp_uri: 'https://api.example-bpp.com/dobpp/beckn/7f7896dd-787e-4a0b-8675-e9e6fe93bb8f',
      domain: 'ONDC:TRV10',
      timestamp: '2023-03-23T05:41:09Z',
      bap_id: 'example-bap.com',
      bpp_id: 'example-bpp.com',
      message_id: 'ec3dea8c-c64c-4f06-b2a0-ec1f9584d7ba',
      city: 'std:080',
      core_version: '0.9.4',
      action: 'on_track',
      bap_uri: 'https://api.example-bap.com/pilot/bap/cab/v1',
    },
    message: {
      tracking: {
        content_type: 'application/json',
        url: 'https://api.beckn.juspay.in/dobpp/ui/driver/location/abc9f0aa-bbfd-4e91-b378-41feee12f05f',
        status: 'active',
      },
    },
  },
];

export default track;
