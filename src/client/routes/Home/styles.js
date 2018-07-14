import styled from 'react-emotion';

export const HomeContainer = styled.div`
  display: block;
  min-height: 100vh;
  background: #fefefe;
  padding: 16px;

  > h1 {
    margin-top: 0;
  }

  pre {
    background: #e0e0e0;
    font-weight: 600;
    white-space: pre-wrap;
    word-break: break-all;
  }
`;

export const ComicCard = styled.div`
  padding: 16px;
  box-shadow: 0px 2px 8px -1px rgba(122,122,122,1);
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0 0 .5rem 0;
  }

  figure {
    align-self: center;
    margin: 0;

    img {
      max-width: 100%;
    }

    figcaption {
      text-align: center;
    }
  }
`;