import {
  walden1,
  walden2,
  walden3,
  walden4,
  walden5,
  walden6,
  walden7,
  walden8,
} from '../assets/waldenImages'

// position controls which part of the image stays in view when cropped (object-fit: cover).
// Tweak per image so the subject stays centered — e.g. 'center', 'center top', '50% 35%'.
export const INTRO_FRAMES = [
  { src: walden1, caption: 'Walden Pond - Concord, Massachusetts', position: 'center' },
  { src: walden2, caption: 'The Cabin - Hand-built, $28.12 1/2', position: 'center' },
  { src: walden3, caption: 'The Woods - Solitude', position: 'center' },
  { src: walden4, caption: 'Walden - Winter', position: 'center' },
  { src: walden5, caption: "Thoreau's Journal - 1845", position: 'center' },
  { src: walden6, caption: 'Morning Reflections - Walden Shore', position: 'center' },
  { src: walden7, caption: 'Pine Trail - A Quiet Path', position: 'center' },
  { src: walden8, caption: 'Walden in Stillness', position: 'center' },
]
