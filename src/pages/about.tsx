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
						<p>このサイトはtraveler20の各種ブログをまとめたWEBサイトです。</p>
						<p>
							中の人の詳細については
							<a href="https://yurukei-career.com/yurukei-profile/">
								ゆるけーのプロフィールについて
							</a>
							をご覧ください。
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
