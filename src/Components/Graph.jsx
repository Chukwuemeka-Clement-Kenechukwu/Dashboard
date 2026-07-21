import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";
import { graphData } from "../data/graphData";

export const Graph = ({ theme }) => {
  return (
    <div className={`graphCard ${theme}`}>
      <div className="graphHeader">
        <h3>Patients per day</h3>
        <p>•••</p>
      </div>

      <div className="chartWrapper">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={graphData}
            margin={{
              top: 30,
              right: 20,
              left: 0,
              bottom: 10,
            }}
          >
            <defs>
              <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0b6b53" stopOpacity={1} />
                <stop offset="100%" stopColor="#ffffff" stopOpacity={0.2} />
              </linearGradient>

              <pattern
                id="diagonalHatch"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line
                  x1="0"
                  y="0"
                  x2="0"
                  y2="8"
                  stroke="#0b6b53"
                  strokeWidth="3"
                />
              </pattern>

              <mask id="mask">
                <rect width="100%" height="100%" fill="url(#greenGradient)" />
              </mask>
            </defs>

            <CartesianGrid stroke="#efefef" vertical={true} />

            <XAxis dataKey="day" axisLine={false} tickLine={false} />

            <YAxis axisLine={false} tickLine={false} />

            <Tooltip />

            <Bar dataKey="patients" radius={[4, 4, 0, 0]}>
              {graphData.map((entry, index) => (
                <Cell
                  key={index}
                  fill="url(#diagonalHatch)"
                  mask="url(#mask)"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <div className="totalPatients">
          <p>Total patients</p>
          <h2>
            149 <span>/ Avg 250</span>
          </h2>
        </div>
      </div>
    </div>
  );
};
