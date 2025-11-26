import React, { useContext, useEffect, useState, useRef } from "react";
import { TemplateContextAPI } from "../../Context/TemplateContext";
import { useParams } from "react-router-dom";
import TemplatesDirectories from "./TemplatesDirectory";
import { CiEdit } from "react-icons/ci";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const TemplateEditor = () => {
  const [hasPaid, setHasPaid] = useState(false);

  const { id } = useParams();
  const { all_templates } = useContext(TemplateContextAPI);
  const [currentTemplate, setCurrentTemplate] = useState(null);

  const templateRef = useRef(null);
  
  const handlePayment = () => {
    const options = {
      key: "rzp_test_RhaiaYtREgkZfe", // replace with your key id
      amount: 100, // 1 Rupee = 100 paise
      currency: "INR",
      name: "Resume Template",
      description: "Paid Template Download",
      handler: function (response) {
        // Payment successful
        setHasPaid(true);
        alert("Payment Successful! You can download now.");
      },
      prefill: {
        name: "Your Customer Name",
        email: "atulgathwala@gamil.com",
        contact: "8218695041",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  useEffect(() => {
    if (all_templates) {
      const temp = all_templates.find((t) => String(t.id) === String(id));
      setCurrentTemplate(temp);
    }
  }, [all_templates, id]);

  if (!currentTemplate) return <h2>Loading...</h2>;

  const ComponentToRender =
    TemplatesDirectories[currentTemplate.template.trim()];

  const downloadPDF = async () => {
    if (!templateRef.current) return;

    try {
      // Capture only the template div
      const canvas = await html2canvas(templateRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        scrollY: -window.scrollY, // ensures the element is fully visible
      });

      const imgData = canvas.toDataURL("image/png");

      // Create PDF matching template dimensions
      const pdf = new jsPDF({
        orientation: canvas.width > canvas.height ? "landscape" : "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("Resume.pdf");
    } catch (err) {
      console.error("Error generating PDF:", err);
    }
  };

  return (
    <section className="text-black">
      <header className="h-[60px] bg-white flex items-center gap-2 px-6 shadow-md">
        <span className="font-bold text-[20px] font-semibold">
          <CiEdit />
        </span>
        <h1 className="font-semibold">Edit here</h1>
      </header>

      <section className="pt-4 min-h-screen flex flex-col items-center justify-start gap-4 bg-gray-100">
        {/* Template Wrapper */}
        <div
          contentEditable="true"
          ref={templateRef}
          className="bg-white inline-block"
        >
          {ComponentToRender && <ComponentToRender />}
        </div>

        {/* Download Button */}
        {/* Download Button */}
        {currentTemplate.isPaid ? (
          hasPaid ? (
            <button
              onClick={downloadPDF}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md"
            >
              Download Paid Template
            </button>
          ) : (
            <button
              onClick={handlePayment}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md"
            >
              Pay ₹1 to Download
            </button>
          )
        ) : (
          <button
            onClick={downloadPDF}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md"
          >
            Download Free Template
          </button>
        )}
      </section>
    </section>
  );
};

export default TemplateEditor;
