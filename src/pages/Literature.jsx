import React from "react";

const literatureData = [
  {
    id: 1,
    title: "Research Paper",
    description: "Impact of Cow Politics On Muslim Community : A Case Study of Ghosi Community Of North India",
    pdfLink: "/literatures/Delhi_Report_OBC.pdf",
  },
  {
    id: 2,
    title: "Research Book",
    description: "Life and Livehood Transition of Ghosis Study of Bahraich District (U.P)",
    pdfLink: "/literatures/research_book.pdf",
  },
  {
    id: 3,
    title: "Delhi Goverment Report On Ghosi",
    description: "Examining The Issue of Certain Entries of The Central List of OBC Pertaining to NCT of Delhi",
    pdfLink: "/literatures/research_paper.pdf",
  },
];

const Literature = () => {
  const handlePdfClick = (e, path) => {
    e.preventDefault();
    try {
      window.open(path, '_blank');
    } catch (error) {
      console.error('Failed to open PDF:', error);
      alert('The PDF could not be opened. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-500 via-green-500 to-emerald-400 text-white text-center py-4 mb-6">
        <h1 className="text-3xl font-bold">Literature Collection</h1>
      </header>

      {/* Literature Cards */}
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {literatureData.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            <a
              href={item.pdfLink}
              onClick={(e) => handlePdfClick(e, item.pdfLink)}
              className="mt-3 inline-block text-blue-500 hover:underline"
            >
              📄 View PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Literature;
