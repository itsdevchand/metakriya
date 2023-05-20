import Head from 'next/head';

const Meta = (props) => (
  <Head>
    <title>{props.title}</title>
    <meta name='description' content={props.desc} />
    <meta property='og:type' content='website' />
    <meta name='og:title' property='og:title' content={props.title} />
    <meta
      name='og:description'
      property='og:description'
      content={props.desc}
    />
    <meta property='og:site_name' content='Proper Noun' />
    <meta property='og:url' content={`${props.canonical}`} />
    <meta name='twitter:card' content='summary' />
    <meta name='twitter:title' content={props.title} />
    <meta name='twitter:description' content={props.desc} />
    <meta name='twitter:site' content='@propernounco' />
    <meta name='twitter:creator' content='@propernounco' />
  </Head>
);

export default Meta;
