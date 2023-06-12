export function createHeader() {
  const header = document.createElement("header");
  const title = document.createElement("h1");
  const darkModeText = document.createElement("p");

  header.className = "header";
  title.className = "header__title";
  darkModeText.className = "header__darkmode-text";

  title.innerText = "Where in the World?";
  darkModeText.innerText = "Dark Mode";

  header.appendChild(title);
  header.appendChild(darkModeText);

  return header;
}

export function createInputContainer(
  regions = ["All", "Africa", "America", "Asia", "Europe", "Oceania"]
) {
  const inputContainer = document.createElement("div");
  const searchInput = document.createElement("input");
  const regionForm = document.createElement("form");
  const regionSelect = document.createElement("select");

  inputContainer.className = "input-container";

  searchInput.type = "text";
  searchInput.className = "input-container__search-input";
  searchInput.placeholder = "Search for a country...";

  regionSelect.name = "regions";

  for (let i in regions) {
    regionSelect.add(new Option(regions[i], regions[i]));
  }

  regionForm.appendChild(regionSelect);
  regionForm.className = "input-container__region-form";

  inputContainer.appendChild(searchInput);
  inputContainer.appendChild(regionForm);

  return inputContainer;
}

export function createCountryCardContainer(countryData) {
  const countryCardContainer = document.createElement('div');
  countryCardContainer.className = "country-card-conatainer";

  for (let i in countryData) {
    const { name, flags, population, region, capital  } = countryData[i];
    const imageUrl = flags.png;
    const countryCard = createCountryCard({ name, imageUrl, population, region, capital })
    countryCardContainer.appendChild(countryCard)
  }
  return countryCardContainer;
}

export function updateCountryCard(countryData) {
  const countryCardContainer = document.querySelector('.country-card-conatainer');
  countryCardContainer.innerHTML = ''

  for (let i in countryData) {
    const { name, flags, population, region, capital  } = countryData[i];
    const imageUrl = flags.png;
    const countryCard = createCountryCard({ name, imageUrl, population, region, capital })
    countryCardContainer.appendChild(countryCard)
  }
}

function createCountryCard({ imageUrl, name, population, region, capital }) {
  const countryCard = document.createElement("div");
  const countryCardImageContainer = document.createElement("div");
  const countryCardDescriptionContainer = document.createElement("div");
  const countryCardImage = document.createElement("img");
  const countryCardName = document.createElement("h3");
  const countryCardPopulation = document.createElement("p");
  const countryCardRegion = document.createElement("p");
  const countryCardCapital = document.createElement("p");

  countryCardImage.src = imageUrl;
  countryCardImage.className = "countrycard__image";

  countryCardName.innerText = name.common;
  countryCardName.className = "countrycard__description";
  countryCardPopulation.innerText = `Population: ${population}`;
  countryCardPopulation.className = "countrycard__description";
  countryCardRegion.innerText = `Region: ${region}`;
  countryCardRegion.className = "countrycard__description";
  countryCardCapital.innerText = `Capital: ${capital}`;
  countryCardCapital.className = "countrycard__description";

  countryCardImageContainer.appendChild(countryCardImage);

  countryCardDescriptionContainer.appendChild(countryCardName);
  countryCardDescriptionContainer.appendChild(countryCardPopulation);
  countryCardDescriptionContainer.appendChild(countryCardRegion);
  countryCardDescriptionContainer.appendChild(countryCardCapital);

  countryCard.appendChild(countryCardImageContainer);
  countryCard.appendChild(countryCardDescriptionContainer);

  return countryCard;
}
