import { useLoaderData } from "react-router";
import {
  Area,
  AreaChart,
  Brush,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const shortName = (name) => name.split(" ").slice(0, 3).join(" ");

const DarkTooltip = ({ active, payload, label, unit }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "rgba(255,255,255,0.97)",
          border: "1px solid #e2e8f0",
          borderRadius: 12,
          padding: "8px 14px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        }}
      >
        <p style={{ color: "#64748b", fontSize: 11, fontWeight: 700 }}>
          {label}
        </p>
        <p
          style={{
            color: "#0f172a",
            fontSize: 15,
            fontWeight: 800,
            marginTop: 4,
          }}
        >
          {payload[0].value}
          {unit ? ` ${unit}` : ""}
        </p>
      </div>
    );
  }
  return null;
};

const ChartLabel = ({ color, title, subtitle }) => (
  <div className="mb-3 flex items-center gap-3 px-1">
    <span
      className="h-3 w-3 rounded-full"
      style={{ background: color, boxShadow: `0 0 6px ${color}` }}
    />
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
        {subtitle}
      </p>
      <p className="text-sm font-bold text-slate-800">{title}</p>
    </div>
  </div>
);

const Chart = () => {
  const booksData = useLoaderData();

  const chartData = [...booksData]
    .sort((a, b) => a.bookId - b.bookId)
    .map((b) => ({
      name: shortName(b.bookName),
      pages: b.totalPages,
      rating: b.rating,
      year: b.yearOfPublishing,
    }));

  const axisStyle = { fontSize: 11, fontWeight: 600, fill: "#94a3b8" };
  const grid = { strokeDasharray: "3 3", stroke: "#e2e8f0", vertical: false };
  const syncId = "bookSync";
  const margin = { top: 10, right: 20, left: 0, bottom: 0 };

  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-b from-[#fff9f2] via-[#fffefc] to-[#ecfdfa] px-4 py-10 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-[#ffedd5]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-[#ccfbf1]/70 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-8 text-center">
          <p className="mb-2 inline-flex rounded-full border border-[#fed7aa] bg-[#fff1de] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#c2410c]">
            Visual Insights
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-[#172554] sm:text-4xl">
            Synchronized Line Chart
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">
            All three charts share the same X-axis. Hover over any chart to sync
            the tooltip across all views.
          </p>
        </header>

        <div className="space-y-5">
          {/* Chart 1 — Pages */}
          <div className="rounded-3xl border border-slate-200 bg-white/90 px-6 pt-6 pb-3 shadow-sm">
            <ChartLabel
              color="#8b5cf6"
              title="Total Pages"
              subtitle="Page Count"
            />
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={chartData} syncId={syncId} margin={margin}>
                <CartesianGrid {...grid} />
                <XAxis
                  dataKey="name"
                  tick={axisStyle}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  tick={axisStyle}
                  tickLine={false}
                  axisLine={false}
                  width={45}
                />
                <Tooltip
                  content={<DarkTooltip unit="pages" />}
                  cursor={{
                    stroke: "#8b5cf6",
                    strokeWidth: 1,
                    strokeDasharray: "4 2",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="pages"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  dot={{ fill: "#8b5cf6", r: 3, strokeWidth: 0 }}
                  activeDot={{ r: 5, fill: "#a78bfa", strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Chart 2 — Rating */}
          <div className="rounded-3xl border border-slate-200 bg-white/90 px-6 pt-4 pb-3 shadow-sm">
            <ChartLabel
              color="#10b981"
              title="Book Rating"
              subtitle="Rating / 5"
            />
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={chartData} syncId={syncId} margin={margin}>
                <CartesianGrid {...grid} />
                <XAxis
                  dataKey="name"
                  tick={axisStyle}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  tick={axisStyle}
                  tickLine={false}
                  axisLine={false}
                  domain={[0, 5]}
                  width={45}
                />
                <Tooltip
                  content={<DarkTooltip unit="/ 5" />}
                  cursor={{
                    stroke: "#10b981",
                    strokeWidth: 1,
                    strokeDasharray: "4 2",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="rating"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ fill: "#10b981", r: 3, strokeWidth: 0 }}
                  activeDot={{ r: 5, fill: "#34d399", strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Chart 3 — Year with Brush */}
          <div className="rounded-3xl border border-slate-200 bg-white/90 px-6 pt-4 pb-6 shadow-sm">
            <ChartLabel
              color="#f59e0b"
              title="Publishing Year"
              subtitle="Timeline"
            />
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={chartData} syncId={syncId} margin={margin}>
                <defs>
                  <linearGradient id="amberGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid {...grid} />
                <XAxis
                  dataKey="name"
                  tick={axisStyle}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  tick={axisStyle}
                  tickLine={false}
                  axisLine={false}
                  domain={["auto", "auto"]}
                  width={45}
                />
                <Tooltip
                  content={<DarkTooltip unit="" />}
                  cursor={{
                    stroke: "#f59e0b",
                    strokeWidth: 1,
                    strokeDasharray: "4 2",
                  }}
                />
                <Brush
                  dataKey="name"
                  height={34}
                  stroke="#cbd5e1"
                  fill="#f1f5f9"
                  travellerWidth={10}
                  tickFormatter={() => ""}
                  style={{ marginTop: 10 }}
                />
                <Area
                  type="monotone"
                  dataKey="year"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  fill="url(#amberGrad)"
                  dot={{ fill: "#f59e0b", r: 3, strokeWidth: 0 }}
                  activeDot={{ r: 5, fill: "#fbbf24", strokeWidth: 0 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chart;
