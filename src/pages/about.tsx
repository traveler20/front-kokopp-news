import { NextPage } from "next";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { LinkBackHome } from "@src/components/LinkBackHome";
import { PageSEO } from "@src/components/PageSEO";

const Page: NextPage = () => {
  return (
    <>
      <PageSEO title="About" path="/about" />
      <ContentWrapper>
        <section className="about">
          <h1 className="about__title">About</h1>
          <div className="about__body">
            <p>
              川越の新店舗情報やローカルニュースを配信しているメディアサイトをRSSフィードで集約しているサイトになります。
              <br />
              記事一覧から読みたい記事を選択すると、該当記事のサイトに遷移して読むことができます。
            </p>
            <p>ぜひ川越の最新情報のキャッチアップにお役立てください。</p>
            <p>
              当サイトの運営者が別で運営しているサイトは
              <a href="https://kawagoe.traveler20.site/">こちら</a>。
            </p>
          </div>
          <div className="about__actions">
            <LinkBackHome />
          </div>
        </section>
      </ContentWrapper>
    </>
  );
};

export default Page;
