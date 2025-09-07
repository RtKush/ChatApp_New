// export function formatMessageTime(date) {
//   return new Date(date).toLocaleTimeString("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: false,
//   });
// }


// utils/formatMessageTime.js

export function formatMessageTime(date) {
  if (!date) return "";

  return new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // Use `true` for 12-hour format with AM/PM
  });
}

export function formatMessageDateTime(date) {
  if (!date) return "";

  return new Date(date).toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "short",
    year: "2-digit",
    hour12: false,
  });
}

// Optional: Relative time like "2 minutes ago"
export function getRelativeTime(date) {
  if (!date) return "";

  const now = new Date();
  const messageDate = new Date(date);
  const diff = Math.floor((now - messageDate) / 1000); // difference in seconds

  if (diff < 60) return `${diff} sec ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hr ago`;

  // If more than 1 day ago, return date + time
  return formatMessageDateTime(date);
}
