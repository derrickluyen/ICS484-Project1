// choleraDeaths.tsv section
Plotly.d3.tsv("choleraDeaths.tsv", function (data) {

  var date_arr = [];
  var attack_arr = [];
  var death_arr = [];
  var totalAttack_arr = [];
  var totalDeath_arr = [];
  var totalAttacks = 0;
  var totalDeaths = 0;

  for (let i = 0; i < data.length; i++) {
    date_arr.push(data[i].Date);
    attack_arr.push(data[i].Attack);
    death_arr.push(data[i].Death);
    totalAttacks += parseInt(data[i].Attack);
    totalDeaths += parseInt(data[i].Death);
    totalAttack_arr.push(totalAttacks);
    totalDeath_arr.push(totalDeaths);
  }

  // get plot 1 div
  plot1Div = document.getElementById('plot1');

  // get table div
  tableDiv = document.getElementById('table');

  // START TABLE
  // based off of example: https://plotly.com/javascript/table/
  var tableData = [{
    type: 'table',
    header: {
      values: [["<b>Date</b>"], ["<b>Attacks On This Day</b>"],
        ["<b>Deaths On This Day</b>"], ["<b>Total Attacks Up To This Day</b>"], ["<b>Total Deaths Up To This Day</b>"]],
      align: "center",
      line: { width: 1, color: 'black' },
      fill: { color: "grey" },
      font: { family: "Comic Sans MS", size: 12, color: "white" }
    },
    cells: {
      values: [date_arr, attack_arr, death_arr, totalAttack_arr, totalDeath_arr],
      align: "center",
      line: { color: "black", width: 1 },
      font: { family: "Comic Sans MS", size: 11, color: ["black"] }
    }
  }];

  var tableLayout = {
    title: "Cholera Outbreak Stats",
    font: {
      family: 'Comic Sans MS',
      size: 12,
      color: '#333333'
    }
  };

  var myTable = Plotly.plot(tableDiv, tableData, tableLayout);
  // END TABLE

  // set plot layout
  var plotLayout = {
    title: "Cholera Outbreak Attacks / Deaths",
    font: {
      family: 'Comic Sans MS',
      size: 12,
      color: '#333333'
    },
    xaxis: {
      automargin: true,
      title: {
        text: "Date",
      }
    },
    yaxis: {
      automargin: true,
      title: {
        text: "Number of Attacks / Deaths",
      }
    },
  };

  // START FIRST TRACE
  var trace1 = {
    x: date_arr,
    y: attack_arr,
    type: 'scatter',
    name: 'Cholera Attacks On This Day'
  };

  data1 = [trace1];

  var myChart1 = Plotly.plot(plot1Div, data1, plotLayout);
  // END FIRST TRACE

  // START SECOND TRACE
  var trace2 = {
    x: date_arr,
    y: death_arr,
    type: 'scatter',
    name: 'Cholera Deaths On This Day'
  };

  data2 = [trace2];

  var myChart2 = Plotly.plot(plot1Div, data2, plotLayout);
  // END SECOND TRACE

  // START THIRD TRACE
  var trace3 = {
    x: date_arr,
    y: totalAttack_arr,
    type: 'scatter',
    name: 'Cholera Attacks Up To This Day'
  };

  data3 = [trace3];

  var myChart3 = Plotly.plot(plot1Div, data3, plotLayout);
  // END THIRD TRACE

  // START FOURTH TRACE
  var trace4 = {
    x: date_arr,
    y: totalDeath_arr,
    type: 'scatter',
    name: 'Cholera Deaths Up To This Day'
  };

  data4 = [trace4];

  var myChart4 = Plotly.plot(plot1Div, data4, plotLayout);
  // END FOURTH TRACE

});

