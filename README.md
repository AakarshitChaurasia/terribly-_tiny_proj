# Word Frequency Counter
This is a React.js web application that retrieves word frequency data from a text file hosted on https://www.terriblytinytales.com and displays the top 20 most frequently occurring words in a bar chart using the Recharts library. The application also allows the user to export the data to a CSV file.

##  Components
The application consists of three main components:

1.  App: This is the main component that renders the navbar, content container, and footer. It also contains the state for wordCounts and loading, as well as functions for handling form submission, exporting the data, and resetting the state.
2.  BarChart: This is a Recharts component that renders the histogram chart based on the data passed to it.
3.  Cell: This is a Recharts component that defines the color for each bar in the histogram chart.
## Libraries and Plugins Used
The following libraries and plugins were used in the development of this project:

* React.js: A JavaScript library for building user interfaces.
* axios: A promise-based HTTP client for making API requests.
* file-saver: A library for saving files on the client-side.
* Recharts: A composable charting library built on top of D3.js.
##  Hosting
This application can be hosted on Heroku/Netlify or any other hosting platform that supports React.js applications. To host this application, follow these steps:

Build the React app by running the following command:
```JavaScript
npm run build
```
Install the express package by running the following command:

Deploy your app to Netlify hosting platform that supports Node.js applications.

## Future Scope
In the future, this application can be enhanced to include additional features such as:

A search bar for searching for specific words in the text file.

Additional chart types and customization options.
# License
This project is licensed under the MIT License - see the LICENSE file for details.
