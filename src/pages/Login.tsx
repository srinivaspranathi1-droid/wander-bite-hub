import { useState } from "react";
import { ArrowLeft, Mail, Lock, User } from "lucide-react";
import { Link } from "react-router-dom";
import WanderBiteLogo from "../components/WanderBiteLogo";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <WanderBiteLogo size="lg" />
        </div>
        <div className="bg-card rounded-2xl card-shadow p-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-2">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-sm text-muted-foreground text-center mb-8">
            {isSignUp ? "Sign up to get started" : "Sign in to your account"}
          </p>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            {isSignUp && (
              <div className="relative">
                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input type="text" placeholder="Full name" className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange" />
              </div>
            )}
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input type="email" placeholder="Email address" className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange" />
            </div>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input type="password" placeholder="Password" className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange" />
            </div>
            <button type="submit" className="w-full bg-brand-orange text-primary-foreground font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity mt-2">
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
          <p className="text-sm text-muted-foreground text-center mt-6">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button onClick={() => setIsSignUp(!isSignUp)} className="text-brand-blue font-semibold hover:underline">
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
        <div className="text-center mt-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
