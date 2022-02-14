document
  .getElementById("fetchingButton")
  .addEventListener("click", getAllData);

function getAllData() {
    this.className = "btn btn-primary mx-5 ftbtn disabled";
    this.blur();
    fetch("https://corona.lmao.ninja/v2/countries")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let dataBox = document.getElementById("dataBox");
        let allData = ``;

        data.forEach((element) => {
          allData += `

              <ul class="list-group m-5 p-3 ">
                  <li class="list-group-item"><h4>  <span> ${element.country} </span></h4>   </li>
                  <li class="list-group-item"> Today's Cases :  <span>${element.todayCases} </span></li>
                  <li class="list-group-item">Today's Deaths : <span> ${element.todayDeaths} </span></li>
              </ul>
              `;
        });

        dataBox.innerHTML = allData;
      });
}
