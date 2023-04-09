import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// import { remark } from 'remark';
import html from 'remark-html';


const articlesDirectory = path.join(process.cwd(), 'articles');

export function getArticles(slugs) {

  const fileNames = fs.readdirSync(articlesDirectory, slugs);
  const articles = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, '');
    // Read markdown file as string
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data: frontmatter, content } = matter(fileContents);

    return {
      frontmatter,
      content,
    };
  });
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
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data: frontmatter, content } = matter(fileContents);

  return {
    frontmatter,
    content,
  };
}
