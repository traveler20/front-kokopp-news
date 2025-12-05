import { NextPage } from "next";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { LinkBackHome } from "@src/components/LinkBackHome";
import { PageSEO } from "@src/components/PageSEO";

const Page: NextPage = () => {
  return (
    <>
      <PageSEO title="当サイト概要" path="/about" />
      <ContentWrapper>
        <section className="about">
          <h1 className="about__title">当サイト概要</h1>
          <div className="about__body">
            <p>&nbsp;</p>
            <h2>当サイトについて</h2>
            <p>
              川越の新店舗情報やローカルニュースを配信しているメディアサイトをRSSフィードで集約しているサイトになります。
              <br />
              記事一覧から読みたい記事を選択すると、該当記事のサイトに遷移して読むことができます。
            </p>
            <p>ぜひ川越の最新情報のキャッチアップにお役立てください。</p>
            <p>&nbsp;</p>
            <h2>お問い合わせ</h2>
            <p>
              サイトの掲載取下げや修正のご相談、お問い合わせはお手数おかけしますが、
              <a href="https://kawagoe.fun/magazine/contact/">
                川越マガジンのお問い合わせページ
              </a>
              にてご連絡ください。
            </p>
            <p>&nbsp;</p>
            <h2>その他</h2>
            <p>
              Instagram：
              <a href="https://www.instagram.com/kokopp_kawagoe/">
                @kokopp_kawagoe
              </a>
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
