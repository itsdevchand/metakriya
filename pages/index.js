import Head from "next/head";
// import Hero from '../components/ui/Hero/Hero';
import { Service, Hero, RelatedCard, Faq } from "../components/ui";
import s from "../styles/Home.module.scss";
import cls from "classnames";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pixkirya</title>
        <meta
          name="description"
          content="This is a compnay related with making graphic related content"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={cls(s.bodyWrapper)}>
        <div className={s.heroWrapper}>
          <Hero />
        </div>

        {/* services section */}
        <div className={cls(s.serviceWrapper)}>
          <Service order="odd" />
          <Service order="even" />
          <Service order="odd" />
        </div>

        {/* related product */}
        <div className={cls(s.faqWrapper)}>
          <div className={cls("container")}>
            <RelatedCard />
          </div>
        </div>

        {/* related product */}
        <div className={cls("bg-primary text-white p-5", s.faqWrapper)}>
          <Faq />
        </div>
      </div>
    </>
  );
}
