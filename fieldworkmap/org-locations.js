var addressPoints = [
  [
    "Development of a 10 m Resolution Maize and Soybean Map Over China<br/>Conference: 2022-12-13, Chicago, Illinois, USA",
    41.8755616,
    -87.6244212
  ],
  [
    "Advancing 10-m Crop Mapping Using All Sentinel-2 Observations over the Contiguous United States<br/>Conference: 2024-12-11, Washington, D.C., USA",
    38.8950368,
    -77.0365427
  ],
  [
    "10-m Crop Mapping Using Satellite Data, Field Survey and Machine Learning over North America<br/>Conference: 2023-12-15, San Francisco, California, USA",
    37.7792588,
    -122.4193286
  ],
  [
    "<br/>Fieldwork: 2023-07-31, Greenville, Ohio, USA",
    40.1023909,
    -84.6332986
  ],
  [
    "<br/>Fieldwork: 2023-08-01, Indianapolis, Indiana, USA",
    39.7683331,
    -86.1583502
  ],
  [
    "<br/>Fieldwork: 2023-08-02, Cairo, Illinois, USA",
    37.0057958,
    -89.1772449
  ],
  [
    "<br/>Fieldwork: 2023-08-03, Olive Branch, Mississippi, USA",
    34.9617605,
    -89.8295315
  ],
  [
    "<br/>Fieldwork: 2023-08-04, Grenada, Mississippi, USA",
    33.772401,
    -89.7674875
  ],
  [
    "<br/>Fieldwork: 2023-08-05, Brewton, Alabama, USA",
    31.1039239,
    -87.0722655
  ],
  [
    "<br/>Fieldwork: 2023-08-06, Matthews, North Carolina, USA",
    35.1159532,
    -80.7224386
  ],
  [
    "<br/>Fieldwork: 2023-08-07, Roanoke Rapids, North Carolina, USA",
    36.4558016,
    -77.6573514
  ],
  [
    "<br/>Fieldwork: 2024-06-05, Dallas, Texas, USA",
    32.7762719,
    -96.7968559
  ],
  [
    "<br/>Fieldwork: 2024-06-06, Allen, Texas, USA",
    33.1031744,
    -96.6705503
  ],
  [
    "<br/>Fieldwork: 2024-06-07, Lawton, Oklahoma, USA",
    34.6086854,
    -98.3903305
  ],
  [
    "<br/>Fieldwork: 2024-06-08, Odessa, Texas, USA",
    31.8457149,
    -102.367687
  ],
  [
    "<br/>Fieldwork: 2024-06-09, Amarillo, Texas, USA",
    35.20729,
    -101.8371192
  ],
  [
    "<br/>Fieldwork: 2024-06-10, Limon, Colorado, USA",
    39.2660453,
    -103.6856688
  ],
  [
    "<br/>Fieldwork: 2024-06-11, Ogallala, Nebraska, USA",
    41.1248328,
    -101.7189583
  ],
  [
    "<br/>Fieldwork: 2024-06-12, Colby, Kansas, USA",
    39.3959655,
    -101.0526881
  ],
  [
    "<br/>Fieldwork: 2024-06-13, Dodge City, Kansas, USA",
    37.7527982,
    -100.0170787
  ],
  [
    "<br/>Fieldwork: 2024-06-14, Arlington, Texas, USA",
    32.7355816,
    -97.1071186
  ],
  [
    "<br/>Fieldwork: 2024-08-11, Chicago, Illinois, USA",
    41.8755616,
    -87.6244212
  ],
  [
    "<br/>Fieldwork: 2024-08-11, Madison, Wisconsin, USA",
    43.074761,
    -89.3837613
  ],
  [
    "<br/>Fieldwork: 2024-08-12, Rice Lake, Wisconsin, USA",
    45.5027926,
    -91.733423
  ],
  [
    "<br/>Fieldwork: 2024-08-13, Wahpeton, North Dakota, USA",
    46.265879,
    -96.608863
  ],
  [
    "<br/>Fieldwork: 2024-08-14, Ames, Iowa, USA",
    42.0267567,
    -93.6170448
  ],
  [
    "<br/>Fieldwork: 2024-08-15, Milbank, South Dakota, USA",
    45.219131,
    -96.635617
  ],
  [
    "<br/>Fieldwork: 2024-08-16, Blue Springs, Missouri, USA",
    39.017316,
    -94.282265
  ],
  [
    "<br/>Fieldwork: 2024-08-17, Coralville, Iowa, USA",
    41.6759977,
    -91.580705
  ],
  [
    "<br/>Fieldwork: 2024-08-18, Oskaloosa, Iowa, USA",
    41.2951037,
    -92.6448451
  ],
  [
    "<br/>Fieldwork: 2024-08-19, Danville, Illinois, USA",
    40.125222,
    -87.6304614
  ],
  [
    "<br/>Fieldwork: 2024-08-20, Des Plaines, Illinois, USA",
    42.0415823,
    -87.8873916
  ],
  [
    "<br/>Fieldwork: 2025-07-27, Sioux Falls, South Dakota, USA",
    43.5476008,
    -96.7293629
  ],
  [
    "<br/>Fieldwork: 2025-07-28, Aberdeen, South Dakota, USA",
    45.4649805,
    -98.487813
  ],
  [
    "<br/>Fieldwork: 2025-07-29, Dickinson, North Dakota, USA",
    46.8791756,
    -102.7896242
  ],
  [
    "<br/>Fieldwork: 2025-07-30, Deadwood, South Dakota, USA",
    44.3743812,
    -103.7290723
  ],
  [
    "<br/>Fieldwork: 2025-07-31, Miles City, Montana, USA",
    46.4070219,
    -105.847843
  ],
  [
    "<br/>Fieldwork: 2025-08-01, Great Falls, Montana, USA",
    47.5048851,
    -111.29189
  ],
  [
    "<br/>Fieldwork: 2025-08-02, Shelby, Montana, USA",
    48.5054997,
    -111.856872
  ],
  [
    "<br/>Fieldwork: 2025-08-03, Williston, North Dakota, USA",
    48.1465457,
    -103.621814
  ],
  [
    "<br/>Fieldwork: 2025-08-04, Harvey, North Dakota, USA",
    47.769723,
    -99.935404
  ],
  [
    "<br/>Fieldwork: 2025-08-05, West Fargo, North Dakota, USA",
    46.874967,
    -96.900362
  ],
  [
    "<br/>Fieldwork: 2017-03, Poyang Lake, Jiangxi, China",
    29.1859199,
    116.2046216
  ],
  [
    "<br/>Fieldwork: 2016-08, Taizhou Bay, Zhejiang, China",
    28.6218348,
    121.6060932
  ],
  [
    "<br/>Fieldwork: 2014-09, Poyang Lake, Jiangxi, China",
    29.1859199,
    116.2046216
  ]
];