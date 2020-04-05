function init() {
    // Selects from html
    var selector = d3.select("#selDataset");
    // gets data from json file  
    d3.json("samples.json").then((data) => {
    //prints in console for check
        console.log(data);
    // retrieve names form the sample data 
      var sampleNames = data.names;
    //   iterate from each name \
    // append it as an option row gets text name and put in value 
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample); 
      });
      // Default values
      optionChanged(sampleNames[0]);

  })}

  init();
  
  function optionChanged(newSample) {
    console.log(newSample);
    buildMetadata(newSample);
    buildCharts(newSample);
  };

  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      console.log(metadata)
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      console.log(resultArray)
      var result = resultArray[0];
      console.log(result)
      var PANEL = d3.select("#sample-metadata");
      PANEL.html("");
      PANEL.append("h6").text(`ID: ${result.id}`);
      PANEL.append("h6").text(`ETHNICITY: ${result.ethnicity}`);
      PANEL.append("h6").text(`GENDER: ${result.gender}`);
      PANEL.append("h6").text(`AGE: ${result.age}`);
      PANEL.append("h6").text(`LOCATION: ${result.location}`);
      PANEL.append("h6").text(`BBTYPE: ${result.bbtype}`);
      PANEL.append("h6").text(`WFREQ: ${result.wfreq}`);
    });
  }

  function buildCharts(newSample) {
    //read in sample data
    // default value for graph?
    d3.json("samples.json").then((data) => {
      var sampledata = data.samples;
      console.log(sampledata)

      var metadata1 = data.metadata;
        console.log(metadata1)
     
      // filtered to newsample value
      var resultArray = sampledata.filter(sampleObj => sampleObj.id == newSample);
      console.log(resultArray)
      
      var result = resultArray[0];
      console.log(result)

      // sort function not needed as array comes pre-sorted
      // var sortedSamples = result.map(sample => sample.sample_values).sort((a,b) => b - a);
      // console.log(sortedSamples)

      //get properties
      var toptenOUTids = result.otu_ids.map(id=>`OTUid ${id}`).slice(0,10).reverse();
      var toptensampleValues = result.sample_values.slice(0,10).reverse();
      var toptenlabels = result.otu_labels.slice(0,10).reverse();
      
      // Chart 1 - Bar Chart
      var trace = {
          x: toptensampleValues,
          y: toptenOUTids,
          type: "bar",
          orientation: 'h',
          text: toptenlabels,
        };
        var data = [trace];
        var layout = {
          title: "Top 10 Bacterial (OTUs)",
         xaxis: { title: "Sample Values" },
         yaxis: { title: "Top 10 OTU Ids"},
         margin: {t:30,l:150}
         };
        Plotly.newPlot("bar", data, layout);

        // Bubble Chart
        var OUTids = result.otu_ids
        var sampleValues = result.sample_values
        var labels = result.otu_labels
        
        var trace1 = {
          x: OUTids,
          y: sampleValues,
          text: labels,
          mode: 'markers',
          marker: {
            size: sampleValues,
            color: OUTids,
            colorscale: "Earth"
          }
        };
        
        var data = [trace1];

        var layout = {
          title: 'Type and Size of Bacteria in Belly Button',
          xaxis: { title: "OTU Ids" },
          yaxis: { title: "Sample Values"},
          showlegend: false,
          height: 600,
          width: 1200
        };
        
        Plotly.newPlot('bubble', data, layout);
      
        // Washing Guage

        var resultArray1 = metadata1.filter(sampleObj => sampleObj.id == newSample);
          console.log(resultArray1)
        
        var result1 = resultArray1[0];
          console.log(result1)

        var washFreq = result1.wfreq
        console.log(washFreq)

          var data = [
            {
              domain: { x: [0, 1], y: [0, 1] },
              value: washFreq,
              title: "Belly Button Washing Frequency <br>Scrubs per Week" ,
              
              type: "indicator",
              mode: "gauge+number",
              gauge: {
                axis: { range: [null, 10] },
                steps: [
                  { range: [0, 5], color: "cyan" },
                  { range: [5, 9], color: "royalblue" }
                ],
                threshold: {
                  line: { color: "red", width: 4 },
                  thickness: 0.75,
                  value: washFreq
                }
              }
            }
          ];
          
          var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
          
          Plotly.newPlot('gauge', data, layout);
  });
}