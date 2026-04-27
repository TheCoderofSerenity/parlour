import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);

    // ✅ Dummy login (no backend)
    setTimeout(() => {
      if (email === "admin@5taag.com" && password === "admin123") {
        localStorage.setItem("auth", "true");
        toast.success('Login successful');
        navigate('/admin');
      } else {
        toast.error('Invalid email or password');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <>
      <Helmet>
        <title>Admin Login - 5taag Salon</title>
        <meta name="description" content="Admin login portal for 5taag Salon beauty salon management system." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-2 mb-6">
              <img
                src="https://horizons-cdn.hostinger.com/42983e3b-8a95-4ffb-995c-38e8d3477d12/5190b69278e03c5ff13a57065287e276.png"
                alt="5taag Salon logo"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <h1 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                  5taag Salon
                </h1>
                <p className="text-xs text-muted-foreground tracking-wider">ADMIN PORTAL</p>
              </div>
            </Link>
          </div>

          <div className="bg-card rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-2 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
              Admin login
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Sign in to manage your beauty salon
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@5taag.com"
                  className="mt-2 text-foreground"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-foreground">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="mt-2 text-foreground"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                Back to home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default LoginPage;