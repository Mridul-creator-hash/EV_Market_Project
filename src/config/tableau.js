/**
 * EV Insights - Tableau Public Configuration
 * 
 * This file centralizes all Tableau Public integration settings.
 * To update or replace the embedded dashboards or stories, update the URLs below.
 */

export const TABLEAU_CONFIG = {
  // Published EV Executive Dashboard provided by the project author:
  dashboard: {
    title: 'EV Executive Dashboard',
    description: 'Interactive executive view analyzing manufacturer performance, market dynamics, sales distribution, battery capacities, and driving ranges across electric vehicles.',
    // The public browser URL on Tableau Public:
    directUrl: 'https://public.tableau.com/app/profile/mridul.khandelwal8395/viz/EV_Market_Performance_Market_Story_2026-10-25_17932950027770/EVExecutiveDashboard?publish=yes',
    // The canonical Tableau Public embed URL:
    embedUrl: 'https://public.tableau.com/views/EV_Market_Performance_Market_Story_2026-10-25_17932950027770/EVExecutiveDashboard',
    author: 'Mridul Khandelwal',
    lastUpdated: 'October 2026',
    defaultHeight: '820px'
  },

  // Tableau Story:
  // When your Tableau Story URL is published, paste the published URL below.
  // Leave empty string ("") if not yet published. The app will automatically show
  // the configuration guide, an interactive URL testing tool, and the structured analytical storyline.
  story: {
    title: 'Electric Vehicle Market Story',
    description: 'Sequenced narrative walking through adoption waves, manufacturer share transitions, battery technology evolution, and price-to-range parity.',
    // Enter your published Tableau Story URL here when ready:
    directUrl: '', // e.g. 'https://public.tableau.com/app/profile/mridul.khandelwal8395/viz/EV_Market_Performance_Market_Story_2026-10-25_17932950027770/EVMarketStory'
    embedUrl: '',  // e.g. 'https://public.tableau.com/views/EV_Market_Performance_Market_Story_2026-10-25_17932950027770/EVMarketStory'
    defaultHeight: '820px'
  }
};

/**
 * Format a Tableau Public URL into an embeddable URL with standard query parameters.
 * @param {string} url - Tableau URL
 * @returns {string} Clean embed URL with parameters
 */
export function getTableauEmbedUrl(url) {
  if (!url || typeof url !== 'string') return '';
  
  let cleanUrl = url.trim();

  // If provided the /app/profile/... link format, convert to /views/ format for iframe embedding
  if (cleanUrl.includes('/app/profile/')) {
    const match = cleanUrl.match(/\/viz\/([^/?#]+)\/([^/?#]+)/);
    if (match) {
      const workbook = match[1];
      const sheet = match[2];
      cleanUrl = `https://public.tableau.com/views/${workbook}/${sheet}`;
    }
  }

  // Remove existing query parameters before appending clean embed params
  const baseViz = cleanUrl.split('?')[0];
  return `${baseViz}?:language=en-US&:embed=yes&:showVizHome=no&:host_url=https%3A%2F%2Fpublic.tableau.com%2F&:toolbar=yes&:animate_transition=yes`;
}
