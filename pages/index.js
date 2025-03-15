import { Button } from "react";

export default function Home() {
    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>AI Portfolio Builder</h1>
            <p style={{ fontSize: "1.2rem", margin: "20px 0" }}>
                Automatically generate a professional portfolio in minutes.
                Upload your work, let AI do the layout, and export instantly.
            </p>
            <button style={{ 
                marginTop: "20px", 
                padding: "12px 24px", 
                fontSize: "16px", 
                backgroundColor: "#0070f3", 
                color: "white", 
                border: "none", 
                borderRadius: "5px", 
                cursor: "pointer" 
            }}>Get Early Access</button>
        </div>
    );
}