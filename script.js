const CALL_TO_ACTION =
  'This should not happen, you can let the extension author know by opening an issue on the GitHub project: https://github.com/danielrozenberg/unget-pocket/issues/new';

function redirectToCanonicalUrl() {
  try {
    const nextData = JSON.parse(
      document.getElementById('__NEXT_DATA__')?.textContent ?? 'null',
    );
    const canonicalUrl =
      nextData?.props?.pageProps?.initialState?.syndicatedArticle?.articleData
        ?.publisherUrl;

    if (nextData === null) {
      console.warn(
        'Unget Pocket was unable to parse the metadata for this page. This is likely due to a change in the source code of pages in getpocket.com.',
        CALL_TO_ACTION,
      );
      return;
    }

    if (document.location.href === canonicalUrl) {
      console.info(
        'Unget Pocket did not redirect to the canonical URL because it is explicitly set to getpocket.com.',
        CALL_TO_ACTION,
      );
      return;
    }

    document.body.style.display = 'none'; // Avoid FOUC.
    document.location.replace(canonicalUrl);
  } catch (e) {
    console.exception(
      'Unget Pocket encountered a fatal error.',
      CALL_TO_ACTION,
      e,
    );
  }
}

redirectToCanonicalUrl();
