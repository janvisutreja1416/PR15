
import { useRef, useState } from "react";
import { UserRound, LockKeyhole, LogIn } from "lucide-react";
import SubmittedInfo from "./SubmittedInfo";

export default function LoginForm() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [submitted, setSubmitted] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });
  }

  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-indigo-100 sm:p-8">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
        <LogIn size={30} />
      </div>

      <h1 className="mt-5 text-center text-3xl font-extrabold text-slate-900">
        Welcome Back!
      </h1>

      <p className="mt-2 text-center text-sm text-slate-500">
        Enter your details to submit the login form.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label
            htmlFor="username"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Username
          </label>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100">
            <UserRound size={19} className="text-slate-400" />
            <input
              ref={usernameRef}
              id="username"
              type="text"
              placeholder="Enter your username"
              required
              className="w-full bg-transparent py-3.5 text-sm outline-none"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Password
          </label>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100">
            <LockKeyhole size={19} className="text-slate-400" />
            <input
              ref={passwordRef}
              id="password"
              type="password"
              placeholder="Enter your password"
              required
              className="w-full bg-transparent py-3.5 text-sm outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3.5 font-bold text-white transition hover:bg-indigo-700 active:scale-[0.98]"
        >
          <LogIn size={19} />
          Submit Login
        </button>
      </form>

      <SubmittedInfo
        username={submitted?.username ?? null}
        password={submitted?.password ?? ""}
      />
    </div>
  );
}
