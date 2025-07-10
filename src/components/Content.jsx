import styled from 'styled-components';

const ContentWrapper = styled.main`
  padding: 20px 0;
`;

const Article = styled.article`
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #222;
`;

const Text = styled.p`
  line-height: 1.6;
  color: #555;
`;

function Content({ content }) {
  return (
    <ContentWrapper>
      <Article>
        <Title>{content.title}</Title>
        <Text>{content.subtitle}</Text>
        <img src={content.img} alt={content.title} />
      </Article>
    </ContentWrapper>

    // <div className="content-container">
    //   <img src={content.img} alt={content.title} />
    //   <span>모집중</span>
    //   <div>{content.title}</div>
    //   <p>{content.subtitle}</p>
    // </div>
  );
}

export default Content;
