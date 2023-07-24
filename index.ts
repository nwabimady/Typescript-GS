const CountryList = ["South Africa", "Germany", "Spain"] as const;
type Country = typeof CountryList[number];

function isCountry(text: string): text is Country {
    return CountryList.includes(text as any);
}

function registerUser(name: string, country: string) {
    if(isCountry(country)) {
        country
    }
}