// naplesCholeraAgeSexData.tsv section
Plotly.d3.text("naplesCholeraAgeSexData.tsv", "text/tsv", function (data) {

  // referenced code from: https://stackoverflow.com/questions/13436519/csv-tsv-comment-lines-d3, https://github.com/d3/d3-dsv
  data = data.replace(/^[#@][^\r\n]+[\r\n]+/mg, '');
  data = d3.tsvParse(data);
  var age_arr = [];
  var male_arr = [];
  var female_arr = [];

  for (let i = 0; i < data.length; i++) {
    age_arr.push(data[i].age);
    male_arr.push(data[i].male);
    female_arr.push(data[i].female);
  }

  // get plot 2 div
  plot2Div = document.getElementById('plot2');

  // get table div
  tableDiv = document.getElementById('table2');

  // START TABLE
  // based off of example: https://plotly.com/javascript/table/
  var tableData = [{
    type: 'table',
    header: {
      values: [["<b>Age</b>"], ["<b>Male</b>"],
        ["<b>Female</b>"]],
      align: "center",
      line: { width: 1, color: 'black' },
      fill: { color: "grey" },
      font: { family: "Comic Sans MS", size: 12, color: "white" }
    },
    cells: {
      values: [age_arr, male_arr, female_arr],
      align: "center",
      line: { color: "black", width: 1 },
      font: { family: "Comic Sans MS", size: 11, color: ["black"] }
    }
  }];

  var tableLayout = {
    title: "Naples Cholera Age Sex Data Table",
    font: {
      family: 'Comic Sans MS',
      size: 12,
      color: '#333333'
    }
  };

  var myTable = Plotly.plot(tableDiv, tableData, tableLayout);
  // END TABLE

  // set plot layout
  var plotLayout = {
    title: "Cholera Outbreak Fatalities by Age",
    font: {
      family: 'Comic Sans MS',
      size: 12,
      color: '#333333'
    },
    xaxis: {
      automargin: true,
      title: {
        text: "Age of Fatality",
      }
    },
    yaxis: {
      automargin: true,
      title: {
        text: "Number of Fatalities",
      }
    },
  };

  // START FIRST TRACE
  var trace1 = {
    x: age_arr,
    y: female_arr,
    type: 'bar',
    name: 'Female Fatalities Due to Cholera by Age'
  };

  data1 = [trace1];

  var myChart = Plotly.plot(plot2Div, data1, plotLayout);
  // END FIRST TRACE

  // START SECOND TRACE
  var trace2 = {
    x: age_arr,
    y: male_arr,
    type: 'bar',
    name: 'Male Fatalities Due to Cholera by Age'
  };

  data2 = [trace2];

  var myChart2 = Plotly.plot(plot2Div, data2, plotLayout);
  // END SECOND TRACE

});

// UKcensus1851.csv section
Plotly.d3.text("UKcensus1851.csv", "text/csv", function (data) {

  // referenced code from: https://stackoverflow.com/questions/13436519/csv-tsv-comment-lines-d3, https://github.com/d3/d3-dsv
  data = data.replace(/^[#@][^\r\n]+[\r\n]+/mg, '');
  data = d3.csvParse(data);
  var age_arr = [];
  var male_arr = [];
  var female_arr = [];
  var totalMales = 0;
  var totalFemales = 0;

  for (let i = 0; i < data.length; i++) {
    age_arr.push(data[i].age);
    male_arr.push(data[i].male);
    female_arr.push(data[i].female);
    totalMales += parseInt(data[i].male);
    totalFemales += parseInt(data[i].female);
  }

  // get plot divs
  plot3_1Div = document.getElementById('plot3_1');
  plot3_2Div = document.getElementById('plot3_2');
  plot3_3Div = document.getElementById('plot3_3');
  plot3_4Div = document.getElementById('plot3_4');

  // get table div
  tableDiv = document.getElementById('table3');

  // plot layout 1
  var plotLayout1 = {
    title: "UK Census 1851 (Male)",
    font: {
      family: 'Comic Sans MS',
      size: 12,
      color: '#333333'
    },
    width: 380
  };

  // plot layout 2
  var plotLayout2 = {
    title: "UK Census 1851 (Female)",
    font: {
      family: 'Comic Sans MS',
      size: 12,
      color: '#333333'
    },
    width: 380
  };

  // plot layout 3
  var plotLayout3 = {
    title: "UK Census 1851 (Male vs Female)",
    font: {
      family: 'Comic Sans MS',
      size: 12,
      color: '#333333'
    },
    width: 530
  };


  // plot layout 4
  var plotLayout4 = {
    title: "UK Census 1851 (Male & Female)",
    font: {
      family: 'Comic Sans MS',
      size: 12,
      color: '#333333'
    },
    xaxis: {
      automargin: true,
      title: {
        text: "Age Groups",
      }
    },
    yaxis: {
      automargin: true,
      title: {
        text: "Population",
      }
    },
  };

  // START TABLE
  // based off of example: https://plotly.com/javascript/table/
  var tableData = [{
    type: 'table',
    header: {
      values: [["<b>Age</b>"], ["<b>Male</b>"],
        ["<b>Female</b>"]],
      align: "center",
      line: { width: 1, color: 'black' },
      fill: { color: "grey" },
      font: { family: "Comic Sans MS", size: 12, color: "white" }
    },
    cells: {
      values: [age_arr, male_arr, female_arr],
      align: "center",
      line: { color: "black", width: 1 },
      font: { family: "Comic Sans MS", size: 11, color: ["black"] }
    }
  }];

  var tableLayout = {
    title: "UK 1851 Census Data Table",
    font: {
      family: 'Comic Sans MS',
      size: 12,
      color: '#333333'
    }
  };

  var myTable = Plotly.plot(tableDiv, tableData, tableLayout);
  // END TABLE

  // referenced code from: https://plotly.com/javascript/pie-charts/
  // START FIRST TRACE
  var trace1 = {
    labels: age_arr,
    values: male_arr,
    type: 'pie',
    name: 'Census Age Data for Males'
  };

  data1 = [trace1];

  var myChart = Plotly.plot(plot3_1Div, data1, plotLayout1);
  // END FIRST TRACE

  // START SECOND TRACE
  var trace2 = {
    labels: age_arr,
    values: female_arr,
    type: 'pie',
    name: 'Census Age Data for Females'
  };

  data2 = [trace2];

  var myChart2 = Plotly.plot(plot3_2Div, data2, plotLayout2);
  // SECOND TRACE

  // START THIRD TRACE
  var trace3 = {
    labels: ['Male', 'Female'],
    values: [totalMales, totalFemales],
    type: 'pie',
    name: 'Census Age Data (Males vs Females)'
  };

  data3 = [trace3];

  var myChart3 = Plotly.plot(plot3_3Div, data3, plotLayout3);
  // END THIRD TRACE

  // START FOURTH TRACE
  var trace4 = {
    x: age_arr,
    y: female_arr,
    type: 'bar',
    name: 'Female Census Population Data'
  };

  data4 = [trace4];

  var myChart4 = Plotly.plot(plot3_4Div, data4, plotLayout4);
  // END FOURTH TRACE

  // START FOURTH TRACE
  var trace5 = {
    x: age_arr,
    y: male_arr,
    type: 'bar',
    name: 'Male Census Population Data'
  };

  data5 = [trace5];

  var myChart5 = Plotly.plot(plot3_4Div, data5, plotLayout4);
  // END FIFTH TRACE

});

// choleraDeathLocations.csv and choleraPumpLocations.csv section
Plotly.d3.csv("choleraDeathLocations.csv", function (data1) {
  Plotly.d3.csv("choleraPumpLocations.csv", function (data2) {

    var numDeaths = [];
    var deathLat = [];
    var deathLong = [];
    var pumpLat = [];
    var pumpLong = [];

    for (let i = 0; i < data1.length; i++) {
      numDeaths.push(data1[i].NumDeaths);
      deathLat.push(data1[i].Lat);
      deathLong.push(data1[i].Long);
    }

    for (let i = 0; i < data2.length; i++) {
      pumpLat.push(data2[i].Lat);
      pumpLong.push(data2[i].Long);
    }

    var mymap = L.map('mapid').setView([51.5135, -0.136], 17);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(mymap);

    var circle;
    var marker;

    for (let i = 0; i < data1.length; i++) {
      circle = L.circle([deathLat[i], deathLong[i]], {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.5,
        radius: 1.5 * numDeaths[i]
      }).addTo(mymap);
      circle.bindPopup(numDeaths[i] + " deaths");
    }

    for (let i = 0; i < data2.length; i++) {
      marker = L.marker([pumpLat[i], pumpLong[i]]).addTo(mymap);
      marker.bindPopup("(" + pumpLat[i] + ", " + pumpLong[i] + ")");
    }

    // referenced from: https://codepen.io/haakseth/pen/KQbjdO

    var legend = L.control({position: 'topright'});
    legend.onAdd = function (mymap) {

      var div = L.DomUtil.create('div', 'legend');
      div.innerHTML += "<h4>Legend</h4>";
      div.innerHTML += '<i style="background: red"></i><span>Death Location</span><br>';
      // got color of blue from: https://awesomeopensource.com/project/pointhi/leaflet-color-markers
      div.innerHTML += '<i style="background: #2A81CB"></i><span>Pump Location</span><br>';
      return div;
    };

    legend.addTo(mymap);
  });
});

// MODAL CODE - Based off of example: https://www.w3schools.com/howto/howto_css_modals.asp

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
