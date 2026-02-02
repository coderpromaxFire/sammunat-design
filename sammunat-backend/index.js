import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", (req, res) => {
  const msg = (req.body.message || "").toLowerCase().trim();

  // helper for flexible intent matching
  const has = (...words) => words.some(word => msg.includes(word));

  let reply =
    "Hi 👋 I’m Sammunat’s assistant. How can I help you today?";

  // 👋 Greetings
  if (has("hi", "hello", "hey", "hii")) {
    reply = "Hello 👋 How can I help you today?";
  }

  // 🏢 About Sammunat
  else if (has("about", "sammunat", "company", "who are you")) {
    reply =
      "Sammunat is a technology-focused company helping businesses and startups build modern digital products, scalable platforms, and smart solutions.";
  }

  // 🧩 Services
  else if (has("service", "services", "offer", "provide", "what do you do")) {
    reply =
      "We offer Web Development, CRM & ERP solutions, UI/UX design, SaaS platforms, automation, cloud solutions, and custom software development.";
  }

  // 🌐 Web / Technology
  else if (has("web", "website", "web app", "technology", "tech stack")) {
    reply =
      "We build modern websites, scalable web applications, dashboards, admin panels, and APIs using the latest technologies.";
  }

  // 🎨 UI / UX
  else if (has("ui", "ux", "design", "designer")) {
    reply =
      "Our UI/UX team focuses on clean design, usability, and conversion-driven user experiences.";
  }

  // 🧑‍💼 Jobs / Careers
  else if (has("job", "jobs", "career", "careers", "hiring")) {
    reply =
      "Sammunat offers career opportunities in development, design, and marketing. Please visit the Careers section on our website.";
  }

  // 🧑‍🎓 Internships
  else if (has("intern", "internship", "internships")) {
    reply =
      "We offer internship programs with real-world projects, mentorship, and hands-on industry experience.";
  }

  // 🎓 Students / Programs
  else if (has("student", "students", "college", "program", "programs", "training")) {
    reply =
      "We support students through internships, training programs, workshops, and hands-on industry projects.";
  }

  // 📝 Blogs
  else if (has("blog", "blogs", "article", "articles", "post", "posts")) {
    reply =
      "Sammunat publishes blogs on technology trends, business insights, UI/UX, SaaS, and student guidance. You can explore them in the Blog section of our website.";
  }

  // 💼 Projects / Portfolio
  else if (has("project", "projects", "portfolio", "work", "case study")) {
    reply =
      "We’ve worked on multiple web apps, SaaS platforms, dashboards, and business systems. Visit our Portfolio section to see our work.";
  }

  // 💰 Pricing
  else if (has("price", "pricing", "cost", "budget", "charges")) {
    reply =
      "Pricing depends on project scope and requirements. Please fill out our service form and our team will get back to you with a detailed quote.";
  }

  // 📞 Contact
  else if (has("contact", "email", "phone", "reach", "support")) {
    reply =
      "You can contact Sammunat via the contact form on our website. Our team usually responds within 24 hours.";
  }

  // 🕒 Working hours
  else if (has("time", "working hours", "office hours")) {
    reply =
      "Our working hours are Monday to Friday, 10 AM – 6 PM IST.";
  }

  // ❓ Fallback
  else {
    reply =
      "I can help with services, jobs, internships, student programs, blogs, pricing, or contact details 😊 What would you like to know?";
  }

  res.json({ reply });
});

app.listen(3001, () => {
  console.log("✅ Sammunat backend running on http://localhost:3001");
});
