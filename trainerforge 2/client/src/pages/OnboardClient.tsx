import React, { useState } from 'react';

const OnboardClient = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [goals, setGoals] = useState('');
  const [trainerId, setTrainerId] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/api/clients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, goals, trainerId })
    });
    if (res.ok) setSuccess(true);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Client Onboarding</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border"
        />
        <input
          type="text"
          placeholder="Fitness goals"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
          className="w-full p-2 border"
        />
        <input
          type="text"
          placeholder="Trainer ID"
          value={trainerId}
          onChange={(e) => setTrainerId(e.target.value)}
          className="w-full p-2 border"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2">Submit</button>
        {success && <p className="text-green-600">Client account created!</p>}
      </form>
    </div>
  );
};

export default OnboardClient;