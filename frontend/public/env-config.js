// Runtime fallback when REACT_APP_CMS_URL was not set at build time (e.g. missing Vercel env var).
// Update CMS_URL to match your deployed Payload CMS.
window.__APP_CONFIG__ = {
  CMS_URL: 'https://sit-cms-admin-amgvp.vercel.app',
};
