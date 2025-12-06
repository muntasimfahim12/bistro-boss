import React, { useState, useEffect, useRef, useContext } from "react";
import { GalleryVerticalEnd, Eye, EyeOff } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Swal from "sweetalert2";

import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
} from "react-simple-captcha";

import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.config"; // Firebase config file

const cn = (...classes) => classes.filter(Boolean).join(" ");

// ================= UI COMPONENTS =================
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

// ================= INPUT =================
const Input = ({ type, showPasswordToggle, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    if (showPasswordToggle) {
        return (
            <div className="relative">
                <input
                    type={showPassword ? "text" : type}
                    className="bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    {...props}
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
            </div>
        );
    }

    return (
        <input
            type={type}
            className="bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            {...props}
        />
    );
};

// ================= BUTTON =================
const Button = ({ children, variant, className, ...props }) => (
    <button
        className={cn(
            "px-4 py-2 rounded-lg font-medium transition shadow-md hover:shadow-lg",
            variant === "outline"
                ? "border border-gray-600 text-gray-300 hover:bg-gray-700"
                : "bg-blue-600 text-white hover:bg-blue-700",
            className
        )}
        {...props}
    >
        {children}
    </button>
);

// ================= LOGIN FORM =================
const LoginForm = () => {
    const captchaRef = useRef(null);
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = async (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const captchaValue = form.captcha.value;

        if (!validateCaptcha(captchaValue)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Captcha!',
                text: 'Please try again.',
                showClass: { popup: 'animate__animated animate__shakeX' },
                hideClass: { popup: 'animate__animated animate__fadeOut' }
            });
            setDisabled(true);
            form.captcha.value = "";
            loadCaptchaEnginge(6);
            return;
        }

        try {
            const result = await loginUser(email, password);
            Swal.fire({
                icon: 'success',
                title: 'Welcome Back!',
                text: `${result.user.email} logged in successfully.`,
                timer: 2000,
                showConfirmButton: false
            });
            const from = location.state?.from?.pathname || "/";
            setTimeout(() => navigate(from, { replace: true }), 2000);
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Wrong email or password!',
            });
        }
    };

    // ================= GOOGLE LOGIN =================
    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            Swal.fire({
                icon: 'success',
                title: 'Welcome!',
                text: `${result.user.displayName || result.user.email} logged in successfully.`,
                timer: 2000,
                showConfirmButton: false
            });
            const from = location.state?.from?.pathname || "/";
            setTimeout(() => navigate(from, { replace: true }), 2000);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Google Login Failed',
                text: error.message,
            });
        }
    };

    const handleCaptchaCheck = () => {
        const userValue = captchaRef.current.value;
        setDisabled(!validateCaptcha(userValue));
    };

    return (
        <motion.form
            onSubmit={handleLogin}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
        >
            <FieldGroup>
                <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input type="email" name="email" placeholder="you@example.com" required />
                </Field>

                <Field>
                    <FieldLabel>Password</FieldLabel>
                    <Input type="password" name="password" showPasswordToggle required />
                </Field>

                <Field>
                    <LoadCanvasTemplate />
                    <input
                        ref={captchaRef}
                        name="captcha"
                        onBlur={handleCaptchaCheck}
                        type="text"
                        placeholder="Enter Captcha"
                        className="bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-2 mt-2 focus:ring-2 focus:ring-blue-500 w-full"
                        required
                    />
                </Field>

                <Button type="submit" disabled={disabled} className="w-full">Sign In</Button>
                <Button type="button" variant="outline" onClick={handleGoogleLogin} className="w-full">
                    Sign in with Google
                </Button>
                {/* ====== SIGNUP LINK ====== */}
                <p className="text-center text-gray-400 mt-2">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-blue-500 hover:underline">
                        Sign Up
                    </a>
                </p>
            </FieldGroup>
        </motion.form>
    );
};

// ================= LOGIN PAGE =================
const Login = () => (
    <div className="grid min-h-screen lg:grid-cols-2 bg-gray-900">
        <div className="flex flex-col gap-6 p-8 md:p-12 justify-center">
            <a href="/" className="flex items-center gap-2 text-gray-100 mb-6 font-semibold">
                <div className="bg-blue-600 h-12 w-12 flex items-center justify-center rounded-lg shadow-lg">
                    <GalleryVerticalEnd className="h-6 w-6" />
                </div>
                Get Out
            </a>

            <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-md bg-gray-800 p-10 rounded-2xl shadow-2xl">
                    <LoginForm />
                </div>
            </div>
        </div>

        <div className="hidden lg:block relative">
            <motion.img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Login Cover"
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>
    </div>
);

export default Login;
