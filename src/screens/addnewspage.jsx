import React, { useState } from "react";
import axios from "axios";

export default function AddNewsPage() {
  const [pin, setPin] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const [picture, setPicture] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [loading, setLoading] = useState(false);

  const SECRET_PIN = "92741"; // 🔐 You can change this anytime

  const handlePinSubmit = () => {
    if (pin === SECRET_PIN) {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect PIN. Try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const body = {
        picture,
        title,
        content,
        tag
      };

      await axios.post(
        "https://chatzyrserver-a921fc0b4b47.herokuapp.com/new-news",
        body,
        {
          headers: { "Content-Type": "application/json" }
        }
      );

      alert("News Added Successfully!");

      // Reset
      setPicture("");
      setTitle("");
      setContent("");
      setTag("");
    } catch (err) {
      alert("Failed to add news. Check console.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // 🔐 PIN SCREEN
  if (!authenticated) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h2>Enter PIN to Continue</h2>
          <input
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            maxLength={5}
            placeholder="Enter 5-digit PIN"
            style={styles.input}
          />
          <button onClick={handlePinSubmit} style={styles.button}>
            Unlock
          </button>
          {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}
        </div>
      </div>
    );
  }

  // 📰 ADD NEWS SCREEN
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Add News</h2>

        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            placeholder="Picture URL"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />

          <input
            style={styles.input}
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            style={{ ...styles.input, height: 120 }}
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <input
            style={styles.input}
            placeholder="Tag (e.g.: technology)"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Submitting..." : "Add News"}
          </button>
        </form>
      </div>
    </div>
  );
}

// SIMPLE INLINE STYLES
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f7f7f7",
    padding: 20
  },
  card: {
    background: "white",
    padding: 25,
    borderRadius: 16,
    width: "100%",
    maxWidth: 420,
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  input: {
    width: "100%",
    padding: 12,
    margin: "8px 0",
    border: "1px solid #ccc",
    borderRadius: 8,
    fontSize: 16
  },
  button: {
    width: "100%",
    padding: 12,
    background: "black",
    color: "white",
    border: "none",
    borderRadius: 8,
    fontSize: 16,
    marginTop: 10,
    cursor: "pointer"
  }
};
