import { imageController } from "@/services/http";
import { DateTime } from "luxon";

export const getFirebaseError = (error: string): string => {
  switch (true) {
    case error.includes("auth/user-not-found"):
      return "Enter a valid email address.";
    case error.includes("auth/wrong-password"):
      return "Invalid login password. Please try again.";
    case error.includes("auth/email-already-in-use"):
      return "User already exist!";
    default:
      return "Something went wrong. Please try again.";
  }
};

export const downloadImage = async (imageId: string) => {
  const res = await imageController.downloadImage(imageId, {
    format: "blob",
  });
  return URL.createObjectURL(new Blob([res.data]));
};

export const getFriendlyDiff = (postDate: Date): string => {
  let pastDateTime = DateTime.fromJSDate(postDate);

  let diff = pastDateTime
    .diffNow(["weeks", "days", "hours", "minutes", "seconds"])
    .toObject();

  let friendlyDiff = "";
  if (diff.weeks !== undefined && diff.weeks !== 0) {
    friendlyDiff = `${Math.abs(Math.round(diff.weeks))} w`;
  } else if (diff.days !== undefined && diff.days !== 0) {
    friendlyDiff = `${Math.abs(Math.round(diff.days))} d`;
  } else if (diff.hours !== undefined && diff.hours !== 0) {
    friendlyDiff = `${Math.abs(Math.round(diff.hours))} h`;
  } else if (diff.minutes !== undefined && diff.minutes !== 0) {
    friendlyDiff = `${Math.abs(Math.round(diff.minutes))} m`;
  } else {
    friendlyDiff = "just now";
  }

  return friendlyDiff;
};
