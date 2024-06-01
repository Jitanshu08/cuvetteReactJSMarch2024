import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validate = () => {
    let tempErrors = {};
    if (!name) tempErrors.name = "Name is required";
    if (!email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Email address is invalid";
    }
    if (!password) {
      tempErrors.password = "Password is required";
    } else if (password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters long";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data is valid:", { name, email, password });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" value={name} onChange={handleNameChange} />
          {errors.name ? <p>{errors.name}</p> : <></>}
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" value={email} onChange={handleEmailChange} />
          {errors.email ? <p>{errors.email}</p> : <></>}
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password ? <p>{errors.password}</p> : <></>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default MyForm;
