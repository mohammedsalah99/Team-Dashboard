import React from 'react';
import ReactDOM from 'react-dom';
import './KpiDashboard.css'; // Import the external CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTimesCircle,
  faClock,
  faBug,
  faUserCheck,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons'; // Example icons

const kpiData = {
  codeQuality: [
    {
      title: 'Test Coverage',
      value: 30,
      threshold: 25,
      unit: '%',
      goodWhen: 'greater',
      icon: faCheckCircle,
    },
    {
      title: 'SonarQube Quality Gate Pass Rate',
      value: 90,
      threshold: 80,
      unit: '%',
      goodWhen: 'greater',
      icon: faChartLine,
    },
    {
      title: 'Code Review Turnaround Time',
      value: 4,
      threshold: 2,
      unit: 'hours',
      goodWhen: 'less',
      icon: faClock,
    },
  ],
  appPerformance: [
    {
      title: 'Page Load Time',
      value: 1.5,
      threshold: 2,
      unit: 's',
      goodWhen: 'less',
      icon: faClock,
    },
    {
      title: 'Time to Interactive',
      value: 6,
      threshold: 5,
      unit: 's',
      goodWhen: 'less',
      icon: faClock,
    },
    {
      title: 'First Contentful Paint',
      value: 1.1,
      threshold: 2.5,
      unit: 's',
      goodWhen: 'less',
      icon: faClock,
    },
    {
      title: 'Largest Contentful Paint',
      value: 2.5,
      threshold: 4,
      unit: 's',
      goodWhen: 'less',
      icon: faClock,
    },
  ],
  sentryReporting: [
    {
      title: 'Error Rate',
      value: 5,
      threshold: 10,
      unit: '%',
      goodWhen: 'less',
      icon: faTimesCircle,
    },
    {
      title: 'Crash-Free Sessions',
      value: 93,
      threshold: 95,
      unit: '%',
      goodWhen: 'greater',
      icon: faUserCheck,
    },
    {
      title: 'Time to Resolve Errors',
      value: 3,
      threshold: 5,
      unit: 'hours',
      goodWhen: 'less',
      icon: faBug,
    },
  ],
  teamEfficiency: [
    {
      title: 'PR Cycle Time',
      value: 12,
      threshold: 24,
      unit: 'hours',
      goodWhen: 'less',
      icon: faClock,
    },
    {
      title: 'Weekly Commit Count',
      value: 35,
      threshold: 30,
      unit: 'commits',
      goodWhen: 'greater',
      icon: faCheckCircle,
    },
    {
      title: 'Bug Fix Time',
      value: 8,
      threshold: 12,
      unit: 'hours',
      goodWhen: 'less',
      icon: faBug,
    },
  ],
  productionStability: [
    {
      title: 'Production Bug Count',
      value: 3,
      threshold: 5,
      unit: 'bugs',
      goodWhen: 'less',
      icon: faBug,
    },
    {
      title: 'Hotfix Frequency',
      value: 3,
      threshold: 2,
      unit: 'fixes',
      goodWhen: 'less',
      icon: faBug,
    },
  ],
};

const KpiBox = ({ title, value, threshold, unit, goodWhen, icon }) => {
  const isGood =
    goodWhen === 'greater' ? value >= threshold : value <= threshold;
  const boxClass = isGood ? 'kpi-box good' : 'kpi-box bad';

  return (
    <div className={boxClass}>
      <FontAwesomeIcon icon={icon} size="2x" style={{ marginBottom: '10px' }} />
      <h3>{title}</h3>
      <p>
        {value}
        {unit}
      </p>
    </div>
  );
};

const KpiSection = ({ title, kpis }) => {
  return (
    <div className="kpi-section">
      <h2>{title}</h2>
      <div className="kpi-container">
        {kpis.map((kpi, index) => (
          <KpiBox
            key={index}
            title={kpi.title}
            value={kpi.value}
            threshold={kpi.threshold}
            unit={kpi.unit}
            goodWhen={kpi.goodWhen}
            icon={kpi.icon}
          />
        ))}
      </div>
    </div>
  );
};

const KpiDashboard = () => {
  return (
    <div className="dashboard">
      <KpiSection title="Code Quality" kpis={kpiData.codeQuality} />
      <KpiSection title="App Performance" kpis={kpiData.appPerformance} />
      <KpiSection title="Sentry Reporting" kpis={kpiData.sentryReporting} />
      <KpiSection title="Team Efficiency" kpis={kpiData.teamEfficiency} />
      <KpiSection
        title="Production Stability"
        kpis={kpiData.productionStability}
      />
    </div>
  );
};

ReactDOM.render(<KpiDashboard />, document.getElementById('root'));
