// ResumePreviewStyled.js
import styled from "styled-components";

const ResumePreviewStyled = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    margin-top: 0;
    font-size: 1.8rem;
    color: #333;
  }

  h3 {
    margin-bottom: 5px;
    font-size: 1.2rem;
    color: #555;
  }

  p {
    margin: 5px 0;
    font-size: 1rem;
    color: #666;
  }

  ul {
    margin: 5px 0 15px 20px;
    padding: 0;
    list-style-type: disc;
    color: #555;
  }

  li {
    margin-bottom: 5px;
  }

  .section {
    margin-bottom: 15px;
  }

  .section-title {
    font-weight: bold;
    color: #222;
    margin-bottom: 5px;
    font-size: 1.1rem;
  }
`;

export default ResumePreviewStyled;
