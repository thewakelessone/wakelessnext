import Layout from '../../components/layout';
import { getAllArticleSlugs, getArticleData } from '../../lib/articles';

export async function getStaticProps({ params }) {
    const articleData = await getArticleData(params.slug);
    return {
        props: {
            articleData,
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

export default function Article({ articleData }) {
    //console.log(articleData)
    return ( 
      <>
           {articleData.title}
           <br />
           {articleData.slug}
           <br />
           {articleData.date}
           <br />
           <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
      </>
    );
}
