import React from 'react';
import ReactDOM from 'react-dom';

const kpiData = [
  {
    title: 'Test Coverage',
    value: 30,
    threshold: 25,
    unit: '%',
  },
  {
    title: 'Page Load Time',
    value: 1.5,
    threshold: 2,
    unit: 's',
  },
  {
    title: 'Error Rate',
    value: 5,
    threshold: 10,
    unit: '%',
  },
];

const KpiBox = ({ title, value, threshold, unit }) => {
  const isGood =
    title === 'Error Rate' || title === 'Page Load Time'
      ? value <= threshold
      : value >= threshold;

  return (
    <div
      style={{
        backgroundColor: isGood ? 'green' : 'red',
        color: 'white',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
        width: '150px',
        textAlign: 'center',
      }}
    >
      <h3>{title}</h3>
      <p>
        {value}
        {unit}
      </p>
    </div>
  );
};

const KpiDashboard = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {kpiData.map((kpi, index) => (
        <KpiBox
          key={index}
          title={kpi.title}
          value={kpi.value}
          threshold={kpi.threshold}
          unit={kpi.unit}
        />
      ))}
    </div>
  );
};
export { kpi, kpiData, KpiBox };
ReactDOM.render(<KpiDashboard />, document.getElementById('root'));
