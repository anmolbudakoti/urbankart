import React from 'react'

export default function SignUpForm() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Become a Seller</h2>
      <form className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Full Name"
          className="p-2 text-black border rounded focus:ring focus:ring-green-300"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border text-black rounded focus:ring focus:ring-green-300"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border text-black rounded focus:ring focus:ring-green-300"
        />
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}
