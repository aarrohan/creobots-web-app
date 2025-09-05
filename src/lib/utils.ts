export function isValidYTLink(link: string): boolean {
  const videoRegex = /^https:\/\/youtu\.be\/([A-Za-z0-9_-]{11})/;
  const shortVideoRegex =
    /^https:\/\/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/;

  if (videoRegex.test(link) || shortVideoRegex.test(link)) {
    return true;
  }

  return false;
}

export function getYTThumbnailUrl(link: string): string {
  let videoId;

  if (link.includes("/shorts/")) {
    videoId = link.replace("https://youtube.com/shorts/", "");
  } else {
    videoId = link.replace("https://youtu.be/", "");
  }

  if (videoId.includes("?")) {
    videoId = videoId.split("?")[0];
  }

  const url = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return url;
}
