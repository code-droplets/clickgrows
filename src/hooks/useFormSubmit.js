import { useState } from "react";
import { saveToFirestore } from "../firebase/firestoreService";
import { sendToGoogleSheets } from "../utils/sheetsService";

const useFormSubmit = () => {
  const [status, setStatus] = useState("idle");
  const [error, setError]   = useState(null);
  const [docId, setDocId]   = useState(null);

  const submitForm = async (formData) => {
    setStatus("loading");
    setError(null);
    console.log("🚀 Submit started", formData);

    try {
      // Step 1 — Firestore
      console.log("📦 Saving to Firestore...");
      const id = await saveToFirestore(formData);
      console.log("✅ Firestore saved. Doc ID:", id);
      setDocId(id);

      // Step 2 — Google Sheets
      console.log("📊 Sending to Google Sheets...");
      await sendToGoogleSheets(formData);
      console.log("✅ Google Sheets done.");

      setStatus("success");
    } catch (err) {
      console.error("❌ Error caught:", err.message, err);
      setError(err.message || "Something went wrong.");
      setStatus("error");
    }
  };

  const reset = () => {
    setStatus("idle");
    setError(null);
    setDocId(null);
  };

  return { submitForm, status, error, docId, reset };
};

export default useFormSubmit;