import React, { useState } from 'react';
import axios from "axios";
import { saveAs } from "file-saver";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell,
  LabelList
} from "recharts";
import './App.css';

function App() {
  const [wordCounts, setWordCounts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    axios
      .get("https://www.terriblytinytales.com/test.txt")
      .then((response) => {
        const words = response.data.split(/\s+/);
        const counts = {};

        for (let i = 0; i < words.length; i++) {
          let word = words[i].toLowerCase();
          counts[word] = counts[word] ? counts[word] + 1 : 1;
        }

        const sortedCounts = Object.entries(counts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 20);

        setWordCounts(sortedCounts);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleHome = () => {
    setWordCounts([]);
  };

  const handleExport = () => {
    const csvData = [
      ["Word", "Frequency"],
      ...wordCounts,
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "word_frequency.csv");
  };

  const data = wordCounts.map((count) => ({
    name: count[0],
    frequency: count[1],
  }));

  return (
    <>
      <nav className="navbar">
        {/* Wrap the img and span inside a div with class "logo-container" */}
        <div className="logo-container">
          <img src="https://www.terriblytinytales.com/img/home/ttt.svg" alt="Terribly Tiny Tales Project" className="logo-image" onClick={handleHome} />
          <span className="logo-text">Terribly Tiny Tales Project</span>
        </div>
        <ul className="nav-links">
          <li className="nav-link" onClick={handleHome}>Home</li>
          <li className="nav-link"><a href="https://github.com/AakarshitChaurasia/terribly-_tiny_proj/blob/main/README.md">About Us</a></li>
        </ul>
      </nav>

      <div className="content-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {wordCounts.length === 0 && (
              <button className="submit-button" onClick={handleSubmit}>Submit</button>
            )}

            {wordCounts.length > 0 && (
              <>
                <div className="graph-container">
                  <h2> </h2>
                  <h2>Histogram: Using Recharts</h2>
                  <BarChart
                    width={1200}
                    height={500}
                    data={data}
                    margin={{
                      top: 80,
                      right: 30,
                      left: 20,
                      bottom: 5
                    }}
                    barSize={50}
                  >
                    <XAxis dataKey="name" scale="band" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="frequency" fill="#8884d8">
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
                      ))}
                      <LabelList dataKey="name" position="top" dy={-10} />
                      <LabelList dataKey="frequency" position="top" dy={-10} dx={25} />
                    </Bar>
                  </BarChart>
                </div>
                <button className="export-button" onClick={handleExport}>Export</button>
              </>
            )}
          </>
        )}
      </div>

      <footer className="footer-container">
        <p>© Aakarshit Chaurasia</p>
      </footer>
    </>
  );
}

export default App;
