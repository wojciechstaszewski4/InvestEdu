// src/data/map.js

// Moduł 1
import { module1Courses } from "./courses/module1";
import { module1Course1Chapters } from "./chapters/module1-course1";
import { module1Course2Chapters } from "./chapters/module1-course2";
import { module1Course3Chapters } from "./chapters/module1-course3";

// Moduł 2
import { module2Courses } from "./courses/module2";
import { module2Course1Chapters } from "./chapters/module2-course1";
import { module2Course2Chapters } from "./chapters/module2-course2";
import { module2Course3Chapters } from "./chapters/module2-course3";

// Moduł 3
import { module3Courses } from "./courses/module3";
import { module3Course1Chapters } from "./chapters/module3-course1";
import { module3Course2Chapters } from "./chapters/module3-course2";
import { module3Course3Chapters } from "./chapters/module3-course3";

// Moduł 4
import { module4Courses } from "./courses/module4";
import { module4Course1Chapters } from "./chapters/module4-course1";
import { module4Course2Chapters } from "./chapters/module4-course2";
import { module4Course3Chapters } from "./chapters/module4-course3";

// Moduł 5
import { module5Courses } from "./courses/module5";
import { module5Course1Chapters } from "./chapters/module5-course1";
import { module5Course2Chapters } from "./chapters/module5-course2";
import { module5Course3Chapters } from "./chapters/module5-course3";

// Mapa modułów
export const modulesMap = {
  1: {
    courses: module1Courses,
    chapters: {
      1: module1Course1Chapters,
      2: module1Course2Chapters,
      3: module1Course3Chapters,
    },
  },

  2: {
    courses: module2Courses,
    chapters: {
      1: module2Course1Chapters,
      2: module2Course2Chapters,
      3: module2Course3Chapters,
    },
  },

  3: {
    courses: module3Courses,
    chapters: {
      1: module3Course1Chapters,
      2: module3Course2Chapters,
      3: module3Course3Chapters,
    },
  },

  4: {
    courses: module4Courses,
    chapters: {
      1: module4Course1Chapters,
      2: module4Course2Chapters,
      3: module4Course3Chapters,
    },
  },

  5: {
    courses: module5Courses,
    chapters: {
      1: module5Course1Chapters,
      2: module5Course2Chapters,
      3: module5Course3Chapters,
    },
  },
};
