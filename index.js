import { getAllCountries } from "./lib.js";
import {
  createHeader,
  createInputContainer,
  createCountryCardContainer,
  updateCountryCard,
} from "./components.js";

const body = document.querySelector("#root");

async function init() {
  const allCountries = await getAllCountries();
  console.log(allCountries);

  // Build out UI
  body.appendChild(createHeader());
  body.appendChild(createInputContainer());
  body.appendChild(createCountryCardContainer(allCountries));

  // Grab search functionality elements
  const searchInput = document.querySelector(".input-container__search-input");
  const regionSelect = document.querySelector("select[name=regions]");

  let countrySearchFilter;
  let regionSelectFilter;

  // Handle search functionality
  searchInput.addEventListener("input", function (e) {
    let countries = regionSelect.value === "All" ? allCountries : regionSelectFilter;

    countrySearchFilter = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      if (countryName.indexOf(e.target.value.toLowerCase()) > -1) {
        return true;
      }
      return false;
    });
    updateCountryCard(countrySearchFilter);
  });

  // Handle select functionaility
  regionSelect.addEventListener("change", function (e) {
    console.log(e.target.value);
    if (e.target.value.indexOf("All") > -1) {
      updateCountryCard(allCountries);
      countrySearchFilter = allCountries;
      return;
    }
    regionSelectFilter = allCountries.filter((country) => {
      const countryRegion = country.region;
      if (countryRegion.indexOf(e.target.value) > -1) {
        return true;
      }
      return false;
    });
    updateCountryCard(regionSelectFilter);
  });
}

init();
