
import { User, Lock, CheckCircle2 } from "lucide-react";

export default function SubmittedInfo({ username, password }) {
  if (username === null) return null;

  return (
    <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
      <div className="flex items-center gap-2 text-emerald-700">
        <CheckCircle2 size={22} />
        <h2 className="text-lg font-bold">Submitted Information</h2>
      </div>

      <div className="mt-5 space-y-4">
        <div className="rounded-xl bg-white p-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <User size={17} />
            Username
          </div>
          <p className="mt-2 break-all font-semibold text-slate-800">
            {username}
          </p>
        </div>

        <div className="rounded-xl bg-white p-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Lock size={17} />
            Password
          </div>
          <p className="mt-2 break-all font-semibold text-slate-800">
            {password}
          </p>
        </div>
      </div>
    </div>
  );
}
