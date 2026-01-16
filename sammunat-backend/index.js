import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.post("/chat", (req, res) => {
  const msg = req.body.message?.toLowerCase() || "";

  let reply = "Hi 👋 I’m Sammunat’s assistant. How can I help you today?";

  if (msg.includes("service")) {
    reply =
      "We offer Web Development, CRM & ERP solutions, UI/UX design, SaaS platforms, and automation services.";
  } else if (msg.includes("web")) {
    reply =
      "Our Web Development services include websites, web apps, dashboards, and scalable platforms.";
  } else if (msg.includes("crm") || msg.includes("erp")) {
    reply =
      "We build custom CRM & ERP systems to help businesses manage operations efficiently.";
  } else if (msg.includes("ui") || msg.includes("ux") || msg.includes("design")) {
    reply =
      "Our UI/UX team designs modern, user-friendly interfaces focused on great user experience.";
  } else if (msg.includes("price") || msg.includes("cost")) {
    reply =
      "Pricing depends on project scope. Please fill out our service form and our team will contact you.";
  } else if (msg.includes("contact")) {
    reply =
      "You can contact us through the form on our website. Our team responds quickly.";
  } else if (msg.includes("hello") || msg.includes("hi")) {
    reply = "Hello 😊 How can I help you today?";
  }

  res.json({ reply });
});

app.listen(3001, () => {
  console.log("✅ Free chatbot backend running on http://localhost:3001");
  
});
