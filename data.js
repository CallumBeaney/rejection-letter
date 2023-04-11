const regionData = {
    "Lesotho": {
      "region": "Africa",
      "age": 50.75
    },
    "Central African Republic": {
      "region": "Africa",
      "age": 53.1
    },
    "Somalia": {
      "region": "Eastern Mediterranean",
      "age": 56.47
    },
    "Eswatini": {
      "region": "Africa",
      "age": 57.73
    },
    "Mozambique": {
      "region": "Africa",
      "age": 58.14
    },
    "Kiribati": {
      "region": "Western Pacific",
      "age": 59.42
    },
    "Chad": {
      "region": "Africa",
      "age": 59.63
    },
    "Guinea-Bissau": {
      "region": "Africa",
      "age": 60.22
    },
    "Zimbabwe": {
      "region": "Africa",
      "age": 60.68
    },
    "Sierra Leone": {
      "region": "Africa",
      "age": 60.77
    },
    "Guinea": {
      "region": "Africa",
      "age": 61.01
    },
    "Equatorial Guinea": {
      "region": "Africa",
      "age": 62.19
    },
    "Botswana": {
      "region": "Africa",
      "age": 62.25
    },
    "Democratic Republic Of The Congo": {
      "region": "Africa",
      "age": 62.35
    },
    "Cameroon": {
      "region": "Africa",
      "age": 62.36
    },
    "Zambia": {
      "region": "Africa",
      "age": 62.45
    },
    "Nigeria": {
      "region": "Africa",
      "age": 62.62
    },
    "Burkina Faso": {
      "region": "Africa",
      "age": 62.7
    },
    "South Sudan": {
      "region": "Africa",
      "age": 62.79
    },
    "Mali": {
      "region": "Africa",
      "age": 62.8
    },
    "Côte d’Ivoire": {
      "region": "Africa",
      "age": 62.92
    },
    "Micronesia": {
      "region": "Western Pacific",
      "age": 63.03
    },
    "Angola": {
      "region": "Africa",
      "age": 63.06
    },
    "Afghanistan": {
      "region": "Eastern Mediterranean",
      "age": 63.21
    },
    "Niger": {
      "region": "Africa",
      "age": 63.29
    },
    "Benin": {
      "region": "Africa",
      "age": 63.43
    },
    "Burundi": {
      "region": "Africa",
      "age": 63.84
    },
    "Haiti": {
      "region": "Americas",
      "age": 64.05
    },
    "Eritrea": {
      "region": "Africa",
      "age": 64.08
    },
    "Liberia": {
      "region": "Africa",
      "age": 64.08
    },
    "Togo": {
      "region": "Africa",
      "age": 64.27
    },
    "Namibia": {
      "region": "Africa",
      "age": 64.58
    },
    "Congo": {
      "region": "Africa",
      "age": 64.74
    },
    "Solomon Islands": {
      "region": "Western Pacific",
      "age": 65.25
    },
    "South Africa": {
      "region": "Africa",
      "age": 65.25
    },
    "Papua New Guinea": {
      "region": "Western Pacific",
      "age": 65.3
    },
    "Vanuatu": {
      "region": "Western Pacific",
      "age": 65.31
    },
    "Madagascar": {
      "region": "Africa",
      "age": 65.35
    },
    "Gambia": {
      "region": "Africa",
      "age": 65.47
    },
    "Pakistan": {
      "region": "Eastern Mediterranean",
      "age": 65.61
    },
    "Malawi": {
      "region": "Africa",
      "age": 65.62
    },
    "Guyana": {
      "region": "Americas",
      "age": 65.69
    },
    "Djibouti": {
      "region": "Eastern Mediterranean",
      "age": 65.81
    },
    "Kenya": {
      "region": "Africa",
      "age": 66.09
    },
    "Ghana": {
      "region": "Africa",
      "age": 66.28
    },
    "Gabon": {
      "region": "Africa",
      "age": 66.47
    },
    "Yemen": {
      "region": "Eastern Mediterranean",
      "age": 66.63
    },
    "Uganda": {
      "region": "Africa",
      "age": 66.69
    },
    "United Republic Of Tanzania": {
      "region": "Africa",
      "age": 67.34
    },
    "Comoros": {
      "region": "Africa",
      "age": 67.39
    },
    "Fiji": {
      "region": "Western Pacific",
      "age": 68.01
    },
    "Mongolia": {
      "region": "Western Pacific",
      "age": 68.1
    },
    "Mauritania": {
      "region": "Africa",
      "age": 68.38
    },
    "Lao People's Democratic Republic": {
      "region": "Western Pacific",
      "age": 68.51
    },
    "Senegal": {
      "region": "Africa",
      "age": 68.58
    },
    "Ethiopia": {
      "region": "Africa",
      "age": 68.7
    },
    "Rwanda": {
      "region": "Africa",
      "age": 69.1
    },
    "Myanmar": {
      "region": "South-East Asia",
      "age": 69.13
    },
    "Sudan": {
      "region": "Eastern Mediterranean",
      "age": 69.15
    },
    "Tajikistan": {
      "region": "Europe",
      "age": 69.5
    },
    "Timor Leste": {
      "region": "South-East Asia",
      "age": 69.62
    },
    "Turkmenistan": {
      "region": "Europe",
      "age": 69.75
    },
    "Cambodia": {
      "region": "Western Pacific",
      "age": 70.12
    },
    "Sao Tome And Principe": {
      "region": "Africa",
      "age": 70.42
    },
    "Philippines": {
      "region": "Western Pacific",
      "age": 70.43
    },
    "Samoa": {
      "region": "Western Pacific",
      "age": 70.45
    },
    "India": {
      "region": "South-East Asia",
      "age": 70.79
    },
    "Nepal": {
      "region": "South-East Asia",
      "age": 70.88
    },
    "Indonesia": {
      "region": "South-East Asia",
      "age": 71.31
    },
    "Azerbaijan": {
      "region": "Europe",
      "age": 71.43
    },
    "Suriname": {
      "region": "Americas",
      "age": 71.48
    },
    "Egypt": {
      "region": "Eastern Mediterranean",
      "age": 71.82
    },
    "Honduras": {
      "region": "Americas",
      "age": 71.94
    },
    "Guatemala": {
      "region": "Americas",
      "age": 72.02
    },
    "Bolivia": {
      "region": "Americas",
      "age": 72.14
    },
    "Iraq": {
      "region": "Eastern Mediterranean",
      "age": 72.42
    },
    "Tonga": {
      "region": "Western Pacific",
      "age": 72.57
    },
    "Democratic People's Republic Of Korea": {
      "region": "South-East Asia",
      "age": 72.63
    },
    "Syrian Arab Republic": {
      "region": "Eastern Mediterranean",
      "age": 72.67
    },
    "Dominican Republic": {
      "region": "Americas",
      "age": 72.84
    },
    "Grenada": {
      "region": "Americas",
      "age": 72.88
    },
    "Morocco": {
      "region": "Eastern Mediterranean",
      "age": 72.99
    },
    "Uzbekistan": {
      "region": "Europe",
      "age": 73.01
    },
    "Ukraine": {
      "region": "Europe",
      "age": 73.02
    },
    "Bhutan": {
      "region": "South-East Asia",
      "age": 73.11
    },
    "Bahamas": {
      "region": "Americas",
      "age": 73.21
    },
    "Saint Vincent And The Grenadines": {
      "region": "Americas",
      "age": 73.22
    },
    "Russian Federation": {
      "region": "Europe",
      "age": 73.23
    },
    "Republic of Moldova": {
      "region": "Europe",
      "age": 73.26
    },
    "Georgia": {
      "region": "Europe",
      "age": 73.28
    },
    "Seychelles": {
      "region": "Africa",
      "age": 73.34
    },
    "Viet Nam": {
      "region": "Western Pacific",
      "age": 73.74
    },
    "Oman": {
      "region": "Eastern Mediterranean",
      "age": 73.9
    },
    "Kazakhstan": {
      "region": "Europe",
      "age": 73.95
    },
    "Venezuela (Bolivarian Republic of)": {
      "region": "Americas",
      "age": 73.95
    },
    "Cabo Verde": {
      "region": "Africa",
      "age": 74.03
    },
    "Mauritius": {
      "region": "Africa",
      "age": 74.07
    },
    "Kyrgyzstan": {
      "region": "Europe",
      "age": 74.18
    },
    "Bangladesh": {
      "region": "South-East Asia",
      "age": 74.25
    },
    "Saudi Arabia": {
      "region": "Eastern Mediterranean",
      "age": 74.31
    },
    "Brunei Darussalam": {
      "region": "Western Pacific",
      "age": 74.32
    },
    "Saint Lucia": {
      "region": "Americas",
      "age": 74.33
    },
    "Belize": {
      "region": "Americas",
      "age": 74.41
    },
    "Malaysia": {
      "region": "Western Pacific",
      "age": 74.72
    },
    "Belarus": {
      "region": "Europe",
      "age": 74.81
    },
    "The former Yugoslav Republic of Macedonia": {
      "region": "Europe",
      "age": 74.82
    },
    "El Salvador": {
      "region": "Americas",
      "age": 75.03
    },
    "Nicaragua": {
      "region": "Americas",
      "age": 75.04
    },
    "Bulgaria": {
      "region": "Europe",
      "age": 75.07
    },
    "Latvia": {
      "region": "Europe",
      "age": 75.38
    },
    "Romania": {
      "region": "Europe",
      "age": 75.57
    },
    "Libya": {
      "region": "Eastern Mediterranean",
      "age": 75.78
    },
    "Bahrain": {
      "region": "Eastern Mediterranean",
      "age": 75.81
    },
    "Paraguay": {
      "region": "Americas",
      "age": 75.81
    },
    "Serbia": {
      "region": "Europe",
      "age": 75.87
    },
    "Montenegro": {
      "region": "Europe",
      "age": 75.88
    },
    "Brazil": {
      "region": "Americas",
      "age": 75.9
    },
    "Jamaica": {
      "region": "Americas",
      "age": 75.98
    },
    "Lithuania": {
      "region": "Europe",
      "age": 75.99
    },
    "Mexico": {
      "region": "Americas",
      "age": 76.01
    },
    "Armenia": {
      "region": "Europe",
      "age": 76.03
    },
    "Barbados": {
      "region": "Americas",
      "age": 76.03
    },
    "United Arab Emirates": {
      "region": "Eastern Mediterranean",
      "age": 76.08
    },
    "Trinidad And Tobago": {
      "region": "Americas",
      "age": 76.13
    },
    "Hungary": {
      "region": "Europe",
      "age": 76.44
    },
    "Lebanon": {
      "region": "Eastern Mediterranean",
      "age": 76.44
    },
    "Antigua And Barbuda": {
      "region": "Americas",
      "age": 76.45
    },
    "Argentina": {
      "region": "Americas",
      "age": 76.58
    },
    "Bosnia And Herzegovina": {
      "region": "Europe",
      "age": 76.75
    },
    "Sri Lanka": {
      "region": "South-East Asia",
      "age": 76.87
    },
    "Tunisia": {
      "region": "Eastern Mediterranean",
      "age": 77.04
    },
    "Uruguay": {
      "region": "Americas",
      "age": 77.1
    },
    "Algeria": {
      "region": "Africa",
      "age": 77.13
    },
    "Qatar": {
      "region": "Eastern Mediterranean",
      "age": 77.17
    },
    "Iran": {
      "region": "Eastern Mediterranean",
      "age": 77.35
    },
    "China": {
      "region": "Western Pacific",
      "age": 77.43
    },
    "Thailand": {
      "region": "South-East Asia",
      "age": 77.7
    },
    "Cuba": {
      "region": "Americas",
      "age": 77.76
    },
    "Jordan": {
      "region": "Eastern Mediterranean",
      "age": 77.87
    },
    "Albania": {
      "region": "Europe",
      "age": 78
    },
    "Slovakia": {
      "region": "Europe",
      "age": 78.23
    },
    "Poland": {
      "region": "Europe",
      "age": 78.27
    },
    "Ecuador": {
      "region": "Americas",
      "age": 78.45
    },
    "United States Of America": {
      "region": "Americas",
      "age": 78.5
    },
    "Türkiye": {
      "region": "Europe",
      "age": 78.62
    },
    "Croatia": {
      "region": "Europe",
      "age": 78.64
    },
    "Estonia": {
      "region": "Europe",
      "age": 78.88
    },
    "Czechia": {
      "region": "Europe",
      "age": 79.13
    },
    "Panama": {
      "region": "Americas",
      "age": 79.29
    },
    "Colombia": {
      "region": "Americas",
      "age": 79.31
    },
    "Maldives": {
      "region": "South-East Asia",
      "age": 79.59
    },
    "Peru": {
      "region": "Americas",
      "age": 79.9
    },
    "Chile": {
      "region": "Americas",
      "age": 80.74
    },
    "Costa Rica": {
      "region": "Americas",
      "age": 80.85
    },
    "Kuwait": {
      "region": "Eastern Mediterranean",
      "age": 80.97
    },
    "Greece": {
      "region": "Europe",
      "age": 81.1
    },
    "Slovenia": {
      "region": "Europe",
      "age": 81.31
    },
    "Denmark": {
      "region": "Europe",
      "age": 81.32
    },
    "United Kingdom Of Great Britain And Northern Ireland": {
      "region": "Europe",
      "age": 81.4
    },
    "England": {
      "region": "Europe",
      "age": 81.4
    },
    "Belgium": {
      "region": "Europe",
      "age": 81.42
    },
    "Portugal": {
      "region": "Europe",
      "age": 81.57
    },
    "Finland": {
      "region": "Europe",
      "age": 81.61
    },
    "Austria": {
      "region": "Europe",
      "age": 81.65
    },
    "Germany": {
      "region": "Europe",
      "age": 81.72
    },
    "Netherlands": {
      "region": "Europe",
      "age": 81.79
    },
    "Ireland": {
      "region": "Europe",
      "age": 81.84
    },
    "Malta": {
      "region": "Europe",
      "age": 81.89
    },
    "New Zealand": {
      "region": "Western Pacific",
      "age": 81.96
    },
    "Canada": {
      "region": "Americas",
      "age": 82.24
    },
    "Iceland": {
      "region": "Europe",
      "age": 82.33
    },
    "Sweden": {
      "region": "Europe",
      "age": 82.4
    },
    "Luxembourg": {
      "region": "Europe",
      "age": 82.41
    },
    "France": {
      "region": "Europe",
      "age": 82.48
    },
    "Israel": {
      "region": "Europe",
      "age": 82.62
    },
    "Norway": {
      "region": "Europe",
      "age": 82.62
    },
    "Italy": {
      "region": "Europe",
      "age": 82.97
    },
    "Australia": {
      "region": "Western Pacific",
      "age": 83.04
    },
    "Cyprus": {
      "region": "Europe",
      "age": 83.14
    },
    "Singapore": {
      "region": "Western Pacific",
      "age": 83.22
    },
    "Spain": {
      "region": "Europe",
      "age": 83.22
    },
    "Republic Of Korea": {
      "region": "Western Pacific",
      "age": 83.3
    },
    "Switzerland": {
      "region": "Europe",
      "age": 83.45
    },
    "Japan": {
      "region": "Western Pacific",
      "age": 84.26
    }
  };
