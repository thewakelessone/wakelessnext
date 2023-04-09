import Layout from '../../components/layout';
import { getArticles, getArticle } from '../../lib/articles';

export async function getStaticProps({ params }) {
    const article = await getArticle(params.slug);
    return {
        props: {
            article,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllArticleSlugs();
    return {
        paths,
        fallback: false,
    };
}

export default function Article({ article }) {
    //console.log(articleData)
    return ( 
      <>
           {article.title}
           <br />
           {article.slug}
           <br />
           {article.date}
           <br />
           <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
      </>
    );
}
