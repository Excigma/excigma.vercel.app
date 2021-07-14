import { readdir } from 'fs/promises';
import { join } from 'path';

export default async function scanDirectory(filename) {
    const path = filename.split('pages');
    const folderDir = join(process.cwd(), 'src', 'pages', path[path.length - 1].replace(/\.mdx|\.jsx|\.js|\.md/g, ''));

    let pageTree = {};

    const folderPages = (await readdir(folderDir))
        .filter(child => !(child.includes('.js') || child.includes('.md')));

    for (const folderPage of folderPages) {
        pageTree[folderPage] = [];

        const pagesDir = join(process.cwd(), 'src', 'pages', path[path.length - 1].replace(/\.mdx|\.jsx|\.js|\.md/g, ''), folderPage);

        const pages = (await readdir(pagesDir))
            .filter(page => page !== 'index.jsx' && (page.includes('.js') || page.includes('.md')));

        for (const page of pages) {
            pageTree[folderPage].push(page.replace(/\.mdx|\.jsx|\.js|\.md/g, ''));
        }
    }

    return pageTree;
}