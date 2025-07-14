import React from 'react';

export default function Leaderboard({ users }) {
  return (
    <div style={{ margin: '2rem 0' }}>
      <h2>Current Rankings</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#232946', color: '#fff', borderRadius: 8 }}>
        <thead>
          <tr style={{ background: '#2e4a7d', color: '#ffb347' }}>
            <th style={{ padding: 8 }}>Rank</th>
            <th style={{ padding: 8 }}>Name</th>
            <th style={{ padding: 8 }}>Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={u._id} style={{ background: i % 2 ? '#232946' : '#2e4a7d' }}>
              <td style={{ padding: 8 }}>{i + 1}</td>
              <td style={{ padding: 8 }}>{u.name}</td>
              <td style={{ padding: 8 }}>{u.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 