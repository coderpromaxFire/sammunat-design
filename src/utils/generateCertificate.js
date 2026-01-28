import jsPDF from "jspdf";

export default function generateCertificate({
  name,
  domain,
  score,
  total,
}) {
  const doc = new jsPDF("landscape");

  // Background
  doc.setFillColor(248, 241, 255);
  doc.rect(0, 0, 297, 210, "F");

  // Border
  doc.setDrawColor(27, 153, 139);
  doc.setLineWidth(4);
  doc.rect(10, 10, 277, 190);

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(30);
  doc.text("Certificate of Skill Readiness", 148, 45, { align: "center" });

  // Subtitle
  doc.setFontSize(16);
  doc.setFont("helvetica", "normal");
  doc.text("This is to certify that", 148, 65, { align: "center" });

  // Name
  doc.setFontSize(28);
  doc.setFont("helvetica", "bold");
  doc.text(name, 148, 85, { align: "center" });

  // Content
  doc.setFontSize(16);
  doc.setFont("helvetica", "normal");
  doc.text(
    `has successfully passed the ${domain} Assessment`,
    148,
    105,
    { align: "center" }
  );

  doc.text(
    `Score: ${score} / ${total}`,
    148,
    120,
    { align: "center" }
  );

  // Footer
  doc.setFontSize(14);
  doc.text("Issued by Sammunat LLC", 148, 145, { align: "center" });

  doc.setFontSize(12);
  doc.text(
    `Date: ${new Date().toLocaleDateString()}`,
    148,
    160,
    { align: "center" }
  );

  doc.save(`Sammunat-${domain}-Certificate.pdf`);
}