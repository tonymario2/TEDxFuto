// This file is dynamically generated to map gallery categories to their respective images.

const eventMoments = import.meta.glob('/public/Pictures/Event Moments/*.{avif,jpg,jpeg,png}', { eager: true, import: 'default' });
const firesideChat = import.meta.glob('/public/Pictures/Fireside Chat & Other talks/*.{avif,jpg,jpeg,png}', { eager: true, import: 'default' });
const organizersMoments = import.meta.glob('/public/Pictures/Organizers moments/*.{avif,jpg,jpeg,png}', { eager: true, import: 'default' });
const speakerMoments = import.meta.glob('/public/Pictures/Speakers Moments/*.{avif,jpg,jpeg,png}', { eager: true, import: 'default' });

const mapToUrls = (glob: Record<string, any>) => 
  Object.keys(glob).map(path => path.replace('/public', ''));

const reorderSpeakers = (urls: string[]) => {
  if (urls.length < 20) return urls;
  const newUrls = [...urls];
  const lastImg = newUrls.pop()!;
  newUrls.splice(19, 0, lastImg);
  return newUrls;
};

const reorderEvents = (urls: string[]) => {
  if (urls.length < 10) return urls;
  const newUrls = [...urls];
  
  // Last one (n) -> Middle
  const lastItem = newUrls.pop()!;
  const middleIndex = Math.floor(newUrls.length / 2);
  newUrls.splice(middleIndex, 0, lastItem);
  
  // Second to last (n-1) -> Towards the end (but not the very last)
  const secondLastItem = newUrls.pop()!;
  const nearEndIndex = newUrls.length - 2; // Position it 2 from the end
  newUrls.splice(nearEndIndex, 0, secondLastItem);
  
  return newUrls;
};

export const galleryData = {
  eventMoments: reorderEvents(mapToUrls(eventMoments)),
  firesideChat: mapToUrls(firesideChat),
  organizersMoments: mapToUrls(organizersMoments),
  speakerMoments: reorderSpeakers(mapToUrls(speakerMoments)),
};
