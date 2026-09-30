import React from 'react';
import { useState } from 'react';

const Expense = () => {
  const [Balance, setBalance] = useState(100);
  const [amount, setAmount] = useState(0);
  const [Descrp, setDescrp] = useState('');
  const [transactions, setTransactions] = useState([]);

  const addTransaction = () => {
    const newTransaction = {
      id: Date.now(),
      description: Descrp,
      amount: amount,
    };

    setTransactions(prevTransactions => [...prevTransactions, newTransaction]);

    setBalance(prevBalance => prevBalance + amount);

    setDescrp('');
    setAmount(0);
  };

  const totalIncome = transactions
    .filter(transaction => transaction.amount >= 0)
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalExpense = transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((total, transaction) => total + Math.abs(transaction.amount), 0);

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-xl">
        {/* Header */}
        <header className="mb-8">
          <p className="mb-1 text-sm font-medium text-indigo-600">Personal Finance</p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Expense Tracker</h1>

          <p className="mt-2 text-sm text-slate-500">Manage your income and expenses in one place.</p>
        </header>

        {/* Balance */}
        <section className="mb-5 rounded-3xl bg-slate-900 p-7 shadow-xl">
          <p className="text-sm font-medium text-slate-400">Current Balance</p>

          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white">${Balance}</h2>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500">Your balance</p>

              <p className="mt-1 text-sm font-medium text-slate-300">Updated today</p>
            </div>

            <div className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-slate-300">September 2026</div>
          </div>
        </section>

        {/* Income / Expense */}
        <section className="mb-8 grid grid-cols-2 gap-4">
          {/* Income */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">Income</p>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-lg text-emerald-600">
                ↑
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">${totalIncome}</h3>

            <p className="mt-1 text-xs text-emerald-600">Total income</p>
          </div>

          {/* Expenses */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">Expenses</p>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-lg text-rose-500">
                ↓
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">${totalExpense}</h3>

            <p className="mt-1 text-xs text-rose-500">Total expenses</p>
          </div>
        </section>

        {/* History */}
        <section className="mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-slate-900">Transaction history</h2>

            <p className="mt-1 text-sm text-slate-500">Your recent activity</p>
          </div>

          {transactions.map((transaction, index) => {
            return (
              <div
                key={transaction.id}
                className="mb-3 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                      transaction.amount >= 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-500'
                    }`}>
                    {transaction.amount >= 0 ? '↑' : '↓'}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{transaction.description}</h3>

                    <p className="mt-1 text-xs text-slate-400">
                      Today · {transaction.amount >= 0 ? 'Income' : 'Expense'}
                    </p>
                  </div>
                </div>

                <p
                  className={`text-sm font-semibold ${transaction.amount >= 0 ? 'text-emerald-600' : 'text-rose-500'}`}>
                  {transaction.amount >= 0 ? '+' : ''}
                  {transaction.amount}
                </p>
              </div>
            );
          })}
        </section>

        {/* Add Transaction */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900">Add new transaction</h2>

            <p className="mt-1 text-sm text-slate-500">Add your income or expense below.</p>
          </div>

          <div className="space-y-5">
            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Description</label>

              <input
                value={Descrp}
                onChange={e => {
                  setDescrp(e.target.value);
                }}
                type="text"
                placeholder="Enter description..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            {/* Amount */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Amount</label>

              <input
                value={amount === 0 ? '' : amount}
                onChange={e => {
                  const Value = Number(e.target.value);
                  setAmount(Value);
                }}
                type="number"
                placeholder="Enter amount..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
              />

              <p className="mt-2 text-xs text-slate-400">Positive amount = income · Negative amount = expense</p>
            </div>

            {/* Button */}
            <button
              onClick={addTransaction}
              className="w-full rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition duration-75 hover:bg-indigo-700 active:scale-95">
              Add transaction
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Expense;
