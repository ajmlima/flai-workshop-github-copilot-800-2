import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);
  const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
  const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
  const endpoint = `${baseUrl}/api/teams/`;

  useEffect(() => {
    const fetchTeams = async () => {
      console.log('Teams endpoint:', endpoint);
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        console.log('Teams data:', data);
        const items = Array.isArray(data) ? data : data?.results || [];
        setTeams(items);
      } catch (error) {
        console.error('Teams fetch error:', error);
      }
    };

    fetchTeams();
  }, [endpoint]);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,17,21,0.08)]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-ink-900">Teams 🏆</h2>
        <span className="rounded-full bg-ocean-600/10 px-3 py-1 text-xs font-semibold text-ocean-600">
          Total: {teams.length}
        </span>
      </div>

      {teams.length === 0 ? (
        <div className="mt-4 rounded-2xl border border-dashed border-slate-200 bg-cloud-100 px-4 py-6 text-sm text-ink-700">
          No teams found.
        </div>
      ) : (
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3 text-sm">
            <thead className="text-left text-xs uppercase tracking-[0.2em] text-ink-700">
              <tr>
                <th className="px-4">Name</th>
                <th className="px-4">Captain</th>
                <th className="px-4">Members</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team.id || team._id} className="bg-cloud-100 shadow-[0_12px_20px_rgba(15,17,21,0.06)]">
                  <td className="rounded-l-2xl px-4 py-3 font-medium text-ink-900">
                    {team.name || team.team_name || 'Team'}
                  </td>
                  <td className="px-4 py-3 text-ink-700">{team.captain || team.lead || '-'}</td>
                  <td className="rounded-r-2xl px-4 py-3 text-ink-700">
                    {team.member_count || team.members || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default Teams;
