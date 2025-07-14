import React, { useEffect, useState } from 'react';
import { getUsers, addUser, claimPoints, getHistory } from './api';
import UserSelect from './components/UserSelect';
import Leaderboard from './components/Leaderboard';
import ClaimHistory from './components/ClaimHistory';

function App() {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState('');
  const [history, setHistory] = useState([]);
  const [lastClaim, setLastClaim] = useState(null);

  // Fetch users and history
  const fetchAll = async () => {
    setUsers(await getUsers());
    setHistory(await getHistory());
  };

  useEffect(() => { fetchAll(); }, []);

  const handleAddUser = async (name) => {
    await addUser(name);
    fetchAll();
  };

  const handleClaim = async () => {
    if (!selected) return alert('Select a user!');
    const res = await claimPoints(selected);
    setLastClaim(res.points);
    fetchAll();
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'Segoe UI, Arial' }}>
      <h1>Leaderboard</h1>
      <UserSelect users={users} selected={selected} setSelected={setSelected} onAdd={handleAddUser} />
      <button onClick={handleClaim} style={{ margin: '1rem 0', padding: '0.7rem 1.5rem', fontSize: '1rem' }}>Claim Points</button>
      {lastClaim && <div style={{ color: '#ffb347', marginBottom: 10 }}>You claimed {lastClaim} points!</div>}
      <Leaderboard users={users} />
      <ClaimHistory history={history} />
    </div>
  );
}

export default App; 