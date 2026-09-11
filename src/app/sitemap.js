export default function sitemap() {
  const baseUrl = 'https://americanfirearmsnetwork.com';
  const lastModified = new Date();

  const routes = [
    { url: '', priority: 1.0, changeFrequency: 'daily' },
    { url: '/about-us', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/contact-us', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/resources', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/reviews', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/gallery', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/services/defensive-firearms-training', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/services/concealed-carry-permit-ccw-training', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/services/basic-firearms-safety-courses', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/services/advanced-firearms-training', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/services/situational-awareness-training', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/services/tactical-training', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/services/womens-only-firearms-training', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/services/youth-firearms-safety-courses', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/services/private-instruction', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/services/firearm-rental-and-range', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/training-ranges/gun-world-of-south-florida', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/training-ranges/ok-corral-gun-club', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/training-ranges/revere-gun-range', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/training-ranges/palm-beach-shooting-center', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/training-ranges/homestead-training-center', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/training-ranges/st-lucie-shooting-center-and-training-facility', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/training-ranges/okeechobee-shooting-sports', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/training-ranges/nexus-shooting', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/disclosure', priority: 0.4, changeFrequency: 'yearly' },
    { url: '/liability-waiver-release-of-indemnity', priority: 0.4, changeFrequency: 'yearly' },
    { url: '/firearm-safety-educational-disclaimer', priority: 0.4, changeFrequency: 'yearly' },
    { url: '/privacy-policy', priority: 0.4, changeFrequency: 'yearly' },
    { url: '/terms-of-service', priority: 0.4, changeFrequency: 'yearly' },
  ];

  return routes.map(route => ({
    url: `${baseUrl}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
