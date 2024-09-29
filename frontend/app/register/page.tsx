import React from "react";

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <div className="bg-secondary flex flex-col gap-2 py-3 px-4 rounded-md h-[500px] ">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <p className="text-gray-500 text-center">
          Already have an account?{" "}
          <a className="text-accent-foreground underline" href="/login">
            Login
          </a>
        </p>
        <div className="h-full mt-4">
          <form className="flex flex-col gap-4" action="">
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                className="rounded-md p-2"
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password">Password</label>
              <input
                className="rounded-md p-2"
                type="password"
                name="password"
                id="password"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                className="rounded-md p-2"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                required
              />
            </div>
          </form>
        </div>
        <button
          className="bg-primary p-2 rounded-md text-secondary-foreground hover:bg-primary/80"
          type="submit"
        >
          Register
        </button>
      </div>
    </div>
  );
}
