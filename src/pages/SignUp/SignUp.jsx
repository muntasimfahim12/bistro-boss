/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { GalleryVerticalEnd, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { auth } from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider"; // For Google login handling

const cn = (...classes) => classes.filter(Boolean).join(" ");

// ================= UI Components =================
const FieldGroup = ({ children }) => <div className="flex flex-col gap-6">{children}</div>;
const Field = ({ children }) => <div className="flex flex-col gap-2">{children}</div>;
const FieldLabel = ({ children, htmlFor }) => (
    <label htmlFor={htmlFor} className="font-semibold text-sm text-gray-300">{children}</label>
);
const FieldDescription = ({ children, className }) => (
    <p className={cn("text-sm text-gray-400", className)}>{children}</p>
);
const FieldSeparator = ({ children }) => (
    <div className="flex items-center gap-2 text-sm text-gray-500 my-4">
        <span className="flex-1 border-t border-gray-700"></span>
        {children && <span>{children}</span>}
        <span className="flex-1 border-t border-gray-700"></span>
    </div>
);

// ================= Input =================
const Input = ({ type, showPasswordToggle, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);
    if (showPasswordToggle) {
        return (
            <div className="relative w-full">
                <input
                    type={showPassword ? "text" : type}
                    className="bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition"
                    {...props}
                />
                <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
            </div>
        );
    }
    return (
        <input
            type={type}
            className="bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition"
            {...props}
        />
    );
};

// ================= Button =================
const Button = ({ children, variant, className, ...props }) => (
    <button
        className={cn(
            "px-4 py-2 rounded-lg font-medium transition-all shadow-md hover:shadow-lg",
            variant === "outline"
                ? "border border-gray-600 text-gray-100 hover:bg-gray-700"
                : "bg-blue-600 text-white hover:bg-blue-700",
            className
        )}
        {...props}
    >
        {children}
    </button>
);

// ================= Signup Form =================
const SignupForm = ({ className, ...props }) => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();
    const { googleLogin } = useContext(AuthContext); // use context for Google login

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirm = e.target.confirm.value;

        if (password !== confirm) {
            setError("❌ Passwords do not match!");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            // Update profile with name
            await updateProfile(userCredential.user, { displayName: name });

            setSuccess("🎉 Account Created Successfully!");
            e.target.reset();

            setTimeout(() => navigate("/login"), 800);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignup = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);

            // User info
            const user = result.user;
            console.log("Google Signup Success:", user);
            navigate("/"); // redirect after Google login
        } catch (err) {
            console.error(err.message);
            setError(err.message);
        }
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={cn("flex flex-col gap-6", className)}
            onSubmit={handleSignup}
            {...props}
        >
            <FieldGroup>
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-3xl font-bold text-gray-100">Create Account</h1>
                    <p className="text-gray-400 text-sm">Sign up to start your journey with us</p>
                </div>

                {error && <p className="text-red-400 text-sm text-center">{error}</p>}
                {success && <p className="text-green-400 text-sm text-center">{success}</p>}

                <Field>
                    <FieldLabel htmlFor="name">Full Name</FieldLabel>
                    <Input id="name" name="name" type="text" placeholder="John Doe" required />
                </Field>

                <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                </Field>

                <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input id="password" name="password" type="password" showPasswordToggle required />
                </Field>

                <Field>
                    <FieldLabel htmlFor="confirm">Confirm Password</FieldLabel>
                    <Input id="confirm" name="confirm" type="password" showPasswordToggle required />
                </Field>

                <Field>
                    <Button type="submit" className="w-full">Sign Up</Button>
                </Field>

                <FieldSeparator>Or sign up with</FieldSeparator>

                <Field className="flex flex-col gap-3">
                    <Button
                        variant="outline"
                        type="button"
                        className="w-full flex items-center justify-center gap-2"
                        onClick={handleGoogleSignup}
                    >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" className="h-5 w-5" />
                        Sign up with Google
                    </Button>

                    <FieldDescription className="text-center">
                        Already have an account?
                        <a href="/login" className="text-blue-500 hover:underline"> Sign in</a>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </motion.form>
    );
};

// ================= Main Signup Page =================
const SignUp = () => {
    return (
        <div className="grid min-h-screen lg:grid-cols-2 bg-gray-900">
            <div className="flex flex-col gap-6 p-8 md:p-12 justify-center">
                <div className="flex justify-center md:justify-start items-center gap-2 mb-6">
                    <a href="/" className="flex items-center gap-2 font-semibold text-gray-100">
                        <div className="bg-blue-600 text-white flex h-12 w-12 items-center justify-center rounded-lg shadow-lg animate-pulse">
                            <GalleryVerticalEnd className="h-6 w-6" />
                        </div>
                        Get Out
                    </a>
                </div>

                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-md bg-gray-800 p-10 rounded-2xl shadow-2xl">
                        <SignupForm />
                    </div>
                </div>
            </div>

            <div className="hidden lg:block relative overflow-hidden">
                <motion.img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                    alt="Signup Cover"
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            </div>
        </div>
    );
};

export default SignUp;
