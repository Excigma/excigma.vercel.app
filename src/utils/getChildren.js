import { readdir } from 'fs/promises';
import { join } from 'path';

export default async function getChildren (filename) {
    const path = filename.split('pages');
    const folderDir = join(process.cwd(), 'src', 'pages', path[path.length - 1].slice(0, -3));

    let pageTree = {};
    
    const folderPages = (await readdir(folderDir))
        .filter(child => !child.includes('.js'));
    
    for (const folderPage of folderPages) {
        pageTree[folderPage] = [];

        const pagesDir = join(process.cwd(), 'src', 'pages', path[path.length - 1].slice(0, -3), folderPage);

        const pages = (await readdir(pagesDir))
            .filter(page => page !== 'index.js' && page.includes('.js'));

        for (const page of pages) {
            pageTree[folderPage].push(page.slice(0, -3));
        }
    }

    return pageTree;
}