import styled from "@emotion/styled";
import theme from "../../theme";

const BarContainer = styled("article")`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${theme.colors.secondary};
`;

const BarTitle = styled("h2")`
  display: block;
  padding-bottom: 15px;
  font-size: 30px;
  color: ${theme.colors.primary};
`;

const DescriptionBar = styled("p")`
  line-height: 1.5;
  margin-bottom: 20px;
`;

const Footer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LikeContainer = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .illu-like {
    max-width: 60px;
    margin-right: 20px;
  }
`;

export { BarContainer, BarTitle, DescriptionBar, LikeContainer, Footer };
