// Configuration file for environment variables
export const config = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    rssApiUrl: process.env.NEXT_PUBLIC_RSS_API_URL || 'https://api.rss2json.com/v1/api.json',
    externalLinks: {
        github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/NaveenJc10',
        linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/in/naveen-thinarthan-70b346309/',
        //twitter: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://x.com/naveenjc10',
        medium: process.env.NEXT_PUBLIC_MEDIUM_URL || 'https://medium.com/@naveenjc10',
        mediumRss: process.env.NEXT_PUBLIC_MEDIUM_RSS_URL || 'https://medium.com/@naveenjc10',
    },
} as const;
