// Product catalog — all divisions
import { reconstructive } from './reconstructive';
import { spine } from './spine';
import { traumaExtremities } from './trauma-extremities';
import { cmf } from './cmf';
import { endoscopy } from './endoscopy';
import { healthcareSystems } from './healthcare-systems';
import { instruments } from './instruments';
import { medical } from './medical';
import { neurovascular } from './neurovascular';
import { performanceSolutions } from './performance-solutions';
import { sustainability } from './sustainability';

export const allProducts = [
  ...reconstructive,
  ...spine,
  ...traumaExtremities,
  ...cmf,
  ...endoscopy,
  ...healthcareSystems,
  ...instruments,
  ...medical,
  ...neurovascular,
  ...performanceSolutions,
  ...sustainability,
];

// Re-export individual divisions for targeted imports
export {
  reconstructive,
  spine,
  traumaExtremities,
  cmf,
  endoscopy,
  healthcareSystems,
  instruments,
  medical,
  neurovascular,
  performanceSolutions,
  sustainability,
};
