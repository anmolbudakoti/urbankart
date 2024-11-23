import React from 'react'

export default function LoginForm() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Login</h2>
      <form className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          className="p-2 text-black border rounded focus:ring focus:ring-blue-300"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 text-black border rounded focus:ring focus:ring-blue-300"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  )
}
