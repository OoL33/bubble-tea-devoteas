// import React from "react";

// function SignUpForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("/api/v1/sign_up", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         // Handle successful sign-in (e.g., store authentication token).
//       } else {
//         // Handle sign-in error (e.g., display an error message).
//       }
//     } catch (error) {
//       // Handle network or other errors.
//     }
//   };

//   return (
//     <form onSubmit={handleSignUp}>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// }

// export default SignUpForm;
