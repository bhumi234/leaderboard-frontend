import React from 'react';

export default function ClaimHistory({ history }) {
  return (
    <div style={{ margin: '2rem 0' }}>
      <h2>Claim History</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 8 }}>
        <thead>
          <tr style={{ background: '#2e4a7d', color: '#fff' }}>
            <th style={{ padding: 8 }}>User</th>
            <th style={{ padding: 8 }}>Points</th>
            <th style={{ padding: 8 }}>Time</th>
          </tr>
        </thead>
        <tbody>
          {history.map((h, i) => (
            <tr key={h._id}>
              <td style={{ padding: 8 }}>{h.user.name}</td>
              <td style={{ padding: 8, color: '#ffb347', fontWeight: 600 }}>{h.points}</td>
              <td style={{ padding: 8 }}>{new Date(h.claimedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 