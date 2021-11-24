try {
  const {href: canonicalUrl} = document.querySelector('link[rel="canonical"]');
  if (canonicalUrl && document.location.href !== canonicalUrl) {
    document.body.style.display = 'none'; // Avoid FOUC.
    document.location.replace(canonicalUrl);
  }
} catch (e) {
  console.exception('Unget Pocket could not redirect to origin page:', e);
}
