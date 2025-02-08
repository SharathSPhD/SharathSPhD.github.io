import { google } from 'googleapis'

export async function getPublications() {
  // Static data until Google Scholar API integration
  return [
    {
      title: "Computer Vision-Based Defect Detection and Classification in Manufacturing: A Review",
      authors: "Sathish, S., et al.",
      journal: "Journal of Manufacturing Systems",
      year: 2023,
      doi: "https://doi.org/...",
      citation: "https://scholar.google.com/..."
    },
    // Add more publications from Google Scholar
  ]
}