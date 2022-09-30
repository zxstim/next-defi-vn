import { useEffect } from "react";

const TableFooter = ({ range, setPage, page, slice }) => {
  const activeButtonTable = {
    border: '1px solid var(--color-border-default)',
    color: 'var(--color-accent-fg)',
    padding: '10px 10px 10px 10px',
    borderRadius: '6px',
    fontSize: '16px' 
  };
  
  const inactiveButtonTable = {
    border: '1px solid var(--color-border-default)',
    padding: '10px 10px 10px 10px',
    borderRadius: '6px'   
  }
  
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <div>
      {range.map((el, index) => (
        <button
          key={index}
          style={
            page === el ? activeButtonTable : inactiveButtonTable
          }
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default TableFooter;