const API = 'http://localhost:5000/api';

export async function getUsers() {
  const res = await fetch(`${API}/users`);
  return res.json();
}

export async function addUser(name) {
  const res = await fetch(`${API}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  });
  return res.json();
}

export async function claimPoints(userId) {
  const res = await fetch(`${API}/claims`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId })
  });
  return res.json();
}

export async function getHistory() {
  const res = await fetch(`${API}/claims/history`);
  return res.json();
} 