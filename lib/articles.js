import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// import { remark } from 'remark';
import html from 'remark-html';


const articlesDirectory = path.join(process.cwd(), 'articles');

export function getArticles(slugs) {
  // console.log('slugs' + slugs);
  // Get file names under /posts
  const fileNames = fs.readdirSync(articlesDirectory, slugs);
  // const articles = [];
  // console.log('fileNames' + fileNames);
  const articles = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data: frontmatter, content } = matter(fileContents);
    // Use gray-matter to parse the post metadata section
    // articles.append( matter(fileContents) );
    // console.log(frontmatter);
    // console.log(content);
    // Combine the data with the id
    return {
      frontmatter,
      content,
    };
  });
        // Sort posts by date
  return articles;
}

export function getAllArticleSlugs() {
  const fileNames = fs.readdirSync(articlesDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, '')
      }
    }
  })
}
export async function getArticle(slug) {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  // console.log('fullPath:' + fullPath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // console.log('fileContents:' + fileContents);
  // Use gray-matter to parse the post metadata section
  const { data: frontmatter, content } = matter(fileContents);
//  const matterResult = matter(fileContents);
//  const processedContent = await remark().use(html).process(matterResult.content);
//  const contentHtml = processedContent.toString();
  // console.log('matterResult:' + {...matterResult.data})
  // Combine the data with the id
  return {
    frontmatter,
    content,
  };
}
