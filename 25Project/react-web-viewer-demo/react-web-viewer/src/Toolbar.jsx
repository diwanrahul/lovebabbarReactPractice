import React from 'react';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Toolbar = ({
  
    onPageNext,
    onPagePrev,
    currentPage,
    totalPages
}) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '8px',
            backgroundColor: '#f5f5f5',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        }}
    >
        <button onClick={onPagePrev} disabled={currentPage <= 1}>
        <GrFormPrevious />
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={onPageNext} disabled={currentPage >= totalPages}>
        <MdNavigateNext />
        </button>
       
    </div>
);

export default Toolbar;
