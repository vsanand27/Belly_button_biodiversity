# Belly_button_biodiversity
Improbable Beef is researching types of bacteria that colonize naval bellies to develop synthetic beef Production. (utilize HTML, JavaScript, Plotly)

# Background
Improbable food company is performing research to identify strand of bacteria that will be used to develop synthetic beef that taste good.  Roza, the scientist, believes that the bacteria for synthetic beef resides in the belly button of human.  The research on many candidates was done and for confidentiality were assigned an Id.  The record of the results is in a JSON file. 

# Purpose
The purpose of this task is to create dashboard to visualize the results of the bacterial data for each Volunteer and host it on Github web pages.  The following steps were taken to develop scorecard:
1)	 Imported JSON file in JavaScript
2)	Developed functions in JavaScript to manipulate data
3)	Utilize Plotly to develop graphs to visualize dataset 
4)	Developed HTML to display dashboard on the website

# Source Files: 
Github Website: https://vsanand27.github.io/Belly_button_biodiversity/

HTML Code: https://github.com/vsanand27/Belly_button_biodiversity/blob/master/index.html

JavaScript and Plotly: https://github.com/vsanand27/Belly_button_biodiversity/blob/master/plots.js

# Creating Dashboard
In JavaScript, I developed the 3 functions:
1)	Init function that retrieves candidate.id from JSON file and Create a Drop-Down list for the website.  

![alt text](https://github.com/vsanand27/UFOs/blob/master/static/images/Truth_is_out_there.PNG)

2)	OptionChanged function: Runs all functions below when the selection is received

![alt text](https://github.com/vsanand27/UFOs/blob/master/static/images/Truth_is_out_there.PNG)

3)	buildMetadata function: Display attributes of the candidate in the text box on left.   

![alt text](https://github.com/vsanand27/UFOs/blob/master/static/images/Truth_is_out_there.PNG)

4)	buildCharts function: Display three Charts based on selection

a.	Top 10 sample bacteria found in Belly Button including quantity

![alt text](https://github.com/vsanand27/UFOs/blob/master/static/images/Truth_is_out_there.PNG)

b.	Bubble Chart to show different types of bacteria an individual may have including the quantity

![alt text](https://github.com/vsanand27/UFOs/blob/master/static/images/Truth_is_out_there.PNG)

c.	Gauge Chart to show how many times a subject may scrub his naval per week

![alt text](https://github.com/vsanand27/UFOs/blob/master/static/images/Truth_is_out_there.PNG)

# Website Print screen

![alt text](https://github.com/vsanand27/UFOs/blob/master/static/images/Truth_is_out_there.PNG)
