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
      font: { family: "Arial", size: 12, color: "white" }
    },
    cells: {
      values: [date_arr, attack_arr, death_arr, totalAttack_arr, totalDeath_arr],
      align: "center",
      line: { color: "black", width: 1 },
      font: { family: "Arial", size: 11, color: ["black"] }
    }
  }];

  var tableLayout = {
    title: "Cholera Outbreak Stats"
  };

  var myTable = Plotly.plot(tableDiv, tableData, tableLayout);
  // END TABLE

  // set plot layout
  var plotLayout = {
    title: "Cholera Outbreak Attacks / Deaths",
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
      font: { family: "Arial", size: 12, color: "white" }
    },
    cells: {
      values: [age_arr, male_arr, female_arr],
      align: "center",
      line: { color: "black", width: 1 },
      font: { family: "Arial", size: 11, color: ["black"] }
    }
  }];

  var tableLayout = {
    title: "Naples Cholera Age Sex Data Table"
  };

  var myTable = Plotly.plot(tableDiv, tableData, tableLayout);
  // END TABLE

  // set plot layout
  var plotLayout = {
    title: "Cholera Outbreak Fatalities by Age",
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
    y: male_arr,
    type: 'bar',
    name: 'Male Fatalities Due to Cholera by Age'
  };

  data1 = [trace1];

  var myChart = Plotly.plot(plot2Div, data1, plotLayout);
  // END FIRST TRACE

  // START SECOND TRACE
  var trace1 = {
    x: age_arr,
    y: female_arr,
    type: 'bar',
    name: 'Female Fatalities Due to Cholera by Age'
  };

  data1 = [trace1];

  var myChart = Plotly.plot(plot2Div, data1, plotLayout);
  // END SECOND TRACE

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
