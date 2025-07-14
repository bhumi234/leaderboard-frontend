import React, { useState } from 'react';

export default function UserSelect({ users, selected, setSelected, onAdd }) {
  const [newUser, setNewUser] = useState('');
  return (
    <div style={{ marginBottom: 20 }}>
      <select value={selected} onChange={e => setSelected(e.target.value)} style={{ padding: 8, fontSize: 16 }}>
        <option value=''>Select User</option>
        {users.map(u => <option key={u._id} value={u._id}>{u.name}</option>)}
      </select>
      <input
        type='text'
        placeholder='Add user'
        value={newUser}
        onChange={e => setNewUser(e.target.value)}
        style={{ marginLeft: 10, padding: 8, fontSize: 16 }}
      />
      <button onClick={() => { if (newUser.trim()) { onAdd(newUser); setNewUser(''); } }} style={{ marginLeft: 5, padding: 8 }}>Add</button>
    </div>
  );
} 