    function generateCode() {
      const url = document.getElementById('youtubeUrl').value.trim();
      const videoId = extractVideoId(url);
      
      if (videoId) {
        const iframeHtml = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        document.getElementById('iframeCode').value = iframeHtml;
      } else {
        alert('URL inválida! Por favor, insira um link válido do YouTube.');
      } 
    }

    function extractVideoId(url) {
      const regex = /(?:youtube\.com\/.*v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      const match = url.match(regex);
      return match ? match[1] : null;
    }

    function copyCode() {
      const textarea = document.getElementById('iframeCode');
      textarea.select();
      textarea.setSelectionRange(0, 99999);
      document.execCommand('copy');
      alert('Código copiado para a área de transferência!');
    }