import * as codingFrameworks from './coding-frameworks';
import * as tooling from './tooling';
import * as cicdInfrastructureAutomation from './cicd-infrastructure-automation';
import * as platformServices from './platform-services';

/**
 * WARNING: Don't change the ordering manually here. Instead change the
 * quadrant number in the files! The ordering is as follows:
 *
 *  0 = Bottom Right
 *  1 = Bottom Left
 *  2 = Top Left
 *  3 = Top Right
 */
export const quadrants = [
  codingFrameworks,
  tooling,
  cicdInfrastructureAutomation,
  platformServices,
].sort((a, b) => a.quadrant - b.quadrant);

export const entries = [
  ...codingFrameworks.entries,
  ...tooling.entries,
  ...cicdInfrastructureAutomation.entries,
  ...platformServices.entries,
];