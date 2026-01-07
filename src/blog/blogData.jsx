// src/blog/blogData.jsx

export const blogs = [
  {
    slug: "how-i-learned-react",
    title: "How I Learned React as a Beginner",
    date: "Jan 5, 2026",
    author: "Komal Bavoria",
    readTime: 6,
    excerpt:
      "A practical breakdown of how I approached learning React without feeling overwhelmed.",
    content: (
      <>
        <p>
          When I first started learning React, everything felt confusing —
          components, props, state, hooks. I didn’t know where to begin.
        </p>

        <p>
          I was jumping between tutorials, copying code without understanding
          it. That only increased my frustration.
        </p>

        <h2>What Changed Everything</h2>

        <p>
          I stopped chasing tutorials and started asking one question:
          <strong> why does React exist?</strong>
        </p>

        <p>
          Once I understood that React is about managing UI as a function of
          state, things slowly started making sense.
        </p>

        <h2>My Advice</h2>

        <p>
          Build small things. Break them. Feel confused. That’s how learning
          actually happens.
        </p>
      </>
    )
  },

  {
    slug: "consistency-over-motivation",
    title: "Consistency Beats Motivation Every Time",
    date: "Dec 28, 2025",
    author: "Komal Bavoria",
    readTime: 4,
    excerpt:
      "Why motivation fails long-term and how consistency quietly builds real progress.",
    content: (
      <>
        <p>
          Motivation feels powerful — but it’s unreliable. Some days you have it,
          most days you don’t.
        </p>

        <p>
          Consistency doesn’t feel exciting. It feels boring. And that’s why it
          works.
        </p>

        <h2>The Shift</h2>

        <p>
          I stopped asking “Do I feel like coding today?” and instead asked:
          “What is the smallest thing I can do today?”
        </p>

        <p>
          That one shift changed my progress completely.
        </p>
      </>
    )
  }
];
