import React, { useState } from "react";
import { GalleryVerticalEnd, Eye, EyeOff } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Helper to merge class names
const cn = (...classes) => classes.filter(Boolean).join(" ");

// UI Components
const FieldGroup = ({ children }) => <div className="flex flex-col gap-6">{children}</div>;
const Field = ({ children }) => <div className="flex flex-col gap-2">{children}</div>;
const FieldLabel = ({ children, htmlFor }) => (
    <label htmlFor={htmlFor} className="font-semibold text-sm text-gray-300">
        {children}
    </label>
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

// SignUpForm Component
const SignupForm = ({ className, ...props }) => {
    return (
        <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={cn("flex flex-col gap-6", className)}
            {...props}
        >
            <FieldGroup>
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-3xl font-bold text-gray-100">Create Account</h1>
                    <p className="text-gray-400 text-sm">
                        Sign up to start your journey with us
                    </p>
                </div>

                <Field>
                    <FieldLabel htmlFor="name">Full Name</FieldLabel>
                    <Input id="name" type="text" placeholder="John Doe" required />
                </Field>

                <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input id="email" type="email" placeholder="you@example.com" required />
                </Field>

                <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input id="password" type="password" showPasswordToggle />
                </Field>

                <Field>
                    <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
                    <Input id="confirm-password" type="password" showPasswordToggle />
                </Field>

                <Field>
                    <Button type="submit" className="w-full">
                        Sign Up
                    </Button>
                </Field>

                <FieldSeparator>Or sign up with</FieldSeparator>

                <Field className="flex flex-col gap-3">
                    {/* GitHub Login */}
                    <Button
                        variant="outline"
                        type="button"
                        className="w-full flex items-center justify-center gap-2 border-gray-600 text-gray-100 hover:bg-gray-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-5 w-5"
                            fill="currentColor"
                        >
                            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.753-1.335-1.753-1.09-.746.084-.73.084-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.998.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.398 3-.404 1.02.006 2.043.138 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.654 1.652.242 2.873.118 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.478 5.921.429.37.813 1.096.813 2.21 0 1.606-.015 2.896-.015 3.286 0 .315.218.694.825.576C20.565 21.795 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        Sign up with GitHub
                    </Button>

                    {/* Google Login */}
                    <Button
                        variant="outline"
                        type="button"
                        className="w-full flex items-center justify-center gap-2 border-gray-600 text-gray-100 hover:bg-gray-700"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="Google"
                            className="h-5 w-5"
                        />
                        Sign up with Google
                    </Button>

                    <FieldDescription className="text-center">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-500 hover:underline">
                            Sign in
                        </a>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </motion.form>
    );
};

// Main Signup Page
const SignUp = () => {
    return (
        <div className="grid min-h-screen lg:grid-cols-2 bg-gray-900">
            {/* Left Side */}
            <div className="flex flex-col gap-6 p-8 md:p-12 justify-center">
                {/* Logo */}
                <div className="flex justify-center md:justify-start items-center gap-2 mb-6">
                    <a href="/" className="flex items-center gap-2 font-semibold text-gray-100">
                        <div className="bg-blue-600 text-white flex h-12 w-12 items-center justify-center rounded-lg shadow-lg animate-pulse">
                            <GalleryVerticalEnd className="h-6 w-6" />
                        </div>
                        Get Out
                    </a>
                </div>

                {/* Form */}
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-md bg-gray-800 p-10 rounded-2xl shadow-2xl">
                        <SignupForm />
                    </div>
                </div>
            </div>

            {/* Right Side Image with Animation */}
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
