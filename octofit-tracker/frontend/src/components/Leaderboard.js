import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
  const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
  const endpoint = `${baseUrl}/api/leaderboard/`;

  useEffect(() => {
    const fetchLeaderboard = async () => {
      console.log('Leaderboard endpoint:', endpoint);
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        console.log('Leaderboard data:', data);
        const items = Array.isArray(data) ? data : data?.results || [];
        setEntries(items);
      } catch (error) {
        console.error('Leaderboard fetch error:', error);
      }
    };

    fetchLeaderboard();
  }, [endpoint]);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,17,21,0.08)]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-ink-900">Leaderboard 📊</h2>
        <span className="rounded-full bg-ocean-600/10 px-3 py-1 text-xs font-semibold text-ocean-600">
          Total: {entries.length}
        </span>
      </div>

      {entries.length === 0 ? (
        <div className="mt-4 rounded-2xl border border-dashed border-slate-200 bg-cloud-100 px-4 py-6 text-sm text-ink-700">
          No leaderboard entries found.
        </div>
      ) : (
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3 text-sm">
            <thead className="text-left text-xs uppercase tracking-[0.2em] text-ink-700">
              <tr>
                <th className="px-4">User</th>
                <th className="px-4">Score</th>
                <th className="px-4">Rank</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr
                  key={entry.id || entry._id || index}
                  className="bg-cloud-100 shadow-[0_12px_20px_rgba(15,17,21,0.06)]"
                >
                  <td className="rounded-l-2xl px-4 py-3 font-medium text-ink-900">
                    {entry.user || entry.username || entry.display_name || 'User'}
                  </td>
                  <td className="px-4 py-3 text-ink-700">{entry.score ?? entry.points ?? 'N/A'}</td>
                  <td className="rounded-r-2xl px-4 py-3 text-ink-700">{entry.rank ?? index + 1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default Leaderboard;
