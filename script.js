try {
  const nextDataScriptElement = document.getElementById('__NEXT_DATA__');
  const nextDataJson = JSON.parse(nextDataScriptElement.textContent);
  const {publisherUrl} =
      nextDataJson.props.initialState.syndicatedArticle.articleData;
  if (publisherUrl) {
    document.body.style.display = 'none'; // Avoid FOUC.
    document.location.replace(publisherUrl);
  }
} catch (e) {
  console.exception('Unget Pocket could not redirect to origin page:', e);
}
