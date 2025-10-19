const dateELement = document.createElement("p");
dateELement.setAttribute("data-testid", "currentTimeUTC");

dateELement.textContent = new Date().toUTCString();

document.querySelector(".date-section").appendChild(dateELement);
