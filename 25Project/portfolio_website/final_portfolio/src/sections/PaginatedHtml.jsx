import React, { useState, useEffect } from 'react';

const PaginatedHtml = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetch(`input-24-07-2024.html`)
      .then(response => response.text())
      .then(data => {
        setHtmlContent(data);
        paginateHtmlContent(data);
      });
  }, []);

  const paginateHtmlContent = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const allElements = Array.from(doc.body.childNodes);
    const pageSize = 2; // Adjust this value to change the number of elements per page
    const pagesArray = [];

    for (let i = 0; i < allElements.length; i += pageSize) {
      pagesArray.push(allElements.slice(i, i + pageSize));
    }

    setPages(pagesArray);
  };

  const renderPage = (pageContent) => {
    return pageContent.map((node, index) => (
      <div key={index} dangerouslySetInnerHTML={{ __html: node.outerHTML }} />
    ));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1));
  };

  return (
    <div>
      <h2>Paginated HTML Content</h2>
      {pages.length > 0 ? (
        <div>
          {renderPage(pages[currentPage])}
          <div>
            <button onClick={handlePrevPage} disabled={currentPage === 0}>
              Previous
            </button>
            <button onClick={handleNextPage} disabled={currentPage === pages.length - 1}>
              Next
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PaginatedHtml;
