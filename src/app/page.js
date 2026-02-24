"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  async function handleTestConnection() {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/db-test");
      const data = await response.json();
      setResult({ ...data, status: response.status });
    } catch (error) {
      setResult({
        ok: false,
        message: "Request failed",
        error: error.message,
        status: 0,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>MySQL + Next.js Connection Test</h1>
          <p>Click the button to verify your database connection from Next.js server API.</p>
        </div>
        <div className={styles.ctas}>
          <button
            className={styles.primary}
            onClick={handleTestConnection}
            disabled={loading}
          >
            {loading ? "Testing..." : "Test MySQL Connection"}
          </button>
        </div>
        {result && (
          <div className={result.ok ? styles.successBox : styles.errorBox}>
            <strong>{result.message}</strong>
            <p>Status: {result.status}</p>
            {result.serverTime && <p>Server Time: {String(result.serverTime)}</p>}
            {result.error && <p>Error: {result.error}</p>}
          </div>
        )}
      </main>
    </div>
  );
}
