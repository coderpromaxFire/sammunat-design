import jsPDF from "jspdf";

export default function generateCertificate({
  name,
  domain,
  score,
  total,
}) {
  const doc = new jsPDF("landscape");
  const pageWidth = 297;
  const centerX = pageWidth / 2;

  /* ===== Background ===== */
  doc.setFillColor(248, 249, 252);
  doc.rect(0, 0, 297, 210, "F");

  /* ===== Border ===== */
  doc.setDrawColor(27, 153, 139);
  doc.setLineWidth(3);
  doc.rect(12, 12, 273, 186);

  /* ===== Header ===== */
  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.setTextColor(27, 153, 139);
  doc.text("Certificate of Skill Readiness", centerX, 45, {
    align: "center",
  });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);
  doc.setTextColor(90);
  doc.text("This is to certify that", centerX, 65, {
    align: "center",
  });

  /* ===== Student Name ===== */
  doc.setFont("times", "italic");
  doc.setFontSize(30);
  doc.setTextColor(60);
  doc.text(name, centerX, 90, { align: "center" });

  /* ===== Certificate Content ===== */
  doc.setFont("helvetica", "normal");
  doc.setFontSize(15);
  doc.setTextColor(80);
  doc.text(
    `has successfully passed the ${domain} Assessment`,
    centerX,
    110,
    { align: "center" }
  );

  doc.text(
    `with a score of ${score} out of ${total}.`,
    centerX,
    125,
    { align: "center" }
  );

  /* ===== Footer Info ===== */
  const issueDate = new Date().toLocaleDateString();

  doc.setFontSize(12);
  doc.setTextColor(100);
  doc.text(`Issued on: ${issueDate}`, 30, 155);

  /* ===== Founder Name (NO SIGNATURE LINE) ===== */
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(40);
  doc.text(
    "Shubham Kumar Ranjeet",
    225,
    165,
    { align: "center" }
  );

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(90);
  doc.text(
    "Founder, Sammunat LLC",
    225,
    173,
    { align: "center" }
  );

  /* ===== Organization Footer ===== */
  doc.setFontSize(11);
  doc.setTextColor(120);
  doc.text("Sammunat LLC, USA", centerX, 185, {
    align: "center",
  });

  /* ===== Save ===== */
  doc.save(`Sammunat-${domain}-Certificate.pdf`);
}


