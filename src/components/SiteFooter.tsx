import { ContentWrapper } from "@src/components/ContentWrapper";
import { config } from "@site.config";

export const SiteFooter: React.FC = () => (
  <footer className="site-footer">
    <ContentWrapper>
      <p>&copy;&nbsp;2022&nbsp;{config.siteMeta.administrator}</p>
    </ContentWrapper>
  </footer>
);
