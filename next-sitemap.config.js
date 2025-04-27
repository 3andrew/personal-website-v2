/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://andrewlin.ca',   
    generateRobotsTxt: true,          
    sitemapSize: 7000,               
    changefreq: 'weekly',
    priority: 0.7,
    exclude: ['/404', '/server-error'],
    transform: async (config, path) => {
        const priority = path.startsWith('/about') ? 0.9 : 0.7;
        return { loc: path, priority, changefreq: 'weekly', lastmod: config.autoLastmod ? new Date().toISOString() : undefined };
    },
    additionalPaths: async (config) => {
        return [
            await config.transform(config, '/resume.pdf'),
        ]
    },
};
  