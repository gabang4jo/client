import styled from "styled-components";

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Nav>
        <Button className='move_button' onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button className="page_button"
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button className='move_button' onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;

  .move_button {
    margin-top: 4px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .page_button {
    border-radius: 3px;
  }
`;

const Button = styled.button`
  border: none;
  height: 31px;
  width: 31px;
  margin: 0;
  background-color: #fff;
  color: #333;
  font-size: 1rem;
  
  &:hover {
    cursor: pointer;
  }

  &[disabled] {
    transform: revert;
  }

  &[aria-current] {
    background: #0e4eb2;
    color: #fff;
    font-weight: bold;
    transform: revert;
  }
`;

export default Pagination;