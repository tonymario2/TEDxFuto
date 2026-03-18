// This file is dynamically generated to map gallery categories to their respective images.

const eventMoments = import.meta.glob('/public/Pictures/Event Moments/*.{avif,jpg,jpeg,png}', { eager: true, import: 'default' });
const firesideChat = import.meta.glob('/public/Pictures/Fireside Chat & Other talks/*.{avif,jpg,jpeg,png}', { eager: true, import: 'default' });
const organizersMoments = import.meta.glob('/public/Pictures/Organizers moments/*.{avif,jpg,jpeg,png}', { eager: true, import: 'default' });
const speakerMoments = import.meta.glob('/public/Pictures/Speakers Moments/*.{avif,jpg,jpeg,png}', { eager: true, import: 'default' });

const mapToUrls = (glob: Record<string, any>) => 
  Object.keys(glob).map(path => path.replace('/public', ''));

const reorderSpeakers = (urls: string[]) => {
  if (urls.length < 5) return urls;
  const newUrls = [...urls];
  newUrls.pop(); // Remove the absolute last image
  const secondLast = newUrls.pop()!; // Take what was the second to last
  newUrls.splice(5, 0, secondLast); // Put it in the front-middle (6th position)
  return newUrls;
};

export const galleryData = {
  eventMoments: mapToUrls(eventMoments),
  firesideChat: mapToUrls(firesideChat),
  organizersMoments: mapToUrls(organizersMoments),
  speakerMoments: reorderSpeakers(mapToUrls(speakerMoments)),
};
