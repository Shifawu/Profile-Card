const dateElement = document.createElement("p");
    dateElement.setAttribute("data-testid", "test-user-time");
    dateElement.textContent = Date.now();
    document.querySelector(".date-section").appendChild(dateElement);
